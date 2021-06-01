def wrong_commit(list):
    for item in list:
        if item is False:
            return list.index(item)


teste1 = [True, True, True, True, False, False, False]
teste2 = [True, True, False, False, False, False, False]
# print(wrong_commit(teste1))
# print(wrong_commit(teste2))

assert wrong_commit(teste1) == 4
assert wrong_commit(teste2) == 2
