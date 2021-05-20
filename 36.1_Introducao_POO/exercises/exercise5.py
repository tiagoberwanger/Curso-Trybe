# Que tal agora então modelarmos uma televisão

class Televisao:
    def __init__(self, polegadas, smart, valor):
        # porque as variáveis não estão inicializadas?
        self.polegadas = 0
        self.smart = False
        self.valor = 0

    def get_polegadas(self):
        return self.polegadas

    def set_polegadas(self, polegadas):
        self.polegadas = polegadas

    def get_smart(self):
        return self.smart

    def set_smart(self, smart):
        if smart is True:
            self.smart = smart
            return "Sim!"
        else:
            return "Não!"

    def get_valor(self):
        return self.valor

    def set_valor(self, valor):
        self.valor = valor


detalhes_televisao = Televisao(0, False, 0)
print("Detalhes da televisão:")
print("-----------------")
detalhes_televisao.set_polegadas(42)
print("Qual é o tamanho?", detalhes_televisao.get_polegadas())
# Não está setando boolean
detalhes_televisao.set_smart(True)
print("É smart?", detalhes_televisao.get_smart())
detalhes_televisao.set_valor(1500)
print("Custou R$", detalhes_televisao.get_valor())
