import __nuxt_component_2 from './Rocket-CjgACXVo.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './Icon-CCYFKLuS.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-Ckepi2zp.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Rocket = __nuxt_component_2;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="space-y-24"><ul class="space-y-2"><h1 class="uppercase text-s font-semibold text-black-400 mb-4">\uC774\uAC8C \uBB34\uC2A8 \uC77C\uC774\uC8E0?</h1><li><a class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"><p class="truncate text-gray-700 dark:text-gray-200"> \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4. </p></a></li><li><a class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"><p class="truncate text-gray-700 dark:text-gray-200"> \uC774\uAC74 \uB9C8\uCE58 404 \uC624\uB958 \uAC19\uAD70\uC694 </p></a></li><li><a class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"><p class="truncate text-gray-700 dark:text-gray-200"> \uB85C\uCF13\uC744 \uD0C0\uACE0 \uB2E4\uB978 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD558\uC138\uC694 </p></a></li>`);
  _push(ssrRenderComponent(_component_Rocket, null, null, _parent));
  _push(`</ul></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-CTtGfi9-.mjs.map
