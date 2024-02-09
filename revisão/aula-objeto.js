const endereco = {
    rua: 'Rua latissimo dorso',
    numero: 0
}

const user = {
    name: 'Thiago',
    idade: '17',
    email: 'thiagoil2006@gmail.com',
    cidade: 'Caraguatatuba',
    aluno: true,
    end: endereco,
    familia: {
        mae: 'Maria',
        pai: 'Paulo',
        filha: 'Clarisse'
    },
    pets: [{nome: 'Marley', raca: 'Labrador'}, 'Gato', 'Peixe']
}

delete user.prof

user.idade = 18
user.end.rua = 'Rua dos mortos'
user.pets[0].nome = 'Mike'

console.log(user.pets[0].nome)