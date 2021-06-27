<template>
<b-modal id="Utility" size="sm" centered title="Database">
  <b-row>
    <b-col class="text-center">
     <b-btn @click="$router.push('/salesgrid')" variant="transparent"> <font-awesome-icon style="color:green" size="3x" :icon="['fas', currentIcon]" /></b-btn>
     <div v-if="currentIcon === 'database'">Connected: <a style="color:green">Google</a></div>
    </b-col>
  </b-row>
 </b-modal>
</template>

<script>

import { mapState } from 'vuex';
import { icons } from '../util/helpers';

export default {
  name: 'Utility',
  computed: {
    ...mapState(['utilityIcon']),
    currentIcon () {
      return icons.find(icon => icon.id === this.utilityIcon)?.fa || 'database';
    }
  }
};
</script>
<style scoped>

</style>
