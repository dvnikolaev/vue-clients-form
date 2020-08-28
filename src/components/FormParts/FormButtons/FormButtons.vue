<template>
  <div class="page__buttons">
    <button class="button button--back">Назад</button>
    <button class="button button--next">Далее</button>
  </div>
</template>

<style lang="scss">
  .page__buttons {
    display: flex;
    justify-content: space-between;
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
      background-color: #FF4B2B;

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