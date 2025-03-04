import { useState } from "react";

export default function Login(){
    //const [ loginMessage, setLoginMessage ] = useState();
    const [ userEmail, setUserEmail ] = useState();
    const [ pass, setPass ] = useState();

    // function navHome(){
    //     Navigate('/home')
    // }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const res = await fetch("/api/login", {
    //         method: "POST",
    //         body: JSON.stringify({ email: userEmail, password: pass}),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //         console.log(res)
    //         navHome();
                
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ email: userEmail, password: pass}),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res);
    };

    return(
        <div className="container">
            <h1>
                Login
            </h1>
            <form onSubmit={handleSubmit}>   
                <div className="loginSection">
                    <h4>Email</h4>
                    <input type="email" 
                        placeholder="Enter Email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <br /><br />
                    <h4>Password</h4>
                    <input type="password" 
                        placeholder="Enter Password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <br /><br />
                    <p></p>
                    
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}