import { penPal } from "./penPal.js";
import { fetchLetters, fetchPeople, fetchTopics, } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const render =() =>{
    fetchPeople()
    .then(()=> fetchTopics())
    .then(()=> fetchLetters())
    .then(
        () => {
            mainContainer.innerHTML = penPal()
        }
    )
   
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)