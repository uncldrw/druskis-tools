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
    <div class="bg-white p-4 rounded-3xl w-full col-span-1">
      <div
        class="bg-after bg-gradient-to-bl from-cyan-500 to-blue-500 w-full rounded-xl min-h-24 p-4"
      >
        <div class="flex w-full justify-between text-xl text-white">
          <h5>Paderborn</h5>
          <Icon name="ph:cloud-sun" />
        </div>
        <div class="flex w-full justify-between text-xl text-white">
          <span class="text-5xl">25°</span>
          <div class="flex flex-col text-base text-right">
            <span>Teils Bewölkt</span>
            <span>H:27° T:18°</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@reference "../assets/css/main.postcss";
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
</style>
