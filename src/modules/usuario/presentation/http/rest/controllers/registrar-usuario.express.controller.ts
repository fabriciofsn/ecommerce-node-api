import { RegistrarUsuarioUseCase } from "@modules/usuario/application/use-cases/registrar-usuario/registrar-usuario.use-case";
import { CriarUsuarioProps, IUsuario } from "@modules/usuario/domain/usuario.types";
import { ExpressController } from "@shared/presentation/http/express.controller";
import { NextFunction, Request, Response } from "express";

class RegistrarUsuarioExpressController extends ExpressController {

    private _registrarUsuarioUseCase: RegistrarUsuarioUseCase;

    constructor(registrarUsuarioUseCase: RegistrarUsuarioUseCase) {
        super();
        this._registrarUsuarioUseCase = registrarUsuarioUseCase;
    }

    async registrar(request: Request, response: Response, next: NextFunction) {
        try {
            const usuarioInputDTO: CriarUsuarioProps = request.body as CriarUsuarioProps;
            const usuarioRegistrado: IUsuario = await this._registrarUsuarioUseCase.execute(usuarioInputDTO);
            this.sendSuccessResponse(response,usuarioRegistrado);
        } catch (error) {
            next(error);
        }
    }

}

export { RegistrarUsuarioExpressController }