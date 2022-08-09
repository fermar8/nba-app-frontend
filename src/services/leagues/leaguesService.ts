import axios from 'axios';

export async function getUserTeams(userId: string) {
    try {
        const response = await axios({
            url: `http://localhost:4000/api/leagues/${userId}`,
            method: 'GET',
            withCredentials: true
        })
        return response
    } catch (error) {
       return error
    }
}