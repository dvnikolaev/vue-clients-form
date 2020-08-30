<template>
  <div class="form__wrapper">
    <h2 class="form__header">Регистрация клиента</h2>
    <form @submit.prevent="">
      <TheClientInfo
        :activePage="activePage"
        :firstName="formValues.firstName"
        :lastName="formValues.lastName"
        :middleName="formValues.middleName"
        :birthday="formValues.birthday"
        :phone="formValues.phone"
        :gender="formValues.gender"
        :groups="formValues.groups"
        :doctor="formValues.doctor"
        :isSendSMS="formValues.isSendSMS"
        @change:formValue="changeFormValue"
      />
      <!-- <TheInput :label="'Имя'" /> -->
      <!-- <TheSelect :optionValues="gender" label="Пол" :multiple="true"/> -->
      <!-- <TheCheckbox label="Не отправлять СМС"/> -->
    </form>
    <FormButtons
      :activePage="activePage"
      @change:toPrevPage="toPrevPage"
      @change:toNextPage="toNextPage"
      :isDisable="isDisable"
    />
    <span class="form__text">* - поля необходимые для заполнения</span>
    {{ $v.formValues.phone.$invalid }}
  </div>
</template>

<script>
import { required, minLength, maxLength, numeric } from "vuelidate/lib/validators";

import TheClientInfo from "./FormParts/ClientInfo/TheClientInfo";
import FormButtons from "./FormParts/FormButtons/FormButtons";
import TheInput from "./FormElements/TheInput";
import TheSelect from "./FormElements/Select/TheSelect";
import TheCheckbox from "./FormElements/TheCheckbox";

const isSevenFirst = (value) => value.indexOf(7) == 0;

export default {
  name: "TheForm",
  data() {
    return {
      activePage: 1,
      formValues: {
        firstName: "",
        lastName: "",
        middleName: "",
        birthday: "",
        phone: "",
        gender: "",
        groups: "",
        doctor: "",
        isSendSMS: false,
      },
    };
  },
  validations: {
    formValues: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      birthday: {
        required,
      },
      phone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
        numeric,
        isSevenFirst,
      },
    },
  },
  computed: {
    isDisable() {
      switch (this.activePage) {
        case 1: {
          return !this.$v.formValues.firstName.required ||
            !this.$v.formValues.lastName.required
            ? true
            : false;
        }
        case 2: {
          return this.$v.formValues.birthday.$invalid ||
          this.$v.formValues.phone.$invalid ? true : false
        }
      }
    },
  },
  methods: {
    toPrevPage() {
      if (this.activePage > 1) {
        this.activePage--;
      }
    },
    toNextPage() {
      if (this.activePage < 6) {
        this.activePage++;
      }
    },
    changeFormValue({ fieldName, formValue }) {
      this.formValues[fieldName] = formValue;
    },
  },
  components: {
    TheClientInfo,
    TheInput,
    TheSelect,
    TheCheckbox,
    FormButtons,
  },
};
</script>

<style lang="scss">
.form__wrapper {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  min-height: 350px;
  width: 500px;
  padding: 25px;
}
.form__header {
  text-align: center;
  margin-top: 0;
}
.form__text {
  margin-top: 30px;
  text-align: center;
  color: rgb(160, 160, 160);
}
</style>
