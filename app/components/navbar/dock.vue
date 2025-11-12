<template>
  <div
    class="
      dock border-neutral h-bar pb-sb z-40
      md:hidden
    "
  >
    <button :class="{ 'dock-active': ispostspath() }">
      <NavbarPost />
    </button>

    <button :class="{ 'dock-active': isminepath() }">
      <NavbarMine />
    </button>

    <button :class="{ 'dock-active': isnotificationspath() }">
      <NavbarNotification />
    </button>
  </div>
</template>
