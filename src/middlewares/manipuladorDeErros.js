import mongoose from "mongoose";
import ErroBase from "../errors/erroBase.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";
import ErroValidacao from "../errors/ErroValidacao.js";

/* eslint-disable no-unused-vars */
function manipuladorDeErros(err, req, res, next) {
	console.log(err);

	switch (true) {
	case err instanceof mongoose.Error.CastError:
		new RequisicaoIncorreta().enviarResposta(res);
		break;
	case err instanceof mongoose.Error.ValidationError:
		new ErroValidacao(err).enviarResposta(res);
		break;
	case err instanceof ErroBase:
		err.enviarResposta(res);
		break;
	default:
		new ErroBase().enviarResposta(res);
		break;
	}

}

export default manipuladorDeErros;
