import Link from 'next/link';
import style from'./Title.module.css'
export default function Title(props){
    return(
        <div className={style.title}>
            <h1>YukkuriPanndaのｲｷﾘｸｿｻﾞｺﾌﾞﾛｸﾞﾓﾄﾞｷ</h1>
            <p>主にプログラミング関連を書くよ</p>
        </div>
    );
}