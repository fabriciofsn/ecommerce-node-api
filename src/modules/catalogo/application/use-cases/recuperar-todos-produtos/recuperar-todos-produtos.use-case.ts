import { IUseCase } from "@shared/application/use-case.interface";
import { IProdutoRepository } from "@modules/catalogo/domain/produto/produto.repository.interface";
import { Produto } from "@modules/catalogo/domain/produto/produto.entity";
import { ProdutoMap } from "@modules/catalogo/infra/mappers/produto.map";
import { IProduto } from "@modules/catalogo/domain/produto/produto.types";

class RecuperarTodosProdutosUseCase implements IUseCase<void, Array<IProduto>> {
    private _produtoRepositorio: IProdutoRepository<Produto>;

    constructor(repositorio: IProdutoRepository<Produto>) {
        this._produtoRepositorio = repositorio;
    }

    async execute(): Promise<Array<IProduto>> {

        const todosProdutos: Array<Produto> = await this._produtoRepositorio.recuperarTodos();

        const todosProdutosDTO = todosProdutos.map(
            (produto) => ProdutoMap.toDTO(produto)
        );

        return todosProdutosDTO;
    }
}

export { RecuperarTodosProdutosUseCase };