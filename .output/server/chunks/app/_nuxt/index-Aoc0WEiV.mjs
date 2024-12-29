import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext, mergeProps, defineComponent, withCtx, createVNode, toDisplayString, ref } from 'vue';
import { b as useSeoMeta, a as __nuxt_component_0$1 } from '../server.mjs';
import __nuxt_component_0 from './Icon-CCYFKLuS.mjs';
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
import 'tailwind-merge';
import 'vue-use-fixed-header';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-Ckepi2zp.mjs';

const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">${ssrInterpolate(__props.title)}</h1><p class="mt-6 text-base text-gray-600 dark:text-gray-400">${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        name: "Discord",
        url: "https://discord.gg/cw7qArVxjz",
        icon: "mdi:discord"
      },
      {
        name: "LOAVESTING",
        url: "https://loavesting.com",
        icon: "mdi:github"
      },
      {
        name: "KakaoTalk",
        url: "https://open.kakao.com/o/sjrp00Ug",
        icon: "mdi:message"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">Social Links</h2><div class="space-y-5"><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.icon,
          to: link.url,
          target: "_blank",
          external: "",
          class: "flex items-end gap-4 dark:hover:text-gray-300 group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm"${_scopeId}>${ssrInterpolate(link.name)}</span><div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: link.icon,
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "text-sm" }, toDisplayString(link.name), 1),
                createVNode("div", { class: "flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700" }),
                createVNode(_component_Icon, {
                  name: link.icon,
                  class: "w-6 h-6"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/SocialLinks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "NoticeComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const notices = ref([
      {
        id: 1,
        title: "\uC81C\uBCF4 \uBC14\uB78C!",
        content: "\uC81C\uBCF4 \uBC14\uB78C\uC774\uB77C\uB294 \uB2E8\uC5B4\uB97C \uD655\uC778\uD55C\uB2E4\uBA74, \uC18C\uC15C \uB9C1\uD06C\uB97C \uD1B5\uD574 \uC81C\uBCF4\uD574\uC8FC\uC138\uC694",
        date: "2024-12-27"
      },
      {
        id: 2,
        title: "\uBC84\uADF8 \uBC1C\uACAC!",
        content: "\uC0AC\uC774\uD2B8 \uB0B4 \uBC84\uADF8\uB098 \uAC74\uC758 \uC0AC\uD56D\uC774 \uC788\uB2E4\uBA74, \uC18C\uC15C \uB9C1\uD06C\uB97C \uD1B5\uD574 \uC5F0\uB77D\uC8FC\uC138\uC694",
        date: "2024-12-26"
      },
      {
        id: 3,
        title: "\uB370\uC774\uD130 \uAC2F\uC218?",
        content: "\uD604\uC7AC \uB4F1\uB85D\uB41C \uB370\uC774\uD130 \uAC2F\uC218\uB294 \uAC1C \uC785\uB2C8\uB2E4.",
        date: "2024-12-26"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white-100 p-4 rounded-lg shadow-md mb-4" }, _attrs))}><ul class="mt-2 space-y-2"><!--[-->`);
      ssrRenderList(notices.value, (notice) => {
        _push(`<li class="bg-white p-2 rounded-lg shadow"><h3 class="text-md font-semibold">${ssrInterpolate(notice.title)}</h3><p class="text-sm text-gray-700">${ssrInterpolate(notice.content)}</p></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/NoticeComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const description = "\uD3B8\uB9AC\uD55C \uB85C\uC2A4\uD2B8\uC544\uD06C \uC545\uBCF4\uCC3E\uAE30";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\uB85C\uC544\uBBA4\uC9C1",
      description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$3;
      const _component_HomeSocialLinks = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        class: "mb-12",
        title: "\uB85C\uC544\uBBA4\uC9C1",
        description
      }, null, _parent));
      _push(`<div class="space-y-24">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeSocialLinks, null, null, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Aoc0WEiV.mjs.map
