(function(t){function a(a){for(var i,s,r=a[0],l=a[1],c=a[2],p=0,u=[];p<r.length;p++)s=r[p],n[s]&&u.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(a);while(u.length)u.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],i=!0,s=1;s<e.length;s++){var l=e[s];0!==n[l]&&(i=!1)}i&&(o.splice(a--,1),t=r(r.s=e[0]))}return t}var i={},n={app:0},o=[];function s(t){return r.p+"js/"+({HoanThienBoSungHoSoDetail:"HoanThienBoSungHoSoDetail",Landing:"Landing",TiepNhanHoSoDetail:"TiepNhanHoSoDetail"}[t]||t)+"."+{HoanThienBoSungHoSoDetail:"a1ddc7f8",Landing:"55c29458",TiepNhanHoSoDetail:"b052e4c5"}[t]+".js"}function r(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var a=[],e=n[t];if(0!==e)if(e)a.push(e[2]);else{var i=new Promise(function(a,i){e=n[t]=[a,i]});a.push(e[2]=i);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(t),o=function(a){l.onerror=l.onload=null,clearTimeout(c);var e=n[t];if(0!==e){if(e){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+o+")");s.type=i,s.request=o,e[1](s)}n[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(a)},r.m=t,r.c=i,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(e,i,function(a){return t[a]}.bind(null,i));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var p=0;p<l.length;p++)a(l[p]);var d=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("0f18");var i=e("a026"),n=e("bb71");e("74ef");i["a"].use(n["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"app_survey"}},[t._e(),e("v-content",[e("router-view")],1)],1)},s=[],r={data:function(){return{}}},l=r,c=e("2877"),p=e("6544"),d=e.n(p),u=e("7496"),v=e("549c"),f=e("f774"),m=Object(c["a"])(l,o,s,!1,null,null,null);m.options.__file="App.vue";var h=m.exports;d()(m,{VApp:u["a"],VContent:v["a"],VNavigationDrawer:f["a"]});var g=e("8c4f"),y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._v("\n  13123\n")])},_=[],x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-chitiet"},[e("div",[e("v-tabs",{attrs:{"icons-and-text":""},model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}},[e("v-tabs-slider",{attrs:{color:"primary"}}),e("v-tab",{key:1,attrs:{href:"#tabs-1"},on:{click:function(a){t.getNextActions()}}},[e("v-btn",{staticClass:"px-0 py-0 mx-0 my-0",attrs:{flat:""}},[3===t.originality?e("span",[t._v("XỬ LÝ HỒ SƠ")]):e("span",[t._v("CHUẨN BỊ HỒ SƠ")])])],1),e("v-tabs-items",{staticStyle:{overflow:"visible!important"},attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"},model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}},[e("v-tab-item",{key:1,attrs:{value:"tabs-1","reverse-transition":"fade-transition",transition:"fade-transition"}},[0!==t.checkInput&&t.filterNextActionEnable(t.btnDossierDynamics)?e("div",{staticStyle:{position:"relative"}},[e("v-expansion-panel",{staticClass:"expansion-pl",attrs:{value:[!0]}},[e("v-expansion-panel-content",{key:1,attrs:{"hide-actions":""}},[t._v("\n                123\n              ")])],1)],1):t._e(),t.btnStateVisible?e("div",{staticClass:"px-4 py-3",staticStyle:{"border-bottom":"1px solid #dddddd"}},[t._l(t.btnPlugins,function(a,i){return e("v-btn",{key:i,staticClass:"ml-0 mr-2",attrs:{color:"primary",loading:t.loadingPlugin,disabled:t.loadingPlugin},nativeOn:{click:function(e){t.processPullBtnplugin(a,i)}}},[t._v("\n              "+t._s(a.pluginName)+"\n              "),e("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])])}),t.btnStepsDynamics.length>0&&t.thongTinChiTietHoSo["permission"].indexOf("write")>=0?e("v-menu",{staticStyle:{display:"inline-block",position:"relative !important"},attrs:{bottom:"","offset-y":""}},[e("v-btn",{staticClass:"deactive__btn",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("Khác   "),e("v-icon",{attrs:{size:"18"}},[t._v("arrow_drop_down")])],1),e("v-list",t._l(t.btnStepsDynamics,function(a,i){return e("v-list-tile",{key:i,on:{click:function(e){t.btnActionEvent(a,i)}}},[e("v-list-tile-title",[t._v(t._s(a.title))])],1)}),1)],1):t._e()],2):t._e()])],1)],1)],1)])},b=[],w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-card",[t._l(t.dossierTemplateItems,function(a,i){return t.partTypes.includes(a.partType)&&t.checkVisibleTemp(a,i)?e("div",{key:a.partNo,staticClass:"form_alpaca",staticStyle:{position:"relative"}},[e("v-expansion-panel",{staticClass:"expaned__list__data",attrs:{expand:"",value:[t.currentFormView==="formAlpaca"+a.partNo+t.id]}},[e("v-expansion-panel-content",{attrs:{"hide-actions":""}},[e("div",{staticStyle:{"background-color":"#fff"},attrs:{slot:"header"},on:{click:function(a){t.stateView=!1}},slot:"header"},[e("div",{staticStyle:{"align-items":"center",background:"#fff","padding-left":"25px"},style:{width:t.checkStyle(a)}},[e("div",{staticClass:"mr-2",staticStyle:{"min-width":"18px",display:"flex"},on:{click:function(e){t.onlyView&&a.hasForm?t.viewFile2(a):t.loadAlpcaForm(a)}}},[e("div",{staticClass:"header__tphs"},[e("span",{staticClass:"text-bold"},[t._v(t._s(i+1)+".")]),t._v("  ")]),e("div",{staticClass:"header__tphs"},[e("v-tooltip",{staticStyle:{"max-width":"100% !important"},attrs:{top:""}},[e("span",{attrs:{slot:"activator"},slot:"activator"},[t._v("\n                      "+t._s(a.partName)+"  \n                      "),a.required?e("span",{staticStyle:{color:"red"}},[t._v(" (*) ")]):t._e(),t._v("\n                        \n                    ")]),a.partTip["tip"]?e("span",[t._v(t._s(a.partTip["tip"]))]):t._e()]),a.hasForm&&a.daKhai&&(1===t.originality&&2!==a.partType||1!==t.originality)?e("v-tooltip",{attrs:{top:""}},[e("i",{staticClass:"fa fa-file-text-o",staticStyle:{color:"#0d71bb","font-size":"13px"},attrs:{slot:"activator","aria-hidden":"true"},slot:"activator"}),e("span",[t._v("Biểu mẫu trực tuyến (Đã khai)")])]):t._e(),a.hasForm&&!a.daKhai&&(1===t.originality&&2!==a.partType||1!==t.originality)?e("v-tooltip",{attrs:{top:""}},[e("i",{staticClass:"fa fa-file-o",staticStyle:{color:"#0d71bb","font-size":"13px"},attrs:{slot:"activator"},slot:"activator"}),e("span",[t._v("Biểu mẫu trực tuyến (Chưa khai)")])]):t._e(),t._v("\n                    \n                  "),!a.hasForm&&a.hasFileTemp?e("v-tooltip",{attrs:{top:""}},[e("v-icon",{staticStyle:{color:"#0d71bb"},attrs:{slot:"activator",size:"16",color:"primary"},on:{click:function(e){e.stopPropagation(),t.downloadFileTemplate(a,i)}},slot:"activator"},[t._v("save_alt")]),e("span",[t._v("Biểu mẫu điền thủ công")])],1):t._e()],1)]),e("div",{staticStyle:{display:"flex"}},[1===t.checkInput&&2===a.fileCheck&&a.stateEditFileCheck?e("v-text-field",{attrs:{placeholder:"Nhập lý do",rules:[function(t){return!!t||"Bạn phải nhập lý do trước khi gửi"}],required:""},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.changeFileComment(a,i)}},model:{value:a.fileComment,callback:function(e){t.$set(a,"fileComment",e)},expression:"item.fileComment"}}):t._e(),1===t.checkInput&&2===a.fileCheck&&a.stateEditFileCheck?e("v-tooltip",{attrs:{top:""}},[e("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(e){e.stopPropagation(),t.changeFileComment(a,i)}},slot:"activator"},[e("v-icon",{staticClass:"mx-0",attrs:{size:"16",color:"primary"}},[t._v("send")])],1),e("span",[t._v("Gửi")])],1):t._e()],1),a.fileComment&&!a.stateEditFileCheck?e("i",{staticStyle:{"font-size":"12px",color:"#0d71bb","margin-left":"10px"}},[t._v(t._s(a.fileComment))]):t._e(),a.fileComment&&!a.stateEditFileCheck&&1===t.checkInput?e("v-tooltip",{attrs:{top:""}},[e("v-icon",{staticStyle:{"font-size":"13px",color:"#0d71bb","margin-left":"10px",cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(t){t.stopPropagation(),a.stateEditFileCheck=!a.stateEditFileCheck}},slot:"activator"},[t._v("edit")]),e("span",[t._v("Chỉnh sửa ý kiến")])],1):t._e(),t._l(t.dossierFilesItems,function(i,n){return a.partNo!==i.dossierPartNo||i.eForm?t._e():e("div",{key:n},[e("div",{style:{width:"calc(100% - 370px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[e("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},on:{click:function(a){a.stopPropagation(),t.viewFile2(i)}}},[0!==i.fileSize?e("v-icon",[t._v("attach_file")]):t._e(),t._v("\n                    "+t._s(i.displayName)+" - \n                    "),e("i",[t._v(t._s(i.modifiedDate))])],1),t.onlyView||1===t.checkInput?t._e():e("v-btn",{staticClass:"mx-0 my-0",attrs:{icon:"",ripple:""},on:{click:function(a){a.stopPropagation(),t.deleteSingleFile(i,n)}}},[e("v-icon",{staticStyle:{color:"red"}},[t._v("delete_outline")])],1)],1)])}),e("div",{staticClass:"mr-3 my-1 py-2",staticStyle:{display:"none",border:"1px solid #f3ae75"},attrs:{id:"fileApplicant-"+a.partNo}},t._l(t.dossierFilesApplicant,function(i,n){return i.dossierTemplateNo===t.thongTinHoSo["dossierTemplateNo"]&&a.partNo===i.dossierPartNo?e("div",{key:n},[i.eForm?e("div",{style:{width:"calc(100% - 0px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[e("v-tooltip",{staticStyle:{"max-width":"100%"},attrs:{top:""}},[e("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(a){a.stopPropagation(),t.viewGiayToDaNop(i)}},slot:"activator"},[e("i",{staticClass:"ml-1 fa fa-file-o",staticStyle:{color:"#0d71bb","font-size":"13px"}}),t._v("  \n                        "+t._s(i.referenceUid)+"."+t._s(i.fileType)+" - \n                        "),e("i",[t._v(t._s(i.modifiedDate))])]),e("span",[t._v("Bản khai trực tuyến")])])],1):e("div",{style:{width:"calc(100% - 0px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":t.onlyView?"5px":"0px"}},[e("v-tooltip",{staticStyle:{"max-width":"100%"},attrs:{top:""}},[e("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(a){a.stopPropagation(),t.viewGiayToDaNop(i)}},slot:"activator"},[0!==i.fileSize?e("v-icon",{staticStyle:{color:"#0d71bb"}},[t._v("attach_file")]):t._e(),t._v("\n                        "+t._s(i.displayName)+" - \n                        "),e("i",[t._v(t._s(i.modifiedDate))])],1),e("span",[t._v("Đính kèm")])])],1)]):t._e()}),0)],2)]),a.hasForm&&!t.onlyView?e("v-card",[e("v-card-text",{staticStyle:{"background-color":"rgba(244, 247, 213, 0.19)"}},[e("v-layout",{attrs:{wrap:""}},[t.stateView?t._e():e("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[e("div",{style:t.pstFixed>t.pstEl&&t.pstFixed<t.endEl+t.pstEl?"position:fixed;top:5px;z-index:101":"",attrs:{id:"wrapForm"+a.partNo+t.id}},[a.hasForm&&!t.onlyView&&1!==t.checkInput?e("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.saveAlpacaForm(a,i)}}},[t._v("Lưu lại")]):t._e(),a.daKhai&&a.hasForm&&!t.onlyView&&1!==t.checkInput?e("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.deleteSingleFileEform(a,i)}}},[t._v("Xóa")]):t._e(),a.daKhai&&a.hasForm?e("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.previewFileEfom(a,i)}}},[t._v("In")]):t._e()],1),!t.onlyView||a.daKhai?e("div",{class:{no_acction__event:t.onlyView},attrs:{id:"formAlpaca"+a.partNo+t.id}}):t._e()])],1)],1)],1):t._e()],1)],1),e("div",{staticClass:"absolute__btn group__thanh_phan mr-1"},[t.loading?e("content-placeholders",{staticClass:"mt-1"},[e("content-placeholders-text",{attrs:{lines:1}})],1):e("v-layout",{attrs:{row:"",wrap:""}},[1===t.originality||1!==a.partType||t.thongTinHoSo.online||1===t.checkInput?t._e():e("v-flex",{staticClass:"layout wrap",staticStyle:{width:"110px"}},[e("v-select",{attrs:{items:t.fileMarkItems,disabled:t.onlyView},on:{change:function(a){t.changeFileMark(a,i)}},model:{value:t.dossierTemplateItems[i].fileMark,callback:function(a){t.$set(t.dossierTemplateItems[i],"fileMark",a)},expression:"dossierTemplateItems[index].fileMark"}})],1),1===t.checkInput?e("v-flex",{staticClass:"layout wrap",staticStyle:{width:"120px"}},[e("v-select",{attrs:{items:t.fileCheckItems,"item-text":"text","item-value":"value"},on:{change:function(a){t.changeFileCheck(a,i)}},model:{value:t.dossierTemplateItems[i].fileCheck,callback:function(a){t.$set(t.dossierTemplateItems[i],"fileCheck",a)},expression:"dossierTemplateItems[index].fileCheck"}})],1):a.fileCheck>0?e("v-flex",{staticClass:"layout wrap",style:{width:"20px","align-items":"center","margin-left":"10px","margin-top":t.thongTinHoSo.online?"10px":"0px"}},[1===a.fileCheck?e("v-tooltip",{attrs:{top:""}},[e("v-icon",{staticClass:"mx-0",attrs:{slot:"activator",size:"16",color:"primary"},slot:"activator"},[t._v("done")]),e("span",[t._v("Đạt")])],1):2===a.fileCheck?e("v-tooltip",{attrs:{top:""}},[e("v-icon",{staticClass:"mx-0",attrs:{slot:"activator",size:"16",color:"primary"},slot:"activator"},[t._v("close")]),e("span",[t._v("Không đạt")])],1):t._e()],1):t._e(),1!==t.checkInput?e("v-flex",{class:{"text-xs-right":t.onlyView},style:{width:t.onlyView?"auto":"90px"}},[e("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"file"+a.partNo},on:{change:function(e){t.onUploadSingleFile(e,a,i)}}}),3!==a.partType||3!==t.originality||t.onlyView?t._e():e("v-tooltip",{attrs:{top:""}},[e("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(e){t.addFileOther(a)}},slot:"activator"},[e("v-icon",{staticClass:"mx-0",attrs:{size:"16",color:"primary"}},[t._v("add")])],1),e("span",[t._v("Thêm giấy tờ khác")])],1),t.progressUploadPart===a.partNo?e("v-progress-circular",{attrs:{width:2,size:25,color:"green",indeterminate:""}}):t.progressUploadPart===a.partNo||t.onlyView?t._e():e("v-tooltip",{attrs:{left:""}},[e("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(e){t.pickFile(a)}},slot:"activator"},[e("v-badge",[e("v-icon",{attrs:{size:"16",color:"primary"}},[t._v("cloud_upload")])],1)],1),a.partTip["extensions"]||a.partTip["maxSize"]?e("span",[t._v("Chấp nhận tải lên các định dạng: "+t._s(a.partTip["extensions"])+". Tối đa "+t._s(a.partTip["maxSize"])+" MB ")]):e("span",[t._v("Tải file lên")])],1),t.partNoApplicantHasFile(a.partNo)&&!t.onlyView?e("v-tooltip",{attrs:{top:""}},[e("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(e){t.showFilesApplicant(a.partNo)}},slot:"activator"},[e("v-badge",[e("v-icon",{attrs:{size:"16",color:"orange darken-3"}},[t._v("warning")])],1)],1),e("span",[t._v("Giấy tờ đã nộp")])],1):t._e()],1):t._e()],1)],1)],1):t._e()}),t.partTypes.includes(2)?t._e():e("div",[e("v-layout",{staticClass:"mx-4",attrs:{wrap:""}},[!t.onlyView||t.onlyView&&t.applicantNoteDossier?e("v-flex",{staticClass:"my-0 py-2 text-bold",staticStyle:{width:"60px"}},[t._v("Ghi chú:")]):t._e(),e("v-flex",{staticStyle:{width:"calc(100% - 80px)"}},[t.onlyView?t._e():e("div",{staticClass:"pl-2"},[e("v-text-field",{staticClass:"py-0",attrs:{"multi-line":"",rows:"3"},on:{input:t.changeApplicantNote},model:{value:t.applicantNoteDossier,callback:function(a){t.applicantNoteDossier=a},expression:"applicantNoteDossier"}})],1),t.onlyView&&t.applicantNoteDossier?e("p",{staticClass:"my-0 py-2"},[t._v("\n            "+t._s(t.applicantNoteDossier)+" \n          ")]):t._e()])],1)],1),e("v-dialog",{attrs:{"max-width":"400",transition:"fade-transition",persistent:""},model:{value:t.dialogAddOtherTemp,callback:function(a){t.dialogAddOtherTemp=a},expression:"dialogAddOtherTemp"}},[e("v-card",[e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-card-title",{staticClass:"headline"},[t._v("Tên giấy tờ")]),e("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(a){return t.cancelDialog(a)}}},[e("v-icon",[t._v("clear")])],1),t.loadingAddOther?e("v-progress-linear",{staticClass:"my-0",attrs:{indeterminate:!0}}):t._e(),e("v-card-text",{staticClass:"pb-0 pt-4"},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"px-2 pb-3 fix__label",attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Tên giấy tờ:",rules:[function(t){return!!t||"Bạn phải điền tên giấy tờ."}],required:""},model:{value:t.otherDossierTemplate,callback:function(a){t.otherDossierTemplate=a},expression:"otherDossierTemplate"}})],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"red darken-3",flat:"flat"},nativeOn:{click:function(a){return t.cancelDialog(a)}}},[t._v("\n              Quay lại\n            ")]),e("v-btn",{attrs:{color:"primary",flat:"flat",loading:t.loadingAddOther},nativeOn:{click:function(a){return t.addOtherTemplate(a)}}},[t._v("\n              Đồng ý\n              "),e("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])])],1)],1)],1)],1)],2),e("v-dialog",{staticStyle:{overflow:"hidden"},attrs:{"max-width":"900",transition:"fade-transition"},model:{value:t.dialogPDF,callback:function(a){t.dialogPDF=a},expression:"dialogPDF"}},[e("v-card",[e("v-card-title",{staticClass:"headline"},[t.pdfEform?e("span",[t._v("Bản khai trực tuyến")]):e("span",[t._v("File đính kèm")])]),e("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(a){t.dialogPDF=!1}}},[e("v-icon",[t._v("clear")])],1),t.dialogPDFLoading?e("div",{staticStyle:{"min-height":"600px","text-align":"center",margin:"auto",padding:"25%"}},[e("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1):t._e(),e("iframe",{directives:[{name:"show",rawName:"v-show",value:!t.dialogPDFLoading,expression:"!dialogPDFLoading"}],staticStyle:{overflow:"auto","min-height":"600px"},attrs:{id:"dialogPDFPreview"+t.id,src:"",type:"application/pdf",width:"100%",height:"100%",frameborder:"0"}})],1)],1)],1)},C=[],k={data:function(){return{}}},S=k,V=e("4ca6"),T=e("8336"),D=e("b0af"),I=e("99d9"),F=e("12b2"),P=e("169a"),N=e("cd55"),L=e("49e2"),A=e("0e8f"),E=e("4bd4"),O=e("132d"),H=e("a722"),z=e("490a"),B=e("8e36"),$=e("b56d"),R=e("9910"),j=e("2677"),M=e("3a2f"),G=Object(c["a"])(S,w,C,!1,null,null,null);G.options.__file="TiepNhanHoSo_ThanhPhanHoSo.vue";var U=G.exports;d()(G,{VBadge:V["a"],VBtn:T["a"],VCard:D["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:F["a"],VDialog:P["a"],VExpansionPanel:N["a"],VExpansionPanelContent:L["a"],VFlex:A["a"],VForm:E["a"],VIcon:O["a"],VLayout:H["a"],VProgressCircular:z["a"],VProgressLinear:B["a"],VSelect:$["a"],VSpacer:R["a"],VTextField:j["a"],VTooltip:M["a"]});var K={props:["index","id"],components:{"thanh-phan-ho-so":U},data:function(){return{}}},q=K,X=e("8860"),Y=e("ba95"),J=e("5d23"),Q=e("e449"),W=e("71a3"),Z=e("c671"),tt=e("fe57"),at=e("aac8"),et=e("9a96"),it=Object(c["a"])(q,x,b,!1,null,null,null);it.options.__file="XemChiTietHoSoDetailCanBo.vue";var nt=it.exports;d()(it,{VBtn:T["a"],VExpansionPanel:N["a"],VExpansionPanelContent:L["a"],VIcon:O["a"],VList:X["a"],VListTile:Y["a"],VListTileTitle:J["b"],VMenu:Q["a"],VTab:W["a"],VTabItem:Z["a"],VTabs:tt["a"],VTabsItems:at["a"],VTabsSlider:et["a"]});var ot={props:["id","formCode"],components:{"xem-chi-tiet-ho-so-detail-can-bo":nt},data:function(){return{initData:null,step:""}}},st=ot,rt=Object(c["a"])(st,y,_,!1,null,null,null);rt.options.__file="DetailForward.vue";var lt=rt.exports,ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[e("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1)],1)],1)},pt=[],dt={},ut=dt,vt=e("a523"),ft=Object(c["a"])(ut,ct,pt,!1,null,null,null);ft.options.__file="NotFound.vue";var mt=ft.exports;d()(ft,{VContainer:vt["a"],VFlex:A["a"],VLayout:H["a"],VProgressCircular:z["a"]});var ht=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{height:"100%","background-color":"#ffff","padding-top":"20px"}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center",staticStyle:{"margin-bottom":"20px"},attrs:{xs12:"",sm12:""}},[e("h3",{staticClass:"text-xs-center mt-2",staticStyle:{color:"#065694"}},[t._v("CÂU HỎI KHẢO SÁT")])]),e("v-flex",{attrs:{xs12:"",sm2:""}}),e("v-flex",{attrs:{xs12:"",sm8:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm12:""}},[t._l(t.votingItems,function(a,i){return e("div",{key:i,staticStyle:{"margin-bottom":"5px"}},[e("div",{staticClass:"text-bold primary--text"},[t._v(t._s(i+1)+". "+t._s(a.subject))]),e("div",{staticClass:"ml-4"},[e("v-radio-group",{staticClass:"mt-1",attrs:{column:""},model:{value:a.selected,callback:function(e){t.$set(a,"selected",e)},expression:"item.selected"}},t._l(a["choices"],function(t,a){return e("v-radio",{key:"rd"+a,attrs:{label:t,value:a+1}})}),1)],1)])}),t.showCaptcha?e("v-flex",{staticClass:"mb-3 mt-3",attrs:{xs12:"",sm12:""}},[e("captcha",{ref:"captcha"})],1):t._e(),e("v-flex",{staticClass:"text-xs-center mt-2",attrs:{xs12:"",sm12:""}},[e("v-btn",{attrs:{color:"primary",loading:t.btnLoading,disabled:t.btnLoading},on:{click:t.doVottingResultSubmit}},[e("v-icon",[t._v("save")]),t._v(" \n              Gửi đánh giá\n            ")],1),e("v-btn",{staticClass:"ml-3",attrs:{color:"primary",loading:t.btnLoading,disabled:t.btnLoading},on:{click:t.showVotingResult}},[e("v-icon",[t._v("bookmark")]),t._v(" \n              Xem kết quả đánh giá\n            ")],1)],1)],2)],1)],1),e("v-flex",{attrs:{xs12:"",sm2:""}})],1),e("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog_voting_result,callback:function(a){t.dialog_voting_result=a},expression:"dialog_voting_result"}},[e("v-card",[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-toolbar-title",{staticClass:"pl-5"},[t._v("Kết quả đánh giá")]),e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{icon:"",dark:""},on:{click:function(a){t.dialog_voting_result=!1}}},[e("v-icon",[t._v("close")])],1)],1)],1),e("v-card-text",[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:"",sm1:""}}),e("v-flex",{staticClass:"pl-4",attrs:{xs12:"",sm10:""}},[Array.isArray(t.votingItems)&&t.votingItems.length>0?e("v-card",{staticClass:"py-1",attrs:{flat:""}},t._l(t.votingItems,function(a,i){return e("div",{key:i},[e("div",{staticClass:"text-bold primary--text"},[t._v("\n                  "+t._s(i+1)+". "+t._s(a.subject)+"\n                  "),e("i",{staticStyle:{color:"#ad1717"}},[t._v(" (Số lượt đánh giá: "+t._s(a.answersCount)+")")])]),e("v-card",{staticClass:"pl-2",attrs:{flat:""}},[e("v-card-text",{staticClass:"px-2 py-1 pr-0"},t._l(a["choices"],function(i,n){return e("div",{key:"rd"+n},[e("v-layout",{staticClass:"mb-2",attrs:{wrap:""}},[e("div",{staticClass:"flex xs6 sm8 pr-2"},[t._v(t._s(i)+" "),e("span",{staticClass:"text-bold",style:"color:"+t.barColor[n]},[t._v("("+t._s(a.answers[n])+")")])]),a.answersCount>0?e("progress-bar",{staticClass:"flex xs6 sm4",staticStyle:{"z-index":"10000"},attrs:{size:"16",spacing:1,"bar-transition":"all 1s ease",val:t.getPercent(a.answers,n),text:0!==t.getPercent(a.answers,n)?t.getPercent(a.answers,n)+"%":"","text-position":"inside","bg-color":"#e0e0e0","bar-color":t.barColor[n],"text-fg-color":"#fff"}}):t._e()],1)],1)}),0)],1)],1)}),0):e("div",{staticClass:"px-3"},[e("v-alert",{attrs:{outline:"",color:"warning",icon:"priority_high",value:!0}},[t._v("\n                Không có câu hỏi khảo sát\n              ")])],1),e("v-flex",{staticClass:"mt-4 text-xs-right",attrs:{xs12:"",sm12:""}},[e("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.dialog_voting_result=!1}}},[e("v-icon",{attrs:{size:"16"}},[t._v("reply")]),t._v(" \n                Quay lại \n              ")],1)],1)],1),e("v-flex",{attrs:{xs12:"",sm1:""}})],1)],1)],1)],1)],1)},gt=[],yt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("span",[t._v("Kéo thả các ô vuông để cho đúng thứ tự")]),e("br"),e("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm12:""}},[e("v-chip",{staticStyle:{"background-color":"#81D4FA"},attrs:{label:"","text-color":"white"}},[t._v("\n      "+t._s(t.captcha)+"\n    ")])],1),e("div",{directives:[{name:"drag-and-drop",rawName:"v-drag-and-drop:options",value:t.options,expression:"options",arg:"options"}],staticClass:"drag-wrapper text-xs-center mt-3"},[e("ul",{attrs:{id:"captcha"}},t._l(t.arrCaptcha,function(a,i){return e("li",{key:i,staticClass:"item-captcha",staticStyle:{padding:"10px 15px","background-color":"#81D4FA","margin-right":"2px",color:"#fff","font-weight":"bold"}},[t._v(t._s(a))])}),0)])],1)},_t=[],xt=e("1157"),bt=e.n(xt),wt={props:["index"],components:{},data:function(){return{options:{},arrCaptcha:[],captcha:"",currentlyDragging:null,loggedEvent:"",images:[{name:"Image 1",src:"http://placehold.it/100/000000/ffffff"},{name:"Image 2",src:"http://placehold.it/100/C93742/ffffff"},{name:"Image 3",src:"http://placehold.it/100/6894D1/ffffff"}]}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){var t=this;t.makeRandomString(),t.shuffleArrCaptcha(t.arrCaptcha)},watch:{},methods:{makeRandomString:function(){for(var t=this,a="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<4;i++)a+=e.charAt(Math.floor(Math.random()*e.length));a&&(t.arrCaptcha=t.shuffleArrCaptcha(a.split(""))),t.captcha=a},shuffleArrCaptcha:function(t){var a=t.length,e=null,i=0;while(a>0)i=Math.floor(Math.random()*a),a--,e=t[a],t[a]=t[i],t[i]=e;return t},checkValidCaptcha:function(){var t=this,a="",e=bt()("#captcha").children();console.log(e);for(var i=0;i<e.length;i++)a+=e[i].innerHTML;return t.captcha===a}},filters:{dateTimeView:function(t){if(t){var a=new Date(t);return"".concat(a.getDate().toString().padStart(2,"0"),"/").concat((a.getMonth()+1).toString().padStart(2,"0"),"/").concat(a.getFullYear())}return""}}},Ct=wt,kt=(e("cf0c"),e("cc20")),St=Object(c["a"])(Ct,yt,_t,!1,null,null,null);St.options.__file="Captcha.vue";var Vt=St.exports;d()(St,{VChip:kt["a"],VFlex:A["a"]});var Tt=e("854a"),Dt=e.n(Tt),It=e("a7e3"),Ft=e.n(It);i["a"].use(Dt.a),Dt.a.options={closeButton:!0,timeOut:"5000"};var Pt={props:["index"],components:{captcha:Vt,ProgressBar:Ft.a},data:function(){return{votingItems:[],btnLoading:!1,showCaptcha:!1,barColor:["#5cb85c","#f0ad4e","#d9534f","#2e4fc8","#2ec8bad9","#142f14"],dialog_voting_result:!1}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){var t=this;console.log("landing---------"),t.$nextTick(function(){t.$store.dispatch("loadVoting",{className:"survey",classPk:0}).then(function(a){t.votingItems=a,console.log(t.votingItems)}).catch(function(t){})})},watch:{},methods:{viewListEmployee:function(t){this.$router.push({path:"/danh-sach-can-bo/"+t.itemCode,query:{itemName:t.itemName}})},doVottingResultSubmit:function(){var t=this;if(t.$refs.captcha)if(t.$refs.captcha.checkValidCaptcha()){t.btnLoading=!0;var a=[];for(var e in t.votingItems)t.votingItems[e]["className"]="survey",t.votingItems[e]["classPk"]=0,a.push(t.$store.dispatch("submitVoting",t.votingItems[e]));Promise.all(a).then(function(a){Dt.a.success("Yêu cầu của bạn được thực hiện thành công."),t.btnLoading=!1,t.$refs.captcha&&t.$refs.captcha.makeRandomString()}).catch(function(a){Dt.a.error("Yêu cầu của bạn thực hiện thất bại."),t.btnLoading=!1})}else Dt.a.error("Mã captcha không đúng. Vui lòng kiểm tra lại");else t.showCaptcha=!0},showVotingResult:function(){var t=this;t.$store.dispatch("loadVoting",{className:"survey",classPk:0}).then(function(a){t.votingItems=a,t.dialog_voting_result=!0,console.log(t.votingItems)}).catch(function(t){})},getPercent:function(t,a){for(var e=0,i=0,n=0;n<t.length;n++)e+=t[n];return i=(t[a]/e*100).toFixed(1),i}},filters:{}},Nt=Pt,Lt=e("0798"),At=e("67b6"),Et=e("43a6"),Ot=e("71d9"),Ht=e("2a7f"),zt=Object(c["a"])(Nt,ht,gt,!1,null,null,null);zt.options.__file="Landing.vue";var Bt=zt.exports;d()(zt,{VAlert:Lt["a"],VBtn:T["a"],VCard:D["a"],VCardText:I["b"],VDialog:P["a"],VFlex:A["a"],VIcon:O["a"],VLayout:H["a"],VRadio:At["a"],VRadioGroup:Et["a"],VSpacer:R["a"],VToolbar:Ot["a"],VToolbarItems:Ht["a"],VToolbarTitle:Ht["b"]});var $t=[{path:"/",component:Bt,props:!0},{path:"/danh-sach-ho-so/:index",name:"Landing",component:function(){return e.e("Landing").then(e.bind(null,"306c"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/tiep-nhan-ho-so/:id/:formCode",name:"TiepNhanHoSoDetail",component:function(){return e.e("TiepNhanHoSoDetail").then(e.bind(null,"d129"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/bo-sung-ho-so/:id",name:"HoanThienBoSungHoSoDetail",component:function(){return e.e("HoanThienBoSungHoSoDetail").then(e.bind(null,"a35c"))},props:!0,meta:{requiresAuth:!1}},{path:"/danh-sach-ho-so/:index/ho-so/:id/:formCode",name:"DetailForward",component:lt,props:!0},{path:"*",name:"NotFound",component:mt}];i["a"].use(g["a"]);var Rt=new g["a"]({routes:$t}),jt=Rt,Mt=e("2f62"),Gt=e("bc3a"),Ut=e.n(Gt),Kt=e("bbd0");i["a"].use(Dt.a),i["a"].use(Mt["a"]);var qt=new Mt["a"].Store({state:{initData:{},loading:!1,index:0,endPointApi:"/o/rest/v2"},actions:{loadInitResource:function(t){t.commit;var a=t.state;return new Promise(function(t,e){null!==window.themeDisplay&&void 0!==window.themeDisplay?(a.initData["groupId"]=window.themeDisplay.getScopeGroupId(),a.initData["user"]={userName:window.themeDisplay.getUserName(),userEmail:"",userId:window.themeDisplay.getUserId()}):(a.initData["groupId"]=0,a.initData["user"]={userName:"",userEmail:"",userId:20103}),t(a.initData)})},loadVoting:function(t,a){var e=t.commit,i=t.state;return new Promise(function(t,n){e("setLoading",!0),qt.dispatch("loadInitResource").then(function(o){var s={headers:{groupId:i.initData.groupId}};Ut.a.get(i.endPointApi+"/postal/votings/"+a.className+"/"+a.classPk,s).then(function(a){a.data?t(a.data.data):t([]),e("setLoading",!1)}).catch(function(t){n(t),e("setLoading",!1)})})})},loadGovAgencys:function(t,a){var e=t.commit,i=t.state;return new Promise(function(t,a){e("setLoading",!0),qt.dispatch("loadInitResource").then(function(n){var o={headers:{groupId:i.initData.groupId}};Ut.a.get(Kt.initData.dictcollectionsApi+"/GOVERNMENT_AGENCY/dictitems",o).then(function(a){a.data?t(a.data.data):t([]),e("setLoading",!1)}).catch(function(t){a(t),e("setLoading",!1)})})})},loadEmployees:function(t,a){var e=t.commit,i=t.state;return new Promise(function(t,n){e("setLoading",!0),qt.dispatch("loadInitResource").then(function(o){var s={headers:{groupId:i.initData.groupId}};Ut.a.get(Kt.initData.employeeApi+"/"+a.itemCode,s).then(function(a){a.data?t(a.data.data):t([]),e("setLoading",!1)}).catch(function(t){n(t),e("setLoading",!1)})})})},getEmployee:function(t,a){var e=t.commit,i=t.state;return new Promise(function(t,n){e("setLoading",!0),qt.dispatch("loadInitResource").then(function(o){var s={headers:{groupId:i.initData.groupId}};Ut.a.get(Kt.initData.detailEmployeeApi+"/"+a.employeeId,s).then(function(a){t(a.data),e("setLoading",!1)}).catch(function(t){n(t),e("setLoading",!1)})})})},checkPermisionVoting:function(t,a){t.commit;var e=t.state;return new Promise(function(t,i){qt.dispatch("loadInitResource").then(function(){var n={headers:{groupId:e.initData.groupId},params:{applicantIdNo:a.applicantIdNo,dossierNo:a.dossierNo}};Ut.a.get("/o/rest/v2/votings/checkpermission",n).then(function(a){var e=a.data;t(e)}).catch(function(t){console.log(t),i(t)})})})},submitVoting:function(t,a){t.commit;var e=t.state;return new Promise(function(t,i){qt.dispatch("loadInitResource").then(function(n){var o=new URLSearchParams,s={headers:{groupId:e.initData.groupId}};a.comment&&o.append("comment",a.comment),o.append("selected",a.selected),o.append("className",a.className),o.append("classPk",a.classPk),Ut.a.post(e.endPointApi+"/postal/votings/"+a.votingId+"/results",o,s).then(function(a){t(a.data)}).catch(function(t){i(t)})})})}},mutations:{setIndex:function(t,a){t.index=a},setInitData:function(t,a){t.initData=a},setLoading:function(t,a){t.loading=a}},getters:{loading:function(t){return t.loading},index:function(t){return t.index}}}),Xt=e("967d"),Yt=e("d8c5"),Jt=e.n(Yt);e("d304");i["a"].use(Xt["default"]),i["a"].use(Jt.a);var Qt=void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0;Ut.a.defaults.withCredentials=!0,Ut.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",Ut.a.defaults.headers.common["groupId"]=Qt,i["a"].config.productionTip=!0,i["a"].mixin({methods:{getScopeGroupId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0},getAuthToken:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.Liferay.authToken:""},getUserId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getUserId():0}}}),new i["a"]({router:jt,store:qt,render:function(t){return t(h)}}).$mount("#app_survey")},"726e":function(t,a,e){},"74ef":function(t,a,e){},bbd0:function(t){t.exports={renderURLInit:"?p_p_id=FrontendWebVoting&p_p_lifecycle=2&p_p_state=exclusive&p_p_mode=view&p_p_resource_id=renderURLInit",initData:{votingApi:"/o/rest/v2/postal/votings",agenciesApi:"/o/rest/v2/serviceinfos/statistics/agencies",employeeApi:"/o/rest/v2/employees/publish",detailEmployeeApi:"/o/rest/v2/employees",dictcollectionsApi:"/o/rest/v2/dictcollections"}}},cf0c:function(t,a,e){"use strict";var i=e("726e"),n=e.n(i);n.a}});
//# sourceMappingURL=app.0c1836df.js.map