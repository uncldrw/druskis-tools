<script setup>
import jsonMenu from "@/content/header/menu.json";
</script>

<template>
  <aside class="appSidebar h-full min-w-28 bg-muted-200">
    <div class="appSidebar-wrapper">
      <div class="appSidebar-container mt-[14rem]">
        <ul>
          <template v-for="menuItem in jsonMenu">
            <li class="aspect-square flex w-20 h-auto mx-auto">
              <span class="p-2 size-full">
                <span
                  class="size-full bg-muted-400 grid place-content-center rounded-full"
                >
                  <Icon :name="menuItem.icon" class="size-5 text-muted-50" />
                </span>
              </span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </aside>
</template>
