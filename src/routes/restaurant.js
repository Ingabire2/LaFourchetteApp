import { Router } from 'express';
import restaurantController from '../controllers/restaurantControllers';




// router.route('/')
// .post(restaurantController.createprofile)
// .get(restaurantController.getOneprofile)


const route = Router();
route.get("/",restaurantController.getAllRestaurants);
route
.route("/")
.post(restaurantController.createRestaurant);



route
.route("/:id")
.get(restaurantController.getOneRestaurant)
.patch(restaurantController.updateRestaurant)
.delete( restaurantController.deleteRestaurant);



export default route;