<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div class="pageLayout-index pb-2 pr-2 gap-2">
    <div class="flex">
      <h3 class="font-font text-7xl mb-2 flex">Tools</h3>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@reference "../../assets/css/main.postcss";
.bg-after {
  position: relative;
  z-index: 10;
}
.bg-after:after {
  @apply absolute top-0 left-0 -z-10 bg-gradient-to-bl from-cyan-500 to-blue-500 rounded-xl;
  width: 100%;
  height: 100%;
  content: "";
}

.bg-after:before {
  @apply absolute top-1/2 left-1/2 -z-20 transform -translate-x-1/2 -translate-y-1/2 rounded-[14px] bg-gradient-to-t from-cyan-600 to-blue-300;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  content: "";
}

.pageLayout-index {
  @apply grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: 14rem;
  grid-auto-rows: 1fr;
}

.bg-clock {
  background-image: url("https://images.unsplash.com/photo-1479030160180-b1860951d696?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  @apply bg-cover;
}
</style>
