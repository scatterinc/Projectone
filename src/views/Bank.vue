<template>
 <b-container class="bank">
      <b-row>
        <b-col><h1>Bank</h1></b-col>
        <div class="text-right">
        <b-button-group>
      <b-button variant="outline-secondary">Share</b-button>
      <b-button class="mr-2" variant="outline-secondary">Export</b-button>
    </b-button-group>
    <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Write Cheque</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Pay Bill</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
               <b-dropdown-item href="#"><feather-icon size="1x" icon="ToolIcon" /> Print Cheque</b-dropdown-item>
               <b-dropdown-item href="#"><feather-icon size="1x" icon="ToolIcon" /> Print Batch</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="SidebarIcon" /> Cheque
              </template>
              </b-dropdown>
              <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Make Deposit</b-dropdown-item>
               <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Transfer</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
               <b-dropdown-item href="#"><feather-icon size="1x" icon="ToolIcon" /> Receive Payment</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="DownloadIcon" /> Deposit
              </template>
              </b-dropdown>
                  <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Enter Charges</b-dropdown-item>
                 <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Pay Card</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
               <b-dropdown-item href="#"><feather-icon size="1x" icon="ToolIcon" /> Add New</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="CreditCardIcon" /> Credit Cards
              </template>
              </b-dropdown>
              <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Loan Center</b-dropdown-item>
                           <template #button-content>
                <feather-icon size="1x" icon="BriefcaseIcon" /> Loans
              </template>
              </b-dropdown>
                <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Stocks</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Bonds</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Hedging</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
               <b-dropdown-item href="#"><feather-icon size="1x" icon="ToolIcon" /> Markets</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="TrendingUpIcon" /> Securties
              </template>
              </b-dropdown>
              <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Reconciliation</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Authorization</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Receive Payment</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Pay Bill</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="AwardIcon" /> Transactions</b-dropdown-item>
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
</template>
<script>
import FeatherIcon from '@/components/FeatherIcon';
export default {
  components: { FeatherIcon }
};
</script>
