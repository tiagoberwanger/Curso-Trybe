import requests


response = requests.get("https://api.github.com/users")

users = response.json()

for user in users:
    print(user["login"])
    print(user["url"])

# #  porque não:
# users = response.text
# for user in response.text:
#     print(user["login"])
#     print(user["url"])
