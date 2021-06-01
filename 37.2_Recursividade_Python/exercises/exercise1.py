def even_counter(n):
    counter = 0
    for number in range(1, n):
        if (number % 2 == 0):
            counter += 1
    return counter


print(even_counter(29))
