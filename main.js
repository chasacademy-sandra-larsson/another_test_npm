//const axios = require("axios"); // Common JS (Node.js ursprunliga import-system)
import axios from "axios"; // ES6 module-sättet, modernt och funkar både frontend / backend

const BASE_URL = "https://jsonplaceholder.typicode.com"

async function getUsers() {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
       
        console.log(response.data);

    } catch(error) {
        console.error("Error:", error.message);
    }


}

getUsers();