import requests


# À partir da décima requisição somos bloqueados de acessar o recurso
# Código de status 429: Too Many Requests
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    if (response.status_code == 200):
        print("OK")
    elif (response.status_code == 429):
        print("Too many requests")
    else:
        print("Internal error")
    