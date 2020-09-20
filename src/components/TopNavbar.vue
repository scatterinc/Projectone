<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
    <b-navbar-brand href="#">Yaad</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!--<b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>-->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="w-100">
        <b-nav-item class="flex-grow-1">
          <b-form-input class="search-input" placeholder="Search" v-model="term"></b-form-input>
        </b-nav-item>
        <b-nav-item>
            <b-btn variant="primary"><power-icon size="1x" class="custom-class"></power-icon> Sign out</b-btn>
        </b-nav-item>
        <!--<b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          &lt;!&ndash; Using 'button-content' slot &ndash;&gt;
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import search from '../store/search';
export default {
  name: 'TopNavbar',
  computed: {
    term: {
      get: function () {
        return search.term;
      },
      set: function (val) {
        search.term = val;
      }
    }
  }
};
</script>
<script>
import { PowerIcon } from 'vue-feather-icons'

export default {
  components: {
    PowerIcon
  }
}
</script>
<style scoped lang="scss">
.navbar-brand {
  width: 195px;
}
.navbar {
  height: 60px;
  .form-control {
    background-color: transparent;
    border-color: transparent;
    transition: background-color .2s ease-out;
    &:hover, &:focus {
      background-color: rgb(255, 255, 255);
    }
  }
  .search-input, .btn {
    margin-top: -.375rem;
    margin-bottom: -.375rem;
  }
}

</style>
