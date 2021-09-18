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
      filterSelectedOptionsPayload:{
        searchedCountry: '',
        selectedStatus: '',
        canEmit:false
      },
      filterRequestPayload: {
        context: null,
        searchedCountry: '',
        selectedStatus: '',
        isSpecificCountryFilterType: false
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
      this.isOpen = (this.results.length > 0);

      const isSpecificCountryFilter = (Common.arrayCommon.isValid(this.statussesFilterData));
      const noSpecificCountryIsSelected = (this.results.length === 0 || this.results.length > 1);

      this.filterSelectedOptionsPayload.searchedCountry = '';
      this.filterSelectedOptionsPayload.selectedStatus = '';
      this.filterSelectedOptionsPayload.canEmit = false;

      if(isSpecificCountryFilter && noSpecificCountryIsSelected && Common.arrayCommon.isValid(this.results))
      {
        this.filterSelectedOptionsPayload.searchedCountry = this.results[0].name;
        this.filterSelectedOptionsPayload.selectedStatus = this.statusSelectedOption;
        this.filterSelectedOptionsPayload.canEmit = (Common.arrayCommon.isValid(this.results));
      }

      if(!isSpecificCountryFilter && this.searchStr && Common.arrayCommon.isValid(this.results))
      {
        this.filterSelectedOptionsPayload.searchedCountry = this.searchStr;
        this.filterSelectedOptionsPayload.canEmit = (this.searchStr !== '');
      }
      
      if(!isSpecificCountryFilter && !this.searchStr && !Common.arrayCommon.isValid(this.results))
      {
        this.filterSelectedOptionsPayload.canEmit = (this.searchStr === '');
      }

      this.filterRequestPayload.context = this;
      this.filterRequestPayload.searchedCountry = this.filterSelectedOptionsPayload.searchedCountry;
      this.filterRequestPayload.selectedStatus = this.filterSelectedOptionsPayload.selectedStatus;
      this.filterRequestPayload.isSpecificCountryFilterType = isSpecificCountryFilter;

      this.emitFilterRequest();
    },
    selectSearchResult(resultPayload)
    {
      this.searchStr = resultPayload;
      this.filterSelectedOptionsPayload.searchedCountry = resultPayload;
      this.filterRequestPayload.searchedCountry = resultPayload;

      this.isOpen = false;
      this.emitFilterRequest();
    },
    updateFilterRequestSelectedStatus()
    {
      this.filterSelectedOptionsPayload.selectedStatus = this.statusSelectedOption;
      this.filterRequestPayload.selectedStatus = this.statusSelectedOption;
      this.emitFilterRequest();
    },
    emitFilterRequest()
    {
      if(this.filterSelectedOptionsPayload.canEmit)
      {
        Utils.filterUtils.emitTableDataFilterRequest(this.filterRequestPayload);
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


