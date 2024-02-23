import userModel from "../../models/userModel.js"

const create = async (req, res) =>{   

    try{

        const dados = req.body

    const produto = await userModel.Create({
        produto : dados
    })
    res.json({message: 'Essa é a rota POST /produto/', produto })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente'
        })
    }
}

export default create