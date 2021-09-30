#Language: pt 
Funcionalidade: checar se o nome do primeiro livro da lista de resultados contem a palavra Syllabus
    Como usuário na aplicação
    Quero acessar a Amazon 
    Para validar as informações na pesquisa

    Cenário: Realizar o acesso, a pesquisa e checagem da lista de resultados da consulta
        Dado que esteja na página home da Amazon
        Quando acessar a aba Livros
        E efetuar a digitação "ISTQB"
        E deverá ser exibido os livros com os resultados para ISTQB
        Então deverá ser validado que o primeiro livro contém a palavra "Syllabus"
    