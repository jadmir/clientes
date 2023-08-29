<script setup>
  import { onUnmounted } from 'vue'
  import axios from 'axios';  
  import RouterLink from '../components/Ui/RouterLink.vue'
  import Heading from '../components/Ui/Heading.vue'

  onUnmounted(() => {
    axios.get('http://localhost:4000/clientes')
      .then(({data}) => {
        console.log(data)
      })
      .catch(error => console.log('Hubo un errro'))
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