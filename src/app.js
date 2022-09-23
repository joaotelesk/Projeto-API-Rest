import Express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("erro", console.log.bind(console, "erro de conexão"));
db.once("open", () => {
  console.log("conexao com banco feita com sucesso");
});

const app = Express();
app.use(Express.json());

routes(app);

export default app;
