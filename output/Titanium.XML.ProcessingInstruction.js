Ext.data.JsonP.Titanium_XML_ProcessingInstruction({"tagname":"class","name":"Titanium.XML.ProcessingInstruction","extends":"Titanium.Proxy","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Titanium.XML.ProcessingInstruction","members":{"cfg":[],"property":[{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{},"id":"property-bubbleParent"},{"name":"data","tagname":"property","owner":"Titanium.XML.ProcessingInstruction","meta":{},"id":"property-data"},{"name":"target","tagname":"property","owner":"Titanium.XML.ProcessingInstruction","meta":{"readonly":true},"id":"property-target"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-getBubbleParent"},{"name":"getData","tagname":"method","owner":"Titanium.XML.ProcessingInstruction","meta":{},"id":"method-getData"},{"name":"getTarget","tagname":"method","owner":"Titanium.XML.ProcessingInstruction","meta":{},"id":"method-getTarget"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-setBubbleParent"},{"name":"setData","tagname":"method","owner":"Titanium.XML.ProcessingInstruction","meta":{},"id":"method-setData"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":20822,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-XML-ProcessingInstruction"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a><div class='subclass '><strong>Titanium.XML.ProcessingInstruction</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/titanium.html#Titanium-XML-ProcessingInstruction' target='_blank'>titanium.js</a></div></pre><div class='doc-contents'><p>@typestr Object of <a href=\"#!/api/Titanium.XML\" rel=\"Titanium.XML\" class=\"docClass\">Titanium.XML</a>\n@platform android 0.9\n@platform iphone 0.9\n@platform ipad 0.9\n@platform mobileweb 1.8 <p>A way to keep processor-specific information in the text of the document. Implements the <a href=\"http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1004215813\">DOM Level 2 API</a> on Android and iOS. Exposes the <a href=\"http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1004215813\">DOM Level 3 API</a> implementation on Mobile Web.</p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bubbleParent' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-property-bubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0\n\nIndicates if the proxy will bubble an event to its par...</div><div class='long'><p>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n\n<p>Indicates if the proxy will bubble an event to its parent.</p>\n\n\n<p>@description <p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p></p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.XML.ProcessingInstruction'>Titanium.XML.ProcessingInstruction</span><br/><a href='source/titanium.html#Titanium-XML-ProcessingInstruction-property-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.XML.ProcessingInstruction-property-data' class='name expandable'>data</a><span> : String</span></div><div class='description'><div class='short'>Retrieve the content of this processing instruction. ...</div><div class='long'><p>Retrieve the content of this processing instruction. This from the first non white space character  after the target to the character immediatly preceding the ?&gt;. When setting a processing instruction, a DOMException may be thrown on an invalid instruction.</p>\n\n</div></div></div><div id='property-target' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.XML.ProcessingInstruction'>Titanium.XML.ProcessingInstruction</span><br/><a href='source/titanium.html#Titanium-XML-ProcessingInstruction-property-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.XML.ProcessingInstruction-property-target' class='name expandable'>target</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Retrieve the target of this processing instruction. ...</div><div class='long'><p>Retrieve the target of this processing instruction. XML defines this as being the first token following  the markup that begins the processing instruction.</p>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-addEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> ) : Object</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-applyProperties' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> ) : Object</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n\n<p>@description <p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void\n@platform android 3.0\n@platform iphone 3.0\n@platform ipad 3.0\n@platform mobileweb 3.0</p>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> ) : Object</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-getBubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n</div></li></ul></div></div></div><div id='method-getData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.XML.ProcessingInstruction'>Titanium.XML.ProcessingInstruction</span><br/><a href='source/titanium.html#Titanium-XML-ProcessingInstruction-method-getData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.XML.ProcessingInstruction-method-getData' class='name expandable'>getData</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the data property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.XML.ProcessingInstruction-property-data\" rel=\"Titanium.XML.ProcessingInstruction-property-data\" class=\"docClass\">data</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.XML.ProcessingInstruction'>Titanium.XML.ProcessingInstruction</span><br/><a href='source/titanium.html#Titanium-XML-ProcessingInstruction-method-getTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.XML.ProcessingInstruction-method-getTarget' class='name expandable'>getTarget</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the target property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.XML.ProcessingInstruction-property-target\" rel=\"Titanium.XML.ProcessingInstruction-property-target\" class=\"docClass\">target</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-removeEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> ) : Object</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n\n<p>@description <p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove. </p></p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-setBubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> ) : Object</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void\n@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n</div></li></ul></div></div></div><div id='method-setData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.XML.ProcessingInstruction'>Titanium.XML.ProcessingInstruction</span><br/><a href='source/titanium.html#Titanium-XML-ProcessingInstruction-method-setData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.XML.ProcessingInstruction-method-setData' class='name expandable'>setData</a>( <span class='pre'>data</span> ) : Object</div><div class='description'><div class='short'>Sets the value of the data property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.XML.ProcessingInstruction-property-data\" rel=\"Titanium.XML.ProcessingInstruction-property-data\" class=\"docClass\">data</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div></div></div></div></div>"});