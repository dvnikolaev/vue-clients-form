<template>
  <TheForm />
</template>

<script>
import TheForm from './components/TheForm';

export default {
  name: 'App',
  components: {
    TheForm
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.page__body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E0EAFC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  margin: 0;
}
</style>
