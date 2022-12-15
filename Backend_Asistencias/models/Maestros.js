const modeloMaestros = {
    queryGetMaster: "SELECT * FROM Maestro",
    querygetMasterByID: `SELECT * FROM Maestro WHERE Maestro_ = ?`,
    queryMasterExist: `SELECT Usuario_M FROM Maestro WHERE Usuario_M = ?`,
    queryaddMaster: `
    INSERT INTO Maestro (
        Maestro_,
        Nombre_M,
        Apellidos_M,
        Grupo_ID,
        Usuario_M,
        Activo
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?)`,
    queryGetMaestroInfo:
    `SELECT Maestro_, Nombre_M, Apellidos_M, Grupo_ID, Usuario_M, Activo 
            FROM Maestro 
            WHERE Usuario_M = ?`
    }

    module.exports = modeloMaestros