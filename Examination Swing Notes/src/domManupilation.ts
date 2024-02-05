import * as domElements from './domElements'
import { CreateNote } from './createNoteInterface'
import * as api from './api'

export const goToView = (targetScreen: string): void => {
    const sectionsToHide = document.querySelectorAll(`section:not(#header):not(#${targetScreen})`) as NodeListOf<HTMLElement>
    sectionsToHide.forEach((section) => section.classList.add('hidden'))
    
    const targetElement = document.querySelector(`.${targetScreen}`) as HTMLElement
    if (targetElement) {
        targetElement.classList.remove('hidden');
    }
}

export const showHeader = (): void => {
    domElements.header?.classList.remove('hidden');
}

export const createNote = (note: CreateNote): void => {
    const li: HTMLLIElement = document.createElement('li')
    domElements.noteList.appendChild(li)

    const article: HTMLElement = document.createElement('article')
    article.classList.add('note')
    li.appendChild(article)

    const noteTopDiv: HTMLDivElement = document.createElement('div')
    noteTopDiv.classList.add('note-top')
    article.appendChild(noteTopDiv);

    const titleP: HTMLParagraphElement = document.createElement('p')
    titleP.classList.add('title')
    titleP.textContent = note['title']
    noteTopDiv.appendChild(titleP)

    const dateP: HTMLParagraphElement = document.createElement('p')
    dateP.classList.add('date')
    const date:Date = new Date()
    dateP.innerText = date.toLocaleDateString()
    noteTopDiv.appendChild(dateP)

    const noteInfoDiv: HTMLDivElement = document.createElement('div')
    noteInfoDiv.classList.add('note-info')
    article.appendChild(noteInfoDiv)

    const textArea: HTMLTextAreaElement = document.createElement('textarea')
    textArea.cols = 33
    textArea.rows = 8
    textArea.value = note['note']
    noteInfoDiv.appendChild(textArea)

    const noteBottomDiv: HTMLDivElement = document.createElement('div')
    noteBottomDiv.classList.add('note-bottom')
    article.appendChild(noteBottomDiv)

    const containerDiv: HTMLDivElement = document.createElement('div')
    noteBottomDiv.appendChild(containerDiv)

    const flexDivOne: HTMLDivElement = document.createElement('div')
    flexDivOne.classList.add('flex-container-1')
    containerDiv.appendChild(flexDivOne)

    const image: HTMLImageElement = document.createElement('img')
    image.src = './assets/Rectangle 3.svg'
    image.alt = 'line'
    flexDivOne.appendChild(image)

    const authorP: HTMLParagraphElement = document.createElement('p')
    authorP.classList.add('author')
    authorP.innerText = note['username']
    flexDivOne.appendChild(authorP)

    const flexDivTwo: HTMLDivElement = document.createElement('div')
    flexDivTwo.classList.add('flex-container-2')
    containerDiv.appendChild(flexDivTwo)

    const updateBtn: HTMLButtonElement = document.createElement('button')
    updateBtn.textContent = 'Update'
    updateBtn.classList.add('button')
    updateBtn.classList.add('update-btn')
    flexDivTwo.appendChild(updateBtn)
    updateBtn.addEventListener("click", function(): void {
        updateNote(this);
    })

    const removeBtn: HTMLButtonElement = document.createElement('button')
    removeBtn.textContent = 'Remove'
    removeBtn.classList.add('button')
    removeBtn.classList.add('remove-btn')
    flexDivTwo.appendChild(removeBtn)
    removeBtn.addEventListener('click', function(): void {
        deleteNote(this);

    })

}

const deleteNote = (clickedButton: HTMLButtonElement): void => {
    const noteToDelete: HTMLElement | null = clickedButton?.closest('li')

    if (noteToDelete) {
        noteToDelete.remove()
    }
}

const updateNote = (clickedButton: HTMLButtonElement): void => {
    const noteToUpdate: HTMLElement | null = clickedButton?.closest('textarea')

    if(noteToUpdate) {

    }
}

export const saveInput = ():Array<string | null | undefined> => {
    if (domElements.titleInput.value.length < 5 || domElements.writeInput.value.length <= 0 || domElements.usernameInput.value.length < 3  ) {
        alert('Your title has to be 5 characters or longer, your username has to be 5 characters or longer and your note has to be 5 characters or longer')
        return [null, null, null]  
    } 
    else {
        const title: string | null | undefined = domElements.titleInput?.value
        const note: string | null | undefined = domElements.writeInput?.value
        const userName: string | null | undefined = domElements.usernameInput?.value
        return [title, note, userName]
    }
  
}

export const organizeInput = (input:(string | null | undefined)[]): CreateNote => {
    const noteObject: CreateNote = {
        username: input![2] as string,
        title: input![0] as string,
        note: input![1] as string
    }

    return noteObject;
}

export const clearInput = (): void => {
    domElements.titleInput.value = ""
        domElements.writeInput.value = ""
        domElements.usernameInput.value = ""
}
