# [709. To Lower Case](https://leetcode.com/problems/to-lower-case/description/)

<!--
  describe the function's behavior in your own words.
  explain why someone might want to use this function
-->
use this function to return the string after replacing every uppercase letter with the same lowercase letter.
use toLowerCase() method of String values returns this string converted to lower case.

## Syntax

> const toLowerCase = (s)=> {
    return s.toLowerCase()

};

### Parameters

**paramName**: `string`

<!--
  describe the parameter
-->
A string consists of printable ASCII characters.
### Return Value: `string`

<!--
  describe the return value
-->
A string consists of printable ASCII characters in lowercase.

## Test Cases

<!--
  copy in the test cases from the original challenge

  if you write your own test cases in a sandbox file, include those too
-->
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.toLowerCase();
};

// refactored to use describe/it/expect
describe(' To Lower Case test ', () => {

    it('it should return hello from Hello   ', () => {
    const returned = toLowerCase("Hello")
    expect(returned).toEqual("hello");
  });
  
   it('it should return lovely rom LOVELY   ', () => {
    const returned = toLowerCase("LOVELY")
    expect(returned).toEqual("lovely");
  });
});
## Use Cases

<!--
  write a minimum of 2 use cases to show this functions behavior.

  try to find interesting _edge cases_, it's good for you ;)
  an edge case is when a function behaves different than you'd expect.
  This will help you and others better understand the function.

  https://www.geeksforgeeks.org/dont-forget-edge-cases/
-->

---

## Retrospective

<!--
  write any notes to help you review this exercise later, and to help others' study it.

  this might include:

  - good ideas to use later in your own code
  - less good ideas to avoid in your own code
  - new vocabulary you learned
  - the most important thing(s) you learned
  - something that you still don't understand but want to keep studying
  - something that surprised you
  - tricks you will want to remember and use later
-->
I'm still struggling to tell the difference between use cases and test cases
### Continue Doing
- Many experimental refactors of each solution I studied
- Writing extra test cases
### Start Doing
KISS: keep it simple stupid ;

### Stop Doing
- Expecting to understand every solution perfectly,