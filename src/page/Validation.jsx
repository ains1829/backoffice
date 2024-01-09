import Header from "../component/Header";
import Menu from "../component/Menu";
import Tab from "../component/Tab";

function Validation(){
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