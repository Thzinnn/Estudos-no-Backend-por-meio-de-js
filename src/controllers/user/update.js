import userModel from "../../models/userModel.js"

const update = async (req, res) => {
    try{
        user.id = +req.params.id
        const user = req.body
        const result = await userModel.validateUserToUpdate(user)
        if(!result.success){
            return res.status(400).json({
                error: `Dados de Atualização Inválido`,
                fields: zodErrorFormat(result.error)
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default update