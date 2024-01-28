import { useEffect, useState } from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Tab from "../component/Tab";
function Validation() {
    const [validationAnnonce, setAnnonce] = useState([])
    useEffect(() => {
        fetch('https://voitureoccasion-production-baee.up.railway.app/api/adminmir/getAnnoncesNonValider?nbaffiche=100&numlinebeforefirst=0')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setAnnonce(data.data);
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
            <div className="content-validation">
                {
                    validationAnnonce && validationAnnonce.map((elemennt, item) => (
                        <Tab key={item} data={elemennt} />
                    ))
                }
            </div>
        </div>
    )
}
export default Validation