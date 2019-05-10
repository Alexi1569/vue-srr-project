<template>
  <div :class="['video__block', playerClass]">
    <div v-if="video.icon" class="video__block-icon inline-flex jc-fs ai-c">
      <i v-html="video.icon.svg"></i>
      <p>{{video.icon.text}}</p>
    </div>
    <div @mouseover="showControls = true" @mouseleave="showControls = false" ref="wrap" v-in-viewport class="video__block-inner flex ai-c jc-c">
      <transition name="controls-fade">
        <button @click="toggleVideo" v-show="!isPlaying || showControls" class="video__block-toggler inline-flex ai-c jc-c">
          <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 232.153 232.153" style="enable-background:new 0 0 232.153 232.153;" xml:space="preserve"><g><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266   c-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267   l154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z" /></g></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="-37 0 320 320.00002"><path d="m96.398438 0h-86.398438c-5.515625.015625-9.984375 4.484375-10 10v300c.015625 5.515625 4.484375 9.984375 10 10h86.398438c5.519531-.015625 9.984374-4.484375 10-10v-300c-.015626-5.515625-4.480469-9.984375-10-10zm0 0"/><path d="m236.898438 0h-86.5c-5.515626.015625-9.984376 4.484375-10 10v300c.015624 5.515625 4.484374 9.984375 10 10h86.402343c5.515625-.015625 9.984375-4.484375 10-10v-300c.03125-2.644531-1-5.191406-2.859375-7.070312-1.859375-1.878907-4.398437-2.93359425-7.042968-2.929688zm0 0"/></svg>
        </button>
      </transition>

      <video @timeupdate="updateTime" @ended="isPlaying = false" ref="video" :poster="video.poster">
        <source
          v-for="item, i in video.items"
          :src="item.src"
          :type="item.type"
        >
      </video>
      <transition name="controls-fade">
        <div v-show="showControls" class="video__block-controls flex ai-c jc-sb">
          <button class="smalltoggler" @click="toggleVideo">
            <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 232.153 232.153" style="enable-background:new 0 0 232.153 232.153;" xml:space="preserve"><g><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266   c-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267   l154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z" /></g></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="-37 0 320 320.00002"><path d="m96.398438 0h-86.398438c-5.515625.015625-9.984375 4.484375-10 10v300c.015625 5.515625 4.484375 9.984375 10 10h86.398438c5.519531-.015625 9.984374-4.484375 10-10v-300c-.015626-5.515625-4.480469-9.984375-10-10zm0 0"/><path d="m236.898438 0h-86.5c-5.515626.015625-9.984376 4.484375-10 10v300c.015624 5.515625 4.484374 9.984375 10 10h86.402343c5.515625-.015625 9.984375-4.484375 10-10v-300c.03125-2.644531-1-5.191406-2.859375-7.070312-1.859375-1.878907-4.398437-2.93359425-7.042968-2.929688zm0 0"/></svg>
          </button>
          <div class="duration">
            <input @change="handleTimeChange" type="range" min="0" :max="maxDuration" v-model="time" autocomplete="off" role="slider" >
          </div>
          <div class="volume flex ai-c jc-fs">
            <span @click="muteVideo" class="volume-mute">
              <svg v-if="volume > 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 347.182 347.182"><path d="M210.133 0c-4.948 0-9.233 1.809-12.847 5.426L102.213 100.5H27.412c-4.952 0-9.235 1.809-12.85 5.424-3.618 3.621-5.426 7.901-5.426 12.85v109.634c0 4.948 1.809 9.232 5.426 12.847 3.619 3.617 7.901 5.428 12.85 5.428h74.801l95.073 95.077c3.613 3.61 7.898 5.421 12.847 5.421s9.232-1.811 12.854-5.421c3.613-3.617 5.421-7.901 5.421-12.847V18.276c0-4.948-1.808-9.235-5.421-12.851C219.362 1.809 215.081 0 210.133 0zM325.904 133.037c-8.09-12.562-18.788-21.414-32.12-26.551-1.903-.95-4.278-1.427-7.132-1.427-4.949 0-9.233 1.765-12.847 5.282-3.614 3.521-5.428 7.853-5.428 12.991 0 3.997 1.143 7.376 3.429 10.136 2.286 2.762 5.037 5.142 8.281 7.139a147.442 147.442 0 0 1 9.706 6.567c3.237 2.38 5.995 5.758 8.281 10.135 2.279 4.377 3.429 9.801 3.429 16.274 0 6.478-1.149 11.899-3.429 16.279-2.286 4.381-5.044 7.755-8.281 10.141a148.945 148.945 0 0 1-9.706 6.563c-3.244 1.995-5.995 4.38-8.281 7.139-2.286 2.762-3.429 6.139-3.429 10.137 0 5.143 1.813 9.465 5.428 12.99 3.613 3.518 7.897 5.28 12.847 5.28 2.854 0 5.229-.476 7.132-1.424 13.332-5.328 24.03-14.229 32.12-26.689 8.097-12.474 12.142-25.933 12.142-40.402 0-14.473-4.055-27.986-12.142-40.56z"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.528 508.528"><path d="M263.54.116c-5.784-.54-12.554.858-20.531 5.689 0 0-132.533 115.625-138.317 121.314h-72.91C14.239 127.15 0 141.389 0 158.933v194.731c0 17.607 14.239 31.782 31.782 31.782h72.941c5.784 5.753 138.317 117.277 138.317 117.277 7.977 4.799 14.747 6.229 20.531 5.689 11.76-1.112 20.023-10.965 22.534-21.358.095-1.017.095-464.533-.064-465.55C283.563 11.081 275.268 1.228 263.54.116zM447.974 254.28l54.857-54.857c7.596-7.564 7.596-19.864 0-27.428-7.564-7.564-19.864-7.564-27.428 0l-54.857 54.888-54.888-54.888c-7.532-7.564-19.864-7.564-27.397 0-7.564 7.564-7.564 19.864 0 27.428l54.857 54.857-54.857 54.888c-7.564 7.532-7.564 19.864 0 27.396 7.532 7.564 19.864 7.564 27.396 0l54.888-54.857 54.857 54.857c7.564 7.564 19.864 7.564 27.428 0 7.564-7.532 7.564-19.864 0-27.396l-54.856-54.888z"/></svg>
            </span>
            <div class="volume__line">
              <input type="range" min="0" max="1" step="0.01" v-model="volume" autocomplete="off" role="slider" >
            </div>
          </div>
          <button @click="toggleFullScreen" class="fullscreen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.32 513.32"><path d="M177.523 305.853L42.777 440.6v-98.387H0V513.32h171.107v-42.777H74.859l134.746-134.746z"/><path d="M470.543 440.6L72.72 42.777h98.387V0H0v171.107h42.777V72.72L440.6 470.543h-98.387v42.777H513.32V342.213h-42.777z"/><path d="M342.213 0v42.777h100.526L307.992 177.523l29.943 29.944L470.543 74.859v96.248h42.777V0z"/></svg>
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      const video = this.$refs.video;
      video.volume = this.volume;

      setTimeout(() => {
        this.maxDuration = parseInt(video.duration, 10);
      }, 500);
    },
    computed: {
      playerClass() {
        return {
          'playing': this.isPlaying,
          'fullscreen-mode': this.isFullScreen,
          'with-icon': this.video.icon,
          'video__block--faq': this.view === 'PAGE_SERVICES_ITEM',
          'video__block--about': this.view === 'PAGE_ABOUT',
        }
      }
    },
    watch: {
      isPlaying() {
        if (this.isPlaying) {
          this.$refs.video.play();
        } else {
          this.$refs.video.pause();
        }
      },
      volume() {
        this.$refs.video.volume = this.volume;
      }
    },
    methods: {
      toggleVideo() {
        this.isPlaying = !this.isPlaying;
        this.isVideoStarted = true;
      },
      handleTimeChange(e) {
        this.time = e.target.value;
        this.$refs.video.currentTime = this.time;
      },
      muteVideo() {
        this.volume = 0;
      },
      updateTime() {
        this.time = this.$refs.video.currentTime;
      },
      toggleFullScreen() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
          this.isFullScreen = true;

          if (this.$refs.wrap.requestFullscreen) {
            this.$refs.wrap.requestFullscreen();
          } else if (this.$refs.wrap.mozRequestFullScreen) {
            this.$refs.wrap.mozRequestFullScreen();
          } else if (this.$refs.wrap.webkitRequestFullscreen) {
            this.$refs.wrap.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          }
        } else {
          this.isFullScreen = false;

          if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        }

      }
    },
    props: {
      view: {
        type: String,
        required: true
      },
      video: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        isPlaying: false,
        isFullScreen: false,
        volume: 0.5,
        time: 0,
        maxDuration: 0,
        showControls: false,
        isVideoStarted: false,
      }
    }
  }
