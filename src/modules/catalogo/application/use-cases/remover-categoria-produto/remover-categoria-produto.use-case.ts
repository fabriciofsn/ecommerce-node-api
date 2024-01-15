import { Produto } from "@modules/catalogo/domain/produto/produto.entity"
import { IProdutoRepository } from "@modules/catalogo/domain/produto/produto.repository.interface"
import { RecuperarProdutoProps } from "@modules/catalogo/domain/produto/produto.types"
import { IUseCase } from "@shared/application/use-case.interface"
import { ProdutoApplicationExceptions } from "../../exceptions/produto.application.exception"
import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity"

export class RemoverCategoriaProdutoUseCase implements IUseCase<RecuperarProdutoProps, boolean> {

    private _produtoRepositorio: IProdutoRepository<Produto>

    constructor(repositorio: IProdutoRepository<Produto>){
        this._produtoRepositorio = repositorio
    }

    async execute(produtoProps: RecuperarProdutoProps): Promise<boolean> {

        const existeProduto: boolean = await this._produtoRepositorio.existe(produtoProps.id)

        if (!existeProduto) {
            throw new ProdutoApplicationExceptions.ProdutoNaoEncontrado()
        }

        const produto: Produto = Produto.recuperar(produtoProps)

        const categoria: Categoria = Categoria.recuperar({
            id: "fc59d6d0-bb22-4149-acdb-71b3ae751eff",
            nome: "Cozinha"
        })

        const produtoCategoriaRemovida = await this._produtoRepositorio.removerCategoria(produto, categoria)

        return produtoCategoriaRemovida
    }
}