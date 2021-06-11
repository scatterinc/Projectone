<template>
<div class="mb-2 mt-4 ml-1">
        <b-row
     v-for="(row, n) in list"
    :key="`row${n}`"
    class="text-center center row container-fluid mb-2"

  >
    <b-list-group horizontal="md" class="row px-md-6 flex-fill" >
      <b-list-group-item
        v-for="(item, key) in row"
        :key="`item${key}`"
        button
        class="col mr-1 ml-1 rounded border shadow"
                      >
        <template v-if="item.left">
          <div class="text-left">{{ item.left }}</div>
          <div class="text-right">{{ item.right }}</div>
        </template>
        <span v-else> {{ item }} </span>
      </b-list-group-item>
    </b-list-group>
  </b-row>
</div>
</template>
<script>
export default {
  name: 'SalesGridItem',
  data: () => ({
    list: [
      [
        { left: 'Chicken Foot Soup', right: '$2,000', variant: 'info' },
        'Dapibus ac facilisis in',
        'Morbi leo risus',
        'Cras justo odio',
        'Cras justo odio'
      ], [
        { left: 'Chicken Foot Soup', right: '$2,000' },
        'Dapibus ac facilisis in',
        'Morbi leo risus',
        'Cras justo odio',
        'Cras justo odio'
      ], [
        { left: 'Chicken Foot Soup', right: '$2,000' },
        'Dapibus ac facilisis in',
        'Morbi leo risus',
        'Cras justo odio',
        'Cras justo odio'
      ], [
        { left: 'Chicken Foot Soup', right: '$2,000' },
        'Dapibus ac facilisis in',
        'Morbi leo risus',
        'Cras justo odio',
        'Cras justo odio'
      ], [
        { left: 'Chicken Foot Soup', right: '$2,000' },
        'Dapibus ac facilisis in',
        'Morbi leo risus',
        'Cras justo odio',
        'Cras justo odio'
      ]
    ]
  })
};
</script>
