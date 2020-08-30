<template>
  <div>
    <div>
      <TheInput
        label="Дата рождения *"
        :formValue="birthday"
        fieldName="birthday"
        @change:formValue="changeFormValue"
      />
      <span 
        class="input__err"
        v-if="!$v.birthday.required && $v.birthday.$dirty">
        Данное поле необходимо заполнить
      </span>
      <TheInput
        label="Номер телефона *"
        :formValue="phone"
        fieldName="phone"
        @change:formValue="changeFormValue"
      />
      <span 
        class="input__err"
        v-if="!$v.phone.required && $v.phone.$dirty">
        Данное поле необходимо заполнить
      </span>
      <span 
        class="input__err"
        v-if="(!$v.phone.maxLength || !$v.phone.minLength) && $v.phone.$dirty">
        Необходимо 11 символов
      </span>
      <span 
        class="input__err"
        v-if="!$v.phone.numeric && $v.phone.$dirty">
        Необходимо использвать только цифры
      </span>
      <span 
        class="input__err"
        v-if="!$v.phone.isSevenFirst && $v.phone.$dirty">
        Необходимо начать с 7
      </span>
    </div>
    <TheSelect
      label="Пол"
      :optionValues="optionValues"
      :formValue="gender"
      fieldName="gender"
      @change:formValue="changeFormValue"
    />
  </div>
</template>

<script>
import { required, minLength, maxLength, numeric } from "vuelidate/lib/validators";

import TheInput from "../../FormElements/TheInput";
import TheSelect from "../../FormElements/Select/TheSelect";

const isSevenFirst = value => value.indexOf(7) == 0;

export default {
  props: {
    birthday: String,
    phone: String,
    gender: String,
  },
  data() {
    return {
      optionValues: ["М", "Ж"],
    };
  },
  validations: {
    birthday: {
      required,
    },
    phone: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
      numeric,
      isSevenFirst
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
