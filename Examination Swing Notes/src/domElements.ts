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

//input 
export const writeInput = document.querySelector('.note-field') as HTMLTextAreaElement
export const titleInput = document.querySelector('.title-input') as HTMLInputElement
export const usernameInput = document.querySelector('.username-input') as HTMLInputElement
export const loadingUsernameInput = document.getElementById('loading-username-input') as HTMLInputElement