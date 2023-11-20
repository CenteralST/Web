let http=require('http');
let fs=require('fs');
let server=http.createServer(ServerHandler);

let port=8080;
server.listen(port);

console.log("server is Running On Port : "+port);


let header={
    text:{'Content-Type':'text/Plain'},
    html:{'Content-Type':'html/Plain'}
}
function write(error,data)
{
    fs.readFile('./s01.htm',write(error,data));
    if(error)
    {
        GetWrite()
    }
    else
    {

    }
}
function GetWrite(Tp,Re,Dt)
{
    
    Re.writeHead(200,header.Tp);
    
    Re.write(Dt);
    Re.end();
}

function ServerHandler(request,response)
{
    let Get=request.url.split('/')[1];
    if(Get!=="favicon.ico")
    {
        GetWrite("text",response,Get);
    }
}
