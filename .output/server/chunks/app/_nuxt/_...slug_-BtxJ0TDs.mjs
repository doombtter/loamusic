import { _ as __nuxt_component_0$1, u as useInjectButtonGroup, a as __nuxt_component_0$2 } from './Button-ZPNOzfvf.mjs';
import { defineComponent, toRef, computed, ref, useSSRContext, watch, watchEffect, mergeProps, unref, inject, withCtx, createVNode, toDisplayString } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { m as defu } from '../../nitro/node-server.mjs';
import { m as mergeConfig, i as input, d as appConfig, e as useUI, l as looseToNumber, _ as _export_sfc, a as __nuxt_component_0$1$1 } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import __nuxt_component_2 from './Rocket-CjgACXVo.mjs';
import { u as useAsyncData, q as queryContent } from './asyncData-D5EHPLCr.mjs';
import { useRoute } from 'vue-router';
import './Icon-CCYFKLuS.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-Ckepi2zp.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-use-fixed-header';
import './preview-CtkYHHDp.mjs';

const avatar = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-full",
  text: "font-medium leading-none text-gray-900 dark:text-white truncate",
  placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
  size: {
    "3xs": "h-4 w-4 text-[8px]",
    "2xs": "h-5 w-5 text-[10px]",
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
    xl: "h-14 w-14 text-xl",
    "2xl": "h-16 w-16 text-2xl",
    "3xl": "h-20 w-20 text-3xl"
  },
  chip: {
    base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
    background: "bg-{color}-500 dark:bg-{color}-400",
    position: {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    size: {
      "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
      "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
      xs: "h-1.5 min-w-[0.375rem] text-[6px] p-px",
      sm: "h-2 min-w-[0.5rem] text-[7px] p-0.5",
      md: "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
      lg: "h-3 min-w-[0.75rem] text-[10px] p-0.5",
      xl: "h-3.5 min-w-[0.875rem] text-[11px] p-1",
      "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
      "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
    }
  },
  icon: {
    base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-2.5 w-2.5",
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
      "2xl": "h-8 w-8",
      "3xl": "h-10 w-10"
    }
  },
  default: {
    size: "sm",
    icon: null,
    chipColor: null,
    chipPosition: "top-right"
  }
};
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke2) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke2());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke2());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke2());
      }, duration);
    });
  };
  return filter;
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
const useFormGroup = (inputProps, config2) => {
  const formBus = inject("form-events", void 0);
  const formGroup = inject("form-group", void 0);
  inject("form-inputs", void 0);
  const inputId = ref(inputProps == null ? void 0 : inputProps.id);
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup == null ? void 0 : formGroup.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup == null ? void 0 : formGroup.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup == null ? void 0 : formGroup.eagerValidation.value)) {
      emitFormEvent("input", formGroup == null ? void 0 : formGroup.name.value);
    }
  }, 300);
  return {
    inputId,
    name: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.name) != null ? _a : formGroup == null ? void 0 : formGroup.name.value;
    }),
    size: computed(() => {
      var _a2, _b;
      var _a;
      const formGroupSize = config2.size[formGroup == null ? void 0 : formGroup.size.value] ? formGroup == null ? void 0 : formGroup.size.value : null;
      return (_b = (_a2 = inputProps == null ? void 0 : inputProps.size) != null ? _a2 : formGroupSize) != null ? _b : (_a = config2 == null ? void 0 : config2.default) == null ? void 0 : _a.size;
    }),
    color: computed(() => {
      var _a;
      return ((_a = formGroup == null ? void 0 : formGroup.error) == null ? void 0 : _a.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.input, input);
const _sfc_main$3 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$1.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$1.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$1.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$1.variant),
          ...Object.values(config$1.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("input", toRef(props, "ui"), config$1, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormInput, size: sizeFormGroup, color, inputId, name } = useFormGroup(props, config$1);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false }));
    const input2 = ref(null);
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number || props.type === "number") {
        value = looseToNumber(value);
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      const value = event.target.value;
      if (modelModifiers.value.lazy) {
        updateInput(value);
      }
      if (modelModifiers.value.trim) {
        event.target.value = value.trim();
      }
    };
    const onBlur = (event) => {
      emitFormBlur();
      emit("blur", event);
    };
    const inputClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.inputClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      input: input2,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    ref: "input",
    name: _ctx.name,
    value: _ctx.modelValue,
    type: _ctx.type,
    required: _ctx.required,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.inputClass
  }, _ctx.attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Input.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const _sfc_main$2 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    src: {
      type: [String, Boolean],
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config.default.icon
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    chipColor: {
      type: String,
      default: () => config.default.chipColor,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    chipPosition: {
      type: String,
      default: () => config.default.chipPosition,
      validator(value) {
        return Object.keys(config.chip.position).includes(value);
      }
    },
    chipText: {
      type: [String, Number],
      default: null
    },
    imgClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("avatar", toRef(props, "ui"), config);
    const url = computed(() => {
      if (typeof props.src === "boolean") {
        return null;
      }
      return props.src;
    });
    const placeholder = computed(() => {
      return (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2);
    });
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        (error.value || !url.value) && ui.value.background,
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.class);
    });
    const imgClass = computed(() => {
      return twMerge(twJoin(
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.imgClass);
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size]
      );
    });
    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll("{color}", props.chipColor)
      );
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$1;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}>`);
  if (_ctx.url && !_ctx.error) {
    _push(`<img${ssrRenderAttrs(mergeProps({
      class: _ctx.imgClass,
      alt: _ctx.alt,
      src: _ctx.url
    }, _ctx.attrs))}>`);
  } else if (_ctx.text) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.text)}">${ssrInterpolate(_ctx.text)}</span>`);
  } else if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else if (_ctx.placeholder) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.placeholder)}">${ssrInterpolate(_ctx.placeholder)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.chipColor) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">${ssrInterpolate(_ctx.chipText)}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Avatar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1$1;
      const _component_UAvatar = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "flex items-end gap-4 group p-2 -m-2 rounded-lg",
        to: __props.project.url,
        target: "_blank",
        external: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-sm"${_scopeId}><h3 class="text-sm font-medium group-hover:text-primary-600"${_scopeId}>${ssrInterpolate(__props.project.name)}</h3><p class="text-gray-400 text-sm"${_scopeId}>${ssrInterpolate(__props.project.description)}</p></div><div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: __props.project.thumbnail,
              ui: { rounded: "rounded z-10 relative" },
              size: "md",
              alt: __props.project.name
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-sm" }, [
                createVNode("h3", { class: "text-sm font-medium group-hover:text-primary-600" }, toDisplayString(__props.project.name), 1),
                createVNode("p", { class: "text-gray-400 text-sm" }, toDisplayString(__props.project.description), 1)
              ]),
              createVNode("div", { class: "flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700" }),
              createVNode(_component_UAvatar, {
                src: __props.project.thumbnail,
                ui: { rounded: "rounded z-10 relative" },
                size: "md",
                alt: __props.project.name
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const URL = "https://api.loavesting.com/";
const searchMusic = async (char, category) => {
  try {
    let body = { "keyword": char, "category": category };
    const result = await $fetch(URL + "api/searchMusic", { method: "POST", body });
    return result;
  } catch (error) {
    throw error;
  }
};
const api = {
  searchMusic
};
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const variable = computed(() => route.params.slug);
    const currentPage = ref(1);
    const pageSize = ref(10);
    const { data, pending } = useAsyncData("api-data", () => {
      if (variable.value[0] === "all") {
        return api.searchMusic(null, null);
      } else {
        return api.searchMusic(null, variable.value[0]);
      }
    });
    const { data: projects } = useAsyncData(
      "projects-all",
      () => queryContent("/loavesting").find()
    );
    const char = ref("");
    const apidata = ref(data.value);
    const isApiLoading = ref(pending.value);
    watchEffect(() => {
      apidata.value = data.value;
      isApiLoading.value = pending.value;
    });
    const search = async () => {
      if (char.value === "" || char.value === null) {
        return;
      }
      isApiLoading.value = true;
      if (variable.value[0] === "all") {
        apidata.value = await api.searchMusic(char.value, null);
      } else {
        apidata.value = await api.searchMusic(char.value, variable.value[0]);
      }
      isApiLoading.value = false;
    };
    const paginatedData = computed(() => {
      var _a;
      const start = (currentPage.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return ((_a = apidata.value) == null ? void 0 : _a.result.slice(start, end)) || [];
    });
    const totalPages = computed(() => {
      var _a;
      return Math.ceil((((_a = apidata.value) == null ? void 0 : _a.result.length) || 0) / pageSize.value);
    });
    const visiblePages = computed(() => {
      const total = totalPages.value;
      const current = currentPage.value;
      const delta = 2;
      const range = [];
      for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
        range.push(i);
      }
      if (current - delta > 2) {
        range.unshift("...");
      }
      if (current + delta < total - 1) {
        range.push("...");
      }
      range.unshift(1);
      if (total > 1) {
        range.push(total);
      }
      return range;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = __nuxt_component_0;
      const _component_UButton = __nuxt_component_0$2;
      const _component_Rocket = __nuxt_component_2;
      const _component_AppProjectCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-4" }, _attrs))}><div class="mb-8"><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UInput, {
        placeholder: variable.value + " \uC5D0\uC11C \uC544\uD2F0\uC2A4\uD2B8 / \uACE1\uBA85 / \uCE74\uD14C\uACE0\uB9AC \uAC80\uC0C9",
        class: "flex-1",
        size: "lg",
        modelValue: char.value,
        "onUpdate:modelValue": ($event) => char.value = $event,
        onKeydown: search
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        label: "\uAC80\uC0C9 \u2192",
        size: "lg",
        color: "black",
        onClick: search
      }, null, _parent));
      _push(`</div></div>`);
      if (isApiLoading.value) {
        _push(`<div><main class="min-h-screen flex justify-center items-center"><p class="text-gray-500">\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4...</p></main></div>`);
      } else if (paginatedData.value && paginatedData.value.length !== 0) {
        _push(`<div><ul class="space-y-4"><!--[-->`);
        ssrRenderList(paginatedData.value, (item) => {
          _push(`<li class="p-4 bg-white rounded-lg shadow-md flex justify-between items-center"><div><h2 class="text-lg font-bold text-gray-600">${ssrInterpolate(item.title)} <span class="text-sm text-gray-500 ml-2">by ${ssrInterpolate(item.artist)}</span></h2><p class="text-gray-600">\uCE74\uD14C\uACE0\uB9AC: ${ssrInterpolate(item.subcategory)}</p></div><p class="text-xl text-gray-700">${ssrInterpolate(item.people)}\uBA85</p></li>`);
        });
        _push(`<!--]--></ul><div class="flex justify-center mt-4 space-x-2"><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"> \uC774\uC804 </button><!--[-->`);
        ssrRenderList(visiblePages.value, (page) => {
          _push(`<button class="${ssrRenderClass([{ "bg-gray-400": currentPage.value === page }, "px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"])}"${ssrIncludeBooleanAttr(page === "...") ? " disabled" : ""}>${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"> \uB2E4\uC74C </button></div></div>`);
      } else {
        _push(`<div><main class="min-h-screen"><div class="space-y-8"><h1 class="uppercase text-s font-semibold text-black-400 mb-4">\uC774\uAC8C \uBB34\uC2A8 \uC77C\uC774\uC8E0?</h1><ul class="space-y-2"><li><a class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"><p class="truncate text-gray-700 dark:text-gray-200">\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p></a></li><li><a class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"><p class="truncate text-gray-700 dark:text-gray-200">\uD639\uC740, \uB85C\uC544\uBCA0\uC2A4\uD305 API \uC11C\uBC84\uC5D0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.</p></a></li><li><a class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"><p class="truncate text-gray-700 dark:text-gray-200">\uC5B4\uCA54 \uC218 \uC5C6\uC774 \uADC0\uC5EC\uC6B4 \uB85C\uCF13\uC744 \uBD10\uC57C\uD560\uAC70\uAC19\uC544\uC694</p></a></li>`);
        _push(ssrRenderComponent(_component_Rocket, null, null, _parent));
        _push(`</ul><div><h1 class="uppercase text-s font-semibold text-black-400 mb-4">\uC544\uB2C8\uBA74...</h1><!--[-->`);
        ssrRenderList(unref(projects), (project, id) => {
          _push(ssrRenderComponent(_component_AppProjectCard, {
            key: id,
            project
          }, null, _parent));
        });
        _push(`<!--]--></div></div></main></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-BtxJ0TDs.mjs.map
