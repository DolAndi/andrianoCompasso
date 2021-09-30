#Language: pt 
Funcionalidade: Validar se existem vagas para automação de testes
    Como usuário na aplicação
    Quero acessar a página da Compasso UOL
    Para validar se existem vagas de emprego em automação de testes

    Cenário: 
        Dado que esteja na página da Compasso UOL
        Quando acessar a aba "Cultura"
        E acessar o "Confira as nossas vagas"
        E acessar o link para o site da Gupy de Transformação de negócios e Desenvolvimento Ágil
        Dado que esteja na página da Gupy
        E validado que a URL foi direcionada
        Então deverá ser exibido que existem vagas para automação de testes

