# porque não funciona?
def even_counter_recursive(n):
    counter = 0
    while (n > 1):
        if n % 2 == 0:
            counter += 1
        even_counter_recursive(n-1)
    return counter


print(even_counter_recursive(29))
