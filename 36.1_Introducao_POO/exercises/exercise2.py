# Nome da abstração
# Retângulo

# Atributos/estados
# - comprimento
# - largura

# Comportamentos
# - calcular area (comprimento * largura)
# - calcular perímetro (comprimento*2 + largura*2)


class Retangulo:
    def __init__(self, comprimento, largura):
        self.comprimento = comprimento
        self.largura = largura

    def calcula_perimetro(self, comprimento, largura):
        return comprimento*2 + largura*2

    def calcula_area(self, comprimento, largura):
        return comprimento * largura


calcula = Retangulo(2, 4)
print("A área é", calcula.calcula_area(2, 4), "metros²")
print("O perímetro é", calcula.calcula_perimetro(2, 4), "metros")
