import style from './ModalWindow.module.css';
export default function ModalWindow({children}){
    return(
        <div className={style.modalBackGround} onClick={()=>{console.log('clicked')}}>
            <div className={style.children}>{children}</div>
        </div>
    )
}