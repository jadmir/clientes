<script setup>
  import { onUnmounted, ref } from 'vue'
  import axios from 'axios';  
  import RouterLink from '../components/Ui/RouterLink.vue'
  import Heading from '../components/Ui/Heading.vue'

  const clientes = ref([])

  onUnmounted(() => {
    axios.get('http://localhost:4000/clientes')
      .then(({data}) => {
        clientes.value = data
        console.log(data)
      })
      .catch(error => console.log('Hubo un error'))
  })

  defineProps({
    titulo: {
      type: String
    }
  })
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="agregar-cliente">
        Agregar Cliente
      </RouterLink>
    </div>
    <Heading>{{titulo}}</Heading>
  </div>
</template>