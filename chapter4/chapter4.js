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

// var getTriangle = function(base, height) {
//   return
//   base * height / 2;　戻り値はundefined
// }; returnなどの後に改行を入れると;が入ることになるから注意

















