import { validateName } from "./utils/validateForm.js"

const map = new Map()

map.set("Shoping List", ["August 21, 2022", "Task", "Tpmatoes, Bread", []])
map.set("The theory of evolution", ["September 27, 2022", "Random  Thought", "The theory of evolution", []])
map.set("Naruto Uzumaki", ["September 9, 2022", "Quote", "Never give up!", []])
map.set("Books", ["septermber 5, 2022", "Task", "1974, George Orwell", []])
map.set("New Feature", ["May 04, 2022", "Idea", "Implement ", ["3/5/2022", "5/5/2022"]])

const notes = Object.fromEntries(map)

const archieveMap = new Map()

setArchieve('Books')
console.log(map)
console.log(archieveMap)


function setArchieve(name){
    let value = map.get(name)
    archieveMap.set(name, value)
    map.delete(name)
}


