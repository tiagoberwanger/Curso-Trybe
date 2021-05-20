# Que tal agora então modelarmos uma televisão

class Televisao:
    def __init__(self, polegadas=0, smart=False, valor=0):
        # porque as variáveis não estão inicializadas?
        self.polegadas = polegadas
        self.smart = smart
        self.valor = valor

    def get_polegadas(self):
        return self.polegadas

    def set_polegadas(self, polegadas):
        self.polegadas = polegadas

    def get_smart(self):
        return "Sim!" if self.smart else "Não!"

    def set_smart(self, smart):
        self.smart = smart

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
