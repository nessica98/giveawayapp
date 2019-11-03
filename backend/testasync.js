async function main() {
    let a = 5;
    let b = 2;
    await setTimeout(()=>{b = 3000; console.log(b)},5000);
    //console.log(aa());
    aa(a);
    console.log(b)
}

function aa(a) {
    console.log(a+5);
}

main();