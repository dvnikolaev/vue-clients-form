<template>
  <div class="input">
    <input
      type="text"
      readonly
      class="input__input input__select"
      @click="toogleOptions"
      @keydown.space="toogleOptions"
      :value="formValue"
      v-click-outside:[optionValues]="hideOptions"
    />
    <span class="input__label" :class="classLabelActive">
      {{ label }}
    </span>
    <TheOptions
      :optionValues="optionValues"
      :activeValue="activeValue"
      :activeValues="multipleActiveValues"
      :multiple="multiple"
      @update:activeValue="setActiveValue"
      @update:multipleActiveValues="pushActiveValues"
      v-if="isShowOptions"
    />
  </div>
</template>

<script>
import TheOptions from "./TheOptions";

export default {
  name: "TheSelect",
  props: {
    optionValues: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    formValue: String,
    fieldName: String,
  },
  data() {
    return {
      isShowOptions: false,
      activeValue: "",
      multipleActiveValues: [],
    };
  },
  computed: {
    classLabelActive() {
      return this.formValue ? "input__label--isUp" : "";
    },
  },
  methods: {
    toogleOptions() {
      this.isShowOptions = !this.isShowOptions;
    },
    setActiveValue(value) {
      this.$emit("change:formValue", {
        fieldName: this.fieldName,
        formValue: value,
      });
      this.isShowOptions = false;
    },
    pushActiveValues(value) {
      if (this.multipleActiveValues.includes(value)) {
        this.multipleActiveValues.splice(
          this.multipleActiveValues.indexOf(value),
          1
        );
      } else {
        this.multipleActiveValues.push(value);
      }
    },
    hideOptions() {
      this.isShowOptions = false;
    },
  },
  watch: {
    multipleActiveValues(newValue) {
      this.$emit("change:formValue", {
        fieldName: this.fieldName,
        formValue: newValue.join(","),
      });
    },
  },
  components: {
    TheOptions,
  },
};
</script>

<style lang="scss">
.input {
  &__select {
    cursor: pointer;
    font-size: 16px;
    text-align: left;
  }
  &__label--isUp {
    top: 0;
    font-size: 14px;
  }
}
</style>
