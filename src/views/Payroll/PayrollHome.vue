<template>
    <div>
        <b-row>
            <b-col>
                <router-view><div></div></router-view>
            </b-col>
            <b-col style="min-height:800px" cols="2" class="bg-light border-left">
                <div class="text-right">
             <b-form-checkbox v-model="checked"  name="PayrollEmployeecheck-button"  switch>
            </b-form-checkbox></div>
               <div>

  <div><h4 class="mb-2">Directory of Employee</h4></div>
     <tree
      :data="treeData"
      :options="treeOptions"
      @node:dragging:start="logDragStart"
      @node:dragging:finish="logDragFinish"
    />
      </div>
            </b-col>
        </b-row>
    </div>

</template>
<script>

export default {
  name: 'PayrollHome',
  check: true,
  data: () => ({
    treeData: getTreeData(),
    treeOptions: {
      propertyNames: {
        text: 'MY_TEXT',
        children: 'KIDS',
        state: 'OPTIONS'
      },
      dnd: true,
      checkbox: true
    }
  }),
  methods: {
    logDragStart (node) {
      console.log('Start dragging: ' + node.text);
    },

    logDragFinish (targetNode, distinationNode) {
      console.log(`Stop dragging: [TARGET]${targetNode.text}`);
    }
  }
};
function getTreeData () {
  return [
    {
      MY_TEXT: 'JS: The Right Way',
      OPTIONS: { expanded: true },
      KIDS: [
        { MY_TEXT: 'Getting Started (NOT DRAGGABLE)', OPTIONS: { checked: true, draggable: false } },
        { MY_TEXT: 'JavaScript Code Style', OPTIONS: { selected: true } },
        { MY_TEXT: 'MVC Pattern (NOT DROPABLE)', OPTIONS: { dropable: false } },
        { MY_TEXT: 'MVP Pattern' },
        { MY_TEXT: 'MVVM Pattern' },
        {
          MY_TEXT: 'The Good Parts',
          KIDS: [
            { MY_TEXT: 'OBJECT ORIENTED', OPTIONS: { checked: true } },
            { MY_TEXT: 'ANONYMOUS FUNCTIONS', OPTIONS: { checked: true } },
            { MY_TEXT: 'FUNCTIONS AS FIRST-CLASS OBJECTS', OPTIONS: { checked: true } },
            { MY_TEXT: 'LOOSE TYPING', OPTIONS: { checked: true } }
          ]
        },
        {
          MY_TEXT: 'Patterns',
          KIDS: [
            {
              MY_TEXT: 'DESIGN PATTERNS',
              OPTIONS: { expanded: true },
              KIDS: [
                {
                  MY_TEXT: 'Creational Design Patterns',
                  KIDS: [
                    { MY_TEXT: 'Factory' },
                    { MY_TEXT: 'Prototype' },
                    { MY_TEXT: 'Mixin' },
                    { MY_TEXT: 'Singleton' }
                  ]
                },
                { MY_TEXT: 'Structural Design Patterns' }
              ]
            },
            {
              MY_TEXT: 'MV* PATTERNS',
              cildren: [
                { MY_TEXT: 'MVC Pattern' },
                { MY_TEXT: 'MVP Pattern' },
                { MY_TEXT: 'MVVM Pattern' }
              ]
            }
          ]
        }
      ]
    }
  ];
}
</script>
<style lang="scss">
</style>
