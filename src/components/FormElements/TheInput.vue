<template>
  <div class="input">
    <input class="input__input" required/>
    <span class="input__label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'TheInput',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.input {
  position: relative;

  &__input {
    width: 10%;
    padding: 10px 0 5px;
    background-color: transparent;
    border: none;
    border-bottom: thin solid gray;
    font-size: 14px;
    font-family: inherit;

    &:hover {
      border-color: black;
    }

    &:focus {
      border-color: mediumblue;
      outline: none;
    }
  }

  &__label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: gray;
    transition: all .2s ease;
    z-index: 1;
    pointer-events: none;
  }

  &__input:focus + &__label,
  &__input:valid + &__label {
    color: mediumblue;
    top: 0;
    font-size: 14px;
  }
}
</style>