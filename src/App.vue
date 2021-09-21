<template>
  <div id="app">
    <div id="content-wrap">
      <navigation-component
        v-bind:routes="processRoutesData(this.$router.options.routes)"
      />
      <router-view />
    </div>
    
    <footer-component />
  </div>
</template>

<script>
import NavigationComponent from "./components/navigationComponent";
import FooterComponent from "./components/footerComponent";
import EventBus from "./eventbus";
import Utils from "./utils";

let _numberOfSpinners = 0;

export default {
  created() {
    EventBus.$on("show-spinner", this.showSpinner);
    EventBus.$on("hide-spinner", this.hideSpinner);

    this.init();
  },
  destroyed() {
    EventBus.$off("show-spinner");
    EventBus.$off("hide-spinner");
  },
  components: {
    "navigation-component": NavigationComponent,
    "footer-component": FooterComponent,
  },
  methods: {
    init() {
      Utils.routeUtils.gotoRoute(this, "summary");
    },
    showSpinner() {
      if (++_numberOfSpinners === 1) {
        this.spinner = this.$loading.show({
          isFullpage: true,
          color: "#40D8A7",
          zIndex: 10001,
        });
      }
    },
    hideSpinner() {
      if (--_numberOfSpinners === 0) {
        this.spinner.hide();
      }
    },
    processRoutesData(routesPayload) {
      return Utils.routeUtils.extractNameAndPath(routesPayload);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;  

  #content-wrap{
    padding-bottom: 156px;    /* Footer height */
  }
}

</style>
