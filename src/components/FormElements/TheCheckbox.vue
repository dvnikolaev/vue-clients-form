<template>
  <label class="checkbox">
    <input type="checkbox" v-model="cbValue" />
    <span class="checkbox__label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  props: {
    label: String,
    fieldName: String,
    formValue: Boolean,
  },
  computed: {
    cbValue: {
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
  methods: {
    changeFormValue() {
      this.$emit("change:formValue", {
        fieldName: this.fieldName,
        formVaue: e.target.value,
      });
    },
  },
};
</script>

<style lang="scss">
.checkbox {
  display: flex;
  margin-top: 15px;

  &__label {
    margin-left: 5px;
    font-size: 16px;
    align-self: center;
  }
}
</style>
