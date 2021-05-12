# import pytest
from code import is_even, divide


def test_is_even():
    assert is_even(2) is True


def test_divide():
    # with pytest.raises(ZeroDivisionError, match='division by zero'):
    assert divide(2, 1)