Ext.data.JsonP.Titanium_Cloud_Files({"tagname":"class","name":"Titanium.Cloud.Files","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Titanium.Cloud.Files","members":{"cfg":[],"property":[{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{},"id":"property-bubbleParent"}],"method":[{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-applyProperties"},{"name":"create","tagname":"method","owner":"Titanium.Cloud.Files","meta":{},"id":"method-create"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-getBubbleParent"},{"name":"query","tagname":"method","owner":"Titanium.Cloud.Files","meta":{},"id":"method-query"},{"name":"remove","tagname":"method","owner":"Titanium.Cloud.Files","meta":{},"id":"method-remove"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-setBubbleParent"},{"name":"show","tagname":"method","owner":"Titanium.Cloud.Files","meta":{},"id":"method-show"},{"name":"update","tagname":"method","owner":"Titanium.Cloud.Files","meta":{},"id":"method-update"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":19644,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-Cloud-Files"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a><div class='subclass '><a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a><div class='subclass '><strong>Titanium.Cloud.Files</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/titanium.html#Titanium-Cloud-Files' target='_blank'>titanium.js</a></div></pre><div class='doc-contents'><p>@typestr Submodule of <a href=\"#!/api/Titanium.Cloud\" rel=\"Titanium.Cloud\" class=\"docClass\">Titanium.Cloud</a> <p>Provides methods for accessing ACS files.</p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Create File</h4>\n\n\n<p><p>This example creates a new file and checks the response.</p></p>\n\n\n<pre>Cloud.Files.create({\n    name: 'test.dat',\n    file: <a href=\"#!/api/Titanium.Filesystem-method-getFile\" rel=\"Titanium.Filesystem-method-getFile\" class=\"docClass\">Titanium.Filesystem.getFile</a>('test.dat')\n}, function (e) {\n    if (e.success) {\n        var file = e.files[0];\n        alert('Success:\\\\n' +\n            'id: ' + file.id + '\\\\n' +\n            'name: ' + file.name + '\\\\n' +\n            'updated_at: ' + file.updated_at);\n    } else {\n        alert('Error:\\\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});</pre>\n\n\n<h4>Show a File</h4>\n\n\n<p><p>This example retrieves information about a file and checks the response.</p></p>\n\n\n<pre>Cloud.Files.show({\n    file_id: savedFileId\n}, function (e) {\n    if (e.success) {\n        var file = e.files[0];\n        alert('Success:\\\\n' +\n            'id: ' + file.id + '\\\\n' +\n            'name: ' + file.name + '\\\\n' +\n            'updated_at: ' + file.updated_at);\n    } else {\n        alert('Error:\\\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});</pre>\n\n\n<h4>Query for Files</h4>\n\n\n<p><p>This example requests a list of files and checks the response.</p></p>\n\n\n<pre>Cloud.Files.query({\n    page: 1,\n    per_page: 20\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\\\n' +\n            'Count: ' + e.files.length);\n        for (var i = 0; i &lt; e.files.length; i++) {\n            var file = e.files[i];\n            alert('id: ' + file.id + '\\\\n' +\n                'name: ' + file.name + '\\\\n' +\n                'updated_at: ' + file.updated_at);\n        }\n    } else {\n        alert('Error:\\\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});</pre>\n\n\n<h4>Update a File</h4>\n\n\n<p><p>This example updates a file and checks the response.</p></p>\n\n\n<pre>Cloud.Files.update({\n    file_id: savedFileId,\n    name: 'Notice'\n}, function (e) {\n    if (e.success) {\n        var file = e.files[0];\n        alert('Success:\\\\n' +\n            'id: ' + file.id + '\\\\n' +\n            'name: ' + file.name + '\\\\n' +\n            'updated_at: ' + file.updated_at);\n    } else {\n        alert('Error:\\\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});</pre>\n\n\n<h4>Remove a File</h4>\n\n\n<p><p>This example deletes a file and checks the response.</p></p>\n\n\n<pre>Cloud.Files.remove({\n    file_id: savedFileId\n}, function (e) {\n    if (e.success) {\n        alert('Removed');\n    } else {\n        alert('Error:\\\\n' +\n            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n    }\n});</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bubbleParent' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-property-bubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0\n\nIndicates if the proxy will bubble an event to its par...</div><div class='long'><p>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n\n<p>Indicates if the proxy will bubble an event to its parent.</p>\n\n\n<p>@description <p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p></p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyProperties' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-applyProperties' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> ) : Object</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n\n<p>@description <p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void\n@platform android 3.0\n@platform iphone 3.0\n@platform ipad 3.0\n@platform mobileweb 3.0</p>\n</div></li></ul></div></div></div><div id='method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Cloud.Files'>Titanium.Cloud.Files</span><br/><a href='source/titanium.html#Titanium-Cloud-Files-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Cloud.Files-method-create' class='name expandable'>create</a>( <span class='pre'>parameters, callback</span> ) : Object</div><div class='description'><div class='short'>Create a file. ...</div><div class='long'><p>Create a file.</p>\n\n\n<p>@description <p>Requires user login. </p></p>\n\n<p>See <a href=\"http://cloud.appcelerator.com/docs/api/v1/files/create\">Files: Create a File</a>\nfor the request parameters supported by this method.</p>\n\n\n<p>Data is returned in the <code>files</code> property of the parameter passed to the callback.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;CloudFilesResponse&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-getBubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n</div></li></ul></div></div></div><div id='method-query' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Cloud.Files'>Titanium.Cloud.Files</span><br/><a href='source/titanium.html#Titanium-Cloud-Files-method-query' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Cloud.Files-method-query' class='name expandable'>query</a>( <span class='pre'>[parameters], callback</span> ) : Object</div><div class='description'><div class='short'>Retrieve a list of files with sorting and pagination. ...</div><div class='long'><p>Retrieve a list of files with sorting and pagination.</p>\n\n\n<p>@description <p>See <a href=\"http://cloud.appcelerator.com/docs/api/v1/files/query\">Files: Custom Query Files</a>\nfor the request parameters supported by this method.</p></p>\n\n<p>Data is returned in the <code>files</code> property of the parameter passed to the callback.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a> (optional)<div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;CloudFilesResponse&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Cloud.Files'>Titanium.Cloud.Files</span><br/><a href='source/titanium.html#Titanium-Cloud-Files-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Cloud.Files-method-remove' class='name expandable'>remove</a>( <span class='pre'>parameters, callback</span> ) : Object</div><div class='description'><div class='short'>Delete a file. ...</div><div class='long'><p>Delete a file.</p>\n\n\n<p>@description <p>Requires user login. </p></p>\n\n<p>See <a href=\"http://cloud.appcelerator.com/docs/api/v1/files/delete\">Files: Delete a File</a>\nfor the request parameters supported by this method.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;CloudFilesResponse&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-setBubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> ) : Object</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void\n@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Cloud.Files'>Titanium.Cloud.Files</span><br/><a href='source/titanium.html#Titanium-Cloud-Files-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Cloud.Files-method-show' class='name expandable'>show</a>( <span class='pre'>parameters, callback</span> ) : Object</div><div class='description'><div class='short'>Retrieve information about a file. ...</div><div class='long'><p>Retrieve information about a file.</p>\n\n\n<p>@description <p>See <a href=\"http://cloud.appcelerator.com/docs/api/v1/files/show\">Files: Show File Info</a>\nfor the request parameters supported by this method.</p></p>\n\n<p>Data is returned in the <code>files</code> property of the parameter passed to the callback.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;CloudFilesResponse&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Cloud.Files'>Titanium.Cloud.Files</span><br/><a href='source/titanium.html#Titanium-Cloud-Files-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Cloud.Files-method-update' class='name expandable'>update</a>( <span class='pre'>parameters, callback</span> ) : Object</div><div class='description'><div class='short'>Update the information for a file. ...</div><div class='long'><p>Update the information for a file.</p>\n\n\n<p>@description <p>Requires user login. </p></p>\n\n<p>See <a href=\"http://cloud.appcelerator.com/docs/api/v1/files/update\">Files: Update a File</a>\nfor the request parameters supported by this method.</p>\n\n\n<p>Data is returned in the <code>files</code> property of the parameter passed to the callback.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>Parameters to send in the request.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;CloudFilesResponse&gt;<div class='sub-desc'><p>Callback function to execute when the method completes.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div></div></div></div></div>"});