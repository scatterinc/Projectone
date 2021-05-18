export default {
  name: '',
  icon: 'CropIcon',
  expanded: true,
  items: [
    { name: 'Reconciliation', icon: 'FileTextIcon', to: '/BankReconciliation' },
    { name: 'Authorization', icon: 'FileTextIcon', modalTarget: 'NewReconciliation' },
    { name: 'On-Hold', icon: 'InboxIcon' },
    null,
    { name: 'Receive Payment', icon: 'ClipboardIcon', to: '/customerpayment' },
    { name: 'Pay Bills', icon: 'ClipboardIcon', to: '/PayBill' },
    null,
    { name: 'Transactions', icon: 'ActivityIcon' },
    null,
    { name: 'Settings', icon: 'ToolIcon' }
  ]
};
