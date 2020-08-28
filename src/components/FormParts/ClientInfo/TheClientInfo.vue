<template>
  <div>
    <ClientInitials v-if="activePage === 1"/>
    <ClientInfo v-if="activePage === 2"/>
    <MedInfo v-if="activePage === 3" />
  </div>
</template>

<script>
import ClientInitials from './ClientInitials';
import ClientInfo from './ClientInfo';
import MedInfo from './MedInfo';

export default {
  props: {
    activePage: Number
  },
  components: {
    ClientInitials,
    ClientInfo,
    MedInfo
  }
}
</script>