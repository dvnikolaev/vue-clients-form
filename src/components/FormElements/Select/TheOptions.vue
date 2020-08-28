<template>
  <div class="select-options">
    <button
      v-for="(item, i) in optionValues"
      :key="i"
      class="select-options__item"
      :class="classActiveValue(item)"
      @click="setActiveValue(item)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    optionValues: {
      type: Array,
      required: true,
    },
    activeValue: String,
    activeValues: Array,
    multiple: Boolean
  },
  methods: {
    setActiveValue(item) {
      if (!this.multiple) {
        this.$emit("update:activeValue", item);
      } else {
        this.$emit("update:multipleActiveValues", item);
      }
      
    },
    classActiveValue(item) {
      if (!this.multiple) {
        return this.activeValue === item ? 'select-options__item--active' : '';
      } else {
        return this.activeValues.includes(item) ? "select-options__item--active" : "";
      }
      
    }
  },
};
</script>

<style lang="scss">
.select-options {
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 1;

  &__item {
    padding: 10px;
    background-color: white;
    border: none;
    outline: none;
    text-align: left;
    font-size: 16px;
    font-family: inherit;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #f6f6f6;
    }

    &--active {
      color: #1867c0;
      background-color: #e4edf8;

      &:hover,
      &:focus {
        color: #1867c0;
        background-color: #e4edf8;
      }
    }
  }
}
</style>
