<template>
  <div class="form__wrapper">
    <form @submit.prevent="">
      <TheInput :label="'Имя'" />
    </form>
  </div>
</template>

<script>
import TheInput from './TheInput';

export default {
  name: 'TheForm',
  components: {
    TheInput
  }
}
</script>