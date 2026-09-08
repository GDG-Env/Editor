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
                        layer.useDataSource ? ` ÔÇö ${getLayerLabel(layer.useDataSource)}` : ''),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9lZGl0b3IvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDRixpRUFBZTtJQUNiLGVBQWUsRUFBRSxvQkFBb0I7SUFDckMsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxjQUFjLEVBQUUsa0NBQWtDO0lBQ2xELFdBQVcsRUFBRSxxREFBcUQ7SUFDbEUsVUFBVSxFQUFFLE9BQU87SUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtJQUNyQyxjQUFjLEVBQUUsZ0NBQWdDO0lBQ2hELFNBQVMsRUFBRSxPQUFPO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsUUFBUSxFQUFFLGFBQWE7Q0FDeEIsRUFBQzs7Ozs7Ozs7Ozs7O0FDakNGLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1GOzs7Ozs7Ozs7OztBQ0FBLGlGOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSwyQ0FBMkMsMENBQTBDO1dBQ3JGLE1BQU07V0FDTiwyQ0FBMkMsZ0NBQWdDO1dBQzNFO1dBQ0EsS0FBSyx5QkFBeUI7V0FDOUI7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLDBDQUEwQyx3Q0FBd0M7V0FDbEY7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0N0QkEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Es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QUMsQ0FDVCxDQUNFLENBQ2QsQ0FDYyxDQUNiLENBQ1A7QUFDSCxDQUFDO0FBRUQsaUVBQWUsT0FBTztBQUVkLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2VkaXRvci9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2VkaXRvci9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjAgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2VsZWN0TWFwV2lkZ2V0OiBcIlNlbGVjdCBNYXAgd2lkZ2V0OlwiLFxuICBlZGl0YWJsZUxheWVyczogXCJFZGl0YWJsZSBsYXllcnNcIixcbiAgc2VsZWN0TWFwRmlyc3Q6IFwiU2VsZWN0IGEgTWFwIHdpZGdldCBhYm92ZSBmaXJzdC5cIixcbiAgbm9MYXllckhpbnQ6IFwiQ2xpY2sgKyBBZGQgYSBsYXllciB0byBjb25maWd1cmUgYW4gZWRpdGFibGUgbGF5ZXIuXCIsXG4gIGxheWVyTGFiZWw6IFwiTGF5ZXJcIixcbiAgY2hvb3NlTGF5ZXI6IFwiQ2hvb3NlIGEgZmVhdHVyZSBsYXllclwiLFxuICBlZGl0YWJsZUZpZWxkczogXCJGaWVsZHMgdG8gZXhwb3NlIGluIHRoZSBlZGl0b3JcIixcbiAgZmllbGROYW1lOiBcIkZpZWxkXCIsXG4gIHZpc2libGU6IFwiVmlzaWJsZVwiLFxuICBlZGl0YWJsZTogXCJFZGl0YWJsZVwiLFxuICByZXF1aXJlZDogXCJSZXF1aXJlZFwiLFxuICBvcHRpb25hbExhYmVsOiBcIk9wdGlvbmFsIGxhYmVsXCIsXG4gIGFkZExheWVyOiBcIkFkZCBhIGxheWVyXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0aWYoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuXHRcdHZhciBpID0gMDtcblx0XHR3aGlsZShpIDwgZGVmaW5pdGlvbi5sZW5ndGgpIHtcblx0XHRcdHZhciBrZXkgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHR2YXIgYmluZGluZyA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRpZihiaW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogZGVmaW5pdGlvbltpKytdIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBiaW5kaW5nIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoYmluZGluZyA9PT0gMCkgeyBpKys7IH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZihTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9ICh3aW5kb3cuamltdUNvbmZpZyAmJiB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsKSB8fCAnJ1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCwganN4LCBJbW11dGFibGUsXHJcbiAgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgVXNlRGF0YVNvdXJjZSxcclxuICBEYXRhU291cmNlVHlwZXNcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IHtcclxuICBNYXBXaWRnZXRTZWxlY3RvcixcclxuICBTZXR0aW5nU2VjdGlvbixcclxuICBTZXR0aW5nUm93XHJcbn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7XHJcbiAgRGF0YVNvdXJjZVNlbGVjdG9yLFxyXG4gIEZpZWxkU2VsZWN0b3JcclxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJ1xyXG5pbXBvcnQgeyBCdXR0b24sIENoZWNrYm94LCBUZXh0SW5wdXQgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcsIHR5cGUgRWRpdG9yTGF5ZXJDb25maWcsIHR5cGUgRWRpdG9yRmllbGRDb25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5jb25zdCB1aWQgPSAoKSA9PiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA5KVxyXG5cclxuY29uc3QgU2V0dGluZyA9IChwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIGNvbnN0IHQgPSAoaWQ6IHN0cmluZykgPT4gcHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgIGlkLFxyXG4gICAgZGVmYXVsdE1lc3NhZ2U6IChkZWZhdWx0TWVzc2FnZXMgYXMgYW55KVtpZF0gfHwgaWRcclxuICB9KVxyXG5cclxuICBjb25zdCBsYXllcnM6IEVkaXRvckxheWVyQ29uZmlnW10gPSAoKHByb3BzLmNvbmZpZz8ubGF5ZXJzIGFzIGFueSkgfHwgW10pIGFzIEVkaXRvckxheWVyQ29uZmlnW11cclxuXHJcbiAgY29uc3Qgc2F2ZUxheWVycyA9IChuZXh0OiBFZGl0b3JMYXllckNvbmZpZ1tdKSA9PiB7XHJcbiAgICBjb25zdCB1c2VEYXRhU291cmNlcyA9IG5leHRcclxuICAgICAgLm1hcChsID0+IGwudXNlRGF0YVNvdXJjZSlcclxuICAgICAgLmZpbHRlcihCb29sZWFuKSBhcyBVc2VEYXRhU291cmNlW11cclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdsYXllcnMnLCBuZXh0IGFzIGFueSksXHJcbiAgICAgIHVzZURhdGFTb3VyY2VzXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25NYXBTZWxlY3QgPSAoaWRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHByb3BzLmlkLCB1c2VNYXBXaWRnZXRJZHM6IGlkcyB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkTGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBzYXZlTGF5ZXJzKFtcclxuICAgICAgLi4ubGF5ZXJzLFxyXG4gICAgICB7IGlkOiB1aWQoKSwgdXNlRGF0YVNvdXJjZTogbnVsbCBhcyBhbnksIGZpZWxkczogW10gfVxyXG4gICAgXSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUxheWVyID0gKGk6IG51bWJlciwgcGF0Y2g6IFBhcnRpYWw8RWRpdG9yTGF5ZXJDb25maWc+KSA9PiB7XHJcbiAgICBzYXZlTGF5ZXJzKGxheWVycy5tYXAoKGwsIGopID0+IGogPT09IGkgPyB7IC4uLmwsIC4uLnBhdGNoIH0gOiBsKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUxheWVyID0gKGk6IG51bWJlcikgPT4ge1xyXG4gICAgc2F2ZUxheWVycyhsYXllcnMuZmlsdGVyKChfLCBqKSA9PiBqICE9PSBpKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUZpZWxkID0gKGxpOiBudW1iZXIsIGZpOiBudW1iZXIsIHBhdGNoOiBQYXJ0aWFsPEVkaXRvckZpZWxkQ29uZmlnPikgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXIgPSBsYXllcnNbbGldXHJcbiAgICBjb25zdCBuZXh0RmllbGRzID0gbGF5ZXIuZmllbGRzLm1hcCgoZiwgaikgPT4gaiA9PT0gZmkgPyB7IC4uLmYsIC4uLnBhdGNoIH0gOiBmKVxyXG4gICAgdXBkYXRlTGF5ZXIobGksIHsgZmllbGRzOiBuZXh0RmllbGRzIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRMYXllckxhYmVsID0gKHVkcz86IFVzZURhdGFTb3VyY2UpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKCF1ZHMpIHJldHVybiAnJ1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZHMgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UodWRzLmRhdGFTb3VyY2VJZClcclxuICAgICAgcmV0dXJuIGRzPy5nZXRMYWJlbD8uKCkgfHwgdWRzLmRhdGFTb3VyY2VJZFxyXG4gICAgfSBjYXRjaCB7IHJldHVybiB1ZHMuZGF0YVNvdXJjZUlkIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNhcmQ6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLCAjNDQ0KScsIGJvcmRlclJhZGl1czogNCxcclxuICAgIHBhZGRpbmc6IDgsIG1hcmdpbkJvdHRvbTogMTBcclxuICB9XHJcbiAgY29uc3QgbGJsOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyBmb250U2l6ZTogMTEsIGNvbG9yOiAnIzg4OCcsIG1hcmdpbkJvdHRvbTogMiwgbWFyZ2luVG9wOiA4IH1cclxuICBjb25zdCBoZWFkZXJSb3c6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA0LCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiA0IH1cclxuICBjb25zdCBmaWVsZFJvdzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgIHBhZGRpbmc6ICc4cHggMCcsXHJcbiAgICBib3JkZXJUb3A6ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLCAjMzMzKSdcclxuICB9XHJcbiAgY29uc3QgZmllbGRPcHRpb25zUm93OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIGdhcDogMTIsXHJcbiAgICBtYXJnaW5Ub3A6IDZcclxuICB9XHJcbiAgY29uc3QgZmllbGRPcHRpb25MYWJlbDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZ2FwOiA0LFxyXG4gICAgZm9udFNpemU6IDEyLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcidcclxuICB9XHJcblxyXG4gIGNvbnN0IG1hcElkcyA9IHByb3BzLnVzZU1hcFdpZGdldElkcyAmJiBwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID4gMFxyXG4gICAgPyBwcm9wcy51c2VNYXBXaWRnZXRJZHNcclxuICAgIDogbnVsbFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PlxyXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e3QoJ3NlbGVjdE1hcFdpZGdldCcpfT5cclxuICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvclxyXG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3Byb3BzLnVzZU1hcFdpZGdldElkc31cclxuICAgICAgICAgICAgb25TZWxlY3Q9e29uTWFwU2VsZWN0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e3QoJ2VkaXRhYmxlTGF5ZXJzJyl9PlxyXG4gICAgICAgIHshbWFwSWRzICYmIChcclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6ICcjZjkwJyB9fT57dCgnc2VsZWN0TWFwRmlyc3QnKX08L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7bWFwSWRzICYmIGxheWVycy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJyNhYWEnIH19Pnt0KCdub0xheWVySGludCcpfTwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHttYXBJZHMgJiYgbGF5ZXJzLm1hcCgobGF5ZXIsIGxpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17bGF5ZXIuaWR9IHN0eWxlPXtjYXJkfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17aGVhZGVyUm93fT5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmbGV4OiAxLCBmb250V2VpZ2h0OiA2MDAsIGZvbnRTaXplOiAxMiB9fT5cclxuICAgICAgICAgICAgICAgIHt0KCdsYXllckxhYmVsJyl9IHtsaSArIDF9e2xheWVyLnVzZURhdGFTb3VyY2UgPyBgIOKAlCAke2dldExheWVyTGFiZWwobGF5ZXIudXNlRGF0YVNvdXJjZSl9YCA6ICcnfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJ0ZXJ0aWFyeVwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUxheWVyKGxpKX0+4pyVPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17bGJsfT57dCgnY2hvb3NlTGF5ZXInKX08L2Rpdj5cclxuICAgICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxyXG4gICAgICAgICAgICAgIHR5cGVzPXtJbW11dGFibGUoW0RhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKX1cclxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e0ltbXV0YWJsZShtYXBJZHMpfVxyXG4gICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtsYXllci51c2VEYXRhU291cmNlID8gSW1tdXRhYmxlKFtsYXllci51c2VEYXRhU291cmNlXSkgOiBJbW11dGFibGUoW10pfVxyXG4gICAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXHJcbiAgICAgICAgICAgICAgaGlkZUFkZERhdGFCdXR0b25cclxuICAgICAgICAgICAgICBoaWRlRGF0YVZpZXdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGFycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdCA9IGFyciAmJiBhcnIubGVuZ3RoID8gYXJyWzBdIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdWRzID0gZmlyc3RcclxuICAgICAgICAgICAgICAgICAgPyAodHlwZW9mIGZpcnN0LmFzTXV0YWJsZSA9PT0gJ2Z1bmN0aW9uJyA/IGZpcnN0LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkgOiBmaXJzdClcclxuICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVMYXllcihsaSwgeyB1c2VEYXRhU291cmNlOiB1ZHMsIGZpZWxkczogW10gfSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAge2xheWVyLnVzZURhdGFTb3VyY2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2xibH0+e3QoJ2VkaXRhYmxlRmllbGRzJyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17SW1tdXRhYmxlKFtsYXllci51c2VEYXRhU291cmNlXSl9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmllbGRzPXtJbW11dGFibGUobGF5ZXIuZmllbGRzLm1hcChmID0+IGYubmFtZSkpfVxyXG4gICAgICAgICAgICAgICAgICBpc011bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmllbGRzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZE5hbWVzOiBzdHJpbmdbXSA9IChmaWVsZHMgfHwgW10pLm1hcCgoZjogYW55KSA9PiBmLm5hbWUgfHwgZi5qaW11TmFtZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG5ldyBNYXAobGF5ZXIuZmllbGRzLm1hcChmID0+IFtmLm5hbWUsIGZdKSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0OiBFZGl0b3JGaWVsZENvbmZpZ1tdID0gc2VsZWN0ZWROYW1lcy5tYXAobmFtZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcuZ2V0KG5hbWUpIHx8IHsgbmFtZSwgbGFiZWw6ICcnLCB2aXNpYmxlOiB0cnVlLCByZXF1aXJlZDogZmFsc2UsIGVkaXRhYmxlOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXIobGksIHsgZmllbGRzOiBuZXh0IH0pXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHtsYXllci5maWVsZHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYXllci5maWVsZHMubWFwKChmLCBmaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2YubmFtZX0gc3R5bGU9e2ZpZWxkUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIG1hcmdpbkJvdHRvbTogMiB9fT57Zi5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zi5sYWJlbCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnb3B0aW9uYWxMYWJlbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZUZpZWxkKGxpLCBmaSwgeyBsYWJlbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2ZpZWxkT3B0aW9uc1Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtmaWVsZE9wdGlvbkxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmLnZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZUZpZWxkKGxpLCBmaSwgeyB2aXNpYmxlOiBlLnRhcmdldC5jaGVja2VkIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCd2aXNpYmxlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2ZpZWxkT3B0aW9uTGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2YuZWRpdGFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZUZpZWxkKGxpLCBmaSwgeyBlZGl0YWJsZTogZS50YXJnZXQuY2hlY2tlZCB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnZWRpdGFibGUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17ZmllbGRPcHRpb25MYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Zi5yZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlRmllbGQobGksIGZpLCB7IHJlcXVpcmVkOiBlLnRhcmdldC5jaGVja2VkIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdyZXF1aXJlZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIHttYXBJZHMgJiYgKFxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21cIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IG9uQ2xpY2s9e2FkZExheWVyfT5cclxuICAgICAgICAgICAgICArIHt0KCdhZGRMYXllcicpfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nXHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
