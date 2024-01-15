import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity"
import { ICategoriaRepository } from "@modules/catalogo/domain/categoria/categoria.repository.interface"
import { Produto } from "@modules/catalogo/domain/produto/produto.entity"
import { IProdutoRepository } from "@modules/catalogo/domain/produto/produto.repository.interface"
import { IProduto } from "@modules/catalogo/domain/produto/produto.types"
import { IUseCase } from "@shared/application/use-case.interface"
import { CategoriaApplicationExceptions } from "../../exceptions/categoria.application.exception"
import { ProdutoMap } from "@modules/catalogo/infra/mappers/produto.map"

export class RecuperarProdutosPorCategoria implements IUseCase<string, Array<IProduto>> {
    
    private _produtoRepositorio: IProdutoRepository<Produto>
    private _categoriaRepositorio: ICategoriaRepository<Categoria>

    constructor(
        repositorioProduto: IProdutoRepository<Produto>, repositorioCategoria: ICategoriaRepository<Categoria>
    ) {
        this._produtoRepositorio = repositorioProduto,
        this._categoriaRepositorio = repositorioCategoria
    }

    async execute(uuidCategoria: string): Promise<IProduto[]> {

        const existeCategoria: boolean = await this._categoriaRepositorio.existe(uuidCategoria)

        if (!existeCategoria) {
            throw new CategoriaApplicationExceptions.CategoriaNaoEncontrada()
        } 

        const todosProdutos: Array<Produto> = await this._produtoRepositorio.recuperarPorCategoria(uuidCategoria)

        const todosProdutosDTO = todosProdutos.map((produto) => ProdutoMap.toDTO(produto))

        return todosProdutosDTO
    }
}