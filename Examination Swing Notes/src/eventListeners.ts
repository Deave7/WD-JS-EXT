import * as domElements from './domElements';
import * as domManipulation from './domManupilation';

export const setButtons = (): void =>  {

    domElements.startBtn.addEventListener("click", function() {
        domManipulation.goToView('list')
        domManipulation.showHeader()
    })
    
    domElements.writeBtns.forEach(btn =>  {
        btn.addEventListener("click", function() {
            domManipulation.goToView('write')
        })
    })
    
}

