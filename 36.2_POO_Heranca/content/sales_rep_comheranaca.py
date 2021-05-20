from abc import ABC, abstractmethod
from csv import DictWriter
import json


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    @abstractmethod
    def get_length(self):
        raise NotImplementedError


# class MinhaClasseHerdeira(ClasseAscendente)
class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)

    def get_length(self):
        with open(self.export_file + '.json', 'r') as file:
            return len(json.load(file))


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open('meu_relatorio.csv', 'w') as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)

    def get_length(self):
        print("length of csv is x")
        # return length


# Classe, crie uma nova entidade 'Relatório de vendas' para eu usar!
meu_relatorio_de_vendas_JSON = SalesReportJSON('meu_relatorio')
meu_relatorio_de_vendas_CSV = SalesReportCSV('meu_relatorio')
# Entidade 'meu_relatorio_de_vendas', que eu acabei de criar, imprima-se!
meu_relatorio_de_vendas_JSON.serialize()
meu_relatorio_de_vendas_CSV.serialize()
print("Meu relatório tem tamanho", meu_relatorio_de_vendas_JSON.get_length())
