import { useState } from "react"
import "./style.scss"
import { fetchLogin, userProfile } from "../../data/data";
import { useDispatch } from "react-redux";
import { setLogin, setToken, setUser } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";



function LoginForm () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorLoginMessage, setErrorLoginMessage] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function onSubmit(e) {
        e.preventDefault();
        try {
            const response =  await fetchLogin({
                email: email,
                password: password,
            })
            console.log(response);
            console.log(email)
            if (response.status === 200 ) {
                dispatch(setLogin(true));
                dispatch(setToken(response.body.token))
                const profile = await userProfile(response.body.token)
                const data = await profile.body
                console.log(data)
                dispatch(setUser(data))
                navigate("/userLog")
            } 

            if (response.status === 400 ) {
                setErrorLoginMessage(true)
                navigate("/login")
            }
            
        }
        catch(error){
            console.log(error)
        }
        
    }

    let errorMessage = null;
    if (errorLoginMessage === true) {
        errorMessage = <p style={{color: "red"}}>Erreur dans l'identifiants ou le mot de passe !</p>
    }

    return (
       <form onSubmit={onSubmit}>
        <div className="input-wrapper">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" 
            onChange={(e) => setEmail(e.target.value)} 
            required
            />
        </div>
        <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className="input-remember">
            <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" id="remember-me"  /> 
        </div>
        <button className="sign-in-button">Sign In</button>
        {errorMessage}
       </form>
    )
}

export default LoginForm