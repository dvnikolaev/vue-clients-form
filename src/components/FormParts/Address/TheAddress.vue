<template>
  <div>
    <TheInput
      label="Индекс"
      :formValue="index"
      fieldName="index"
      @change:formValue="changeFormValue"
    />
    <TheInput
      label="Страна"
      :formValue="country"
      fieldName="country"
      @change:formValue="changeFormValue"
    />
    <TheInput
      label="Область"
      :formValue="region"
      fieldName="region"
      @change:formValue="changeFormValue"
    />
    <TheInput
      label="Город *"
      :formValue="city"
      fieldName="city"
      @change:formValue="changeFormValue"
    />
    <span class="input__err" v-if="!$v.city.required && $v.city.$dirty">
      Данное поле необходимо заполнить
    </span>
    <TheInput
      label="Улица"
      :formValue="street"
      fieldName="street"
      @change:formValue="changeFormValue"
    />
    <TheInput
      label="Дом"
      :formValue="home"
      fieldName="home"
      @change:formValue="changeFormValue"
    />
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

import TheInput from "../../FormElements/TheInput";

export default {
  props: {
    index: String,
    country: String,
    region: String,
    city: String,
    street: String,
    home: String,
  },
  validations: {
    city: {
      required,
    },
  },
  methods: {
    changeFormValue({ fieldName, formValue }) {
      this.$v[fieldName] ? this.$v[fieldName].$touch() : null;
      this.$emit("change:formValue", { fieldName, formValue });
    },
  },
  components: {
    TheInput,
  },
};
</script>
