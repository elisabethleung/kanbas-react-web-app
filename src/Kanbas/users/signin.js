import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/Account");
    };
    return (
        <div>
            <h1>Signin</h1>
            <label htmlFor="signin-user" className="input-box"> Username:</label>
            <input name="signin-user" value={credentials.username}
                   onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
            <br/>
            <label htmlFor="signin-pass"> Password:</label>
            <input name="signin-pass" value={credentials.password}
                   onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            <br/><br/>
            <Button className="btn-secondary" onClick={signin}>Sign in </Button>
        </div>
    );
}
export default Signin;