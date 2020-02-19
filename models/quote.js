import {elements} from '../views/base.js';

const url = 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand';

export async function  getQuotes() {
    const newUrl = `${url}&t=${Math.ceil((Math.random() * 10)).toString()}`; 
    console.log(newUrl);
    return await fetch(newUrl)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {

        return randomQuoter(myJson);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });
};

const randomQuoter = function(json) {
    let val = json[Math.floor(Math.random() * json.length)];
    return {
        author: val['title']['rendered'],
        content: val['content']['rendered']
    };
};