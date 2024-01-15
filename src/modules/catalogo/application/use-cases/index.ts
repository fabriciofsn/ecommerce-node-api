import { categoriaRepositorio, produtoRepositorio } from "@modules/catalogo/infra/database";
import { RecuperarCategoriaPorIdUseCase } from "./recuperar-categoria-por-id/recuperar-categoria-por-id.use-case";
import { RecuperarTodasCategoriasUseCase } from "./recuperar-todas-categorias/recuperar-todas-categorias.use-case";
import { InserirCategoriaUseCase } from "./inserir-categoria/inserir-categoria.use-case";
import { AtualizarCategoriaUseCase } from "./atualizar-categoria/atualizar-categoria.use-case";
import { DeletarCategoriaUseCase } from "./deletar-categoria/deletar-categoria.use-case";
import { RecuperarProdutoPorIdUseCase } from "./recuperar-produto-por-id/recuperar-produto-por-id.use-case";
import { RecuperarTodosProdutosUseCase } from "./recuperar-todos-produtos/recuperar-todos-produtos.use-case";
import { InserirProdutoUseCase } from "./inserir-produto/inserir-produto.use-case";
import { DeletarProdutoUseCase } from "./deletar-produto/deletar-produto.use-case";
import { AtualizarProdutoUseCase } from "./atualizar-produto/atualizar-produto.use-case";
import { AdicionarCategoriaProdutoUseCase } from "./adicionar-categoria-produto/adicionar-categoria-produto.use-case";
import { AlterarStatusProdutoUseCase } from "./alterar-status-produto/alterar-status-produto.use-case";
import { RemoverCategoriaProdutoUseCase } from "./remover-categoria-produto/remover-categoria-produto.use-case";
import { RecuperarProdutosPorCategoria } from "./recuperar-produtos-por-categoria/recuperar-produtos-por-categoria.use-case";

const recuperarCategoriaPorIdUseCase = new RecuperarCategoriaPorIdUseCase(categoriaRepositorio);
const recuperarTodasCategoriasUseCase = new RecuperarTodasCategoriasUseCase(categoriaRepositorio);
const inserirCategoriaUseCase = new InserirCategoriaUseCase(categoriaRepositorio);
const atualizarCategoriaUseCase = new AtualizarCategoriaUseCase(categoriaRepositorio);
const deletarCategoriaUseCase = new DeletarCategoriaUseCase(categoriaRepositorio);

const recuperarProdutoPorIdUseCase = new RecuperarProdutoPorIdUseCase(produtoRepositorio);
const recuperarTodosProdutosUseCase = new RecuperarTodosProdutosUseCase(produtoRepositorio);
const inserirProdutoUseCase = new InserirProdutoUseCase(produtoRepositorio);
const deletarProdutoUseCase = new DeletarProdutoUseCase(produtoRepositorio);
const atualizarProdutoUseCase = new AtualizarProdutoUseCase(produtoRepositorio);
const adicionarCategoriaProdutoUseCase = new AdicionarCategoriaProdutoUseCase(produtoRepositorio);
const removerCategoriaProdutoUseCase = new RemoverCategoriaProdutoUseCase(produtoRepositorio);
const alterarStatusProdutoUseCase = new AlterarStatusProdutoUseCase(produtoRepositorio);
const recuperarProdutosPorCategoria = new RecuperarProdutosPorCategoria(produtoRepositorio, categoriaRepositorio);


export {
    recuperarCategoriaPorIdUseCase,
    recuperarTodasCategoriasUseCase,
    inserirCategoriaUseCase,
    atualizarCategoriaUseCase,
    deletarCategoriaUseCase,
    recuperarProdutoPorIdUseCase,
    recuperarTodosProdutosUseCase,
    inserirProdutoUseCase,
    deletarProdutoUseCase,
    atualizarProdutoUseCase,
    adicionarCategoriaProdutoUseCase,
    alterarStatusProdutoUseCase,
    removerCategoriaProdutoUseCase,
    recuperarProdutosPorCategoria
}