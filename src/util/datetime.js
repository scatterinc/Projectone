export default {
  data: () => ({
    timeString: '',
    stopClock: false
  }),
  mounted () {
    this.nowTime();
  },
  nowTime () {
    this.timeString = new Date(Date.now()).toLocaleDateString('en-US',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) +
      ' ' + new Date(Date.now()).toLocaleTimeString('en-US');
    if (!this.stopClock) {
      setTimeout(this.nowTime, 285);
    }
  },
  beforeDestroy () {
    this.stopClock = true;
  }
};
