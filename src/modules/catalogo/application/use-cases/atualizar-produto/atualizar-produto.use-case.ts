import { IUseCase } from "@shared/application/use-case.interface";
import { RecuperarProdutoProps } from "@modules/catalogo/domain/produto/produto.types";
import { IProdutoRepository } from "@modules/catalogo/domain/produto/produto.repository.interface";
import { Produto } from "@modules/catalogo/domain/produto/produto.entity";
import { ProdutoApplicationExceptions } from "../../exceptions/produto.application.exception";

class AtualizarProdutoUseCase implements IUseCase<RecuperarProdutoProps, boolean> {
    private _produtoRepositorio: IProdutoRepository<Produto>;

    constructor(repositorio: IProdutoRepository<Produto>) {
        this._produtoRepositorio = repositorio;
    }

    async execute(produtoProps: RecuperarProdutoProps): Promise<boolean> {

        const existeProduto: boolean = await this._produtoRepositorio.existe(produtoProps.id);

        if (!existeProduto) {
            throw new ProdutoApplicationExceptions.ProdutoNaoEncontrado();
        }

        const produto: Produto = Produto.recuperar(produtoProps);

        const atualizouProduto: boolean = await this._produtoRepositorio.atualizar(produto.id, produto);

        return atualizouProduto;

    }

}

export { AtualizarProdutoUseCase }