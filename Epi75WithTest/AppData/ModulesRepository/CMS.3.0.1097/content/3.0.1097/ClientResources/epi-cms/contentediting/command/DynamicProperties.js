//>>built
define("epi-cms/contentediting/command/DynamicProperties",["dojo/_base/declare","epi-cms/contentediting/ContentActionSupport","epi-cms/contentediting/command/_LegacyDialogCommandBase","epi/i18n!epi/cms/nls/episerver.cms.contentediting.contentdetails.command.dynamicproperties"],function(_1,_2,_3,_4){return _1([_3],{label:_4.label,tooltip:_4.tooltip,dialogPath:"Edit/EditDynProp.aspx",raiseCloseEvent:false,_onModelChange:function(){var _5=this.model.contentData,_6=_2.hasAccess(_5.accessMask,_2.accessLevel.Administer),_7=this.model.canChangeContent();this.set("canExecute",_5.capabilities.dynamicProperties&&_6&&_7);}});});