#Language: pt   
Funcionalidade: Conferir as visualizações do canal da Compasso UOL
    Como usuário computacional
    Quero acessar a página home do Youtube
    Para fazer a pesquisa específica e acessar

    Cenário: Acessar a página do Youtube
        Dado que esteja na página home do navegador
        Quando abrir a pesquisa do google, deverá pesquisar "www.youtube.com"
        Então deve ser aberto o site do Youtube
    Cenário: Pesquisa na página do Youtube
        Dado que eu esteja na página home do Youtube
        Quando for aberto a aba de pesquisa, deverá pesquisar por "Compasso UOL"
        Então deverá ser apresentado os resultados da pesquisa
    Cenário: Acessar o canal da Compasso UOL
        Dado que esteja sendo apresentado os resultados da pesquisa
        Quando for selecionado o canal da Compasso UOL
        Então deverá abrir a seguinte guia "www.youtube.com/c/Compasso"
    Cenário: Acessar a aba "Sobre" do canal da Compasso UOL
        Dado que esteja aberto o canal da Compasso UOL
        Quando for clicar na aba "Sobre"
        Então deverá ser exibido os dados da aba "Sobre"
    Cenário: Validar se o número de visualizações é maior que 30k
        Dado que a aba "Sobre" esteja aberta e exibindo os dados do canal da Compasso UOL
        Quando realizar a leitura das Estatísticas
        Então deverá ser validado que o numero de visualizações é menor que 30k

