# cheguei até aqui hahaha
def bigger_value(list):
    while (len(list) > 1):
        list.sort(reverse=True)
        list.pop()
        bigger_value(list)
    return list[0]


print(bigger_value([4, 30, 1, 200, 5]))
