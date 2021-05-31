# fibonacci recursive function
def fibonacci_recursive(n):
    if n <= 1:
        return n
    else:
        return(fibonacci_recursive(n-1) + fibonacci_recursive(n-2))


# take input from the user
nterms = int(input("How many terms? "))
# check if the number of terms is valid
if nterms <= 0:
    print("Plese enter a positive integer")
else:
    print("Fibonacci sequence:")
    for i in range(nterms):
        print(fibonacci_recursive(i))
