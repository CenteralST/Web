let http=require('http');
let fs=require('fs');

let dt={};
let state =false;
let server=http.createServer(serverHandler);
let port=8080;
let Header={
    text:{'Content-Type':'text/plain'},
    html:{'Content-Type':'text/html'}
}
let Obj={
    text:text(),
    html:html()
};
server.listen(port);
console.log("Server Is Running in Port  ",port);


function text()
{
    return "this is Text To See It in Browser....";
}

function html()
{

    fs.readFile("s01.htm",function(error,data)
            {
                
               if(error)
               {
                    dt="This Server Has Stoped On Service...:(";
               }
               else
               {
                     state=true;
                     dt=data;
               }
            });
}
function respons(Re,Rq,Tp,Dt)
{
    Re.writeHead(200,Header.Tp);
    Re.write(Dt);
    Re.end();
}
function serverHandler(request,response)
{
    let Get=request.url.split('/')[1].toLowerCase();
    

    switch(Get)
    {
        case "text":
            respons(response,request,"text",Obj.text);
        break;

        case "html":
           Obj.html;
           
           if(state===true)
           {
            respons(response,request,"html",dt);
           }
           else
           {
            respons(response,request,"text",dt);
           }
        break;

        case "favicon.ico":
            break;
        default:
            respons(response,request,"text","Please Search /text Or /html ");
        break;
    }
    
}
