System.register(["esri/form/FormTemplate","esri/form/elements/FieldElement","esri/widgets/Editor","jimu-arcgis","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_esri_form_FormTemplate__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_form_elements_FieldElement__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_form_FormTemplate__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_form_elements_FieldElement__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Editor__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_form_FormTemplate__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_form_FormTemplate__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_form_elements_FieldElement__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_form_elements_FieldElement__[key] = module[key];
				});
			},
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

/***/ "esri/form/FormTemplate"
/*!*****************************************!*\
  !*** external "esri/form/FormTemplate" ***!
  \*****************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_form_FormTemplate__;

/***/ },

/***/ "esri/form/elements/FieldElement"
/*!**************************************************!*\
  !*** external "esri/form/elements/FieldElement" ***!
  \**************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_form_elements_FieldElement__;

/***/ },

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
/* harmony import */ var esri_form_FormTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/form/FormTemplate */ "esri/form/FormTemplate");
/* harmony import */ var esri_form_elements_FieldElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/form/elements/FieldElement */ "esri/form/elements/FieldElement");
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
                const props = {
                    fieldName,
                    label: ((f === null || f === void 0 ? void 0 : f.label) && String(f.label).trim()) || fieldName
                };
                if ((f === null || f === void 0 ? void 0 : f.editable) === false) {
                    props.editableExpression = 'expr_false';
                    hasNonEditable = true;
                }
                if ((f === null || f === void 0 ? void 0 : f.required) === true) {
                    props.requiredExpression = 'expr_true';
                    hasRequired = true;
                }
                elements.push(new esri_form_elements_FieldElement__WEBPACK_IMPORTED_MODULE_4__["default"](props));
            }
            if (elements.length === 0)
                return undefined;
            if (hasNonEditable) {
                expressionInfos.push({ name: 'expr_false', expression: 'false', returnType: 'boolean' });
            }
            if (hasRequired) {
                expressionInfos.push({ name: 'expr_true', expression: 'true', returnType: 'boolean' });
            }
            return new esri_form_FormTemplate__WEBPACK_IMPORTED_MODULE_3__["default"]({
                elements,
                expressionInfos: expressionInfos.length > 0 ? expressionInfos : undefined
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9lZGl0b3IvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSwyQ0FBMkMsMENBQTBDO1dBQ3JGLE1BQU07V0FDTiwyQ0FBMkMsZ0NBQWdDO1dBQzNFO1dBQ0EsS0FBSyx5QkFBeUI7V0FDOUI7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLDBDQUEwQyx3Q0FBd0M7V0FDbEY7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0N0QkEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmhGLGVBQWU7QUFDK0Q7QUFDYztBQUNwRDtBQUNTO0FBQ1M7QUFRM0MsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUE4QztJQUl0RixZQUFZLEtBQUs7UUFDZixLQUFLLENBQUMsS0FBSyxDQUFD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QUFFLENBQUM7WUFDckUsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUU7SUFDdEIsQ0FBQztJQUVELE1BQU07O1FBQ0osTUFBTSxLQUFLLEdBQUcsVUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLDBDQUFHLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQ0wsd0RBQ0UsU0FBUyxFQUFDLHNCQUFzQixFQUNoQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRTtZQUVuRSx3REFBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFJO1lBQzNFLEtBQUs7Z0JBQ0osQ0FBQyxDQUFDLENBQ0EsK0NBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxLQUFLLEVBQ3JCLGtCQUFrQixFQUFFLElBQUksQ0FBQyx1QkFBdUIsR0FDaEQsQ0FDRDtnQkFDSCxDQUFDLENBQUMsQ0FDQSxzREFBRyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsMkJBQTBCLENBQzVELENBQ0QsQ0FDUDtJQUNILENBQUM7Q0FDRjtBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2Zvcm0vRm9ybVRlbXBsYXRlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2Zvcm0vZWxlbWVudHMvRmllbGRFbGVtZW50XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvRWRpdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9lZGl0b3Ivc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9mb3JtX0Zvcm1UZW1wbGF0ZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2Zvcm1fZWxlbWVudHNfRmllbGRFbGVtZW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19FZGl0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyL3ZhbHVlIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRpZihBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHdoaWxlKGkgPCBkZWZpbml0aW9uLmxlbmd0aCkge1xuXHRcdFx0dmFyIGtleSA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdHZhciBiaW5kaW5nID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdGlmKGJpbmRpbmcgPT09IDApIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiBkZWZpbml0aW9uW2krK10gfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGJpbmRpbmcgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihiaW5kaW5nID09PSAwKSB7IGkrKzsgfVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gKHdpbmRvdy5qaW11Q29uZmlnICYmIHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmwpIHx8ICcnXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyB0eXBlIEFsbFdpZGdldFByb3BzLCBqc3gsIFJlYWN0LCBEYXRhU291cmNlTWFuYWdlciB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcsIEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IEVkaXRvciBmcm9tICdlc3JpL3dpZGdldHMvRWRpdG9yJ1xyXG5pbXBvcnQgRm9ybVRlbXBsYXRlIGZyb20gJ2VzcmkvZm9ybS9Gb3JtVGVtcGxhdGUnXHJcbmltcG9ydCBGaWVsZEVsZW1lbnQgZnJvbSAnZXNyaS9mb3JtL2VsZW1lbnRzL0ZpZWxkRWxlbWVudCdcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3XHJcbiAgY3VycmVudFdpZGdldDogRWRpdG9yXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LCBTdGF0ZT4ge1xyXG4gIHByaXZhdGUgbXlSZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KClcclxuICBwcml2YXRlIHJlYnVpbGRUb2tlbiA9IDBcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgamltdU1hcFZpZXc6IG51bGwsIGN1cnJlbnRXaWRnZXQ6IG51bGwgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95RWRpdG9yID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFdpZGdldCkge1xyXG4gICAgICB0cnkgeyB0aGlzLnN0YXRlLmN1cnJlbnRXaWRnZXQuZGVzdHJveSgpIH0gY2F0Y2ggeyAvKiBub29wICovIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2FpdEZvckRhdGFTb3VyY2UgPSAoaWQ6IHN0cmluZywgdGltZW91dE1zID0gMTUwMDApOiBQcm9taXNlPEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfCBudWxsPiA9PiB7XHJcbiAgICBjb25zdCBkc20gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgICBjb25zdCBleGlzdGluZyA9IGRzbS5nZXREYXRhU291cmNlKGlkKSBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlXHJcbiAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXhpc3RpbmcpXHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KClcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHMgPSBkc20uZ2V0RGF0YVNvdXJjZShpZCkgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZVxyXG4gICAgICAgIGlmIChkcykge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICAgICAgICAgIHJlc29sdmUoZHMpXHJcbiAgICAgICAgfSBlbHNlIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPiB0aW1lb3V0TXMpIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXHJcbiAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAyNTApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNvbHZlRmllbGROYW1lID0gKGxheWVyOiBhbnksIGNvbmZpZ3VyZWROYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsID0+IHtcclxuICAgIGlmICghY29uZmlndXJlZE5hbWUpIHJldHVybiBudWxsXHJcblxyXG4gICAgY29uc3QgZGlyZWN0TWF0Y2ggPSBsYXllcj8uZmllbGRzSW5kZXg/LmdldD8uKGNvbmZpZ3VyZWROYW1lKVxyXG4gICAgaWYgKGRpcmVjdE1hdGNoKSByZXR1cm4gZGlyZWN0TWF0Y2gubmFtZVxyXG5cclxuICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBjb25maWd1cmVkTmFtZS5zcGxpdCgvWy4vXS8pLmZpbHRlcihCb29sZWFuKVxyXG4gICAgZm9yIChsZXQgaW5kZXggPSBjYW5kaWRhdGVzLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcclxuICAgICAgY29uc3QgY2FuZGlkYXRlID0gY2FuZGlkYXRlc1tpbmRleF1cclxuICAgICAgY29uc3QgZmllbGQgPSBsYXllcj8uZmllbGRzSW5kZXg/LmdldD8uKGNhbmRpZGF0ZSlcclxuICAgICAgaWYgKGZpZWxkKSByZXR1cm4gZmllbGQubmFtZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkRm9ybVRlbXBsYXRlID0gKGxheWVyOiBhbnksIGxheWVyQ2ZnOiBhbnkpOiBGb3JtVGVtcGxhdGUgfCB1bmRlZmluZWQgPT4ge1xyXG4gICAgY29uc3QgZmllbGRzQ2ZnOiBhbnlbXSA9IChsYXllckNmZz8uZmllbGRzIGFzIGFueVtdKSB8fCBbXVxyXG4gICAgaWYgKGZpZWxkc0NmZy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWRcclxuXHJcbiAgICBjb25zdCBleHByZXNzaW9uSW5mb3M6IGFueVtdID0gW11cclxuICAgIGNvbnN0IGVsZW1lbnRzOiBGaWVsZEVsZW1lbnRbXSA9IFtdXHJcbiAgICBsZXQgaGFzTm9uRWRpdGFibGUgPSBmYWxzZVxyXG4gICAgbGV0IGhhc1JlcXVpcmVkID0gZmFsc2VcclxuXHJcbiAgICBmb3IgKGNvbnN0IGYgb2YgZmllbGRzQ2ZnKSB7XHJcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHRoaXMucmVzb2x2ZUZpZWxkTmFtZShsYXllciwgZj8ubmFtZSlcclxuICAgICAgaWYgKCFmaWVsZE5hbWUpIGNvbnRpbnVlXHJcbiAgICAgIGlmIChmPy52aXNpYmxlID09PSBmYWxzZSkgY29udGludWVcclxuXHJcbiAgICAgIGNvbnN0IHByb3BzOiBhbnkgPSB7XHJcbiAgICAgICAgZmllbGROYW1lLFxyXG4gICAgICAgIGxhYmVsOiAoZj8ubGFiZWwgJiYgU3RyaW5nKGYubGFiZWwpLnRyaW0oKSkgfHwgZmllbGROYW1lXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmPy5lZGl0YWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBwcm9wcy5lZGl0YWJsZUV4cHJlc3Npb24gPSAnZXhwcl9mYWxzZSdcclxuICAgICAgICBoYXNOb25FZGl0YWJsZSA9IHRydWVcclxuICAgICAgfVxyXG4gICAgICBpZiAoZj8ucmVxdWlyZWQgPT09IHRydWUpIHtcclxuICAgICAgICBwcm9wcy5yZXF1aXJlZEV4cHJlc3Npb24gPSAnZXhwcl90cnVlJ1xyXG4gICAgICAgIGhhc1JlcXVpcmVkID0gdHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50cy5wdXNoKG5ldyBGaWVsZEVsZW1lbnQocHJvcHMpKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWRcclxuXHJcbiAgICBpZiAoaGFzTm9uRWRpdGFibGUpIHtcclxuICAgICAgZXhwcmVzc2lvbkluZm9zLnB1c2goeyBuYW1lOiAnZXhwcl9mYWxzZScsIGV4cHJlc3Npb246ICdmYWxzZScsIHJldHVyblR5cGU6ICdib29sZWFuJyB9KVxyXG4gICAgfVxyXG4gICAgaWYgKGhhc1JlcXVpcmVkKSB7XHJcbiAgICAgIGV4cHJlc3Npb25JbmZvcy5wdXNoKHsgbmFtZTogJ2V4cHJfdHJ1ZScsIGV4cHJlc3Npb246ICd0cnVlJywgcmV0dXJuVHlwZTogJ2Jvb2xlYW4nIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBGb3JtVGVtcGxhdGUoe1xyXG4gICAgICBlbGVtZW50cyxcclxuICAgICAgZXhwcmVzc2lvbkluZm9zOiBleHByZXNzaW9uSW5mb3MubGVuZ3RoID4gMCA/IGV4cHJlc3Npb25JbmZvcyA6IHVuZGVmaW5lZFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRMYXllckluZm9zID0gYXN5bmMgKGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIGNvbnN0IGNmZ0xheWVycyA9ICh0aGlzLnByb3BzLmNvbmZpZz8ubGF5ZXJzIGFzIGFueSkgfHwgW11cclxuICAgIGNvbnN0IGNmZ0J5SWQgPSBuZXcgTWFwPHN0cmluZywgYW55PigpXHJcblxyXG4gICAgLy8gUmVzb2x2ZSBlYWNoIGNvbmZpZ3VyZWQgRmVhdHVyZSBMYXllciB2aWEgaXRzIGRhdGEgc291cmNlXHJcbiAgICBmb3IgKGNvbnN0IGxheWVyQ2ZnIG9mIGNmZ0xheWVycykge1xyXG4gICAgICBjb25zdCB1ZHMgPSBsYXllckNmZy51c2VEYXRhU291cmNlXHJcbiAgICAgIGlmICghdWRzPy5kYXRhU291cmNlSWQpIGNvbnRpbnVlXHJcbiAgICAgIGNvbnN0IGRzID0gYXdhaXQgdGhpcy53YWl0Rm9yRGF0YVNvdXJjZSh1ZHMuZGF0YVNvdXJjZUlkKVxyXG4gICAgICBjb25zdCBsYXllcjogYW55ID0gZHMgPyAoZHMgYXMgYW55KS5sYXllciA6IG51bGxcclxuICAgICAgaWYgKCFsYXllcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignW2VkaXRvcl0gZGF0YSBzb3VyY2UgLyBsYXllciB1bmF2YWlsYWJsZTonLCB1ZHMuZGF0YVNvdXJjZUlkKVxyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBsYXllci5sb2FkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdHJ5IHsgYXdhaXQgbGF5ZXIubG9hZCgpIH0gY2F0Y2ggeyAvKiBub29wICovIH1cclxuICAgICAgfVxyXG4gICAgICBjZmdCeUlkLnNldChsYXllci5pZCwgeyBsYXllciwgbGF5ZXJDZmcgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBXYWxrIGV2ZXJ5IGVkaXRhYmxlIEZlYXR1cmUgTGF5ZXIgaW4gdGhlIG1hcC4gQ29uZmlndXJlZCBvbmVzIGFyZSBlbmFibGVkXHJcbiAgICAvLyB3aXRoIHRoZSB1c2VyJ3MgZmllbGRDb25maWc7IGV2ZXJ5IG90aGVyIGVkaXRhYmxlIGxheWVyIGlzIGV4cGxpY2l0bHlcclxuICAgIC8vIGRpc2FibGVkIHNvIGl0IGRvZXMgbm90IGFwcGVhciBpbiB0aGUgRWRpdG9yIFVJLlxyXG4gICAgY29uc3QgaW5mb3M6IGFueVtdID0gW11cclxuICAgIGNvbnN0IG1hcDogYW55ID0gam12Py52aWV3Py5tYXBcclxuICAgIGNvbnN0IGFsbExheWVyczogYW55W10gPSBtYXA/LmFsbExheWVycz8udG9BcnJheT8uKCkgfHwgW11cclxuXHJcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGFsbExheWVycykge1xyXG4gICAgICBpZiAobGF5ZXI/LnR5cGUgIT09ICdmZWF0dXJlJykgY29udGludWVcclxuICAgICAgY29uc3QgY2FwcyA9IGxheWVyPy5jYXBhYmlsaXRpZXM/Lm9wZXJhdGlvbnNcclxuICAgICAgY29uc3QgaXNFZGl0YWJsZSA9ICEhKGNhcHM/LnN1cHBvcnRzQWRkIHx8IGNhcHM/LnN1cHBvcnRzVXBkYXRlIHx8IGNhcHM/LnN1cHBvcnRzRGVsZXRlKVxyXG4gICAgICBpZiAoIWlzRWRpdGFibGUpIGNvbnRpbnVlXHJcblxyXG4gICAgICBjb25zdCBtYXRjaCA9IGNmZ0J5SWQuZ2V0KGxheWVyLmlkKVxyXG4gICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICBjb25zdCBmb3JtVGVtcGxhdGUgPSB0aGlzLmJ1aWxkRm9ybVRlbXBsYXRlKGxheWVyLCBtYXRjaC5sYXllckNmZylcclxuICAgICAgICBpbmZvcy5wdXNoKHtcclxuICAgICAgICAgIGxheWVyLFxyXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIGFkZEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICB1cGRhdGVFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgZGVsZXRlRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIGZvcm1UZW1wbGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5mb3MucHVzaCh7IGxheWVyLCBlbmFibGVkOiBmYWxzZSB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluZm9zLmxlbmd0aCA+IDAgPyBpbmZvcyA6IG51bGxcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWRpdG9yID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSArK3RoaXMucmVidWlsZFRva2VuXHJcbiAgICB0aGlzLmRlc3Ryb3lFZGl0b3IoKVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldyB8fCAhdGhpcy5teVJlZi5jdXJyZW50KSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcxMDAlJ1xyXG4gICAgdGhpcy5teVJlZi5jdXJyZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICB0aGlzLm15UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG5cclxuICAgIGNvbnN0IGxheWVySW5mb3MgPSBhd2FpdCB0aGlzLmJ1aWxkTGF5ZXJJbmZvcyh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KVxyXG4gICAgaWYgKHRva2VuICE9PSB0aGlzLnJlYnVpbGRUb2tlbikgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgZWRpdG9yUHJvcHM6IGFueSA9IHsgdmlldzogdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LCBjb250YWluZXIgfVxyXG4gICAgaWYgKGxheWVySW5mb3MpIGVkaXRvclByb3BzLmxheWVySW5mb3MgPSBsYXllckluZm9zXHJcblxyXG4gICAgY29uc3QgbmV3RWRpdG9yID0gbmV3IEVkaXRvcihlZGl0b3JQcm9wcylcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50V2lkZ2V0OiBuZXdFZGl0b3IgfSlcclxuICB9XHJcblxyXG4gIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gYXN5bmMgKGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIHRoaXMuZGVzdHJveUVkaXRvcigpXHJcbiAgICBpZiAoIWptdikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgamltdU1hcFZpZXc6IG51bGwsIGN1cnJlbnRXaWRnZXQ6IG51bGwgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgamltdU1hcFZpZXc6IGptdiB9LCAoKSA9PiB7IHRoaXMuY3JlYXRlRWRpdG9yKCkgfSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xyXG4gICAgaWYgKHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmRlc3Ryb3lFZGl0b3IoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChwcmV2UHJvcHMuY29uZmlnICE9PSB0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRWRpdG9yKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5yZWJ1aWxkVG9rZW4rK1xyXG4gICAgdGhpcy5kZXN0cm95RWRpdG9yKClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IG1hcElkID0gdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIndpZGdldC1qcy1hcGktZWRpdG9yXCJcclxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiByZWY9e3RoaXMubXlSZWZ9IHN0eWxlPXt7IGZsZXg6IDEsIG1pbkhlaWdodDogMCwgb3ZlcmZsb3c6ICdhdXRvJyB9fSAvPlxyXG4gICAgICAgIHttYXBJZFxyXG4gICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXttYXBJZH1cclxuICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBwYWRkaW5nOiA4LCBtYXJnaW46IDAgfX0+UGxlYXNlIHNlbGVjdCBhIG1hcC48L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
