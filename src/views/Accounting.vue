<template>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Accounting</h1>
          <div class="text-right">
            <b-button-group>
              <b-button variant="outline-secondary">Share</b-button>
              <b-button class="mr-2" variant="outline-secondary">Export</b-button>
            </b-button-group>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
            <b-dropdown variant="transparent" v-b-tooltip="'Payables'">
              <template #button-content>
                <feather-icon size="1x" icon="CreditCardIcon"/>
                Payables
              </template>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="FileTextIcon"/>
                Accounts Payable
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="FileTextIcon"/>
                Enter Bill
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="AwardIcon"/>
                Pay Bill
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ToolIcon"/>
                Purchase Order
              </b-dropdown-item>
            </b-dropdown>
            <b-dropdown variant="transparent">
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="FileTextIcon"/>
                Fixed Asset
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="AwardIcon"/>
                Entity
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ToolIcon"/>
                Closing Date
              </b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="BriefcaseIcon"/>
                Accountant
              </template>
            </b-dropdown>
            <b-dropdown variant="transparent">
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="FileTextIcon"/>
                Profit & Loss
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="AwardIcon"/>
                Balance Sheet
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="AwardIcon"/>
                Cash Flows
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ToolIcon"/>
                Trial balance
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ToolIcon"/>
                General Ledger
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ToolIcon"/>
                General Journal
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ToolIcon"/>
                Taxes
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ToolIcon"/>
                Budgets
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ToolIcon"/>
                Audit Trail
              </b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="TrendingUpIcon"/>
                Financials
              </template>
            </b-dropdown>
            <b-dropdown variant="transparent">
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="FileTextIcon"/>
                Chart of Account
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="FileTextIcon"/>
                Items
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="FileTextIcon"/>
                Template
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="AwardIcon"/>
                Document Centre
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ToolIcon"/>
                Settings
              </b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="CropIcon"/>
              </template>
            </b-dropdown>
            <b-dropdown variant="transparent">
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="SettingsIcon"/>
                Settings
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="BellIcon"/>
                Notification
                <b-badge variant="info" pill>14</b-badge>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="MessageSquareIcon"/>
                Message
                <b-badge variant="info" pill>6</b-badge>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="LogOutIcon"/>
                Logout
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="LockIcon"/>
                Lock
              </b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="UserIcon"/>
                John Doe
              </template>
            </b-dropdown>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import FeatherIcon from '@/components/FeatherIcon';
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';

export default {
  components: { FeatherIcon, DropdownBarItem },
  data: () => ({
    dropdownBar: [{
      name: 'Ledger',
      icon: 'SidebarIcon',
      expanded: true,
      items: [
        { name: 'Journal Entry', icon: 'FileTextIcon' },
        { name: 'Budget Entry', icon: 'FileTextIcon' },
        null,
        { name: 'Journal Template', icon: 'FileTextIcon' },
        null,
        { name: 'Trial Balance', icon: 'FileTextIcon' }
      ]
    }].concat(userDropdown)
  })
};
</script>
<style>
.tooltip {
  opacity: .9;
}
</style>
