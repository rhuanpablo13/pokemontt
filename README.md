<h1 align="center">
  👾 Pokemont 👾
</h1>
<p align="center">🚀 Sistema para exibição das cartas de pokemon desenvolvido com a linguagem angular na versão 9.0.0-rc.0 utilizando uma arquitetura MVC e baseada em componentes Web.
</p>

### Features

- [x] Página com visão em grid na versão desktop;
- [x] Página com visão em carrosel na versão mobile, somente das cartas Pokemon;
- [x] Páginas de detalhes da carta de Pokemon
- [x] Modal com detalhe do ataque do Pokemon
- [x] Testes Unitários
- [ ] Testes E2E
- [x] Rotas
- [x] SASS
- [x] PWA
- [x] Publicado no Heroku
- [x] Eslint + Prettier + husky + commitlint
- [x] Internacionalização

#### Página com visão em grid na versão desktop e carrosel na versão mobile, somente das cartas Pokemon:

- Imagem da carta
- Nome do Pokemon
- ID do Pokemon
- Tipo(s)
- Ao interagir redirecionar para a tela de detalhes

#### Páginas de detalhes da carta de Pokemon:

- Imagem
- Nome
- ID do Pokemon
- Tipo(s)
- Resistencia(s)
- Fraqueza(s)
- Lista de nomes dos ataques do pokemon ao clicar exibir a modal de detalhe

#### Modal com detalhe do ataque do Pokemon com:

- Custo de “mana”
- Nome
- Dano
- Descrição

### 🏆 Aplicação [Demo](https://pokemontt.herokuapp.com/)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js - v14.16.1](https://nodejs.org/en/), [Angular CLI](https://github.com/angular/angular-cli) versão 9.0.0-rc.0.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Front

```bash
# Clone este repositório
$ git clone git@github.com:isa-desenvolvimento/pokemont.git

# Acesse a pasta do projeto no terminal/cmd
$ cd pokemont

# Instale as dependências - como está configurado no heroku o npm
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ ng serve

# O servidor inciará na porta:4200 - acesse <http://localhost:4200>

# Execute os testes unitários
$ ng test

# Execute os testes de integração
$ ng e2e

# Execute o build para pwa
$ ng build --prod
$ cd dist/pokemont
$ http-server -o

# O servidor inciará na porta:8081 - acesse <http://127.0.0.1:8081>

```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Angular 9](https://angular.io/cli/)
- [Bootstrap](https://getbootstrap.com/)
- [Protector](https://www.protractortest.org/)
- [Jasmine](https://jasmine.github.io/)
- [Karma](https://karma-runner.github.io)
- [Commitlint](https://commitlint.js.org/)
- [Husky](https://www.husky.com.br/)
- [Travis CI](https://travis-ci.com/)
