import * as domManipulation from './domManupilation';
import * as eventListeners from './eventListeners'
import * as api from './api'
import { CreateNote } from './interfaces/createNoteInterface'
import { UpdateNote } from './interfaces/updateNoteInterface';


eventListeners.setButtons()

const note: CreateNote = {
    username: 'Deave',
    title: 'Teskkkkka',
    note: 'test text 123'
}

const updateNote: UpdateNote = {
    note: 'Kalle är coolastastast'
}


api.getNotes('Deave')
