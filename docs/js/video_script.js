/* using BootstrapVue */
Vue.use(bootstrapVue);

const comp = {
  template: '#comp',
  props: {
    code: String,
    blankSrc: {
      type: [null, String],
      default: null },

    blankColor: {
      type: String,
      default: '#000' },

    thumb: {
      type: String,
      default: 'mqdefault',
      validator: str => ['default', 'mqdefault', 'hqdefault', 'sddefault', 'maxresdefault'].indexOf(str) !== -1 },

    aspect: {
      type: String,
      default: '16by9',
      validator: str => ['21by9', '16by9', 'hqdefault', '4by3', '1by1'].indexOf(str) !== -1 } },


  data() {
    return {
      load: false,
      thumb: {
        youtube: {
          mq: 'mqdefault',
          hq: 'hqdefault',
          sd: 'sddefault',
          maxres: 'maxresdefault' } } };



  },
  computed: {
    blankStyle() {
      let style = {
        backgroundColor: this.blankColor };


      if (this.blankSrc) style.backgroundImage = `url(${this.blankSrc})`;
      return style;
    },
    embed() {
      if (this.load) {
        return {
          type: 'iframe',
          aspect: this.aspect,
          src: `https://www.youtube.com/embed/${this.code}?rel=0&showinfo=0&autoplay=1` };

      } else {
        return {
          type: 'b-img-lazy',
          aspect: this.aspect,
          // src: `img/af-big.png` };
          src: `https://img.youtube.com/vi/${this.code}/${this.thumb}.jpg` };

      }
    } },

  methods: {
    start(event) {
      setTimeout(() => {this.load = true;}, 0);
    } } };



const app = new Vue({
  el: '#app',
  components: { comp } });