import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]
    # o conteúdo é transformado em dicionário python(obj)
    # acessamos a chave results que é onde contém nossa lista de pokemons
for pokemon in pokemons:
    print(pokemon["name"])  # imprime o primeiro pokemon da lista