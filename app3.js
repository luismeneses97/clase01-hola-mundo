console.log("inicio de scripts")

setTimeout(() => {
    console.log("primer timeout");
}, 5000);

setTimeout(() => {
    console.log("Segundo timeout");
}, 0);

setTimeout(() => {
    console.log("Tercer timeout");
}, 0);

console.log("fin de Script");