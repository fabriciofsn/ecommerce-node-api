Feature: Recuperar Usuário Por Email
    Como um <Usuário>
    Eu quero <recuperar um usuário por e-mail>
    De modo que <os dados do usuário estejam disponivéis para uso>
    
Scenario: E-mail Válido e Registrado (Padrão)
    Dado (Given) [E-mail Válido e Registrado]
    Quando (When) [Solicitar a recuperação do usuário por email]
    Então (Then) [O usuário deve ser recuperado corretamente]