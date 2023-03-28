import Express from "express";
import router from "./router/router";

const app = Express();

app.use(router)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`lancement du server sur le port ${PORT}`))

