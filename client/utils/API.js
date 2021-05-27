import axios from 'axios';

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const title = '+intitle:';
const APIKEY = 'AIzaSyBw5Gzu-N1jr_HeON12yr4mQ_okioiN8UI';

export default {
    getBooks: function(query) {
        console.log(query);
        return axios.get(BASEURL + query + title + query + APIKEY);
    },
    //Gets the book with the given id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.get("/api/books/" + id);
    }
}



