<script setup>
const items = ref([
  { title: "Home", icon: "mingcute:home-2-line", to: "/" },
  { title: "Stats", icon: "mingcute:chart-bar-2-line", to: "/about" },
  { title: "Library", icon: "mingcute:rows-2-line", to: "/" },
  { title: "Share", icon: "mingcute:share-forward-line", to: "/contact" },
  { title: "Communiny", icon: "mingcute:group-2-line", to: "/about" },
  { title: "Files", icon: "mingcute:file-line", to: "/contact" },
  { title: "Settings", icon: "mingcute:settings-5-line", to: "/contact" },
]);
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__container">
      <div class="sidebar__content">
        <ul class="sidebar__list">
          <template v-for="item in items">
            <li class="sidebar__item">
              <button class="sidebar__button">
                <Icon class="sidebar__icon" :name="item.icon" />
              </button>
              <span class="sidebar__item-flyout">
                {{ item.title }}
              </span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style lang="postcss">
@reference "../assets/css/main.postcss";
.sidebar {
  @apply w-14 h-full;
}

.sidebar__container {
  @apply border p-2 bg-stone-800 border-stone-600/40 h-full rounded-lg;
}

.sidebar__content {
  @apply py-0;
}

.sidebar__list {
  @apply grid gap-2;
}

.sidebar__item {
  @apply inline-flex aspect-square w-full relative;
}

.sidebar__button {
  @apply rounded-md w-full inline-grid place-content-center cursor-pointer  transition-all duration-100;
  &:hover {
    @apply bg-stone-700/40;
    .sidebar__icon {
      @apply scale-115 text-stone-100;
    }
  }
}

.sidebar__icon {
  @apply size-5 text-stone-400 transition-transform duration-100;
}

.sidebar__item-flyout {
  @apply bg-indigo-600 text-white absolute top-1/2 left-[calc(100%+0.5rem+5px)] -translate-y-1/2 px-2 py-1 rounded-md text-sm font-medium  transition-all duration-300 opacity-0;
  /* transform-origin: left; */
}

.sidebar__item:hover .sidebar__item-flyout {
  @apply opacity-100 delay-200 duration-75;
}
</style>
