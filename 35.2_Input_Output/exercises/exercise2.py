# não entendi nada
import random

right_word = "paralelepipedo"

scrambled_word = "".join(random.sample(right_word, len(right_word)))
print(scrambled_word)

guessed_word = ""
while guessed_word != right_word:
    guessed_word = input("Que palavra é essa? ")
    if (guessed_word != right_word):
        print("Tente novamente...")

print("Parabéns, você acertou!")