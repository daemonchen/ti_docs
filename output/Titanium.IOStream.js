Ext.data.JsonP.Titanium_IOStream({"tagname":"class","name":"Titanium.IOStream","extends":"Titanium.Proxy","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Titanium.IOStream","members":{"cfg":[],"property":[{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{},"id":"property-bubbleParent"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-applyProperties"},{"name":"close","tagname":"method","owner":"Titanium.IOStream","meta":{},"id":"method-close"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-getBubbleParent"},{"name":"isReadable","tagname":"method","owner":"Titanium.IOStream","meta":{},"id":"method-isReadable"},{"name":"isWriteable","tagname":"method","owner":"Titanium.IOStream","meta":{},"id":"method-isWriteable"},{"name":"read","tagname":"method","owner":"Titanium.IOStream","meta":{},"id":"method-read"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-setBubbleParent"},{"name":"write","tagname":"method","owner":"Titanium.IOStream","meta":{},"id":"method-write"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":18953,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-IOStream"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy"],"subclasses":["Titanium.BlobStream","Titanium.BufferStream","Titanium.Filesystem.FileStream","Titanium.Network.Socket.TCP"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a><div class='subclass '><strong>Titanium.IOStream</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Titanium.BlobStream' rel='Titanium.BlobStream' class='docClass'>Titanium.BlobStream</a></div><div class='dependency'><a href='#!/api/Titanium.BufferStream' rel='Titanium.BufferStream' class='docClass'>Titanium.BufferStream</a></div><div class='dependency'><a href='#!/api/Titanium.Filesystem.FileStream' rel='Titanium.Filesystem.FileStream' class='docClass'>Titanium.Filesystem.FileStream</a></div><div class='dependency'><a href='#!/api/Titanium.Network.Socket.TCP' rel='Titanium.Network.Socket.TCP' class='docClass'>Titanium.Network.Socket.TCP</a></div><h4>Files</h4><div class='dependency'><a href='source/titanium.html#Titanium-IOStream' target='_blank'>titanium.js</a></div></pre><div class='doc-contents'><p>@typestr Object of Titanium\n@platform android 1.7\n@platform iphone 1.7\n@platform ipad 1.7\n@platform mobileweb 1.8 <p>IOStream is the interface that all stream types implement.</p>\n@description <p>See the <a href=\"#!/api/Titanium.Stream\" rel=\"Titanium.Stream\" class=\"docClass\">Titanium.Stream</a> module for related utility methods that support asynchronous\nI/O.</p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Write Data to a Stream</h4>\n\n\n<p><p>This example demonstrates writing data to a stream.</p></p>\n\n\n<pre>var outBuffer = Ti.createBuffer({data: \"write me\"});\nvar outStream = // stream object could be socket, file, buffer or blob\n\nvar bytesWritten = outStream.write(outBuffer);  // writes entire buffer to stream\nTi.API.info(\"Bytes written:\" + bytesWritten);  // should be 8\n\nbytesWritten = outStream.write(outBuffer, 2, 5);  // only writes \"ite m\" to stream\nTi.API.info(\"Bytes written:\" + bytesWritten);  // should be 5</pre>\n\n\n<h4>Read Data From a Stream</h4>\n\n\n<p><p>This shows a simple example of reading data from a stream, one buffer full at a\ntime. </p></p>\n\n\n<pre>var size = 0;\n// read data one buffer full at a time\nwhile ((size = instream.read(buffer)) &gt; -1) {\n    // do something with the data here ...\n    Ti.API.info(\"Read \" + size + \" bytes.\");\n}\n</pre>\n\n\n<h4>Read Data With Offset and Length</h4>\n\n\n<p><p>This example shows how to read data from a stream into a buffer. We assume that\nthe <code>inStream</code> variable holds a previously initialized stream that contains the \nstring, \"World Titanium\".</p></p>\n\n\n<pre>var inBuffer = Ti.createBuffer({ value: \"Hello [           ]\" });\n\n// Read the first 6 bytes from the stream to the buffer, starting at position 10.\nvar bytesRead = inStream.read(inBuffer, 10, 6);  \n\nTi.API.info(\"Bytes read: \" + bytesRead);\nTi.API.info(inBuffer.toString());\n\n// Read the next 8  bytes from the stream to the buffer, starting at position 8.\nbytesRead = inStream.read(inBuffer, 8, 8);\n\nTi.API.info(\"Bytes read: \" + bytesRead);\nTi.API.info(inBuffer.toString());\n</pre>\n\n\n<p><p>The second <code>read</code> overwrites the data from the first <code>read</code>, so the output looks\nlike this:</p></p>\n\n\n<pre>[INFO] Bytes read: 6\n[INFO] Hello [   World   ]\n[INFO] Bytes read: 8\n[INFO] Hello [ Titanium  ]</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bubbleParent' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-property-bubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0\n\nIndicates if the proxy will bubble an event to its par...</div><div class='long'><p>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n\n<p>Indicates if the proxy will bubble an event to its parent.</p>\n\n\n<p>@description <p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p></p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-addEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> ) : Object</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-applyProperties' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> ) : Object</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n\n<p>@description <p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void\n@platform android 3.0\n@platform iphone 3.0\n@platform ipad 3.0\n@platform mobileweb 3.0</p>\n</div></li></ul></div></div></div><div id='method-close' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.IOStream'>Titanium.IOStream</span><br/><a href='source/titanium.html#Titanium-IOStream-method-close' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.IOStream-method-close' class='name expandable'>close</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Closes this stream. ...</div><div class='long'><p>Closes this stream.</p>\n\n\n<p>@description <p>Throws an exception on error.</p></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> ) : Object</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-getBubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n</div></li></ul></div></div></div><div id='method-isReadable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.IOStream'>Titanium.IOStream</span><br/><a href='source/titanium.html#Titanium-IOStream-method-isReadable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.IOStream-method-isReadable' class='name expandable'>isReadable</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Indicates whether this stream is readable. ...</div><div class='long'><p>Indicates whether this stream is readable.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if stream is readable, false otherwise.</p>\n\n</div></li></ul></div></div></div><div id='method-isWriteable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.IOStream'>Titanium.IOStream</span><br/><a href='source/titanium.html#Titanium-IOStream-method-isWriteable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.IOStream-method-isWriteable' class='name expandable'>isWriteable</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Indicates whether this stream is writeable. ...</div><div class='long'><p>Indicates whether this stream is writeable.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if stream is writeable, false otherwise.</p>\n\n</div></li></ul></div></div></div><div id='method-read' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.IOStream'>Titanium.IOStream</span><br/><a href='source/titanium.html#Titanium-IOStream-method-read' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.IOStream-method-read' class='name expandable'>read</a>( <span class='pre'>buffer, [offset], [length]</span> ) : Number</div><div class='description'><div class='short'>Reads data from this stream into a buffer. ...</div><div class='long'><p>Reads data from this stream into a buffer.</p>\n\n\n<p>@description <p>If <code>offset</code> and <code>length</code> are specified, data is written into the buffer starting at\nposition <code>offset</code>. Data is read from this stream until one of the following occurs:</p></p>\n\n<ul>\n<li>the end of this stream is reached</li>\n<li>the end of the buffer is reached</li>\n<li>a total of <code>length</code> bytes have been read from the stream</li>\n</ul>\n\n\n<p>If <code>offset</code> and <code>length</code> are omitted, data is written starting at the beginning\nof the buffer.</p>\n\n\n<p>Returns the number of bytes read, or -1 if the end of stream was reached before\nany data was read.</p>\n\n\n<p>Throws an exception on error. For example, if the <code>offset</code> value is past\nthe last byte of <code>buffer</code>. </p>\n\n\n<p>This method is synchronous. To perform an asynchronous read on an <code>IOStream</code>, use\n<a href=\"#!/api/Titanium.Stream-method-read\" rel=\"Titanium.Stream-method-read\" class=\"docClass\">Titanium.Stream.read</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>buffer</span> : <a href=\"#!/api/Titanium.Buffer\" rel=\"Titanium.Buffer\" class=\"docClass\">Titanium.Buffer</a><div class='sub-desc'><p>Buffer to read stream data into.</p>\n\n</div></li><li><span class='pre'>offset</span> : Number (optional)<div class='sub-desc'><p>Offset into the buffer to start writing stream data.\nIf specified, <code>length</code> must also be specified.</p>\n\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>length</span> : Number (optional)<div class='sub-desc'><p>Maximum number of bytes to read.\nIf specified, <code>offset</code> must also be specified.</p>\n\n<p>Defaults to: <code>Length of the supplied buffer.</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Number of bytes read.</p>\n\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-removeEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> ) : Object</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n\n<p>@description <p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove. </p></p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-setBubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> ) : Object</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void\n@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n</div></li></ul></div></div></div><div id='method-write' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.IOStream'>Titanium.IOStream</span><br/><a href='source/titanium.html#Titanium-IOStream-method-write' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.IOStream-method-write' class='name expandable'>write</a>( <span class='pre'>buffer, [offset], [length]</span> ) : Number</div><div class='description'><div class='short'>Writes data from a buffer to this stream. ...</div><div class='long'><p>Writes data from a buffer to this stream.</p>\n\n\n<p>@description <p>If <code>offset</code> and <code>length</code> are specified, data is read from the buffer starting at\n<code>offset</code>. Bytes are read from the buffer and written to the stream until:</p></p>\n\n<ul>\n<li>the end of the buffer is reached</li>\n<li><code>length</code> bytes have been written</li>\n<li>the stream returns an error</li>\n</ul>\n\n\n<p>If <code>offset</code> and <code>length</code> are omitted, all of the data in the buffer is written to\nthis stream.</p>\n\n\n<p>Returns the number of bytes actually written.</p>\n\n\n<p>Throws an exception if an error is encountered.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>buffer</span> : <a href=\"#!/api/Titanium.Buffer\" rel=\"Titanium.Buffer\" class=\"docClass\">Titanium.Buffer</a><div class='sub-desc'><p>Buffer to write to this stream.</p>\n\n</div></li><li><span class='pre'>offset</span> : Number (optional)<div class='sub-desc'><p>Offset in the buffer of the first byte to write to the stream.\nIf specified, <code>length</code> must also be specified.</p>\n\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>length</span> : Number (optional)<div class='sub-desc'><p>Maximum number of bytes to write to the stream.\nIf specified, <code>offset</code> must also be specified.</p>\n\n<p>Defaults to: <code>Length of the supplied buffer.</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Number of bytes written.</p>\n\n</div></li></ul></div></div></div></div></div></div></div>"});