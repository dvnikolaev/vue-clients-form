<template>
  <div class="input">
    <input
      type="text"
      readonly
      class="input__input input__select"
      :value="activeValue"
      @click="toogleOptions"
      v-click-outside="hideOptions"
    />
    <span
      class="input__label"
      :class="activeValue ? 'input__label--isUp' : ''">
      {{label}}
    </span>
    <TheOptions
      :data="data"
      v-show="isShowOptions"
      @update:activeValue="setActiveValue"
    />
  </div>
</template>

<script>
import TheOptions from "./TheOptions";

export default {
  name: "TheSelect",
  props: {
    data: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isShowOptions: false,
      activeValue: "",
    };
  },
  methods: {
    toogleOptions() {
      this.isShowOptions = !this.isShowOptions;
    },
    setActiveValue(value) {
      this.activeValue = value;
      this.isShowOptions = false;
    },
    hideOptions() {
      this.isShowOptions = false;
    }
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
  }
  &__label--isUp {
    top: 0;
    font-size: 14px;
  }
}
</style>
