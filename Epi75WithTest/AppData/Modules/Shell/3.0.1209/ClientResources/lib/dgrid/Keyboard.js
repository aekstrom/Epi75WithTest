//>>built
define("dgrid/Keyboard",["dojo/_base/declare","dojo/aspect","dojo/on","dojo/_base/lang","dojo/has","put-selector/put","dojo/_base/Deferred","dojo/_base/sniff"],function(_1,_2,on,_3,_4,_5,_6){var _7={checkbox:1,radio:1,button:1},_8=/\bdgrid-cell\b/,_9=/\bdgrid-row\b/;_4.add("dom-contains",function(_a,_b,_c){return !!_c.contains;});function _d(_e,_f){if(_4("dom-contains")){return _e.contains(_f);}else{return _e.compareDocumentPosition(_f)&8;}};var _10=_1(null,{pageSkip:10,tabIndex:0,keyMap:null,headerKeyMap:null,postMixInProperties:function(){this.inherited(arguments);if(!this.keyMap){this.keyMap=_3.mixin({},_10.defaultKeyMap);}if(!this.headerKeyMap){this.headerKeyMap=_3.mixin({},_10.defaultHeaderKeyMap);}},postCreate:function(){this.inherited(arguments);var _11=this;function _12(_13){var _14=_13.target;return _14.type&&(!_7[_14.type]||_13.keyCode==32);};function _15(_16){var _17=_11.cellNavigation,_18=_17?_8:_9,_19=_16===_11.headerNode,_1a=_16;function _1b(){_11._focusedHeaderNode=_1a=_17?_11.headerNode.getElementsByTagName("th")[0]:_11.headerNode;if(_1a){_1a.tabIndex=_11.tabIndex;}};if(_19){_1b();_2.after(_11,"renderHeader",_1b,true);}else{_2.after(_11,"renderArray",function(ret){return _6.when(ret,function(ret){var _1c=_11._focusedNode||_1a;if(_18.test(_1c.className)&&_d(_16,_1c)){return ret;}for(var i=0,_1d=_16.getElementsByTagName("*"),_1e;(_1e=_1d[i]);++i){if(_18.test(_1e.className)){_1c=_11._focusedNode=_1e;break;}}_1c.tabIndex=_11.tabIndex;return ret;});});}_11._listeners.push(on(_16,"mousedown",function(_1f){if(!_12(_1f)){_11._focusOnNode(_1f.target,_19,_1f);}}));_11._listeners.push(on(_16,"keydown",function(_20){if(_20.metaKey||_20.altKey){return;}var _21=_11[_19?"headerKeyMap":"keyMap"][_20.keyCode];if(_21&&!_12(_20)){_21.call(_11,_20);}}));};if(this.tabableHeader){_15(this.headerNode);on(this.headerNode,"dgrid-cellfocusin",function(){_11.scrollTo({x:this.scrollLeft});});}_15(this.contentNode);},removeRow:function(_22){if(!this._focusedNode){return this.inherited(arguments);}var _23=this,_24=document.activeElement===this._focusedNode,_25=this[this.cellNavigation?"cell":"row"](this._focusedNode),_26=_25.row||_25,_27;_22=_22.element||_22;if(_22===_26.element){_27=this.down(_26,true);if(!_27||_27.element===_22){_27=this.up(_26,true);}this._removedFocus={active:_24,rowId:_26.id,columnId:_25.column&&_25.column.id,siblingId:!_27||_27.element===_22?undefined:_27.id};setTimeout(function(){if(_23._removedFocus){_23._restoreFocus(_26.id);}},0);this._focusedNode=null;}this.inherited(arguments);},insertRow:function(_28){var _29=this.inherited(arguments);if(this._removedFocus&&!this._removedFocus.wait){this._restoreFocus(_29);}return _29;},_restoreFocus:function(row){var _2a=this._removedFocus,_2b;row=row&&this.row(row);_2b=row&&row.element&&row.id===_2a.rowId?row:typeof _2a.siblingId!=="undefined"&&this.row(_2a.siblingId);if(_2b&&_2b.element){if(!_2b.element.parentNode.parentNode){_2a.wait=true;return;}_2b=typeof _2a.columnId!=="undefined"?this.cell(_2b,_2a.columnId):_2b;if(_2a.active){this.focus(_2b);}else{_5(_2b.element,".dgrid-focus");_2b.element.tabIndex=this.tabIndex;}}delete this._removedFocus;},addKeyHandler:function(key,_2c,_2d){return _2.after(this[_2d?"headerKeyMap":"keyMap"],key,_2c,true);},_focusOnNode:function(_2e,_2f,_30){var _31="_focused"+(_2f?"Header":"")+"Node",_32=this[_31],_33=this.cellNavigation?"cell":"row",_34=this[_33](_2e),_35,_36,_37,_38,i;_2e=_34&&_34.element;if(!_2e){return;}if(this.cellNavigation){_35=_2e.getElementsByTagName("input");for(i=0,_37=_35.length;i<_37;i++){_36=_35[i];if((_36.tabIndex!=-1||"lastValue" in _36)&&!_36.disabled){if(_4("ie")<8){_36.style.position="relative";}_36.focus();if(_4("ie")<8){_36.style.position="";}_38=true;break;}}}_30=_3.mixin({grid:this},_30);if(_30.type){_30.parentType=_30.type;}if(!_30.bubbles){_30.bubbles=true;}if(_32){_5(_32,"!dgrid-focus[!tabIndex]");if(_4("ie")<8){_32.style.position="";}_30[_33]=this[_33](_32);on.emit(_2e,"dgrid-cellfocusout",_30);}_32=this[_31]=_2e;_30[_33]=_34;if(!_38){if(_4("ie")<8){_2e.style.position="relative";}_2e.tabIndex=this.tabIndex;_2e.focus();}_5(_2e,".dgrid-focus");on.emit(_32,"dgrid-cellfocusin",_30);},focusHeader:function(_39){this._focusOnNode(_39||this._focusedHeaderNode,true);},focus:function(_3a){this._focusOnNode(_3a||this._focusedNode,false);}});var _3b=_10.moveFocusVertical=function(_3c,_3d){var _3e=this.cellNavigation,_3f=this[_3e?"cell":"row"](_3c),_40=_3e&&_3f.column.id,_41=this.down(this._focusedNode,_3d,true);if(_3e){_41=this.cell(_41,_40);}this._focusOnNode(_41,false,_3c);_3c.preventDefault();};var _42=_10.moveFocusUp=function(_43){_3b.call(this,_43,-1);};var _44=_10.moveFocusDown=function(_45){_3b.call(this,_45,1);};var _46=_10.moveFocusPageUp=function(_47){_3b.call(this,_47,-this.pageSkip);};var _48=_10.moveFocusPageDown=function(_49){_3b.call(this,_49,this.pageSkip);};var _4a=_10.moveFocusHorizontal=function(_4b,_4c){if(!this.cellNavigation){return;}var _4d=!this.row(_4b),_4e=this["_focused"+(_4d?"Header":"")+"Node"];this._focusOnNode(this.right(_4e,_4c),_4d,_4b);_4b.preventDefault();};var _4f=_10.moveFocusLeft=function(_50){_4a.call(this,_50,-1);};var _51=_10.moveFocusRight=function(_52){_4a.call(this,_52,1);};var _53=_10.moveHeaderFocusEnd=function(_54,_55){var _56;if(this.cellNavigation){_56=this.headerNode.getElementsByTagName("th");this._focusOnNode(_56[_55?0:_56.length-1],true,_54);}_54.preventDefault();};var _57=_10.moveHeaderFocusHome=function(_58){_53.call(this,_58,true);};var _59=_10.moveFocusEnd=function(_5a,_5b){var _5c=this,_5d=this.cellNavigation,_5e=this.contentNode,_5f=_5b?0:_5e.scrollHeight,_60=_5e.scrollTop+_5f,_61=_5e[_5b?"firstChild":"lastChild"],_62=_61.className.indexOf("dgrid-preload")>-1,_63=_62?_61[(_5b?"next":"previous")+"Sibling"]:_61,_64=_63.offsetTop+(_5b?0:_63.offsetHeight),_65;if(_62){while(_63&&_63.className.indexOf("dgrid-row")<0){_63=_63[(_5b?"next":"previous")+"Sibling"];}if(!_63){return;}}if(!_62||_61.offsetHeight<1){if(_5d){_63=this.cell(_63,this.cell(_5a).column.id);}this._focusOnNode(_63,false,_5a);}else{if(!_4("dom-addeventlistener")){_5a=_3.mixin({},_5a);}_65=_2.after(this,"renderArray",function(_66){_65.remove();return _6.when(_66,function(_67){var _68=_67[_5b?0:_67.length-1];if(_5d){_68=_5c.cell(_68,_5c.cell(_5a).column.id);}_5c._focusOnNode(_68,false,_5a);});});}if(_60===_64){_5a.preventDefault();}};var _69=_10.moveFocusHome=function(_6a){_59.call(this,_6a,true);};function _6b(_6c){_6c.preventDefault();};_10.defaultKeyMap={32:_6b,33:_46,34:_48,35:_59,36:_69,37:_4f,38:_42,39:_51,40:_44};_10.defaultHeaderKeyMap={32:_6b,35:_53,36:_57,37:_4f,39:_51};return _10;});