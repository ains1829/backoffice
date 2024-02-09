import { useNavigate } from 'react-router-dom'
import logo from '../assets/image/1-removebg-preview.png'
import '../assets/scss/login.css'
import axios from 'axios';
import { useState } from 'react';
import { Https } from '../http/Http';
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('mirado@gmail.com');
    const [password, setPassword] = useState('1234');
    const hanlde_email = (e) => {
        setEmail(e.target.value);
    }
    const handle_password = (e) => {
        setPassword(e.target.value);
    }
    const handle = async (event) => {
        event.preventDefault()
        axios
            .post(`${Https().liens}/api/adminmir/logAdmin?mail=${email}&pwd=${password}`)
            .then((response) => {
                if (response.data.status === 200) {
                    navigate('/stat')
                } else {
                    alert('Error: ' + response.data.message)
                }
            })
    }

    return (
        <div className="login">
            <form onSubmit={handle}>
                <img src={logo} alt="..." />
                <figcaption>Surement vous etes l'administateur</figcaption>
                <div>
                    <label >Email : </label>
                    <input type="email" onChange={hanlde_email} value={email} />
                </div>
                <div>
                    <label> Password  : </label>
                    <input type="password" onChange={handle_password} value={password} />
                </div>
                <div>
                    <input type="submit" value="Connexion" />
                </div>
            </form>
        </div>
    )
}
export default Login