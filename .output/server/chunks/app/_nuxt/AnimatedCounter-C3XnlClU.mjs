import { a as __nuxt_component_0 } from './Button-ZPNOzfvf.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext, watch, nextTick, computed, getCurrentScope, onScopeDispose, unref, getCurrentInstance } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './Icon-CCYFKLuS.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-Ckepi2zp.mjs';
import 'tailwind-merge';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-use-fixed-header';

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const noop = () => {
};
function watchOnce(source, cb, options) {
  const stop = watch(source, (...args) => {
    nextTick(() => stop());
    return cb(...args);
  }, options);
  return stop;
}
const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useMounted() {
  const isMounted = ref(false);
  getCurrentInstance();
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0,
    window: window2 = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window2 && "IntersectionObserver" in window2);
  const targets = computed(() => {
    const _target = toValue(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop;
  const isActive = ref(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = noop;
      };
    },
    { immediate, flush: "post" }
  ) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}
function useElementVisibility(element, options = {}) {
  const { window: window2 = defaultWindow, scrollTarget, threshold = 0 } = options;
  const elementIsVisible = ref(false);
  useIntersectionObserver(
    element,
    (intersectionObserverEntries) => {
      let isIntersecting = elementIsVisible.value;
      let latestTime = 0;
      for (const entry of intersectionObserverEntries) {
        if (entry.time >= latestTime) {
          latestTime = entry.time;
          isIntersecting = entry.isIntersecting;
        }
      }
      elementIsVisible.value = isIntersecting;
    },
    {
      root: scrollTarget,
      window: window2,
      threshold
    }
  );
  return elementIsVisible;
}
const _sfc_main = {
  __name: "AnimatedCounter",
  __ssrInlineRender: true,
  props: {
    targetNumber: {
      type: Number,
      required: true,
      default: 1234
    }
  },
  setup(__props) {
    const target = ref(null);
    const targetIsVisible = useElementVisibility(target);
    const props = __props;
    const startCounter = () => {
      const counter = (void 0).querySelector(".animate-counter");
      counter.animate([{ "--num": 0 }, { "--num": props.targetNumber }], {
        duration: 1e3,
        easing: "ease-out",
        fill: "forwards"
      });
    };
    watchOnce(targetIsVisible, () => {
      startCounter();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0;
      const _cssVars = { style: {
        "--40ec1fa6": props.targetNumber
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-8 flex items-center justify-center flex-col" }, _attrs, _cssVars))} data-v-7841ca47><span class="flex tabular-nums text-slate-900 dark:text-white text-5xl font-extrabold mb-2 [counter-set:_num_var(--num)] before:content-[counter(num)] animate-counter" data-v-7841ca47><span class="sr-only" data-v-7841ca47>${ssrInterpolate(__props.targetNumber)}</span>+ </span>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "white",
        onClick: startCounter,
        class: "mt-4",
        size: "xs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start Counter `);
          } else {
            return [
              createTextVNode(" Start Counter ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-xs mt-2 text-gray-500" data-v-7841ca47> or start the counter when this component is in the viewport </p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/AnimatedCounter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AnimatedCounter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7841ca47"]]);

export { AnimatedCounter as default };
//# sourceMappingURL=AnimatedCounter-C3XnlClU.mjs.map
