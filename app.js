import { validateName, validateContent } from "./utils/validateForm.js"
import { active_notes_list, archieved_notes_list, insertNoteInHTML } from "./utils/showNotes.js"


export let activeNotesMap = new Map() 
export let archieveNotesMap = new Map()

activeNotesMap.set("Shoping List", ["Sun Sep 11 2022", "Task", "Tpmatoes, Bread", []])
activeNotesMap.set("The theory of evolution", ["Sun Sep 11 2022", "Random  Thought", "The theory of evolution", []])
activeNotesMap.set("Naruto Uzumaki", ["Sun Sep 11 2022", "Quote", "Never give up!", []])
activeNotesMap.set("Books", ["Sun Sep 11 2022", "Task", "1974, George Orwell", []])
activeNotesMap.set("New Feature", ["Sun Sep 11 2022", "Idea", "Implement new feature a lot of tttrrrrrrrrrrrrr ", ["3/5/2022", "5/5/2022"]])

archieveNotesMap.set("My first task", ["Sun Sep 11 2022", "Task", "Learn JS", []])
archieveNotesMap.set("Github", ["Sun Sep 12 2022", "Task", "Make first commit", []])





let activeNotes = Object.fromEntries(activeNotesMap)
let archievedNotes = Object.fromEntries(archieveNotesMap)

active_notes_list(activeNotes)
archieved_notes_list(archievedNotes)


