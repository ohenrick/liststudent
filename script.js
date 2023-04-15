const students = [
    {
        name: "Henrique",
        n1: "6",
        n2: "6",
    },
    {
        name: "João",
        n1: "2",
        n2: "6",
    },
    {
        name: "Vanessa",
        n1: "7",
        n2: "5",
    },
    {
        name: "Thais",
        n1: "5",
        n2: "7",
    },
    {
        name: "Rafael",
        n1: "4",
        n2: "4",
    },
]


function printConcursoResult(student) {
    let average = Number(`${student.n1}`) + Number(`${student.n2}`) / 2

    let result = average > 7
    
    average = average.toFixed(1)
    
    if(result) {
        alert(`
    A média do(a) aluno(a) ${student.name} é: ${average} \n Parabéns ${student.name}, você foi aprovado(a) no concurso!
    `)
    } else {
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${average} \n ${student.name}, você foi reprovado(a). Tente novamente!
    `)
    } 
}

printConcursoResult(students[0])
printConcursoResult(students[1])
printConcursoResult(students[2])
printConcursoResult(students[3])
printConcursoResult(students[4])