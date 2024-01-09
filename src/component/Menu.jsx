import { Link } from 'react-router-dom';
import '../assets/scss/menu.css'
function Menu(){
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.querySelector(".openbtn").style.display = "none";
    }
    
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.querySelector(".openbtn").style.display = "block";
    }
    return(
        <div className="content-menu">
            <div id="mySidebar" className="sidebar">
                <Link className="closebtn" onClick={closeNav}>×</Link>
                <Link href="#">Statistique</Link>
                <Link href="#">Annonce</Link>
                <Link href="#">Service</Link>
                <Link href="#">Log Out</Link>
            </div>
            <div id="main">
                <button className="openbtn" onClick={openNav}>☰ </button>  
            </div>
        </div>
    )
}
export default Menu