import Dashboard from "../component/Dashboard"
import Header from "../component/Header"
import Menu from "../component/Menu"
import '../assets/scss/Dashboard.css'
import OtherDashboard from "../component/OtherDashboard";
import React, { useState } from "react";
function Statistique() {
    const [selectedOption, setSelectedOption] = useState('0');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [date, setdatefalse] = useState(true);
    const Verifying = (event) => {
        event.preventDefault();
        const input = document.querySelector('.date_')
        var yearString = input.value;
        var isValid = true;

        for (var i = 0; i < yearString.length; i++) {
            if (isNaN(parseInt(yearString[i]))) {
                isValid = false;
                break;
            }
        }

        if (isValid && yearString.length === 4) {
            setdatefalse(true)
        } else {
            setdatefalse(false)
        }
    }
    return (
        <div>
            <Header />
            <div className="menu">
                <Menu />
            </div>
            <div className="dash">
                <div className="dash-unite">
                    <div className="client">
                        <span>Client dans le site</span>
                        <span className="number">450</span>
                    </div>
                    <div className="voiture">
                        <span>voiture dans le site</span>
                        <span className="number">1000</span>
                    </div>
                    <div className="argent">
                        <span>Votre argent</span>
                        <span className="number">450000 ar</span>
                    </div>
                </div>
                <div className="select-dash">
                    <select name="choix-stat" value={selectedOption} onChange={handleSelectChange}>
                        <option value="0">Marque le plus vendu</option>
                        <option value="1">Province qui a plus d'achat </option>
                    </select>
                    <div className="date">
                        <input type="text" className={`date_   ${date === true ? '' : 'red'}`} name="annee" placeholder="votre annee YYYY " />
                        <input onClick={Verifying} type="submit" value="Valider" />
                    </div>
                </div>
                <div className="stat-dash">
                    {
                        selectedOption === "0" ?
                            <Dashboard />
                            :
                            <OtherDashboard />
                    }
                </div>
            </div>
        </div>
    )
}
export default Statistique