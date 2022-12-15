const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const pool = require("../db/connection");
const modeloAdmin_Es = require("../models/Admin_Es");

const getRelacion_Alumno_Maestro = async (req = request, res = response) =>{
    
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const users = await conn.query(modeloAdmin_Es.queryGetRelacion_Alumno_Maestro, (error) => {throw new Error(error) })
        
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

const addAdmin = async (req = request, res = response) =>{
    
    const {
        Nombre_Ad,
        Apellido_Ad,
        Usuario,
        Contrasenia,
        Activo
      
    } = req.body

    if (
        !Nombre_Ad ||
        !Apellido_Ad ||
        !Usuario ||
        !Contrasenia ||
        !Activo
    ){
        res.status(400).json({msg: "Falta información del Administrador"})
        return
    }

    let conn;
    
    try {
        conn = await pool.getConnection()
        

        const [user] = await conn.query(modeloAdmin.queryAdminExist, [Usuario])

        if (user) {
            res.status(403).json({msg: `El administrador ${Usuario} ya se encuentra registrado.`})
            return
        }

        const salt = bcryptjs.genSaltSync()
        const ContraseniaCifrada = bcryptjs.hashSync(Contrasenia, salt)

        const {affectedRows} = await conn.query(modeloAdmin_Es.queryaddAdmin, 
        [   Nombre_Ad,
            Apellido_Ad,
            Usuario,
            ContraseniaCifrada,
            Activo
    ], (error) => {throw new Error(error) })
        
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del administrador ${Usuario}`})
            return
        }
 
        res.json({msg: `El administrador ${Usuario} se agrego sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const Started = async (req=request,res=response)=>{
    const {
        Usuario,
        Contrasenia
    }=req.body

    if(
        !Usuario||
        !Contrasenia
    ){
        res.status(400).json({msg:"Falta información del usuario."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloAdmin.queryStarted,[Usuario])

        if(!user || user.Activo == 'N'){
            let code = !user ? 1: 2;
            res.status(403).json({msg:`El usuario o la contraseña son incorrectos`,errorCode:code})
            return
        }

        const AccesoValido = bcryptjs.compareSync(Contrasenia,user.Contrasenia)

        if(!AccesoValido){
            res.status(403).json({msg:`El usuario o la contraseña son incorrectos`,errorCode:"3"})
            return
        }


        res.json({msg:`El usuario ${Usuario} ha iniciado seción satisfactoriamenente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const DeleteByID = async (req = request, res = response) =>{
    
    const {id} = req.query
    let conn;
    
    try {
        conn = await pool.getConnection()
       
        const {affectedRows} = await conn.query(modeloAdmin.querydeleteByID, [id], (error) => {throw new Error(error) })
       
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo eliminar el registro con el ID ${id}`})
            return
        }
 
        res.json({msg: `El usuario con ID ${id} se eliminó sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}



module.exports = {getRelacion_Alumno_Maestro, addAdmin, Started, DeleteByID}