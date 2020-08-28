<template>
  <div class="page__buttons">
    <button
      class="button button--back"
      @click="toPrevPage"
      v-if="activePage > 1"
    >
      Назад
    </button>
    <button
      class="button button--next"
      @click="toNextPage"
      v-if="activePage < 6"
    >
      Далее
    </button>
  </div>
</template>

<script>
export default {
  props: {
    activePage: Number,
  },
  methods: {
    toPrevPage() {
      this.$emit("change:toPrevPage");
    },
    toNextPage() {
      this.$emit("change:toNextPage");
    },
  },
};
</script>

<style lang="scss">
.page__buttons {
  display: flex;
  margin-top: auto;
}
.button {
  padding: 10px 15px;
  font-family: inherit;
  font-weight: bold;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;

  &--back {
    background-color: #ff4b2b;

    &:hover,
    &:focus {
      background-color: #da4126;
    }

    &:active {
      background-color: #fd5537;
    }
  }

  &--next {
    background-color: #4286f4;
    margin-left: auto;

    &:hover,
    &:focus {
      background-color: #3b78da;
    }

    &:active {
      background-color: #5692f3;
    }
  }
}
</style>