</script>

<style>
  .video__block video {
    min-width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    max-height: 100%;
    width: auto;
  }

  .video__block.with-icon {
    padding-left: 2rem;
    position: relative;
  }

  .video__block--about {
    transform: translateX(-30%);
    opacity: 0;
    transition: 0.8s all cubic-bezier(.19,1,.22,1);
  }

  .video__block--about.in-viewport,
  .video__block--about.above-viewport {
    transform: translateX(0) !important;
    opacity: 1 !important;
  }

  .video__block-icon {
    position: absolute;
    transform: rotate(-90deg) translate(-50%, -50%);
    left: -3.2rem;
    top: -0.3rem;
    line-height: 1;
    font-size: 0.9375em;
    font-family: 'Futura PT medium';
    letter-spacing: 0.05em;
  }

  .video__block--faq .video__block-inner {
    opacity: 0;
    transition: 1.4s all cubic-bezier(.19,1,.22,1);
    transform: translateX(10%);
  }

  .video__block--faq .video__block-inner.in-viewport {
    opacity: 1;
    transform: translateX(0);
  }

  .video__block--faq .video__block-inner.above-viewport {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    transition: none !important;
  }

  .video__block-icon i {
    display: inline-block;
    width: 1.2rem;
    margin-right: .625rem;
  }

  .video__block-icon p {
    margin-top: 4px;
  }

  .video__block-icon svg {
    display: block;
    width: 100%;
    height: auto;
    fill: #333333;
  }

  .controls-fade-enter-active, .controls-fade-leave-active {
    transition: opacity .5s;
  }
  .controls-fade, .controls-fade-leave-to {
    opacity: 0;
  }

  input[type="range"] {
    -webkit-appearance: none;
    background: transparent;
    border: 0;
    border-radius: 4px;
    color: #fff;
    display: block;
    height: 4px;
    width: 100%;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 0;
    height: 12px;
    width: 12px;
    box-shadow: none;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    margin-top: -4px;
  }

  input[type=range]::-moz-range-thumb {
    border: 0;
    height: 12px;
    box-shadow: none;
    width: 12px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }

  .volume__line {
    flex: 1;
  }

  input[type=range]::-ms-thumb {
    border: 0;
    height: 12px;
    box-shadow: none;
    width: 12px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: none;
    background: #fff;
    border-radius: 4px;
    border: 0;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #fff;
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: none;
    background: #fff;
    border-radius: 4px;
    border: 0;
  }

  input[type=range]::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: none;
    background: #fff;
    border-radius: 4px;
    border: 0;
  }
  input[type=range]::-ms-fill-lower {
    background: #fff;
    border: 0;
    border-radius: 4px;
    box-shadow: none;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #fff;
  }
  input[type=range]::-ms-fill-upper {
    background: #fff;
    border: 0;
    border-radius: 4px;
    box-shadow: none;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #fff;
  }

  .video__block-inner {
    position: relative;
    z-index: 0;
  }


  .volume-mute {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: .6rem;
  }

  .volume-mute svg {
    fill: #fff;
    display: block;
    width: 100%;
    height: auto;
  }

  .volume {
    margin-right: 1rem;
    min-width: 70px;
    max-width: 25%;
  }

  .smalltoggler {
    width: 16px;
    height: 16px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  .fullscreen {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    width: 14px;
    height: 14px;
  }

  .fullscreen svg {
    display: block;
    width: 100%;
    height: auto;
    fill: #fff;
  }

  .duration {
    flex: 1;
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    height: 4px;
    margin: 0 1.5rem;
  }

  .smalltoggler svg {
    display: block;
    width: 100%;
    height: auto;
    fill: #fff;
  }

  .video__block-toggler {
    background-image: linear-gradient( 90deg, rgb(47,139,218) 0%, rgb(0,171,211) 100%);
    background-color: transparent;
    border: 0;
    cursor: pointer;
    border-radius: 50%;
    width: 32px;
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 32px;
    box-shadow: 0px 0px 0px 8px rgba(13, 162, 213, .3);
  }

  .video__block-toggler svg {
    fill: #fff;
    width: 10px;
    height: 10px;
  }

  .video__block-controls {
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    position: absolute;
    background-image: linear-gradient( 360deg, rgba(0,0,0, .5) 0%, rgba(0,0,0,0) 100%);
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 1100px) {
    .video__block-icon p {
      margin-top: 0;
    }

    .video__block-icon {
      left: -3.5rem;
    }
  }

  @media screen and (max-width: 767px) {
    .video__block-icon {
      left: -4rem;
    }
  }

  @media screen and (max-width: 450px) {
    .video__block-icon {
      transform: rotate(0) translateX(-50%);
      bottom: 0;
      top: auto;
      margin-top: 1rem;
      left: 50%;
    }

    .video__block.with-icon {
      padding-left: 0;
      padding-bottom: 2rem;
    }
  }
</style>
