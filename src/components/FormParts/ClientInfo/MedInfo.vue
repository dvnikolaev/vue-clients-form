<template>
  <div>
    <TheSelect :multiple="true" :optionValues="groups" label="Группа клиентов"/>
    <TheSelect :optionValues="doctors" label="Лечащий врач"/>
    <TheCheckbox label="Не отправлять СМС" />
  </div>
</template>

<script>
import TheSelect from "../../FormElements/Select/TheSelect";
import TheCheckbox from "../../FormElements/TheCheckbox";

export default {
  data() {
    return {
      groups: ["VIP", "Проблемные", "ОМС"],
      doctors: ["Иванов", "Захаров", "Чернышева"],
    };
  },
  components: {
    TheSelect,
    TheCheckbox,
  },
};
</script>
