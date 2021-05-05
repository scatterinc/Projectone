export default {
  name: 'Payables',
  icon: 'CreditCardIcon',
  expanded: true,
  items: [
    { name: 'Accounts Payable', icon: 'FileTextIcon' },
    null,
    { name: 'Enter Bill', icon: 'FileTextIcon', to: '/EnterBills' },
    { name: 'Pay Bill', icon: 'AwardIcon', to: '/PayBill' },
    null,
    { name: 'Purchase Order', icon: 'ToolIcon' }
  ]
};
