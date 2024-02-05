import * as domManipulation from './domManupilation';
import * as eventListeners from './eventListeners'
import * as api from './api'
import { CreateNote } from './createNoteInterface'
import { UpdateNote } from './updateNoteInterface';


eventListeners.setButtons()

const note: CreateNote = {
    username: 'Deave',
    title: 'Teskkkkka',
    note: 'test text 123'
}

const updateNote: UpdateNote = {
    note: 'Kalle är coolastastast'
}

domManipulation.getNoteID('Deave')
