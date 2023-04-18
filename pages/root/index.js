import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Auth from "./Auth"
import DashbordContents from "../../Compornents/DashbordContents/DashbordContents";
import Link from "next/link";
import BasicPageTemplate from "../BasicPageTemplate";
export default function Home(){
    let [DeviceType,SetDeviceType] = useState('PC');
    useEffect(() =>{
        const mobileList = ["iPhone","iPad","Android"];
        const mobileChecked = mobileList.filter(item =>{
        return navigator.userAgent.search(item) != -1;
    });
    if(mobileChecked.length > 0){
        SetDeviceType('Mobile');
    }else{
        SetDeviceType('PC');
    }
    });
    return (
        <Auth>
            <BasicPageTemplate>     
                <Link className ="plus" href="/root/write"><img src="/BasicIcons/Plus.svg" className ="plus"/></Link>
                <DashbordContents title={"自作ブログをNextjsで構築したい"} explan={"1だぞほら"} tags={"test first unity c#"} date={"2022.01.09"}/>
            </BasicPageTemplate>
        </Auth>
    );
    
}