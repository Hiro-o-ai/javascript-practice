// 演算子
// console.log(10 + 1)
// console.log('10' + 1)
// var today = new Date()
// console.log(1234 + today)

// インクリメント演算子
// var x = 3;
// var y = x++;
// console.log(x);
// console.log(y);
// var x = 3;
// var y = ++x;
// console.log(x);
// console.log(y);

// 代入演算子
// var x = 1;
// var y = x;
// x = 2;
// console.log(y);
// var data1 = [0, 1 ,2];
// var data2 = data1;
// data1[0] = 5;
// console.log(data2);
// 参照型の場合はvar後に代入した値が反映される

// 分割代入
// let data = [56, 40, 23, 53, 566, 63, 1, 6];
// // let [x0, x1, x2, x3, x4, x5, x6, x7] = data
// // console.log(x0);
// // console.log(x4);
// // console.log(x7);
// let [x0, x1, x2, x3, ...other] = data
// console.log(x0);
// console.log(x3);
// console.log(other);

// 比較演算子
// var data1 = ['javascript', 'ajax', 'asp.net'];
// var data2 = ['javascript', 'ajax', 'asp.net'];
// console.log(data1 == data2);　true
// console.log('3.14E2' == 314); true
// console.log('0x10' == 16);    true
// console.log('1' == 1)         true
// console.log('3.14E2' === 314); false
// console.log('0x10' === 16);    false
// console.log('1' === 1);         false
// 基本的には === を推奨　　!=と!==も同じ

// 条件演算子
// var x = 60;
// console.log((x >= 70) ? '合格' : '不合格');

// 論理演算子
// var x = 1;
// var y = 2;
// console.log(x === 1 && y ===1);
// console.log(x === 1 || y ===1);
// if (x === 1) { console.log('こんにちは');}
// x === 1 && console.log('こんにちは');
// ショートカット演算子の使いどころ
// var msg = '';
// msg = msg || 'こんに血は';
// console.log(msg)
// msgがfalsyな値(空もじ)のため||で'こんに血は'が代入されることになった

// 制御構文
// if文
// var x = 15;
// if (x > 10) {
//   console.log('変数は10以上');
// } else {
//   console.log('変数は10より小さい');
// }
// if (x > 10) {
//   console.log('変数は10以上');
// }
// var y = 30;
// if (y > 20) {
//   console.log('20より大きい');
// } else if (y > 10) {
//   console.log('10より大きい');
// } else {
//   console.log('10未満');
// }
// var x = 12;
// if (x >= 10) {
//   if (x >= 20) {
//     console.log('20以上');
//   } else {
//     console.log('10以上20未満');
//   }
// } else {
//   console.log("10未満");
// }

// switch命令
// var rank = 'B';
// switch(rank) {
//   case 'A' :
//     console.log('Aランク');
//     break;
//   case 'B' :
//     console.log('Bランク');
//     break;
//   default :
//     console.log('ランク外');
//     break;
// }
// 末尾にbreakがないとswitchブロックが終了しない　→　次のブロックが実行される

// while/do...while命令文
// var x = 10;
// while (x < 10) {
//   console.log('xの値は' + x);
//   x++;
// }
// var y = 10;
// do {
//   console.log('yの値は' + y);
//   y++;
// } while(y < 10)


// for命令
// for (var x = 8; x < 10; x++) {
//   console.log('xの値は' + x);
// }

// for...in命令(連想配列)
// var data = { apple:150, orange:100, banana:120 };
// for (var key in data) {
//   console.log(key + '=' + data[key]);
// }
// for...in命令(配列)
// var data = ['apple', 'orange', 'banana'];
// for (var key in data) {
//   console.log(data[key]);
// }
// for...in命令(配列)での不具合例
// var data = ['apple', 'orange', 'banana'];
// Array.prototype.hoge = function() {};
// for (var key in data) {
//   console.log(data[key]);
// }
// →apple,orange,banana,ƒ () {}
// for..of命令
// var data = ['apple', 'orange', 'banana'];
// Array.prototype.hoge = function() {}
// for (var i = 0, len = data.length; i < len; i++) {
//   console.log(data[i]);
// }
// var data = ['apple', 'orange', 'banana'];
// Array.prototype.hoge = function() {}
// for (var value of data) {
//   console.log(value);
// }








