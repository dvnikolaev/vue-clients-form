<template>
  <label class="checkbox">
    <input type="checkbox" />
    <span class="checkbox__label">{{label}}</span>
  </label>
</template>

<script>
export default {
  props: {
    label: String
  }
}
</script>

<style lang="scss">
  .checkbox {
    display: flex;

    &__label {
      margin-left: 5px;
      font-size: 16px;
      align-self: center;
    }
  }
</style>