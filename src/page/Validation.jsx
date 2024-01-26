// import { useEffect, useState } from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Tab from "../component/Tab";
function Validation() {
    // const [validationAnnonce, setAnnonce] = useState([])
    // useEffect(() => {
    //     fetch('http://172.10.15.130:3000/api/adminmir/getAnnoncesNonValider?nbaffiche=4&numlinebeforefirst=0')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setAnnonce(data);
    //         })
    //         .catch(error => {
    //             console.log("errorr")
    //         });
    // }, [])
    return (
        <div>
            <Header />
            <div className="menu">
                <Menu />
            </div>
            <div className="content-validation">
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Tab />
            </div>
        </div>
    )
}
export default Validation