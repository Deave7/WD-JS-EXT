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

domElements.removeBtns.forEach(function(button) {
    button.addEventListener('click', function() {
        deleteNote(button)
    })
})


createNote()
