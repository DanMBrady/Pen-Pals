import { sendLetter } from "./dataAccess.js"


export const letter =() =>{
/*let html = `
    <div class="field">
        <label class="label" for="Letter"></label>
        <input class ="label" type="text" name="Letter" class="input" />
    </div>
    `
*/

let html = `
<textarea class ="label" name ="text"></textarea>
`

    return html
}


const mainContainer = document.querySelector("#container")


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "button") {
        
        const userLetter = document.querySelector("textarea[name='text']").value
        const userPerson = document.querySelector("#people").value
        const userTopic = document.querySelector("input[name='topic']:checked").value
        const userRecipient = document.querySelector("#recipient").value
       
        const dataToSendToAPI = {
            description: userLetter,
            writerId:userPerson,
            topicId:userTopic,
            RecipientId:userRecipient,
            date:new Date().toLocaleDateString("en-US"),

        }

        
        sendLetter(dataToSendToAPI)
    }
})


