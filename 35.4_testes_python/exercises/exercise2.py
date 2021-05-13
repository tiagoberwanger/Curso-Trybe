def transform_letters_into_numbers(string):
    integers = []
    array = list(string)
    for i in array:
        if i == 'A' or i == 'B' or i == 'C':
            integers.append(2)
        if i == 'D' or i == 'E' or i == 'F':
            integers.append(3)
        if i == 'G' or i == 'H' or i == 'I':
            integers.append(4)
        if i == 'J' or i == 'K' or i == 'L':
            integers.append(5)
        if i == 'M' or i == 'N' or i == 'O':
            integers.append(6)
        if i == 'P' or i == 'Q' or i == 'R' or i == 'S':
            integers.append(7)
        if i == 'T' or i == 'U' or i == 'V':
            integers.append(8)
        if i == 'W' or i == 'X' or i == 'Y' or i == 'Z':
            integers.append(9)
    strings = [str(integer) for integer in integers]
    result_string = ''.join(strings)
    result_integer = int(result_string)
    return result_integer


print(transform_letters_into_numbers('TIAGO-BERWANGER'))
