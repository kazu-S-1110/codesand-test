import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`; // テンプレート文字列
const name = "kazu";
const age = 43;

console.log(`my name is ${name}, i'm ${age} old.`);

// アロー関数
// 従来の記法
function func1(str) {
  return str;
}
console.log(func1("yeee!"));

const func2 = function (num) {
  return num * 2;
};
console.log(func2(3));

//アロー関数の記法
const func3 = (boolean) => {
  return boolean;
};
console.log(func3(true));

// 分割代入
const myProfile = {
  name: "kazu",
  age: 23
};
const message1 = `my name is ${myProfile.name}, ${myProfile.age} old.`;

// オブジェクトから抜き出すことができる
const { myName, myAge } = myProfile;
const message2 = `my name is ${myName}, ${myAge} old.`;
