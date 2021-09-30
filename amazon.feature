#Language: pt 
Funcionalidade: checar se o nome do primeiro livro da lista de resultados contem a palavra Syllabus
    Como usuário na aplicação
    Quero acessar a Amazon e pesquisar na aba livros
    Para validar se o primeiro livro da lista de resultados contem a palavra Syllabus

    Cenário: Realizar o acesso, a pesquisa e checagem da lista de resultados da consulta
        Dado que esteja na página home da Amazon
        E esteja na busca por livros
        Quando acessar a aba Livros
        E efetuar a digitação ISTQB
        Então deverá ser exibido os livros com os resultados para ISTQB
        Dado que esteja na página de resultados da consulta
        Quando checar se o nome do primeiro livro da lista de resultados contem a palavra "Syllabus"
        Então deverá ser validado que o primeiro livro contem a palavra "Syllabus"
        




