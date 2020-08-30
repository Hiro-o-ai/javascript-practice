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
// var classes = ['部長', '課長', '主任', '担当']
// var members = [
//   { name: '鈴木清子', clazz: '主任'},
//   { name: '山口久雄', clazz: '部長'},
//   { name: '井上太郎', clazz: '担当'},
//   { name: '和田朋美', clazz: '課長'},
//   { name: '小森裕太', clazz: '担当'},
// ];
// console.log(members.sort(function(x, y) {
//   return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
// }));

// Mapオブジェクト
// let m = new Map();
// m.set('dog', 'ワンワン');
// m.set('cat', 'ニャー');
// m.set('mouse', 'チュー');

// console.log(m.size);
// console.log(m.get('dog'));
// console.log(m.has('cat'));
// キーを順に取得
// for (let key of m.keys()) {
//   console.log(key);
// }
// 値をん順に取得
// for (let value of m.values()) {
//   console.log(value);
// }
// キーと値を順に取得
// for (let [key, value] of m) {  let [key, value] of m.entries()も同じ
//   console.log(value);
// }
// 削除
// m.delete('dog');
// console.log(m.size)
// 全て削除
// m.clear();
// console.log(m.size);

// map キーの比較
// var m = new Map();
// m.set('1', 'hoge');
// console.log(m.get(1)); undefined

// mapとNaN
// var m = new Map();
// m.set(NaN, 'hoge');
// console.log(m.get(NaN));
// NaNの一致ができる

// mapと空オブジェクトリテラル
// var m = new Map();
// m.set({}, 'hoge');
// console.log(m.get({})); undefined
// {}で認識させるには
// var key = {};
// var m = new Map();
// m.set(key, 'hoge');
// console.log(m.get(key));

// setオブジェクト
// 重複しない値の集合を管理するためのオブジェクト
// let s = new Set();
// s.add(10);
// s.add(100);
// s.add(5);
// s.add(50);
// s.add(5);
// 上のaddと　let s = new Set([10,100,5,50,5])　は同じ
// console.log(s.has(100));
// console.log(s.size);
// 値を順に取得
// for (let val of s.values()) {
//   console.log(val);
// }
// 値を順に取得（上と同じ）
// for (let val of s) {
//   console.log(val);
// }

// s.delete(100);
// console.log(s.size);
// s.clear();
// console.log(s.size);

// NaN比較
// let s = new Set();
// s.add(NaN);
// s.add(NaN);
// console.log(s.size); 1
// s.add({});
// s.add({});
// console.log(s.size); 3

// dateオブジェクト
// var d = new Date();
// console.log(d);
// var d = new Date('2016/12/04 20:07:05');
// console.log(d);
// var d = new Date(2016, 11, 4, 20, 7, 15, 500);
// console.log(d);
// var d = new Date(1480849635500);  タイムスタンプ方式
// console.log(d);

// dateオブジェクトのメンバー（プロパティ）
// var dat = new Date(2016, 11, 25, 11, 37, 15, 999);
// console.log(dat);
// console.log(dat.getFullYear());
// console.log(dat.getMonth());
// console.log(dat.getDate());
// console.log(dat.getDay());
// console.log(dat.getHours());
// console.log(dat.getMinutes());
// console.log(dat.getSeconds());
// console.log(dat.getMilliseconds());
// console.log(dat.getTime());
// console.log(dat.getTimezoneOffset());

// console.log(dat.getUTCFullYear());
// console.log(dat.getUTCMonth());
// console.log(dat.getUTCDate());
// console.log(dat.getUTCDay());
// console.log(dat.getUTCHours());
// console.log(dat.getUTCMinutes());
// console.log(dat.getUTCSeconds());
// console.log(dat.getUTCMilliseconds());

// var dat2 = new Date();
// dat2.setFullYear(2017);
// dat2.setMonth(7);
// dat2.setDate(5);
// dat2.setHours(11);
// dat2.setMinutes(37);
// dat2.setSeconds(15);
// dat2.setMilliseconds(513);

// console.log(dat2.toLocaleString());
// console.log(dat2.toUTCString());
// console.log(dat2.toDateString());
// console.log(dat2.toTimeString());
// console.log(dat2.toLocaleDateString());
// console.log(dat2.toLocaleTimeString());
// console.log(dat2.toJSON());
// console.log(Date.parse('2016/11/05'));
// console.log(Date.UTC(2016, 11, 5));
// console.log(Date.now());

// 日付の加算原産
// var dat = new Date(2017, 4, 15, 11, 40);
// console.log(dat.toLocaleString());
// dat.setMonth(dat.getMonth() + 3);
// console.log(dat.toLocaleString());
// dat.setDate(dat.getDate() - 20);
// console.log(dat.toLocaleString());

// var dat = new Date(2017, 4, 15, 11, 40);
// console.log(dat.toLocaleString());
// 来月の0日目をセット　　　5/31
// dat.setMonth(dat.getMonth() + 1);
// dat.setDate(0);
// console.log(dat.toLocaleString());

// 日付の差分
// var dat1 = new Date(2017,4,15);
// var dat2 = new Date(2017,5,20);
// var diff = (dat2.getTime() - dat1.getTime()) / (1000 * 60 * 60 * 24);
// console.log(diff + '日の差があります');

// 正規表現とRegExp
// var p = new RegExp('http(s)?://([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?','gi');
// var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;

// 正規表現とsplit
// var p = /[\/\.\-]/gi;
// console.log('2016/12/04'.split(p));
// console.log('2016-12-04'.split(p));
// console.log('2016.12.04'.split(p));

// objectオブジェクト
// toString/valueOf
// var obj = new Object();
// console.log(obj.toString());
// console.log(obj.valueOf());

// var dat = new Date();
// console.log(dat.toString());
// console.log(dat.valueOf());

// var ary = ['prototype.js', 'jQuery', 'yahoo'];
// console.log(ary.toString());
// console.log(ary.valueOf());

// var num = 10;
// console.log(num.toString());
// console.log(num.valueOf());

// var reg = /[0-9]{3}-[0-9]{4}/g;
// console.log(reg.toString());
// console.log(reg.valueOf());

// 結合メソッド assign
// let pet = {
//   type: 'スノーホワイトハムスター',
//   name: 'キラ',
//   description: {
//     birth: '2014-02-15'
//   }
// };
// let pet2 = {
//   name:'山田きら',
//   color:'白',
//   description: {
//     food: 'ひまわりの種'
//   }
// };

// let pet3 = {
//   weight: 42,
//   photo: 'http//www.wings.msn.to/img/ham.jpg'
// };

// Object.assign(pet, pet2, pet3);
// console.log(pet);

// オブジェクトを生成 createメソッド
// var obj = { x:1, y:2, z:3};
// var obj2 = new Object();
// obj2.x = 1;
// obj2.y = 2;
// obj2.z = 3;

// var obj3 = Object.create(Object.prototype, {
//   x: { value: 1, writable: true, configurable: true, enumerable: true},
//   y: { value: 2, writable: true, configurable: true, enumerable: true},
//   z: { value: 3, writable: true, configurable: true, enumerable: true}
// });
// console.log(obj)
// console.log(obj2)
// console.log(obj3)

// 不変オブジェクト
// 'use strict';
// var pet = {type: 'スノーホワイトハムスター', name: 'キラ' };
// // Object.preventExtensions(pet);　下に行くほど処理ができなくなる
// // Object.seal(pet);
// Object.freeze(pet);

// pet.name = '山田きら';
// delete pet.type;
// pet.weight = 42;










