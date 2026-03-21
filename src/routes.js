import { Router } from "express";
import { rotaInicial, pegarUsuarios, cadastrarUsuario, deletarUsuario, editarUsuario, loginUsuario } from './controllers/userController.js';
import { verificarToken } from "./middlewares/auth.js";

export const routes = Router();

routes.get('/', rotaInicial);
routes.get('/usuario', verificarToken, pegarUsuarios);
routes.post('/usuario', cadastrarUsuario);
routes.delete('/usuario/:id', verificarToken, deletarUsuario);
routes.put('/usuario/:id', verificarToken, editarUsuario);
routes.post('/login', loginUsuario);