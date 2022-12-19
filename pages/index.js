import Head from 'next/head'
import Link from 'next/link'
import style from '../styles/Home.module.css'
import CalenderPlanField from '../Compornents/BasicCard/CalenderPlanField';
import Title from '../Compornents/Title/Title';
import TopLinks from '../Compornents/TopLinks/TopLinks';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() =>{
    const mobileList = ["iPhone","iPad","Android"];
    const mobileChecked = mobileList.filter(item =>{
      return navigator.userAgent.search(item) != -1;
    });
    console.log(mobileChecked);
  });
  return (
    <div>
        <Title />
        <TopLinks/>
      <div className='main'>
        <CalenderPlanField />
        <CalenderPlanField />
        <CalenderPlanField />
        <CalenderPlanField />
        <CalenderPlanField />
      </div>
    </div>
    
    
  );
}
