import requests

response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Chrome", "Accept": "text/html"},
)

print(response.status_code)

assert "bot detected" not in response.text
# o que é esse bot detected?
