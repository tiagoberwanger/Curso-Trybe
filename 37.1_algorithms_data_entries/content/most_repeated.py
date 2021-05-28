from typing import Counter
from timeit import timeit


def most_common_long_algorithm(numeros):
    contador = dict()

    for numero in numeros:
        contador[numero] = contador.get(numero, 0) + 1

    numero_mais_frequente = None
    maior_contagem = 0

    for numero, contagem in contador.items():
        if contagem > maior_contagem:
            numero_mais_frequente = numero
            maior_contagem = contagem
    return numero_mais_frequente


def most_common_short_algorithm(numeros):
    return Counter(numeros).most_common(1)[0][0]


numeros = [1, 2, 2, 6, 6, 6, 6, 7, 10]
print(most_common_long_algorithm(numeros))
print(most_common_short_algorithm(numeros))
print(timeit('most_common_long_algorithm', number=100000, globals=globals()))
# 0.0027260400020168163
print(timeit('most_common_short_algorithm', number=100000, globals=globals()))
# 0.0016955409992078785
