/* eslint-disable no-undef */
import UsuarioController from "../../src/controllers/usuarioController";
import { usuario } from "../../src/models";
jest.mock("../../src/models/Usuario");

describe("UsuarioController.getUser", () => {
	it("Deve autorizar um usuário existente", async () => {
		const req = {
			body: { email: "test@example.com", senha: "123456" }
		};

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		};
		const next = jest.fn();
		usuario.findOne.mockResolvedValue(true); // Mock da função findOne para simular um usuário encontrado
		
		await UsuarioController.getUser(req, res, next);
		
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({ message: "Usuario autorizado", status: true });
	});
	
	it("Não deve autorizar um usuário inexistente", async () => {
		const req = {
			body: { email: "notfound@example.com", senha: "wrong" }
		};
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		};
		const next = jest.fn();
		
		usuario.findOne.mockResolvedValue(null); // Mock para simular um usuário não encontrado
		
		await UsuarioController.getUser(req, res, next);
		
		expect(res.status).toHaveBeenCalledWith(401);
		expect(res.json).toHaveBeenCalledWith({ message: "Usuario não autorizado", status: false });
	});

	// if("Deve chamar o middleware de erro em caso de falha na busca", async ()=>{

	// });

});

