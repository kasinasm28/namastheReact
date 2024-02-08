import { LOGO_URL } from "../utils/constants";
import { useState , useEffect} from "react";
const Header= () =>{
    const [btnName, setBtnName] = useState("Login");
    console.log("Header Render");
    // if No dependency array=>use effect is called on every render
    // if there is an empty dependency array=[]=> useEffect is called on initial render and just once
    useEffect(()=>{
        console.log("Use effect is called on every render")
    }, [btnName]);


    return (
        <div className="header">
           <div id="logo-container">
           <img className="logo" src={LOGO_URL} />
           </div>
            <div className="navitems">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li> Cart</li>
                <button className="btn"onClick={()=>{
                    btnName==="Login"? setBtnName("Logout"):setBtnName("Login");
                }}>{btnName}</button>
            </ul>
           </div>
        </div>
    );
}
export default Header