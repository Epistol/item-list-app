<template>
  <div class="w-full">
    <FruitArticle />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from '@vue/composition-api'
import FruitArticle from '~/components/Fruits/FruitArticle.vue'
export default defineComponent({
  name: 'PageFruit',
  components: {
    FruitArticle,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx) {
    onMounted(async () => {})

    const slug = ctx.root.$route.params?.id

    onMounted(async () => {
      await ctx.root.$store.dispatch('fruits/getFruitData', slug)
    })

    return { slug }
  },
})
</script>
