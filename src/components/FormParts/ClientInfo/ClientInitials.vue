<template>
  <div>
    <TheInput
      label="Фамилия *"
      :formValue="lastName"
      fieldName="lastName"
      @change:formValue="changeFormValue"
    />
    <span 
      class="input__err"
      v-if="!$v.lastName.required && $v.lastName.$dirty">
      Данное поле необходимо заполнить
    </span>
    <TheInput
      label="Имя *"
      :formValue="firstName"
      fieldName="firstName"
      @change:formValue="changeFormValue"
    />
    <span 
      class="input__err"
      v-if="!$v.firstName.required && $v.firstName.$dirty">
      Данное поле необходимо заполнить
    </span>
    <TheInput
      label="Отчество"
      :formValue="middleName"
      fieldName="middleName"
      @change:formValue="changeFormValue"
    />
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

import TheInput from "../../FormElements/TheInput";

export default {
  props: {
    firstName: String,
    lastName: String,
    middleName: String,
  },
  data() {
    return {
      kolo: "",
    };
  },
  methods: {
    changeFormValue({ fieldName, formValue }) {
      this.$v[fieldName] ? this.$v[fieldName].$touch() : null;
      this.$emit("change:formValue", { fieldName, formValue });
    },
  },
  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
  },
  components: {
    TheInput,
  },
};
</script>

<style lang="scss">
.input__err {
  font-size: 12px;
  color: red;
  display: block;
}
</style>
