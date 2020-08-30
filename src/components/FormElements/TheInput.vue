<template>
  <div class="input">
    <input class="input__input" required v-model.trim="inputValue" />
    <span class="input__label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "TheInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    formValue: String,
    fieldName: String,
  },
  computed: {
    inputValue: {
      get() {
        return this.formValue;
      },
      set(value) {
        this.$emit("change:formValue", {
          fieldName: this.fieldName,
          formValue: value,
        });
      },
    },
  },
};
</script>

<style lang="scss">
.input {
  position: relative;
  margin: 20px 0;

  &__input {
    width: 100%;
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
    transition: all 0.2s ease;
    pointer-events: none;
  }

  &__input:focus + &__label {
    color: mediumblue;
    top: 0;
    font-size: 14px;
  }
  &__input:valid + &__label {
    top: 0;
    font-size: 14px;
  }
}
</style>
