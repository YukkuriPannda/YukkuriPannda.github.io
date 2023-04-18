import style from'./DashbordContents.module.css'
const defaultThumnailPath = './MyIcon.jpg';
export default function DashbordContents({thumbnailPath,title,explan,tags,date}){
    if(!thumbnailPath)thumbnailPath = defaultThumnailPath;
    return(
        <>
            <div className={style.rootMenus}>
                <img src='/BasicIcons/Pen.svg'/>
                <img src='/BasicIcons/Bin.svg'/>
                <img src='/BasicIcons/3pointsMenu.svg'/>
            </div>
                <div className={style.card}>
                <img className = {style.thumbnail}src = {thumbnailPath}/>
                <div className={style.line}></div>
                <div className={style.texts}>
                        <h1>{title}</h1>
                        <p className={style.explan}>{explan}</p>
                        <div className={style.infos}>
                            <img src="/BasicIcons/Calender.svg"/>
                            <p className={style.date}>{date}</p>

                            <img src = "/BasicIcons/Tag.svg"/>
                            <p className={style.tag}>{tags}</p>
                        </div>
                </div>
            </div>
        </>
        
    );
    
}