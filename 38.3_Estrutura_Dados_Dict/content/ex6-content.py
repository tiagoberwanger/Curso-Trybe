from collections import Counter

entrada = [1, 3, 2, 4, 5, 1]


def duplicated(entry):
    list_repeated = Counter(entry).most_common()
    for item in list_repeated:
        if item[1] > 1:
            return item[0]


print(duplicated(entrada))
