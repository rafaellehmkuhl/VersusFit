# VersusFit
O VersusFit consiste de um aplicativo para estimulo no desenvolvimento de rotinas saudaveis.
Para isso o aplicativo coloca duas pessoas como desafiantes no cumprimento de rotinas que eles, em consenso, estipularam. No caso de nao cumprimento, o desafiante perde a aposta financeira.

![App screenshot](https://i.imgur.com/P15BJqR.png)

## Objetivos

### do Projeto
Estimular a construcao de uma rotina de exercicios e alimentacao visando uma vida mais saudavel.
### do Aplicativo
Para o autor, este aplicativo serve como plataforma de aplicacao dos conhecimentos recem-adquiridos na area de aplicacoes web.

## Stack
Este aplicativo atualmente eh construido utilizando React, com estados gerenciados por Redux, se alimenta de uma API RestFul criada sobre Flask que armazena os dados em um banco PostgresSQL. Tanto front-end quanto API se encontram servidos em ambientes Heroku.

## Estado atual
Atualmente a aplicacao se encontra funcional. 
As mudancas realizadas pelo usuario sao comunicadas para um banco de dados atraves de uma API e persistem de uma sessao para outra.
O nome dos usuarios ainda se encontra fixado.

## Como buildar
```
yarn install
yarn start
```
