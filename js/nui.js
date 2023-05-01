export async function fetchNui(nuiEvent){
    let resp = await fetch(`https://${location.host}/${nuiEvent}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }});
        console.log("passé ? : "+resp.ok);
        console.log("status : "+resp.status);
        console.log("url : "+resp.url);
        
        
        
    return resp;
    }