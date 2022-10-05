const memo = callback => {  
    const cache = {};
    return (args) => {
        const key = JSON.stringify(args); 
        if(cache.hasOwnProperty(key)){ // in case if a or b equal 0
            return cache[key]
        } else {
            cache[key] = callback(args)
        }
        return cache[key]
    }
}
const calculate = ({a, b}) => a + b;
const result = memo(calculate)

console.log(result({a:1, b:2}))
console.log(result({a:2, b:3}))
console.log(result({a:0, b:4}))
console.log(result({a:0, b:4}))