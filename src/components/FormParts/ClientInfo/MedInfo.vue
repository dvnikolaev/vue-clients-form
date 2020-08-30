<template>
  <div>
    <TheSelect
      :multiple="true"
      :optionValues="localGroups"
      label="Группа клиентов *"
      :formValue="groups"
      fieldName="groups"
      @change:formValue="changeFormValue"
    />
    <span 
      class="input__err"
      v-if="!$v.groups.required && $v.groups.$dirty">
      Данное поле необходимо заполнить
    </span>
    <TheSelect
      :optionValues="doctors"
      :formValue="doctor"
      fieldName="doctor"
      label="Лечащий врач"
      @change:formValue="changeFormValue"
    />
    <TheCheckbox
      label="Не отправлять СМС"
      :formValue="isSendSMS"
      fieldName="isSendSMS"
      @change:formValue="changeFormValue"
    />
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

import TheSelect from "../../FormElements/Select/TheSelect";
import TheCheckbox from "../../FormElements/TheCheckbox";

export default {
  props: {
    groups: String,
    doctor: String,
    isSendSMS: Boolean,
  },
  data() {
    return {
      localGroups: ["VIP", "Проблемные", "ОМС"],
      doctors: ["Иванов", "Захаров", "Чернышева"],
    };
  },
  validations: {
    groups: {
      required
    }
  },
  methods: {
    changeFormValue({ fieldName, formValue }) {
      this.$v[fieldName] ? this.$v[fieldName].$touch() : null;
      this.$emit("change:formValue", { fieldName, formValue });
    },
  },
  components: {
    TheSelect,
    TheCheckbox,
  },
};
</script>
