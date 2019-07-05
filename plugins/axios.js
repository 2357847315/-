import { Message } from "element-ui";

export default function ({$axios,redirect}) {
    $axios.onError(err=>{
        const {statusCode,message} = err.response.data
        if(statusCode === 400){
            Message.wwarning({message});
        }
    })
    
}