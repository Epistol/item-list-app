<template>
  <div class="w-full">
    <ViewFruit />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from '@vue/composition-api'
import ViewFruit from '~/components/Fruits/ViewFruit.vue'
export default defineComponent({
  name: 'PageFruit',
  components: {
    ViewFruit,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx) {
    onMounted(async () => {})

    const slug = ctx.root.$route.params?.id

    onMounted(async () => {
      await ctx.root.$store.dispatch('fruit/getFruitData', slug)
    })

    return { slug }
  },
})
</script>
