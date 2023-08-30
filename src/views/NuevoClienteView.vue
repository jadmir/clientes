<script setup>
import axios from "../lib/axios";
import { FormKit } from "@formkit/vue";
import { useRouter } from 'vue-router'
import RouterLink from "../components/Ui/RouterLink.vue";
import Heading from "../components/Ui/Heading.vue";

const router = useRouter()

defineProps({
  titulo: {
    type: String,
  },
});

const handleSubmit = (data) => {
  axios.post('/clientes', data)
    .then(respuesta => {
      console.log(respuesta)
        //Redireccionar
        router.push({ name: 'listado-clientes'})
        
    })
    .catch(error => console.log(error))
}
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="listado-clientes"> Volver </RouterLink>
    </div>
    <Heading>{{ titulo }}</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit 
          type="form"
          submit-label="Agregar Cliente"
          incomplete-message="No se puedo enviar, revisa los mensajes"
          @submit="handleSubmit"
        >
          <FormKit
            type="text"
            label="Nombre"
            name="nombre"
            placeholder="Nombre del cliente"
            validation="required"
            :validation-messages="{
              required: 'El Nombre del cliente es Obligatorio',
            }"
          />

          <FormKit
            type="text"
            label="Apellido"
            name="apellido"
            placeholder="Apellido del cliente"
            validation="required"
            :validation-messages="{
              required: 'El Apellido del cliente es Obligatorio',
            }"
          />

          <FormKit
            type="text"
            label="Email"
            name="email"
            placeholder="Email del cliente"
            validation="required|email"
            :validation-messages="{
              required: 'El Email del cliente es Obligatorio', email: 'Coloca un email valido',
            }"
          />

          <FormKit
            type="text"
            label="Telefono"
            name="telefono"
            placeholder="Telefono: xxx-xxx-xxx"
            validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/"
            :validation-messages="{
              matches: 'El formato no es valido'
            }"
          />

          <FormKit
            type="text"
            label="Empresa"
            name="empresa"
            placeholder="Empresa del cliente"
          />

          <FormKit
            type="text"
            label="Puesto"
            name="puesto"
            placeholder="Puesto del cliente"
          />

        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
