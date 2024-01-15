import express from 'express';
import { autenticarUsuarioController, registrarUsuarioController } from './controllers';

const usuarioRouter = express.Router();

usuarioRouter.post(
    '/',
    (request, response, next) =>  registrarUsuarioController.registrar(request, response, next)
)

usuarioRouter.post(
    '/autenticacao',
    (request, response, next) =>  autenticarUsuarioController.autenticar(request, response, next)
)

export { usuarioRouter };