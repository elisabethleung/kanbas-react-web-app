import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
function Account() {
    const { id } = useParams();
    const { username } = useParams();

    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const save = async () => {
        await client.updateUser(account);
    };
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const findUserByUsername= async (username) => {
        const user = await client.findUserByUsername(username);
        setAccount(user);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/signin");
    };


    useEffect(() => {
        if (username) {
            findUserByUsername(username);
        } else {
            fetchAccount();
        }
    }, []);

    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input value={account.password}
                           onChange={(e) => setAccount({
                               ...account,
                               password: e.target.value
                           })} />
                    <input value={account.firstName}
                           onChange={(e) => setAccount({
                               ...account,
                               firstName: e.target.value
                           })} />
                    <input value={account.lastName}
                           onChange={(e) => setAccount({
                               ...account,
                               lastName: e.target.value
                           })} />
                    <input value={account.dob}
                           onChange={(e) => setAccount({
                               ...account,
                               dob: e.target.value
                           })} />
                    <input value={account.email}
                           onChange={(e) => setAccount({
                               ...account,
                               email: e.target.value
                           })} />
                    <select onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <br/><br/>
                    <Link onClick={save} className="btn btn-secondary w-100">
                        Save
                    </Link>
                    <Button onClick={signout} className="btn btn-danger w-100">
                        Signout
                    </Button>


                    <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            )}
        </div>
    );
}
export default Account;