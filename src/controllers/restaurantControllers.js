import restaurantModel from "../models/restaurantModel";
import handleCRUD from "../utils/handleCRUD";

 const createRestaurant = handleCRUD.createOne(restaurantModel);
 const getOneRestaurant = handleCRUD.getOneById(restaurantModel);
 const getAllRestaurants = handleCRUD.getAll(restaurantModel);
 const updateRestaurant = handleCRUD.updateOneById(restaurantModel);
 const deleteRestaurant = handleCRUD.deleteOneById(restaurantModel);

 export default {createRestaurant,getOneRestaurant,getAllRestaurants,updateRestaurant,deleteRestaurant}