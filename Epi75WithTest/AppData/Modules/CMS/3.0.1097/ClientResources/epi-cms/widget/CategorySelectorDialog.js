//>>built
define("epi-cms/widget/CategorySelectorDialog",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dijit/_TemplatedMixin","dijit/_Widget","dijit/_WidgetsInTemplateMixin","dijit/form/Button","epi","epi/dependency","epi-cms/widget/CategoryTree"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a){return _2([_5,_4,_6],{templateString:"<div class=\"epi-categorySelectorDialog\">                             <div data-dojo-attach-point=\"categoryTree\" data-dojo-type=\"epi-cms/widget/CategoryTree\" data-dojo-props=\"rootCategory: ${rootCategory}\"></div>                         </div>",selectedCategoriesData:null,_selectedCategoryIds:null,rootCategory:null,onShow:function(){if(!this._selectedCategoryIds&&!this.categoryTree){return;}this.categoryTree.set("selectedNodeIds",this._selectedCategoryIds);this.categoryTree.set("selectedNodeData",this.selectedCategoriesData);},_setValueAttr:function(_b){this._selectedCategoryIds=_b;if(!this._selectedCategoryIds){this._selectedCategoryIds=[];}},_getValueAttr:function(){return this.categoryTree.get("selectedNodeIds");}});});