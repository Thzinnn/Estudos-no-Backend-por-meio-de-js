import userModel from "../../models/userModel.js"


const listAll =  (req, res) =>{

    try{

    }   catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente'
        })
    }

    const users = userModel.getAll()

    res.json({
       sucess: 'Usuarios listados com sucesso',
       users: users   
    })
}

export default listAll