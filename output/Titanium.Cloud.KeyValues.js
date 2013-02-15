Ext.data.JsonP.Titanium_Cloud_KeyValues({"tagname":"class","name":"Titanium.Cloud.KeyValues","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Titanium.Cloud.KeyValues","members":{"cfg":[],"property":[{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{},"id":"property-bubbleParent"}],"method":[{"name":"append","tagname":"method","owner":"Titanium.Cloud.KeyValues","meta":{},"id":"method-append"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-applyProperties"},{"name":"get","tagname":"method","owner":"Titanium.Cloud.KeyValues","meta":{},"id":"method-get"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-getBubbleParent"},{"name":"increment","tagname":"method","owner":"Titanium.Cloud.KeyValues","meta":{},"id":"method-increment"},{"name":"remove","tagname":"method","owner":"Titanium.Cloud.KeyValues","meta":{},"id":"method-remove"},{"name":"set","tagname":"method","owner":"Titanium.Cloud.KeyValues","meta":{},"id":"method-set"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-setBubbleParent"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":48150,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-Cloud-KeyValues"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a><div class='subclass '><a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a><div class='subclass '><strong>Titanium.Cloud.KeyValues</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/titanium.html#Titanium-Cloud-KeyValues' target='_blank'>titanium.js</a></div></pre><div class='doc-contents'><p>@typestr Submodule of <a href=\"#!/api/Titanium.Cloud\" rel=\"Titanium.Cloud\" class=\"docClass\">Titanium.Cloud</a> <p>Provides methods for accessing ACS Key-Values storage.</p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Set a Key-Value</h4>\n\n\n<p><p>This example sets a key-value and checks the response.</p></p>\n\n\n<pre>Cloud.KeyValues.set({\n    name: 'welcome_message',\n    value: 'Welcome to Appcelerator Cloud Services'\n}, function (e) {\n    if (e.success) {\n        alert('Success');\n    } else {\n        alert('Error:\\\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});</pre>\n\n\n<h4>Get a Key-Value</h4>\n\n\n<p><p>This example gets a key-value and checks the response.</p></p>\n\n\n<pre>Cloud.KeyValues.get({\n    name: 'welcome_message'\n}, function (e) {\n    if (e.success) {\n        var keyvalue = e.keyvalues[0];\n        alert('Success:\\\\n' +\n            'name: ' + keyvalue.name + '\\\\n' +\n            'value: ' + keyvalue.value);\n    } else {\n        alert('Error:\\\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});</pre>\n\n\n<h4>Append a Key-Value</h4>\n\n\n<p><p>This example appends a value to a key-value and checks the response.</p></p>\n\n\n<pre>Cloud.KeyValues.append({\n    name: 'welcome_message',\n    value: ', take a look around'\n}, function (e) {\n     if (e.success) {\n         var keyvalue = e.keyvalues[0];\n         alert('Success:\\\\n' +\n             'name: ' + keyvalue.name + '\\\\n' +\n             'value: ' + keyvalue.value);\n     } else {\n         alert('Error:\\\\n' +\n             ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n     }\n\n});</pre>\n\n\n<h4>Increment a Key-Value</h4>\n\n\n<p><p>This example increments a key-value and checks the response.</p></p>\n\n\n<pre>Cloud.KeyValues.increment({\n    name: 'score',\n    value: 1\n}, function (e) {\n     if (e.success) {\n         var keyvalue = e.keyvalues[0];\n         alert('Success:\\\\n' +\n             'name: ' + keyvalue.name + '\\\\n' +\n             'value: ' + keyvalue.value);\n     } else {\n         alert('Error:\\\\n' +\n             ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n     }\n\n});</pre>\n\n\n<h4>Remove a Key-Value</h4>\n\n\n<p><p>This example deletes a key-value and checks the response.</p></p>\n\n\n<pre>Cloud.KeyValues.remove({\n    name: 'welcome_message'\n}, function (e) {\n     if (e.success) {\n         alert('Success');\n     } else {\n         alert('Error:\\\\n' +\n             ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n     }\n\n});</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bubbleParent' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-property-bubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0\n\nIndicates if the proxy will bubble an event to its par...</div><div class='long'><p>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n\n<p>Indicates if the proxy will bubble an event to its parent.</p>\n\n\n<p>@description <p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p></p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-append' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Cloud.KeyValues'>Titanium.Cloud.KeyValues</span><br/><a href='source/titanium.html#Titanium-Cloud-KeyValues-method-append' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Cloud.KeyValues-method-append' class='name expandable'>append</a>( <span class='pre'>parameters, callback</span> ) : Object</div><div class='description'><div class='short'>Add the given value to the end of an existing value. ...</div><div class='long'><p>Add the given value to the end of an existing value.</p>\n\n\n<p>@description <p>Requires user login. </p></p>\n\n<p>See <a href=\"http://cloud.appcelerator.com/docs/api/v1/keyvalues/append\">Key-Values: Append to a Key-Value</a>\nfor the request parameters supported by this method.</p>\n\n\n<p>Not allowed on keyvalues with binary data.</p>\n\n\n<p>Data is returned in the <code>keyvalues</code> property of the parameter passed to the callback.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;CloudKeyValuesResponse&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-applyProperties' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> ) : Object</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n\n<p>@description <p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void\n@platform android 3.0\n@platform iphone 3.0\n@platform ipad 3.0\n@platform mobileweb 3.0</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Cloud.KeyValues'>Titanium.Cloud.KeyValues</span><br/><a href='source/titanium.html#Titanium-Cloud-KeyValues-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Cloud.KeyValues-method-get' class='name expandable'>get</a>( <span class='pre'>parameters, callback</span> ) : Object</div><div class='description'><div class='short'>Retrieve a string or binary value. ...</div><div class='long'><p>Retrieve a string or binary value.</p>\n\n\n<p>@description <p>See <a href=\"http://cloud.appcelerator.com/docs/api/v1/keyvalues/get\">Key-Value Store: Get a Value</a>\nfor the request parameters supported by this method.</p></p>\n\n<p>Data is returned in the <code>keyvalues</code> property of the parameter passed to the callback.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;CloudKeyValuesResponse&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-getBubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n</div></li></ul></div></div></div><div id='method-increment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Cloud.KeyValues'>Titanium.Cloud.KeyValues</span><br/><a href='source/titanium.html#Titanium-Cloud-KeyValues-method-increment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Cloud.KeyValues-method-increment' class='name expandable'>increment</a>( <span class='pre'>parameters, callback</span> ) : Object</div><div class='description'><div class='short'>Increment the value by the given value. ...</div><div class='long'><p>Increment the value by the given value.</p>\n\n\n<p>@description <p>Requires user login. </p></p>\n\n<p>See <a href=\"http://cloud.appcelerator.com/docs/api/v1/keyvalues/incrby\">Key-Values: Increment a Key-Value</a>\nfor the request parameters supported by this method.</p>\n\n\n<p>Not allowed on keyvalues with binary data.</p>\n\n\n<p>Data is returned in the <code>keyvalues</code> property of the parameter passed to the callback.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;CloudKeyValuesResponse&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Cloud.KeyValues'>Titanium.Cloud.KeyValues</span><br/><a href='source/titanium.html#Titanium-Cloud-KeyValues-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Cloud.KeyValues-method-remove' class='name expandable'>remove</a>( <span class='pre'>parameters, callback</span> ) : Object</div><div class='description'><div class='short'>Delete a value. ...</div><div class='long'><p>Delete a value.</p>\n\n\n<p>@description <p>Requires user login. </p></p>\n\n<p>See <a href=\"http://cloud.appcelerator.com/docs/api/v1/keyvalues/delete\">Key-Values: Delete a Key-Value</a>\nfor the request parameters supported by this method.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;CloudKeyValuesResponse&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Cloud.KeyValues'>Titanium.Cloud.KeyValues</span><br/><a href='source/titanium.html#Titanium-Cloud-KeyValues-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Cloud.KeyValues-method-set' class='name expandable'>set</a>( <span class='pre'>parameters, callback</span> ) : Object</div><div class='description'><div class='short'>Sets a string or binary value referenced by the key name. ...</div><div class='long'><p>Sets a string or binary value referenced by the key name.</p>\n\n\n<p>@description <p>Requires user login. </p></p>\n\n<p>See <a href=\"http://cloud.appcelerator.com/docs/api/v1/keyvalues/set\">Key-Value Storage: Set a string or binary value</a>\nfor the request parameters supported by this method.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;CloudKeyValuesResponse&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-setBubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> ) : Object</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void\n@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n</div></li></ul></div></div></div></div></div></div></div>"});