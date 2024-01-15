import express from 'express';
import { recuperarTodosProdutosController } from './controllers';

const produtoRouter = express.Router();

produtoRouter.get(
    '/',
    (request, response, next) =>  recuperarTodosProdutosController.recuperar(request, response, next)
)


export { produtoRouter };