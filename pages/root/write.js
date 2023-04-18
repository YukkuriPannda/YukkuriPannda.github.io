import BasicPageTemplate from "../BasicPageTemplate";
import Auth from "./Auth";
import style from "../../styles/Write.module.css";
import React, { useState } from "react";
import { postImage } from "../api/upload";
export default function WritePage(){
    const [title,SetTitle] = useState("");
    const onChangeTitle = (event) => SetTitle(event.target.value);
    const [inputTag,setInputTag] = useState("");
    const onChangeInputTag = (event) => setInputTag(event.target.value);
    const [tags,setTags]= useState([]);
    function AddTag(){
        if(tags.indexOf(inputTag,0) ==-1 && inputTag != ""){
            setTags([...tags,inputTag]);
            setInputTag("");
        }
    }
    const [bodyObjects,setBodyObjects] = useState([{type:"text",body:"",verticalMargin:0,sideMargin:0}]);
    function AddBodyObjectsTex(){
        setBodyObjects([...bodyObjects,{type:"text",body:"",verticalMargin:0,sideMargin:0}]);
        console.log(bodyObjects);
    }
    const AddPhoto = (event)=>{
        let files = Array.from(event.target.files);
        let fileUrls = files.map((value,index) => {
            return(URL.createObjectURL(value));
        })
        setBodyObjects([...bodyObjects,{type:"image",localFileUrls:fileUrls,files:files,verticalMargin:0,sideMargin:0}]);
        event.target.value = "";
        console.log(bodyObjects);
    }
    const DestroyObject = (index)=>{
        console.log(`destroy ${index} object`)
        let data = [...bodyObjects];
        data.splice(index,1);
        setBodyObjects(data);
    }
    const handleFormChange = (index, event) => {
        let data = [...bodyObjects];
        data[index].body = event.target.value;
        setBodyObjects(data);
        console.log(bodyObjects);
    }
    const handleSideMarginChange = (index,event) =>{
        let data = [...bodyObjects];
        data[index].sideMargin = event.target.value;
        setBodyObjects(data);
    }
    const handleVerticalMarginChange = (index,event) =>{
        let data = [...bodyObjects];
        data[index].verticalMargin = event.target.value;
        setBodyObjects(data);
    }
    const sendToServer = async()=>{
        const blogDatas = {
            title:title,
            tags:tags,
            bodyObjects:bodyObjects
        };
        console.log(blogDatas);
        const result = await postImage(bodyObjects[0].files[0]);
        console.log(result);
    }
    return(
        <Auth>
            <BasicPageTemplate>
                <div className={style.titleFields}>              
                    <h1>Title</h1>
                    <input className={style.inputField} name={"title"} value={title} onChange={onChangeTitle}></input>
                </div>
                <div className={style.tagFields}>
                    <h2>Tags</h2>
                    <div className={style.tagInput}>
                        <input className={style.inputField} name={"tag"} value={inputTag} onChange={onChangeInputTag}></input>
                        <button onClick={AddTag}>Add</button>
                    </div>
                    <div className={style.tags}>
                        <img src = "/BasicIcons/Tag.svg"/>
                        {
                            tags.map((value,index)=>{
                                return <p key={index}>{value}</p>
                            })
                        }
                    </div>
                </div>
                <div className={style.inputBodyTexs}>
                    <h2>Body</h2>
                    <div>{
                        bodyObjects.map((input,index)=>{
                            //return <BodyObject input={input} index ={index} key={index}/>
                            return(
                                <div>
                <div className={style.tools}>
                    <div >
                        <p>vertical</p>
                        <input type={"number"} value={input.verticalMargin} onChange={event => handleVerticalMarginChange(index,event)}/>
                        <input type={"range"} max={200} value={input.verticalMargin} onChange={event => handleVerticalMarginChange(index,event)}/>
                    </div>
                    {
                        function(){
                            if(input.type == 'image')if(input.localFileUrls){
                                return(
                                <div >
                                    <p>side</p>
                                    <input type={"number"} value={input.sideMargin} onChange={event => handleSideMarginChange(index,event)}/>
                                    <input type={"range"} max={100} value={input.sideMargin} onChange={event => handleSideMarginChange(index,event)}/>
                                </div>
                                );
                            }
                        }()
                    }
                    <input type={"image"} src="/BasicIcons/Bin.svg" onClick={() =>DestroyObject(index)}/>
                </div>
                <div style={{height:`${input.verticalMargin}px`,width:"100%",background:"transparent"}}/>
                <div>{function(){
                    if(input.type == 'image'){
                        return (
                            <div className={style.photos}>
                                {
                                    input.localFileUrls.map((value,index) => {
                                        return(<div  className={style.photo} style={{margin:`0 ${input.sideMargin}px`}} key={index}><img src={value}/></div>)
                                    })
                                }
                            </div>
                        )
                    }
                    if(input.type == "text"){
                        return(
                            <div key={input.index} className={style.bodytext}>
                                <textarea value={input.body} onChange={event => handleFormChange(index,event)}></textarea>
                            </div>
                        )
                    }
                }()}</div>
            </div>
                            )
                        })
                    }</div>
                    <div className={style.addButtons}>
                        <button onClick={AddBodyObjectsTex} className={style.addTextButton}><img src='/BasicIcons/write.svg'/></button>
                        <label className={style.addPhotoButton} htmlFor="addPhoto">
                            <img src="/BasicIcons/photo.svg"/>
                        </label>
                        <input type='file' onChange={AddPhoto} id = "addPhoto" multiple></input>
                    </div>
                    
                </div>
                <div style={{width:"100%",margin:"50px 0px"}}><input type={"button"} value={"Send"} onClick={sendToServer} className={style.sendButton}/></div>
            </BasicPageTemplate>
        </Auth>
    );

    
}