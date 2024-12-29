import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "CoachModal",
  __ssrInlineRender: true,
  props: {
    classname: String,
    engravings: Object,
    initialScores: Object
  },
  emits: ["close", "save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const engravingScores = ref(JSON.parse(JSON.stringify(props.initialScores)));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" }, _attrs))}><div class="bg-white w-full max-w-md rounded-lg shadow-lg p-6"><header class="flex justify-between items-center mb-4"><h2 class="text-xl font-semibold">${ssrInterpolate(__props.classname)}</h2><button class="text-gray-400 hover:text-gray-600"> \u2715 </button></header><div><p class="text-sm text-gray-500 mb-4">\uAC01\uC778\uBCC4 \uC810\uC218\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694:</p><!--[-->`);
      ssrRenderList(__props.engravings, (levels, engraving) => {
        _push(`<div class="mb-4"><h3 class="text-sm font-semibold text-gray-700">${ssrInterpolate(engraving)}</h3><div class="flex items-center space-x-2"><!--[-->`);
        ssrRenderList(levels, (value, level) => {
          _push(`<input type="number" class="border rounded-md px-2 py-1 w-14 text-center"${ssrRenderAttr("value", engravingScores.value[engraving][level])} placeholder="0">`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><footer class="flex justify-end space-x-2"><button class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"> \uCDE8\uC18C </button><button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"> \uC800\uC7A5 </button></footer></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/CoachModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CoachModal-D7GC7YPD.mjs.map
