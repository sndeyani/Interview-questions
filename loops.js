for(var i = 0; i < 10; i++){
    setTimeout(() => {
        console.log(i)
    })
} //will print 10 times 10
console.log(i) // i is 10 and  will be accessible from outside for loop

//--------------------SOLUTIONS-----------------------------------------

for(let j = 0; j < 10; j++){
    setTimeout(() => {
        console.log(j)
    })
}  //from 0 to 9     
// console.log(j) //ReferenceError: j is not defined

for(var k = 0; k < 10; k++){
    function close(item) {
        setTimeout(() => {
            console.log(item)
        })
    }
    close(k)
  
}  //from 0 to 9     
console.log(k) // is 10 and will be accessible from outside for loop