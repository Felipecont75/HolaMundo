const { request, response } = require("express");
const pool = require("../db/connection");
const modeloMaestros = require("../models/Maestros");


const getMaster = async (req = request, res = response) =>{
    
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const users = await conn.query(modeloMaestros.queryGetMaster, (error) => {throw new Error(error) })
        
        if (!users) {
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({users})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const getMasterByID = async (req = request, res = response) =>{
    
    const {Maestro_} = req.params
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const [user] = await conn.query(modeloMaestros.querygetMasterByID, [Maestro_], (error) => {throw new Error(error) })
        
        if (!user) {
            res.status(404).json({msg: `No se encontró registro con el ID ${Maestro_}`})
            return
        }
        res.json({user})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


const addMaster = async (req = request, res = response) =>{
    
    const {
        Maestro_,
        Nombre_M,
        Apellidos_M,
        Grupo_ID,
        Usuario_M,
        Activo
    } = req.body

    if (
        !Maestro_ ||
        !Nombre_M ||
        !Apellidos_M ||
        !Grupo_ID ||
        !Usuario_M ||
        !Activo
    ){
        res.status(400).json({msg: "Falta información del Maestro"})
        return
    }

    let conn;
    
    try {
        conn = await pool.getConnection()
        

        const [user] = await conn.query(modeloMaestros.queryMasterExist, [Usuario_M])

        if (user) {
            res.status(403).json({msg: `El maestro ${Usuario_M} ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloMaestros.queryaddMaster, 
        [ Maestro_,
            Nombre_M,
            Apellidos_M,
            Grupo_ID,
            Usuario_M,
            Activo
    ], (error) => {throw new Error(error) })
        
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del maestro ${Usuario_M}`})
            return
        }
 
        res.json({msg: `El maestro ${Usuario_M} se agrego sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

module.exports = {getMaster, getMasterByID ,addMaster}