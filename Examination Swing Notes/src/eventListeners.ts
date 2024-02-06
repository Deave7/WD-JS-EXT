import * as domElements from './domElements';
import * as domManipulation from './domManupilation';
import * as api from './api';
import { CreateNote } from './interfaces/createNoteInterface';

export const setButtons = (): void =>  {

    domElements.startBtn.addEventListener("click", function() {
        domManipulation.goToView('list')
        domManipulation.showHeader()
        api.getApiNotes()
    })
    
    domElements.writeBtns.forEach(btn =>  {
        btn.addEventListener("click", function() {
            domManipulation.goToView('write')
        })
    })
    
    domElements.listHeaderBtn.addEventListener("click", function() {
        domManipulation.goToView('list')
    })

    domElements.publishBtn.addEventListener("click", function() {
        const input:(string | null | undefined)[] = domManipulation.saveNoteInput()
        domManipulation.clearInput()
        if (input.every(value => value === null)) {
            alert('No note was created')
        }
        else {
            api.postNote(domManipulation.organizeInput(input))
            domManipulation.goToView('list')
        }
    })
}
