import * as domElements from './domElements';
import {goToView, showHeader, createNote, deleteNote} from './domManupilation';

domElements.startBtn.addEventListener("click", function() {
    goToView('list')
    showHeader()
})

domElements.writeBtns.forEach(btn =>  {
    btn.addEventListener("click", function() {
        goToView('write')
    })
})

createNote()
