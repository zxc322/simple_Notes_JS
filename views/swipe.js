const activeNotesBtn = document.getElementById('active-notes-btn')
const archieveNotesBtn = document.getElementById('archieve-notes-btn')
const activeSection = document.querySelector('.active-notes-section')
const archieveSection = document.querySelector('.archieved-notes-section')


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

activeNotesBtn.addEventListener('click', async function(e) {

    if (!(e.target).classList.contains('chosen-page')){
        archieveNotesBtn.classList.remove('chosen-page')
        activeNotesBtn.classList.add('chosen-page')

        archieveSection.classList.remove('swipe-in')
        archieveSection.classList.add('swipe-out')
        activeSection.classList.remove('swipe-out')
        await sleep(500)
        archieveSection.classList.remove('z-class1')
        archieveSection.classList.add('z-class0')
        activeSection.classList.remove('z-class0')
        activeSection.classList.add('swipe-in', 'z-class1')
        await sleep(500)
        activeSection.classList.remove('swipe-in')
        archieveSection.classList.remove('swipe-out')
    }
})



archieveNotesBtn.addEventListener('click', async function (e) {

    if (!(e.target).classList.contains('chosen-page')){
        activeNotesBtn.classList.remove('chosen-page')
        archieveNotesBtn.classList.add('chosen-page')

            
        activeSection.classList.add('swipe-out')
        await sleep(500)
        activeSection.classList.remove('z-class1')
        activeSection.classList.add('z-class0')
        archieveSection.classList.remove('z-class0')
        archieveSection.classList.add('swipe-in', 'z-class1')

    }
})