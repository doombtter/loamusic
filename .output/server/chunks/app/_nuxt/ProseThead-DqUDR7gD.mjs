import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
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
  _push(`<thead${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</thead>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseThead = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ProseThead as default };
//# sourceMappingURL=ProseThead-DqUDR7gD.mjs.map
