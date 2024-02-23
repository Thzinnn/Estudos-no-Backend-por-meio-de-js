import produtoModel from "../../models/ProdutoModel.js"

const listAll =  (req, res) =>{

    try{

    }   catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente'
        })
    }

    const produtos = produtoModel.getAll()

    res.json({
       sucess: 'Produtos listados com sucesso',
       produtos: produtos   
    })
}

export default listAll