<template>
  <div class="overflow-x-auto md:overflow-x-visible px-2 md:-ml-16">
    <table class="table-auto mx-auto">
      <thead>
        <tr>
          <th
            v-for="headerCell in headerRow.cells"
            :key="headerCell"
            class="px-2 font-bold whitespace-no-wrap"
          >
            {{ headerCell }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bodyRow in bodyRows" :key="bodyRow._key">
          <td
            v-for="bodyCell in bodyRow.cells"
            :key="bodyCell"
            class="px-4 py-1 whitespace-no-wrap"
          >
            {{ bodyCell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      default: () => {
        return [
          {
            key: 'e25fff716d1f1',
            cells: ['', 'Titleasdf one', 'Titasdfasdfle Two'],
          },
          {
            key: 'e25fff716d1f2',
            cells: [
              'Test1',
              'iPhone 11 ',
              'iPhone 12',
              'iPhone 12',
              'iPhone 12',
              'iPhone 12',
              'iPhone 12',
            ],
          },
          {
            key: 'e25fff716d1f3',
            cells: ['Test2', 'iPhone 11', 'iPhone 12'],
          },
          {
            key: 'e25fff716d1f4',
            cells: ['Test3', 'iPhone 11', 'iPhone 12'],
          },
          {
            key: 'e25fff716d1f5',
            cells: ['Test4', 'iPhone 11', 'iPhone 12'],
          },
          {
            key: 'e25fff716d1f6',
            cells: ['Test5', 'iPhone 11', 'iPhone 12'],
          },
          {
            key: 'e25fff716d1f7',
            cells: ['Test6', 'iPhone 11', 'iPhone 12'],
          },
        ]
      },
    },
  },

  computed: {
    headerRow() {
      return this.rows[0]
    },

    bodyRows() {
      const bodyRows = [...this.rows]

      bodyRows.shift()
      console.log('shift performed')
      return bodyRows
    },
  },
}
</script>
