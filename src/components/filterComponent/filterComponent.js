import Utils from '../../utils';
import Common from '../../common';

export default {
  name: 'filter-component',
  props: {
    countriesFilterData: {
      type: Array,
      require: false,
      default(){ return []; }
    },
    statussesFilterData: {
      type: Array,
      require: false,
      default(){ return []; }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    this.init();
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  data(){
    return{
      searchStr: '',
      results: [],      
      isOpen: false,
      statusSelectedOption: '',
      filterRequestPayload:{
        searchedCountry: '',
        selectedStatus: '',
        canEmit:false
      }
    };
  },
  methods: {
    init()
    {
      this.statusSelectedOption = (Common.arrayCommon.isValid(this.statussesFilterData)) ? this.statussesFilterData[0].value : '';
    },
    filterSearchData()
    {
      this.results = Utils.filterUtils.filterObjectByNameProperty(this.countriesFilterData, this.searchStr, true);
      this.isOpen = ((this.results.length > 0));

      this.filterRequestPayload.searchedCountry = (Common.arrayCommon.isValid(this.results)) ? this.results[0].name: '';
      this.filterRequestPayload.selectedStatus = this.statusSelectedOption;
      this.filterRequestPayload.canEmit = (Common.arrayCommon.isValid(this.results));

      if(!this.statussesFilterData.length)
      {
        Utils.filterUtils.emitTableDataFilterRequest(this,this.searchStr);
      }

      /*if( !this.searchStr && this.results.length === 0)
      {
        Utils.filterUtils.emitTableDataFilterRequest(this);
      } */   
    },
    selectSearchResult(resultPayload)
    {
      this.searchStr = resultPayload;
      this.filterRequestPayload.searchedCountry = resultPayload;

      console.log(resultPayload);
      console.log(this.filterRequestPayload);


      this.isOpen = false;
      Utils.filterUtils.emitTableDataFilterRequest(this,resultPayload);
    },
    updateFilterRequestSelectedStatus()
    {
      this.filterRequestPayload.selectedStatus = this.statusSelectedOption;

      if(this.filterRequestPayload.canEmit)
      {
        Utils.filterUtils.emitTableDataFilterRequest(this,this.filterRequestPayload);
      }
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },
    hasStatussesData(statussesFilterDataPayload)
    {
      return (statussesFilterDataPayload && Common.arrayCommon.isValid(statussesFilterDataPayload));
    }
  }
};


