import Dashboard from "../component/Dashboard"
import Header from "../component/Header"
import Menu from "../component/Menu"
import '../assets/scss/Dashboard.css'
import OtherDashboard from "../component/OtherDashboard";
import React, { useState, useEffect } from "react";
import '../assets/fontawesome-5/css/all.min.css'
import { Https } from "../http/Http";
function Statistique() {
    var dates_encours = new Date();
    const annee = dates_encours.getFullYear()
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
            const encours = document.querySelector('.encours')
            encours.innerHTML = `Recheche pour ${yearString}`
            fetch(`${Https().liens}/api/statistic/getstatisticmoney?annee=${yearString}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.status === 200) {
                        setMoney_site(data);
                    } else {
                        alert(data.message + "  status : " + data.status)
                    }
                })
                .catch(error => {
                    console.log("errorr : " + error)
                });
            fetch(`${Https().liens}/api/statistic/getstatisticvoiture?annee=${yearString}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.status === 200) {
                        setVoiture_Site(data);
                    } else {
                        alert(data.message + "  status : " + data.status)
                    }
                })
                .catch(error => {
                    console.log("errorr : " + error)
                });
            fetch(`${Https().liens}/api/statistic/getstatisticmarque?annee=${yearString}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.status === 200) {
                        setdata_marque(data);
                    } else {
                        alert(data.message + "  status : " + data.status)
                    }
                })
                .catch(error => {
                    console.log("errorr : " + error)
                });
            fetch(`${Https().liens}/api/statistic/getstatisticlieu?annee=${yearString}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.status === 200) {
                        setdata_province(data);
                        console.log(data)
                    } else {
                        alert(data.message + "  status : " + data.status)
                    }
                })
                .catch(error => {
                    console.log("errorr : " + error)
                });
        } else {
            setdatefalse(false)
        }
    }
    const [client_site, setClient_site] = useState({})
    useEffect(() => {
        fetch(`${Https().liens}/api/statistic/getstatisticusercount?annee=${annee}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setClient_site(data);
                } else {
                    alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [annee])
    const [money_site, setMoney_site] = useState({})
    useEffect(() => {
        fetch(`${Https().liens}/api/statistic/getstatisticmoney?annee=${annee}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setMoney_site(data);
                } else {
                    alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [annee])
    const [voiture_site, setVoiture_Site] = useState({})
    useEffect(() => {
        fetch(`${Https().liens}/api/statistic/getstatisticvoiture?annee=${annee}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setVoiture_Site(data);
                } else {
                    alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [annee])
    const [data_marque, setdata_marque] = useState({})
    useEffect(() => {
        fetch(`${Https().liens}/api/statistic/getstatisticmarque?annee=${annee}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setdata_marque(data);
                } else {
                    alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [annee])
    const [data_province, setdata_province] = useState({})
    useEffect(() => {
        fetch(`${Https().liens}/api/statistic/getstatisticlieu?annee=${annee}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setdata_province(data);
                    console.log(data)
                } else {
                    alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [annee])
    return (
        <div>
            <Header />
            <div className="menu">
                <Menu />
            </div>
            <div className="dash">
                <div className="filtre">
                    <span className="encours"> Annee en cours {annee}</span>
                    <div className="date">
                        <input type="text" className={`date_   ${date === true ? '' : 'red'}`} name="annee" placeholder="votre annee YYYY " />
                        <label htmlFor="_annee"><i className="fas fa-search"></i> <span>Show</span> </label>
                        <input id="_annee" onClick={Verifying} type="submit" value="Valider" />
                    </div>
                </div>
                <div className="dash-unite">
                    <div className="client">
                        <span> Nombre utilisateur dans le site</span>
                        {
                            client_site.data &&
                            <>
                                <span className="number">{client_site.data[0].nombre_users}</span>
                            </>
                        }
                    </div>
                    <div className="voiture">
                        <span>Nombre des voitures sur le site</span>
                        {
                            voiture_site.data &&
                            <>
                                <span className="number">{voiture_site.data[0].nombre_voiture}</span>
                            </>
                        }
                    </div>
                    <div className="argent">
                        <span>Votre argent</span>
                        {
                            money_site.data &&
                            <>
                                <span className="number">{money_site.data[0].montant_site} ar</span>
                            </>
                        }
                    </div>
                </div>
                <div className="select-dash">
                    <select name="choix-stat" value={selectedOption} onChange={handleSelectChange}>
                        <option value="0">Marque le plus vendu</option>
                        <option value="1">Province qui a plus d'achat </option>
                    </select>
                </div>
                <div className="stat-dash">
                    {
                        selectedOption === "0" ?
                            data_marque.data &&
                            <>
                                <Dashboard data={data_marque.data} />
                            </>
                            :
                            data_province.data &&
                            <>
                                <OtherDashboard data={data_province.data} />
                            </>
                    }
                </div>
            </div>
        </div>
    )
}
export default Statistique