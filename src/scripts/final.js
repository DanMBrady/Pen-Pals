import { getLetters } from "./dataAccess.js";
import { getPeople } from "./dataAccess.js";
import { getTopics } from "./dataAccess.js";

export const sentLetter = () =>{
const letters = getLetters()
const people = getPeople()
const topics = getTopics()

 const correctWriter = (letter)=>{
for(const person of people){
    
        if(person.id === parseInt(letter.writerId)){
            return person
        }
    
}
 }

const correctRecipient = (letter)=>{


for(const person of people){
   
        if(person.id === parseInt(letter.RecipientId)){
            return person
        }
    
}
}

const correctTopic = (letter)=>{
for(const topic of topics){
   
        if(topic.id === parseInt(letter.topicId)){
            return topic
        }
    }
}




let html = `
${
letters.map(
    letter=>{
        const writer = correctWriter(letter)
        const topic = correctTopic(letter)
        const recipient = correctRecipient(letter)
        return `<div class ="letterProduct">
       <article> Dear ${recipient.name} (${recipient.email})</article>
       <br> <article>${letter.description}</article>
       <br> <article>Sincerely, ${writer.name} (${writer.email})</article>
       <br> <article>Date:${letter.date}</article>
       <br><article class ="topicDiv">${topic.description}</article>
       </div>
        `
})
}

`

return html

}