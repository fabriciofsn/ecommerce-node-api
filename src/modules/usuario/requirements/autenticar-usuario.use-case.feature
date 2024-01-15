Feature: Autenticar Usuário
    Como um <Usuário>
    Eu quero <me autenticar no comércio eletrônico>
    De modo que <eu possa ter acesso as minhas informações pessoais e casos de uso que posso executar>

Scenario: Autenticação Válida (Padrão)
    Dado (Given) [Credenciais (email e senha) válidas]
    Quando (When) [Solicitar a autenticação do usuário]
    Então (Then) [O usuário deve poder ter acesso as suas informações pessoais e casos de uso que pode executar]

Scenario: Autenticação Inválida
    Dado (Given) [Credenciais (email e/ou senha) inválidas]
    Quando (When) [Solicitar a autenticação do usuário]
    Então (Then) [Um erro informando que as credenciais são inválidas e a autenticação falhou deve ser apresentado]