function reverseString(s) {
    try {
        if (typeof s !== "string") {
            throw new Error("s.split is not a function")
        }
        s = s.split("").reverse().join("")
    }
    catch(e) {
        console.error(e.message)  
    }
    console.log(s)
}

reverseString('53')