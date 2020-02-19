import {elements} from './views/base.js';
import * as requests from './models/quote.js';



window.addEventListener('load', () => {
    insertQuote();
})
elements.newQuote.addEventListener('click', () => {
    insertQuote();
});

 async function insertQuote()  {
    const results = await requests.getQuotes();

    elements.text.innerHTML = results['content'];
    elements.author.innerHTML = results['author'];
}

