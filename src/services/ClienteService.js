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
    },
    actualizarCliente(id, data) {
        return api.patch('/clientes/' + id, data)
    },
    cambiarEstado(id, data) {
        return api.patch('/clientes/' + id, data)
    },
    eliminarCliente(id){
        return api.delete('/clientes/' + id)
    }
}