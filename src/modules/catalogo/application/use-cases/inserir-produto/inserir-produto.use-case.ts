import { Produto } from "@modules/catalogo/domain/produto/produto.entity";
import { IProdutoRepository } from "@modules/catalogo/domain/produto/produto.repository.interface";
import { CriarProdutoProps, IProduto } from "@modules/catalogo/domain/produto/produto.types";
import { ProdutoMap } from "@modules/catalogo/infra/mappers/produto.map";
import { IUseCase } from "@shared/application/use-case.interface";

class InserirProdutoUseCase implements IUseCase<CriarProdutoProps, IProduto> {

    private _produtoRepositorio: IProdutoRepository<Produto>;

    constructor(repositorio: IProdutoRepository<Produto>) {
        this._produtoRepositorio = repositorio;
    }

    async execute(produtoProps: CriarProdutoProps): Promise<IProduto> {
        
        const produto: Produto = Produto.criar(produtoProps);

        const produtoInserido = await this._produtoRepositorio.inserir(produto);

        return ProdutoMap.toDTO(produtoInserido);

    }

}

export { InserirProdutoUseCase }