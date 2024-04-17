# [GiteshSK_12](https://leetcode.com/problems/to-lower-case/solutions/4738654/simple-beginner-friendly-dry-run-simple-iteration-ascii-values-tc-o-n-sc-o-1-gits/)

```js

```

## Strategy

<!--
  Describe what strategy they used to pass this challenge.
  Careful! your strategy description should not mention
    the code they wrote to solve the challenge.

  Practice describing their strategy at a higher level:
  a simple way to understand strategy is to think of the important steps
  between the argument values and the return values.

  For example if they use a `for` loop
  you won't mention that `i` was incremented,
  but you might mention how the final result changes at each iteration.
-->
Convert Uppercase Letters to Lowercase

    For each character, convert it to its ASCII value. This step is crucial for determining whether the character is uppercase.
    Check if the ASCII value is within the range of uppercase letters (65 to 90). If so, add 32 to the ASCII value to convert it to the corresponding lowercase letter.
    Use casting to convert the adjusted ASCII value back into a character.


## Implementation

<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->

		 The ascii value from 65 to 90 represent the uppercase alphabet A to Z.
		 While, the ascii value from 97 to 122 represent the lowercase alphabet a to z.
		 By adding 32 to the ascii value, we are converting it to lowercase.

## Possible Refactors

<!--
  List a couple changes you could make in their code without changing their strategy.
  For example:
    `while` loops and `for` loops can often be interchanged.
    `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

  You don't need to actually rewrite the function.
  The goal of this section is that you exploring different JS language features
  and think of different ways to implement the same strategy.
-->
N/A
## References

<!--
  links that helped you to understand this solution or to think of possible refactors
-->
# [Deadication](https://leetcode.com/problems/to-lower-case/solutions/936869/javascript-solution/)
it helped me to understand more 