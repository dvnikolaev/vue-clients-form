<template>
  <div>
    <div>
      <TheInput
        label="Дата рождения *"
        :formValue="birthday"
        fieldName="birthday"
        @change:formValue="changeFormValue"
      />
      <TheInput
        label="Номер телефона *"
        :formValue="phone"
        fieldName="phone"
        @change:formValue="changeFormValue"
      />
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
import TheInput from "../../FormElements/TheInput";
import TheSelect from "../../FormElements/Select/TheSelect";

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
  methods: {
    changeFormValue({ fieldName, formValue }) {
      this.$emit("change:formValue", { fieldName, formValue });
    },
  },
  components: {
    TheInput,
    TheSelect,
  },
};
</script>
