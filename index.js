import {elements} from './views/base.js';
import * as requests from './models/quote.js';


elements.quoteButton.addEventListener('click', () => {
    requests.getQuotes();
});

