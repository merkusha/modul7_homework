function strInObj(str, obj){
    if (str in obj) return true;
    else return false
}

const obj = {
    name: 'Rebecca',
    age: 8,
    weight: 55
}

const str = 'age';

console.log(strInObj(str,obj));