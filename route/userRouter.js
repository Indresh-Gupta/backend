import {create, getAll, getOne, update, deleteUser} from "../Controller/userController.js";

import express from 'express';


const route=express.Router();

route.post("/create", create);
route.get("/getAll", getAll);
route.get("/getOne/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

export default route;