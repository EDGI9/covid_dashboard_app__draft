
export default {
  name: 'table-component',
  props: {
    tableData: {
      type: Array,
      require: false,
      default(){ return []; }
    }
  },
  methods:{
    isValid(propPayload)
    {
      return ((propPayload !== null && propPayload!== undefined && propPayload.toString() !== ''));
    }
  }
};


