//>>built
define("epi-cms/contentediting/ContentActionSupport",["epi/i18n!epi/cms/nls/episerver.cms.versionstatus"],function(_1){var _2=[];if(_1){_2=[_1.notcreated,_1.rejected,_1.checkedout,_1.checkedin,_1.published,_1.previouslypublished,_1.delayedpublish,_1.expired];}var _3={versionStatus:{NotCreated:0,Rejected:1,CheckedOut:2,CheckedIn:3,Published:4,PreviouslyPublished:5,DelayedPublish:6,Expired:7},versionLocalizations:_2,getVersionStatus:function(_4){return this.versionLocalizations[_4];},action:{Create:"Create",Edit:"Edit",Delete:"Delete",CheckIn:"CheckIn",Save:"Save",Reject:"Reject",Publish:"Publish",Administer:"Administer"},accessLevel:{NoAccess:0,Read:1,Create:2,Edit:4,CheckIn:4,Delete:8,Publish:16,Administer:32,FullAccess:63},saveAction:{None:0,Save:1,CheckIn:2,Publish:3,Reject:4,ForceNewVersion:128,ForceCurrentVersion:256,SkipValidation:512,DelayedPublish:1024},sortOrder:{None:0,CreatedDescending:1,CreatedAscending:2,Alphabetical:3,Index:4,ChangedDescending:5,Rank:6,PublishedAscending:7,PublishedDescending:8},providerCapabilities:{None:0,Create:1,Edit:2,Delete:4,Move:8,Copy:16,MultiLanguage:32,Security:64,Search:128,PageFolder:256,Wastebasket:512},isActionAvailable:function(_5,_6,_7,_8,_9){if(!_5){return false;}if(!_8&&_5.capabilities&&_5.capabilities.language&&_5.missingLanguageBranch&&_5.missingLanguageBranch.isTranslationNeeded){return false;}var _a=_9?_5.accessRights:_5.accessMask;var _b=_3.hasAccess(_a,_3.accessLevel[_6])&&_3.canPerformAction(_5,_6);if(_7){_b=_b&&_3.hasProviderCapability(_5.providerCapabilityMask,_7);}return _b;},canPerformAction:function(_c,_d){if(_c.status===_3.versionStatus.DelayedPublish&&(_d===_3.action.Edit||_d===_3.action.Publish)){return false;}if(_d===_3.action.Publish){return !(_c.status===_3.versionStatus.Published||_c.status===_3.versionStatus.Expired);}if(_d===_3.action.CheckIn){return _c.status===_3.versionStatus.CheckedOut||_c.status===_3.versionStatus.Rejected;}if(_d===_3.action.Edit){var _e=(_c.status===_3.versionStatus.Published&&!_c.isCommonDraft)||(_c.status===_3.versionStatus.Expired&&!_c.isCommonDraft)||_c.status===_3.versionStatus.PreviouslyPublished||_c.status===_3.versionStatus.CheckedIn||_c.status===_3.versionStatus.DelayedPublish;return !(_e||_c.isDeleted||_c.isWastebasket);}return true;},hasAccess:function(_f,_10){return (_f&_10)==_10;},hasLanguageAccess:function(_11){if(!_11){return false;}var _12=_11.languageContext||_11.missingLanguageBranch||_11;return !_12||(_12.hasTranslationAccess&&_12.isPreferredLanguageAvailable);},getPermissionMap:function(_13){var map={};for(var al in _3.accessLevel){map[al]=_3.hasAccess(_13,_3.accessLevel[al]);}return map;},hasProviderCapability:function(_14,_15){return (_14&_15)==_15;}};return _3;});