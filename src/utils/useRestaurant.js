import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
    const [restaurantInfo,setRestaurantInfo] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL+resId);
        const jsonData = await data.json();
        console.log(jsonData);
        setRestaurantInfo(jsonData.data);
      }
      return restaurantInfo;
}

export default useRestaurant;