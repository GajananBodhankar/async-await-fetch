// method - 1
function prom(val) {
  return new Promise(function (res, rej) {
    val > 0 ? res("resolved") : rej("rejected");
  });
}
prom(0)
  .then((i) => console.log(i))
  .catch((e) => console.log(e));

console.log("hello");

// O/p - Hello
//      rejected
// Because, promise is always asynchronous in nature, i.e it makes use of callback-queue & event loop

// Method -2 (arrow function)

function method2(val) {
  let z = new Promise((res, rej) => {
    val > 0 ? res("resolved m2") : rej("rejected m2");
  });
  return z;
}

console.log("method2");
method2(10)
  .then((e) => console.log(e))
  .catch((e) => console.log(e));
console.log("method2");

// Method 3 - very imp (async -await)
// Rather than consumers i.e(then & catch), we make use of async await to invoke a promise

function method3(val) {
  return new Promise((res, rej) => {
    val > 0 ? res("Resolved async await") : rej("rejected async await");
  });
}

async function callmethod3() {
  console.log("before");
  let data = await method3(10);
  console.log(data);
  console.log("after");
}
callmethod3();

// method -4 to make a fetch api call, here I am using a temp api called json placeholder

async function fetchApiData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (res) {
    let data = await res.json();
    return data;
  }
  return null;
}

async function callapi() {
  let result = await fetchApiData();
  console.log(result);
}

callapi();
