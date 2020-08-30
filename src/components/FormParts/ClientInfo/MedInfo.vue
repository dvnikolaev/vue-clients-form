<template>
  <div>
    <TheSelect
      :multiple="true"
      :optionValues="localGroups"
      label="Группа клиентов"
      :formValue="groups"
      fieldName="groups"
      @change:formValue="changeFormValue"
    />
    <TheSelect :optionValues="doctors" label="Лечащий врач" />
    <TheCheckbox label="Не отправлять СМС" />
  </div>
</template>

<script>
import TheSelect from "../../FormElements/Select/TheSelect";
import TheCheckbox from "../../FormElements/TheCheckbox";

export default {
  props: {
    groups: "",
    doctor: "",
  },
  data() {
    return {
      localGroups: ["VIP", "Проблемные", "ОМС"],
      doctors: ["Иванов", "Захаров", "Чернышева"],
    };
  },
  methods: {
    changeFormValue({ fieldName, formValue }) {
      this.$emit("change:formValue", { fieldName, formValue });
    }
  },
  components: {
    TheSelect,
    TheCheckbox,
  },
};
</script>
