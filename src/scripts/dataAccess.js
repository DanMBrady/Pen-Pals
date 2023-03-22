const applicationState = {
    people:[],
    }
    const mainContainer = document.querySelector("#container")
    const API = "http://localhost:8088"
    
    export const fetchPeople = () => {
        return fetch(`${API}/people`)
            .then(response => response.json())
            .then(
                (People) => {
                   
                    applicationState.people = People
                }
            )
    }
    

    export const fetchTopics = () => {
        return fetch(`${API}/topics`)
            .then(response => response.json())
            .then(
                (Topic) => {
                   
                    applicationState.topics = Topic
                }
            )
    }

    export const fetchLetters = () => {
        return fetch(`${API}/letters`)
            .then(response => response.json())
            .then(
                (Letter) => {
                   
                    applicationState.letters = Letter
                }
            )
    }






    export const getPeople =() =>{
        return applicationState.people.map(person =>({...person}))
    }

    export const getTopics =() =>{
        return applicationState.topics.map(topic =>({...topic}))
    }

    export const getLetters =() =>{
        return applicationState.letters.map(letter =>({...letter}))
    }



    export const sendLetter = (letter) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(letter)
        }
    
    
        return fetch(`${API}/letters`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
    }

   

   

  