function reverseString(s) {
    try {
    reversed = s.split('').reverse().join('')
    }
    catch (e){
        console.log( e.message )
        reversed = s
    } finally{
        return reversed
    }
}
console.log(reverseString(56))