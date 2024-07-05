/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 *
 *

02. Add Binary
Given two binary strings a and b, return their sum as a binary string.


Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
 */

export default function addBinary(a, b) {
  const aToBinary = parseInt(a, 2);
  const bToBinary = parseInt(b, 2);
  const sum = aToBinary + bToBinary;

  return sum.toString(2);
}
