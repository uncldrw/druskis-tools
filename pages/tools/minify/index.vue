<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div class="mb-4">
    <h1 class="text-5xl font-bold">Minify</h1>
  </div>
  <div class="grid grid-minify gap-4">
    <div class="inline-grid grid-cols-2 gap-4">
      <div class="element">
        <textarea class="w-full h-full bg-white"></textarea>
      </div>
      <div class="element flex items-center justify-center">
        <Icon name="ph:arrow-down" class="text-5xl" />
      </div>
      <div class="element">
        <textarea class="w-full h-full bg-white"></textarea>
      </div>
    </div>
    <div>
      <aside>a</aside>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@reference "../../../assets/css/main.postcss";
.grid-minify {
  grid-template-columns: 1fr minmax(0, 400px);
}
</style>
