import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/authContext";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () =>{
        if(email && password){
            const isLogged = await auth.signin(email, password);
            if(isLogged){
                navigate('/');
            }else{
                alert("email ou senha invalida");
            }
        }
    }
        
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder=" email "
            />
            <input type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder=" password "
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}