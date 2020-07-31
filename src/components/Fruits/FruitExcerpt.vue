<template>
  <div v-if="data">
    <v-card class="mx-auto" max-width="400">
      <v-img class="black--text align-end" height="200px" :src="data.image">
        <v-card-title>{{data.name}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0 text-bold" :style="'color:'+data.color">{{data.price}}</v-card-subtitle>

      <!-- <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>-->

      <v-card-actions>
        <v-btn color="red" text @click="deleteFruit(data.id)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>



<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { Fruit } from '@@/types/fruit'

export default defineComponent({
  name: 'FruitExcerpt',
  props: {
    data: Object,
  },
  setup(props, ctx) {
    const deleteFruit = async (id: string) => {
      await ctx.root.$store.dispatch('fruits/deleteFruit', id)
    }
    return { deleteFruit }
  },
})
</script>
