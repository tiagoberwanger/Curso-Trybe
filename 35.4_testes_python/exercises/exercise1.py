def FizzBuzz(n):
    array = []
    # range de 1, n
    for i in range(1, n+1):
        if (i % 3 == 0 and i % 5 == 0):
            array.append("FizzBuzz")
        elif (i % 3 == 0):
            array.append("Fizz")
        elif (i % 5 == 0):
            array.append("Buzz")
        else:
            array.append(i)
    return array


print(FizzBuzz(15))
