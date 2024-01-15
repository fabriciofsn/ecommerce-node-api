import { Categoria } from '@modules/catalogo/domain/categoria/categoria.entity';
import { Produto } from '@modules/catalogo/domain/produto/produto.entity';
import { StatusProduto } from '@modules/catalogo/domain/produto/produto.types';
import { CategoriaPrismaRepository } from '@modules/catalogo/infra/database/categoria.prisma.repository';
import { ProdutoPrismaRepository } from '@modules/catalogo/infra/database/produto.prisma.repository';
import { DomainException } from '@shared/domain/domain.exception';
import { prisma } from '@main/infra/database/orm/prisma/client';
import { categoriaRepositorio as categoriaRepo } from '@modules/catalogo/infra/database';
import { produtoRepositorio as produtoRepo } from '@modules/catalogo/infra/database';
import { atualizarCategoriaUseCase, atualizarProdutoUseCase, deletarCategoriaUseCase, deletarProdutoUseCase, inserirCategoriaUseCase, inserirProdutoUseCase, recuperarCategoriaPorIdUseCase, recuperarProdutoPorIdUseCase, recuperarTodasCategoriasUseCase, recuperarTodosProdutosUseCase } from '@modules/catalogo/application/use-cases';


async function main() {

    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );


    ////////////////////////////////
    //Recuperar Categoria por UUID//
    ////////////////////////////////

    // console.log(await recuperarCategoriaPorIdUseCase.execute("fc59d6d0-bb22-4149-acdb-71b3ae751eff"));


    //////////////////////////////
    //Recuperar Todas Categorias//
    //////////////////////////////

    // console.log(await recuperarTodasCategoriasUseCase.execute());


    /////////////////////////////////
    //Verificar se Existe Categoria//
    /////////////////////////////////

    // const existeCategoria: boolean = await categoriaRepo.existe("fc59d6d0-bb22-4149-acdb-71b3ae751eff");

    // console.log(existeCategoria);


    /////////////////////
    //Inserir Categoria//
    /////////////////////

    // console.log(await inserirCategoriaUseCase.execute({
    //     nome: 'Cozinha'
    // }));


    ///////////////////////
    //Atualizar Categoria//
    ///////////////////////

    // console.log(await atualizarCategoriaUseCase.execute({
    //     id: "0237166e-7920-4441-84f0-35e3fa1140d5",
    //     nome: 'Cozinha Americana'
    // }));


    /////////////////////
    //Deletar Categoria//
    /////////////////////

    // console.log(await deletarCategoriaUseCase.execute("a24d244e-b0e8-4cbb-8065-1c372d3e364c"));


    //////////////////////////////
    //Recuperar Produto por UUID//
    //////////////////////////////

    // console.log(await recuperarProdutoPorIdUseCase.execute("fbfc2150-f804-4e9e-be82-f461ab7c1d2a"));


    ////////////////////
    //Inserrir Produto//
    ////////////////////
    
    // const categoria01: Categoria = Categoria.recuperar({
    //    id: "49968897-f39f-4daa-80d4-d0577dc4ecb6",
    //    nome: "Mesa"
    // });

    // const categoria02: Categoria = Categoria.recuperar({
    //    id: "bbe3e6f3-cf62-4fc1-9ec1-9bff53237062",
    //    nome: "Cozinha"
    // });

    // console.log(await inserirProdutoUseCase.execute({
    //     nome: 'Forro de Mesa',
    //     descricao: '100% Algodão',
    //     valor: 70,
    //     categorias: [categoria01, categoria02]
    // }));
    
    // const produto: Produto = Produto.criar({
    //    nome: 'Pano de Prato',
    //    descricao: 'Algodão Fio 10',
    //    valor: 30,
    //    categorias: [categoria01, categoria02]
    // });

    // const produtoInserido = await produtoRepo.inserir(produto);

    // console.log(produtoInserido);


    /////////////////////////////////////////////////
	//Recuperar Todos os Produtos e Suas Categorias//
	/////////////////////////////////////////////////
		
	// console.log(await recuperarTodosProdutosUseCase.execute());


    ///////////////////////////////////////////////
	//Atualizar Produto - Sem Atulizar Categorias//
	///////////////////////////////////////////////

    // const categoria01: Categoria = Categoria.recuperar({
    //    id: "915bf970-b302-44be-8e6b-4cfd8ea7ad97",
    //    nome: "Banho"
    // });
       
    // console.log(await atualizarProdutoUseCase.execute({
    //     id: "fbfc2150-f804-4e9e-be82-f461ab7c1d2a",
    //     nome: 'Toalha de Rosto',
    //     descricao: '100% Algodão',
    //     valor: 75,
    //     categorias: [categoria01]
    // }));


    ///////////////////
	//Deletar Produto//
	///////////////////
		
    // console.log(await deletarProdutoUseCase.execute("181bb2b8-7823-4b92-8ca1-9863bbd10f7a"));


    ////////////////////////////////////////////
	//Adicionar e Remover Categoria ao Produto//
	////////////////////////////////////////////
		
	// const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("26684b74-97f0-489c-87ad-ba0c40574f2b");

    // const categoriaRecuperada: Categoria | null = await categoriaRepo.recuperarPorUuid("2bfddfb4-6545-4b4b-95f0-daffed38cfe5");

	// if (produtoRecuperado && categoriaRecuperada) {

    //     //Adicionar//
    //     if (produtoRecuperado.adicionarCategoria(categoriaRecuperada)) {
    //         await produtoRepo.adicionarCategoria(produtoRecuperado, categoriaRecuperada);
    //     }

    //     //Remover//
    //     // if (produtoRecuperado.removerCategoria(categoriaRecuperada)){
    //     //     await produtoRepo.removerCategoria(produtoRecuperado, categoriaRecuperada);
    //     // }

    // }


    //////////////////////////
    //Alterar Status Produto//
    //////////////////////////

    // const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("0a504b91-889b-449a-a707-4ce910132c42");

    // if (produtoRecuperado) {
    //    const alterouStatusProduto: boolean = await produtoRepo.alterarStatus(produtoRecuperado,StatusProduto.ATIVO)
    //    console.log(alterouStatusProduto);
    // }


    ////////////////////////////////////
	//Recuperar Produtos por Categoria//
	////////////////////////////////////
			
	// const todosProdutosPorCategoria: Array<Produto> = await produtoRepo.recuperarPorCategoria("2bfddfb4-6545-4b4b-95f0-daffed38cfe5");

	// console.log(todosProdutosPorCategoria);


    /////////////////////
    //Atualizar Produto//
    /////////////////////

    //const categoria01: Categoria = Categoria.recuperar({
    //    id: '7061d559-ab25-4182-98ce-170afdf2acd2',
    //    nome: 'mesa'
    //});

    //const categoria02: Categoria = Categoria.recuperar({
    //    id: '96a7f212-e01d-4de7-8abc-70cabbc898fd',
    //    nome: 'banho'
    //})

    //const produto: Produto = Produto.recuperar({
    //    id: "c3d7d942-e368-4e9c-85e5-5bb898d776fc",
    //    nome: "Toalha de Mesa Grande",
    //    descricao: "Toalha de Algodão",
    //    valor: 100,
    //    categorias: [categoria01, categoria02]
    //});

    //const atualizouProduto: boolean = await produtoRepo.atualizar(produto.id, produto);

    //console.log(atualizouProduto)

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        if (error instanceof DomainException) {
            console.log('Execeção de Dóminio');
            console.log(error.message);
        }
        else {
            console.log('Outras Exceções');
            console.log(error.message);
        }
        await prisma.$disconnect()
        process.exit(1)
    })