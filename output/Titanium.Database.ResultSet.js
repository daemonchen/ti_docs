Ext.data.JsonP.Titanium_Database_ResultSet({"tagname":"class","name":"Titanium.Database.ResultSet","extends":"Titanium.Proxy","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Titanium.Database.ResultSet","members":{"cfg":[],"property":[{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{},"id":"property-bubbleParent"},{"name":"fieldCount","tagname":"property","owner":"Titanium.Database.ResultSet","meta":{"readonly":true},"id":"property-fieldCount"},{"name":"rowCount","tagname":"property","owner":"Titanium.Database.ResultSet","meta":{"readonly":true},"id":"property-rowCount"},{"name":"validRow","tagname":"property","owner":"Titanium.Database.ResultSet","meta":{"readonly":true},"id":"property-validRow"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-applyProperties"},{"name":"close","tagname":"method","owner":"Titanium.Database.ResultSet","meta":{},"id":"method-close"},{"name":"field","tagname":"method","owner":"Titanium.Database.ResultSet","meta":{},"id":"method-field"},{"name":"fieldByName","tagname":"method","owner":"Titanium.Database.ResultSet","meta":{},"id":"method-fieldByName"},{"name":"fieldCount","tagname":"method","owner":"Titanium.Database.ResultSet","meta":{},"id":"method-fieldCount"},{"name":"fieldName","tagname":"method","owner":"Titanium.Database.ResultSet","meta":{},"id":"method-fieldName"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-getBubbleParent"},{"name":"getFieldCount","tagname":"method","owner":"Titanium.Database.ResultSet","meta":{},"id":"method-getFieldCount"},{"name":"getFieldName","tagname":"method","owner":"Titanium.Database.ResultSet","meta":{},"id":"method-getFieldName"},{"name":"getRowCount","tagname":"method","owner":"Titanium.Database.ResultSet","meta":{},"id":"method-getRowCount"},{"name":"getValidRow","tagname":"method","owner":"Titanium.Database.ResultSet","meta":{},"id":"method-getValidRow"},{"name":"isValidRow","tagname":"method","owner":"Titanium.Database.ResultSet","meta":{},"id":"method-isValidRow"},{"name":"next","tagname":"method","owner":"Titanium.Database.ResultSet","meta":{},"id":"method-next"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-setBubbleParent"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":23612,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-Database-ResultSet"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a><div class='subclass '><strong>Titanium.Database.ResultSet</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/titanium.html#Titanium-Database-ResultSet' target='_blank'>titanium.js</a></div></pre><div class='doc-contents'><p>@typestr Object of <a href=\"#!/api/Titanium.Database\" rel=\"Titanium.Database\" class=\"docClass\">Titanium.Database</a>\n@platform android 0.1\n@platform iphone 0.1\n@platform ipad 0.1 <p>The ResultSet instance returned by <a href=\"#!/api/Titanium.Database.DB-method-execute\" rel=\"Titanium.Database.DB-method-execute\" class=\"docClass\">Titanium.Database.DB.execute</a>.</p>\n@description <p>A result set represents the results returned by a database query.</p></p>\n\n<p>The <a href=\"#!/api/Titanium.Database.ResultSet-property-rowCount\" rel=\"Titanium.Database.ResultSet-property-rowCount\" class=\"docClass\">rowCount</a> property identifies the number of\nrows in the result set. The <code>ResultSet</code> object maintains an internal record of the \ncurrent row. As shown in the example, you can use the \n<a href=\"#!/api/Titanium.Database.ResultSet-method-next\" rel=\"Titanium.Database.ResultSet-method-next\" class=\"docClass\">next</a> method to iterate through the rows in the set.</p>\n\n\n<p>Use the <a href=\"#!/api/Titanium.Database.ResultSet-method-field\" rel=\"Titanium.Database.ResultSet-method-field\" class=\"docClass\">field</a> or\n<a href=\"#!/api/Titanium.Database.ResultSet-method-fieldByName\" rel=\"Titanium.Database.ResultSet-method-fieldByName\" class=\"docClass\">fieldByName</a> methods to query the fields for\nthe current row.</p>\n\n\n<h4>Platform Implementation Notes</h4>\n\n\n<p>Note that <code>fieldCount</code> is exposed as a <em>method</em> on iOS, but as a <em>property</em> on\nAndroid. This is a known parity issue\n(<a href=\"https://jira.appcelerator.org/browse/TIMOB-2945\">TIMOB-2945</a>).</p>\n\n\n<h3>Example</h3>\n\n\n<h4>Using ResultSet</h4>\n\n\n<p><p>The following code will create a database and execute SQL statements that will create a \ntable, insert data into it, query the table and iterate through the returned\n<code>ResultSet</code>.</p></p>\n\n\n<pre>var db = Ti.Database.open('mydb1Installed');\ndb.execute('CREATE TABLE IF NOT EXISTS people (name TEXT, phone_number TEXT, city TEXT)');\ndb.execute('DELETE FROM people');\n\nvar thisName = 'Arthur';\nvar thisPhoneNo = '1-617-000-0000';\nvar thisCity = 'Mountain View';\ndb.execute('INSERT INTO people (name, phone_number, city) VALUES (?, ?, ?)', thisName, thisPhoneNo, thisCity);\n\nvar personArray = ['Paul','020 7000 0000', 'London'];\ndb.execute('INSERT INTO people (name, phone_number, city) VALUES (?, ?, ?)', personArray);\n\nvar rows = db.execute('SELECT rowid,name,phone_number,city FROM people');\ndb.close();\n\nTi.API.info('Row count: ' + rows.rowCount);\nvar fieldCount;\n// fieldCount is a property on Android.\nif (Ti.Platform.name === 'android') {\n    fieldCount = rows.fieldCount;\n} else {\n    fieldCount = rows.fieldCount();\n}\nTi.API.info('Field count: ' + fieldCount);\n\nwhile (rows.isValidRow()){\n  Ti.API.info('Person ---&gt; ROWID: ' + rows.fieldByName('rowid') + ', name:' + rows.field(1) + ', phone_number: ' + rows.fieldByName('phone_number') + ', city: ' + rows.field(3));\n  rows.next();\n}\nrows.close();\n</pre>\n\n\n<p><p>Note that the above <code>SELECT</code> query contains the <a href=\"http://www.sqlite.org/lang_createtable.html#rowid\">rowid</a>\nfield, which contains an SQLite-specific unique identifier for each row.</p></p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bubbleParent' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-property-bubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0\n\nIndicates if the proxy will bubble an event to its par...</div><div class='long'><p>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n\n<p>Indicates if the proxy will bubble an event to its parent.</p>\n\n\n<p>@description <p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p></p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-fieldCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-property-fieldCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-property-fieldCount' class='name not-expandable'>fieldCount</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>@platform android 0.1</p>\n\n<p>The number of columns in this result set.</p>\n\n</div><div class='long'><p>@platform android 0.1</p>\n\n<p>The number of columns in this result set.</p>\n\n</div></div></div><div id='property-rowCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-property-rowCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-property-rowCount' class='name not-expandable'>rowCount</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The number of rows in this result set.</p>\n\n</div><div class='long'><p>The number of rows in this result set.</p>\n\n</div></div></div><div id='property-validRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-property-validRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-property-validRow' class='name not-expandable'>validRow</a><span> : Boolean</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>@platform iphone 0.1\n@platform ipad 0.1</p>\n\n<p>Indicates whether the current row is valid.</p>\n\n</div><div class='long'><p>@platform iphone 0.1\n@platform ipad 0.1</p>\n\n<p>Indicates whether the current row is valid.</p>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-addEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> ) : Object</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-applyProperties' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> ) : Object</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n\n<p>@description <p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void\n@platform android 3.0\n@platform iphone 3.0\n@platform ipad 3.0\n@platform mobileweb 3.0</p>\n</div></li></ul></div></div></div><div id='method-close' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-method-close' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-method-close' class='name expandable'>close</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Closes this result set and release resources. ...</div><div class='long'><p>Closes this result set and release resources. Once closed, the result set must no longer \nbe used.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-field' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-method-field' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-method-field' class='name expandable'>field</a>( <span class='pre'>index, [type]</span> ) : String/Number/<a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a></div><div class='description'><div class='short'>Retrieves the value for the specified field in the current row, \nand casts it to the specified type (String, Integer,...</div><div class='long'><p>Retrieves the value for the specified field in the current row, \nand casts it to the specified type (String, Integer, Float or Double.)</p>\n\n\n<p>@description <p>All of the numeric types (Integer, Float or Double) are returned as JavaScript Number objects.<br />\n</p></p>\n\n<p>If no <code>type</code> parameter is specified, the returned data type depends on the data in the column.<br />\n</p>\n\n\n<ul>\n<li>If the data in the column is TEXT, the data is returned as a String.</li>\n<li>If the data in the column is any kind of number, the data is returned as a Number.</li>\n<li>If the data in the column is a BLOB, the data is returned as a <a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a> object.<br />\n</li>\n</ul>\n\n\n<p>When a <code>type</code> is specified and the data cannot be converted to the specified type, an \nexception is thrown.<br />\n</p>\n\n\n<p>Returns null if the value in the table is NULL.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>A zero-based column index.</p>\n\n</div></li><li><span class='pre'>type</span> : Number (optional)<div class='sub-desc'><p>One of (<a href=\"#!/api/Titanium.Database-property-FIELD_TYPE_STRING\" rel=\"Titanium.Database-property-FIELD_TYPE_STRING\" class=\"docClass\">Titanium.Database.FIELD_TYPE_STRING</a> | <a href=\"#!/api/Titanium.Database-property-FIELD_TYPE_INT\" rel=\"Titanium.Database-property-FIELD_TYPE_INT\" class=\"docClass\">Titanium.Database.FIELD_TYPE_INT</a> | \n<a href=\"#!/api/Titanium.Database-property-FIELD_TYPE_FLOAT\" rel=\"Titanium.Database-property-FIELD_TYPE_FLOAT\" class=\"docClass\">Titanium.Database.FIELD_TYPE_FLOAT</a> | <a href=\"#!/api/Titanium.Database-property-FIELD_TYPE_DOUBLE\" rel=\"Titanium.Database-property-FIELD_TYPE_DOUBLE\" class=\"docClass\">Titanium.Database.FIELD_TYPE_DOUBLE</a>)</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String/Number/<a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fieldByName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-method-fieldByName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-method-fieldByName' class='name expandable'>fieldByName</a>( <span class='pre'>name, [type]</span> ) : String/Number/<a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a></div><div class='description'><div class='short'>Retrieves the value for the specified field in the current row, \nand casts it to the specified type (String, Integer,...</div><div class='long'><p>Retrieves the value for the specified field in the current row, \nand casts it to the specified type (String, Integer, Float or Double.)</p>\n\n\n<p>@description <p>All of the numeric types (Integer, Float or Double) are returned as JavaScript Number objects.<br />\n</p></p>\n\n<p>If no <code>type</code> parameter is specified, the returned data type depends on the data in the column.<br />\n</p>\n\n\n<ul>\n<li>If the data in the column is TEXT, the data is returned as a String.</li>\n<li>If the data in the column is any kind of number, the data is returned as a Number.</li>\n<li>If the data in the column is a BLOB, the data is returned as a <a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a> object.<br />\n</li>\n</ul>\n\n\n<p>When a <code>type</code> is specified and the data cannot be converted to the specified type, an \nexception is thrown.<br />\n</p>\n\n\n<p>Returns null if the value in the table is NULL.      <br />\n</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>A column name or alias used in the SQL query.</p>\n\n</div></li><li><span class='pre'>type</span> : Number (optional)<div class='sub-desc'><p>One of (<a href=\"#!/api/Titanium.Database-property-FIELD_TYPE_STRING\" rel=\"Titanium.Database-property-FIELD_TYPE_STRING\" class=\"docClass\">Titanium.Database.FIELD_TYPE_STRING</a> | <a href=\"#!/api/Titanium.Database-property-FIELD_TYPE_INT\" rel=\"Titanium.Database-property-FIELD_TYPE_INT\" class=\"docClass\">Titanium.Database.FIELD_TYPE_INT</a> | \n<a href=\"#!/api/Titanium.Database-property-FIELD_TYPE_FLOAT\" rel=\"Titanium.Database-property-FIELD_TYPE_FLOAT\" class=\"docClass\">Titanium.Database.FIELD_TYPE_FLOAT</a> | <a href=\"#!/api/Titanium.Database-property-FIELD_TYPE_DOUBLE\" rel=\"Titanium.Database-property-FIELD_TYPE_DOUBLE\" class=\"docClass\">Titanium.Database.FIELD_TYPE_DOUBLE</a>)</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String/Number/<a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fieldCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-method-fieldCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-method-fieldCount' class='name expandable'>fieldCount</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Returns the number of columns in this result set. ...</div><div class='long'><p>Returns the number of columns in this result set.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>@platform iphone 0.1\n@platform ipad 0.1</p>\n</div></li></ul></div></div></div><div id='method-fieldName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-method-fieldName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-method-fieldName' class='name expandable'>fieldName</a>( <span class='pre'>index</span> ) : String</div><div class='description'><div class='short'>Returns the field name for the specified field index. ...</div><div class='long'><p>Returns the field name for the specified field index.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>A zero-based column index for the field.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> ) : Object</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-getBubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n</div></li></ul></div></div></div><div id='method-getFieldCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-method-getFieldCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-method-getFieldCount' class='name expandable'>getFieldCount</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the fieldCount property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Database.ResultSet-method-fieldCount\" rel=\"Titanium.Database.ResultSet-method-fieldCount\" class=\"docClass\">fieldCount</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>@platform android 0.1</p>\n</div></li></ul></div></div></div><div id='method-getFieldName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-method-getFieldName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-method-getFieldName' class='name expandable'>getFieldName</a>( <span class='pre'>index</span> ) : String</div><div class='description'><div class='short'>Returns the field name for the specified field index. ...</div><div class='long'><p>Returns the field name for the specified field index.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>A zero-based column index for the field.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>@platform android 0.1</p>\n</div></li></ul></div></div></div><div id='method-getRowCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-method-getRowCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-method-getRowCount' class='name expandable'>getRowCount</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the rowCount property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Database.ResultSet-property-rowCount\" rel=\"Titanium.Database.ResultSet-property-rowCount\" class=\"docClass\">rowCount</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getValidRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-method-getValidRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-method-getValidRow' class='name expandable'>getValidRow</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the validRow property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Database.ResultSet-property-validRow\" rel=\"Titanium.Database.ResultSet-property-validRow\" class=\"docClass\">validRow</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>@platform iphone 0.1\n@platform ipad 0.1</p>\n</div></li></ul></div></div></div><div id='method-isValidRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-method-isValidRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-method-isValidRow' class='name expandable'>isValidRow</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns whether the current row is valid. ...</div><div class='long'><p>Returns whether the current row is valid.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-next' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Database.ResultSet'>Titanium.Database.ResultSet</span><br/><a href='source/titanium.html#Titanium-Database-ResultSet-method-next' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Database.ResultSet-method-next' class='name expandable'>next</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Advances to the next row in the result set and returns true if one exists, \nor false otherwise. ...</div><div class='long'><p>Advances to the next row in the result set and returns <code>true</code> if one exists, \nor <code>false</code> otherwise.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-removeEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> ) : Object</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n\n<p>@description <p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove. </p></p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-setBubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> ) : Object</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void\n@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n</div></li></ul></div></div></div></div></div></div></div>"});