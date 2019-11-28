<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
@import "./assets/custom-bootstrap";
:root {
  --blue: #0078d7;
  --green: #7FBA00;
  --red: #F25022;
  --orange: #FFB900;
  --gray: #737373;
  --primary: var(--blue);
  --secondary: var(--green);
  --body-weight: 400;
  --body-color: #333;
  --body-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --header-height: 60px;
}

td {
  word-break: break-word;
  overflow-wrap: break-word;

  &:first-child {
    min-width: 200px;
  }
}
</style>
