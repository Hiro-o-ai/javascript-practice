// オブジェクトについて
// var str = 'こんにちは';
// console.log(str.length);
// オブジェクトのインスタンス化
// NG例
// var str = new String('こんにちは')
// var flag = new Boolean(false);
// if (flag) {
  // console.log('flagはtrueです!');
// }  flagはtrueです!を返す　　基本データ型ではnewを使わない

// stringオブジェクトのメンバー
// var str = 'にわにはにわにわとりがいる';
// console.log(str.indexOf('にわ'));
// console.log(str.lastIndexOf('にわ'));
// console.log(str.indexOf('にわ', 3));
// console.log(str.lastIndexOf('わ', 5));
// console.log(str.indexOf('ガーデン'));
// console.log(str.startsWith('にわ'));
// console.log(str.endsWith('にわ'));
// console.log(str.includes('にわ'));

// var str2 = 'Wingsプロジェクト';
// var str3 = '叱られて';
// var str4 = '  wings  ';

// console.log(str2.charAt(4));
// console.log(str2.slice(5, 8));　　　　開始位置〜終了位置の範囲で抽出
// console.log(str2.substring(5, 8));   開始位置〜終了位置の範囲で抽出
// console.log(str2.substr(5, 3));　　　開始位置から文字数を指定
// console.log(str2.split('s'));
// console.log(str.split('わ', 3));
// console.log(str2.charCodeAt(0));
// console.log(String.fromCharCode(87, 105, 110, 103));
// console.log(str3.codePointAt(0));
// console.log(String.fromCodePoint(134047));
// console.log(String.fromCodePoint(21489));
// console.log(str2.concat(' 有限会社'));
// console.log(str2.repeat(2));
// console.log(str4.trim());
// console.log(str2.length);

// sliceとsubstringの違い
// var str = 'Wingsプロジェクト'
// console.log(str.substring(8,5));　プロジ
// console.log(str.slice(8,5));　　   空文字列
// console.log(str.substring(5, -2));   wings  -2を0とみなしている
// substring(0, 5)として実行されている
// console.log(str.slice(5, -2));       プロジェ

// Numberオブジェクトのメンバー
// NaNについて　　自身を含む全ての数値と等しくない
// console.log(Number.NaN === Number.NaN); false
// Javascriptの演算上限
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER + 1);
// console.log(Number.MAX_SAFE_INTEGER + 2);
// 数値形式変換
// var num1 = 255;
// console.log(num1.toString(16));
// console.log(num1.toString(8));

// var num2 = 123.45678;
// console.log(num2.toExponential(2));
// console.log(num2.toFixed(3));  小数点以下の桁数
// console.log(num2.toFixed(7));
// console.log(num2.toPrecision(10));　整数部を含めた桁数
// console.log(num2.toPrecision(6));

// 文字列を数値変換
// var n = '123xxx';
// console.log(Number(n));
// console.log(Number.parseFloat(n));
// console.log(Number.parseInt(n));

// var d = new Date();
// console.log(Number(d));
// console.log(Number.parseFloat(d));
// console.log(Number.parseInt(d));

// var h = '0x10';
// console.log(Number(h));
// console.log(Number.parseFloat(h));
// console.log(Number.parseInt(h));

// var b = '0b11'
// console.log(Number(b));
// console.log(Number.parseFloat(b));
// console.log(Number.parseInt(b));

// var e = '1.01e+2'
// console.log(Number(e));
// console.log(Number.parseFloat(e));
// console.log(Number.parseInt(e));

// 算術演算子による変換
// console.log(typeof(123 + '')); +は数値を文字列に変換する
// console.log(typeof('123' - 0));　-は文字列を数値に変える

// symbolオブジェクト
// let sym1 = Symbol('sym');
// let sym2 = Symbol('sym');

// console.log(typeof sym1);
// console.log(sym1.toString());
// console.log(sym1 === sym2);

// Mathオブジェクトのメンバー(プロパティ)
// console.log(Math.abs(-100));
// console.log(Math.clz32(1));
// console.log(Math.min(20, 40, 60));
// console.log(Math.max(20, 40, 60));
// console.log(Math.pow(5, 3));
// console.log(Math.random());
// console.log(Math.sign(-100));
// console.log(Math.ceil(1234.56));
// console.log(Math.ceil(-1234.56));
// console.log(Math.floor(1234.56));
// console.log(Math.floor(-1234.56));
// console.log(Math.round(1234.56));
// console.log(Math.round(-1234.56));
// console.log(Math.trunc(1234.56));
// console.log(Math.trunc(-1234.56));
// console.log(Math.sqrt(81));
// console.log(Math.cbrt(81));
// console.log(Math.hypot(3, 4));
// console.log(Math.cos(1));
// console.log(Math.sin(1));
// console.log(Math.tan(1));
// console.log(Math.atan2(1, 3));
// console.log(Math.log(10));
// console.log(Math.exp(3));
// console.log(Math.expm1(1));

