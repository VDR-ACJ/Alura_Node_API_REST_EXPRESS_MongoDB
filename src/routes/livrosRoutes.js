import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

//Rotas da mais especifica para menos especifica, ex: se colocar a chamada de busca de pois de id vai chamar a de id primeiro 

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivrosPorEditora)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router;