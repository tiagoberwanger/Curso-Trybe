from collections import Counter
import statistics


class Estatistic:
    def __init__(self, list):
        self.list = list

    def average(self, list):
        sum = 0
        for i in list:
            sum += i
        return sum / len(list)

    def mode(self, list):
        # que mágica é essa?
        number, _ = Counter(list).most_common()[0]
        return number

    def median(self, list):
        return statistics.median(list)


calculate = Estatistic(list)
print("A média é", calculate.average([1, 2, 3, 3, 4, 4, 4]))
print("A moda é", calculate.mode([1, 2, 3, 3, 4, 4, 4]))
print("A mediana é", calculate.median([1, 2, 3, 3, 4, 4, 4]))