const addToDb = id =>{
    const exists = localStorage.getItem("developer_id");
    let developer_id ={}
    if(!exists){
        developer_id[id]=1;
    }
    else{
        developer_id = JSON.parse(exists);
        if(developer_id[id]){
            
            developer_id[id]=developer_id[id]+1;
        }
        else{
            developer_id[id]=1;
        }

    }

    localStorage.setItem("developer_id",JSON.stringify(developer_id))
}


// remove from localStorage 
const removeFromDb =(id) =>{
    const exists = localStorage.getItem("developer_id");
    if(!exists){

    }
    else{
        const developer_id = JSON.parse(exists);
        delete developer_id[id];

        localStorage.setItem("developer_id",JSON.stringify(developer_id))

    }
}

export {addToDb,removeFromDb}
