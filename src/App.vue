<template>
  <div id="app">
    <div class="wrapper">
      <navigation-component
        v-bind:routes="processRoutesData(this.$router.options.routes)"
      />
      <router-view />
      <div class="push"></div>
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

  .wrapper{
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin: 0 auto -246px;
  }

  .push{
    height: 246px;
  }
  
}
</style>
