const {Router} = require("express");
const helloRouter = Router();
const { readArsenal, addArsenal,  updateArsenal, deleteArsenal } = require("../controllers");

helloRouter.get("/arsenal", readArsenal);
helloRouter.post("/arsenal", addArsenal);
helloRouter.put("/arsenal", updateArsenal);
helloRouter.patch("/arsenal", updateArsenal);
helloRouter.delete("/arsenal", deleteArsenal);


module.exports = helloRouter;