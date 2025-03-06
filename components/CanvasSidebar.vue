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
  <aside class="w-20 h-full">
    <div class="border p-3 bg-stone-800 border-stone-600/40 h-full rounded-lg">
      <div class="py-0">
        <ul class="grid gap-2">
          <template v-for="item in items">
            <li class="inline-flex aspect-square w-full">
              <button
                class="rounded-md hover:bg-stone-700/40 w-full inline-grid place-content-center cursor-pointer"
              >
                <Icon class="size-6 text-stone-50" :name="item.icon" />
              </button>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </aside>
</template>
