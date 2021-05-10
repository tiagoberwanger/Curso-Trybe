# 1 lata tinta = R$80
# 1 lata = 54m2

import math


def how_much_paint(m2):
    cans = m2 / 54
    total_cans = math.ceil(cans)
    price = total_cans * 80
    return total_cans, price


print(how_much_paint(120))
