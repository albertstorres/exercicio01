const usuarios: { nome: string, pets: string[] }[] = [
    {
        nome: "João",
        pets: ["Max"]
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"]
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"]
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsisha", "Batata"]
    },
    {
        nome: "Antonio",
        pets: ["Naninha"]
    }
];

const buscarDonoPet = (lista: { nome: string, pets: string[] }[], nomePet: string): string => {
    let usuarioEncontrado;//FAZENDO A TIPAGEM CONFERIR SE EXISTE USUARIO ENCONTRADO NÃO É PERMITIDO. QUANDO NÃO ENCONTRAR USUÁRIO PASSAMOS UM OBJETO VAZIO. 

    for (const usuario of lista) {
        if (usuario.pets.includes(nomePet)) {
            usuarioEncontrado = usuario;
        }
    }

    if (usuarioEncontrado) {
        return `O dono(a) do(a) ${nomePet} é ${usuarioEncontrado.nome}`;
    } else {
        return `Que pena ${nomePet}, não encontramos seu dono(a).`;
    }

}

console.log(buscarDonoPet(usuarios, "Lulu"));