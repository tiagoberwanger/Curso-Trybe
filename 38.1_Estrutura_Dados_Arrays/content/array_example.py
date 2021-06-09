"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""
import sys


# CRIANDO UMA CLASSE PARA DEFINIR METODOS DE MANIPULAÇÃO DO ARRAY
class Array:

    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

    def update(self, index, value):
        return self.data.insert(index, value)


# PREENCHENDO A ESTRUTURA DE DADOS DO ARRAY
array = Array()
array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")

# ACESSANDO ELEMENTOS PELO INDICE
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley
print("-----")

# ITERANDO SOBRE OS ELEMENTOS DO ARRAY
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1

# IMPRIMINDO CONTEÚDO DO ARRAY
print("-----")
print("content of array:", array)

# VERIFICANDO TAMANHO DO ARRAY
print("-----")
array_memory_size = sys.getsizeof(array.data)
print("size of the array:", array_memory_size)

# ALTERANDO POSIÇÃO DE NOVOS ELEMENTOS ARRAY
print("-----")
array2 = Array()
array2.set(0, "Marcos")
array2.set(1, "Patrícia")
print(array2)  # saída: ["Marcos", "Patrícia"]
# inserindo no começo do array
array2.set(0, "Valeria")
print(array2)  # saída: ["Valeria", "Marcos", "Patrícia"]
# inserindo em uma posição intermediária
array2.set(1, "Miguel")
print(array2)

# REMOVENDO ELEMENTO ESPECIFICO PELA POSIÇÃO NO ARRAY
print("-----")
array2.remove(0)  # retorna a string "Valeria"
print(array2)  # saída: ['Miguel', 'Marcos', 'Patrícia']

# EDITANDO ELEMENTO ESPECIFICO PELA POSIÇÃO NO ARRAY
print("-----")
array2.update(0, 'Tiago')
print(array2)  # saída: ['Tiago', 'Marcos', 'Patrícia']
