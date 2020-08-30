<template>
  <div>
    <ClientInitials
      v-if="activePage === 1"
      :firstName="firstName"
      :lastName="lastName"
      :middleName="middleName"
      @change:formValue="changeFormValue"
    />
    <ClientInfo
      v-if="activePage === 2"
      :birthday="birthday"
      :phone="phone"
      :gender="gender"
      @change:formValue="changeFormValue"
    />
    <MedInfo 
      v-if="activePage === 3"
      :groups="groups"
      :doctor="doctor"
      :isSendSMS="isSendSMS"
      @change:formValue="changeFormValue"
    />
  </div>
</template>

<script>
import ClientInitials from "./ClientInitials";
import ClientInfo from "./ClientInfo";
import MedInfo from "./MedInfo";

export default {
  props: {
    activePage: Number,
    firstName: String,
    lastName: String,
    middleName: String,
    birthday: String,
    phone: String,
    gender: String,
    groups: String,
    doctor: String,
    isSendSMS: Boolean
  },
  methods: {
    changeFormValue({ fieldName, formValue }) {
      this.$emit("change:formValue", { fieldName, formValue });
    },
  },
  components: {
    ClientInitials,
    ClientInfo,
    MedInfo,
  },
};
</script>
