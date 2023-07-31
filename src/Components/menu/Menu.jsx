import "./Menu.scss";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
function Menu () {
    return (
        <div className="menu">
            <div className="item">
                <div className="title">Main</div>
                <Link className="link" to="/"><HomeOutlinedIcon /><span className="linkName">Homepage</span></Link>
                <Link className="link" to="/users"><PeopleAltOutlinedIcon /><span className="linkName">Profile</span></Link>
            </div>
            <div className="item">
                <div className="title">Lists</div>
                <Link className="link" to="/customers"><PeopleAltOutlinedIcon /><span className="linkName">Customers</span></Link>
                <Link className="link" to="/products"><ProductionQuantityLimitsOutlinedIcon/><span className="linkName">Producsts</span></Link>
                <Link className="link" to="/orders"><ListAltOutlinedIcon/><span className="linkName">Orders</span></Link>
            </div>
            
        </div>
    )
}

export default Menu;
