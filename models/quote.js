import {elements} from '../views/base.js';

const url = 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand';

export function getQuotes() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            console.log(xhttp.responseText);
        }
    }
    xhttp.open("GET", url);
    xhttp.send();
}

