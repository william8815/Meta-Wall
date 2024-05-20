<script setup>
import AutoComplete from 'primevue/autocomplete'
import { ref } from 'vue'

const value = ref('')
const items = ref([])

const search = (event) => {
  items.value = [...Array(10).keys()].map((item) => event.query + '-' + item)
}
</script>

<template>
  <div>
    <div class="card flex justify-content-center">
      <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
  </div>
</template>
