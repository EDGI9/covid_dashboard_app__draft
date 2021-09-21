import Common from '../../common';

export default {
  name: 'footer-component',
  mounted(){
    this.copyright = `© ${Common.momentCommon.moment().format('YYYY')} Copyright -`;
    this.website = 'covid19reportstats.io';
    this.websiteURL = '#';
    this.linkedinURL = 'https://www.linkedin.com/in/vitalinosilva/';
    this.githubURL = 'https://github.com/vs-silva/covid_dashboard_app__draft/';
  },
  data(){
    return {
      copyright: '',
      website: '',
      websiteURL: '',
      linkedinURL: '',
      githubURL: ''
    };
  }
};


