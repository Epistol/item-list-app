<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
      </div>
      <List></List>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import { defineComponent, computed, onMounted } from '@vue/composition-api'
import List from '~/components/Fruits/List.vue'
import Logo from '~/components/Logo.vue'

export default defineComponent({
  name: 'Index',
  components: {
    Logo,
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
