const notesItems = document.querySelector('.content-wrapper') 

notesItems.addEventListener('click', function (e) {
    let targetItem = e.target

    if (targetItem.closest('.note-menu')){
        let allMenus = document.querySelectorAll('.note-menu')
        let noteMenuBtn = targetItem.closest('.note-menu')
        let parrentDiv = noteMenuBtn.parentNode.closest('div')
        let noteMenu = parrentDiv.querySelector('.note-options')

        allMenus.forEach(element =>{

            if (element.classList.contains('active') && element !== noteMenuBtn){

                element.classList.remove('active')

                element.parentNode.closest('div').querySelector('.note-options').classList.remove('show-options')
                element.parentNode.closest('div').querySelector('.note-options').classList.add('hide-options')
            }
        })

        noteMenuBtn.classList.toggle('active')

        if (noteMenuBtn.classList.contains('active')){
            noteMenu.classList.remove('hide-options')       
            noteMenu.classList.remove('hidden')
            noteMenu.classList.add('show-options')
        } else {
            
            noteMenu.classList.remove('show-options')
            noteMenu.classList.add('hide-options')
            noteMenu.classList.add('hidden')
        }
    }
})




// function getAllNotes(){
//     let allNotes = document.querySelectorAll('.note-menu')
//     return allNotes
// }


// let showOptionsBtns = getAllNotes()

// export function toggleNoteMenu(){

//     showOptionsBtns.forEach(el => el.addEventListener('click', () =>{

//         let allMenus = document.querySelectorAll('.note-menu')
//         let parrentDiv = el.parentNode.closest('div')
//         let noteMenu = parrentDiv.querySelector('.note-options')

//         allMenus.forEach(element =>{

//             if (element.classList.contains('active') && element !== el){

//                 element.classList.remove('active')

//                 element.parentNode.closest('div').querySelector('.note-options').classList.remove('show-options')
//                 element.parentNode.closest('div').querySelector('.note-options').classList.add('hide-options')
//             }
//         })

        

//         el.classList.toggle("active");
        
//         if (el.classList.contains('active')){
//             noteMenu.classList.remove('hide-options')       
//             noteMenu.classList.remove('hidden')
//             noteMenu.classList.add('show-options')
//         } else {
            
//             noteMenu.classList.remove('show-options')
//             noteMenu.classList.add('hide-options')
//             noteMenu.classList.add('hidden')
//         }

//     }))
// }

// // toggleNoteMenu()

// //////////////////////////////////////