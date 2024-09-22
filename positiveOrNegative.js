function isPositive (a) {
    try{
        if (a > 0) {
            return "yes"
        }
        else if (a === 0) {
            throw new Error("zero error")
        }
        else{
            throw new Error("negative error")
        }
        }
        catch(e) {
            return e.message
        }
}    
console.log(isPositive(-6))