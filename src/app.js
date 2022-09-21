import Express from "express";
const app = Express();
app.use(Express.json());

const livros = [
  {
    id: 1,
    titulo: "Senhor dos Aneis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
  {
    id: 3,
    titulo: "Os aneis de poder",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("curso de Node");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});
app.get("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro foi cadastrado com sucesso");
});
app.put("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.json(`livro ${id} removido com sucesso`);
});

function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}
export default app;
