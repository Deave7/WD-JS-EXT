//Buttons
export const startBtn = document.getElementById('start-btn') as HTMLButtonElement;
export const listHeaderBtn = document.getElementById('list-header-btn') as HTMLButtonElement;
export const publishBtn = document.getElementById('publish-btn') as HTMLButtonElement;
export const writeBtns = document.querySelectorAll('.write-btn') as NodeListOf<HTMLButtonElement>;
export let removeBtns = document.querySelectorAll('.remove-btn') as NodeListOf<HTMLButtonElement>;
export let updateBtns = document.querySelectorAll('.update-btn') as NodeListOf<HTMLButtonElement>;

//header
export const header = document.querySelector('header') as HTMLElement;

//list 
export const noteList = document.querySelector('.note-list') as HTMLElement;

export const updateRemoveBtns = () => {
   removeBtns = document.querySelectorAll('.remove-btn')
} 

export const updateUpdateBtns = () => {
    updateBtns = document.querySelectorAll('.update-btn')
}

//Listerna på update och remove btns måste uppdateras på något sätt. 