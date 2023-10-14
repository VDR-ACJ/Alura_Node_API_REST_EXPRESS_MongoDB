import mongoose from "mongoose";

mongoose.connect("mongodb+srv://valdeir014:YteZzx5Ggc9SZreN@clusteraluranodejs.nbele7o.mongodb.net/alura-node");
//string conexao local
//mongoose.connect("mongodb://127.0.0.1:27017/alura-node");
let db = mongoose.connection;

export default db;