import { NextFunction, Request, Response } from "express";
import { ExpressController } from "@shared/presentation/http/express.controller";
import { CriarCategoriaProps, ICategoria } from "@modules/catalogo/domain/categoria/categoria.types";
import { InserirCategoriaUseCase } from "@modules/catalogo/application/use-cases/inserir-categoria/inserir-categoria.use-case";


class InserirCategoriaExpressController extends ExpressController {

    private _inserirCategoriaUseCase: InserirCategoriaUseCase;
 
    constructor(inserirCategoriaUseCase: InserirCategoriaUseCase) {
        super();
        this._inserirCategoriaUseCase = inserirCategoriaUseCase;
    }
 
    async inserir(request: Request, response: Response, next: NextFunction) {
      try {
        const categoriaInputDTO: CriarCategoriaProps = request.body;
        const categoriaOutputDTO: ICategoria = await this._inserirCategoriaUseCase.execute(categoriaInputDTO);
        this.sendSuccessResponse(response,categoriaOutputDTO);
      } catch (error) {
        next(error);
      }
    }
 
  }

export { InserirCategoriaExpressController }