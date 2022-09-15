export function return_short_text(text){
    if (text.length > 15){
        text = text.slice(0, 17) + '...'
        return text
    }
    return text
}


export function addActiveNoteOptions(row){

    let rowMenu = document.createElement('div')
    rowMenu.setAttribute('class', 'note-options hidden')

    rowMenu.innerHTML = ''
    rowMenu.innerHTML += `<span class="single-option show">Show</span>`
    rowMenu.innerHTML += `<span class="single-option change">Change</span>`
    rowMenu.innerHTML += `<span class="single-option archieve">Archieve</span>`
    rowMenu.innerHTML += `<span class="single-option delete">Delete</span>`

    row.appendChild(rowMenu)
}

export function addArchieveNoteOptions(row){

    let rowMenu = document.createElement('div')
    rowMenu.setAttribute('class', 'note-options hidden')

    rowMenu.innerHTML = ''
    rowMenu.innerHTML += `<span class="single-option show">Show</span>`
    rowMenu.innerHTML += `<span class="single-option change">Change</span>`
    rowMenu.innerHTML += `<span class="single-option restore">Restore</span>`
    rowMenu.innerHTML += `<span class="single-option delete">Delete</span>`

    row.appendChild(rowMenu)
}

export function insertNoteInHTML(key, notes, parrentContainer, options){

    let name = key
    let created = return_short_text(notes[key][0])
    let category = return_short_text(notes[key][1])
    let content = return_short_text(notes[key][2])
    let dates = notes[key][3]

    let row = document.createElement('div')
    row.setAttribute('class', 'separate-note')

    row.innerHTML = ''
    row.innerHTML += `<span class="note-item name">${name}</span>`
    row.innerHTML += `<span class="note-item">${created}</span>`
    row.innerHTML += `<span class="note-item">${category}</span>`
    row.innerHTML += `<span class="note-item">${content}</span>`

    
    if (dates.length > 0){
            
        row.innerHTML += `<span class="note-item">${dates.slice(-2)} </span>`
    } else{
        row.innerHTML += `<span class="note-item">--</span>`
    }
    
    row.innerHTML += `<div class="note-menu"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class=" bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg></div>`

    parrentContainer.appendChild(row)
    options(row)
    
}


export function active_notes_list(notes){

    let parrentContainer = document.querySelector('.active-notes')

    for (let key in notes){

        insertNoteInHTML(key, notes, parrentContainer, addActiveNoteOptions)           
    }
}

export function archieved_notes_list(notes){

    let parrentContainer = document.querySelector('.archieved-notes')

    for (let key in notes){

        insertNoteInHTML(key, notes, parrentContainer, addArchieveNoteOptions)           
    }
}