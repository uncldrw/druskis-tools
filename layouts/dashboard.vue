<template>
  <div class="dashboardLayout-wrapper max-w-screen max-h-screen">
    <AppHeader />
    <div class="dashboardLayout-content flex w-full">
      <AppSidebar />
      <main class="w-full h-full overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped lang="postcss">
@reference "../assets/css/main.postcss";

main {
  @apply bg-muted-200;
}

.dashboardLayout-content {
  overflow: auto;
}

.dashboardLayout-wrapper {
  display: grid;
  grid-template-rows: minmax(0, auto) 1fr;
  height: 100vh;
  overflow: hidden;
}
</style>
