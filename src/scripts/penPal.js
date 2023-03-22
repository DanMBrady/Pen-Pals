import { allPeople, allRecipients } from "./people.js"
import { allTopics } from "./topics.js"
import { letter } from "./letter.js"
import { sentLetter } from "./final.js"


export const penPal=()=>{
return `
<div class ="header">
<div class = "head">
<h1>Pen Pal Society</h1>
</div>
</div>
<article class ="pageElements">
<h1>Authors</h2>
${allPeople()}
</article>
<article class ="pageElements">
<h2>Letter</h2>
${letter()}
</article>
<article class ="pageElements">
<h2>Topics</h2>
${allTopics()}
</article>
<article class ="pageElements">
<h2>Recipient</h2>
${allRecipients()}
</article>
<article class ="pageElements">
<button id ="button">Send Letter</button>
</article>
<div class ="bottom">
${sentLetter()}
</div>


`
}