<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width="400">
      <v-img :src="fruit.image" class="primary--text align-end" height="200px">
        <v-card-title>{{fruit.name}}</v-card-title>
      </v-img>
      <v-card-text class="text--primary">
        <span>{{fruit.description}}</span>
        <br />
        <br />
        <span>{{fruit.price}} € (/kg)</span>
        <br />

        <span>Goût : {{fruit.taste}}</span>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { Fruit } from '~~/types/fruit'

export default defineComponent({
  name: 'ViewFruit',
  setup(props, ctx) {
    const fruit = computed<Fruit>(
      () => ctx.root.$store.getters['fruits/fruitData']
    )

    return { fruit }
  },
})
</script>
