<template>
  <div v-if="data" class="mt-6">
    <v-card class="mx-auto" max-width="400">
      <nuxt-link :to="'/fruit/'+data.id">
        <v-img class="black--text align-end" height="200px" :src="data.image"></v-img>
      </nuxt-link>

      <v-card-text>
        <h2 class="title" :style="'color:'+data.color">{{data.name}}</h2>
      </v-card-text>

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
      await ctx.root.$store.dispatch('fruit/deleteFruit', id)
    }
    return { deleteFruit }
  },
})
</script>
