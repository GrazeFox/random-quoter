import {elements} from './views/base.js';
import * as requests from './models/quote.js';

const colourChange = () => {
    const colours = [
        '#FF69B4',
        '#DA70D6',
        '#7B68EE',
        'royalblue',
        '#DC143C',
        '#FF8C00',
        '#7CFC00',
        '#20B2AA',
        '#87CEFA'
    ]

    let root = document.documentElement;
    root.style.setProperty('--main-bg-color', colours[Math.floor(Math.random() * colours.length)]);
}

window.addEventListener('load', () => {
    insertQuote();
 
})
elements.newQuote.addEventListener('click', () => {
    insertQuote();
    colourChange();
});

 async function insertQuote()  {
    const results = await requests.getQuotes();

    elements.text.innerHTML = results['content'];
    elements.author.innerHTML = results['author'];
}

