import jwt_decode from 'jwt-decode';

export const validateToken = async (cookies: string): Promise<boolean> => {
    const token = cookies.split('; ').filter(row => row.startsWith('frontToken=')).map(c=>c.split('=')[1])[0];
    const decodedToken: any = jwt_decode(token);
    const dateNow = new Date();

    if (decodedToken.exp < dateNow.getTime()) {
        return true
     } else {
        return false
     }
}