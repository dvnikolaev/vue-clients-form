<template>
  <div>
    <TheSelect
      :optionValues="documentTypes"
      label="Тип документа *"
      :formValue="documentType"
      fieldName="documentType"
      @change:formValue="changeFormValue"
    />
    <span 
      class="input__err"
      v-if="!$v.documentType.required && $v.documentType.$dirty">
      Данное поле необходимо заполнить
    </span>
    <TheInput
      label="Серия"
      :formValue="series"
      fieldName="series"
      @change:formValue="changeFormValue"
    />
    <TheInput
      label="Номер"
      :formValue="number"
      fieldName="number"
      @change:formValue="changeFormValue"
    />
    <TheInput
      label="Кем Выдан"
      :formValue="division"
      fieldName="division"
      @change:formValue="changeFormValue"
    />
    <TheInput
      label="Дата выдачи *"
      :formValue="issueDate"
      fieldName="issueDate"
      @change:formValue="changeFormValue"
    />
    <span 
      class="input__err"
      v-if="!$v.issueDate.required && $v.issueDate.$dirty">
      Данное поле необходимо заполнить
    </span>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

import TheInput from "../../FormElements/TheInput";
import TheSelect from "../../FormElements/Select/TheSelect";

export default {
  props: {
    documentType: String,
    series: String,
    number: String,
    division: String,
    issueDate: String
  },
  data() {
    return {
      documentTypes: [
        "Паспорт",
        "Свидетельство о рождении",
        "Вод. удостоверение",
      ],
    };
  },
  validations: {
    documentType: {
      required
    },
    issueDate: {
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
    TheInput,
    TheSelect,
  },
};
</script>
