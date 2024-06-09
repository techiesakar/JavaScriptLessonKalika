# pattern matching

[abc] - a or b or c
[^abc] - except a or b or c
[a-z] - a to z
[^a-z] - except a to z
[A-Z] - only A to Z

[^A-Z] - Except Capitalize Alphabets
[a-zA-Z] - a to z or A to Z or any alphabets
[a-zA-Z0-9] - any alphabets or number
[0-9] - any number from 0-9

# Quantifiers

[] ? - occur 0 or more
[] + - 1 or more
[] \* - 0 or more
[] {n} - nth time
[] {n, } - atleast nth time
[] {x,y} - min x, max y

# Meta Character

/d - [0-9] - digits
/D - [^0-9] - except digits

/w - [a-zA-Z0-9]
/W - expect words

# Email validation

hello@gmail.com - correct
hello.world@gmail.com - correct
he.world.good@gmail.com - correct
helloworld.@gmail.com - incorrect
hello1@gmail.com - incorrect
hello..world@gmail.com - incorrect


