export const formatCurrency = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

export const icons = [
  {
    id: 'database',
    feather: 'DatabaseIcon',
    tooltip: 'Database'
  },
  {
    id: 'server',
    feather: 'ServerIcon',
    tooltip: 'Server'
  },
  {
    id: 'globe',
    feather: 'GlobeIcon',
    tooltip: 'Internet'
  },
  {
    id: 'hard-drive',
    feather: 'HardDriveIcon',
    tooltip: 'Local Storage'
  }, {
    id: 'cloud',
    feather: 'CloudIcon',
    tooltip: 'Cloud Storage'
  }, {
    id: 'help-circle',
    feather: 'HelpCircleIcon',
    tooltip: 'Help'
  }, {
    id: 'info',
    feather: 'InfoIcon',
    tooltip: 'Info'
  }, {
    id: 'alert-triangle',
    feather: 'AlertTriangleIcon',
    tooltip: 'Alert'
  }
].map(icon => ({ ...icon, fa: icon.fa || icon.id }));
