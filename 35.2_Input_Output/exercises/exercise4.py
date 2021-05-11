
import json
import csv
from collections import Counter

with open("books.json") as content:
    books = json.load(content)["books"]

categories = []
for book in books:
    for category in book["categories"]:
        categories.append(category)

counterInTuples = Counter(categories).most_common()
counter = Counter(categories)
values = counter.values()
totalBooks = sum(values)
books_and_percentages = []
for book in counterInTuples:
    books_and_percentages.append(f'{book[0]},{book[1]/totalBooks}')

headers = ["categoria", "porcentagem"]

with open('report.csv', 'w', newline='') as books_report:
    books_report = csv.writer(books_report, delimiter=',')
    books_report.writerow(headers)
    books_report.writerow(books_and_percentages)