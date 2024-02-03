import React from "react";
import ReactDOM from "react-dom/client";

const Header= () =>{
    return (
        <div className="header">
           <div id="logo-container">
           <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
           </div>
            <div className="navitems">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li> Cart</li>
            </ul>
           </div>
        </div>
    );
}
const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img className="res-logo-class" alt="Restaurant logo" src="https://www.huahinindianrestaurant.com/wp-content/uploads/2020/03/Chicken-Biryani.jpg"/>
            <h3>Meghana Foods</h3>
            <div className="rating">
                {/* Placeholder for rating, implement as needed */}
                ⭐⭐⭐⭐☆
            </div>
            <div className="details">
                {/* Placeholder for additional details */}
                Indian Cuisine | $$ | 4.5 star rating
            </div>
        </div>
    );
}

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restro-container">
              <RestaurantCard/>
              <RestaurantCard/>
              <RestaurantCard/>
              <RestaurantCard/>
              <RestaurantCard/>
              <RestaurantCard/>
            </div>
    </div>
    );
}
const AppLayout = () =>{
     return (
        <div id="app">
            <Header/>
            <Body/>
        </div>
     );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
