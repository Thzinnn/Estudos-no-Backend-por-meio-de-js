const update = (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota PUT /user/'})
}

export default update