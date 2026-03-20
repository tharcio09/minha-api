import { Router } from "express";
import { rotaInicial, pegarUsuarios, cadastrarUsuario, deletarUsuario, editarUsuario, loginUsuario } from './controllers/userController.js';

export const routes = Router();

routes.get('/', rotaInicial);
routes.get('/usuario', pegarUsuarios);
routes.post('/usuario', cadastrarUsuario);
routes.delete('/usuario/:id', deletarUsuario);
routes.put('/usuario/:id', editarUsuario);
routes.post('/login', loginUsuario);