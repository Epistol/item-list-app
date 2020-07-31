<template>
  <v-container fluid>
    <v-img :src="fruit.image" class="white--text align-end" height="200px" width="200px" />
    <h1>{{fruit.name}}</h1>
    <span>{{fruit.description}}</span>
    <br />
    <br />
    <span>{{fruit.price}}</span>
    <span>{{fruit.taste}}</span>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { Fruit } from '~~/types/fruit'

export default defineComponent({
  name: 'FruitArticle',
  setup(props, ctx) {
    const fruit = computed<Fruit>(
      () => ctx.root.$store.getters['fruits/fruitData']
    )

    return { fruit }
  },
})
</script>
