# Jogo chamado blefe, cada jogador escolhe 5 números.
# Os números que não se interseccionarem entre os jogadores viram pontos.
# A pontuação é calculada pelo maior número menos o menor.


def blefe(entry, player1, player2):
    pl1 = set(entry[player1]).difference(set(entry[player2]))
    pl2 = set(entry[player2]).difference(set(entry[player1]))
    player1_points = abs(list(pl1)[-1] - list(pl1)[0])
    player2_points = abs(list(pl2)[-1] - list(pl2)[0])
    if player1_points > player2_points:
        return f'{player1} won the game'
    else:
        return f'{player2} won the game'


entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 5, 8, 9]
}

print(blefe(entrada, 'Marco', 'Clara'))
