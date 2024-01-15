import { PrismaClient } from "@prisma/client";
import { afterEach, beforeAll, describe, expect, test, vi } from "vitest";
import { DeepMockProxy, mockDeep, mockReset } from 'vitest-mock-extended';
import { ProdutoPrismaRepository } from "./produto.prisma.repository";
import { StatusProduto } from "@modules/catalogo/domain/produto/produto.types";
import { Produto } from "@modules/catalogo/domain/produto/produto.entity";
import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { ProdutoMap } from "../mappers/produto.map";
import { produtoIncludeCategoriaPrisma } from "@shared/infra/database/prisma.types";
import { faker } from "@faker-js/faker";
import { CategoriaMap } from "../mappers/categoria.map";

const prismaMock: DeepMockProxy<PrismaClient> = mockDeep<PrismaClient>();
let produtoRepositorio: ProdutoPrismaRepository;
let UUIDValido: string;
let nomeProdutoValido: string;
let nomeCategoriaValido: string;
let descricaoProdutoValido: string;
let valorProdutoValido: number;
let categoriasProdutoValido: Array <Categoria>;
let dataCriacaoProduto: Date;
let dataAtualizacaoProduto: Date;
let dataExclusaoProduto: Date;
let statusProduto: StatusProduto;
let categoriaProduto01: Categoria;
let categoriaProduto02: Categoria;
let categoriaAlternativa: Categoria;

