import api from "../lib/axios"


export default {
    obtenerCliente() {
        return api.get('/clientes')
    },
    agregarCliente(data) {
        return api.post('/clientes', data)
    },
    obtenerClientes(id){
        return api.get('/clientes/' + id)
    }
}