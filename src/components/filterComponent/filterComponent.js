
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
      this.results = (this.searchStr) ? this.filterData.filter(item => item.name.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1) : [];
      this.isOpen = ((this.results.length > 0));     
    },
    selectSearchResult(resultPayload)
    {
      this.searchStr = resultPayload;
      this.isOpen = false;
      console.log(resultPayload);
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    }
  }
};


