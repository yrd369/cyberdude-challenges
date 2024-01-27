(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();var k=Object.defineProperty,O=(o,e,i)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i,h=(o,e,i)=>(O(o,typeof e!="symbol"?e+"":e,i),i);const N=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,A=/^-?[0-9]\d*$/,G=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,q=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,D=o=>{let e=o;return typeof o=="string"&&(e=o.trim()),!e},z=o=>N.test(o),B=(o,e)=>o.length>e,K=(o,e)=>o.length<e,H=o=>typeof o!="string"?!1:!isNaN(+o)&&!isNaN(parseFloat(o)),U=o=>A.test(o),J=o=>G.test(o),X=o=>q.test(o),Z=(o,e)=>o>e,W=(o,e)=>o<e,p=o=>typeof o!="string"||o==="";var u=(o=>(o.Required="required",o.Email="email",o.MinLength="minLength",o.MaxLength="maxLength",o.Password="password",o.Number="number",o.Integer="integer",o.MaxNumber="maxNumber",o.MinNumber="minNumber",o.StrongPassword="strongPassword",o.CustomRegexp="customRegexp",o.MinFilesCount="minFilesCount",o.MaxFilesCount="maxFilesCount",o.Files="files",o))(u||{}),w=(o=>(o.Required="required",o))(w||{}),T=(o=>(o.Label="label",o.LabelArrow="labelArrow",o))(T||{});const x=[{key:u.Required,dict:{en:"The field is required"}},{key:u.Email,dict:{en:"Email has invalid format"}},{key:u.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:u.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:u.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:u.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:u.Number,dict:{en:"Value should be a number"}},{key:u.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:u.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:u.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:u.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:u.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],Y="Value is incorrect",F=o=>typeof o=="object"&&o!==null&&"then"in o&&typeof o.then=="function",Q=o=>{let e=o;const i=[];for(;e;)i.unshift(e),e=e.parentNode;return i},R=(o,e)=>{const i=[...e].reverse();for(let t=0,s=i.length;t<s;++t){const r=i[t];for(const l in o){const a=o[l];if(a.groupElem===r)return[l,a]}}return null},m=o=>Array.isArray(o)?o.filter(e=>e.length>0):typeof o=="string"&&o.trim()?[...o.split(" ").filter(e=>e.length>0)]:[],y=o=>o instanceof Element||o instanceof HTMLDocument,ee=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",E=5,L={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1,submitFormAutomatically:!1};class te{constructor(e,i,t){h(this,"form",null),h(this,"fields",{}),h(this,"groupFields",{}),h(this,"errors",{}),h(this,"isValid",!1),h(this,"isSubmitted",!1),h(this,"globalConfig",L),h(this,"errorLabels",{}),h(this,"successLabels",{}),h(this,"eventListeners",[]),h(this,"dictLocale",x),h(this,"currentLocale","en"),h(this,"customStyleTags",{}),h(this,"onSuccessCallback"),h(this,"onFailCallback"),h(this,"onValidateCallback"),h(this,"tooltips",[]),h(this,"lastScrollPosition"),h(this,"isScrollTick"),h(this,"fieldIds",new Map),h(this,"getKeyByFieldSelector",s=>this.fieldIds.get(s)),h(this,"getFieldSelectorByKey",s=>{for(const[r,l]of this.fieldIds)if(s===l)return r}),h(this,"getCompatibleFields",()=>{const s={};return Object.keys(this.fields).forEach(r=>{let l=r;const a=this.getFieldSelectorByKey(r);typeof a=="string"&&(l=a),s[l]={...this.fields[r]}}),s}),h(this,"setKeyByFieldSelector",s=>{if(this.fieldIds.has(s))return this.fieldIds.get(s);const r=String(this.fieldIds.size+1);return this.fieldIds.set(s,r),r}),h(this,"refreshAllTooltips",()=>{this.tooltips.forEach(s=>{s.refresh()})}),h(this,"handleDocumentScroll",()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame(()=>{this.refreshAllTooltips(),this.isScrollTick=!1}),this.isScrollTick=!0)}),h(this,"formSubmitHandler",s=>{s.preventDefault(),this.isSubmitted=!0,this.validateHandler(s)}),h(this,"handleFieldChange",s=>{let r;for(const l in this.fields)if(this.fields[l].elem===s){r=l;break}r&&(this.fields[r].touched=!0,this.validateField(r,!0))}),h(this,"handleGroupChange",s=>{let r;for(const l in this.groupFields)if(this.groupFields[l].elems.find(c=>c===s)){r=l;break}r&&(this.groupFields[r].touched=!0,this.validateGroup(r,!0))}),h(this,"handlerChange",s=>{s.target&&(this.handleFieldChange(s.target),this.handleGroupChange(s.target),this.renderErrors())}),this.initialize(e,i,t)}initialize(e,i,t){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=L,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en",typeof e=="string"){const s=document.querySelector(e);if(!s)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(s)}else if(e instanceof HTMLFormElement)this.setForm(e);else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");if(this.globalConfig={...L,...i},t&&(this.dictLocale=[...t,...x]),this.isTooltip()){const s=document.createElement("style");s.textContent=ee,this.customStyleTags[T.Label]=document.head.appendChild(s),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e,i,t){var s;const r=t??e;let l=(s=this.dictLocale.find(a=>a.key===r))==null?void 0:s.dict[this.currentLocale];if(l||t&&(l=t),l&&i!==void 0)switch(e){case u.MaxLength:case u.MinLength:case u.MaxNumber:case u.MinNumber:case u.MinFilesCount:case u.MaxFilesCount:l=l.replace(":value",String(i))}return l||t||Y}getFieldErrorMessage(e,i){const t=typeof e.errorMessage=="function"?e.errorMessage(this.getElemValue(i),this.fields):e.errorMessage;return this.getLocalisedString(e.rule,e.value,t)}getFieldSuccessMessage(e,i){const t=typeof e=="function"?e(this.getElemValue(i),this.fields):e;return this.getLocalisedString(void 0,void 0,t)}getGroupErrorMessage(e){return this.getLocalisedString(e.rule,void 0,e.errorMessage)}getGroupSuccessMessage(e){if(e.successMessage)return this.getLocalisedString(void 0,void 0,e.successMessage)}setFieldInvalid(e,i){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(i,this.fields[e].elem)}setFieldValid(e,i){this.fields[e].isValid=!0,i!==void 0&&(this.fields[e].successMessage=this.getFieldSuccessMessage(i,this.fields[e].elem))}setGroupInvalid(e,i){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(i)}setGroupValid(e,i){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(i)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,i,t){switch(t.rule){case w.Required:i.every(s=>!s.checked)?this.setGroupInvalid(e,t):this.setGroupValid(e,t)}}validateFieldRule(e,i,t,s=!1){const r=t.value,l=this.getElemValue(i);if(t.plugin){t.plugin(l,this.getCompatibleFields())||this.setFieldInvalid(e,t);return}switch(t.rule){case u.Required:{D(l)&&this.setFieldInvalid(e,t);break}case u.Email:{if(p(l))break;z(l)||this.setFieldInvalid(e,t);break}case u.MaxLength:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof r!="number"){console.error(`Value for ${t.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(p(l))break;B(l,r)&&this.setFieldInvalid(e,t);break}case u.MinLength:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof r!="number"){console.error(`Value for ${t.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(p(l))break;K(l,r)&&this.setFieldInvalid(e,t);break}case u.Password:{if(p(l))break;J(l)||this.setFieldInvalid(e,t);break}case u.StrongPassword:{if(p(l))break;X(l)||this.setFieldInvalid(e,t);break}case u.Number:{if(p(l))break;H(l)||this.setFieldInvalid(e,t);break}case u.Integer:{if(p(l))break;U(l)||this.setFieldInvalid(e,t);break}case u.MaxNumber:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof r!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(p(l))break;const a=+l;(Number.isNaN(a)||Z(a,r))&&this.setFieldInvalid(e,t);break}case u.MinNumber:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof r!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(p(l))break;const a=+l;(Number.isNaN(a)||W(a,r))&&this.setFieldInvalid(e,t);break}case u.CustomRegexp:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);return}let a;try{a=new RegExp(r)}catch{console.error(`Value for ${t.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,t);break}const c=String(l);c!==""&&!a.test(c)&&this.setFieldInvalid(e,t);break}case u.MinFilesCount:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof r!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(Number.isFinite(l==null?void 0:l.length)&&l.length<r){this.setFieldInvalid(e,t);break}break}case u.MaxFilesCount:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof r!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(Number.isFinite(l==null?void 0:l.length)&&l.length>r){this.setFieldInvalid(e,t);break}break}case u.Files:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);return}if(typeof r!="object"){console.error(`Value for ${t.rule} rule for [${e}] field should be an object. This field will be always invalid.`),this.setFieldInvalid(e,t);return}const a=r.files;if(typeof a!="object"){console.error(`Value for ${t.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`),this.setFieldInvalid(e,t);return}const c=(n,d)=>{const f=Number.isFinite(d.minSize)&&n.size<d.minSize,g=Number.isFinite(d.maxSize)&&n.size>d.maxSize,P=Array.isArray(d.names)&&!d.names.includes(n.name),_=Array.isArray(d.extensions)&&!d.extensions.includes(n.name.split(".")[n.name.split(".").length-1]),j=Array.isArray(d.types)&&!d.types.includes(n.type);return f||g||P||_||j};if(typeof l=="object"&&l!==null)for(let n=0,d=l.length;n<d;++n){const f=l.item(n);if(!f){this.setFieldInvalid(e,t);break}if(c(f,a)){this.setFieldInvalid(e,t);break}}break}default:{if(typeof t.validator!="function"){console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),this.setFieldInvalid(e,t);return}const a=t.validator(l,this.getCompatibleFields());if(typeof a!="boolean"&&typeof a!="function"&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),typeof a=="function")if(s)this.fields[e].asyncCheckPending=!0;else{this.fields[e].asyncCheckPending=!1;const c=a();if(!F(c)){console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),this.setFieldInvalid(e,t);return}return c.then(n=>{n||this.setFieldInvalid(e,t)}).catch(()=>{this.setFieldInvalid(e,t)})}a||this.setFieldInvalid(e,t)}}}isFormValid(){let e=!0;for(let i=0,t=Object.values(this.fields).length;i<t;++i){const s=Object.values(this.fields)[i];if(s.isValid===void 0){e=void 0;break}if(s.isValid===!1){e=!1;break}}for(let i=0,t=Object.values(this.groupFields).length;i<t;++i){const s=Object.values(this.groupFields)[i];if(s.isValid===void 0){e=void 0;break}if(s.isValid===!1){e=!1;break}}return e}validateField(e,i=!1){var t;const s=this.fields[e];s.isValid=!0;const r=[];return[...s.rules].reverse().forEach(l=>{const a=this.validateFieldRule(e,s.elem,l,i);F(a)&&r.push(a)}),s.isValid&&this.setFieldValid(e,(t=s.config)==null?void 0:t.successMessage),Promise.allSettled(r).finally(()=>{var l;i&&((l=this.onValidateCallback)==null||l.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}revalidateField(e){if(typeof e!="string"&&!y(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const i=this.getKeyByFieldSelector(e);return!i||!this.fields[i]?(console.error("Field not found. Check the field selector."),Promise.reject()):new Promise(t=>{this.validateField(i,!0).finally(()=>{this.clearFieldStyle(i),this.clearFieldLabel(i),this.renderFieldError(i,!0),t(!!this.fields[i].isValid)})})}revalidateGroup(e){if(typeof e!="string"&&!y(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");const i=this.getKeyByFieldSelector(e);return!i||!this.groupFields[i]?(console.error("Group not found. Check the group selector."),Promise.reject()):new Promise(t=>{this.validateGroup(i).finally(()=>{this.clearFieldLabel(i),this.renderGroupError(i,!0),t(!!this.groupFields[i].isValid)})})}validateGroup(e,i=!1){const t=this.groupFields[e],s=[];return[...t.rules].reverse().forEach(r=>{const l=this.validateGroupRule(e,t.elems,r);F(l)&&s.push(l)}),Promise.allSettled(s).finally(()=>{var r;i&&((r=this.onValidateCallback)==null||r.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}focusInvalidField(){for(const e in this.fields){const i=this.fields[e];if(!i.isValid){setTimeout(()=>i.elem.focus(),0);break}}}afterSubmitValidation(e=!1){this.renderErrors(e),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(e=!1){return new Promise(i=>{const t=[];Object.keys(this.fields).forEach(s=>{const r=this.validateField(s);F(r)&&t.push(r)}),Object.keys(this.groupFields).forEach(s=>{const r=this.validateGroup(s);F(r)&&t.push(r)}),Promise.allSettled(t).then(()=>{var s;this.afterSubmitValidation(e),(s=this.onValidateCallback)==null||s.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}),i(!!t.length)})})}revalidate(){return new Promise(e=>{this.validateHandler(void 0,!0).finally(()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),e(this.isValid)})})}validateHandler(e,i=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(i).finally(()=>{var t,s,r;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?((t=this.onSuccessCallback)==null||t.call(this,e),this.globalConfig.submitFormAutomatically&&((s=e==null?void 0:e.currentTarget)==null||s.submit())):(r=this.onFailCallback)==null||r.call(this,this.getCompatibleFields(),this.groupFields)})}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,i,t){i.addEventListener(e,t),this.eventListeners.push({type:e,elem:i,func:t})}removeListener(e,i,t){i.removeEventListener(e,t),this.eventListeners=this.eventListeners.filter(s=>s.type!==e||s.elem!==i)}addField(e,i,t){if(typeof e!="string"&&!y(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let s;if(typeof e=="string"?s=this.form.querySelector(e):s=e,!s)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(i)||!i.length)throw Error("Rules argument should be an array and should contain at least 1 element.");i.forEach(l=>{if(!("rule"in l||"validator"in l||"plugin"in l))throw Error("Rules argument must contain at least one rule or validator property.");if(!l.validator&&!l.plugin&&(!l.rule||!Object.values(u).includes(l.rule)))throw Error(`Rule should be one of these types: ${Object.values(u).join(", ")}. Provided value: ${l.rule}`)});const r=this.setKeyByFieldSelector(e);return this.fields[r]={elem:s,rules:i,isValid:void 0,touched:!1,config:t},this.setListeners(s),(this.isSubmitted||this.globalConfig.validateBeforeSubmitting)&&this.validateField(r),this}removeField(e){if(typeof e!="string"&&!y(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const i=this.getKeyByFieldSelector(e);if(!i||!this.fields[i])return console.error("Field not found. Check the field selector."),this;const t=this.getListenerType(this.fields[i].elem.type);return this.removeListener(t,this.fields[i].elem,this.handlerChange),this.clearErrors(),delete this.fields[i],this}removeGroup(e){if(typeof e!="string")throw Error("Group selector is not valid. Please specify a string selector.");const i=this.getKeyByFieldSelector(e);return!i||!this.groupFields[i]?(console.error("Group not found. Check the group selector."),this):(this.groupFields[i].elems.forEach(t=>{const s=this.getListenerType(t.type);this.removeListener(s,t,this.handlerChange)}),this.clearErrors(),delete this.groupFields[i],this)}addRequiredGroup(e,i,t,s){if(typeof e!="string"&&!y(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");let r;if(typeof e=="string"?r=this.form.querySelector(e):r=e,!r)throw Error("Group selector not found! Please check the group selector.");const l=r.querySelectorAll("input"),a=Array.from(l).filter(n=>{const d=R(this.groupFields,Q(n));return d?d[1].elems.find(f=>f!==n):!0}),c=this.setKeyByFieldSelector(e);return this.groupFields[c]={rules:[{rule:w.Required,errorMessage:i,successMessage:s}],groupElem:r,elems:a,touched:!1,isValid:void 0,config:t},l.forEach(n=>{this.setListeners(n)}),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(e){const i=this.getListenerType(e.type);this.removeListener(i,e,this.handlerChange),this.addListener(i,e,this.handlerChange)}clearFieldLabel(e){var i,t;(i=this.errorLabels[e])==null||i.remove(),(t=this.successLabels[e])==null||t.remove()}clearFieldStyle(e){var i,t,s,r;const l=this.fields[e],a=((i=l.config)==null?void 0:i.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(a).forEach(n=>{l.elem.style[n]=""});const c=((t=l.config)==null?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(c).forEach(n=>{l.elem.style[n]=""}),l.elem.classList.remove(...m(((s=l.config)==null?void 0:s.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),...m(((r=l.config)==null?void 0:r.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var e,i;Object.keys(this.errorLabels).forEach(t=>this.errorLabels[t].remove()),Object.keys(this.successLabels).forEach(t=>this.successLabels[t].remove());for(const t in this.fields)this.clearFieldStyle(t);for(const t in this.groupFields){const s=this.groupFields[t],r=((e=s.config)==null?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(r).forEach(a=>{s.elems.forEach(c=>{var n;c.style[a]="",c.classList.remove(...m(((n=s.config)==null?void 0:n.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))})});const l=((i=s.config)==null?void 0:i.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(l).forEach(a=>{s.elems.forEach(c=>{var n;c.style[a]="",c.classList.remove(...m(((n=s.config)==null?void 0:n.successFieldCssClass)||this.globalConfig.successFieldCssClass))})})}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let i=0,t=e.length;i<t;++i)e[i].setAttribute("data-just-validate-fallback-disabled",e[i].disabled?"true":"false"),e[i].setAttribute("disabled","disabled"),e[i].style.pointerEvents="none",e[i].style.webkitFilter="grayscale(100%)",e[i].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let i=0,t=e.length;i<t;++i)e[i].getAttribute("data-just-validate-fallback-disabled")!=="true"&&e[i].removeAttribute("disabled"),e[i].style.pointerEvents="",e[i].style.webkitFilter="",e[i].style.filter=""}renderTooltip(e,i,t){var s;const{top:r,left:l,width:a,height:c}=e.getBoundingClientRect(),n=i.getBoundingClientRect(),d=t||((s=this.globalConfig.tooltip)==null?void 0:s.position);switch(d){case"left":{i.style.top=`${r+c/2-n.height/2}px`,i.style.left=`${l-n.width-E}px`;break}case"top":{i.style.top=`${r-n.height-E}px`,i.style.left=`${l+a/2-n.width/2}px`;break}case"right":{i.style.top=`${r+c/2-n.height/2}px`,i.style.left=`${l+a+E}px`;break}case"bottom":{i.style.top=`${r+c+E}px`,i.style.left=`${l+a/2-n.width/2}px`;break}}return i.dataset.direction=d,{refresh:()=>{this.renderTooltip(e,i,t)}}}createErrorLabelElem(e,i,t){const s=document.createElement("div");s.innerHTML=i;const r=this.isTooltip()?t==null?void 0:t.errorLabelStyle:(t==null?void 0:t.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(s.style,r),s.classList.add(...m((t==null?void 0:t.errorLabelCssClass)||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(s.dataset.tooltip="true"),this.globalConfig.testingMode&&(s.dataset.testId=`error-label-${e}`),this.errorLabels[e]=s,s}createSuccessLabelElem(e,i,t){if(i===void 0)return null;const s=document.createElement("div");s.innerHTML=i;const r=(t==null?void 0:t.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(s.style,r),s.classList.add(...m((t==null?void 0:t.successLabelCssClass)||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(s.dataset.testId=`success-label-${e}`),this.successLabels[e]=s,s}renderErrorsContainer(e,i){const t=i||this.globalConfig.errorsContainer;if(typeof t=="string"){const s=this.form.querySelector(t);if(s)return s.appendChild(e),!0;console.error(`Error container with ${t} selector not found. Errors will be rendered as usual`)}return t instanceof Element?(t.appendChild(e),!0):(t!==void 0&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(e,i,t,s){!s&&this.renderErrorsContainer(i,t)||e.appendChild(i)}renderFieldLabel(e,i,t,s){var r,l,a,c,n,d,f;if(!(!s&&this.renderErrorsContainer(i,t)))if(e.type==="checkbox"||e.type==="radio"){const g=document.querySelector(`label[for="${e.getAttribute("id")}"]`);((l=(r=e.parentElement)==null?void 0:r.tagName)==null?void 0:l.toLowerCase())==="label"?(c=(a=e.parentElement)==null?void 0:a.parentElement)==null||c.appendChild(i):g?(n=g.parentElement)==null||n.appendChild(i):(d=e.parentElement)==null||d.appendChild(i)}else(f=e.parentElement)==null||f.appendChild(i)}showLabels(e,i){Object.keys(e).forEach((t,s)=>{const r=e[t],l=this.getKeyByFieldSelector(t);if(!l||!this.fields[l]){console.error("Field not found. Check the field selector.");return}const a=this.fields[l];a.isValid=!i,this.clearFieldStyle(l),this.clearFieldLabel(l),this.renderFieldError(l,!1,r),s===0&&this.globalConfig.focusInvalidField&&setTimeout(()=>a.elem.focus(),0)})}showErrors(e){if(typeof e!="object")throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(e,!0)}showSuccessLabels(e){if(typeof e!="object")throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(e,!1)}renderFieldError(e,i=!1,t){var s,r,l,a,c,n;const d=this.fields[e];if(d.isValid===!1&&(this.isValid=!1),d.isValid===void 0||!i&&!this.isSubmitted&&!d.touched&&t===void 0)return;if(d.isValid){if(!d.asyncCheckPending){const g=this.createSuccessLabelElem(e,t!==void 0?t:d.successMessage,d.config);g&&this.renderFieldLabel(d.elem,g,(s=d.config)==null?void 0:s.errorsContainer,!0),d.elem.classList.add(...m(((r=d.config)==null?void 0:r.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}d.elem.classList.add(...m(((l=d.config)==null?void 0:l.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const f=this.createErrorLabelElem(e,t!==void 0?t:d.errorMessage,d.config);this.renderFieldLabel(d.elem,f,(a=d.config)==null?void 0:a.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(d.elem,f,(n=(c=d.config)==null?void 0:c.tooltip)==null?void 0:n.position))}renderGroupError(e,i=!0){var t,s,r,l;const a=this.groupFields[e];if(a.isValid===!1&&(this.isValid=!1),a.isValid===void 0||!i&&!this.isSubmitted&&!a.touched)return;if(a.isValid){a.elems.forEach(d=>{var f,g;Object.assign(d.style,((f=a.config)==null?void 0:f.successFieldStyle)||this.globalConfig.successFieldStyle),d.classList.add(...m(((g=a.config)==null?void 0:g.successFieldCssClass)||this.globalConfig.successFieldCssClass))});const n=this.createSuccessLabelElem(e,a.successMessage,a.config);n&&this.renderGroupLabel(a.groupElem,n,(t=a.config)==null?void 0:t.errorsContainer,!0);return}this.isValid=!1,a.elems.forEach(n=>{var d,f;Object.assign(n.style,((d=a.config)==null?void 0:d.errorFieldStyle)||this.globalConfig.errorFieldStyle),n.classList.add(...m(((f=a.config)==null?void 0:f.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))});const c=this.createErrorLabelElem(e,a.errorMessage,a.config);this.renderGroupLabel(a.groupElem,c,(s=a.config)==null?void 0:s.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(a.groupElem,c,(l=(r=a.config)==null?void 0:r.tooltip)==null?void 0:l.position))}renderErrors(e=!1){if(!(!this.isSubmitted&&!e&&!this.globalConfig.validateBeforeSubmitting)){this.clearErrors(),this.isValid=!0;for(const i in this.groupFields)this.renderGroupError(i);for(const i in this.fields)this.renderFieldError(i)}}destroy(){this.eventListeners.forEach(e=>{this.removeListener(e.type,e.elem,e.func)}),Object.keys(this.customStyleTags).forEach(e=>{this.customStyleTags[e].remove()}),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach(e=>{const i=this.getFieldSelectorByKey(e);i&&this.addField(i,[...this.fields[e].rules],this.fields[e].config)})):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){if(typeof e!="string"&&e!==void 0){console.error("Current locale should be a string");return}this.currentLocale=e,this.isSubmitted&&this.validate()}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}onValidate(e){return this.onValidateCallback=e,this}}let S;const ie=new Uint8Array(16);function se(){if(!S&&(S=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!S))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return S(ie)}const b=[];for(let o=0;o<256;++o)b.push((o+256).toString(16).slice(1));function re(o,e=0){return b[o[e+0]]+b[o[e+1]]+b[o[e+2]]+b[o[e+3]]+"-"+b[o[e+4]]+b[o[e+5]]+"-"+b[o[e+6]]+b[o[e+7]]+"-"+b[o[e+8]]+b[o[e+9]]+"-"+b[o[e+10]]+b[o[e+11]]+b[o[e+12]]+b[o[e+13]]+b[o[e+14]]+b[o[e+15]]}const le=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),V={randomUUID:le};function oe(o,e,i){if(V.randomUUID&&!e&&!o)return V.randomUUID();o=o||{};const t=o.random||(o.rng||se)();if(t[6]=t[6]&15|64,t[8]=t[8]&63|128,e){i=i||0;for(let s=0;s<16;++s)e[i+s]=t[s];return e}return re(t)}const I=document.getElementById("userData"),v=new te(I),ae=document.querySelector("#result-Div"),M=document.querySelector("#table"),C="data";v.addField("#userName",[{rule:"required",errorMessage:"Please enter a valid name"},{rule:"minLength",value:2}]);v.addField("#email",[{rule:"required",errorMessage:"Please enter a valid email address"}]);v.addField("#mobileNo",[{rule:"required",errorMessage:"Enter a valid mobile number"},{rule:"minLength",value:10},{rule:"maxLength",value:10}]);v.addField("#reference",[{rule:"required",errorMessage:"Select an option to continue"}]);v.addField("#checkBox",[{rule:"required"}]);v.onSuccess(o=>{const e=new FormData(I);e.append("id",oe()),e.append("createdAt",Date.now());const i=Object.fromEntries(e.entries()),t=localStorage.getItem("data"),s=JSON.parse(t),r=[];s?(s.push(i),localStorage.setItem(C,JSON.stringify(s))):(r.push(i),localStorage.setItem(C,JSON.stringify(r))),$(),I.reset()});function $(){const o=localStorage.getItem(C),e=JSON.parse(o);if(e&&e.length>0){ae.classList.remove("hidden"),M.innerHTML="";const i=[];e.map(t=>{const s=document.createElement("tr"),r=document.createElement("td"),l=document.createElement("td"),a=document.createElement("td"),c=document.createElement("button");r.classList.add("px-2","py-1","border","w-45%"),r.textContent=t.userName,l.classList.add("px-2","py-1","border","w-45%"),l.textContent=t.mobileNo,c.className="bg-red-500 text-white px-2 py-1 rounded text-sm",c.textContent="Delete",c.addEventListener("click",n=>{ne(t)}),a.classList.add("px-2","py-1","border","w-10"),a.append(c),s.append(r,l,a),i.push(s)}),i.forEach(t=>{M.append(t)})}}function ne(o){if(confirm(`Do you want to delete ${o.userName}?`)){const i=localStorage.getItem(C),s=JSON.parse(i).filter(r=>r.id!=o.id);localStorage.setItem(C,JSON.stringify(s)),$()}}
