import Head from 'next/head'
import Link from 'next/link'
import style from '../styles/Home.module.css'
import CalenderPlanField from '../Compornents/BasicCard/CalenderPlanField';
import Title from '../Compornents/Title/Title';
import TopLinks from '../Compornents/TopLinks/TopLinks';
import { useEffect, useState } from 'react';

export default function Home() {
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
    <div>
      <Title deviceType = {DeviceType}/>
      <TopLinks deviceType = {DeviceType}/>
      <div className={`main${DeviceType}`}>
        <CalenderPlanField />
        <CalenderPlanField />
        <CalenderPlanField />
        <CalenderPlanField />
        <CalenderPlanField />
      </div>
    </div>
    
    
  );
}
