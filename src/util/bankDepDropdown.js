export default {
  name: 'Deposit',
  icon: 'DownloadIcon',
  expanded: true,
  items: [
    { name: 'Make Deposit', icon: 'FileTextIcon', to: '/deposit' },
    null,
    { name: 'Transfer', icon: 'RepeatIcon', modalTarget: 'Transfer' },
    null,
    { name: 'Receive Payment', icon: 'FileIcon', to: '/customerpayment' }
  ]
};
