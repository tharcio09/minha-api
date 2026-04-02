import { Router } from "express";
import { rotaInicial, cadastrarUsuario, deletarUsuario, editarUsuario, loginUsuario, uploadFoto, pegarMeuPerfil, adicionarLink, pegarPerfilPublico, deletarLink } from './controllers/userController.js';
import { verificarToken } from "./middlewares/auth.js";
import upload from './config/upload.js';

export const routes = Router();

routes.get('/p/:id', pegarPerfilPublico);
routes.get('/', rotaInicial);
routes.get('/meu-perfil', verificarToken, pegarMeuPerfil);
routes.post('/usuario', cadastrarUsuario);
routes.delete('/usuario/:id', verificarToken, deletarUsuario);
routes.put('/usuario/:id', verificarToken, editarUsuario);
routes.post('/login', loginUsuario);
routes.patch('/usuario/foto', verificarToken, upload.single('foto'), uploadFoto);
routes.post('/usuario/link', verificarToken, adicionarLink);
routes.delete('/usuario/link/:idLink', verificarToken, deletarLink);