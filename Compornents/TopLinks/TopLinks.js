import Link from 'next/link'
import style from './TopLink.module.css';
export default function TopLinks(props){
    let ClassName;
    if(props.deviceType == "Mobile")ClassName = style.Mobile;
    else ClassName = style.PC;
    return(
        <div className={`${ClassName} ${style.link}`}>
            <Link href='/'><p>Home</p></Link>
            <Link href='/AboutMe'><p>AboutMe</p></Link>
            <Link href='/Blog'><p>Blog</p></Link>
            <Link href='/HandOuts'><p>HandOuts</p></Link>
        </div>
    );
}