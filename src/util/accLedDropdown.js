export default {
  name: 'Ledger',
  icon: 'SidebarIcon',
  expanded: true,
  items: [
    { name: 'Journal Entry', icon: 'FileTextIcon', to: '/Journal' },
    { name: 'Budget Entry', icon: 'FileTextIcon' },
    null,
    { name: 'Journal Template', icon: 'FileTextIcon' },
    null,
    { name: 'Trial Balance', icon: 'FileTextIcon' }
  ]
};
