<template>
  <div id="app">
    <top-navbar />
    <left-sidebar/>
    <b-container :fluid="true">
      <b-row>
        <b-col class="py-3">
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LeftSidebar from '@/components/LeftSidebar';
import TopNavbar from '@/components/TopNavbar';

export default {
  components: { TopNavbar, LeftSidebar }
};
</script>

<style lang="scss">
#app {
  padding-top: 60px;
  min-height: 100vh;
  display: flex;
}
.left-sidebar {
  background-color: #f8f9fa;
  border-right: 1px solid #dfe0e1;
  width: 230px;
}
</style>
