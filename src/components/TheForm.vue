<template>
  <div class="form__wrapper">
    <form @submit.prevent="">
      <!-- <TheInput :label="'Имя'" /> -->
      <TheSelect :optionValues="gender" label="Пол" :multiple="true"/>
    </form>
  </div>
</template>

<script>
import TheInput from './FormElements/TheInput';
import TheSelect from './FormElements/Select/TheSelect';

export default {
  name: 'TheForm',
  data() {
    return {
      gender: [
        'М',
        'Ж'
      ]
    }
  },
  components: {
    TheInput,
    TheSelect
  }
}
</script>

<style lang="scss">
  .form__wrapper {
    background-color: white;
    border-radius: 10px;
    height: 300px;
    width: 300px;
    padding: 10px;
  }
</style>