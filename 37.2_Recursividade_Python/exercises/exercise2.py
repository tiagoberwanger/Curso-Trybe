def even_counter_recursive(n):
    counter = 0
    if (n == 1):
        return 0
    else:
        if n % 2 == 0:
            counter += 1
        return counter + even_counter_recursive(n-1)


print(even_counter_recursive(29))
