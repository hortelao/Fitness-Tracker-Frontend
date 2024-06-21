import React from "react";
import axios from "axios";
import bcrypt from 'bcryptjs';
function LoginForm() {

    const [userData, setUserData] = React.useState({
        email: "",
        password: "",
        token: "testing"
    });

    const [error, setError] = React.useState(false);

    function handleChanges(event) {
        setError(false)
        const { name, value } = event.target;

        setUserData((prevValues) => {
            return {
                ...prevValues,
                [name]: value
            }
        })
    }


    async function handleLogin() {
        try {
            const result = await axios.post(
                process.env.REACT_APP_API_URL + "/auth-user",
                userData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    withCredentials: true
                }
            );

            //Save id in cookie
            const userId = result.data[0].id;
            document.cookie = `sessionId=${userId}`;
        } catch (err) {
            setError(true);
            console.log(err);
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log('Error', err.message);
            }
        }
    }

    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" >
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p class="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div data-mdb-input-init class="form-outline form-white mb-4">
                                        <input type="email" name="email" id="typeEmailX" class="form-control form-control-lg" onChange={handleChanges} />
                                        <label class="form-label" for="typeEmailX">Email</label>
                                    </div>

                                    <div data-mdb-input-init class="form-outline form-white mb-4">
                                        <input type="password" name="password" id="typePasswordX" class="form-control form-control-lg" onChange={handleChanges} />
                                        <label class="form-label" for="typePasswordX">Password</label>
                                    </div>

                                    <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                                    
                                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleLogin}>Login</button>
                                    <p style={{ color: 'red' }}>{error ? "Email or Password Incorrect" : null}</p>

                                    <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                                    </div>

                                </div>

                                <div>
                                    <p class="mb-0">Don't have an account? <a href="/sign-up" class="text-white-50 fw-bold">Sign Up</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginForm;