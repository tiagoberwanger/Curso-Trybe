def arit_average(list):
    res = 0
    for item in list:
        res += item
    return res / len(list)


print(arit_average([5, 10, 40, 30, 15]))
