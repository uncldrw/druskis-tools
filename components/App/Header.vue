<template>
  <header class="appHeader w-full bg-stone-200 min-h-22 max-h-22">
    <div class="appHeader-wrapper h-full">
      <div class="appHeader-container relative h-full">
        <div class="appHeader-logo">
          <span class="size-full flex p-2">
            <span
              class="h-full w-auto bg-indigo-400 rounded-full grid place-content-center aspect-square mx-auto"
            >
              <Icon
                name="ph:rocket-launch-fill"
                class="size-9 text-indigo-700"
              />
            </span>
          </span>
        </div>
        <div class="w-full flex justify-center items-center h-full">
          <AppSearchbar />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
@reference "../../assets/css/main.postcss";
.appHeader-logo {
  @apply flex aspect-square h-full  absolute top-0 left-0 w-28;
}
</style>
