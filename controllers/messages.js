const { request, response } = require("express")

const rootMessage = (req=request, res=response)=>{
    res.json({msg:"Hola buen dia"})
}

const hiMessage = (req=request, res=response)=>{
    res.json({msg:"Hola mundo"})
}

const byeMessage = (req=request, res=response)=>{
    res.json({msg:"Adios mundo"})
}

const postMessage = (req=request, res=response)=>{
    res.json({msg:"mesaje POST"})
}

const putMessage = (req=request, res=response)=>{
    res.json({msg:"mesaje PUT"})
}

const deleteMessage = (req=request, res=response)=>{
    res.json({msg:"mesaje DELETE"})
}

module.exports={
    rootMessage,
    hiMessage,
    byeMessage,
    postMessage,
    putMessage,
    deleteMessage
}

module.exports={rootMessage,hiMessage,byeMessage,postMessage,putMessage,deleteMessage}