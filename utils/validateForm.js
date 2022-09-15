export function validateName(data, notes, archieve){
    if (data === ''){
        alert("Name can't be empty!")
        return false     
    }
    for (let key in notes){
        if (data === key){
           alert("Name already used! Enter unique name")
            return false
        }
    }

    for (let key in archieve){
        if (data === key){
           alert("Name already used! Enter unique name")
            return false
        }
    }
    return true
}


export function validateContent(data){
    if (data === ''){
        alert("Content can't be empty!")
        return false     
    }
    return true
}
