import { useState } from 'react';
import style from'./AuthField.module.css'
/*const [username,SetUsername] = useState("");
const [pass,SetPass] = useState("");*/
export default function CalenderPlanField(props){
    return(
        <div className={style.card}>
            <div>
                <p>User name</p>
                <input className={style.inputField} type={"userName"}></input>
                <p>Password</p>
                <input className={style.inputField} type={"password"}></input>
            </div>
            <hr></hr>
            <div className={style.buttons}>
                <button className={style.Cancel}><p>Cancel</p></button>
                <button className={style.OK} onClick={ClickOK()}><p>OK</p></button>
            </div>
        </div>
    );
}
    function ClickOK(){
        fetch("http://localhost:3001/api/auth").then((data,err)=>{
            if(err)console.log(err);
            else console.log(data);
        })
    }