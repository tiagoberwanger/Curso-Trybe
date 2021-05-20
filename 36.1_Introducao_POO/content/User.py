class User:
    def __init__(self, name, email, password):
        """ Método construtor da classe User. Note que
        o primeiro parâmetro deve ser o `self`."""
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self, password):
        self.password = password
        print("password redefined!")


# Para invocar o método construtor, a sintaxe é NomeDaClasse(p1, p2)
# Repare que o parâmetro self foi pulado -- um detalhe do Python.
tiago = User("Tiago Berwanger", "berwangertiago@gmail.com", "123456")
# A variável `meu_user` contém o objeto criado pelo construtor da classe User!

print(tiago.name)
print(tiago.email)
print("password antigo: " + tiago.password)

tiago.reset_password("tiago123")
print("password novo: " + tiago.password)
