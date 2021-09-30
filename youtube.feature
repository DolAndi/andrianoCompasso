#Language: pt   
Funcionalidade: Conferir as visualizações do canal da Compasso UOL
    Como usuário computacional
    Quero acessar o canal da Compasso UOL do Youtube
    Para fazer a pesquisa específica e conferir o número de visualizações

    Cenário: Validar se o número total de visualizações é maior/menor que 30k
        Dado que eu esteja na página home do Youtube
        Quando for aberto a aba de pesquisa, deverá pesquisar por "Compasso UOL"
        Então deverá ser apresentado os resultados da pesquisa
        Dado que esteja sendo apresentado os resultados da pesquisa
        Quando for selecionado o canal da Compasso UOL
        Então deverá abrir a seguinte guia "www.youtube.com/c/Compasso"
        Dado que esteja aberto o canal da Compasso UOL
        Quando for clicar na aba "Sobre"
        Então deverá ser exibido os dados da aba "Sobre"
        Dado que a aba "Sobre" esteja aberta
        E exibindo os dados do canal da Compasso UOL
        Quando realizar a leitura das Estatísticas
        E duas linhas abaixo das Estatísticas estará exibido o total de visualizações
        Então deverá ser validado que o número de visualizações é menor que 30k

