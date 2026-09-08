System.register(["jimu-core","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/editor/src/setting/translations/default.ts"
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/editor/src/setting/translations/default.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
  Licensing

  Copyright 2020 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    selectMapWidget: "Select Map widget:",
    editableLayers: "Editable layers",
    selectMapFirst: "Select a Map widget above first.",
    noLayerHint: "Click + Add a layer to configure an editable layer.",
    layerLabel: "Layer",
    chooseLayer: "Choose a feature layer",
    editableFields: "Fields to expose in the editor",
    fieldName: "Field",
    visible: "Visible",
    editable: "Editable",
    required: "Required",
    optionalLabel: "Optional label",
    addLayer: "Add a layer"
});


/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ },

/***/ "jimu-ui/advanced/data-source-selector"
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ },

/***/ "jimu-ui/advanced/setting-components"
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/editor/src/setting/setting.tsx ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/editor/src/setting/translations/default.ts");
/** @jsx jsx */





const uid = () => Math.random().toString(36).slice(2, 9);
const Setting = (props) => {
    var _a;
    const t = (id) => props.intl.formatMessage({
        id,
        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"][id] || id
    });
    const layers = (((_a = props.config) === null || _a === void 0 ? void 0 : _a.layers) || []);
    const saveLayers = (next) => {
        const useDataSources = next
            .map(l => l.useDataSource)
            .filter(Boolean);
        props.onSettingChange({
            id: props.id,
            config: props.config.set('layers', next),
            useDataSources
        });
    };
    const onMapSelect = (ids) => {
        props.onSettingChange({ id: props.id, useMapWidgetIds: ids });
    };
    const addLayer = () => {
        saveLayers([
            ...layers,
            { id: uid(), useDataSource: null, fields: [] }
        ]);
    };
    const updateLayer = (i, patch) => {
        saveLayers(layers.map((l, j) => j === i ? Object.assign(Object.assign({}, l), patch) : l));
    };
    const removeLayer = (i) => {
        saveLayers(layers.filter((_, j) => j !== i));
    };
    const updateField = (li, fi, patch) => {
        const layer = layers[li];
        const nextFields = layer.fields.map((f, j) => j === fi ? Object.assign(Object.assign({}, f), patch) : f);
        updateLayer(li, { fields: nextFields });
    };
    const getLayerLabel = (uds) => {
        var _a;
        if (!uds)
            return '';
        try {
            const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(uds.dataSourceId);
            return ((_a = ds === null || ds === void 0 ? void 0 : ds.getLabel) === null || _a === void 0 ? void 0 : _a.call(ds)) || uds.dataSourceId;
        }
        catch (_b) {
            return uds.dataSourceId;
        }
    };
    const card = {
        border: '1px solid var(--border, #444)', borderRadius: 4,
        padding: 8, marginBottom: 10
    };
    const lbl = { fontSize: 11, color: '#888', marginBottom: 2, marginTop: 8 };
    const headerRow = { display: 'flex', gap: 4, alignItems: 'center', marginBottom: 4 };
    const fieldRow = {
        padding: '8px 0',
        borderTop: '1px solid var(--border, #333)'
    };
    const fieldOptionsRow = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 6
    };
    const fieldOptionLabel = {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 12,
        cursor: 'pointer'
    };
    const mapIds = props.useMapWidgetIds && props.useMapWidgetIds.length > 0
        ? props.useMapWidgetIds
        : null;
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { padding: 8 } },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: t('selectMapWidget') },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: props.useMapWidgetIds, onSelect: onMapSelect }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: t('editableLayers') },
            !mapIds && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 12, color: '#f90' } }, t('selectMapFirst')))),
            mapIds && layers.length === 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 12, color: '#aaa' } }, t('noLayerHint')))),
            mapIds && layers.map((layer, li) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: layer.id, style: card },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: headerRow },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { flex: 1, fontWeight: 600, fontSize: 12 } },
                        t('layerLabel'),
                        " ",
                        li + 1,
                        layer.useDataSource ? ` — ${getLayerLabel(layer.useDataSource)}` : ''),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { size: "sm", type: "tertiary", onClick: () => removeLayer(li) }, "\u2715")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: lbl }, t('chooseLayer')),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.DataSourceSelector, { types: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]), useMapWidgetIds: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(mapIds), useDataSources: layer.useDataSource ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([layer.useDataSource]) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]), mustUseDataSource: true, hideAddDataButton: true, hideDataView: true, onChange: (arr) => {
                        const first = arr && arr.length ? arr[0] : null;
                        const uds = first
                            ? (typeof first.asMutable === 'function' ? first.asMutable({ deep: true }) : first)
                            : null;
                        updateLayer(li, { useDataSource: uds, fields: [] });
                    } }),
                layer.useDataSource && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: lbl }, t('editableFields')),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.FieldSelector, { useDataSources: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([layer.useDataSource]), selectedFields: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(layer.fields.map(f => f.name)), isMultiple: true, onChange: (fields) => {
                            const selectedNames = (fields || []).map((f) => f.name || f.jimuName);
                            const existing = new Map(layer.fields.map(f => [f.name, f]));
                            const next = selectedNames.map(name => existing.get(name) || { name, label: '', visible: true, required: false, editable: true });
                            updateLayer(li, { fields: next });
                        } }),
                    layer.fields.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: 8 } }, layer.fields.map((f, fi) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: f.name, style: fieldRow },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 12, marginBottom: 2 } }, f.name),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: "sm", value: f.label || '', placeholder: t('optionalLabel'), onChange: e => updateField(li, fi, { label: e.target.value }) }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: fieldOptionsRow },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: fieldOptionLabel },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: f.visible, onChange: e => updateField(li, fi, { visible: e.target.checked }) }),
                                t('visible')),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: fieldOptionLabel },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: f.editable, onChange: e => updateField(li, fi, { editable: e.target.checked }) }),
                                t('editable')),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: fieldOptionLabel },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: f.required, onChange: e => updateField(li, fi, { required: e.target.checked }) }),
                                t('required'))))))))))))),
            mapIds && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: "primary", size: "sm", style: { width: '100%' }, onClick: addLayer },
                    "+ ",
                    t('addLayer')))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9lZGl0b3IvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDRixpRUFBZTtJQUNiLGVBQWUsRUFBRSxvQkFBb0I7SUFDckMsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxjQUFjLEVBQUUsa0NBQWtDO0lBQ2xELFdBQVcsRUFBRSxxREFBcUQ7SUFDbEUsVUFBVSxFQUFFLE9BQU87SUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtJQUNyQyxjQUFjLEVBQUUsZ0NBQWdDO0lBQ2hELFNBQVMsRUFBRSxPQUFPO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsUUFBUSxFQUFFLGFBQWE7Q0FDeEIsRUFBQzs7Ozs7Ozs7Ozs7O0FDakNGLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1GOzs7Ozs7Ozs7OztBQ0FBLGlGOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSwyQ0FBMkMsMENBQTBDO1dBQ3JGLE1BQU07V0FDTiwyQ0FBMkMsZ0NBQWdDO1dBQzNFO1dBQ0EsS0FBSyx5QkFBeUI7V0FDOUI7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLDBDQUEwQyx3Q0FBd0M7V0FDbEY7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0N0QkEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Es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QUMsQ0FDVCxDQUNFLENBQ2QsQ0FDYyxDQUNiLENBQ1A7QUFDSCxDQUFDO0FBRUQsaUVBQWUsT0FBTztBQUVkLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2VkaXRvci9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2VkaXRvci9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICBMaWNlbnNpbmdcclxuXHJcbiAgQ29weXJpZ2h0IDIwMjAgRXNyaVxyXG5cclxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcclxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxyXG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcblxyXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xyXG4gIExJQ0VOU0UgZmlsZS5cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNlbGVjdE1hcFdpZGdldDogXCJTZWxlY3QgTWFwIHdpZGdldDpcIixcclxuICBlZGl0YWJsZUxheWVyczogXCJFZGl0YWJsZSBsYXllcnNcIixcclxuICBzZWxlY3RNYXBGaXJzdDogXCJTZWxlY3QgYSBNYXAgd2lkZ2V0IGFib3ZlIGZpcnN0LlwiLFxyXG4gIG5vTGF5ZXJIaW50OiBcIkNsaWNrICsgQWRkIGEgbGF5ZXIgdG8gY29uZmlndXJlIGFuIGVkaXRhYmxlIGxheWVyLlwiLFxyXG4gIGxheWVyTGFiZWw6IFwiTGF5ZXJcIixcclxuICBjaG9vc2VMYXllcjogXCJDaG9vc2UgYSBmZWF0dXJlIGxheWVyXCIsXHJcbiAgZWRpdGFibGVGaWVsZHM6IFwiRmllbGRzIHRvIGV4cG9zZSBpbiB0aGUgZWRpdG9yXCIsXHJcbiAgZmllbGROYW1lOiBcIkZpZWxkXCIsXHJcbiAgdmlzaWJsZTogXCJWaXNpYmxlXCIsXHJcbiAgZWRpdGFibGU6IFwiRWRpdGFibGVcIixcclxuICByZXF1aXJlZDogXCJSZXF1aXJlZFwiLFxyXG4gIG9wdGlvbmFsTGFiZWw6IFwiT3B0aW9uYWwgbGFiZWxcIixcclxuICBhZGRMYXllcjogXCJBZGQgYSBsYXllclwiXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyL3ZhbHVlIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRpZihBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHdoaWxlKGkgPCBkZWZpbml0aW9uLmxlbmd0aCkge1xuXHRcdFx0dmFyIGtleSA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdHZhciBiaW5kaW5nID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdGlmKGJpbmRpbmcgPT09IDApIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiBkZWZpbml0aW9uW2krK10gfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGJpbmRpbmcgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihiaW5kaW5nID09PSAwKSB7IGkrKzsgfVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gKHdpbmRvdy5qaW11Q29uZmlnICYmIHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmwpIHx8ICcnXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LCBqc3gsIEltbXV0YWJsZSxcclxuICBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBVc2VEYXRhU291cmNlLFxyXG4gIERhdGFTb3VyY2VUeXBlc1xyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQge1xyXG4gIE1hcFdpZGdldFNlbGVjdG9yLFxyXG4gIFNldHRpbmdTZWN0aW9uLFxyXG4gIFNldHRpbmdSb3dcclxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHtcclxuICBEYXRhU291cmNlU2VsZWN0b3IsXHJcbiAgRmllbGRTZWxlY3RvclxyXG59IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIFRleHRJbnB1dCB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZywgdHlwZSBFZGl0b3JMYXllckNvbmZpZywgdHlwZSBFZGl0b3JGaWVsZENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IHVpZCA9ICgpID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDkpXHJcblxyXG5jb25zdCBTZXR0aW5nID0gKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+KSA9PiB7XHJcbiAgY29uc3QgdCA9IChpZDogc3RyaW5nKSA9PiBwcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgaWQsXHJcbiAgICBkZWZhdWx0TWVzc2FnZTogKGRlZmF1bHRNZXNzYWdlcyBhcyBhbnkpW2lkXSB8fCBpZFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGxheWVyczogRWRpdG9yTGF5ZXJDb25maWdbXSA9ICgocHJvcHMuY29uZmlnPy5sYXllcnMgYXMgYW55KSB8fCBbXSkgYXMgRWRpdG9yTGF5ZXJDb25maWdbXVxyXG5cclxuICBjb25zdCBzYXZlTGF5ZXJzID0gKG5leHQ6IEVkaXRvckxheWVyQ29uZmlnW10pID0+IHtcclxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gbmV4dFxyXG4gICAgICAubWFwKGwgPT4gbC51c2VEYXRhU291cmNlKVxyXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pIGFzIFVzZURhdGFTb3VyY2VbXVxyXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ2xheWVycycsIG5leHQgYXMgYW55KSxcclxuICAgICAgdXNlRGF0YVNvdXJjZXNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbk1hcFNlbGVjdCA9IChpZHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2UoeyBpZDogcHJvcHMuaWQsIHVzZU1hcFdpZGdldElkczogaWRzIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRMYXllciA9ICgpID0+IHtcclxuICAgIHNhdmVMYXllcnMoW1xyXG4gICAgICAuLi5sYXllcnMsXHJcbiAgICAgIHsgaWQ6IHVpZCgpLCB1c2VEYXRhU291cmNlOiBudWxsIGFzIGFueSwgZmllbGRzOiBbXSB9XHJcbiAgICBdKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlTGF5ZXIgPSAoaTogbnVtYmVyLCBwYXRjaDogUGFydGlhbDxFZGl0b3JMYXllckNvbmZpZz4pID0+IHtcclxuICAgIHNhdmVMYXllcnMobGF5ZXJzLm1hcCgobCwgaikgPT4gaiA9PT0gaSA/IHsgLi4ubCwgLi4ucGF0Y2ggfSA6IGwpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlTGF5ZXIgPSAoaTogbnVtYmVyKSA9PiB7XHJcbiAgICBzYXZlTGF5ZXJzKGxheWVycy5maWx0ZXIoKF8sIGopID0+IGogIT09IGkpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlRmllbGQgPSAobGk6IG51bWJlciwgZmk6IG51bWJlciwgcGF0Y2g6IFBhcnRpYWw8RWRpdG9yRmllbGRDb25maWc+KSA9PiB7XHJcbiAgICBjb25zdCBsYXllciA9IGxheWVyc1tsaV1cclxuICAgIGNvbnN0IG5leHRGaWVsZHMgPSBsYXllci5maWVsZHMubWFwKChmLCBqKSA9PiBqID09PSBmaSA/IHsgLi4uZiwgLi4ucGF0Y2ggfSA6IGYpXHJcbiAgICB1cGRhdGVMYXllcihsaSwgeyBmaWVsZHM6IG5leHRGaWVsZHMgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExheWVyTGFiZWwgPSAodWRzPzogVXNlRGF0YVNvdXJjZSk6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAoIXVkcykgcmV0dXJuICcnXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZSh1ZHMuZGF0YVNvdXJjZUlkKVxyXG4gICAgICByZXR1cm4gZHM/LmdldExhYmVsPy4oKSB8fCB1ZHMuZGF0YVNvdXJjZUlkXHJcbiAgICB9IGNhdGNoIHsgcmV0dXJuIHVkcy5kYXRhU291cmNlSWQgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FyZDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCB2YXIoLS1ib3JkZXIsICM0NDQpJywgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgcGFkZGluZzogOCwgbWFyZ2luQm90dG9tOiAxMFxyXG4gIH1cclxuICBjb25zdCBsYmw6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7IGZvbnRTaXplOiAxMSwgY29sb3I6ICcjODg4JywgbWFyZ2luQm90dG9tOiAyLCBtYXJnaW5Ub3A6IDggfVxyXG4gIGNvbnN0IGhlYWRlclJvdzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDQsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206IDQgfVxyXG4gIGNvbnN0IGZpZWxkUm93OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgcGFkZGluZzogJzhweCAwJyxcclxuICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCB2YXIoLS1ib3JkZXIsICMzMzMpJ1xyXG4gIH1cclxuICBjb25zdCBmaWVsZE9wdGlvbnNSb3c6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgZ2FwOiAxMixcclxuICAgIG1hcmdpblRvcDogNlxyXG4gIH1cclxuICBjb25zdCBmaWVsZE9wdGlvbkxhYmVsOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBnYXA6IDQsXHJcbiAgICBmb250U2l6ZTogMTIsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFwSWRzID0gcHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmIHByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPiAwXHJcbiAgICA/IHByb3BzLnVzZU1hcFdpZGdldElkc1xyXG4gICAgOiBudWxsXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+XHJcbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17dCgnc2VsZWN0TWFwV2lkZ2V0Jyl9PlxyXG4gICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXHJcbiAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17cHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxyXG4gICAgICAgICAgICBvblNlbGVjdD17b25NYXBTZWxlY3R9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuXHJcbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17dCgnZWRpdGFibGVMYXllcnMnKX0+XHJcbiAgICAgICAgeyFtYXBJZHMgJiYgKFxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJyNmOTAnIH19Pnt0KCdzZWxlY3RNYXBGaXJzdCcpfTwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHttYXBJZHMgJiYgbGF5ZXJzLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiAnI2FhYScgfX0+e3QoJ25vTGF5ZXJIaW50Jyl9PC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge21hcElkcyAmJiBsYXllcnMubWFwKChsYXllciwgbGkpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtsYXllci5pZH0gc3R5bGU9e2NhcmR9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtoZWFkZXJSb3d9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZsZXg6IDEsIGZvbnRXZWlnaHQ6IDYwMCwgZm9udFNpemU6IDEyIH19PlxyXG4gICAgICAgICAgICAgICAge3QoJ2xheWVyTGFiZWwnKX0ge2xpICsgMX17bGF5ZXIudXNlRGF0YVNvdXJjZSA/IGAg4oCUICR7Z2V0TGF5ZXJMYWJlbChsYXllci51c2VEYXRhU291cmNlKX1gIDogJyd9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT1cInRlcnRpYXJ5XCIgb25DbGljaz17KCkgPT4gcmVtb3ZlTGF5ZXIobGkpfT7inJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtsYmx9Pnt0KCdjaG9vc2VMYXllcicpfTwvZGl2PlxyXG4gICAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgdHlwZXM9e0ltbXV0YWJsZShbRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcl0pfVxyXG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17SW1tdXRhYmxlKG1hcElkcyl9XHJcbiAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e2xheWVyLnVzZURhdGFTb3VyY2UgPyBJbW11dGFibGUoW2xheWVyLnVzZURhdGFTb3VyY2VdKSA6IEltbXV0YWJsZShbXSl9XHJcbiAgICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgICAgICBoaWRlQWRkRGF0YUJ1dHRvblxyXG4gICAgICAgICAgICAgIGhpZGVEYXRhVmlld1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoYXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gYXJyICYmIGFyci5sZW5ndGggPyBhcnJbMF0gOiBudWxsXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1ZHMgPSBmaXJzdFxyXG4gICAgICAgICAgICAgICAgICA/ICh0eXBlb2YgZmlyc3QuYXNNdXRhYmxlID09PSAnZnVuY3Rpb24nID8gZmlyc3QuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSA6IGZpcnN0KVxyXG4gICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyKGxpLCB7IHVzZURhdGFTb3VyY2U6IHVkcywgZmllbGRzOiBbXSB9KVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7bGF5ZXIudXNlRGF0YVNvdXJjZSAmJiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bGJsfT57dCgnZWRpdGFibGVGaWVsZHMnKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtJbW11dGFibGUoW2xheWVyLnVzZURhdGFTb3VyY2VdKX1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZHM9e0ltbXV0YWJsZShsYXllci5maWVsZHMubWFwKGYgPT4gZi5uYW1lKSl9XHJcbiAgICAgICAgICAgICAgICAgIGlzTXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWVsZHM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTmFtZXM6IHN0cmluZ1tdID0gKGZpZWxkcyB8fCBbXSkubWFwKChmOiBhbnkpID0+IGYubmFtZSB8fCBmLmppbXVOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gbmV3IE1hcChsYXllci5maWVsZHMubWFwKGYgPT4gW2YubmFtZSwgZl0pKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHQ6IEVkaXRvckZpZWxkQ29uZmlnW10gPSBzZWxlY3RlZE5hbWVzLm1hcChuYW1lID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5nZXQobmFtZSkgfHwgeyBuYW1lLCBsYWJlbDogJycsIHZpc2libGU6IHRydWUsIHJlcXVpcmVkOiBmYWxzZSwgZWRpdGFibGU6IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllcihsaSwgeyBmaWVsZHM6IG5leHQgfSlcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge2xheWVyLmZpZWxkcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2xheWVyLmZpZWxkcy5tYXAoKGYsIGZpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Zi5uYW1lfSBzdHlsZT17ZmllbGRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgbWFyZ2luQm90dG9tOiAyIH19PntmLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmLmxhYmVsIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdvcHRpb25hbExhYmVsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlRmllbGQobGksIGZpLCB7IGxhYmVsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17ZmllbGRPcHRpb25zUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2ZpZWxkT3B0aW9uTGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2YudmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlRmllbGQobGksIGZpLCB7IHZpc2libGU6IGUudGFyZ2V0LmNoZWNrZWQgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3Zpc2libGUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17ZmllbGRPcHRpb25MYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Zi5lZGl0YWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlRmllbGQobGksIGZpLCB7IGVkaXRhYmxlOiBlLnRhcmdldC5jaGVja2VkIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdlZGl0YWJsZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtmaWVsZE9wdGlvbkxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmLnJlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVGaWVsZChsaSwgZmksIHsgcmVxdWlyZWQ6IGUudGFyZ2V0LmNoZWNrZWQgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3JlcXVpcmVkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAge21hcElkcyAmJiAoXHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJzbVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gb25DbGljaz17YWRkTGF5ZXJ9PlxyXG4gICAgICAgICAgICAgICsge3QoJ2FkZExheWVyJyl9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==