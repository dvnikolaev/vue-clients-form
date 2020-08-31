<template>
  <div class="complete">
    <div class="complete__circle"></div>
    <h2 class="complete__header">Регистрация прошла успешно!</h2>
  </div>
</template>

<style lang="scss">
.complete {
  margin: 0 auto;

  &__circle {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: rgb(38, 228, 70);
    border-radius: 50%;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      border-bottom: 10px solid white;
      border-right: 10px solid white;
      width: 15px;
      height: 40px;
    }
  }

  &__header {
    text-align: center;
    margin-top: 45px;
  }
}
</style>
