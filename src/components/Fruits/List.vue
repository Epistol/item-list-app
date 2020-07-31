<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <template v-for="fruit in fruits">
            <FruitExcerpt :data="fruit" :key="fruit.title" />
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { Fruit } from '@@/types/fruit'
import FruitExcerpt from '~/components/Fruits/FruitExcerpt.vue'

export default defineComponent({
  name: 'List',
  components: {
    FruitExcerpt,
  },
  setup(props, ctx) {
    const fruits = computed<Fruit[]>(
      () => ctx.root.$store.getters['fruits/data']
    )

    return {
      fruits,
    }
  },
})
</script>
