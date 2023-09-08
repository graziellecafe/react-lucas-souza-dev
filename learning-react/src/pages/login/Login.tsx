
import { useState, useEffect } from "react";
export const Login = () => { 
const [email, setEmail] = useState(''); 
const [password, setPassword] = useState(''); 


    const handleEntrar = () => {
        console.log(email); 
        console.log(password); 
    }

    useEffect(() => {
        console.log(email); 
    },[email]);

    useEffect(() => {
        console.log(password); 
    },[password]);

    return (
    <div>
        <form>

            <label>
                <span> Email </span>
                <input value = {email} onChange={e => setEmail(e.target.value)} />
            </label>

            <label>
                <span> Senha </span>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>

            <button type="button" onClick={handleEntrar}>
                Entrar
            </button>

        </form>
    </div>
    )
}