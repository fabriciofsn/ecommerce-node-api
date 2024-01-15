import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { ICategoriaRepository } from "@modules/catalogo/domain/categoria/categoria.repository.interface";
import { ICategoria } from "@modules/catalogo/domain/categoria/categoria.types";
import { CategoriaMap } from "@modules/catalogo/infra/mappers/categoria.map";
import { IUseCase } from "@shared/application/use-case.interface";
import { CategoriaApplicationExceptions } from "../../exceptions/categoria.application.exception";

class RecuperarCategoriaPorIdUseCase implements IUseCase<string, ICategoria> {

    private _categoriaRepositorio: ICategoriaRepository<Categoria>;

    constructor(categoriaRepositorio: ICategoriaRepository<Categoria>) {
        this._categoriaRepositorio = categoriaRepositorio;
    }

    async execute(uuid: string): Promise<ICategoria> {

        const existeCategoria: boolean = await this._categoriaRepositorio.existe(uuid);

        if (!existeCategoria) {
            throw new CategoriaApplicationExceptions.CategoriaNaoEncontrada();
        }

        const categoria = await this._categoriaRepositorio.recuperarPorUuid(uuid);

        return CategoriaMap.toDTO(categoria as Categoria);

    }

}

export { RecuperarCategoriaPorIdUseCase }