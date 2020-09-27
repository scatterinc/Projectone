<template>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Accounting</h1>
          <div>
            <b-button-group>
              <b-button variant="outline-secondary">Share</b-button>
              <b-button class="mr-2" variant="outline-secondary">Export</b-button>
            </b-button-group>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';

export default {
  components: { DropdownBarItem },
  data: () => ({
    dropdownBar: [{
      name: 'Ledger',
      icon: 'SidebarIcon',
      expanded: true,
      items: [
        { name: 'Journal Entry', icon: 'FileTextIcon' },
        { name: 'Budget Entry', icon: 'FileTextIcon' },
        null,
        { name: 'Journal Template', icon: 'FileTextIcon' },
        null,
        { name: 'Trial Balance', icon: 'FileTextIcon' }
      ]
    }, {
      name: 'Receivables',
      icon: 'DownloadIcon',
      expanded: true,
      items: [
        { name: 'Accounts Receivable', icon: 'FileTextIcon' },
        null,
        { name: 'Invoice', icon: 'FileTextIcon' },
        { name: 'Estimate', icon: 'AwardIcon' },
        null,
        { name: 'Sales Receipt', icon: 'ToolIcon' },
        { name: 'Receive Payment', icon: 'ToolIcon' },
        null,
        { name: 'Statement', icon: 'ToolIcon' }
      ]
    }, {
      name: 'Payables',
      icon: 'CreditCardIcon',
      expanded: true,
      items: [
        { name: 'Accounts Payable', icon: 'FileTextIcon' },
        null,
        { name: 'Enter Bill', icon: 'FileTextIcon' },
        { name: 'Pay Bill', icon: 'AwardIcon' },
        null,
        { name: 'Purchase Order', icon: 'ToolIcon' }
      ]
    }, {
      name: 'Accountant',
      icon: 'BriefcaseIcon',
      expanded: true,
      items: [
        { name: 'Fixed Asset', icon: 'FileTextIcon' },
        null,
        { name: 'Entity', icon: 'AwardIcon' },
        null,
        { name: 'Closing Date', icon: 'ToolIcon' }
      ]
    }, {
      name: 'Financials',
      icon: 'TrendingUpIcon',
      expanded: true,
      items: [
        { name: 'Profit & Loss', icon: 'FileTextIcon' },
        null,
        { name: 'Balance Sheet', icon: 'AwardIcon' },
        { name: 'Cash Flows', icon: 'AwardIcon' },
        null,
        { name: 'Trial balance', icon: 'ToolIcon' },
        { name: 'General Ledger', icon: 'ToolIcon' },
        { name: 'General Journal', icon: 'ToolIcon' },
        null,
        { name: 'Taxes', icon: 'ToolIcon' },
        null,
        { name: 'Budgets', icon: 'ToolIcon' },
        { name: 'Audit Trail', icon: 'ToolIcon' }
      ]
    }, {
      name: '',
      icon: 'CropIcon',
      expanded: true,
      right: true,
      items: [
        { name: 'Chart of Account', icon: 'FileTextIcon' },
        { name: 'Items', icon: 'FileTextIcon' },
        { name: 'Template', icon: 'FileTextIcon' },
        null,
        { name: 'Document Centre', icon: 'AwardIcon' },
        null,
        { name: 'Settings', icon: 'ToolIcon' }
      ]
    }]
  })
};
</script>
