import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";



function Dashboard() {

    const [isAuthenticated, setIsAuthenticated] = React.useState(true);
    const [userData, setUserData] = React.useState({
        fName: "",
        lName: "",
        email: ""
    });

    React.useEffect(() => {
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        async function checkToken() {
            try {
                const result = await axios.get(
                    process.env.REACT_APP_API_URL + "/check-token/" + getCookie("sessionId"),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        withCredentials: true
                    }
                );

                const token = result.data[0].token;
                const resultData = result.data[0];
                if (token !== getCookie("sessionAuth")) {
                    document.cookie = `sessionId=; Max-Age=-99999999;`;
                    document.cookie = `sessionAuth=; Max-Age=-99999999;`;
                } else {
                    setUserData({
                        fName: resultData.firstname,
                        lName: resultData.lastname,
                        email: resultData.email
                    })
                }
            } catch (err) {
                console.log(err);
            }
        }

        if (getCookie("sessionId")) {
            checkToken()
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false)
        }
    }, []);





    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <div class="d-flex" id="wrapper">

            <Sidebar />


            <div id="page-content-wrapper">

                <Navbar userName={userData.fName + " " + userData.lName} />

                <div class="container text-center padding-top">
                    <div class="row">

                        <Card title="Workouts this year" typeText="text-primary" value="0" />
                        <Card title="Hours trained this year" typeText="text-warning" value="0" />
                        <Card title="Workouts this month" typeText="text-success" value="0" />
                        <Card title="Hours trained this month" typeText="text-danger" value="0" />
                        

                    </div>

                </div>
            </div>

        </div>


    );
}


export default Dashboard;