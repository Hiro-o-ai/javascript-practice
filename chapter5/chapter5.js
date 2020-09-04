// オブジェクト指向
// インスタンスについて
// var Member = function(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.getName = function() {
//     return this.lastName + ' ' +this.firstName;
//   }
// };
// var mem = new Member('大吾', '田中');
// console.log(mem.getName()) 田中大ご

// var Member = function(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };
// var mem = new Member('大吾', '田中');
// mem.getName = function() {
//   return this.firstName + ' ' + this.lastName;
// }
// console.log(mem.getName());
// var mem2 = new Member('ななみ', '高橋');
// console.log(mem2.getName()); 　エラーつまりインスタンスにメソッドが追加されている

// インスタンスとして呼び出さなかった場合
// var Member = function(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };
// var m = Member('ななみ', '高橋');
// console.log(m) undefined
// console.log(firstName)　ななみ
// console.log(m.firstName) エラー

// リファクタリング(リテラル表現)
// var Member = function(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };
// Member.prototype = {
//   getName : function() {
//     return this.lastName + ' ' + this.firstName;
//   },
//   toString : function() {
//     return this.lastName + this.firstName;
//   }
// };

// thisについて
// var data = 'Global data'
// var obj1 = { data: 'obj1.data' }
// var obj2 = { data: 'obj2.data' }
// function hoge() {
//   console.log(this.data)
// }
// hoge.call(null);
// hoge.call(obj1);
// hoge.call(obj2);

// プロトタイプによるメソッドの追加
// var Member = function(){};
// Member.prototype.sex = '男';
// var mem1 = new Member();
// var mem2 = new Member();
// console.log(mem1.sex + '|' + mem2.sex);
// mem2.sex = '女';
// console.log(mem1.sex + '|' + mem2.sex);男|女

// プロトタイプによるメソッドの削除
// delete mem1.sex
// delete mem2.sex
// console.log(mem1.sex + '|' + mem2.sex);男|男
// delete Member.prototype.sexとやると全て削除されてしまう

// var mem = new Member();
// mem.sex = undefined;
// for (var key in mem) {
//   console.log(key + ':' + mem[key]);
// }

// 継承
// var Animal = function() {};
// Animal.prototype = {
//   walk : function() {
//     console.log('とコトコ');
//   }
// }
// var Dog = function() {
//   Animal.call(this);
// };
// Dog.prototype = new Animal();
// Dog.prototype.bark = function() {
//   console.log('ワンワン！');
// }
// var d = new Dog();
// d.walk();
// d.bark();




