import { useNavigate } from 'react-router-dom'
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
                <span>Admin</span>
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