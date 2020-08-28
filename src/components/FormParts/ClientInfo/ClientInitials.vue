<template>
  <div>
    <div>
      <TheInput label="Фамилия *" />
      <TheInput label="Имя *" />
    </div>
    <TheInput label="Отчество" />
  </div>
</template>

<script>
import TheInput from "../../FormElements/TheInput";

export default {
  components: {
    TheInput,
  },
};
</script>