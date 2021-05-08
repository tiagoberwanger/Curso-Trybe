def is_triangle(a, b, c):
    if (a + b < c or a + c < b or b + c < a):
        return 'it is not a triangle'
    elif (a == b and b == c and a == c):
        return 'it is equilateral'
    elif (a == b or b == c or a == c):
        return 'it is isoceles'
    else:
        return 'it is escaleno'


print(is_triangle(4, 4, 4))