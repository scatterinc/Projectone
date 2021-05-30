export default {
  name: 'Working Paper ',
  icon: 'MapIcon',
  expanded: true,
  items: [
    { name: 'Unadjusted TB', icon: 'FileTextIcon' },
    null,
    { name: 'Schedules', icon: 'FileIcon', to: '/WorkSheet/LeadSchedule' },
    null,
    { name: 'Adjusting Journal', icon: 'FileTextIcon' },
    null,
    { name: 'Working Trial Balance', icon: 'FileIcon', to: '/WorkSheet/WorkingTB' }
  ]
};
