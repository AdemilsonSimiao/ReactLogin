import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/authContext";

export const Private = () => {
    const auth = useContext(AuthContext);
    return (
        <div>
            <h2>Private</h2>
           <p>Seja bem vindo</p>
           {auth.user?.name}        
        </div>
    );
}