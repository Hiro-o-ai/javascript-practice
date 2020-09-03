// 関数
// function命令で定義
// function getTriangle(base, height) {
//   return base * height /2;
// }
// console.log('三角形の面積:' + getTriangle(5, 2));

// functionコンストラクター
// var getTriangle = new Function('base', 'height', 'return base * height / 2;');
// console.log('三角形の面積:' + getTriangle(5, 2));
// var getTriangle = Function('base', 'height', 'return base * height / 2;');
// console.log('三角形の面積:' + getTriangle(5, 2));
// var getTriangle = new Function('base, height', 'return base * height / 2;');
// console.log('三角形の面積:' + getTriangle(5, 2));

// var param = 'height, width'
// var formula = 'return height * width / 2;';
// var diamond = new Function(param, formula)
// console.log('菱形の面積:' + diamond(5, 2));

// 関数リテラル表現
// var getTriangle = function(base, height) {
//   return base * height / 2;
// };
// console.log('三角形の面積:' + getTriangle(5, 2));

// アロー関数
// let getTriangle = (base, height) => {
//   return base * height / 2;
// };
// console.log('三角形の面積:' + getTriangle(5, 2));
// let getCircle = redius => redius * redius * Math.PI;
// let show = () => console.log('こんにちは、世界!');

// function命令とコンストラクト
// var getTriangle = function(base, height) {
//   return
//   base * height / 2;　戻り値はundefined
// }; returnなどの後に改行を入れると;が入ることになるから注意

// var getTraiangle = function(base, height) {
//   return base * height / 2;
// };
// console.log(getTraiangle)  関数の中身が表示される

// console.log('三角形の面積: ' + getTraiangle(5, 2));
// 下記だと呼び出せる
// function getTraiangle(base, height) {
//   return base * height / 2;
// };

// console.log('三角形の面積: ' + getTraiangle(5, 2));

// var getTraiangle = function(base, height) {
//   return base * height / 2;
// };  エラーとなる

// スコープ
// var scope = 'Global Variable';
// function getValue() {
//   var scope = 'Local Variable';
//   return scope;
// }
// console.log(getValue());
// console.log(scope);

// scope = 'Global Variable'
// function getValue() {
//   scope = 'Local Variable';
//   return scope;
// }
// console.log(getValue());
// console.log(scope);  varを用いない変数はグローバルとなる

// var scope = 'Global Variable';
// function getValue() {
//   console.log(scope);  undefined
//   var scope = 'Local Variable';
//   return scope;
// }
// console.log(getValue());
// console.log(scope);

// var value = 10;
// function decrementValue(value) {
//   value--;
//   return value;
// }
// console.log(decrementValue(100));
// console.log(value);

// var value = [1, 2, 4, 8, 16]
// function deleteElement(value) {
//   value.pop();
//   return value;
// }
// console.log(value);
// console.log(deleteElement(value));
// console.log(value);

// if (true) {
//   var i = 5;
// }
// console.log(i);

// if (true) {
//   let i = 5;
// }
// console.log(i);エラー

// {
//   let i = 5;
//   console.log(i);5
// }
// console.log(i);エラー

// switch(x) {
//   case 0:
//     let value = 'x:0';
//   case 1:
//     let value = 'x:1';
// }  エラー

// var scope = 'Global Variable';

// function checkScope() {
//   var scope = 'Local Variable';

//   var f_lit = function() { return scope; };
//   console.log(f_lit());

//   var f_con = new Function('return scope;');
//   console.log(f_con())
// }
// checkScope();

// 引数の記法
// function showMessage(value) {
//   console.log(value);
// }
// showMessage();undefined
// showMessage('山田');山田
// showMessage('山田', '田中');山田
// 引数の数でエラーが起きない

// 引数が異なるときにエラー
// function showMessage(value) {
//   if (arguments.length !== 1) {
//     throw new Error('引数の数が間違っています:' + arguments.length);
//   }
//   console.log(value);
// }
// try {
//   showMessage('山田', '田中');
// } catch(e) {
//   window.alert(e.message);
// }

// 引数のデフォルト値を設定
// function getTriangle(base, height) {
//   if (base === undefined) { base = 1; }
//   if (height === undefined) { height = 1; }
//   return base * height / 2;
// }
// console.log(getTriangle(5))

// 可変長引数
// function sum(){
//   var result = 0;
//   for (var i = 0, len = arguments.length; i < len; i++) {
//     var tmp = arguments[i];
//     if (typeof tmp !== 'number') {
//       throw new Error('引数が数値ではありません:' + tmp);
//     }
//     result += tmp;
//   }
//   return result;
// }

// try {
//   console.log(sum(1,3,5,7,9));
// } catch(e) {
//   window.alert(e.message);
// }

// 名前付き引数
// function getTriangle(args) {
//   if (args.base === undefined) {args.base = 1;}
//   if (args.height === undefined) {args.height = 1;}
//   return args.base * args.height / 2;
// }
// console.log(getTriangle({ base:5, height:4}));

// 引数の記法
// デフォルト値の設定
// function getTriangle(base = 1, height = 1) {
//   return base * height / 2;
// }
// console.log(getTriangle(4));

// function multi(a, b = a) {
//   return a * b;
// }
// console.log(multi(10,5))
// console.log(multi(10))

// デフォルトエラー
// function required() {
//   throw new Error('引数が不足しています');
// }
// function hoge(value = required()) {
//   return value;
// }
// hoge();

// 可変長引数の別記法
// function sum(...nums) {
//   let result = 0;
//   for (let num of nums) {
//     if (typeof num !== 'number') {
//       throw new Error('指定値が数値ではありません:' + num);
//     }
//     result += num;
//   }
//   return result;
// }
// console.log(sum(1,3,5,7))

// console.log(Math.max(15, -3, 78, 1))     78
// console.log(Math.max([15, -3, 78, 1]))   NaN
// console.log(Math.max.apply(null, [15, -3, 78, 1])) 78
// console.log(Math.max(...[15, -3, 78, 1]))   78

// 特定のプロパティを取り出す
// function show({name}) {
//   console.log(name);
// };

// let member = {
//   mid: 'Y0001',
//   name: '山田たろう',
//   address: 't_yamada@example.com'
// };

// show(member)  山田たろう


























