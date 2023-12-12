let http=require('http');

let fs=require('fs');

let server=http.createServer(SeHandler);
let port=8037;

server.listen(port);

console.log("Server Running On Port 8037");

let Headers={
    txt:{"content-type":"text/plain"},
    htm:{"content-type":"text/html"}
}

let route={
    a:dynamicWrite,
    insertToFile:insertToFile
}
function insertToFile(request,response,data)
{
    fs.writeFile("Text.txt",data,'utf8',function(error)
    {
        if(error)
        {
            write('txt',"Fs Error :(",response,request);

        }
        else
        {

            write('txt',"Your File Has Saved :)",response,request);
        }
    });
}
function write(type,data,response,request)
{
    response.writeHead(200,Headers[type]);
    response.write(data);
    response.end();
}
function dynamicWrite(request,response,data)
{
    console.log("Your Data Inserted is : ",data);
    write("txt",data,response,request);
}
function SeHandler(request,response)
{
    let Get=request.url.split('/')[1];
    console.log(Get);
    if(Get!=="favicon.ico")
    {
        let Data="";
        request.on('data',function(chunck)
        {
            Data+=chunck;
        });
        request.on('end',function()
        {
            try{
                route[Get](request,response,Data);
            }
            catch(error)
            {
                console.log("Your Evented Error Is : ",error);
            }
        });
        
    }
}