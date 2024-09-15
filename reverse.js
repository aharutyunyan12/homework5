function reverseString(s) {
    try {
    return s.split('').reverse().join('')
    }
    catch (e){
        console.log( e.message )
    } finally{
        return s
    }
}
console.log(reverseString(56))