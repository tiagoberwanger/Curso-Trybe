class TV:
    def __init__(self):
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 100:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume >= 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if self.__canal > 0 or self.__canal < 100:
            self.__canal = canal
        else:
            raise ValueError('Invalid channel')

    def ligar_desligar(self):
        # explicação dessa linha?
        self.__ligada = not self.__ligada

    def is_ligada(self):
        return self.__ligada

