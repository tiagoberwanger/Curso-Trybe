# Ordem de omplexidade é O(n)
# Quando a entrada é n e o retorno também é n dizemos que é constante
def squared_array(numbers):
    array_of_squares = []
    for number in numbers:
        array_of_squares.append(number + number)

    return array_of_squares


# Os arrays tem sempre o mesmo tamanho
# Ordem de omplexidade é O(n²)
# Quando a entrada é n e o retorno também é n² dizemos que é quadrática
def multiply_arrays(array1, array2):
    result = []
    for number1 in array1:
        for number2 in array2:
            result.append(number1 + number2)

    return result


# Os arrays tem sempre o mesmo tamanho
# Ordem de omplexidade é O(n³)
# Quando a entrada é n e o retorno também é n³ dizemos que é cúbica
def multiply_arrays2(array1, array2, array3):
    result = []
    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 + number2 + number3)

    return result
