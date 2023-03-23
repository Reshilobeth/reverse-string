function reverseStr(str){

    //Solution one
    return str.split('').reverse('').join('')


    //Solution two
    let output = ''
        for(let i = 0; i<str.length; i++){
            output = str[i]+output
        }
    return output

    //Solution Three
    let output = ''
    for(let cha of str){
        output = cha + output
    }
    return output

    //Solution four
    let output = ''
    str.split('').forEach(cha =>{
        return output = cha + output
    })

    return output

}

console.log(reverseStr('javascript'))