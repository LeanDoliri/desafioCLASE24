import { Router } from "express";

const productosWebRouter = new Router();

productosWebRouter.get("/home", (req, res) => {
  if (!req.session.user) {
    res.redirect("login");
  } else {
    res.render("home.ejs", { nombre: req.session.user.nombre });
  }
});

export default productosWebRouter;
