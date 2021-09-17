import Common from '../../common';

export default {
  name: 'navigation-component',
  props: {
    routes: {
      type: Array,
      require: false,
      default(){ return []; }
    }
  },
  methods:{
    capitalizeRouteName(routeNamePayload){
      return Common.stringCommon.capitalizeFirstLetter(routeNamePayload);
    },
    sortRoutes(routesPayload){
      return Common.arrayCommon.sortToDescendingOrder(routesPayload);
    }
  }
};


