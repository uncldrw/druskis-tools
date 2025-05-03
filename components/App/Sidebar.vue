<script setup>
import jsonMenu from "@/content/header/menu.json";
</script>

<template>
  <aside class="appSidebar h-full min-w-28 bg-stone-200">
    <div class="appSidebar-wrapper">
      <div class="appSidebar-container mt-[14rem]">
        <ul>
          <template v-for="menuItem in jsonMenu">
            <li class="aspect-square flex w-20 h-auto mx-auto">
              <span class="p-2 size-full">
                <NuxtLink :to="menuItem.href" class="buttonA">
                  <Icon
                    :name="menuItem.icon"
                    class="size-5 text-muted-50 z-10"
                  />
                </NuxtLink>
              </span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style lang="postcss" scoped>
@reference "../../assets/css/main.postcss";
.buttonA {
  @apply size-full  grid place-content-center relative cursor-pointer;
  &:after {
    @apply rounded-full bg-neutral-400 size-full top-0 left-0 absolute;
    content: "";
    transition: all 0.1s ease-in-out;
  }
  &:hover:after {
    @apply bg-neutral-500;
  }
}
</style>
