let http=require('http');
let server=http.createServer(Handler);
let fs=require('fs');
const port=8080;
server.listen(port);
console.log("Server Running On Port "+port);

let Headers={
    text:{'Content-type':'text/plain'},
    html:{'Content-type':'text/html'},
    image:{'Content-type':'image/jpeg'}
}

function write(response,type,data)
{
    response.writeHead(200,Headers[type]);
    response.write(data);
    response.end();
}

let routs={
    page1:Process
    
}
function Process(request,response)
{
    let Path=request.url.split('/')[2];
    console.log(Path);
    let Exist=Path.split('.')[1];
    console.log(Exist);
    switch(Exist)
    {
        case 'jpg':
            console.log('Jpg');
            fs.readFile(Path,function(error,data)
            {
                if(error)
                {
                    fs.readFile('Error.htm',function(error,data){write(response,'html',data)});
                    
                }
                else
                {
                    write(response,'image',data);
                }
            });
        break;

        case 'htm':
            console.log('htm');
            fs.readFile(Path,function(error,data)
            {
                if(error)
                {
                    fs.readFile('Error.htm',function(error,data){write(response,'html',data)});
                    
                }
                else
                {
                    write(response,'html',data);
                }
            });
        break;

        case 'txt':
            console.log('txt');
            fs.readFile(Path,function(error,data)
            {
                if(error)
                {
                    fs.readFile('Error.htm',function(error,data){write(response,'text',data)});
                    
                }
                else
                {
                    write(response,"text",data);
                }
            });
        break;

        default:
            console.log('null');
            write(response,'text',"Please Enter A text");
        break;


    }
   
}

function Handler(request,response)
{
    let Get=request.url.split('/')[1];
    if(Get!=="favicon.ico")
    {
        console.log("-------------------------------------------------")
        
        try{
            routs[Get](request,response);
        }
        catch(error)
        {
            console.log('Error Is : '+error);
        }
    }
   
    
}