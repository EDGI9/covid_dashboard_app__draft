
export default {
  name: 'table-component',
  props: {
    tableData: {
      type: Array,
      required: false,
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


