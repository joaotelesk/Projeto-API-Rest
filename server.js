const http = require("http");
const port = 3000;

const rotas = {
  "/": "curso de Node",
  "/livros": "Entrei na pag de livros",
  "/autores": "Listagem de autores",
  "/editora": "pag de editores",
  "/sobre": "informacao sobre o projeto",
};
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end(rotas[req.url]);
});
server.listen(port, () =>
  console.log(`servidor escutando em http://localhost:${port}`)
);
