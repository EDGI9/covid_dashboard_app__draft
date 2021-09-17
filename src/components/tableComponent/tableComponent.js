
export default {
  name: 'table-component',
  props: {
    tableData: {
      type: Array,
      require: false,
      default(){ return []; }
    }
  },
}


