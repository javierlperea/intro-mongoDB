// Los resolvers son funciones responsables de retornar los valores de mi schema(typeDefs)
// lo que tenga dentro de los typeDefs tengo que tenerlo dentro de los resolvers

// Este es un arreglo con cursos que simula informacion de una DB
cursos = [
    {
        titulo: 'JavaScript moderno guia definitiva construye +10 proyectos',
        tecnologia: 'JavaScript ES6'
    },
    {
        titulo: 'React - La guia completa: Hooks, Context, Redux, MERN, +15 Apps',
        tecnologia: 'React'
    },
    {
        titulo: 'Node.js - Bootcamp Desarrollo Web inc. MVC y REST Api´s',
        tecnologia: 'Node.js'
    },
    {
        titulo: 'React.js Avanzados - FullStack React GraphQL y Apollo',
        tecnologia: 'React'
    }
];


const resolvers = {
    Query: {
        // Arrow function que da por implicito el return de los cursos del array
        obtenerCursos: () => cursos,

        obtenerTecnologia: () => cursos
    }
}

module.exports = resolvers;