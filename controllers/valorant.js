const { request, response } = require("express");
const pool = require("../db/connection");
const modeloValorant = require("../models/valorant");

const getAgent = async (req = request, res = response) =>{
    
    
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const users = await conn.query(modeloValorant.queryGetAgent, (error) => {throw new Error(error) })
        
        if (!users) {
            res.status(404).json({msg:"no se encontraron registros"})
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

const getAgentByID = async (req = request, res = response) =>{
    
    const {id} = req.params
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const [user] = await conn.query(modeloValorant.querygetAgentByID, [id], (error) => {throw new Error(error) })
        
        if (!user) {
            res.status(404).json({msg: `No se encontró registro con el ID ${id}`})
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

const deleteAgentByID = async (req = request, res = response) =>{
    
    const {id} = req.query
    let conn;
    
    try {
        conn = await pool.getConnection()
       
        const {affectedRows} = await conn.query(modeloValorant.querydeleteAgentByID, [id], (error) => {throw new Error(error) })
       
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo eliminar el registro con el ID ${id}`})
            return
        }
 
        res.json({msg: `El Agente con ID ${id} se eliminó sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const addAgent = async (req = request, res = response) =>{
    
    const {
        Usuario_Agente,
        Nombre_Agente,
        Pasiva_del_Agente,
        Nacionalidad_del_Agente,
        Habilidad_Definitiva,
        Genero,
        Activo
    } = req.body

    if (
        !Usuario_Agente ||
        !Nombre_Agente ||
        !Pasiva_del_Agente ||
        !Nacionalidad_del_Agente ||
        !Habilidad_Definitiva ||
        !Genero ||
        !Activo
    ){
        res.status(400).json({msg: "Falta información del Agente"})
        return
    }

    let conn;
    
    try {
        conn = await pool.getConnection()
        

        const [user] = await conn.query(modeloValorant.queryAgentExists, [Usuario_Agente])

        if (user) {
            res.status(403).json({msg: `El usuario ${Usuario_Agente} ya se encuentra registrado.`})
            return
        }


        const {affectedRows} = await conn.query(modeloValorant.queryaddAgent, 
        [Usuario_Agente,
        Nombre_Agente,
        Pasiva_del_Agente,
        Nacionalidad_del_Agente,
        Habilidad_Definitiva,
        Genero,
        Activo
    ], (error) => {throw new Error(error) })
        
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del Agente ${Usuario_Agente}`})
            return
        }
 
        res.json({msg: `El Agente ${Usuario_Agente} se agrego sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const updateUserByAgent = async (req = request, res = response) =>{
    
    const {
        Usuario_Agente,
        Nombre_Agente,
        Pasiva_del_Agente,
        Nacionalidad_del_Agente,
        Habilidad_Definitiva,
        Genero
        
    } = req.body

    if (
        !Usuario_Agente ||
        !Nombre_Agente ||
        !Pasiva_del_Agente ||
        !Nacionalidad_del_Agente ||
        !Habilidad_Definitiva 

    ) {
        res.status(400).json({msg: "Falta información del Agente"})
        return
    }

    let conn;
    
    try {
        conn = await pool.getConnection()
        

        const [user] = await conn.query(modeloValorant.queryGetAgentInfo, [Usuario_Agente])
        
        if (!user) {
            res.status(403).json({msg: `El Agente ${Usuario_Agente} no se encuentra registrado.`})
            return
        }
         
        const {affectedRows} = await conn.query(modeloValorant.queryUpdateByAgent,
                [
                Nombre_Agente || user.Nombre_Agente,
                Pasiva_del_Agente || user.Pasiva_del_Agente,
                Nacionalidad_del_Agente || user.Nacionalidad_del_Agente,
                Habilidad_Definitiva || user.Habilidad_Definitiva,
                Genero || user.Genero,
                Usuario_Agente
           
            ], (error) => {throw new Error(error) })
        
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del Agente ${Usuario_Agente}`})
            return
        }
 
        res.json({msg: `El Guerrero ${Usuario} se actualizó sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


module.exports = {getAgent, getAgentByID, deleteAgentByID ,addAgent, updateUserByAgent} 