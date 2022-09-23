import Express from "express";
import autorController from "../controllers/autoresController.js";

const router = Express.Router();

router
  .get("/autores", autorController.listarAutores)
  .get("/autores/:id", autorController.listarAutoresPorID)
  .post("/autores", autorController.cadastrarAutor)
  .put("/autores/:id", autorController.atualizarAutor)
  .delete("/autores/:id", autorController.exluirAutor);

export default router;
