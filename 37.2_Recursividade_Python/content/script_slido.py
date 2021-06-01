from selenium import webdriver
from webdriver_manager.firefox import GeckoDriverManager


# script to automatically click on slido score button
times_clicked = []


def click_automatization(url, xpath, times):
    times_clicked.append(times)
    if times == 0:
        print(f'CLICKED {times_clicked[0]} TIMES')
    else:
        driver = webdriver.Firefox(
            executable_path=GeckoDriverManager().install()
        )
        driver.implicitly_wait(3)
        driver.get(url)
        element = driver.find_element_by_xpath(xpath)
        element.click()
        click_automatization(url, xpath, (times - 1))


click_automatization(
    # webpage
    'https://cpstest.org/',
    # xpath from element
    '//*[@id="start"]',
    # how many times will click
    3
)
