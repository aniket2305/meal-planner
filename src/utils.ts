import axios from 'axios';

export const getToken = async (): Promise<any> => {
    const response = await axios.post('https://ddapi.production.dietdoctor.com/auth/create', {
        "username": "saxenaaniket@yahoo.com",
        "password": "Lucky@1609"
    });
    return `Bearer ${response.data.token}`;
}

export const setTokenInLocalStorage = async (): Promise<any> => {
    const token = await getToken();
    localStorage.setItem('token', token);
}


