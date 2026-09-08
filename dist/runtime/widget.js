System.register(["esri/widgets/Editor","jimu-arcgis","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "esri/widgets/Editor"
/*!**************************************!*\
  !*** external "esri/widgets/Editor" ***!
  \**************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__;

/***/ },

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = (window.jimuConfig && window.jimuConfig.baseUrl) || '';

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***************************************************************!*\
  !*** ./your-extensions/widgets/editor/src/runtime/widget.tsx ***!
  \***************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_widgets_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/widgets/Editor */ "esri/widgets/Editor");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */



class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.myRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.rebuildToken = 0;
        this.destroyEditor = () => {
            if (this.state.currentWidget) {
                try {
                    this.state.currentWidget.destroy();
                }
                catch ( /* noop */_a) { /* noop */ }
            }
        };
        this.waitForDataSource = (id, timeoutMs = 15000) => {
            const dsm = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
            const existing = dsm.getDataSource(id);
            if (existing)
                return Promise.resolve(existing);
            return new Promise(resolve => {
                const start = Date.now();
                const timer = setInterval(() => {
                    const ds = dsm.getDataSource(id);
                    if (ds) {
                        clearInterval(timer);
                        resolve(ds);
                    }
                    else if (Date.now() - start > timeoutMs) {
                        clearInterval(timer);
                        resolve(null);
                    }
                }, 250);
            });
        };
        this.resolveFieldName = (layer, configuredName) => {
            var _a, _b, _c, _d;
            if (!configuredName)
                return null;
            const directMatch = (_b = (_a = layer === null || layer === void 0 ? void 0 : layer.fieldsIndex) === null || _a === void 0 ? void 0 : _a.get) === null || _b === void 0 ? void 0 : _b.call(_a, configuredName);
            if (directMatch)
                return directMatch.name;
            const candidates = configuredName.split(/[./]/).filter(Boolean);
            for (let index = candidates.length - 1; index >= 0; index--) {
                const candidate = candidates[index];
                const field = (_d = (_c = layer === null || layer === void 0 ? void 0 : layer.fieldsIndex) === null || _c === void 0 ? void 0 : _c.get) === null || _d === void 0 ? void 0 : _d.call(_c, candidate);
                if (field)
                    return field.name;
            }
            return null;
        };
        this.buildFormTemplate = (layer, layerCfg) => {
            const fieldsCfg = (layerCfg === null || layerCfg === void 0 ? void 0 : layerCfg.fields) || [];
            if (fieldsCfg.length === 0)
                return undefined;
            const expressionInfos = [];
            const elements = [];
            let hasNonEditable = false;
            let hasRequired = false;
            for (const f of fieldsCfg) {
                const fieldName = this.resolveFieldName(layer, f === null || f === void 0 ? void 0 : f.name);
                if (!fieldName)
                    continue;
                if ((f === null || f === void 0 ? void 0 : f.visible) === false)
                    continue;
                const element = {
                    type: 'field',
                    fieldName,
                    label: ((f === null || f === void 0 ? void 0 : f.label) && String(f.label).trim()) || fieldName
                };
                if ((f === null || f === void 0 ? void 0 : f.editable) === false) {
                    element.editableExpression = 'expr_false';
                    hasNonEditable = true;
                }
                if ((f === null || f === void 0 ? void 0 : f.required) === true) {
                    element.requiredExpression = 'expr_true';
                    hasRequired = true;
                }
                elements.push(element);
            }
            if (elements.length === 0)
                return undefined;
            if (hasNonEditable) {
                expressionInfos.push({ name: 'expr_false', expression: 'false', returnType: 'boolean' });
            }
            if (hasRequired) {
                expressionInfos.push({ name: 'expr_true', expression: 'true', returnType: 'boolean' });
            }
            const formTemplate = { elements };
            if (expressionInfos.length > 0)
                formTemplate.expressionInfos = expressionInfos;
            return formTemplate;
        };
        this.buildLayerInfos = (jmv) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            const cfgLayers = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.layers) || [];
            const cfgById = new Map();
            // Resolve each configured Feature Layer via its data source
            for (const layerCfg of cfgLayers) {
                const uds = layerCfg.useDataSource;
                if (!(uds === null || uds === void 0 ? void 0 : uds.dataSourceId))
                    continue;
                const ds = yield this.waitForDataSource(uds.dataSourceId);
                const layer = ds ? ds.layer : null;
                if (!layer) {
                    console.warn('[editor] data source / layer unavailable:', uds.dataSourceId);
                    continue;
                }
                if (typeof layer.load === 'function') {
                    try {
                        yield layer.load();
                    }
                    catch ( /* noop */_f) { /* noop */ }
                }
                cfgById.set(layer.id, { layer, layerCfg });
            }
            // Walk every editable Feature Layer in the map. Configured ones are enabled
            // with the user's fieldConfig; every other editable layer is explicitly
            // disabled so it does not appear in the Editor UI.
            const infos = [];
            const map = (_b = jmv === null || jmv === void 0 ? void 0 : jmv.view) === null || _b === void 0 ? void 0 : _b.map;
            const allLayers = ((_d = (_c = map === null || map === void 0 ? void 0 : map.allLayers) === null || _c === void 0 ? void 0 : _c.toArray) === null || _d === void 0 ? void 0 : _d.call(_c)) || [];
            for (const layer of allLayers) {
                if ((layer === null || layer === void 0 ? void 0 : layer.type) !== 'feature')
                    continue;
                const caps = (_e = layer === null || layer === void 0 ? void 0 : layer.capabilities) === null || _e === void 0 ? void 0 : _e.operations;
                const isEditable = !!((caps === null || caps === void 0 ? void 0 : caps.supportsAdd) || (caps === null || caps === void 0 ? void 0 : caps.supportsUpdate) || (caps === null || caps === void 0 ? void 0 : caps.supportsDelete));
                if (!isEditable)
                    continue;
                const match = cfgById.get(layer.id);
                if (match) {
                    const formTemplate = this.buildFormTemplate(layer, match.layerCfg);
                    infos.push({
                        layer,
                        enabled: true,
                        addEnabled: true,
                        updateEnabled: true,
                        deleteEnabled: true,
                        formTemplate
                    });
                }
                else {
                    infos.push({ layer, enabled: false });
                }
            }
            return infos.length > 0 ? infos : null;
        });
        this.createEditor = () => __awaiter(this, void 0, void 0, function* () {
            const token = ++this.rebuildToken;
            this.destroyEditor();
            if (!this.state.jimuMapView || !this.myRef.current)
                return;
            const container = document.createElement('div');
            container.style.height = '100%';
            this.myRef.current.innerHTML = '';
            this.myRef.current.appendChild(container);
            const layerInfos = yield this.buildLayerInfos(this.state.jimuMapView);
            if (token !== this.rebuildToken)
                return;
            const editorProps = { view: this.state.jimuMapView.view, container };
            if (layerInfos)
                editorProps.layerInfos = layerInfos;
            const newEditor = new esri_widgets_Editor__WEBPACK_IMPORTED_MODULE_2__["default"](editorProps);
            this.setState({ currentWidget: newEditor });
        });
        this.activeViewChangeHandler = (jmv) => __awaiter(this, void 0, void 0, function* () {
            this.destroyEditor();
            if (!jmv) {
                this.setState({ jimuMapView: null, currentWidget: null });
                return;
            }
            this.setState({ jimuMapView: jmv }, () => { this.createEditor(); });
        });
        this.state = { jimuMapView: null, currentWidget: null };
    }
    componentDidUpdate(prevProps) {
        if (this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 0) {
            this.destroyEditor();
            return;
        }
        if (prevProps.config !== this.props.config && this.state.jimuMapView) {
            this.createEditor();
        }
    }
    componentWillUnmount() {
        this.rebuildToken++;
        this.destroyEditor();
    }
    render() {
        var _a;
        const mapId = (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0];
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-js-api-editor", style: { height: '100%', display: 'flex', flexDirection: 'column' } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: this.myRef, style: { flex: 1, minHeight: 0, overflow: 'auto' } }),
            mapId
                ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: mapId, onActiveViewChange: this.activeViewChangeHandler }))
                : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { padding: 8, margin: 0 } }, "Please select a map."))));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9lZGl0b3IvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDJDQUEyQywwQ0FBMEM7V0FDckYsTUFBTTtXQUNOLDJDQUEyQyxnQ0FBZ0M7V0FDM0U7V0FDQSxLQUFLLHlCQUF5QjtXQUM5QjtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsMENBQTBDLHdDQUF3QztXQUNsRjtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3RCQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmhGLGVBQWU7QUFDK0Q7QUFDYztBQUNwRDtBQVF6QixNQUFNLE1BQU8sU0FBUSw0Q0FBSyxDQUFDLGFBQThDO0lBSXRGLFlBQVksS0FBSztRQUNmLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFKTixVQUFLLEdBQUcsNENBQUssQ0FBQyxTQUFTLEVBQWtCO1FBQ3pDLGlCQUFZLEdBQUcsQ0FBQztRQU9o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SSxDQUFDLFlBQVksRUFBRTtRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFO0lBQ3RCLENBQUM7SUFFRCxNQUFNOztRQUNKLE1BQU0sS0FBSyxHQUFHLFVBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUNMLHdEQUNFLFNBQVMsRUFBQyxzQkFBc0IsRUFDaEMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUU7WUFFbkUsd0RBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBSTtZQUMzRSxLQUFLO2dCQUNKLENBQUMsQ0FBQyxDQUNBLCtDQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsS0FBSyxFQUNyQixrQkFBa0IsRUFBRSxJQUFJLENBQUMsdUJBQXVCLEdBQ2hELENBQ0Q7Z0JBQ0gsQ0FBQyxDQUFDLENBQ0Esc0RBQUcsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLDJCQUEwQixDQUM1RCxDQUNELENBQ1A7SUFDSCxDQUFDO0NBQ0Y7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL0VkaXRvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZWRpdG9yL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19FZGl0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyL3ZhbHVlIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRpZihBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHdoaWxlKGkgPCBkZWZpbml0aW9uLmxlbmd0aCkge1xuXHRcdFx0dmFyIGtleSA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdHZhciBiaW5kaW5nID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdGlmKGJpbmRpbmcgPT09IDApIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiBkZWZpbml0aW9uW2krK10gfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGJpbmRpbmcgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihiaW5kaW5nID09PSAwKSB7IGkrKzsgfVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gKHdpbmRvdy5qaW11Q29uZmlnICYmIHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmwpIHx8ICcnXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBBbGxXaWRnZXRQcm9wcywganN4LCBSZWFjdCwgRGF0YVNvdXJjZU1hbmFnZXIgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldywgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IEVkaXRvciBmcm9tICdlc3JpL3dpZGdldHMvRWRpdG9yJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3XG4gIGN1cnJlbnRXaWRnZXQ6IEVkaXRvclxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiwgU3RhdGU+IHtcbiAgcHJpdmF0ZSBteVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKVxuICBwcml2YXRlIHJlYnVpbGRUb2tlbiA9IDBcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7IGppbXVNYXBWaWV3OiBudWxsLCBjdXJyZW50V2lkZ2V0OiBudWxsIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUVkaXRvciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50V2lkZ2V0KSB7XG4gICAgICB0cnkgeyB0aGlzLnN0YXRlLmN1cnJlbnRXaWRnZXQuZGVzdHJveSgpIH0gY2F0Y2ggeyAvKiBub29wICovIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdhaXRGb3JEYXRhU291cmNlID0gKGlkOiBzdHJpbmcsIHRpbWVvdXRNcyA9IDE1MDAwKTogUHJvbWlzZTxGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgbnVsbD4gPT4ge1xuICAgIGNvbnN0IGRzbSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICBjb25zdCBleGlzdGluZyA9IGRzbS5nZXREYXRhU291cmNlKGlkKSBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlXG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGV4aXN0aW5nKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgZHMgPSBkc20uZ2V0RGF0YVNvdXJjZShpZCkgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZVxuICAgICAgICBpZiAoZHMpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgICAgIHJlc29sdmUoZHMpXG4gICAgICAgIH0gZWxzZSBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dE1zKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgICAgICByZXNvbHZlKG51bGwpXG4gICAgICAgIH1cbiAgICAgIH0sIDI1MClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlRmllbGROYW1lID0gKGxheWVyOiBhbnksIGNvbmZpZ3VyZWROYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgICBpZiAoIWNvbmZpZ3VyZWROYW1lKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgZGlyZWN0TWF0Y2ggPSBsYXllcj8uZmllbGRzSW5kZXg/LmdldD8uKGNvbmZpZ3VyZWROYW1lKVxuICAgIGlmIChkaXJlY3RNYXRjaCkgcmV0dXJuIGRpcmVjdE1hdGNoLm5hbWVcblxuICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBjb25maWd1cmVkTmFtZS5zcGxpdCgvWy4vXS8pLmZpbHRlcihCb29sZWFuKVxuICAgIGZvciAobGV0IGluZGV4ID0gY2FuZGlkYXRlcy5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICBjb25zdCBjYW5kaWRhdGUgPSBjYW5kaWRhdGVzW2luZGV4XVxuICAgICAgY29uc3QgZmllbGQgPSBsYXllcj8uZmllbGRzSW5kZXg/LmdldD8uKGNhbmRpZGF0ZSlcbiAgICAgIGlmIChmaWVsZCkgcmV0dXJuIGZpZWxkLm5hbWVcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEZvcm1UZW1wbGF0ZSA9IChsYXllcjogYW55LCBsYXllckNmZzogYW55KTogYW55ID0+IHtcbiAgICBjb25zdCBmaWVsZHNDZmc6IGFueVtdID0gKGxheWVyQ2ZnPy5maWVsZHMgYXMgYW55W10pIHx8IFtdXG4gICAgaWYgKGZpZWxkc0NmZy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWRcblxuICAgIGNvbnN0IGV4cHJlc3Npb25JbmZvczogYW55W10gPSBbXVxuICAgIGNvbnN0IGVsZW1lbnRzOiBhbnlbXSA9IFtdXG4gICAgbGV0IGhhc05vbkVkaXRhYmxlID0gZmFsc2VcbiAgICBsZXQgaGFzUmVxdWlyZWQgPSBmYWxzZVxuXG4gICAgZm9yIChjb25zdCBmIG9mIGZpZWxkc0NmZykge1xuICAgICAgY29uc3QgZmllbGROYW1lID0gdGhpcy5yZXNvbHZlRmllbGROYW1lKGxheWVyLCBmPy5uYW1lKVxuICAgICAgaWYgKCFmaWVsZE5hbWUpIGNvbnRpbnVlXG4gICAgICBpZiAoZj8udmlzaWJsZSA9PT0gZmFsc2UpIGNvbnRpbnVlXG5cbiAgICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IHtcbiAgICAgICAgdHlwZTogJ2ZpZWxkJyxcbiAgICAgICAgZmllbGROYW1lLFxuICAgICAgICBsYWJlbDogKGY/LmxhYmVsICYmIFN0cmluZyhmLmxhYmVsKS50cmltKCkpIHx8IGZpZWxkTmFtZVxuICAgICAgfVxuXG4gICAgICBpZiAoZj8uZWRpdGFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuZWRpdGFibGVFeHByZXNzaW9uID0gJ2V4cHJfZmFsc2UnXG4gICAgICAgIGhhc05vbkVkaXRhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKGY/LnJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICAgIGVsZW1lbnQucmVxdWlyZWRFeHByZXNzaW9uID0gJ2V4cHJfdHJ1ZSdcbiAgICAgICAgaGFzUmVxdWlyZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudClcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICBpZiAoaGFzTm9uRWRpdGFibGUpIHtcbiAgICAgIGV4cHJlc3Npb25JbmZvcy5wdXNoKHsgbmFtZTogJ2V4cHJfZmFsc2UnLCBleHByZXNzaW9uOiAnZmFsc2UnLCByZXR1cm5UeXBlOiAnYm9vbGVhbicgfSlcbiAgICB9XG4gICAgaWYgKGhhc1JlcXVpcmVkKSB7XG4gICAgICBleHByZXNzaW9uSW5mb3MucHVzaCh7IG5hbWU6ICdleHByX3RydWUnLCBleHByZXNzaW9uOiAndHJ1ZScsIHJldHVyblR5cGU6ICdib29sZWFuJyB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZvcm1UZW1wbGF0ZTogYW55ID0geyBlbGVtZW50cyB9XG4gICAgaWYgKGV4cHJlc3Npb25JbmZvcy5sZW5ndGggPiAwKSBmb3JtVGVtcGxhdGUuZXhwcmVzc2lvbkluZm9zID0gZXhwcmVzc2lvbkluZm9zXG4gICAgcmV0dXJuIGZvcm1UZW1wbGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZExheWVySW5mb3MgPSBhc3luYyAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIGNvbnN0IGNmZ0xheWVycyA9ICh0aGlzLnByb3BzLmNvbmZpZz8ubGF5ZXJzIGFzIGFueSkgfHwgW11cbiAgICBjb25zdCBjZmdCeUlkID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKVxuXG4gICAgLy8gUmVzb2x2ZSBlYWNoIGNvbmZpZ3VyZWQgRmVhdHVyZSBMYXllciB2aWEgaXRzIGRhdGEgc291cmNlXG4gICAgZm9yIChjb25zdCBsYXllckNmZyBvZiBjZmdMYXllcnMpIHtcbiAgICAgIGNvbnN0IHVkcyA9IGxheWVyQ2ZnLnVzZURhdGFTb3VyY2VcbiAgICAgIGlmICghdWRzPy5kYXRhU291cmNlSWQpIGNvbnRpbnVlXG4gICAgICBjb25zdCBkcyA9IGF3YWl0IHRoaXMud2FpdEZvckRhdGFTb3VyY2UodWRzLmRhdGFTb3VyY2VJZClcbiAgICAgIGNvbnN0IGxheWVyOiBhbnkgPSBkcyA/IChkcyBhcyBhbnkpLmxheWVyIDogbnVsbFxuICAgICAgaWYgKCFsYXllcikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tlZGl0b3JdIGRhdGEgc291cmNlIC8gbGF5ZXIgdW5hdmFpbGFibGU6JywgdWRzLmRhdGFTb3VyY2VJZClcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIubG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cnkgeyBhd2FpdCBsYXllci5sb2FkKCkgfSBjYXRjaCB7IC8qIG5vb3AgKi8gfVxuICAgICAgfVxuICAgICAgY2ZnQnlJZC5zZXQobGF5ZXIuaWQsIHsgbGF5ZXIsIGxheWVyQ2ZnIH0pXG4gICAgfVxuXG4gICAgLy8gV2FsayBldmVyeSBlZGl0YWJsZSBGZWF0dXJlIExheWVyIGluIHRoZSBtYXAuIENvbmZpZ3VyZWQgb25lcyBhcmUgZW5hYmxlZFxuICAgIC8vIHdpdGggdGhlIHVzZXIncyBmaWVsZENvbmZpZzsgZXZlcnkgb3RoZXIgZWRpdGFibGUgbGF5ZXIgaXMgZXhwbGljaXRseVxuICAgIC8vIGRpc2FibGVkIHNvIGl0IGRvZXMgbm90IGFwcGVhciBpbiB0aGUgRWRpdG9yIFVJLlxuICAgIGNvbnN0IGluZm9zOiBhbnlbXSA9IFtdXG4gICAgY29uc3QgbWFwOiBhbnkgPSBqbXY/LnZpZXc/Lm1hcFxuICAgIGNvbnN0IGFsbExheWVyczogYW55W10gPSBtYXA/LmFsbExheWVycz8udG9BcnJheT8uKCkgfHwgW11cblxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgYWxsTGF5ZXJzKSB7XG4gICAgICBpZiAobGF5ZXI/LnR5cGUgIT09ICdmZWF0dXJlJykgY29udGludWVcbiAgICAgIGNvbnN0IGNhcHMgPSBsYXllcj8uY2FwYWJpbGl0aWVzPy5vcGVyYXRpb25zXG4gICAgICBjb25zdCBpc0VkaXRhYmxlID0gISEoY2Fwcz8uc3VwcG9ydHNBZGQgfHwgY2Fwcz8uc3VwcG9ydHNVcGRhdGUgfHwgY2Fwcz8uc3VwcG9ydHNEZWxldGUpXG4gICAgICBpZiAoIWlzRWRpdGFibGUpIGNvbnRpbnVlXG5cbiAgICAgIGNvbnN0IG1hdGNoID0gY2ZnQnlJZC5nZXQobGF5ZXIuaWQpXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29uc3QgZm9ybVRlbXBsYXRlID0gdGhpcy5idWlsZEZvcm1UZW1wbGF0ZShsYXllciwgbWF0Y2gubGF5ZXJDZmcpXG4gICAgICAgIGluZm9zLnB1c2goe1xuICAgICAgICAgIGxheWVyLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgYWRkRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICB1cGRhdGVFbmFibGVkOiB0cnVlLFxuICAgICAgICAgIGRlbGV0ZUVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgZm9ybVRlbXBsYXRlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvcy5wdXNoKHsgbGF5ZXIsIGVuYWJsZWQ6IGZhbHNlIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm9zLmxlbmd0aCA+IDAgPyBpbmZvcyA6IG51bGxcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRWRpdG9yID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gKyt0aGlzLnJlYnVpbGRUb2tlblxuICAgIHRoaXMuZGVzdHJveUVkaXRvcigpXG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcgfHwgIXRoaXMubXlSZWYuY3VycmVudCkgcmV0dXJuXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcbiAgICB0aGlzLm15UmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gJydcbiAgICB0aGlzLm15UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuXG4gICAgY29uc3QgbGF5ZXJJbmZvcyA9IGF3YWl0IHRoaXMuYnVpbGRMYXllckluZm9zKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpXG4gICAgaWYgKHRva2VuICE9PSB0aGlzLnJlYnVpbGRUb2tlbikgcmV0dXJuXG5cbiAgICBjb25zdCBlZGl0b3JQcm9wczogYW55ID0geyB2aWV3OiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcsIGNvbnRhaW5lciB9XG4gICAgaWYgKGxheWVySW5mb3MpIGVkaXRvclByb3BzLmxheWVySW5mb3MgPSBsYXllckluZm9zXG5cbiAgICBjb25zdCBuZXdFZGl0b3IgPSBuZXcgRWRpdG9yKGVkaXRvclByb3BzKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50V2lkZ2V0OiBuZXdFZGl0b3IgfSlcbiAgfVxuXG4gIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gYXN5bmMgKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICB0aGlzLmRlc3Ryb3lFZGl0b3IoKVxuICAgIGlmICgham12KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgamltdU1hcFZpZXc6IG51bGwsIGN1cnJlbnRXaWRnZXQ6IG51bGwgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgamltdU1hcFZpZXc6IGptdiB9LCAoKSA9PiB7IHRoaXMuY3JlYXRlRWRpdG9yKCkgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICAgIGlmICh0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJiB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZGVzdHJveUVkaXRvcigpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHByZXZQcm9wcy5jb25maWcgIT09IHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgIHRoaXMuY3JlYXRlRWRpdG9yKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYnVpbGRUb2tlbisrXG4gICAgdGhpcy5kZXN0cm95RWRpdG9yKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtYXBJZCA9IHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ3aWRnZXQtanMtYXBpLWVkaXRvclwiXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLm15UmVmfSBzdHlsZT17eyBmbGV4OiAxLCBtaW5IZWlnaHQ6IDAsIG92ZXJmbG93OiAnYXV0bycgfX0gLz5cbiAgICAgICAge21hcElkXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e21hcElkfVxuICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZzogOCwgbWFyZ2luOiAwIH19PlBsZWFzZSBzZWxlY3QgYSBtYXAuPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==