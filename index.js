// Write your solution here!
// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(x){
     cats.push(x)
}
function destructivelyPrependCat(n){
    cats.unshift(n)
}
function  destructivelyRemoveLastCat(n){
    cats.pop(n)
}
function destructivelyRemoveFirstCat(n){
    cats.shift(n)
}
function appendCat(n){
    const appendCat=[...cats, n]
return appendCat
}
function prependCat(n){
const prependCat = [n, ...cats]
return prependCat
}
function removeLastCat(){
    const cats =["Milo", "Otis", "Garfield"]
   const cat= cats.slice(0, cats.length - 1)
    return cat
}
function removeFirstCat(){
    const cats =["Milo", "Otis", "Garfield"]
   const cat= cats.slice(1)
    return cat
}