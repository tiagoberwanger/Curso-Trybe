from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")

selector = Selector(text=response.text)
title = selector.css(".product_main h1::text").get()
price = selector.css(".price_color::text").re(r"\d+\.\d{2}")[0]
description = selector.css("#product_description ~ p::text").get()
url_image = selector.css('img').xpath('@src').getall()[0]
print(f'{title},{price},{description},{url_image}')
