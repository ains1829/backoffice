import Dashboard from "../component/Dashboard"
import Header from "../component/Header"
import Menu from "../component/Menu"
import '../assets/scss/Dashboard.css'
import OtherDashboard from "../component/OtherDashboard";
import React , {useState} from "react";
function Statistique(){
    const [selectedOption, setSelectedOption] = useState('0');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };
    return(
        <div>
            <Header />
            <div className="menu">
                <Menu />
            </div>
            <div className="dash">
                <div className="select-dash">
                    <select name="choix-stat" value={selectedOption} onChange={handleSelectChange}>
                        <option value="0">Marque le plus vendu</option>
                        <option value="1">Top vendeur</option>
                    </select>
                </div>
                <div className="stat-dash">
                    {
                        selectedOption === "0" ? 
                        <Dashboard />
                        :
                        <OtherDashboard/>
                    }
                </div>
            </div>
        </div>
    )
}
export default Statistique