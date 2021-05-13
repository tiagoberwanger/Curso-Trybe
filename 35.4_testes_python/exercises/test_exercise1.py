from exercise1 import FizzBuzz


def test_fizzbuzz_should_return_list_of_numbers():
    assert FizzBuzz(2) == [1, 2]


def test_fizzbuzz_divisible_by_three_should_be_fizz():
    assert FizzBuzz(3)[-1] == "Fizz"


def test_fizzbuzz_divisible_by_five_should_be_buzz():
    assert FizzBuzz(5)[-1] == "Buzz"


def test_fizzbuzz_divisible_by_five_and_three_should_be_fizzbuzz():
    assert FizzBuzz(15)[-1] == "FizzBuzz"