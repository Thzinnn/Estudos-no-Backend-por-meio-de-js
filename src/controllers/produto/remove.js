const remove =  (req, res) =>{
    const id = req.params.id
    res.json({message: 'Essa é a rota DELETE /produto/ '+' ID ='+id})
}

export default remove