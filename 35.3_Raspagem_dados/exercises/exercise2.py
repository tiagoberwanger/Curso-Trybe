import requests


response = requests.get("https://api.github.com/users")

users = response.json() #  porque?

for user in users:
    print(user["login"])
    print(user["url"])
