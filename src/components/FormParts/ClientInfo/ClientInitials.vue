<template>
  <div>
    <div>
      <TheInput
        label="Фамилия *"
        :formValue="lastName"
        fieldName="lastName"
        @change:formValue="changeFormValue"
      />
      <TheInput
        label="Имя *"
        :formValue="firstName"
        fieldName="firstName"
        @change:formValue="changeFormValue"
      />
    </div>
    <TheInput
      label="Отчество"
      :formValue="middleName"
      fieldName="middleName"
      @change:formValue="changeFormValue"
    />
  </div>
</template>

<script>
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
      this.$emit("change:formValue", { fieldName, formValue });
    },
  },
  components: {
    TheInput,
  },
};
</script>
