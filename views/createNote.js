import { validateName, validateContent } from "../utils/validateForm.js"
import { insertNoteInHTML, addActiveNoteOptions } from "../utils/showNotes.js"
import { activeNotesMap, archieveNotesMap } from "../app.js"




const showFormButton = document.querySelector('.add-note')
const hideForm = document.querySelector('.cancel-button')
const createNoteBtn = document.querySelector('.submit-button')
const createNoteWindow = document.querySelector('.create-note-window')



showFormButton.addEventListener('click', () => {
    createNoteWindow.classList.remove('hidden')
})

hideForm.addEventListener('click', () => {
    createNoteWindow.classList.add('hidden')
    document.forms["createNote"]["name"].value = ''
    document.forms["createNote"]["content"].value = ''
    document.forms["createNote"]["date"].value = ''
})


createNoteBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let name = document.forms["createNote"]["name"].value;
    let category = document.forms["createNote"]["category"].value;
    let content = document.forms["createNote"]["content"].value;
    let planingDate = []
    planingDate.push(document.forms["createNote"]["date"].value)
    let now = new Date().toDateString()
    let notes = Object.fromEntries(activeNotesMap)
    let archieve = Object.fromEntries(archieveNotesMap)
    if (validateName(name, notes, archieve) === true && validateContent(content) ===true){ 
        
        activeNotesMap.set(name, [now, category, content, planingDate])
        notes = Object.fromEntries(activeNotesMap)

        let parrentContainer = document.querySelector('.active-notes')
        insertNoteInHTML(name, notes, parrentContainer, addActiveNoteOptions)
        createNoteWindow.classList.add('hidden')
        document.forms["createNote"]["name"].value = ''
        document.forms["createNote"]["content"].value = ''
        document.forms["createNote"]["date"].value = ''
        
    }

})

