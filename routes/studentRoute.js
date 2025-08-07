
const express = require("express");
const Router=express.Router();
const studentController=require("../controllers/studentControllers")
const app = express();

Router.get("/index",studentController.index);
Router.get("/index/:id",studentController.show);
Router.post("/store",studentController.store);
Router.put("/update/:id",studentController.update);
Router.delete("/delete/:id",studentController.delete);

module.exports=Router;

