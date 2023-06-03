import axios from 'axios'; 

export function validEmail(email: string):Boolean  { 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailRegex.test(email)) { 
        return true; 
    }
    return false;
}
export function validPhoneNumber(phone: string):Boolean { 
    const phoneEmail = /^(?:(?:\d[-\s]?){8}\d|(?:\d{3}[-\s]?){3}\d)$/
    if(phoneEmail.test(phone)) {
        return true
    }
    return false 
}
export async function validExistUserInDb(email:string) { 
    const response = (await axios.get("http://localhost:8888/participants")).data;
    const isUser = await response.some((user) =>{
        return user.email == email
    })
    return isUser ? true : false 
}