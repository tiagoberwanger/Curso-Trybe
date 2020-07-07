#!/bin/bash

echo "Hello World"
echo "Olá, qual o seu nome?"
read NOME

echo "Muito prazer, $NOME!"

echo "Qual a sua idade?"

read idade

TAREFAS="beber fumar vadiar"

if [ $idade -lt 18 ]
then 
echo "Você é menor de idade!"
else 
echo "Você é maior de idade!"
for TAREFA in $TAREFAS
do 
echo "Hoje pode $TAREFA sem se preocupar!"
done
echo "Sextoooooooooooou galera!!!! #usemáscara #seufaraósoueu"
fi 