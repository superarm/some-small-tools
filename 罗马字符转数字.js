// 罗马数字转整数
/**
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

    通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

    I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
    X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
    C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
    给定一个罗马数字，将其转换成整数。
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   let roma = {
       'I': 1,
       'V': 5,
       'X': 10,
       'L': 50,
       'C': 100,
       'D': 500,
       'M': 1000
   }
   let arr = s.split('');
   let num = 0;
   for(let i = 0; i < arr.length; i++) {
       if(i > 0 && roma[arr[i]] > roma[arr[i - 1]] &&
       (roma[arr[i]] - roma[arr[i - 1]] === 4 ||
       roma[arr[i]] - roma[arr[i - 1]] === 40 ||
       roma[arr[i]] - roma[arr[i - 1]] === 400 ||
       roma[arr[i]] - roma[arr[i - 1]] === 9 ||
       roma[arr[i]] - roma[arr[i - 1]] === 90 ||
       roma[arr[i]] - roma[arr[i - 1]] === 900 )
       ) {
         num += roma[arr[i]] - roma[arr[i - 1]] - roma[arr[i - 1]];
       } else if( i > 0 && roma[arr[i]] > roma[arr[i - 1]]) {
         num = roma[arr[i]] - roma[arr[i - 1]];
       } else {
         num += roma[arr[i]];
       }
   }
   return num;
 };
 /**
  * @param {string} s
  * @return {number}
  */
 
 // 网友更优解
//   var romanToInt = (s) => {
//          s = s.replace("IV","a");
//          s = s.replace("IX","b");
//          s = s.replace("XL","c");
//          s = s.replace("XC","d");
//          s = s.replace("CD","e");
//          s = s.replace("CM","f");
         
//          let res = 0;
//          for (let i = 0; i < s.length; i++) {
//              res += getValue(s.charAt(i));
//          }
//          return res;
//    }
//    var getValue = function(c) {
//             switch(c) {
//                case 'I': return 1;
//                case 'V': return 5;
//                case 'X': return 10;
//                case 'L': return 50;
//                case 'C': return 100;
//                case 'D': return 500;
//                case 'M': return 1000;
//                case 'a': return 4;
//                case 'b': return 9;
//                case 'c': return 40;
//                case 'd': return 90;
//                case 'e': return 400;
//                case 'f': return 900;
//             }
//             return 0;
//    }