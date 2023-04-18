import style from '/BodyObject.module.css';
export default function BodyObject({type,body,verticalMargin,sideMargin}){
    if(type == 'image'){
        return (
            <div style={{margin:{verticalMargin}}}>
                <div className={style.tools}>
                {
                    function(){
                        if(input.body.length > 1){
                            return(
                            <div >
                                <input type={"number"} value={input.sideMargin} onChange={event => handleMarginChange(index,event)}/>
                                <input type={"range"} max={100} value={input.sideMargin} onChange={event => handleMarginChange(index,event)}/>
                            </div>
                            );
                        }
                        }()
                    }
                    <input type={"image"} src="/BasicIcons/Bin.svg" onClick={() =>DestroyObject(index)}/>
                </div>
                <div className={style.photos}>
                    {
                        body.map((value,index) => {
                            return(<div  className={style.photo} style={{margin:`0 ${sideMargin}px`}} key={index}><img src={value}/></div>)
                        })
                    }
                </div>              
            </div>
        )
    }
}