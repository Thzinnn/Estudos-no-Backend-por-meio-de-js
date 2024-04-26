import userModel from "../../models/userModel.js"
import zodErrorFormat from "../../helpers/zodErrorFormat.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from "../../config.js"

const login = async (req, res) => {
    try{
        const {email, pass} = req.body
        const result = await userModel.validateUserToLogin({email, pass})
        if(!result.success){
            return res.status(400).json({
                error: `Dados de Atualização Inválido`,
                fields: zodErrorFormat(result.error)
            })
        }

        const userFound = await userModel.getByEmail(email)

        if(!userFound){
            return res.status(401).json({
                error: `Email ou senha inválidos`
            })
        }

        const validatePass = bcrypt.compare(pass, userFound.pass)
        if(!validatePass){
            return res.status(401).json({
                error: `Dados de Atualização Inválido`,
            })
        }

        const token = jwt.sign({ id: userFound.id, name: userFound.name}, SECRET_KEY, { expires: '3m'})

       res.json({message: "Login"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default login