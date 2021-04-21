const http=require('http')
const fs=require('fs')
const querystring=require('querystring');
const url=require('url')
var i=1;
const server=http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/img');
      fs.readFile("favicon.ico",(err,fsData)=>{
        if(err){
          console.log("Read file error")
          throw err
        }
        res.write(fsData)
        res.end()
      })
      
    }
    else if(req.url=="/"){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      fs.readFile("form3.html",(err,fsData)=>{
        if(err){
          console.log("Read file error")
          throw err
        }
        res.write(fsData)
        res.end()
      })
      
    }
    else if(req.url.slice(0,6)=="/input"){
      res.statusCode = 200;
      let url1=req.url.split("?");
      //console.log(url1[1])
      //let urlquery=url1[1].split("&");     
      //let firstQuery=urlquery[0].split("=");
      //let secondQuery=urlquery[1].split("=");
      let obQuery=querystring.parse(url1[1]);
      //url1=new URL(req,url)
      //let queryData=url.parse(req.url,true).query
      if(obQuery.submit1=="Save"){
        fs.writeFile('./savefile',obQuery.name1,(err)=>{
          if(err) console.log("write file error")
          else console.log("write file success")
        })
      }
      else{
          fs.appendFile('./savefile',obQuery.name1,(err)=>{
          if(err) console.log("write file error")
          else console.log("append file success")
        })
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      fs.readFile("form3.html",(err,fsData)=>{
        if(err){
          console.log("Read file error")
          throw err
        }
        res.write(fsData)
        res.end()
      })
      
      res.setHeader('Content-Type','text/html');
      res.write(obQuery.name1+"<br>");
      res.write(obQuery.submit1+"<br>");
      res.end("submit success!")
  }
    else{
      //var urlQuery=url.
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      //res.write(req.url)
      res.write('<h1>This is Liu. You are the '+i+'th sb</h1>');
      res.end();
    }
    //i++;
    console.log("who open,who is dog");
    
  });
  server.listen(3000);