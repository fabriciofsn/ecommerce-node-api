import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { ICategoriaRepository } from "@modules/catalogo/domain/categoria/categoria.repository.interface";
import { IUseCase } from "@shared/application/use-case.interface";
import { CategoriaApplicationExceptions } from "../../exceptions/categoria.application.exception";
import { IProdutoRepository } from "@modules/catalogo/domain/produto/produto.repository.interface";
import { Produto } from "@modules/catalogo/domain/produto/produto.entity";
import { ProdutoApplicationExceptions } from "../../exceptions/produto.application.exception";

class DeletarProdutoUseCase implements IUseCase<string, boolean> {
    private _produtoRepositorio: IProdutoRepository<Produto>;

    constructor(repositorio: IProdutoRepository<Produto>) {
        this._produtoRepositorio = repositorio;
    }

    async execute(uuid: string): Promise<boolean> {

        const existeProduto: boolean = await this._produtoRepositorio.existe(uuid);

        if (!existeProduto) {
            throw new ProdutoApplicationExceptions.ProdutoNaoEncontrado();
        }

        const deletouProduto: boolean = await this._produtoRepositorio.deletar(uuid);

        return deletouProduto;

    }

}

export { DeletarProdutoUseCase }