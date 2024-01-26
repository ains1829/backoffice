import { useNavigate } from 'react-router-dom'
import logo from '../assets/image/1-removebg-preview.png'
import '../assets/scss/login.css'
function Login() {
    const navigate = useNavigate();
    const handle = async (event) => {
        event.preventDefault()
        navigate('/stat')
    }
    return (
        <div className="login">
            <form onSubmit={handle}>
                <img src={logo} alt="" />
                <figcaption>Surement vous etes l'administateur</figcaption>
                <div>
                    <label htmlFor="">Email : </label>
                    <input type="email" name="" id="" />
                </div>
                <div>
                    <label> Password  : </label>
                    <input type="password" value="" />
                </div>
                <div>
                    <input type="submit" value="Connexion" />
                </div>
            </form>
        </div>
    )
}
export default Login