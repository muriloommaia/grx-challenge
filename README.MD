<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="http://www.grxsolucoes.com.br/">
    <img src="http://www.grxsolucoes.com.br/wa_images/white_logo_transparent_background.png" alt="Logo" width="180" height="180">
  </a>

  <h3 align="center">Teste Prático - Desenvolvedor GRX</h3>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabela de Conteúdo</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#feito-com">Feito Com</a></li>
        <li><a href="#maior-desafio">Maior desafio</a></li>
        <li><a href="#etapas-faltantes">Etapas faltantes</a></li>
        <li><a href="#feedback">Etapas faltantes</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o Projeto</a>
      <ul>
        <li><a href="#pre-requisitos">Pre-Requisitos</a></li>
        <li><a href="#install-com-docker">Instalação via Docker</a></li>
        <li><a href="#install-com-npm">Instalação via NPM</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o Projeto

Para o teste foi pedido o desenvolvimento de uma página onde permita a disponibilização de campos (inputs) a serem preenchidos pelo usuário e que no final irão fornecer um resultado.

Para a instalação do aplicativo na sua máquina, vá em [Instalação](#iniciando-o-projeto);

<p align="right">(<a href="#top">back to top</a>)</p>



### Feito com:

Para a construção do aplicativo, foi usado:


**Backend**

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

**Frontend**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)


**Container**

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

### Maior desafio

O maior desafio esteve em construir o back-end levando em consideração a orientação a objeto juntamente com os conceitos de SOLID, principalmente pois algumas coisas do `express` não foram criadas para o POO, e transforma-las em uma classe foi um desafio. Além disso, utilizei o husk com o commitlint, e foi uma das primeiras vezes que fiz isso, então me gerou um pouco de confusão inicial para a montagem do ambiente de trabalho.

### Etapas faltantes

Eu gostaria de ter feito o `Diferencial`, mas realmente eu não pude por uma questão de tempo, por conta de outros projetos dentro da trybe e fora, acabei não podendo fazer. Olhando pra ele não acredito que seria complicado, foi realmente uma questão de tempo. Além disso, ficou faltando os testes unitários e de integração, que eu gosto muito de fazer, mas pelo mesmo problema do tempo foi impossível.

### Feedback

Achei o projeto interessante para uma vaga júnior, e foi uma boa oportunidade para aprender mais. Acredito que uma boa seria deixar um pouco mais especificado algumas stacks desejadas, o que foi dito era que deveria desenvolver preferencialmente utilizando .NET Framework, .NET Core ou Node.JS que disponibiliza uma página WEB, mas não foi dito qual framework usar no front ou algo do tipo.


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Iniciando o Projeto

Neste momento vamos entender como rodar o projeto localmente, para isso necessitamos falar de alguns pré requisitos.

### Pre-Requisitos

Indispensável: `NPM`
Facilitará: `docker`

### Install via docker

_Estando na raiz do projeto, você usará os seguintes comandos_:

```shell
npm run compose:up
```

Este comando executará o `docker-compose` que está na aplicação, após a finalização do docker-compose, o aplicativo estará rodando na porta `3000` do seu computador, podendo ser acessado através de:
* http://localhost:3000/

Para parar os containers, na pasta raiz do projeto, execute:

```shell
npm run compose:down
```

### Install via npm

_Estando na raiz do projeto, você usará os seguintes comandos_:

```shell
npm run install:app
```

Após isso, rode o comando:

```shell
npm run start:app
```

Após a finalização o aplicativo estará rodando na porta `3000` do seu computador, podendo ser acessado através de:
* http://localhost:3000/

> O back e o front estarão rodando nas portas `3001` e `3000` respectivamente, então é importante que estas portas estejam liberadas no seu servidor.



<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Murilo Moura Maia - [LinkedIn](https://www.linkedin.com/in/murilommaia)

Project Link: [GRX_Challenge](https://github.com/muriloommaia/grx-challenge)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/muriloommaia/crud-guru/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/murilommaia
[product-screenshot]: images/screenshot.png
