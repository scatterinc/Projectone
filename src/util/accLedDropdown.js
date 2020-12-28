export default {
  name: 'Ledger',
  icon: 'SidebarIcon',
  expanded: true,
  items: [
    { name: 'Journal Entry', icon: 'FileTextIcon' },
    { name: 'Budget Entry', icon: 'FileTextIcon' },
    null,
    { name: 'Journal Template', icon: 'FileTextIcon', to: '/Journal' },
    null,
    { name: 'Trial Balance', icon: 'FileTextIcon' }
  ]
};
