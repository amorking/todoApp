<template>
  <div class="home">
    <CoreView></CoreView>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    CoreView: () => import('@/components/core/CoreView.vue'),
  },
};
</script>
