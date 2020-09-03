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
















