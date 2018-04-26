<template>
  <button >Compteur : {timerObj}</button>
</template>


<script>
export default {
  name: "exo-7-comp",
  props: ["timerObj"],
  mounted() {
    if (this.timer == "true") {
      this.startTimer();
    } else {
      this.timerWidth = 0;
    }
  },
  data() {
    return {
        timerObj = 1000
    };
  },
  methods: {
    startTimer() {
      timerObj = window.setInterval(this.timerTick(), 1000);
      this.timerFormat();
    },

    stopTimer() {
      window.clearInterval(timerObj);
      timerObj = null;
    },

    timerTick() {
      if (this.timerLength != 0) {
        this.timerLength -= 1;
        this.timerBarWidth();
        this.timerFormat();
      } else {
        this.stopTimer();
        // Some broadcast stuff to disable answering
      }
    },

    timerFormat() {
      let minutes = Math.floor(this.timerLength / 60);
      let seconds = this.timerLength % 60;

      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      this.timerDisplay = minutes + ":" + seconds;
    },

    timerBarWidth() {
      let amount = 100 / this.timerseconds;
      this.timerWidth -= amount;
    }
  }
};
</script>
