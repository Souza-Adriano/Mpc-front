<template>
  <div :style="style" ref="animation"></div>
</template>

<script>
import lottie from "lottie-web";
export default {
  name: "Lottie",
  props: {
    path: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      required: false,
      default: 1
    },
    width: {
      type: Number,
      required: false,
      default: -1
    },
    height: {
      type: Number,
      required: false,
      default: -1
    },
    loop: {
      type: Boolean,
      required: false,
      default: true
    },
    autoPlay: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: () => ({
    rendererSettings: {
      scaleMode: "centerCrop",
      clearCanvas: true,
      progressiveLoad: false,
      hideOnTransparent: true
    },
    anim: null,
    style: null,
    animData: null
  }),
  mounted() {
    this.animData = require(`@/assets/${this.path}.json`);

    this.style = {
      width: this.width != -1 ? `${this.width}px` : "100%",
      height: this.height != -1 ? `${this.height}px` : "100%",
      overflow: "hidden",
      margin: "0"
    };

    this.anim = lottie.loadAnimation({
      container: this.$refs.animation,
      renderer: "svg",
      loop: this.loop,
      autoplay: this.autoPlay,
      animationData: this.animData, //require(`@/assets/${this.path}.json`),
      rendererSettings: this.rendererSettings
    });

    this.$emit("AnimControl", this.anim);
  }
};
</script>

<style>
</style>