async function main() {
    let a = 5;
    await setTimeout(()=>{},5000);
    //console.log(aa());
    aa(a);
}

function aa(a) {
    console.log(a+5);
}

main();