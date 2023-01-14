<template>
  <v-app>
    <v-main>
      <v-img contain alt="Vue logo" src="./assets/logo.png" max-height="150" max-width="250"/>
      <a href="/home">Home</a> |
      <a href="/about">About</a> |
      <a href="/non-existent-path">Broken Link</a>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>
