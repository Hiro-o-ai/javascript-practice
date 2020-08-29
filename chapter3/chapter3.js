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



















