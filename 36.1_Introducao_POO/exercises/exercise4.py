# Sistema de vendas de uma cafeteria.
# Como podemos abstrair um pedido composto por vários itens?
# Qual seu nome, atributos e comportamentos?


class Cafeteria:
    def __init__(self, tamanho, tipo, valor):
        # porque as variáveis não estão inicializadas?
        self.tamanho = ""
        self.tipo = ""
        self.valor = 0

    def get_tamanho(self):
        return self.tamanho

    def set_tamanho(self, tamanho):
        self.tamanho = tamanho

    def get_tipo(self):
        return self.tipo

    def set_tipo(self, tipo):
        self.tipo = tipo

    def get_valor(self):
        return self.valor

    def set_valor(self, valor):
        self.valor = valor


pedir_cafe = Cafeteria("", "", 0)
pedir_cafe.set_tamanho("médio")
print("Detalhes do café:")
print("-----------------")
print("Tamanho", pedir_cafe.get_tamanho())
pedir_cafe.set_tipo("forte")
print("Tipo", pedir_cafe.get_tipo())
pedir_cafe.set_valor(5)
print("Custou R$", pedir_cafe.get_valor())
