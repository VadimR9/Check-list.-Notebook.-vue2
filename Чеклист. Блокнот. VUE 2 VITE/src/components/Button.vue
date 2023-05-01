<template>
  <a v-if="link" class="btn btn_link" :href="link">{{ label }}</a>
  <button
    v-else
    :class="[
      'btn',
      `btn_${color}`,
      { btn_rounded: rounded },
      { btn_outlined: outlined },
      { btn_icon: icon },
      { btn_small: size === 'small' },
      { btn_large: size === 'large' },
      { btn_circle: size === 'circle' },
      { btn_smallMobile: smallMobile },
    ]"
    :disabled="disabled"
    @click="clickOnButton(), timerOn()"
  >
    <span v-if="icon">
      <i :class="`icon-${icon}`"></i>
    </span>

    <span v-else-if="timer">
      {{ label }} <b>{{ secondsToTime }}</b>
    </span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Button",
    },
    color: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      default: "normal",
    },
    timer: {
      type: Number,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    smallMobile: {
      type: String,
      default: false,
    },
  },

  emits: ["timer-on", "click"],

  methods: {
    clickOnButton() {
      this.$emit("click");
    },
    timerOn() {
      this.$emit("timer-on");
    },
  },
  computed: {
    secondsToTime() {
      console.log(this.timer);
      const h = Math.floor(this.timer / 3600);
      const m = Math.floor((this.timer % 3600) / 60);
      const s = Math.floor((this.timer % 3600) % 60);
      const hDisplay = h > 0 ? `${(h < 10 ? 0 : "") + h}:` : "";
      const mDisplay = m > 0 ? `${m}:` : "0:";
      const sDisplay = (s < 10 ? "0" : "") + s;
      return hDisplay + mDisplay + sDisplay;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  text-transform: uppercase;
  max-width: 326px;
  padding: 5px 20px;
  color: #ffffff;
  text-align: center;
  font-family: "PhosphateSolid";
  font-size: 15px;
  line-height: 24px;
  font-weight: 600;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
  margin: 10px;

  // mask-image: url(frame.svg);
  // -webkit-mask-image: url(frame.svg);

  // -webkit-mask-image: url(frame.svg), skyblue;
  // mask-image: url(frame.svg), skyblue;

  // mask-repeat: no-repeat;
  // -webkit-mask-repeat: no-repeat;
  // mask-size: cover;
  // -webkit-mask-size: cover;
  b {
    font-family: "PhosphateSolid";
    background: #df3f3e;
    color: #fff;
    font-size: 18px;
    line-height: 24px;
    padding: 1px 6px;
    border-radius: 6px;
    margin-left: 6px;
    font-weight: 400;
  }
  &_smallMobile {
    @media screen and (max-width: 500px) {
      font-size: 10px;
      margin: 3px;
      padding: 4px 8px;
    }
  }
  &_primary {
    background: var(--primary);
    border: 1px solid var(--primary);
    &:enabled:hover {
      background: var(--primary-hover);
    }
  }
  &_second {
    background: var(--second);
    border: 1px solid var(--second);
    &:enabled:hover {
      background: var(--second-hover);
    }
  }
  &_success {
    background: var(--success);
    border: 1px solid var(--success);
    &:enabled:hover {
      background: var(--success-hover);
    }
  }
  &_info {
    background: var(--info);
    border: 1px solid var(--info);
    &:enabled:hover {
      background: var(--info-hover);
    }
  }
  &_warning {
    background: var(--warning);
    border: 1px solid var(--warning);
    &:enabled:hover {
      background: var(--warning-hover);
    }
  }
  &_danger {
    background: var(--danger);
    border: 1px solid var(--danger);
    &:enabled:hover {
      background: var(--danger-hover);
    }
  }
  &_action {
    background: var(--action);
    border: 1px solid var(--action);
    &:enabled:hover {
      background: var(--action-hover);
    }
  }
  &_green {
    background: var(--green);
    border: 1px solid var(--green);
    &:enabled:hover {
      background: var(--green-hover);
    }
  }
  &_transparent {
    background: var(--transparent);
    border: 1px solid var(--transparentgreen);
    &:enabled:hover {
      background: var(--transparent-hover);
    }
  }
  &:disabled {
    background: #efefef;
    color: #767679;
    // opacity: 0.6;
    cursor: default;
  }

  &_icon {
    padding: 0;
    width: 60px;
    height: 60px;
    border-radius: 25%;
    font-size: 25px;
    margin: 0;

    mask-image: url(social.svg);
    -webkit-mask-image: url(social.svg);
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: cover;
    -webkit-mask-size: cover;
  }
  &_circle {
    font-size: 12px;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  &_small {
    font-size: 20px;
    padding: 0;
    width: 52px;
    height: 52px;
    border-radius: 25%;
  }
  &_large {
    font-size: 25px;
    padding: 0;
    width: 30px;
    height: 30px;
    margin-bottom: 28px;
  }
  &_link {
    display: block;
    border: 0px;
    border-radius: 0;
    text-transform: none;
    background-color: #ffffff00;
    text-decoration-line: underline;
    font-family: "Nunito";
    font-style: normal;
    color: #767679;
    font-size: 16px;
    padding: 0;
    max-width: unset;
    &:hover {
      color: #c4296c;
      background-color: #00000000;
    }
  }
}
</style>
