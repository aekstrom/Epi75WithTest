function saveContent(){tinyMCEPopup.editor.setContent(document.getElementById("htmlSource").value,{source_view:!0}),tinyMCEPopup.close()}function onLoadInit(){tinyMCEPopup.resizeToInnerSize(),tinymce.isGecko&&(document.body.spellcheck=tinyMCEPopup.editor.getParam("gecko_spellcheck")),document.getElementById("htmlSource").value=tinyMCEPopup.editor.getContent({source_view:!0}),tinyMCEPopup.editor.getParam("theme_advanced_source_editor_wrap",!0)&&(turnWrapOn(),document.getElementById("wraped").checked=!0),resizeInputs()}function setWrap(val){var v,n,s=document.getElementById("htmlSource");s.wrap=val,tinymce.isIE||(v=s.value,n=s.cloneNode(!1),n.setAttribute("wrap",val),s.parentNode.replaceChild(n,s),n.value=v)}function setWhiteSpaceCss(value){var el=document.getElementById("htmlSource");tinymce.DOM.setStyle(el,"white-space",value)}function turnWrapOff(){tinymce.isWebKit?setWhiteSpaceCss("pre"):setWrap("off")}function turnWrapOn(){tinymce.isWebKit?setWhiteSpaceCss("pre-wrap"):setWrap("soft")}function toggleWordWrap(elm){elm.checked?turnWrapOn():turnWrapOff()}function resizeInputs(){var el,vp=tinyMCEPopup.dom.getViewPort(window);el=document.getElementById("htmlSource"),el&&(el.style.width=vp.w-20+"px",el.style.height=vp.h-65+"px")}tinyMCEPopup.requireLangPack(),tinyMCEPopup.onInit.add(onLoadInit);