import { activeNotesMap, archieveNotesMap } from "../app.js ";
import { getSingleNoteData } from "../utils/getSingleNoteData.js"


const notesItems = document.querySelector('.content-wrapper')



notesItems.addEventListener('click', function (e) {
    let targetItem = e.target

    if (targetItem.closest('.show')){
        let note = targetItem.parentNode.parentNode
        let noteName = note.querySelector('.name').textContent
        
        let activeNotes = Object.fromEntries(activeNotesMap)
        let archievedNotes = Object.fromEntries(archieveNotesMap)

        let data = getSingleNoteData(noteName, activeNotesMap, activeNotes, archieveNotesMap, archievedNotes)

        let created = data[0]
        let category = data[1]
        let content = data[2]
        let dates = data[3]
        let dates_str = ''
        if (dates.length > 0){
            for (let date of dates){
                dates_str += date + ', '
            }
        }
        console.log(noteName, created, category, content, dates)

        let row = document.createElement('div')
        row.setAttribute('class', 'single-note')

        row.innerHTML = ''
        row.innerHTML += `<div class="s-note-wrap"><span class="single-note-attribute">Name</span><span class="single-note-data">${noteName}</span></div><hr>`
        row.innerHTML += `<div class="s-note-wrap"><span class="single-note-attribute">Created</span><span class="single-note-data">${created}</span></div><hr>`
        row.innerHTML += `<div class="s-note-wrap"><span class="single-note-attribute">Category</span><span class="single-note-data">${category}</span></div><hr>`
        row.innerHTML += `<div class="s-note-wrap"><span class="single-note-attribute">Content</span><span class="single-note-data">${content}</span></div><hr>`
        row.innerHTML += `<div class="s-note-wrap"><span class="single-note-attribute">Dates</span><span class="single-note-data">${dates_str}</span></div>`
        row.innerHTML +='<button class="end-view">OK</button>'



        document.querySelector('.show-note-modal').appendChild(row)

        document.querySelector('.show-note-modal').classList.add('show-note-active')


    }

    if (targetItem.closest('.end-view')){
        
        document.querySelector('.show-note-modal').classList.remove('show-note-active')
        document.querySelector('.single-note').remove()
    }
})