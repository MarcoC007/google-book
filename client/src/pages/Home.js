import React, { useEffect, useState } from 'react';
import API from "../utils/API";

function Books () {
    const [books, setBooks] = useState([])
    const [searchBook, setSearchBook] = useState({
         title: "",
         authors: "",
         description: "",
         image: "",
         link: ""
    });

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
        .then(res => 
            setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setSearchBook({...setSearchBook, [name]: value});
    }
}

export default Books;

