import sys
from array import array

# define um array vazio de inteiros sem sinal
myarray = array("I")

# podemos adicionar alguns valores
myarray.insert(0, 5)  # na posição 0 o valor 5
myarray.insert(1, 3)
myarray.insert(2, 5)
print("Após adicionar alguns valores: ", myarray)

# adicionar em uma posição intermediária
myarray.insert(1, 4)
print("Após inserção em índice intermediário: ", myarray)


# remover um valor através do índice
myarray.pop(0)
print("Após remover um valor:", myarray)

# compare o tamanho entre a lista e um array
elements = list(range(100))  # definimos uma lista de 100 números
print("Tamanho da lista:", sys.getsizeof(elements))
print("Tamanho do array", sys.getsizeof(array("I", elements)))
