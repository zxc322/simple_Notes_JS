export function getSingleNoteData(noteName, activeNotesMap, activeNotes, archieveNotesMap, archievedNotes){

    let data = []
    if (noteName in activeNotes){
        data.push(...activeNotesMap.get(noteName))          

    } else if (noteName in archievedNotes){

        data.push(...archieveNotesMap.get(noteName))        
    }
    return data
}