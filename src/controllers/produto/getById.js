const getById = (req, res) =>{
    const id = req.params.id
    res.json({message: 'Essa é a rota GET /produto/ '+' ID ='+id})
}

export default getById