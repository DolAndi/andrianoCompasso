#Language: pt   
Funcionalidade: Conferir as visualizações do canal da Compasso UOL
    Como usuário na aplicação
    Quero acessar o canal da Compasso UOL
    Para validar as informações do canal

    Cenário: Validar se o número total de visualizações é maior/menor que 30.000
        Dado que esteja na página home do Youtube
        Quando realizar a pesquisa por "Compasso Uol"
        E acessar o canal da Compasso Uol
        E acessar a aba SOBRE dso canal
        Então o número total de visualizações deve ser menor que 30.000   

