def reverse_list(list):
    tsil = []
    for i in reversed(list):
        tsil.append(i)
    return tsil


print(reverse_list([1, 3, 5, 7, 9]))
