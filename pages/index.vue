<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div class="pageLayout-index pb-2 pr-2 gap-2">
    <div class="flex">
      <div class="bg-neutral-950 p-8 rounded-3xl w-full">
        <div class="text-white">
          <h3 class="font-semibold text-5xl mb-2">Willkommen, Jason!</h3>
          <p class="text-neutral-500 text-lg">
            Welche Idee kommt dir heute in den Sinn?
          </p>
        </div>
      </div>
    </div>
    <div class="bg-transparent p-8 rounded-3xl w-full col-span-3"></div>
    <div class="bg-white p-8 rounded-3xl w-full col-span-2">
      <div class="py-48"></div>
    </div>
    <div class="bg-white p-8 rounded-3xl w-full col-span-1">
      <div class="py-48"></div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@reference "../assets/css/main.postcss";
.pageLayout-index {
  @apply grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: 14rem;
  grid-auto-rows: 1fr;
}
</style>
