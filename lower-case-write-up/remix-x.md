# Remix x

<!--
  which solutions inspired your solution?
  what did you take from each one?

  what did you not like from the other solutions?
  what did you leave out of your solution?
-->

```js
const toLowerCase = function(str) {
    let res = "";
    
    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i);
		
		// The ascii value from 65 to 90 represent the uppercase alphabet A to Z.
		// While, the ascii value from 97 to 122 represent the lowercase alphabet a to z.
		// By adding 32 to the ascii value, we are converting it to lowercase.
        if (ascii >= 65 && ascii <= 90) res += String.fromCharCode(ascii + 32);
        else res += str.charAt(i);
    }
    
    return res;
};
```

## Strategy
using the charCodeAt() on each character from the string and then adding 32 to the ascii value, to convert it to lowercase. 

## Implementation

## Possible Refactors

## References
