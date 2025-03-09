<template>
  <div
    class="grid place-content-center h-screen gap-2 bg-gradient-to-br from-indigo-950 to-indigo-900"
  >
    <div>
      <div
        class="bg-stone-900 border-stone-800 border w-full rounded-xl h-full shadow-2xl"
      >
        <div class="p-8 grid gap-4">
          <div class="text-center mb-4">
            <h1 class="text-2xl font-semibold">Wilkommen Zurück!</h1>
            <p class="text-sm text-neutral-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="grid gap-4">
            <button class="social-button">
              <Icon name="devicon:google" /> Anmelden mit Apple ID
            </button>
            <button class="social-button">
              <Icon name="file-icons:apple" /> Anmelden mit Google
            </button>
          </div>
          <div class="seperator flex items-center">
            <span>Oder</span>
          </div>
          <div class="grid gap-4">
            <div>
              <label class="flex gap-1 flex-col text-sm">
                <p class="text-xs">E-Mail</p>
                <Input class="ring-offset-neutral-800"></Input
              ></label>
            </div>
            <div>
              <label class="flex gap-1 flex-col text-sm">
                <p class="text-xs">Passwort</p>
                <Input class="ring-offset-neutral-800"></Input
              ></label>
            </div>
            <div class="w-full mt-4">
              <AppButton class="w-full !bg-indigo-400 !border-indigo-400"
                >Anmelden</AppButton
              >
            </div>
            <div>
              <button class="text-sm text-center w-full cursor-pointer">
                Registrieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
@reference "../assets/css/main.postcss";
.social-button {
  @apply px-4 py-2.5  bg-stone-800 border-stone-700 rounded border w-full h-10 inline-flex items-center justify-center gap-1.5 cursor-pointer text-[13px];
  svg {
    @apply size-3.5;
  }
  &:hover {
    @apply border-stone-500;
  }
}

.seperator {
  @apply flex justify-center relative;
  &:after {
    content: "";
    @apply h-[1px] top-1/2 transform -translate-y-1/2 absolute left-0 right-0 bg-stone-800;
  }
  span {
    @apply bg-stone-900 z-10 px-2 text-sm text-stone-300;
  }
}
</style>
