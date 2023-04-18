import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Auth({children}){
    const[isLogin,setIsLogin] = useState(false);
    const router = useRouter();
    useEffect(()=>{  
        const username = Cookies.get("username");
        const pass = Cookies.get("pass");
        fetch('/api/rootAuth',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                username:username,
                pass:pass
            }
        ),}
        ).then(res => res.json()
        ).then((data)=>{
            console.log(data.username && data.pass);
            if(data.username && data.pass)setIsLogin(true);
            console.log(isLogin);
            if(!(data.username && data.pass))router.replace("/RootAuth");
        })
    },[])
    if(isLogin){
        return children;
    }else{
        return <h1>Now Loading...</h1>
        
    }
}