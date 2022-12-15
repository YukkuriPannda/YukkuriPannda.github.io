import Link from 'next/link'
import style from './TopLink.module.css';
export default function TopLinks(){
    return(
        <div className={style.link}>
            <Link href='/'><p>Home</p></Link>
            <Link href='/AboutMe'><p>AboutMe</p></Link>
            <Link href='/Blog'><p>Blog</p></Link>
            <Link href='/HandOuts'><p>HandOuts</p></Link>
        </div>
    );
}