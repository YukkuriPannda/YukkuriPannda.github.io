import Head from 'next/head'
import Link from 'next/link'
import style from '../styles/Home.module.css'
import CalenderPlanField from '../Compornents/BasicCard/CalenderPlanField';
import Title from '../Compornents/Title/Title';
import TopLinks from '../Compornents/TopLinks/TopLinks';
export default function Home() {
  
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
