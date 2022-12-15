const modeloAdmin_Es = {
    queryGetRelacion_Alumno_Maestro: "SELECT * FROM tb_alumno a LEFT JOIN tbmaestro M ON a.Id_Grupo = M.IdGrupo WHERE M.IdGrupo = 1",
    querydeleteByID: `UPDATE Admin_Escolar SET Activo = 'N' WHERE ID = ?`,
    queryAdminExist: `SELECT Usuario FROM Admin_Escolar WHERE Usuario = ?`,
    queryaddAdmin: `
    INSERT INTO Admin_Escolar (
            Nombre_Ad,
            Apellido_Ad,
            Usuario,
            Contrasenia,
            Activo
        ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?)`,
    queryStarted: `SELECT Usuario, Contrasenia, Activo FROM Admin_Escolar WHERE Usuario = ?`  
    
    }
        module.exports = modeloAdmin_Es