const modeloValorant = {
    queryGetAgent: "SELECT * FROM valorant",
    querygetAgentByID: `SELECT * FROM valorant WHERE ID = ?`,
    querydeleteAgentByID: `UPDATE valorant SET Activo = 'N' WHERE ID = ?`,
    queryAgentExists: `SELECT Usuario_Agente FROM valorant WHERE Usuario_Agente = ?`,
    queryaddAgent: `
    INSERT INTO Usuarios (
        Usuario_Agente,
        Nombre_Agente,
        Pasiva_del_Agente,
        Nacionalidad_del_Agente,
        Habilidad_Definitiva,
        Genero,
        Activo
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?)`,
        
    queryGetUserInfo:
    `SELECT Usuario_Agente, Nombre_Agente, Pasiva_del_Agente , Nacionalidad_del_Agente, Habilidad_Definitiva, Genero 
            FROM valorant 
            WHERE Usuario_Agente = ?`,
    queryUpdateByUsuario:
    `UPDATE valorant SET  
                Nombre_Agente = ?,
                Pasiva_del_Agente = ?,
                Nacionalidad_del_Agente = ?,
                Habilidad_Definitiva = ?,
                Genero = ?
                WHERE Usuario_Agente = ?`
    
   
    }
    
   
    
    module.exports = modeloValorant