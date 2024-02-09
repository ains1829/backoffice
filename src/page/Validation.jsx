import { useEffect, useRef, useState } from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Tab from "../component/Tab";
import { Spinner } from "spin.js";
import { Https } from "../http/Http";
function Validation() {
    const [validationAnnonce, setAnnonce] = useState([])
    const [loading, setLoading] = useState(true);
    const spinnerContainerRef = useRef(null)
    useEffect(() => {
        const spinner = new Spinner().spin(spinnerContainerRef.current);
        setLoading(true);
        fetch(`${Https().liens}/api/adminmir/getAnnoncesNonValider?nbaffiche=100&numlinebeforefirst=0`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setAnnonce(data.data);
                    console.log(data.data)
                    setLoading(false)
                    spinner.stop();
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
            <div ref={spinnerContainerRef}>
                {
                    loading ? ('') : (
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
                        </div>)
                }
            </div>
        </div>
    )
}
export default Validation