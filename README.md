# Projeto Quarentena-Verao
O Projeto Quarentena-Verao consiste de um aplicativo para acompanhamento das
rotinas de desafios.
As rotinas de desafios, por sua vez consistem em rotinas de exercicios e alimentacao pre-estipuladas entre os competidores, que precisam cumprir a rotina ou arcar com a perda da aposta financeira.

![App screenshot](https://i.imgur.com/P15BJqR.png)

## Objetivos

### do Projeto
Estimular a construcao de uma rotina de exercicios e alimentacao visando uma vida mais saudavel.
### do Aplicativo
Para o autor, este aplicativo serve como plataforma de aplicacao dos conhecimentos recem-adquiridos na area de aplicacoes web.

## Stack
Este aplicativo atualmente eh construido utilizando React, com estados gerenciados por Redux, se alimenta de uma API RestFul criada sobre Flask que armazena os dados em um banco PostgresSQL. Tanto front-end quanto API se encontram servidos em ambientes Heroku.

## Estado atual
Atualmente a aplicacao se encontra funcional, porem com nomes dos usuarios fixados e sem autenticacao. 
As mudancas realizadas pelo usuario sao comunicadas para um banco de dados atraves de uma API e persistem de uma sessao para outra.