// Arrayオブジェクト
// var ary = new Array('佐藤', '高江', '永田');
// console.log(ary)
// var ary = new Array();
// console.log(ary)
// var ary = new Array(10);
// console.log(ary)

// Arrayオブジェクトのメンバ
// var ary1 = ['sato', 'takae', 'osada', 'hio', 'saitoh', 'sato']
// var ary2 = ['yabuki', 'aoki', 'moriyama', 'yamada']

// console.log(ary1.length);
// console.log(Array.isArray(ary1));
// console.log(ary1.toString());
// console.log(ary1.indexOf('sato'));
// console.log(ary1.lastIndexOf('sato'));
// console.log(ary1.concat(ary2));

// console.log(ary1.join('/'));
// console.log(ary1.slice(1));
// console.log(ary1.slice(1,2));
// console.log(ary1.splice(1, 2, 'kakeya', 'yamaguchi'));
// console.log(ary1);
// console.log(Array.of(20, 40, 60));
// console.log(ary1.copyWithin(1, 3, 5));
// console.log(ary1);
// console.log(ary2.fill('suzuki', 1, 3));
// console.log(ary2);
// console.log(ary1.pop());
// console.log(ary1);
// console.log(ary1.push('kondo'));
// console.log(ary1);
// console.log(ary1.shift());
// console.log(ary1);
// console.log(ary1.unshift('ozawa', 'kuge'));
// console.log(ary1);
// console.log(ary1.reverse());
// console.log(ary1);
// console.log(ary1.sort());
// console.log(ary1);

// arrayスタック
// var data = [];
// data.push(1);
// data.push(2);
// data.push(3);
// console.log(data.pop());  3
// console.log(data.pop());  2
// console.log(data.pop());  1

// arrayキュー
// var data = [];
// data.push(1);
// data.push(2);
// data.push(3);
// console.log(data.shift());  1
// console.log(data.shift());  2
// console.log(data.shift());  3

// spliceメソッド
// var data = ['sato', 'takae', 'osada', 'hio', 'saitoh']
// console.log(data.splice(3, 2, 'yamada', 'suzuki')); 要素の入れ替え
// console.log(data);
// console.log(data.splice(3, 2));　　要素の削除
// console.log(data);
// console.log(data.splice(1, 0, 'tanaka'));　指定されたインデックスに要素を挿入
// console.log(data);

// コールバック系メソッド
// forEachメソッド
// var data = [2, 3, 4, 5];
// data.forEach(function(value, index, array) {
//   console.log(value * value);
// });  4, 9, 16, 25

// mapメソッド
// var data = [2, 3, 4, 5]
// var result = data.map(function(value, index, array) {
//   return value * value;
// });
// console.log(result);[4, 9, 16, 25]

// someメソッド
// var data = [2, 3, 4, 5];
// var result = data.some(function(value, index, array) {
//   return value % 3 === 0; 指定した条件に一致する値のみ配列に入れる
// });　everyメソッドとの違いは一部の条件に一致すれば戻す

// if (result) {
//   console.log('3の倍数が見つかりました。');
// } else {
//   console.log('3の倍数が見つかりま泉でした。');
// }

// filterメソッド
// var data = [4, 9, 16, 25];
// var result =  data.filter(function(value, index, array) {
//   return value % 2 ===1;
// });
// console.log(result); [9,25]

// sortメソッド（数値）
// var ary = [5, 25, 10];
// console.log(ary.sort()); [10, 25, 5]
// console.log(ary.sort(function(x, y) {
//   return x - y;
// })); [5, 10, 25]

// sortメソッド（文字）
var classes = ['部長', '課長', '主任', '担当']
var members = [
  { name: '鈴木清子', clazz: '主任'},
  { name: '山口久雄', clazz: '部長'},
  { name: '井上太郎', clazz: '担当'},
  { name: '和田朋美', clazz: '課長'},
  { name: '小森裕太', clazz: '担当'},
];
console.log(members.sort(function(x, y) {
  return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
}));

















