cons = (a, b) => {
  pair = (f) => {
    return f(a, b)
  }

  return pair
};

car = (pair) => {
  pair((a, b) => console.log(a));
}

cdr = (pair) => {
  pair((a, b) => console.log(b));
}

car(cons(3, 4));
cdr(cons(3, 4));

/**
  Solution:
  1. cons(a, b) returns a function, that takes a function as an argument and calls that function with 2 arguments, a and bug
  2. This means that for the car and cdr functions, they take in one parameter (pair, which is returned from the cons function)
  3. Pair must be called, but must take in an anonymous function, with 2 arguments, a and b.
  4. The action taken by this anonymous function is the simple console.log of either the least or greatest value.
*/
