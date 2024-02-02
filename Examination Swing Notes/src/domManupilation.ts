import * as domElements from './domElements'

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

export const createNote = (): void => {
    const li: HTMLElement = document.createElement('li')
    domElements.noteList.appendChild(li)

    const article: HTMLElement = document.createElement('article')
    article.classList.add('note')
    li.appendChild(article)

    const noteTopDiv: HTMLElement = document.createElement('div')
    noteTopDiv.classList.add('note-top')
    article.appendChild(noteTopDiv);

    const p: HTMLElement = document.createElement('p')
    p.classList.add('date')
    noteTopDiv.appendChild(p)

    const noteInfoDiv = document.createElement('div')
    noteInfoDiv.classList.add('note-info')
    article.appendChild(noteInfoDiv)

    const textArea = document.createElement('textarea')
    textArea.cols = 33
    textArea.rows = 8
    noteInfoDiv.appendChild(textArea)

    const noteBottomDiv = document.createElement('div')
    noteBottomDiv.classList.add('note-bottom')
    article.appendChild(noteBottomDiv)

    const containerDiv = document.createElement('div')
    noteBottomDiv.appendChild(containerDiv)

    const flexDivOne = document.createElement('div')
    flexDivOne.classList.add('flex-container-1')
    containerDiv.appendChild(flexDivOne)

    const image = document.createElement('img')
    image.src = './assets/Rectangle 3.svg'
    image.alt = 'line'
    flexDivOne.appendChild(image)

    const authorP = document.createElement('p')
    authorP.classList.add('author')
    flexDivOne.appendChild(authorP)

    const flexDivTwo = document.createElement('div')
    flexDivTwo.classList.add('flex-container-2')
    containerDiv.appendChild(flexDivTwo)

    const updateBtn = document.createElement('button')
    updateBtn.textContent = 'Update'
    updateBtn.classList.add('button')
    updateBtn.classList.add('update-btn')
    flexDivTwo.appendChild(updateBtn)

    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove'
    removeBtn.classList.add('button')
    removeBtn.classList.add('remove-btn')
    flexDivTwo.appendChild(removeBtn)
}

export const deleteNote = (noteID: string): void => {
    const li = document.getElementById(noteID) as HTMLElement
    li.remove()
}
