export default {
  name: 'Time & Cost',
  icon: 'FileIcon',
  expanded: true,
  items: [
    { name: 'Time Sheet', icon: 'FileIcon', to: '/Payroll/TimeSheet' },
    null,
    { name: 'Payroll Input tax', icon: 'FileTextIcon', modalTarget: 'PayrollInputTax' },
    { name: 'Year & Holidays', icon: 'FileTextIcon', modalTarget: 'PayrollYearHoliday' },
    null,
    { name: 'Document Centre', icon: 'FileIcon' },
    null,
    { name: 'Import Hours', icon: 'FileIcon' }
  ]
};
