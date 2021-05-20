# Nome da abstração
# Círculo

# Atributos/estados
# - raio

# Comportamentos
# - calcular area (3,14 * raio²)
# - calcular perímetro (3,14 * raio * 2)


class Circulo:
    def __init__(self, raio):
        self.raio = raio

    def calcula_perimetro(self, raio):
        return raio*raio*3.14

    def calcula_area(self, raio):
        return raio*3.14*2


calcula = Circulo(3)
print("A área é", calcula.calcula_area(3), "metros²")
print("O perímetro é", calcula.calcula_perimetro(3), "metros")
