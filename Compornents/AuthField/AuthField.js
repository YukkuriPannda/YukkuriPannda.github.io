import style from'./AuthField.module.css'
export default function CalenderPlanField(props){
    return(
        <div className={style.card}>
            <div>
                <p>User name</p>
                <input className={style.inputField} type={"text"}></input>
                <p>Password</p>
                <input className={style.inputField} type={"password"}></input>
            </div>
            <hr></hr>
            <div className={style.buttons}>
                <button className={style.Cancel}><p>Cancel</p></button>
                <button className={style.OK}><p>OK</p></button>
            </div>
        </div>
    );
    function CreatePlan(){

    }
    
}