import Express from "express";
import livroController from "../controllers/livrosController.js";

const router = Express.Router();

router
  .get("/livros", livroController.listarLivros)
  .get("/livros/busca", livroController.listarLivrosPorEditora)
  .get("/livros/:id", livroController.listarLivrosPorID)
  .post("/livros", livroController.cadastrarLivro)
  .put("/livros/:id", livroController.atualizarLivro)
  .delete("/livros/:id", livroController.exluirLivro);

export default router;
