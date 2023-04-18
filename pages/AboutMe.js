import Head from 'next/head'
import Link from 'next/link'
import style from '../styles/AboutMe.module.css'
import { useEffect, useState } from 'react';
import BasicPageTemplate from './BasicPageTemplate';

export default function AboutMe() {
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
  
  let ClassName;
  let line;
  if(DeviceType == "Mobile")ClassName = style.Mobile;
  else {ClassName = style.PC;line = (<div className={style.line}></div>);}
  
  return (
    <div>
      <BasicPageTemplate>
        <div className={`${style.headExplain} ${ClassName}`}>
          <img className = {`${style.myIcon} ${ClassName}`}src = "/MyIcon.jpg"/>
          {line}
          <div className={style.explainTex}>
            <h1>About me</h1>
            <p>
              私です。そう、YukkuriPanndaです。あなたではないです。私は私です。あなたは誰です?<br/>
            </p>
            <div className={style.links}>
              <Link href='https://twitter.com/PanndaYukkuri'>
                <img src='/SNSIcons/Twitter.png'/>
                <p>Twitter</p>
              </Link>
              
              <Link href='https://github.com/YukkuriPannda'>
                <img src='/SNSIcons/Github.svg'/>
                <p>Github</p>
              </Link>
              <Link href='https://www.youtube.com/channel/UCcp5ZdPqicOmey3AYOm94_g'>
                <img src='/SNSIcons/Youtube.png'/>
                <p>Youtube</p>
              </Link>
            </div>
            
          </div>

          </div>
        <p>ｵｼｬｼﾝを取ったりｺｫﾄﾞを書いたり、素晴らしい友人に支えられて。</p>
        
      </BasicPageTemplate>
    </div>
    
    
  );
}
