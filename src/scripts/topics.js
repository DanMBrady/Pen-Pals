import { getTopics } from "./dataAccess.js";



export const allTopics =() =>{
    let topics = getTopics()
    let html =  `
    
    ${
        topics.map(
            topic =>{
                return `<input id ="topics" type ="radio" name ="topic" value ="${topic.id}"/>${topic.description}`
            }
        ).join("")

    }
    
    
    
    
    `
    return html
}


