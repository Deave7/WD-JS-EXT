import axios from 'axios';
import {CreateNote} from './createNoteInterface.ts'
import {UpdateNote} from './updateNoteInterface.ts'
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

        console.log('Post request successful:', response.data);
        await domManipulation.createNote(note)

    } catch (error) {

        console.error('Error in postNote: ', error);
    }
};

export const getNotes = (userName:string) => {
    try {
        axios({
            method: 'get',
            url: `${url}/${userName}`,
          })
            .then(function (response) {
              console.log(response)
            });
    } catch (error) {
        console.error('Error in getNote: ', error)
    }
}

export const updateNote = (note: UpdateNote, id:string) => {
    try {
        axios({
            method: 'put',
            url: `${url}/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(note),
            
        })
        .then(function (response) {
            console.log(response)
          });
    } catch (error) {
        console.error('Error in updateNote: ', error)
    }
}

export const deleteNote = (id:string) => {
    try {
        axios({
            method: 'delete',
            url: `${url}/${id}`,
        })
        .then(function (response) {
            console.log(response)
          });
    } catch (error) {
        console.error('Error in deleteNote: ', error)
    }
}

export const getNoteID = async (userName: string) => {
    try {
        const response: any = await getNotes(userName)
    }
    //starta här imorgon 
 }
 
 