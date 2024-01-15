import { AutenticarUsuarioUseCase } from "@modules/usuario/application/use-cases/autenticar-usuario/autenticar-usuario.use-case";
import { CredenciaisUsuarioProps, CriarUsuarioProps, IUsuario } from "@modules/usuario/domain/usuario.types";
import { ExpressController } from "@shared/presentation/http/express.controller";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

class AutenticarUsuarioExpressController extends ExpressController {

    private _autenticarUsuarioUseCase: AutenticarUsuarioUseCase;

    constructor(autenticarUsuarioUseCase: AutenticarUsuarioUseCase) {
        super();
        this._autenticarUsuarioUseCase = autenticarUsuarioUseCase;
    }

    async autenticar(request: Request, response: Response, next: NextFunction) {
        try {
            const credenciaisInputDTO: CredenciaisUsuarioProps = request.body as CredenciaisUsuarioProps;
           
            const usuarioAutenticado: IUsuario = await this._autenticarUsuarioUseCase.execute(credenciaisInputDTO);

            //Cria um objeto com dados simplificados de usuário
            const { id, nome, email, tipo } = usuarioAutenticado;
            const usuarioSimplificadoDTO = { id, nome, email, tipo };

            //Gera o Token JWT com os dados simplificados do usuário
            const secretKey = process.env.JWT_SECRET_KEY as string;
            const token = jwt.sign(usuarioSimplificadoDTO, secretKey, { expiresIn: '1h' });
   
            this.sendSuccessResponse(response,token);
        } catch (error) {
            next(error);
        }
    }

}

export { AutenticarUsuarioExpressController }