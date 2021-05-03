export default {
  name: 'Cheque',
  icon: 'SidebarIcon',
  expanded: true,
  items: [
    { name: 'Write Cheque', icon: 'FileTextIcon', to: '/WriteCheque' },
    null,
    { name: 'Pay Bill', icon: 'FileTextIcon', to: '/PayBill' },
    null,
    { name: 'Print Cheque', icon: 'PrinterIcon' },
    { name: 'Print Batch', icon: 'PrinterIcon' }
  ]
};
