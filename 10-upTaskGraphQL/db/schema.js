// Aca se definen los typedefinitios, de esta forma se da estructura a los datos que va a mostrar el cliente
// los typedefinitios son tipos de datos en los que se define su tipo (String)
// el unico que es obligatorio es type Query y va a contener las funciones que tambien deben estar en los resolvers
// los querys son las funciones que se encargan de consultar la DB
// ** type Curso { titulo: String }     <-- Pide el titulo de tipo string que se encuentra en los cursos
// ** type Query { obtenerCursos: [Curso] }    <-- retorna muchos cursos gracias a la sintaxis de array, si lo quisiera un curso
// necesitaria usar un filter en la funcion de los resolvers -->        obtenerCursos: () => cursos
// ** Cuando defino dentro Query --> obtenerCursos: [Curso] ó obtenerTecnologia: [Tecnologia] 
// debo definir arriba type Curso{} y type Tecnologia{} especificando el tipo de dato que debe retornar


const { gql } = require('apollo-server');


const typeDefs = gql`

    type Curso {
        titulo: String
    }

    type Tecnologia {
        tecnologia: String
    }

    type Query {
        obtenerCursos: [Curso]

        obtenerTecnologia: [Tecnologia]
    }

`;

module.exports = typeDefs;