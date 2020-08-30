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
      <TheAddress
        v-if="activePage == 4"
        :index="formValues.index"
        :country="formValues.country"
        :region="formValues.region"
        :city="formValues.city"
        :street="formValues.street"
        :home="formValues.home"
        @change:formValue="changeFormValue"
      />
    </form>
    <FormButtons
      :activePage="activePage"
      @change:toPrevPage="toPrevPage"
      @change:toNextPage="toNextPage"
      :isDisable="isDisable"
    />
    <span class="form__text">* - поля необходимые для заполнения</span>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";

import TheClientInfo from "./FormParts/ClientInfo/TheClientInfo";
import TheAddress from "./FormParts/Address/TheAddress";
import FormButtons from "./FormParts/FormButtons/FormButtons";

const isSevenFirst = (value) => value.indexOf(7) == 0;

export default {
  name: "TheForm",
  data() {
    return {
      activePage: 4,
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
        index: "",
        country: "",
        region: "",
        city: "",
        street: "",
        home: ""
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
      groups: {
        required
      },
      city: {
        required
      }
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
            this.$v.formValues.phone.$invalid
            ? true
            : false;
        }
        case 3:
          return this.$v.formValues.groups.$invalid ? true : false;
        case 4:
          return this.$v.formValues.city.$invalid ? true : false
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
      if (this.activePage < 5) {
        this.activePage++;
      }
    },
    changeFormValue({ fieldName, formValue }) {
      this.formValues[fieldName] = formValue;
    },
  },
  components: {
    TheClientInfo,
    TheAddress,
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
