robust-determinant
==================
Computes the determinant of an nxn matrix as a non-overlapping increasing sequence

## Example

```javascript
var robustDeterminant = require("robust-determinant")

console.log(robustDeterminant([[1e-30, 1], [1e64, 1e-10]])
```

### `require("robust-determinant")(m)`
Exactly computes the determinant of a floating point matrix `m`

* `m` is a square matrix

**Returns** The determinant of `m` as a non-increasing overlapping sequence

## Credits
(c) 2013 Mikola Lysenko. MIT License