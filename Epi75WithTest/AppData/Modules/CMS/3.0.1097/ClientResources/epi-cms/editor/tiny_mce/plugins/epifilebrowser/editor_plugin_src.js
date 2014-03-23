(function(tinymce){tinymce.create("tinymce.plugins.epifilebrowser",{init:function(editor){if("undefined"!=typeof EPi&&"function"==typeof EPi.ResolveUrlFromUI){var fileBrowserCallback=function(formInputId,value,type,win){var getFormInput=function(){return win.document.getElementById(formInputId)},getAllowedTypes=function(type){switch(type){case"image":return["episerver.core.icontentimage"];default:return["episerver.core.icontentmedia"]}};require(["dojo/_base/lang","dojo/on","dojo/when","epi/dependency","epi/UriParser","epi/shell/widget/dialog/Dialog","epi-cms/widget/ContentSelectorDialog","epi/i18n!epi/cms/nls/episerver.cms.widget.contentselector"],function(lang,on,when,dependency,UriParser,Dialog,ContentSelectorDialog,res){var registry=dependency.resolve("epi.storeregistry"),store=registry.get("epi.cms.content.light"),contextStore=registry.get("epi.shell.context"),contentRepositoryDescriptors=dependency.resolve("epi.cms.contentRepositoryDescriptors"),settings=contentRepositoryDescriptors.media,contentSelector=new ContentSelectorDialog({canSelectOwnerContent:!1,showButtons:!1,roots:settings.roots,multiRootsMode:!0,showRoot:!0,allowedTypes:getAllowedTypes(type)}),dialog=new Dialog({title:res.title,dialogClass:"epi-dialog-portrait",content:contentSelector});if(value){var result=contextStore.query({url:value});when(result,function(context){var uri=new UriParser(context.versionAgnosticUri);contentSelector.set("value",uri.getId())})}dialog.show(),on(dialog,"execute",function(){var contentLink=contentSelector.get("value");contentLink&&when(store.get(contentLink),lang.hitch(this,function(content){var formInput=getFormInput();formInput.value=content.previewUrl,formInput.onchange&&formInput.onchange(content.publicUrl)}))})})};editor.settings.file_browser_callback=fileBrowserCallback}},getInfo:function(){return{longname:"File Browser Plug-In",author:"EPiServer AB",authorurl:"http://www.episerver.com",infourl:"http://www.episerver.com",version:1}}}),tinymce.PluginManager.add("epifilebrowser",tinymce.plugins.epifilebrowser)})(tinymce,epiJQuery);