import Utils from '../../utils';

export default {
  name: 'filter-component',
  props: {
    filterData: {
      type: Array,
      require: false,
      default(){ return []; }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  data(){
    return{
      searchStr: '',
      results: [],
      isOpen: false,
    };
  },
  methods: {
    filterSearchData()
    {
      this.results = Utils.filterUtils.filterObjectByNameProperty(this.filterData, this.searchStr, true);
      this.isOpen = ((this.results.length > 0));
      Utils.filterUtils.emitTableDataFilterRequest(this,this.searchStr);

      if( !this.searchStr && this.results.length === 0)
      {
        Utils.filterUtils.emitTableDataFilterRequest(this);
      }   
    },
    selectSearchResult(resultPayload)
    {
      this.searchStr = resultPayload;
      this.isOpen = false;
      Utils.filterUtils.emitTableDataFilterRequest(this,resultPayload);
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    }
  }
};


