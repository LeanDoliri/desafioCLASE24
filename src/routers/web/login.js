import { Router } from 'express'

const loginWebRouter = new Router()

loginWebRouter.get('/', (req, res) => {
    res.redirect("login");
})

loginWebRouter.get('/login', (req, res) => {
    res.sendFile("login.html", { root: "public" });
})

loginWebRouter.get('/logout', (req, res) => {
    if (!req.session) {
        res.redirect("login");
      } else {
        res.render("logout.ejs", { nombre: req.session.user.nombre });
      }
})


loginWebRouter.post('/login', (req, res) => {
    const nombre = req.body;

    req.session.user = nombre;
  
    res.redirect("/home");
})



export default loginWebRouter