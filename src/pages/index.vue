<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <List></List>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import { defineComponent, computed, onMounted } from '@vue/composition-api'
import List from '~/components/Fruits/List.vue'

export default defineComponent({
  name: 'Index',
  components: {
    List,
  },
  setup(props, ctx) {
    onMounted(async () => {
      await ctx.root.$store.dispatch('fruits/getFruitsData')
    })

    return {}
  },
})
</script>
