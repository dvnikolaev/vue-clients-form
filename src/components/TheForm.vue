<template>
  <div class="form__wrapper">
    <form @submit.prevent="">
      <!-- <TheInput :label="'Имя'" /> -->
      <TheSelect :data="gender" label="Пол"/>
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