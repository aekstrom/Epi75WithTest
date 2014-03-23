//>>built
define("epi-cms/contentediting/viewmodel/ContentDetailsViewModel",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","epi","epi/datetime","epi/dependency","epi/username","epi-cms/contentediting/command/AccessRights","epi-cms/contentediting/command/LanguageSettings","epi-cms/contentediting/command/DynamicProperties","epi/shell/command/_CommandConsumerMixin","epi/shell/command/_GlobalCommandProviderMixin","epi-cms/contentediting/ContentActionSupport","epi-cms/core/ContentReference","epi-cms/contentediting/viewmodel/_ContentViewModelObserver"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f){return _2([_f,_b,_c],{commandKey:"epi.cms.contentdetailsmenu",res:null,contentTypeName:null,contentId:null,visibleToEveryOne:null,existingLanguages:null,accessRightsCommand:null,languageSettingsCommand:null,dynamicPropertiesCommand:null,expirationCommand:null,constructor:function(_10){_2.safeMixin(this,_10);},postscript:function(){this.initializeCommandProviders();this.accessRightsCommand=new _8();this.languageSettingsCommand=new _9();this.dynamicPropertiesCommand=new _a();if(!this.expirationCommand){var _11=_6.resolve("epi.cms.contentEditing.command.Editing");this.expirationCommand=_11.manageExpiration;}if(!this.store){var _12=_6.resolve("epi.storeregistry");this.store=_12.get("epi.cms.contenttype");}this.inherited(arguments);},destroy:function(){this.accessRightsCommand.destroy();this.languageSettingsCommand.destroy();this.dynamicPropertiesCommand.destroy();this.inherited(arguments);},_setDataModelAttr:function(_13){this.updateCommandModel(_13);this.accessRightsCommand.set("model",_13);this.languageSettingsCommand.set("model",_13);this.dynamicPropertiesCommand.set("model",_13);this.inherited(arguments);},onDataModelChange:function(_14,_15,_16){var _17=this.dataModel.contentData,_18=new _e(_17.contentLink);this.set("contentId",_18.id);this.set("existingLanguages",_1.map(_17.existingLanguageBranches,function(_19){return {text:_19.languageId,urlSegment:_19.urlSegment,isCurrentLanguage:_17.currentLanguageBranch&&_19.languageId===_17.currentLanguageBranch.languageId,contentLink:new _e(_19.commonDraftLink).createVersionUnspecificReference().toString()};}));this.set("visibleToEveryOne",_17.visibleToEveryOne);dojo.when(this.store.get(_17.contentTypeID),dojo.hitch(this,function(_1a){this.set("contentTypeName",_1a.localizedName);}));this.set("commands",this.getCommands());},getCommands:function(){var _1b=this.inherited(arguments);return [this.dynamicPropertiesCommand,this.languageSettingsCommand,this.expirationCommand].concat(_1b);}});});