export default {
  name: 'Deposit',
  icon: 'DownloadIcon',
  expanded: true,
  items: [
    { name: 'Make Deposit', icon: 'FileTextIcon' },
    null,
    { name: 'Transfer', icon: 'FileTextIcon', modalTarget: 'Transfer' },
    null,
    { name: 'Receive Payment', icon: 'FileIcon' }
  ]
};
