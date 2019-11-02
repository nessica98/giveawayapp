a = [1,2,3,4,5]

// .map .find .findIndex

console.log(a.findIndex((b)=>{
    console.log("data is ", b)
    return b == 3
}))