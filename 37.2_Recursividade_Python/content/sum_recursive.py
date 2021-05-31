def factorial_sum(n):  # nome da função e parâmetro
    if n == 1:  # condição de parada
        return 1

    else:
        return n + factorial_sum(n - 1)
        # chamada de si mesma com um novo valor


print(factorial_sum(4))
