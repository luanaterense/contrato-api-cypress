# contrato-api-cypress

Este projeto foi criado com a intenção de apresentar um estudo sobre testes de contrato com Cypress e AJV (Json Schema Validator).

Documentações:
- https://ajv.js.org/guide/getting-started.html
- https://docs.cypress.io/guides/overview/why-cypress

Ao clonar o projeto, será necessário o download do NodeJS e então o download do Cypress e AJV.

Para instalar o AJV, execute o seguinte comando:

    npm install ajv --save-dev

Para instalar o Cypress, execute:

    npm install cypress --save-dev

Ao realizar as instalações os testes poderão ser executados através do comando:

    npm test

Caso queira apenas executar localmente o teste, execute o comando abaixo e utilize a janela do Cypress para isso.

    npx cypress open

Ao executar os testes, será possível visualizar as evidências locais nas pastas ..\cypress\videos e ..\cypress\evidências.

Em nuvem, será possível verificar os gráficos e evidências neste [link](https://cloud.cypress.io/projects/4isatm/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D "link").

O GitHub Actions também demonstrará a execução do teste.

Parte do código é referente a aula apresentada neste [vídeo](https://www.youtube.com/watch?v=ZBy5ijQakbU&t=744s "vídeo").