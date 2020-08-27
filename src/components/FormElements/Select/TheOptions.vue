<template>
  <div class="input-options">
    <button 
      v-for="(item, i) in data" 
      :key="i" 
      class="input-options__item"
      @click="setActiveValue(item)">
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setActiveValue(value) {
      this.$emit('update:activeValue',value)
    }
  }
};
</script>

<style lang="scss">
.input-options {
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  width: 10%;
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
      background-color: #F6F6F6;
    }
  }
}
</style>
