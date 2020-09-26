<template>
 <b-dropdown variant="transparent" icon="SettingsIcon">
              <b-dropdown-item href="#">An item</b-dropdown-item>
              <b-dropdown-item href="#">Another item</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="UserIcon" /> John Doe
              </template>
            </b-dropdown>
</template>
<script>
export default {
  name: 'Users-btn',
  props: {
    Userbtn: {}
  }
};
</script>
