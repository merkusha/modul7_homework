function func(cat) {
    for (let key in cat) {
        if (cat.hasOwnProperty(key)){
            console.log(`${key} = ${cat[key]}`)
        }            
    }
}
const cat = {
    name: 'Rebecca',
    breed: 'British',
    age: '3',
    weight:4
}
func(cat);

