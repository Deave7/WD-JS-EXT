import axios from 'axios';
import {CreateNote} from './interfaces/createNoteInterface.ts'
import {UpdateNote} from './interfaces/updateNoteInterface.ts'
import { ApiData } from './interfaces/ApiData.ts';
import * as domManipulation from './domManupilation.ts'
const url: string = 'https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes'


export const postNote = async (note: CreateNote): Promise<void> => {
    try {
        const response = await axios({
            method: 'post',
            url: url,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(note),
        });

        const info = await getNoteInfo(note)
        domManipulation.createNote(note, info!)
        
    } catch (error) {

        console.error('Error in postNote: ', error);
    }
};

export const getNotes = async (userName:string) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${url}/${userName}`,
          });

           return response;
    } catch (error) {
        console.error('Error in getNote: ', error)
    }
}

export const getApiNotes = async () => {
    const username = domManipulation.saveLoadingUsernameInput()
    const response = await getNotes(username)
    const data: ApiData[] = response?.data.notes;

    data.forEach(note => {
        domManipulation.createApiNote(note)
    });
}

export const updateNote = (note: UpdateNote, id:string): void => {
    try {
        axios({
            method: 'put',
            url: `${url}/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(note),
            
        })

    } catch (error) {
        console.error('Error in updateNote: ', error)
    }
}

export const deleteNote = (id:string): void => {
    try {
        axios({
            method: 'delete',
            url: `${url}/${id}`,
        })
    } catch (error) {
        console.error('Error in deleteNote: ', error)
    }
}

export const getNoteInfo = async (input: CreateNote) => {
    try {
        const response = await getNotes(input['username'])
        const notes = response?.data.notes
        
        const note = notes.find((note:any) => note.note === input['note'] && note.title === input['title'] )
        
        if (note) {
            const id: string = note.id
            const date: string = note.createdAt
            const info: string[] = [id, date]
            return info;
            
        }
        else {
            console.log('Note not found')
        }
    }
    catch (error) {
        console.error('Error in getNoteID', error)
    }
    
 }
 
 