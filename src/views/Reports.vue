<template>
  <div class="reports">
     <b-container   class="Reports Header">
      <b-row>
        <b-col><h1>Reports</h1></b-col>
        <div class="text-right">
        <b-button-group>
      <b-button variant="outline-secondary">Share</b-button>
      <b-button class="mr-2" variant="outline-secondary">Export</b-button>
    </b-button-group>
    <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Financial Report</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Ledger Report</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Journal Report</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Receivable Report</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Payables Report</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
               <b-dropdown-item href="#"><feather-icon size="1x" icon="ToolIcon" /> Bank</b-dropdown-item>
               <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Taxes</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="SidebarIcon" /> Accounting
              </template>
              </b-dropdown>
              <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Invoice</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Estimate</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Rewards</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
               <b-dropdown-item href="#"><feather-icon size="1x" icon="ToolIcon" /> Settings</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="DownloadIcon" /> Sales
              </template>
              </b-dropdown>
                  <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Invoice</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Estimate</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Rewards</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
               <b-dropdown-item href="#"><feather-icon size="1x" icon="ToolIcon" /> Settings</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="CreditCardIcon" /> Inventory
              </template>
              </b-dropdown>
              <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Invoice</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Estimate</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Rewards</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
               <b-dropdown-item href="#"><feather-icon size="1x" icon="ToolIcon" /> Settings</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="BriefcaseIcon" /> Employee
              </template>
              </b-dropdown>
                <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Invoice</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Estimate</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Rewards</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
               <b-dropdown-item href="#"><feather-icon size="1x" icon="ToolIcon" /> Settings</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="TrendingUpIcon" /> Custom
              </template>
              </b-dropdown>
              <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Favourite</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Recent Report</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Placeholder</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
               <b-dropdown-item href="#"><feather-icon size="1x" icon="ToolIcon" /> Settings</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="CropIcon" />
              </template>
            </b-dropdown>
                <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="SettingsIcon" /> Settings</b-dropdown-item>
               <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="BellIcon" /> Notification
                <b-badge variant="info" pill>14</b-badge>
              </b-dropdown-item>
              <b-dropdown-item href="#"> <feather-icon size="1x" icon="MessageSquareIcon" /> Message
                <b-badge variant="info" pill>6</b-badge>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="LogOutIcon" /> Logout</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="LockIcon" /> Lock</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="UserIcon" /> John Doe
              </template>
            </b-dropdown>
        </div>
                   </b-row>
        </b-container>
        </div>
</template>
<script>
import FeatherIcon from '@/components/FeatherIcon';
export default {
  components: { FeatherIcon }
};
</script>
