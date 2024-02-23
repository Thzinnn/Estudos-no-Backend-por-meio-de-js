import userModel from "../../models/userModel.js"

const create = async (req, res) =>{   

    try{

        const dados = req.body

    const user = await userModel.create(dados)
    res.json({message: 'Essa é a rota POST /produto/', user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente'
        })
    }
}

export default create