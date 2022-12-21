import { rerenderTree } from "../render"

let state = {

    profilePage: {
        postsItems: [
            {message: 'Hi, world', likes: 0},
            {message: 'I`m Elon Mask, really', likes: 3},
            {message: 'Give me some bitcoins', likes: 10}
          ],newPostText:'hahaha'
    },
    dialogsPage: {
        dialogNames: [
            {name:'Ivan Ivanov', id: 1},
            {name:'Ilon Mask', id: 2},
            {name:'Bill Gates', id: 2}
          ],
           messageItems:  [
            {message:'Hi!', id: 1},
            {message:'Go on the Mars', id: 1},
            {message:'Where is my chip?', id: 1}
          ]
     },
     navMenu: {
       friends: [
           {ava: 1, name: 'Vasya'},
           {ava: 1, name: 'Nikita'},
           {ava: 1, name: 'Oleg'}
       ]    
     }   
}
export default state
export let addPost = (postText)=> {
    let newPost = {
        text: postText,
        id: 4,
        likes: 0
    }
    state.profilePage.postsItems.unshift(newPost)
rerenderTree(state)
}
export let sendMessage = (message) =>{
let newMessage= {
    message: message, id: 4
}
state.dialogsPage.messageItems.unshift(newMessage)
rerenderTree(state)
}
export let onPostChange = (text) => {
    state.profilePage.newPostText = text
    rerenderTree(state)
}
