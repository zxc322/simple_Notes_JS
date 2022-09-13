import { activeNotesMap } from "../app.js ";


const notesItems = document.querySelector('.content-wrapper')

notesItems.addEventListener('click', function (e) {
    let targetItem = e.target

    if (targetItem.closest('.delete')){
        let note = targetItem.parentNode.parentNode
        let noteName = note.querySelector('.name').textContent
        activeNotesMap.delete(noteName)
        note.remove()
    }
})