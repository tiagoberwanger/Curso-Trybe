import requests

response = requests.get("https://httpbin.org/encoding/utf8")
print(response.status_code)  # código de status
print(response.headers["Content-Type"])  # conteúdo no formato html
print(response.text)  # Conteúdo recebido da requisição
