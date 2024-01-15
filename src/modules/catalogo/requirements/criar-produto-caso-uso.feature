Feature: Criar Produto
    Como um <Administrador>
    Eu quero <Criar um produto>
    De modo que <O produto possa ser comercializado> 

Scenario: Produto válido (Padrão)
    Dado (Given) [Produto válido]
    Quando (When) [Solicitar a criação de um produto]
    Então (Then) [O Produto deve ser criado corretamente]

Scenario: Produto inválido - Nome do produto não atende o tamanho mínimo (Execeção)
    Dado [Um produto com nome que não atende ao tamanho mínimo]
	Quando [Solicitar a criação de um produto]
	Então [Um erro informando que o nome do produto não possui um tamanho mínimo válido deve ser apresentado]

Scenario: Produto inválido - Nome do produto não atende o tamanho máximo (Execeção)
    Dado [Um produto com nome que não atende ao tamanho máximo]
	Quando [Solicitar a criação de um produto]
	Então [Um erro informando que o nome do produto não possui um tamanho máximo válido deve ser apresentado]

Scenario: Produto inválido - Descrição do produto não atende o tamanho mínimo (Execeção)
    Dado [Um produto com descrição que não atende ao tamanho mínimo]
	Quando [Solicitar a criação de um produto]
	Então [Um erro informando que o descrição do produto não possui um tamanho mínimo válido deve ser apresentado]

Scenario: Produto inválido - Descrição do produto não atende o tamanho máximo (Execeção)
    Dado [Um produto com descrição que não atende ao tamanho máximo]
	Quando [Solicitar a criação de um produto]
	Então [Um erro informando que o descrição do produto não possui um tamanho máximo válido deve ser apresentado]

Scenario: Produto inválido - Preço do produto não atende ao valor mínimo (Execeção)
    Dado [Um produto com preço que não atende ao valor mínimo]
	Quando [Solicitar a criação de um produto]
	Então [Um erro informando que o preço do produto não possui um valor mínimo válido deve ser apresentado]

Scenario: Produto inválido - Produto não tem um número mínimo válido de categorias (Execeção)
    Dado [Um produto com um número mínimo inválido de categorias]
	Quando [Solicitar a criação de um produto]
	Então [Um erro informando que o produto não tem um número mínimo válido de categorias]

Scenario: Produto inválido - Produto não tem um número máximo válido de categorias (Execeção)
    Dado [Um produto com um número máximo inválido de categorias]
	Quando [Solicitar a criação de um produto]
	Então [Um erro informando que o produto não tem um número máximo válido de categorias]