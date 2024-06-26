import { Navigate } from "react-router-dom";

export default function Logout() {
    document.cookie = `sessionId=; Max-Age=-99999999;`;
    document.cookie = `sessionAuth=; Max-Age=-99999999;`;
    return <Navigate to="/" />;
}