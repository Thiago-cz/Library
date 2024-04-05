import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import usuario from "./usuarioRoutes.js";

const routes = (app) => {
	app.route("/").get((req, res) => {
		res.status(200).send({titulo: "Curso de node"});
	});
    
	app.use(
		express.json(),
		livros,
		autores,
		usuario
	);
};
    
export default routes;