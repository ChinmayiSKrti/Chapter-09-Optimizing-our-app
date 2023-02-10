import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  //   console.log(params);

  const restaurantInfo = useRestaurant(params?.id);

  console.log("------------restaurantInfo");
  console.log(restaurantInfo);

  return (!restaurantInfo) ? <Shimmer/> : (
    <div className="menu">
      <div>
        <h1>Restaurant id : {params?.id}</h1>
        <h2>{restaurantInfo?.name}</h2>
        <img src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} />
        <h3>{restaurantInfo?.area}</h3>
        <h3>{restaurantInfo?.city}</h3>
        <h3>{restaurantInfo?.avgRating} stars</h3>
        <h3>{restaurantInfo?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurantInfo?.menu?.items)?.map((item) => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
