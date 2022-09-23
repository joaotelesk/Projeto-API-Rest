import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://admin:<senha>@alura.hnrtbyf.mongodb.net/alura-livros"
);
let db = mongoose.connection;
export default db;
