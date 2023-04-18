import { useEffect, useState } from "react";
import Title from "../Compornents/Title/Title";
import TopLinks from "../Compornents/TopLinks/TopLinks";
export default function BasicPageTemplate({children}){
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
        <>
            <Title deviceType = {DeviceType}/>
            <TopLinks deviceType = {DeviceType}/>
            <div className={`main${DeviceType}`}>
                {children}
            </div>
        </>
    );
    
}