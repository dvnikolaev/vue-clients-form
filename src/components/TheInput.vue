<template>
  <div class="input">
    <input class="input__input"/>
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
    padding: 10px;
    position: relative;
    background-color: transparent;
    border-bottom: 2px solid gray;
    z-index: 0;

    &:focus {
      border-color: rgb(152, 152, 153);
      opacity: .99;
      outline: none;
    }
  }

  &__label {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%) scale(.9);
    color: gray;
    transition: all .2s ease;
    z-index: 1;
    pointer-events: none;
  }

  &__input:focus + &__label {
    color: blue;
    top: 0;
    left: 5px;
    transform: translateY(-50%) scale(1);
  }
}
</style>