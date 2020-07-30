<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="fruit in fruits" :key="fruit.title" :cols="fruit.flex">
        <v-card>
          <v-img
            :src="fruit.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="fruit.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { Fruit } from '@@/types/fruit'

export default defineComponent({
  name: 'List',
  setup(props, ctx) {
    const fruits = computed<Fruit[]>(
      () => ctx.root.$store.getters['fruits/data']
    )
    console.log('setup -> fruits', fruits)

    return {
      fruits,
    }
  },
})
</script>
