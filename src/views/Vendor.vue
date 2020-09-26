<template>
  <div class="vendor">
     <b-container   class="Vendor Header">
      <b-row variant="bottom-border">
        <b-col><h1>Vendor</h1></b-col>
        <b-col>
          <div class="text-right">
          <b-button class="mr-1" variant="secondary"><feather-icon size="1x" icon="ListIcon" /> Detail</b-button>
          <b-button class="mr-1" variant="secondary"><feather-icon size="1x" icon="PlusCircleIcon" /> Add</b-button>
          <b-button variant="secondary"><feather-icon size="1x" icon="Edit3Icon" /> Edit</b-button>
          </div>
        </b-col>
        <b-col class="text-right">
           <div>
              <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Purchase Order</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="FileTextIcon" /> Purchase Invoice</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="CreditCardIcon" /> Pay bill</b-dropdown-item>
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
        </b-col>
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
