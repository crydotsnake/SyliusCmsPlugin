(()=>{"use strict";var e={528:()=>{var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},t=function(e){return console.log("trim valeu"),e.length>20?e.substring(0,20)+"...":e},n=function(n,o,r){return console.log("option name tmpl"),'\n    <img src="'.concat(n.path,' " alt="media-img-dupa" />\n    <strong> ').concat(n[o]?t(function(t){return console.log("html to string"),String(t).replace(/&|<|>|"/gi,(function(t){return e[t]}))}(n[o])):r," </strong>\n    (").concat(t(n.code),")\n")};!function(e){e.fn.extend({mediaAutoComplete:function(){console.log("media autocomplete"),this.each((function(t,o){var r=e(o),i=o.dataset,a=i.choiceName,c=i.choiceValue,l=i.loadEditUrl,u=i.nameMessage,s=r.find(".js-image-delete"),f=r.find(".js-selected-image"),d=r.find("input.autocomplete"),p=r.find("input.autocomplete").val().split(",").filter(String),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e.dropdown({delay:{search:250},values:t,forceSelection:!1,onChange:function(){s.removeClass("is-hidden")},apiSettings:{dataType:"JSON",cache:!1,beforeSend:function(e){return e.data.limit=30,e.data.criteria={search:{type:"contains",value:e.urlData.query},type:"image"},e},onResponse:function(e){return{success:!0,results:e._embedded.items.map((function(e){return{name:n(e,a,u),value:e[c]}}))}}}})};if(p.length>0){var h=r.find("div.menu");h.api({on:"now",method:"GET",url:l,beforeSend:function(e){return e.data[c]=p,e},onSuccess:function(t){t.forEach((function(t){m(r,[{name:n(t,a,u),value:t.code,selected:!0}]),h.append(e('<div class="item" data-value="'.concat(t[c],'"></div>')))}))}})}else m(r);s.length&&(p.length&&s.removeClass("is-hidden"),s.on("click",(function(){s.addClass("is-hidden"),d.val(""),f.html("")})))}))}})}($),function(e){e((function(){return e(".bitbag-media-autocomplete").mediaAutoComplete()}))}($)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{n(528);function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{textField:"data-bb-cms-text",fileField:"data-bb-cms-file"};t(this,n),this.config=e,this.textField=document.querySelector("[".concat(e.textField,"]")),this.fileField=document.querySelector("[".concat(e.fileField,"]"))}var r,i,a;return r=n,(i=[{key:"init",value:function(){if("object"!==e(this.config))throw new Error("Bitbag CMS Plugin - HandleCsvUpload class config is not a valid object");this._handleFields()}},{key:"_handleFields",value:function(){this._handleTextField(),this._handleFileField()}},{key:"_handleTextField",value:function(){var e=this;this.textField.addEventListener("click",(function(){e.fileField.click()}))}},{key:"_handleFileField",value:function(){var e=this;this.fileField.addEventListener("change",(function(t){e.textField.value=t.target.files[0].name}))}}])&&o(r.prototype,i),a&&o(r,a),n}();function i(e,t,n,o,r,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(o,r)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function c(e){i(a,o,r,c,l,"next",e)}function l(e){i(a,o,r,c,l,"throw",e)}c(void 0)}))}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{wrappersIndicator:"data-bb-cms-wrapper",lockFieldIndicator:"data-bb-cms-toggle-slug",bbTarget:"bitbag_sylius_cms_plugin_page"};l(this,e),this.wrappers=document.querySelectorAll("[".concat(t.wrappersIndicator,"]")),this.lockFieldIndicator="[".concat(t.lockFieldIndicator,"]"),this.bbTarget=t.bbTarget,this.config=t}var t,n,o,r,i;return t=e,n=[{key:"init",value:function(){if("object"!==c(this.config))throw new Error("Bitbag CMS Plugin - HandleSlugUpdate class config is not a valid object");if("string"!=typeof this.lockFieldIndicator||"string"!=typeof this.bbTarget)throw new Error("Bitbag CMS Plugin - HandleSlugUpdate class config key values are not valid strings");this._handleFields()}},{key:"_handleFields",value:function(){var e=this;this.wrappers.forEach((function(t){var n,o=t.dataset.locale,r=t.querySelector("#".concat(e.bbTarget,"_translations_").concat(o,"_name")),i=t.querySelector("#".concat(e.bbTarget,"_translations_").concat(o,"_slug")),a=t.querySelector(e.lockFieldIndicator);r&&i&&o&&(r.addEventListener("input",(function(t){t.preventDefault(),i.readOnly||(clearTimeout(n),n=setTimeout((function(){e._updateSlug(i,r.value)}),1e3))})),a&&a.addEventListener("click",(function(t){t.preventDefault(),e._toggleSlugModification(i,a)})))}))}},{key:"_updateSlug",value:(i=a(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.parentNode.classList.add("loading"),e.next=4,this._getValidSlug(t.dataset.url,n);case 4:t.value=e.sent,t.parentNode.classList.remove("loading"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])}))),function(e,t){return i.apply(this,arguments)})},{key:"_getValidSlug",value:(r=a(regeneratorRuntime.mark((function e(t,n){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t,"?name=").concat(n));case 3:return o=e.sent,e.next=6,o.json();case 6:return r=e.sent,e.abrupt("return",r.slug);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),function(e,t){return r.apply(this,arguments)})},{key:"_toggleSlugModification",value:function(e,t){e.readOnly=!e.readOnly;var n=t.querySelector("i");n.classList.toggle("lock"),n.classList.toggle("unlock")}}],n&&u(t.prototype,n),o&&u(t,o),e}();function f(e,t,n,o,r,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(o,r)}function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{previewButton:"data-bb-cms-preview-btn",previewModal:"data-bb-cms-preview-modal",channelSwitch:"data-bb-cms-channel",localeSwitch:"data-bb-cms-locale"};h(this,e),this.config=t,this.button=document.querySelector("[".concat(t.previewButton,"]")),this.modal=document.querySelector("[".concat(t.previewModal,"]")),this.modalSelector=t.previewModal,this.channelSelector=t.channelSwitch,this.localeSelector=t.localeSwitch}var t,n,o,r,i;return t=e,n=[{key:"init",value:function(){if("object"!==m(this.config))throw new Error("Bitbag CMS Plugin - HandlePreview class config is not a valid object");if("string"!=typeof this.localeSelector||"string"!=typeof this.channelSelector||"string"!=typeof this.modalSelector)throw new Error("Bitbag CMS Plugin - HandlePreview class config key values are not valid strings");this._resourcePreview()}},{key:"_$_CKEDITOR_MODAL_SHOW",value:function(){return $("[".concat(this.modalSelector,"]")).modal("show")}},{key:"_$_CKEDITOR_UPDATE_INSTANCES",value:function(){d(CKEDITOR.instances).forEach((function(e){return e.updateElement()}))}},{key:"_resourcePreview",value:function(){var e=this;this.button.addEventListener("click",(function(t){t.preventDefault(),e._$_CKEDITOR_UPDATE_INSTANCES,e._createPreview(),e._$_CKEDITOR_MODAL_SHOW()}))}},{key:"_createPreview",value:(r=regeneratorRuntime.mark((function e(){var t,n,o,r,i,a,c,l,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.modal.querySelector(".ui.loadable").classList.add("loading"),this.modal.disabled=!0,t=document.querySelector("[".concat(this.channelSelector,"]")).value,n=document.querySelector("[".concat(this.localeSelector,"]")).value,o=this.button.dataset.url,r=this.button.closest("form"),i={method:"POST",body:new FormData(r)},e.prev=7,e.next=10,fetch("".concat(o,"?_channel_code=").concat(t,"&_locale=").concat(n),i);case 10:return a=e.sent,e.next=13,a.text();case 13:c=e.sent,l=new Blob([c],{type:"text/html",charset:"utf-8"}),u=window.URL.createObjectURL(l),this.modal.querySelector("iframe").src=u,e.next=22;break;case 19:e.prev=19,e.t0=e.catch(7),console.log(e.t0);case 22:return e.prev=22,this.modal.querySelector(".ui.loadable").classList.remove("loading"),this.modal.disabled=!1,e.finish(22);case 26:case"end":return e.stop()}}),e,this,[[7,19,22,26]])})),i=function(){var e=this,t=arguments;return new Promise((function(n,o){var i=r.apply(e,t);function a(e){f(i,n,o,a,c,"next",e)}function c(e){f(i,n,o,a,c,"throw",e)}a(void 0)}))},function(){return i.apply(this,arguments)})}],n&&v(t.prototype,n),o&&v(t,o),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g(this,e),this.config=t}var t,n,o;return t=e,(n=[{key:"init",value:function(){if("object"!==b(this.config))throw new Error("Bitbag CMS Plugin - HandleAutoComplete class config is not a valid object")}}])&&S(t.prototype,n),o&&S(t,o),e}();var _;document.querySelector("[data-bb-cms-text]")&&document.querySelector("[data-bb-cms-file]")&&(new r).init(),(null===(_=document.querySelectorAll("[data-bb-cms-wrapper]"))||void 0===_?void 0:_.length)>0&&(new s).init(),document.querySelector("[data-bb-cms-preview-btn]")&&document.querySelector("[data-bb-cms-preview-modal]")&&(new y).init(),(new w).init()})()})();