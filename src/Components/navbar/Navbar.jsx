import logo from "../../assets/logo.png";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import "./Navbar.scss";
import user from "../../assets/user.avif"
function Navbar () {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" className="logo-img"/>
            </div>
            <div className="icons">
                <div className="notification">
                    <NotificationsIcon />
                    <span className="badge">4</span>
                </div>
                <div className="user">
                    <img className="useravatar" src={user} alt="user" />
                    <span className="username">Thu Rein Soe</span>
                </div>
                <div className="setting"> <SettingsIcon /></div>
               
            </div>
        </div>
    )
}

export default Navbar;
