#!/bin/bash
echo "Shell Script é demais!"
FRASE="Shell Script com variáveis é demais!"
HOSTNAME=`hostname`
echo "Este script está rodando no computador: $HOSTNAME em que $HOSTNAME é o resultado do comando `hostname` que está na variável"
PATH="/home/trybe/exercicio.sh"
if [ -e $PATH ] 
then
    echo "O caminho $PATH está habilitado!"
fi
if [ -w $PATH ]
  then
    echo "Você tem permissão para editar $PATH"
  else
    echo "Você NÃO foi autorizado a editar $PATH"
fi 

echo "Informe o caminho do arquivo ou diretório:"
read PATH
if [ -f $PATH ]
  then 
    echo "$PATH é um arquivo comum"
elif [ -d $PATH ]
  then
    echo "$PATH é um diretório"
else
    echo "$PATH é alguma outra coisa"
fi

ls -l $PATH
