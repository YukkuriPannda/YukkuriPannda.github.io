import fs from "fs";
export default async function handler(req, res) {
    fs.readFile("./secret/rootauth.json",'utf8',(err,data)=>{
        if(data){
          const readAuthData = JSON.parse(data);
          const matchUsername = (readAuthData.username == req.body.username);
          const matchUserPass = (readAuthData.pass == req.body.pass);
          console.log(`username:${matchUsername} pass:${matchUserPass} `)
          res.status(200).json({username:matchUsername,pass:matchUserPass})
        }else{
          console.log(err)
        }
      }
    );
    
  }
  