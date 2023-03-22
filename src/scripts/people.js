import { getPeople } from "./dataAccess.js";

export const allPeople =() =>{
const people = getPeople()


let html = `



    <select id ="people">
    <option value ="s">Choose Author</option>
    ${
        people.map(
            person => {
                return `<option name ="person" value ="${person.id}">${person.name}</option>`
            }
        ).join("")
    }
</select>


`
return html

}

export const allRecipients =() =>{
    const people = getPeople()


    let html = `
    
    
    
        <select id ="recipient">
        <option value ="">Choose Recipient</option>
        ${
            people.map(
                person => {
                    return `<option value ="${person.id}">${person.name}</option>`
                }
            ).join("")
        }
    </select>
    
    
    `
    return html
}




