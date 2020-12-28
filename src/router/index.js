import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    icon: 'MonitorIcon'
  },
  {
    path: '/sales',
    name: 'Sales',
    component: () => import(/* webpackChunkName: "sales" */ '../views/Sales.vue'),
    icon: 'TagIcon'
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () => import(/* webpackChunkName: "inventory" */ '../views/Inventory.vue'),
    icon: 'PackageIcon'
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import(/* webpackChunkName: "customer" */ '../views/Customer.vue'),
    icon: 'ShoppingCartIcon'
  },
  {
    path: '/bank',
    name: 'Bank',
    component: () => import(/* webpackChunkName: "bank" */ '../views/Bank.vue'),
    icon: 'HomeIcon'
  },
  {
    path: '/accounting',
    name: 'Accounting',
    component: () => import(/* webpackChunkName: "accounting" */ '../views/Accounting.vue'),
    icon: 'BookIcon'
  },
  {
    path: '/vendor',
    name: 'Vendor',
    component: () => import(/* webpackChunkName: "vendor" */ '../views/Vendor.vue'),
    icon: 'TruckIcon'
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import(/* webpackChunkName: "employee" */ '../views/Employee.vue'),
    icon: 'UsersIcon'
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import(/* webpackChunkName: "reports" */ '../views/Reports.vue'),
    icon: 'BarChart2Icon'
  },
  {
    path: '/preference',
    name: 'Preference',
    component: () => import(/* webpackChunkName: "preference" */ '../views/Preference.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/premium',
    name: 'Premium',
    component: () => import(/* webpackChunkName: "connection" */ '../views/Premium.vue'),
    icon: 'PocketIcon'
  },
  {
    path: '/saleshistory',
    name: 'History',
    component: () => import(/* webpackChunkName: "saleshistory" */ '../views/SalesHistory.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/journal',
    name: 'Journal',
    component: () => import(/* webpackChunkName: "journal" */ '../views/Journal.vue'),
    icon: 'SettingsIcon'
  },
  {
    path: '/salesgrid',
    name: 'SalesGrid',
    component: () => import(/* webpackChunkName: "salesgrid" */ '../views/SalesGrid.vue'),
    icon: 'SettingsIcon'
  }
];

const router = new VueRouter({
  routes,
  foo: 'bar'
});

export default router;
