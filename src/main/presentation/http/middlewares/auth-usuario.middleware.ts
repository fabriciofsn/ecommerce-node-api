import { Usuario } from "@modules/usuario/domain/usuario.entity";
import { IUsuario } from "@modules/usuario/domain/usuario.types";
import { UsuarioMap } from "@modules/usuario/infra/mappers/usuario.map";
import { logger } from "@shared/helpers/logger.winston";
import { HttpErrors } from "@shared/presentation/http/http.error";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

const authUsuarioMiddleware = (tiposUsuarioPermitido: Array<String>) => {
    return (request: Request, response: Response, next: NextFunction) => {
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

        if (!token) {
            next(new HttpErrors.UnauthorizedError({ message: 'Token não foi enviado na requisição'}));
        }

        const secretKey = process.env.JWT_SECRET_KEY as string;
        let usuario;
        try {
            usuario = jwt.verify(token as string, secretKey) as { id:string, nome: string, email: string, tipo: string};
            if (!tiposUsuarioPermitido.includes(usuario.tipo)) {
                next(new HttpErrors.ForbiddenError());
            }
        } catch (error) {
            next(new HttpErrors.ForbiddenError());
        }

        next();
    }
}
export { authUsuarioMiddleware as authUsuario  }