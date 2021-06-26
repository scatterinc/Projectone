<template>
  <div class="left-sidebar">
    <b-list-group>
      <b-list-group-item :class="{active: route.name === $route.name }"
                         v-for="route in filteredRoutes"
                         :key="route.path"
                         :to="route.path">
        <feather-icon v-if="route.icon" :icon="route.icon" />
        <span class="ml-3">{{ route.name }}</span>
      </b-list-group-item>
      <b-list-group-item class="custom-nav-item">
        <b-btn v-for="(n, key) in bottomButtons" :key="key"
               variant="light"
               v-b-modal.Utility
               class="mr-0.05 mb-0.05"
               v-b-tooltip.hover :title="n.tooltip || ''">
          <feather-icon :icon="n.icon" />
        </b-btn>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
import router from '@/router';
import FeatherIcon from '@/components/FeatherIcon';
export default {
  name: 'left-sidebar',
  data: () => ({
    bottomButtons: [{
      icon: 'DatabaseIcon',
      tooltip: 'Database'
    }, {
      icon: 'ServerIcon',
      tooltip: 'Server'
    }, {
      icon: 'GlobeIcon',
      tooltip: 'Internet'
    }, {
      icon: 'HardDriveIcon',
      tooltip: 'Local Storage'
    }, {
      icon: 'CloudIcon',
      tooltip: 'Cloud Storage'
    }, {
      icon: 'HelpCircleIcon',
      tooltip: 'Help'
    }, {
      icon: 'InfoIcon',
      tooltip: 'Info'
    }, {
      icon: 'AlertTriangleIcon',
      tooltip: 'Alert'
    }]
  }),
  components: {
    FeatherIcon
  },
  computed: {
    routes () {
      return router.options.routes;
    },
    filteredRoutes () {
      return this.routes.filter(o => ['/', '/sales', '/inventory', '/customer', '/bank', '/accounting', '/vendor', '/employee', '/reports', '/preference', '/premium', '/salesgrid'].includes(o.path));
    }
  }
};
</script>
<style lang="scss">
  .left-sidebar {
    .list-group {
      border-radius: 0;
      margin-right: -1px;
    }
    .list-group-item {
      background-color: transparent;
      &:hover {
        background-color: white;
      }
      &.active {
        background-color: var(--secondary);
        color: white;
        border-color: rgba(0,0,0,.125);
      }
    }
    .custom-nav-item {
      height: 200px;
      padding: .75rem .5rem;
    }
  }
</style>
