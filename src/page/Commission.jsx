import Header from "../component/Header";
import Menu from "../component/Menu";
import '../assets/scss/style.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { Https } from "../http/Http";
function Commission() {
    const change_commission = (e) => {
        e.preventDefault();
        const input_text = document.querySelector('input[type="text"]');
        const percent = document.querySelector('.percent');
        axios
            .get(`${Https().liens}/api/adminmir/changetauxcommision?tauxpourcent=${input_text.value}`)
            .then((response) => {
                if (response.data.status === 200) {
                    percent.innerHTML = input_text.value + " %"
                } else {
                    alert('Error: ' + response.data.status)
                }
            })
    }
    const [commision, setCommision] = useState({});
    useEffect(() => {
        fetch(`${Https().liens}/api/adminmir/getRegletauxCommission`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setCommision(data.data);
                    console.log(data.data)
                } else {
                    alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [])
    return (
        <div>
            <Header />
            <div className="menu">
                <Menu />
            </div>
            <div className="commission">
                <div>
                    <label>Commission</label>
                    <input type="text" placeholder="en pourcentage" required />
                </div>
                <div>
                    <input onClick={change_commission} type="submit" value="Commision" />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Commisions</th>
                            <th>pourcentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{commision.coderegle}</td>
                            <td className="percent">{commision.tauxpourcent} %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Commission