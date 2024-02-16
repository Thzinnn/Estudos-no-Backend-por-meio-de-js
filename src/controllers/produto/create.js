const create = (req, res) =>{
    const user = req.body
    res.json({message: 'Essa é a rota POST /produto/', user })
}

export default create