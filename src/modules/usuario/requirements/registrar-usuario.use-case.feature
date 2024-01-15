Feature: Registrar Usuário
    Como um <Usuário>
    Eu quero <me registrar no comércio eletrônico>
    De modo que <eu possa ter uma experiência de compra personalizada e acompanhar meus pedidos>
       
Scenario: Registrar um Novo Usuário (Padrão)
    Dado (Given) [Um Novo Usuário]
    Quando (When) [Solicitar o registro do usuário]
    Então (Then) [O usuário e seus dados deve ser registrado corretamente]