<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <AddFruit></AddFruit>
          <div v-if="fruits" data-test="list-items">
            <template v-for="fruit in fruits">
              <FruitExcerpt :data="fruit" :key="fruit.title" />
            </template>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { Fruit } from '@@/types/fruit'
import FruitExcerpt from '~/components/Fruits/FruitExcerpt.vue'
import AddFruit from '~/components/Fruits/Create.vue'

export default defineComponent({
  name: 'List',
  components: {
    FruitExcerpt,
    AddFruit,
  },
  setup(props, ctx) {
    const fruits = computed<Fruit[]>(
      () => ctx.root.$store.getters['fruit/data']
    )

    return {
      fruits,
    }
  },
})
</script>
