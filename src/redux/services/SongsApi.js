import axios from "axios";

export const getTracks = async() => {
    const url = 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=40&startFrom=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a71477a241mshc548ce6f60225afp18cc67jsne2869a4867d5',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);

        return result
    } catch (error) {
        console.error(error);
    }
}