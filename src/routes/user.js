import { Router } from 'express';
import userControllers from '../controllers/userControllers';




const route = Router();



route 
 .route("/")
 .post(userControllers.signup);


//  .get(userControllers.login);

route
.route("/")
.get(userControllers.getAllUsers);

route
 .route("/:id")
 .patch(userControllers.updateUser)
 .delete(userControllers.deleteUser)
 .get(userControllers.getOne);

export default route;
