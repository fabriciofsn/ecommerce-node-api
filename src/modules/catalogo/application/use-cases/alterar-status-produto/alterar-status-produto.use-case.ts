import { Produto } from "@modules/catalogo/domain/produto/produto.entity"
import { IProdutoRepository } from "@modules/catalogo/domain/produto/produto.repository.interface"
import { RecuperarProdutoProps, StatusProduto } from "@modules/catalogo/domain/produto/produto.types"
import { IUseCase } from "@shared/application/use-case.interface"
import { ProdutoApplicationExceptions } from "../../exceptions/produto.application.exception"


export class AlterarStatusProdutoUseCase implements IUseCase<RecuperarProdutoProps, boolean> {
    
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

        const status: StatusProduto = StatusProduto.ATIVO

        const statusAlteradoProduto = await this._produtoRepositorio.alterarStatus(produto, status)

        return statusAlteradoProduto
    }
}