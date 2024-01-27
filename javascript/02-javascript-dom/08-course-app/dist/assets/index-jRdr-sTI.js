(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();var P=Object.defineProperty,k=(o,e,s)=>e in o?P(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,u=(o,e,s)=>(k(o,typeof e!="symbol"?e+"":e,s),s);const _=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,j=/^-?[0-9]\d*$/,O=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,N=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,A=o=>{let e=o;return typeof o=="string"&&(e=o.trim()),!e},G=o=>_.test(o),q=(o,e)=>o.length>e,B=(o,e)=>o.length<e,D=o=>typeof o!="string"?!1:!isNaN(+o)&&!isNaN(parseFloat(o)),z=o=>j.test(o),K=o=>O.test(o),H=o=>N.test(o),X=(o,e)=>o>e,J=(o,e)=>o<e,p=o=>typeof o!="string"||o==="";var c=(o=>(o.Required="required",o.Email="email",o.MinLength="minLength",o.MaxLength="maxLength",o.Password="password",o.Number="number",o.Integer="integer",o.MaxNumber="maxNumber",o.MinNumber="minNumber",o.StrongPassword="strongPassword",o.CustomRegexp="customRegexp",o.MinFilesCount="minFilesCount",o.MaxFilesCount="maxFilesCount",o.Files="files",o))(c||{}),S=(o=>(o.Required="required",o))(S||{}),x=(o=>(o.Label="label",o.LabelArrow="labelArrow",o))(x||{});const w=[{key:c.Required,dict:{en:"The field is required"}},{key:c.Email,dict:{en:"Email has invalid format"}},{key:c.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:c.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:c.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:c.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:c.Number,dict:{en:"Value should be a number"}},{key:c.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:c.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:c.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:c.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:c.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],Z="Value is incorrect",m=o=>typeof o=="object"&&o!==null&&"then"in o&&typeof o.then=="function",W=o=>{let e=o;const s=[];for(;e;)s.unshift(e),e=e.parentNode;return s},Y=(o,e)=>{const s=[...e].reverse();for(let t=0,i=s.length;t<i;++t){const r=s[t];for(const l in o){const a=o[l];if(a.groupElem===r)return[l,a]}}return null},g=o=>Array.isArray(o)?o.filter(e=>e.length>0):typeof o=="string"&&o.trim()?[...o.split(" ").filter(e=>e.length>0)]:[],v=o=>o instanceof Element||o instanceof HTMLDocument,U=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",y=5,E={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1,submitFormAutomatically:!1};class Q{constructor(e,s,t){u(this,"form",null),u(this,"fields",{}),u(this,"groupFields",{}),u(this,"errors",{}),u(this,"isValid",!1),u(this,"isSubmitted",!1),u(this,"globalConfig",E),u(this,"errorLabels",{}),u(this,"successLabels",{}),u(this,"eventListeners",[]),u(this,"dictLocale",w),u(this,"currentLocale","en"),u(this,"customStyleTags",{}),u(this,"onSuccessCallback"),u(this,"onFailCallback"),u(this,"onValidateCallback"),u(this,"tooltips",[]),u(this,"lastScrollPosition"),u(this,"isScrollTick"),u(this,"fieldIds",new Map),u(this,"getKeyByFieldSelector",i=>this.fieldIds.get(i)),u(this,"getFieldSelectorByKey",i=>{for(const[r,l]of this.fieldIds)if(i===l)return r}),u(this,"getCompatibleFields",()=>{const i={};return Object.keys(this.fields).forEach(r=>{let l=r;const a=this.getFieldSelectorByKey(r);typeof a=="string"&&(l=a),i[l]={...this.fields[r]}}),i}),u(this,"setKeyByFieldSelector",i=>{if(this.fieldIds.has(i))return this.fieldIds.get(i);const r=String(this.fieldIds.size+1);return this.fieldIds.set(i,r),r}),u(this,"refreshAllTooltips",()=>{this.tooltips.forEach(i=>{i.refresh()})}),u(this,"handleDocumentScroll",()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame(()=>{this.refreshAllTooltips(),this.isScrollTick=!1}),this.isScrollTick=!0)}),u(this,"formSubmitHandler",i=>{i.preventDefault(),this.isSubmitted=!0,this.validateHandler(i)}),u(this,"handleFieldChange",i=>{let r;for(const l in this.fields)if(this.fields[l].elem===i){r=l;break}r&&(this.fields[r].touched=!0,this.validateField(r,!0))}),u(this,"handleGroupChange",i=>{let r;for(const l in this.groupFields)if(this.groupFields[l].elems.find(h=>h===i)){r=l;break}r&&(this.groupFields[r].touched=!0,this.validateGroup(r,!0))}),u(this,"handlerChange",i=>{i.target&&(this.handleFieldChange(i.target),this.handleGroupChange(i.target),this.renderErrors())}),this.initialize(e,s,t)}initialize(e,s,t){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=E,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en",typeof e=="string"){const i=document.querySelector(e);if(!i)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(i)}else if(e instanceof HTMLFormElement)this.setForm(e);else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");if(this.globalConfig={...E,...s},t&&(this.dictLocale=[...t,...w]),this.isTooltip()){const i=document.createElement("style");i.textContent=U,this.customStyleTags[x.Label]=document.head.appendChild(i),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e,s,t){var i;const r=t??e;let l=(i=this.dictLocale.find(a=>a.key===r))==null?void 0:i.dict[this.currentLocale];if(l||t&&(l=t),l&&s!==void 0)switch(e){case c.MaxLength:case c.MinLength:case c.MaxNumber:case c.MinNumber:case c.MinFilesCount:case c.MaxFilesCount:l=l.replace(":value",String(s))}return l||t||Z}getFieldErrorMessage(e,s){const t=typeof e.errorMessage=="function"?e.errorMessage(this.getElemValue(s),this.fields):e.errorMessage;return this.getLocalisedString(e.rule,e.value,t)}getFieldSuccessMessage(e,s){const t=typeof e=="function"?e(this.getElemValue(s),this.fields):e;return this.getLocalisedString(void 0,void 0,t)}getGroupErrorMessage(e){return this.getLocalisedString(e.rule,void 0,e.errorMessage)}getGroupSuccessMessage(e){if(e.successMessage)return this.getLocalisedString(void 0,void 0,e.successMessage)}setFieldInvalid(e,s){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(s,this.fields[e].elem)}setFieldValid(e,s){this.fields[e].isValid=!0,s!==void 0&&(this.fields[e].successMessage=this.getFieldSuccessMessage(s,this.fields[e].elem))}setGroupInvalid(e,s){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(s)}setGroupValid(e,s){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(s)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,s,t){switch(t.rule){case S.Required:s.every(i=>!i.checked)?this.setGroupInvalid(e,t):this.setGroupValid(e,t)}}validateFieldRule(e,s,t,i=!1){const r=t.value,l=this.getElemValue(s);if(t.plugin){t.plugin(l,this.getCompatibleFields())||this.setFieldInvalid(e,t);return}switch(t.rule){case c.Required:{A(l)&&this.setFieldInvalid(e,t);break}case c.Email:{if(p(l))break;G(l)||this.setFieldInvalid(e,t);break}case c.MaxLength:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof r!="number"){console.error(`Value for ${t.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(p(l))break;q(l,r)&&this.setFieldInvalid(e,t);break}case c.MinLength:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof r!="number"){console.error(`Value for ${t.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(p(l))break;B(l,r)&&this.setFieldInvalid(e,t);break}case c.Password:{if(p(l))break;K(l)||this.setFieldInvalid(e,t);break}case c.StrongPassword:{if(p(l))break;H(l)||this.setFieldInvalid(e,t);break}case c.Number:{if(p(l))break;D(l)||this.setFieldInvalid(e,t);break}case c.Integer:{if(p(l))break;z(l)||this.setFieldInvalid(e,t);break}case c.MaxNumber:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof r!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(p(l))break;const a=+l;(Number.isNaN(a)||X(a,r))&&this.setFieldInvalid(e,t);break}case c.MinNumber:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof r!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(p(l))break;const a=+l;(Number.isNaN(a)||J(a,r))&&this.setFieldInvalid(e,t);break}case c.CustomRegexp:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);return}let a;try{a=new RegExp(r)}catch{console.error(`Value for ${t.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,t);break}const h=String(l);h!==""&&!a.test(h)&&this.setFieldInvalid(e,t);break}case c.MinFilesCount:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof r!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(Number.isFinite(l==null?void 0:l.length)&&l.length<r){this.setFieldInvalid(e,t);break}break}case c.MaxFilesCount:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);break}if(typeof r!="number"){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(Number.isFinite(l==null?void 0:l.length)&&l.length>r){this.setFieldInvalid(e,t);break}break}case c.Files:{if(r===void 0){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);return}if(typeof r!="object"){console.error(`Value for ${t.rule} rule for [${e}] field should be an object. This field will be always invalid.`),this.setFieldInvalid(e,t);return}const a=r.files;if(typeof a!="object"){console.error(`Value for ${t.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`),this.setFieldInvalid(e,t);return}const h=(n,d)=>{const f=Number.isFinite(d.minSize)&&n.size<d.minSize,b=Number.isFinite(d.maxSize)&&n.size>d.maxSize,M=Array.isArray(d.names)&&!d.names.includes(n.name),T=Array.isArray(d.extensions)&&!d.extensions.includes(n.name.split(".")[n.name.split(".").length-1]),$=Array.isArray(d.types)&&!d.types.includes(n.type);return f||b||M||T||$};if(typeof l=="object"&&l!==null)for(let n=0,d=l.length;n<d;++n){const f=l.item(n);if(!f){this.setFieldInvalid(e,t);break}if(h(f,a)){this.setFieldInvalid(e,t);break}}break}default:{if(typeof t.validator!="function"){console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),this.setFieldInvalid(e,t);return}const a=t.validator(l,this.getCompatibleFields());if(typeof a!="boolean"&&typeof a!="function"&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),typeof a=="function")if(i)this.fields[e].asyncCheckPending=!0;else{this.fields[e].asyncCheckPending=!1;const h=a();if(!m(h)){console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),this.setFieldInvalid(e,t);return}return h.then(n=>{n||this.setFieldInvalid(e,t)}).catch(()=>{this.setFieldInvalid(e,t)})}a||this.setFieldInvalid(e,t)}}}isFormValid(){let e=!0;for(let s=0,t=Object.values(this.fields).length;s<t;++s){const i=Object.values(this.fields)[s];if(i.isValid===void 0){e=void 0;break}if(i.isValid===!1){e=!1;break}}for(let s=0,t=Object.values(this.groupFields).length;s<t;++s){const i=Object.values(this.groupFields)[s];if(i.isValid===void 0){e=void 0;break}if(i.isValid===!1){e=!1;break}}return e}validateField(e,s=!1){var t;const i=this.fields[e];i.isValid=!0;const r=[];return[...i.rules].reverse().forEach(l=>{const a=this.validateFieldRule(e,i.elem,l,s);m(a)&&r.push(a)}),i.isValid&&this.setFieldValid(e,(t=i.config)==null?void 0:t.successMessage),Promise.allSettled(r).finally(()=>{var l;s&&((l=this.onValidateCallback)==null||l.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}revalidateField(e){if(typeof e!="string"&&!v(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const s=this.getKeyByFieldSelector(e);return!s||!this.fields[s]?(console.error("Field not found. Check the field selector."),Promise.reject()):new Promise(t=>{this.validateField(s,!0).finally(()=>{this.clearFieldStyle(s),this.clearFieldLabel(s),this.renderFieldError(s,!0),t(!!this.fields[s].isValid)})})}revalidateGroup(e){if(typeof e!="string"&&!v(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");const s=this.getKeyByFieldSelector(e);return!s||!this.groupFields[s]?(console.error("Group not found. Check the group selector."),Promise.reject()):new Promise(t=>{this.validateGroup(s).finally(()=>{this.clearFieldLabel(s),this.renderGroupError(s,!0),t(!!this.groupFields[s].isValid)})})}validateGroup(e,s=!1){const t=this.groupFields[e],i=[];return[...t.rules].reverse().forEach(r=>{const l=this.validateGroupRule(e,t.elems,r);m(l)&&i.push(l)}),Promise.allSettled(i).finally(()=>{var r;s&&((r=this.onValidateCallback)==null||r.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}focusInvalidField(){for(const e in this.fields){const s=this.fields[e];if(!s.isValid){setTimeout(()=>s.elem.focus(),0);break}}}afterSubmitValidation(e=!1){this.renderErrors(e),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(e=!1){return new Promise(s=>{const t=[];Object.keys(this.fields).forEach(i=>{const r=this.validateField(i);m(r)&&t.push(r)}),Object.keys(this.groupFields).forEach(i=>{const r=this.validateGroup(i);m(r)&&t.push(r)}),Promise.allSettled(t).then(()=>{var i;this.afterSubmitValidation(e),(i=this.onValidateCallback)==null||i.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}),s(!!t.length)})})}revalidate(){return new Promise(e=>{this.validateHandler(void 0,!0).finally(()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),e(this.isValid)})})}validateHandler(e,s=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(s).finally(()=>{var t,i,r;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?((t=this.onSuccessCallback)==null||t.call(this,e),this.globalConfig.submitFormAutomatically&&((i=e==null?void 0:e.currentTarget)==null||i.submit())):(r=this.onFailCallback)==null||r.call(this,this.getCompatibleFields(),this.groupFields)})}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,s,t){s.addEventListener(e,t),this.eventListeners.push({type:e,elem:s,func:t})}removeListener(e,s,t){s.removeEventListener(e,t),this.eventListeners=this.eventListeners.filter(i=>i.type!==e||i.elem!==s)}addField(e,s,t){if(typeof e!="string"&&!v(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let i;if(typeof e=="string"?i=this.form.querySelector(e):i=e,!i)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(s)||!s.length)throw Error("Rules argument should be an array and should contain at least 1 element.");s.forEach(l=>{if(!("rule"in l||"validator"in l||"plugin"in l))throw Error("Rules argument must contain at least one rule or validator property.");if(!l.validator&&!l.plugin&&(!l.rule||!Object.values(c).includes(l.rule)))throw Error(`Rule should be one of these types: ${Object.values(c).join(", ")}. Provided value: ${l.rule}`)});const r=this.setKeyByFieldSelector(e);return this.fields[r]={elem:i,rules:s,isValid:void 0,touched:!1,config:t},this.setListeners(i),(this.isSubmitted||this.globalConfig.validateBeforeSubmitting)&&this.validateField(r),this}removeField(e){if(typeof e!="string"&&!v(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const s=this.getKeyByFieldSelector(e);if(!s||!this.fields[s])return console.error("Field not found. Check the field selector."),this;const t=this.getListenerType(this.fields[s].elem.type);return this.removeListener(t,this.fields[s].elem,this.handlerChange),this.clearErrors(),delete this.fields[s],this}removeGroup(e){if(typeof e!="string")throw Error("Group selector is not valid. Please specify a string selector.");const s=this.getKeyByFieldSelector(e);return!s||!this.groupFields[s]?(console.error("Group not found. Check the group selector."),this):(this.groupFields[s].elems.forEach(t=>{const i=this.getListenerType(t.type);this.removeListener(i,t,this.handlerChange)}),this.clearErrors(),delete this.groupFields[s],this)}addRequiredGroup(e,s,t,i){if(typeof e!="string"&&!v(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");let r;if(typeof e=="string"?r=this.form.querySelector(e):r=e,!r)throw Error("Group selector not found! Please check the group selector.");const l=r.querySelectorAll("input"),a=Array.from(l).filter(n=>{const d=Y(this.groupFields,W(n));return d?d[1].elems.find(f=>f!==n):!0}),h=this.setKeyByFieldSelector(e);return this.groupFields[h]={rules:[{rule:S.Required,errorMessage:s,successMessage:i}],groupElem:r,elems:a,touched:!1,isValid:void 0,config:t},l.forEach(n=>{this.setListeners(n)}),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(e){const s=this.getListenerType(e.type);this.removeListener(s,e,this.handlerChange),this.addListener(s,e,this.handlerChange)}clearFieldLabel(e){var s,t;(s=this.errorLabels[e])==null||s.remove(),(t=this.successLabels[e])==null||t.remove()}clearFieldStyle(e){var s,t,i,r;const l=this.fields[e],a=((s=l.config)==null?void 0:s.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(a).forEach(n=>{l.elem.style[n]=""});const h=((t=l.config)==null?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(h).forEach(n=>{l.elem.style[n]=""}),l.elem.classList.remove(...g(((i=l.config)==null?void 0:i.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),...g(((r=l.config)==null?void 0:r.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var e,s;Object.keys(this.errorLabels).forEach(t=>this.errorLabels[t].remove()),Object.keys(this.successLabels).forEach(t=>this.successLabels[t].remove());for(const t in this.fields)this.clearFieldStyle(t);for(const t in this.groupFields){const i=this.groupFields[t],r=((e=i.config)==null?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(r).forEach(a=>{i.elems.forEach(h=>{var n;h.style[a]="",h.classList.remove(...g(((n=i.config)==null?void 0:n.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))})});const l=((s=i.config)==null?void 0:s.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(l).forEach(a=>{i.elems.forEach(h=>{var n;h.style[a]="",h.classList.remove(...g(((n=i.config)==null?void 0:n.successFieldCssClass)||this.globalConfig.successFieldCssClass))})})}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let s=0,t=e.length;s<t;++s)e[s].setAttribute("data-just-validate-fallback-disabled",e[s].disabled?"true":"false"),e[s].setAttribute("disabled","disabled"),e[s].style.pointerEvents="none",e[s].style.webkitFilter="grayscale(100%)",e[s].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let s=0,t=e.length;s<t;++s)e[s].getAttribute("data-just-validate-fallback-disabled")!=="true"&&e[s].removeAttribute("disabled"),e[s].style.pointerEvents="",e[s].style.webkitFilter="",e[s].style.filter=""}renderTooltip(e,s,t){var i;const{top:r,left:l,width:a,height:h}=e.getBoundingClientRect(),n=s.getBoundingClientRect(),d=t||((i=this.globalConfig.tooltip)==null?void 0:i.position);switch(d){case"left":{s.style.top=`${r+h/2-n.height/2}px`,s.style.left=`${l-n.width-y}px`;break}case"top":{s.style.top=`${r-n.height-y}px`,s.style.left=`${l+a/2-n.width/2}px`;break}case"right":{s.style.top=`${r+h/2-n.height/2}px`,s.style.left=`${l+a+y}px`;break}case"bottom":{s.style.top=`${r+h+y}px`,s.style.left=`${l+a/2-n.width/2}px`;break}}return s.dataset.direction=d,{refresh:()=>{this.renderTooltip(e,s,t)}}}createErrorLabelElem(e,s,t){const i=document.createElement("div");i.innerHTML=s;const r=this.isTooltip()?t==null?void 0:t.errorLabelStyle:(t==null?void 0:t.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(i.style,r),i.classList.add(...g((t==null?void 0:t.errorLabelCssClass)||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(i.dataset.tooltip="true"),this.globalConfig.testingMode&&(i.dataset.testId=`error-label-${e}`),this.errorLabels[e]=i,i}createSuccessLabelElem(e,s,t){if(s===void 0)return null;const i=document.createElement("div");i.innerHTML=s;const r=(t==null?void 0:t.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(i.style,r),i.classList.add(...g((t==null?void 0:t.successLabelCssClass)||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(i.dataset.testId=`success-label-${e}`),this.successLabels[e]=i,i}renderErrorsContainer(e,s){const t=s||this.globalConfig.errorsContainer;if(typeof t=="string"){const i=this.form.querySelector(t);if(i)return i.appendChild(e),!0;console.error(`Error container with ${t} selector not found. Errors will be rendered as usual`)}return t instanceof Element?(t.appendChild(e),!0):(t!==void 0&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(e,s,t,i){!i&&this.renderErrorsContainer(s,t)||e.appendChild(s)}renderFieldLabel(e,s,t,i){var r,l,a,h,n,d,f;if(!(!i&&this.renderErrorsContainer(s,t)))if(e.type==="checkbox"||e.type==="radio"){const b=document.querySelector(`label[for="${e.getAttribute("id")}"]`);((l=(r=e.parentElement)==null?void 0:r.tagName)==null?void 0:l.toLowerCase())==="label"?(h=(a=e.parentElement)==null?void 0:a.parentElement)==null||h.appendChild(s):b?(n=b.parentElement)==null||n.appendChild(s):(d=e.parentElement)==null||d.appendChild(s)}else(f=e.parentElement)==null||f.appendChild(s)}showLabels(e,s){Object.keys(e).forEach((t,i)=>{const r=e[t],l=this.getKeyByFieldSelector(t);if(!l||!this.fields[l]){console.error("Field not found. Check the field selector.");return}const a=this.fields[l];a.isValid=!s,this.clearFieldStyle(l),this.clearFieldLabel(l),this.renderFieldError(l,!1,r),i===0&&this.globalConfig.focusInvalidField&&setTimeout(()=>a.elem.focus(),0)})}showErrors(e){if(typeof e!="object")throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(e,!0)}showSuccessLabels(e){if(typeof e!="object")throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(e,!1)}renderFieldError(e,s=!1,t){var i,r,l,a,h,n;const d=this.fields[e];if(d.isValid===!1&&(this.isValid=!1),d.isValid===void 0||!s&&!this.isSubmitted&&!d.touched&&t===void 0)return;if(d.isValid){if(!d.asyncCheckPending){const b=this.createSuccessLabelElem(e,t!==void 0?t:d.successMessage,d.config);b&&this.renderFieldLabel(d.elem,b,(i=d.config)==null?void 0:i.errorsContainer,!0),d.elem.classList.add(...g(((r=d.config)==null?void 0:r.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}d.elem.classList.add(...g(((l=d.config)==null?void 0:l.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const f=this.createErrorLabelElem(e,t!==void 0?t:d.errorMessage,d.config);this.renderFieldLabel(d.elem,f,(a=d.config)==null?void 0:a.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(d.elem,f,(n=(h=d.config)==null?void 0:h.tooltip)==null?void 0:n.position))}renderGroupError(e,s=!0){var t,i,r,l;const a=this.groupFields[e];if(a.isValid===!1&&(this.isValid=!1),a.isValid===void 0||!s&&!this.isSubmitted&&!a.touched)return;if(a.isValid){a.elems.forEach(d=>{var f,b;Object.assign(d.style,((f=a.config)==null?void 0:f.successFieldStyle)||this.globalConfig.successFieldStyle),d.classList.add(...g(((b=a.config)==null?void 0:b.successFieldCssClass)||this.globalConfig.successFieldCssClass))});const n=this.createSuccessLabelElem(e,a.successMessage,a.config);n&&this.renderGroupLabel(a.groupElem,n,(t=a.config)==null?void 0:t.errorsContainer,!0);return}this.isValid=!1,a.elems.forEach(n=>{var d,f;Object.assign(n.style,((d=a.config)==null?void 0:d.errorFieldStyle)||this.globalConfig.errorFieldStyle),n.classList.add(...g(((f=a.config)==null?void 0:f.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))});const h=this.createErrorLabelElem(e,a.errorMessage,a.config);this.renderGroupLabel(a.groupElem,h,(i=a.config)==null?void 0:i.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(a.groupElem,h,(l=(r=a.config)==null?void 0:r.tooltip)==null?void 0:l.position))}renderErrors(e=!1){if(!(!this.isSubmitted&&!e&&!this.globalConfig.validateBeforeSubmitting)){this.clearErrors(),this.isValid=!0;for(const s in this.groupFields)this.renderGroupError(s);for(const s in this.fields)this.renderFieldError(s)}}destroy(){this.eventListeners.forEach(e=>{this.removeListener(e.type,e.elem,e.func)}),Object.keys(this.customStyleTags).forEach(e=>{this.customStyleTags[e].remove()}),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach(e=>{const s=this.getFieldSelectorByKey(e);s&&this.addField(s,[...this.fields[e].rules],this.fields[e].config)})):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){if(typeof e!="string"&&e!==void 0){console.error("Current locale should be a string");return}this.currentLocale=e,this.isSubmitted&&this.validate()}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}onValidate(e){return this.onValidateCallback=e,this}}const V=document.getElementById("form"),F=new Q("#form"),R=document.getElementById("addBtn"),L=document.getElementById("content"),I=document.getElementById("grid"),C="data",ee=document.getElementById("closeIcon");V.elements;R.addEventListener("click",()=>{L.classList.remove("hidden")});ee.addEventListener("click",()=>{L.classList.add("hidden")});F.addField("#title",[{rule:"required",errorMessage:"Enter a title for the content"}]);F.addField("#type",[{rule:"required",errorMessage:"Choose content type"}]);F.addField("#author",[{rule:"required",errorMessage:"Select author"}]);F.addField("#link",[{rule:"required",errorMessage:"paste your link"}]);F.onSuccess(o=>{const e=new FormData(V).entries(),s=Object.fromEntries(e),t=localStorage.getItem(C),i=JSON.parse(t),r=[];i?(i.push(s),localStorage.setItem(C,JSON.stringify(i))):(r.push(s),localStorage.setItem(C,JSON.stringify(r))),te()});function te(){const o=localStorage.getItem(C),e=JSON.parse(o);I.innerHTML="",e.map(s=>{const i=s.url.split("v=")[1],r=document.createElement("div");r.classList="bg-white rounded items-center shadow-lg p-1";const l=`
   <a href="https://www.youtube.com/watch?v=${i}"><img src="https://i.ytimg.com/vi/${i}/maxresdefault.jpg" class="w-full rounded">
   <div class="px-3 py-1 space-y-1">
     <p class="text-xl font-semibold">Title:<span class="px-2 ml-0.5">${s.title}</span></p>
     <p class="font-semibold">Author: <span class="px-2 ml-0.5">${s.author}</span></p>
     <p class="font-semibold bg-red-700 text-white rounded w-full text-center px-3 py-1">${s.contentType}</p>
   </div>
 </div></a>`;r.innerHTML=l,I.append(r),L.classList.add("hidden")})}
