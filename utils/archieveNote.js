import { activeNotesMap, archieveNotesMap } from "../app.js ";
import { insertNoteInHTML, addArchieveNoteOptions, addActiveNoteOptions } from "./showNotes.js";


const notesItems = document.querySelector('.content-wrapper')

notesItems.addEventListener('click', function (e) {
    let targetItem = e.target

    if (targetItem.closest('.archieve')){
        let note = targetItem.parentNode.parentNode
        let noteName = note.querySelector('.name').textContent
        let value = activeNotesMap.get(noteName)


        archieveNotesMap.set(noteName, value)
        let archieveNotes = Object.fromEntries(archieveNotesMap)
        let parrentContainer = document.querySelector('.archieved-notes')

        insertNoteInHTML(noteName, archieveNotes, parrentContainer, addArchieveNoteOptions)      
        activeNotesMap.delete(noteName)
        note.remove()
    } else if (targetItem.closest('.restore')) {

        let note = targetItem.parentNode.parentNode
        let noteName = note.querySelector('.name').textContent
        let value = archieveNotesMap.get(noteName)

        console.log(noteName)
        console.log(value)

        activeNotesMap.set(noteName, value)
        let activeNotes = Object.fromEntries(activeNotesMap)
        let parrentContainer = document.querySelector('.active-notes')
        insertNoteInHTML(noteName, activeNotes, parrentContainer, addActiveNoteOptions)
        archieveNotesMap.delete(noteName)
        note.remove()
    }
})