describe('Repositório Prisma: Produto', () => {

    beforeAll(async () => {

        //Passando o prisma mockado para o repositório
        produtoRepositorio = new ProdutoPrismaRepository(prismaMock);

        const categoriaValida01 = Categoria.criar({nome:faker.string.alpha({length:{min:Categoria.TAMANHO_MINIMO_NOME, max:Categoria.TAMANHO_MAXIMO_NOME}})});
        const categoriaValida02 = Categoria.criar({nome:faker.string.alpha({length:{min:Categoria.TAMANHO_MINIMO_NOME, max:Categoria.TAMANHO_MAXIMO_NOME}})});

        //Preencendo as variáveis com dados em conformidade com as restrições da regra de negócio
        UUIDValido = faker.string.uuid(); // Retorna um UUID v4
        nomeProdutoValido = faker.string.alpha({ length: { min: 5, max: 50 } });
        nomeCategoriaValido = faker.string.alpha({ length: { min: 5, max: 50 } });
        descricaoProdutoValido = faker.string.alpha({ length: { min: 10, max: 200 } });
        valorProdutoValido = faker.number.int({ min: 1, max: 2000 });
        categoriasProdutoValido = faker.helpers.arrayElements([categoriaValida01, categoriaValida02], {min:Produto.QTD_MINIMA_CATEGORIAS, max:Produto.QTD_MAXIMA_CATEGORIAS});
        dataCriacaoProduto = faker.date.anytime();
        dataAtualizacaoProduto = faker.date.anytime();
        dataExclusaoProduto = faker.date.anytime();
        statusProduto = StatusProduto.ATIVO;

        //Criando categorias válidas com dados simulados
        categoriaProduto01 = Categoria.criar({ nome: faker.string.alpha({ length: { min: 3, max: 50 } }) });
        categoriaProduto02 = Categoria.criar({ nome: faker.string.alpha({ length: { min: 3, max: 50 } }) });
        categoriaAlternativa = Categoria.criar({ nome: faker.string.alpha({ length: {min: Categoria.TAMANHO_MINIMO_NOME, max:Categoria.TAMANHO_MAXIMO_NOME}})});

    });

    afterEach(() => {
        vi.restoreAllMocks();
        mockReset(prismaMock)
    });

    describe('Recuperar Produto Por ID', () => {

        test('Deve Recuperar O Produto Por UUID', async () => {

            const produtoPrisma = {
                id: UUIDValido,
                nome: nomeProdutoValido,
                descricao: descricaoProdutoValido,
                valor: valorProdutoValido,
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto,
                dataExclusao: dataExclusaoProduto,
                status: statusProduto,
                categorias: [
                    {
                        produtoId: UUIDValido,
                        categoriaId: categoriaProduto01.id,
                        dataCriacao: new Date(),
                        dataAtualizacao: new Date(),
                        categoria: {
                            id: categoriaProduto01.id,
                            nome: categoriaProduto01.nome,
                            dataCriacao: new Date(),
                            dataAtualizacao: new Date()
                        }
                    }
                ]
            };

            prismaMock.produto.findUnique.mockResolvedValue(produtoPrisma);

            const produto: Produto = ProdutoMap.fromPrismaModelToDomain(produtoPrisma);

            const produtoRecuperado = await produtoRepositorio.recuperarPorUuid(produto.id);

            expect(produtoRecuperado).toStrictEqual(produto)
            expect(prismaMock.produto.findUnique).toHaveBeenCalledTimes(1);
            expect(prismaMock.produto.findUnique).toBeCalledWith({
                where: {
                    id: produto.id,
                },
                include: produtoIncludeCategoriaPrisma
            });
        });    
    });

    describe('Recuperar Todos Os Produtos', () => {

        test('Deve Recuperar Todos Os Prdutos Não Excluídos', async () => {

            const listaProdutosPrisma = [{
                id: UUIDValido,
                nome: nomeProdutoValido,
                descricao: descricaoProdutoValido,
                valor: valorProdutoValido,
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto,
                dataExclusao: dataExclusaoProduto,
                status: statusProduto,
                categorias: [
                    {
                        produtoId: UUIDValido,
                        categoriaId: categoriaProduto01.id,
                        dataCriacao: new Date(),
                        dataAtualizacao: new Date(),
                        categoria: {
                            id: categoriaProduto01.id,
                            nome: categoriaProduto01.nome,
                            dataCriacao: new Date(),
                            dataAtualizacao: new Date()
                        }
                    }
                ]
            },{
                id: UUIDValido,
                nome: nomeProdutoValido,
                descricao: descricaoProdutoValido,
                valor: valorProdutoValido,
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto,
                dataExclusao: dataExclusaoProduto,
                status: statusProduto,
                categorias: [
                    {
                        produtoId: UUIDValido,
                        categoriaId: categoriaProduto01.id,
                        dataCriacao: new Date(),
                        dataAtualizacao: new Date(),
                        categoria: {
                            id: categoriaProduto01.id,
                            nome: categoriaProduto01.nome,
                            dataCriacao: new Date(),
                            dataAtualizacao: new Date()
                        }
                    }
                ]
            }];

            prismaMock.produto.findMany.mockResolvedValue(listaProdutosPrisma);
            
            const produtos: Array<Produto> = listaProdutosPrisma.map((produto) => ProdutoMap.fromPrismaModelToDomain(produto));

            const todosProdutosRecuperados = await produtoRepositorio.recuperarTodos();

            expect(todosProdutosRecuperados)
                .toStrictEqual(produtos);
            
            expect(prismaMock.produto.findMany)
                .toHaveBeenCalledTimes(1);
        });
    });

    describe('Existe Produto', () => {

        test('Deve Verificar Se Existe Um Determinado Produto Por UUID', async () => {

            const produtoPrisma = {
                id: UUIDValido,
                nome: nomeProdutoValido,
                descricao: descricaoProdutoValido,
                valor: valorProdutoValido,
                categorias: [{
                    categoria: {
                        id: UUIDValido,
                        nome: nomeCategoriaValido,
                        dataCriacao: dataCriacaoProduto,
                        dataAtualizacao: dataAtualizacaoProduto
                    },
                        produtoId: UUIDValido,
                        categoriaId: UUIDValido,
                        dataCriacao: dataCriacaoProduto,
                        dataAtualizacao: dataAtualizacaoProduto
                    }
                ],
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto,
                dataExclusao: dataExclusaoProduto,
                status: statusProduto
            };

            prismaMock.produto.findUnique.mockResolvedValue(produtoPrisma);

            const produto: Produto = ProdutoMap.fromPrismaModelToDomain(produtoPrisma);

            const existeProduto = await produtoRepositorio.existe(produto.id);

            expect(existeProduto)
                .toBeTruthy();
        });
    });

    describe('Inserir Produto', () => {

        test('Deve Inserir Um Produto', async () => {

            const produtoPrisma = {
                id: UUIDValido,
                nome: nomeProdutoValido,
                descricao: descricaoProdutoValido,
                valor: valorProdutoValido,
                categorias: categoriasProdutoValido,
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto,
                dataExclusao: dataExclusaoProduto,
                status: statusProduto
            };

            prismaMock.produto.create.mockResolvedValue(produtoPrisma);

            const produto: Produto = ProdutoMap.toDomain(produtoPrisma);

            const produtoInserido = await produtoRepositorio.inserir(produto);

            expect(produtoInserido)
                .toStrictEqual(produto);

            expect(prismaMock.produto.create)
                .toHaveBeenCalledTimes(1);
            
            expect(prismaMock.produto.create)
                .toBeCalledWith({
                    data: {
                        id: produto.id,
                        nome: produto.nome,
                        descricao: produto.descricao,
                        valor: produto.valor,
                        categorias: {
                            create: produto.categorias.map((categoria) => {
                                return {
                                    categoriaId: categoria.id
                                }
                            })
                        }
                    }
                });
        });
    });

    describe('Atualizar Produto', () => {

        test('Deve Atualizar Um Produto', async () => {

            const produtoPrisma = {
                id: UUIDValido,
                nome: nomeProdutoValido,
                descricao: descricaoProdutoValido,
                valor: valorProdutoValido,
                categorias: categoriasProdutoValido,
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto,
                dataExclusao: dataExclusaoProduto,
                status: statusProduto
            };

            prismaMock.produto.update.mockResolvedValue(produtoPrisma);

            const produto: Produto = ProdutoMap.toDomain(produtoPrisma);

            const produtoAtualizado = await produtoRepositorio.atualizar(produto.id, produto);

            expect(produtoAtualizado)
                .toBeTruthy();

            expect(prismaMock.produto.update)
                .toHaveBeenCalledTimes(1);

            expect(prismaMock.produto.update)
                .toBeCalledWith({
                    where: { 
                        id: produto.id
                    },
                    data: {
                        nome: produto.nome,
                        descricao: produto.descricao,
                        valor: produto.valor
                    }
                });
        });
    });

    describe('Deletar Produto', () => {

        test('Deve Deletar Um Produto Por UUID', async () => {

            const produtoPrisma = {
                id: UUIDValido,
                nome: nomeProdutoValido,
                descricao: descricaoProdutoValido,
                valor: valorProdutoValido,
                categorias: categoriasProdutoValido,
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto,
                dataExclusao: dataExclusaoProduto,
                status: statusProduto
            };

            prismaMock.produto.update.mockResolvedValue(produtoPrisma);

            const produto: Produto = ProdutoMap.toDomain(produtoPrisma);

            const produtoDeletado = await produtoRepositorio.deletar(produto.id);

            expect(produtoDeletado)
                .toBeTruthy();

            expect(prismaMock.produto.update)
                .toHaveBeenCalledTimes(1);
        });
    });

    describe('Adicionar Categoria Ao Produto', () => {

        test('Deve Adicionar Uma Categoria A Um Determinado Produto', async () => {

            const produtoPrisma = {
                id: UUIDValido,
                nome: nomeProdutoValido,
                descricao: descricaoProdutoValido,
                valor: valorProdutoValido,
                categorias: categoriasProdutoValido,
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto,
                dataExclusao: dataExclusaoProduto,
                status: statusProduto
            };

            const produtosCategoriasPrisma = {
                produtoId: UUIDValido,
                categoriaId: UUIDValido,
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto    
            };

            prismaMock.produtosCategorias.create.mockResolvedValue(produtosCategoriasPrisma);

            const produto: Produto = ProdutoMap.toDomain(produtoPrisma);

            const categoria: Categoria = CategoriaMap.toDomain(categoriaAlternativa);

            const produtoCategoriaAdicionado = await produtoRepositorio.adicionarCategoria(produto, categoria);

            expect(produtoCategoriaAdicionado)
                .toBeTruthy();

            expect(prismaMock.produtosCategorias.create)
                .toHaveBeenCalledTimes(1);

            expect(prismaMock.produtosCategorias.create)
                .toBeCalledWith({
                    data: {
                        produtoId: produto.id,
                        categoriaId: categoria.id
                    }
                });
        });
    });

    describe('Remover Categoria Do Produto', () => {

        test('Deve Remover Uma Categoria De Um Produto Específico', async () => {

            const produtoPrisma = {
                id: UUIDValido,
                nome: nomeProdutoValido,
                descricao: descricaoProdutoValido,
                valor: valorProdutoValido,
                categorias: categoriasProdutoValido,
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto,
                dataExclusao: dataExclusaoProduto,
                status: statusProduto
            };

            const categoriasProdutosPrisma = {
                produtoId: UUIDValido,
                categoriaId: UUIDValido,
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto     
            };

            prismaMock.produtosCategorias.delete.mockResolvedValue(categoriasProdutosPrisma);

            const produto: Produto = ProdutoMap.toDomain(produtoPrisma);

            const categoria: Categoria = CategoriaMap.toDomain(categoriaAlternativa);

            const categoriaProdutoRemovido = await produtoRepositorio.removerCategoria(produto, categoria);

            expect(categoriaProdutoRemovido)
                .toBeTruthy();

            expect(prismaMock.produtosCategorias.delete)
                .toHaveBeenCalledTimes(1);

            expect(prismaMock.produtosCategorias.delete)
                .toBeCalledWith({
                    where: {
                        produtoId_categoriaId: {
                            produtoId: produto.id,
                            categoriaId: categoria.id
                        }
                    }
                });
        });
    });

    describe('Alterar Status Do Produto', () => {

        test('Deve Alterar O Status Do Produto', async () => {

            const produtoPrisma = {
                id: UUIDValido,
                nome: nomeProdutoValido,
                descricao: descricaoProdutoValido,
                valor: valorProdutoValido,
                categorias: categoriasProdutoValido,
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto,
                dataExclusao: dataExclusaoProduto,
                status: statusProduto
            };

            prismaMock.produto.update.mockResolvedValue(produtoPrisma);

            const produto: Produto = ProdutoMap.toDomain(produtoPrisma);

            const status = StatusProduto.DESATIVO;

            const statusProdutoAlterado = await produtoRepositorio.alterarStatus(produto, status);

            expect(statusProdutoAlterado)
                .toBeTruthy();

            expect(prismaMock.produto.update)
                .toHaveBeenCalledTimes(1);

            expect(prismaMock.produto.update)
                .toBeCalledWith({
                    where: {
                        id: produto.id
                    },
                    data: {
                        status: ProdutoMap.toStatusProdutoPrisma(status)
                    }
                });
        });
    });

    describe('Recuperar Todos Os Produtos Por Categoria', () => {

        test('Deve Recuperar Todos Os Produtos Por Categoria', async () => {

            const listarProdutosPrisma = [{
                id: UUIDValido,
                nome: nomeProdutoValido,
                descricao: descricaoProdutoValido,
                valor: valorProdutoValido,
                categorias: [{
                    categoria: {
                        id: UUIDValido,
                        nome: nomeCategoriaValido,
                        dataCriacao: dataCriacaoProduto,
                        dataAtualizacao: dataAtualizacaoProduto
                    },
                        produtoId: UUIDValido,
                        categoriaId: UUIDValido,
                        dataCriacao: dataCriacaoProduto,
                        dataAtualizacao: dataAtualizacaoProduto
                    }
                ],
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto,
                dataExclusao: null,
                status: StatusProduto.ATIVO
            },{
                id: UUIDValido,
                nome: nomeProdutoValido,
                descricao: descricaoProdutoValido,
                valor: valorProdutoValido,
                categorias: [{
                    categoria: {
                        id: UUIDValido,
                        nome: nomeCategoriaValido,
                        dataCriacao: dataCriacaoProduto,
                        dataAtualizacao: dataAtualizacaoProduto
                    },
                        produtoId: UUIDValido,
                        categoriaId: UUIDValido,
                        dataCriacao: dataCriacaoProduto,
                        dataAtualizacao: dataAtualizacaoProduto
                    }
                ],
                dataCriacao: dataCriacaoProduto,
                dataAtualizacao: dataAtualizacaoProduto,
                dataExclusao: null,
                status: StatusProduto.ATIVO
            }];

            prismaMock.produto.findMany.mockResolvedValue(listarProdutosPrisma);
            
            const produtos: Array<Produto> = listarProdutosPrisma.map((produto) => ProdutoMap.fromPrismaModelToDomain(produto));

            const produtosPorCategoria = await produtoRepositorio.recuperarPorCategoria(UUIDValido);

            expect(produtosPorCategoria)
                .toStrictEqual(produtos);
            
            expect(prismaMock.produto.findMany)
                .toHaveBeenCalledTimes(1);
        });
    }) ;

});