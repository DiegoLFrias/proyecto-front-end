import React from "react";
import './tabla.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Button, Container, Modal, ModalBody, ModalHeader, Formgroup, ModalFooter} from 'reactstrap';
const Aprobada = 0
const Firmada = 1
const NoCursada = 2
const plan =[
    {id: 1, nombre: "Sistemas y Organizaciones", nivel: 1 , estado: 0,correlativas:[[],[]]},
    {id: 2, nombre: "Algoritmos y Estructura de Datos", nivel: 1 , estado: 0, correlativas:[[],[]]},
    {id: 3, nombre: "Álgebra y Geometría Analítica", nivel: 1 , estado: 0, correlativas:[[],[]]},
    {id: 4, nombre: "Análisis Matemático I", nivel: 1 , estado: 0, correlativas:[[],[]]},
    {id: 5, nombre: "Matemática Discreta", nivel: 1 , estado: 1, correlativas:[[],[]]},
    {id: 6, nombre: "Química", nivel: 1 ,estado: 2, correlativas:[[],[]]},
    {id: 7, nombre: "Arquitectura de Computadores", nivel: 1 , estado: 2, correlativas:[[],[]]},
    {id: 8, nombre: "Ingeniería y Sociedad", nivel: 1 , estado: 2, correlativas:[[],[]]},
    {id: 9, nombre: "Análisis de Sistemas", nivel: 2 , estado: 1, correlativas:[[],[1,2]]},
    {id: 10, nombre: "Sintaxis y Semántica de los Lenguajes", nivel: 2 , estado: 0, correlativas:[[],[2,5]]},
    {id: 11, nombre: "Paradigmas de Programación", nivel: 2 , estado: 0, correlativas:[[],[2,5]]},
    {id: 12, nombre: "Probabilidad y Estadística", nivel: 2 , estado:0, correlativas:[[],[3,4]]},
    {id: 13, nombre: "Sistemas de Representación", nivel: 2 , estado: 0, correlativas:[[],[]]},
    {id: 14, nombre: "Inglés Técnico Nivel I", nivel: 2 , estado: 0, correlativas:[[],[]]}, 
    {id: 15, nombre: "Física I", nivel: 2 , estado: 2, correlativas:[[],[]]},
    {id: 16, nombre: "Análisis Matemático II", nivel: 2 , estado: 0, correlativas:[[],[3,4]]},
    {id: 17, nombre: "Diseño de Sistemas", nivel: 3 , estado: 2, correlativas:[[],[2,5]]},
    {id: 18, nombre: "Inglés Técnico Nivel II", nivel: 3 , estado: 0, correlativas:[[],[2,5]]},
    {id: 19, nombre: "Sistemas Operativos", nivel: 3 , estado: 2, correlativas:[[],[2,5]]},
    {id: 20, nombre: "Gestión de Datos", nivel: 3 , estado: 2, correlativas:[[],[2,5]]},
    {id: 21, nombre: "Matemática Superior", nivel: 3 , estado: 2, correlativas:[[],[2,5]]},
    {id: 22, nombre: "Economía", nivel: 3 , estado: 2, correlativas:[[],[2,5]]},
    {id: 23, nombre: "Física II", nivel: 3 , estado: 2, correlativas:[[],[2,5]]},
    {id: 24, nombre: "Comunicaciones", nivel: 4 , estado: 2, correlativas:[[],[2,5]]},
    {id: 25, nombre: "Redes de Información", nivel: 4 , estado: 2, correlativas:[[],[2,5]]},
    {id: 26, nombre: "Administración de Recursos", nivel: 4 , estado: 2, correlativas:[[],[2,5]]},
    {id: 27, nombre: "Investigación Operativa", nivel: 4 , estado: 2, correlativas:[[],[2,5]]},
    {id: 28, nombre: "Teoría de Control", nivel: 4 , estado: 2, correlativas:[[],[2,5]]},
    {id: 29, nombre: "Ingeniería en Software", nivel: 4 , estado: 2, correlativas:[[],[2,5]]},
    {id: 30, nombre: "Simulación", nivel: 4 , estado: 2, correlativas:[[],[2,5]]},
    {id: 31, nombre: "Legislación", nivel: 4 , estado: 2, correlativas:[[],[2,5]]},
    {id: 32, nombre: "Sistemas de Gestión", nivel: 5 , estado: 2, correlativas:[[],[2,5]]},
    {id: 33, nombre: "Proyecto Final", nivel: 5 , estado: 2, correlativas:[[],[2,5]]},
    {id: 34, nombre: "Administración Gerencial", nivel: 5 , estado: 2, correlativas:[[],[2,5]]},
    {id: 35, nombre: "Inteligencia Artificial", nivel: 5 , estado: 2, correlativas:[[],[2,5]]}  
]

React.state={
    plan: plan
}
function MostrarMaterias(i){

    return (
        <td>
        {plan.filter(materia=> materia.nivel==i).map(materiaFiltrada => (
          <div>
            {materiaFiltrada.nombre}
          </div>
        ))}
      </td>
    );
  }


const Tabla =() =>{
    return(
    <>
    <Container>
        <Table>
            <tbody>
                <tr>
                    <th>Nivel 1</th>
                    <th>Nivel 2</th>
                    <th>Nivel 3</th>
                    <th>Nivel 4</th>
                    <th>Nivel 5</th>
                </tr>
                {MostrarMaterias(1)}
                {MostrarMaterias(2)}
                {MostrarMaterias(3)}
                {MostrarMaterias(4)}
                {MostrarMaterias(5)}
            </tbody>
                
            
        </Table>
    </Container> 
    </>
    )
}

export default Tabla;