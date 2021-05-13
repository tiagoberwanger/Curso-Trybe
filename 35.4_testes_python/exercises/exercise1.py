def FizzBuzz(n):
    array = []
    for i in range(n):
        if (i % 3 == 0 and i % 5 == 0):
            array.append("fizzbuzz")
        elif (i % 3 == 0):
            array.append("fizz")
        elif (i % 5 == 0):
            array.append("buzz")
        else:
            array.append(i)
    return array


print(FizzBuzz(15))
# porque o fizzbuzz tá aparecendo no inicio???