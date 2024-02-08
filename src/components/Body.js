import RestrauntCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";


const Body = () => {
// use state takes the default parameter as an input and gives an array that can be destructured. First one in the list
// is the modified version of the default variable and second one is a function that sets the new values and binds to UI. So
// if React Reconciliation algorith will detect the diff, update the dom tree and render it on to the UI.
// NEVER EVER CREATE STATE VARIABLES INSIDE FUNCTIONS LOOPS AND CONDITIONALS.
let [RESTAURANT_LIST, setRESTAURANT_LIST]= useState([]);
let [searchText, setSearchText]= useState("");
let [filteredResList, setFilteredResList] = useState([]);

//   takes callback function and dependency array
useEffect(() => {
    // API call
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRESTAURANT_LIST(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  console.log("render");

  console.log(RESTAURANT_LIST);
  if(RESTAURANT_LIST.length===0){
    return <Shimmer/>
  }
    return (
<div className="body">
        <div className="filter">
            <input type="text" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
                console.log(searchText);
            }}></input>
            <button className="search" onClick={()=>{
                // update the searchtext such that this updates
                setFilteredResList(RESTAURANT_LIST.filter((res) => {
                    // Ensure we have a cuisines array to work with and searchText is defined
                    if (res.info.cuisines && searchText) {
                      // Normalize searchText for comparison
                      const normalizedSearchText = searchText.toLowerCase();
                      // Check if any cuisine includes the searchText
                      return res.info.cuisines.some(cuisine => 
                        cuisine.toLowerCase().includes(normalizedSearchText)
                      );
                    }
                    return false;
                  }));                  
                }}>search</button>
            <button className="filter-btn" onClick={()=>{
                console.log("Before filtering:", RESTAURANT_LIST);
                const filtered_list=RESTAURANT_LIST.filter(function logic(res){
                    return res.info.avgRating>4.3
                });
                console.log(filtered_list);
                setFilteredResList(filtered_list);}
                }>Top Rated Restaurants</button>
        </div>
        <div className="restaurant-list">
        {filteredResList.map((restaurant) => {
          return <RestrauntCard {...restaurant.info} key={restaurant.info.id} />;
        })}
        </div>
</div>
    );
  };

  export default Body; 