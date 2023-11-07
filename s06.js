let http=require('http')
let port =8080;
let server=http.createServer(ServerHandler);
server.listen(port);
console.log("Server Is Running On Port "+port);
let Headers={'Content-Type':'Text/Plain'}


let Function={
    sum:function(Re,Pr)
    {
        Re.writeHead(200,Headers);
        Re.write("Your Select Function Is : "+Pr);
        Re.end();
    }
    ,
    mine:function(Re,Pr)
    {
        Re.writeHead(200,Headers);
        Re.write("Your Select Function Is : "+Pr);
        Re.end();
    }
    ,
    avg:function(Re,Pr)
    {
        Re.writeHead(200,Headers);
        Re.write("Your Select Function Is : "+Pr);
        Re.end();
    }
    
}

function ServerHandler(request, response)
{
    let Sp=request.url.split("/")[1];
    let Ss=Sp.toLowerCase();
    if(Sp!=="favicon.ico")
    {
        Function[Ss](response,Sp);
    }
    else
    {

    }
   
    //let GetRe=request.url.split("/")[1];
    
}