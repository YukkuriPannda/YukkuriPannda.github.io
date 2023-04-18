import React,{ useState } from 'react';
import style from'./AuthField.module.css';
import { Router, useRouter } from "next/router";
import Cookies from "js-cookie";
export default function LoginField(){
    const router = useRouter();
    const [username,SetUsername] = useState("");
    const [pass,SetPass] = useState("");
    const onChangeUsername = (event) => SetUsername(event.target.value);
    const onChangePass = (event) => SetPass(event.target.value);

    async function ClickOK(){
        
        Cookies.set("username",username);
        Cookies.set("pass",pass);
        router.push("/root");
    }

    return(
        <div className={style.card}>
            <div>
                <p>User name</p>
                <input className={style.inputField} type={"userName"} value={username} onChange={onChangeUsername}></input>
                <p>Password</p>
                <input className={style.inputField} type={"password"} value={pass} onChange={onChangePass}></input>
            </div>
            <hr></hr>
            <div className={style.buttons}>
                <button className={style.Cancel}><p>Cancel</p></button>
                <button className={style.OK} onClick={ClickOK}><p>OK</p></button>
            </div>
        </div>
    );
}
