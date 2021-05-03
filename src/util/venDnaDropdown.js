export default {
  name: '',
  icon: 'CropIcon',
  expanded: true,
  items: [
    { name: 'Purchase Order', icon: 'FileTextIcon' },
    null,
    { name: 'Enter bill', icon: 'FileTextIcon', to: '/EnterBills' },
    { name: 'Pay bill', icon: 'CreditCardIcon', modalTarget: 'Transfer' },
    null,
    { name: 'Setting', icon: 'ToolIcon' }
  ]
};
