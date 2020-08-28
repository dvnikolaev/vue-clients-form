<template>
  <div>
    <div>
      <TheInput label="Дата рождения *" />
      <TheInput label="Номер телефона *" />
    </div>
    <TheSelect label="Пол" :optionValues="optionValues"/>
  </div>
</template>

<script>
import TheInput from "../../FormElements/TheInput";
import TheSelect from "../../FormElements/Select/TheSelect";

export default {
  data() {
    return {
      optionValues: [
        "М",
        "Ж"
      ]
    }
  },
  components: {
    TheInput,
    TheSelect
  },
};
</script>
