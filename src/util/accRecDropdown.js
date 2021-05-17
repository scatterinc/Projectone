export default {
  name: 'Receivables',
  icon: 'DownloadIcon',
  expanded: true,
  items: [
    { name: 'Accounts Receivable', icon: 'FileTextIcon' },
    null,
    { name: 'Invoice', icon: 'FileTextIcon', to: '/Invoice' },
    { name: 'Estimate', icon: 'AwardIcon' },
    null,
    { name: 'Sales Receipt', icon: 'ToolIcon' },
    { name: 'Receive Payment', icon: 'ToolIcon', to: '/customerpayment' },
    null,
    { name: 'Statement', icon: 'ToolIcon' }
  ]
};
