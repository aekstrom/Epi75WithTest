//>>built
require({cache:{"url:epi/shell/widget/templates/RadioMenuItem.htm":"<tr class=\"dijitReset dijitMenuItem\" data-dojo-attach-point=\"focusNode\" role=\"menuitemradio\" tabIndex=\"-1\">\n\t<td class=\"dijitReset dijitMenuItemIconCell\" role=\"presentation\">\n\t\t<img src=\"${_blankGif}\" alt=\"\" class=\"dijitMenuItemIcon dijitCheckedMenuItemIcon\" data-dojo-attach-point=\"iconNode\"/>\n\t\t<span class=\"dijitCheckedMenuItemIconChar\">&#10003;</span>\n\t</td>\n\t<td class=\"dijitReset dijitMenuItemLabel\" colspan=\"2\"><span class=\"dijitInline dijitReset dijitIcon\" data-dojo-attach-point=\"labelIconNode\"></span> <span data-dojo-attach-point=\"containerNode, labelNode\"></span></td>\n\t<td class=\"dijitReset dijitMenuItemAccelKey\" style=\"display: none\" data-dojo-attach-point=\"accelKeyNode\"></td>\n\t<td class=\"dijitReset dijitMenuArrowCell\" role=\"presentation\">&#160;</td>\n</tr>"}});define("epi/shell/widget/RadioMenuItem",["dojo/_base/declare","dojo/_base/array","dojo/dom-class","dijit/CheckedMenuItem","dojo/text!./templates/RadioMenuItem.htm"],function(_1,_2,_3,_4,_5){return _1([_4],{baseClass:"dijitMenuItem epi-radioMenuItem",iconClass:null,templateString:_5,_onClick:function(e){this._resetState();this.inherited(arguments);},_resetState:function(){_2.forEach(this._getChildren(),function(_6,_7){_6.set("checked",false);});},_getChildren:function(){return this.getParent().getChildren();},_setIconClassAttr:function(_8){this._set("iconClass",_8);_3.add(this.labelIconNode,_8);}});});