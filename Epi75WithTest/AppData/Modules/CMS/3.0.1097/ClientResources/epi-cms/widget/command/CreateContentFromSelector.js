//>>built
define("epi-cms/widget/command/CreateContentFromSelector",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/aspect","dojo/on","dojo/topic","dojo/when","epi/dependency","epi/shell/command/_Command","epi/shell/TypeDescriptorManager","epi/shell/widget/dialog/Dialog","epi-cms/core/ContentReference","epi-cms/ApplicationSettings","epi-cms/_ContentContextMixin","epi-cms/contentediting/_ContextualContentContextMixin","epi-cms/widget/ContentSelectorDialog","epi-cms/widget/ContentForestStoreModel","epi-cms/contentediting/ContentActionSupport","epi/i18n!epi/cms/nls/episerver.cms.widget.createcontentselector"],function(_1,_2,_3,_4,on,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12){return _2([_8,_d,_e],{canExecute:true,canSelectOwnerContent:false,showButtons:false,value:null,showRoot:false,roots:null,creatingTypeIdentifier:null,containerTypeIdentifiers:null,modelContent:null,destroyOnHide:true,confirmActionText:_12.buttons.confirmation,description:null,title:null,createAsLocalAsset:false,canChangeLocalAssetName:true,addToParentsAssetsFolder:false,typeDescriptorManager:null,contentRepositoryDescriptors:null,postscript:function(){this.inherited(arguments);this._initialize();},_initialize:function(){if(!this.creatingTypeIdentifier){throw "You need to specify a creatingTypeIdentifier";}if(this._initialized){return;}var _13=_7.resolve("epi.storeregistry");this.contentStore=this.contentStore||_13.get("epi.cms.content.light");this.contextStore=this.contextStore||_13.get("epi.shell.context");this.contentTypeStore=this.contentTypeStore||_13.get("epi.cms.contenttype");this.contentRepositoryDescriptors=this.contentRepositoryDescriptors||_7.resolve("epi.cms.contentRepositoryDescriptors");var _14,_15=function(_16){return _16==this.creatingTypeIdentifier;};for(var _17 in this.contentRepositoryDescriptors){var _18=this.contentRepositoryDescriptors[_17];if(_1.some(_18.containedTypes,_15,this)){_14=_18;break;}}if(_14){var _19=_9.getValue(this.creatingTypeIdentifier,"containerTypes");this.containerTypeIdentifiers=_19?_19:[this.creatingTypeIdentifier];this.roots=this.roots||_14.roots;}this.modelContent=new _10({roots:this.roots,additionalQueryOptions:{sort:[{attribute:"name",descending:false}]}});this.preventContextualContentFor=_14.preventContextualContentFor;this.label=this.label||_9.getResourceValue(this.creatingTypeIdentifier,"create");this.title=this.title||_9.getResourceValue(this.creatingTypeIdentifier,"selectparent");this.description=this.description||_9.getResourceValue(this.creatingTypeIdentifier,"createdescription");this.iconClass=this.iconClass||_9.getValue(this.creatingTypeIdentifier,"commandIconClass");this._initialized=true;},_execute:function(){_6(this.getCurrentContent(),_3.hitch(this,function(_1a){if(!_1a){return;}_6(this.contextStore.get("?uri=epi.cms.contentdata:///"+_1a.contentLink),_3.hitch(this,function(_1b){if(!_1b){return;}var _1c=_1b.languageContext;var _1d=!_1c||(_1c.hasTranslationAccess&&_1c.isPreferredLanguageAvailable);var _1e=_b.compareIgnoreVersion(_1a.contentLink,_c.wastebasketPage);var _1f=!(_1e||_1a.isDeleted)&&_1d&&_11.isActionAvailable(_1a,_11.action.Create,_11.providerCapabilities.Create,true);_6(this._getAvailableContentTypes(_1a.contentLink),_3.hitch(this,function(_20){var _21=this._isContentTypeAllowedAsChildToCurrentContext(_20,_1a);if((!_21&&!this.createAsLocalAsset)||!_1f){this._createDialog();this._setDialogButtonState(this.selector.get("value"));}else{this._switchView(_1a);}}));}));}));},_getAvailableContentTypes:function(_22){return this.contentTypeStore.query({query:"getavailablecontenttypes",parentReference:_22});},_isContentTypeAllowedAsChildToCurrentContext:function(_23,_24){var _25=_1.some(_23,function(_26){return _9.isBaseTypeIdentifier(_26.typeIdentifier,this.creatingTypeIdentifier);},this);var _27=_1.some(this.containerTypeIdentifiers,function(_28){return _9.isBaseTypeIdentifier(_24.typeIdentifier,_28);});return _25&&_27;},_createDialog:function(){this.selector=new _f({canSelectOwnerContent:this.canSelectOwnerContent,showButtons:this.showButtons,value:this.value,showRoot:this.showRoot,multiRootsMode:true,allowedTypes:this.containerTypeIdentifiers,model:this.modelContent,showContextualContent:true,preventContextualContentFor:this.preventContextualContentFor});this.dialog=new _a({destroyOnHide:this.destroyOnHide,confirmActionText:this.confirmActionText,description:this.description,title:this.title,content:this.selector});on(this.selector,"change",_3.hitch(this,this._setDialogButtonState));_4.after(this.dialog,"hide",_3.hitch(this,function(_29){this.hideDeferred=_29;}));this.dialog.on("execute",_3.hitch(this,this._onContentSelected));this.dialog.show();},_onContentSelected:function(){var _2a=this.selector.get("value");_6(this.hideDeferred,_3.hitch(this,function(){_6(this.contentStore.get(_2a),_3.hitch(this,function(_2b){this._switchView(_2b);}));}));},_switchView:function(_2c){_6(this.getCurrentContent(),_3.hitch(this,function(_2d){var _2e=this.isPseudoContextualRoot(_2c)||this.createAsLocalAsset;_5.publish("/epi/shell/action/changeview","epi-cms/contentediting/CreateContent",null,{requestedType:this.creatingTypeIdentifier,parent:_2e?_2d:_2c,editAllPropertiesOnCreate:this.editAllPropertiesOnCreate,addToDestination:this.model,createAsLocalAsset:_2e,canChangeLocalAssetName:this.canChangeLocalAssetName,treatAsSecondaryView:this.createAsLocalAsset,view:_9.getValue(this.creatingTypeIdentifier,"createView")});}));},_setDialogButtonState:function(_2f){if(!_2f){this.dialog.definitionConsumer.setItemProperty(this.dialog._okButtonName,"disabled",true);return;}_6(this.contentStore.get(_2f),_3.hitch(this,function(_30){_6(this.isPseudoContextualRoot(_30)?this.contextStore.get("?uri=epi.cms.contentdata:///"+this._currentContext.id):_30,_3.hitch(this,function(_31){var _32=_11.hasLanguageAccess(_31),_33=_32&&_11.hasAccess(_30.accessMask,_11.accessLevel.Create);this.dialog.definitionConsumer.setItemProperty(this.dialog._okButtonName,"disabled",!_33);}));}));}});});