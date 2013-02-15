Ext.data.JsonP.Titanium_Map({"tagname":"class","name":"Titanium.Map","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Titanium.Map","members":{"cfg":[],"property":[{"name":"ANNOTATION_DRAG_STATE_CANCEL","tagname":"property","owner":"Titanium.Map","meta":{"readonly":true},"id":"property-ANNOTATION_DRAG_STATE_CANCEL"},{"name":"ANNOTATION_DRAG_STATE_DRAG","tagname":"property","owner":"Titanium.Map","meta":{"readonly":true},"id":"property-ANNOTATION_DRAG_STATE_DRAG"},{"name":"ANNOTATION_DRAG_STATE_END","tagname":"property","owner":"Titanium.Map","meta":{"readonly":true},"id":"property-ANNOTATION_DRAG_STATE_END"},{"name":"ANNOTATION_DRAG_STATE_NONE","tagname":"property","owner":"Titanium.Map","meta":{"readonly":true},"id":"property-ANNOTATION_DRAG_STATE_NONE"},{"name":"ANNOTATION_DRAG_STATE_START","tagname":"property","owner":"Titanium.Map","meta":{"readonly":true},"id":"property-ANNOTATION_DRAG_STATE_START"},{"name":"ANNOTATION_GREEN","tagname":"property","owner":"Titanium.Map","meta":{"readonly":true},"id":"property-ANNOTATION_GREEN"},{"name":"ANNOTATION_PURPLE","tagname":"property","owner":"Titanium.Map","meta":{"readonly":true},"id":"property-ANNOTATION_PURPLE"},{"name":"ANNOTATION_RED","tagname":"property","owner":"Titanium.Map","meta":{"readonly":true},"id":"property-ANNOTATION_RED"},{"name":"HYBRID_TYPE","tagname":"property","owner":"Titanium.Map","meta":{"readonly":true},"id":"property-HYBRID_TYPE"},{"name":"SATELLITE_TYPE","tagname":"property","owner":"Titanium.Map","meta":{"readonly":true},"id":"property-SATELLITE_TYPE"},{"name":"STANDARD_TYPE","tagname":"property","owner":"Titanium.Map","meta":{"readonly":true},"id":"property-STANDARD_TYPE"},{"name":"TERRAIN_TYPE","tagname":"property","owner":"Titanium.Map","meta":{"readonly":true},"id":"property-TERRAIN_TYPE"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{},"id":"property-bubbleParent"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-applyProperties"},{"name":"createAnnotation","tagname":"method","owner":"Titanium.Map","meta":{},"id":"method-createAnnotation"},{"name":"createView","tagname":"method","owner":"Titanium.Map","meta":{},"id":"method-createView"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-getBubbleParent"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-setBubbleParent"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":59911,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-Map"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a><div class='subclass '><a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a><div class='subclass '><strong>Titanium.Map</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/titanium.html#Titanium-Map' target='_blank'>titanium.js</a></div></pre><div class='doc-contents'><p>@typestr Submodule of Titanium\n@platform android 0.8\n@platform iphone 0.8\n@platform ipad 0.8\n@platform mobileweb 1.8 <p>The top level Map module.  The Map module is used for creating in-application native maps.</p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Map Example</h4>\n\n\n<p><p>This is a basic map example that places a custom annotation on the map, and \nlistens for click events on the annotation. </p>\n<p>In this example, a custom property (<code>myid</code>) is added to the annotation object.\nWhile adding custom members to a Titanium object is not generally recommended,\nin this case it provides a mechanism for uniquely identifying an annotation. This\ncan be useful, for example, if the annotations are dynamically generated \nand it is not practical to identify them by title.</p></p>\n\n\n<pre>var win = <a href=\"#!/api/Titanium.UI-method-createWindow\" rel=\"Titanium.UI-method-createWindow\" class=\"docClass\">Titanium.UI.createWindow</a>();\n\nvar mountainView = <a href=\"#!/api/Titanium.Map-method-createAnnotation\" rel=\"Titanium.Map-method-createAnnotation\" class=\"docClass\">Titanium.Map.createAnnotation</a>({\n    latitude:37.390749,\n    longitude:-122.081651,\n    title:\"Appcelerator Headquarters\",\n    subtitle:'Mountain View, CA',\n    pincolor:<a href=\"#!/api/Titanium.Map\" rel=\"Titanium.Map\" class=\"docClass\">Titanium.Map</a>.ANNOTATION_RED,\n    animate:true,\n    leftButton: '../images/appcelerator_small.png',\n    myid:1 // Custom property to uniquely identify this annotation.\n});\n\nvar mapview = <a href=\"#!/api/Titanium.Map-method-createView\" rel=\"Titanium.Map-method-createView\" class=\"docClass\">Titanium.Map.createView</a>({\n    mapType: <a href=\"#!/api/Titanium.Map\" rel=\"Titanium.Map\" class=\"docClass\">Titanium.Map</a>.STANDARD_TYPE,\n    region: {latitude:33.74511, longitude:-84.38993, \n            latitudeDelta:0.01, longitudeDelta:0.01},\n    animate:true,\n    regionFit:true,\n    userLocation:true,\n    annotations:[mountainView]\n});\n\nwin.add(mapview);\n// Handle click events on any annotations on this map.\nmapview.addEventListener('click', function(evt) {\n\n    Ti.API.info(\"Annotation \" + evt.title + \" clicked, id: \" + evt.annotation.myid);\n\n    // Check for all of the possible names that clicksouce\n    // can report for the left button/view.\n    if (evt.clicksource == 'leftButton' || evt.clicksource == 'leftPane' ||\n        evt.clicksource == 'leftView') {\n        Ti.API.info(\"Annotation \" + evt.title + \", left button clicked.\");\n    }\n});\nwin.open();</pre>\n\n\n<h4>Alloy XML Markup</h4>\n\n\n<p><p>Previous example as an Alloy view.</p>\n<p>index.xml:</p></p>\n\n\n<pre>&lt;Alloy&gt;\n    &lt;Window id=\"win\"&gt;\n\n        &lt;!-- Note the ns attribute is used to change the default namespace. --&gt;\n        &lt;View id=\"mapview\" ns=\"Ti.Map\" onClick=\"doClick\"\n            animate=\"true\" regionFit=\"true\" userLocation=\"true\"\n            mapType=\"Ti.Map.STANDARD_TYPE\" &gt;\n\n            &lt;Annotation id=\"mountainView\"\n              latitude=\"37.390749\" longitude=\"-122.081651\"\n              title=\"Appcelerator Headquarters\" subtitle=\"Mountain View, CA\"\n              pincolor=\"<a href=\"#!/api/Titanium.Map\" rel=\"Titanium.Map\" class=\"docClass\">Titanium.Map</a>.ANNOTATION_RED\"\n              leftButton=\"/images/appcelerator_small.png\"\n              myid=\"1\"/&gt;\n\n            &lt;!-- Place other child views here, such as an ImageView to add an overlay. --&gt;\n\n        &lt;/View&gt;\n    &lt;/Window&gt;\n&lt;/Alloy&gt;\n</pre>\n\n\n<p><p>index.js:</p></p>\n\n\n<pre>function doClick(evt){\n    Ti.API.info(\"Annotation \" + evt.title + \" clicked, id: \" + evt.annotation.myid);\n\n    // Check for all of the possible names that clicksouce\n    // can report for the left button/view.\n    if (evt.clicksource == 'leftButton' || evt.clicksource == 'leftPane' ||\n        evt.clicksource == 'leftView') {\n        Ti.API.info(\"Annotation \" + evt.title + \", left button clicked.\");\n    }\n};\n\n// These parameters can also be defined in the TSS file.\n$.mapview.annotations = [$.mountainView];\n$.mapview.region = {latitude:37.390749, longitude:-122.081651, latitudeDelta:0.01, longitudeDelta:0.01};\n\n$.win.open</pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-ANNOTATION_DRAG_STATE_CANCEL' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-property-ANNOTATION_DRAG_STATE_CANCEL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-property-ANNOTATION_DRAG_STATE_CANCEL' class='name expandable'>ANNOTATION_DRAG_STATE_CANCEL</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>@platform iphone 2.1\n@platform ipad 2.1\n\nUsed in the pinchangedragstate event \nto indicate that the user canceled the...</div><div class='long'><p>@platform iphone 2.1\n@platform ipad 2.1</p>\n\n<p>Used in the <a href=\"#!/api/Titanium.Map.View-event-pinchangedragstate\" rel=\"Titanium.Map.View-event-pinchangedragstate\" class=\"docClass\">pinchangedragstate</a> event \nto indicate that the user canceled the drag action.</p>\n\n</div></div></div><div id='property-ANNOTATION_DRAG_STATE_DRAG' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-property-ANNOTATION_DRAG_STATE_DRAG' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-property-ANNOTATION_DRAG_STATE_DRAG' class='name expandable'>ANNOTATION_DRAG_STATE_DRAG</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>@platform iphone 2.1\n@platform ipad 2.1\n\nUsed in the pinchangedragstate event \nto indicate that the user moved the an...</div><div class='long'><p>@platform iphone 2.1\n@platform ipad 2.1</p>\n\n<p>Used in the <a href=\"#!/api/Titanium.Map.View-event-pinchangedragstate\" rel=\"Titanium.Map.View-event-pinchangedragstate\" class=\"docClass\">pinchangedragstate</a> event \nto indicate that the user moved the annotation.</p>\n\n</div></div></div><div id='property-ANNOTATION_DRAG_STATE_END' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-property-ANNOTATION_DRAG_STATE_END' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-property-ANNOTATION_DRAG_STATE_END' class='name expandable'>ANNOTATION_DRAG_STATE_END</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>@platform iphone 2.1\n@platform ipad 2.1\n\nUsed in the pinchangedragstate event \nto indicate that the user finished mov...</div><div class='long'><p>@platform iphone 2.1\n@platform ipad 2.1</p>\n\n<p>Used in the <a href=\"#!/api/Titanium.Map.View-event-pinchangedragstate\" rel=\"Titanium.Map.View-event-pinchangedragstate\" class=\"docClass\">pinchangedragstate</a> event \nto indicate that the user finished moving the annotation.</p>\n\n</div></div></div><div id='property-ANNOTATION_DRAG_STATE_NONE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-property-ANNOTATION_DRAG_STATE_NONE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-property-ANNOTATION_DRAG_STATE_NONE' class='name expandable'>ANNOTATION_DRAG_STATE_NONE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>@platform iphone 2.1\n@platform ipad 2.1\n\nUsed in the pinchangedragstate event \nto indicate that the annotation is not...</div><div class='long'><p>@platform iphone 2.1\n@platform ipad 2.1</p>\n\n<p>Used in the <a href=\"#!/api/Titanium.Map.View-event-pinchangedragstate\" rel=\"Titanium.Map.View-event-pinchangedragstate\" class=\"docClass\">pinchangedragstate</a> event \nto indicate that the annotation is not being dragged.</p>\n\n</div></div></div><div id='property-ANNOTATION_DRAG_STATE_START' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-property-ANNOTATION_DRAG_STATE_START' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-property-ANNOTATION_DRAG_STATE_START' class='name expandable'>ANNOTATION_DRAG_STATE_START</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>@platform iphone 2.1\n@platform ipad 2.1\n\nUsed in the pinchangedragstate event \nto indicate that the user started drag...</div><div class='long'><p>@platform iphone 2.1\n@platform ipad 2.1</p>\n\n<p>Used in the <a href=\"#!/api/Titanium.Map.View-event-pinchangedragstate\" rel=\"Titanium.Map.View-event-pinchangedragstate\" class=\"docClass\">pinchangedragstate</a> event \nto indicate that the user started dragging the annotation.</p>\n\n</div></div></div><div id='property-ANNOTATION_GREEN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-property-ANNOTATION_GREEN' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-property-ANNOTATION_GREEN' class='name not-expandable'>ANNOTATION_GREEN</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Color constant used to set a map annotation to green via the \n<a href=\"#!/api/Titanium.Map.Annotation-property-pincolor\" rel=\"Titanium.Map.Annotation-property-pincolor\" class=\"docClass\">Titanium.Map.Annotation.pincolor</a> property.</p>\n\n</div><div class='long'><p>Color constant used to set a map annotation to green via the \n<a href=\"#!/api/Titanium.Map.Annotation-property-pincolor\" rel=\"Titanium.Map.Annotation-property-pincolor\" class=\"docClass\">Titanium.Map.Annotation.pincolor</a> property.</p>\n\n</div></div></div><div id='property-ANNOTATION_PURPLE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-property-ANNOTATION_PURPLE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-property-ANNOTATION_PURPLE' class='name not-expandable'>ANNOTATION_PURPLE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Color constant used to set a map annotation to purple via the \n<a href=\"#!/api/Titanium.Map.Annotation-property-pincolor\" rel=\"Titanium.Map.Annotation-property-pincolor\" class=\"docClass\">Titanium.Map.Annotation.pincolor</a> property.</p>\n\n</div><div class='long'><p>Color constant used to set a map annotation to purple via the \n<a href=\"#!/api/Titanium.Map.Annotation-property-pincolor\" rel=\"Titanium.Map.Annotation-property-pincolor\" class=\"docClass\">Titanium.Map.Annotation.pincolor</a> property.</p>\n\n</div></div></div><div id='property-ANNOTATION_RED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-property-ANNOTATION_RED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-property-ANNOTATION_RED' class='name not-expandable'>ANNOTATION_RED</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Color constant used to set a map annotation to red via the \n<a href=\"#!/api/Titanium.Map.Annotation-property-pincolor\" rel=\"Titanium.Map.Annotation-property-pincolor\" class=\"docClass\">Titanium.Map.Annotation.pincolor</a> property.</p>\n\n</div><div class='long'><p>Color constant used to set a map annotation to red via the \n<a href=\"#!/api/Titanium.Map.Annotation-property-pincolor\" rel=\"Titanium.Map.Annotation-property-pincolor\" class=\"docClass\">Titanium.Map.Annotation.pincolor</a> property.</p>\n\n</div></div></div><div id='property-HYBRID_TYPE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-property-HYBRID_TYPE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-property-HYBRID_TYPE' class='name expandable'>HYBRID_TYPE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Used with mapType to display a satellite image of the area with road and road name information layered on top. ...</div><div class='long'><p>Used with <a href=\"#!/api/Titanium.Map.View-property-mapType\" rel=\"Titanium.Map.View-property-mapType\" class=\"docClass\">mapType</a> to display a satellite image of the area with road and road name information layered on top.</p>\n\n\n<p>@description <p>On Android, <code>HYBRID_TYPE</code> produces a road map that looks like\n<a href=\"#!/api/Titanium.Map-property-STANDARD_TYPE\" rel=\"Titanium.Map-property-STANDARD_TYPE\" class=\"docClass\">STANDARD_TYPE</a>, and does not include a satellite\nimage. This is a known issue\n(<a href=\"https://jira.appcelerator.org/browse/TIMOB-9673\">TIMOB-9673</a>).</p></p>\n\n<p>Use <a href=\"#!/api/Titanium.Map-property-SATELLITE_TYPE\" rel=\"Titanium.Map-property-SATELLITE_TYPE\" class=\"docClass\">SATELLITE_TYPE</a> to specify a hybrid-type map on\nAndroid.</p>\n\n</div></div></div><div id='property-SATELLITE_TYPE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-property-SATELLITE_TYPE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-property-SATELLITE_TYPE' class='name expandable'>SATELLITE_TYPE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Used with mapType to display satellite imagery of the area. ...</div><div class='long'><p>Used with <a href=\"#!/api/Titanium.Map.View-property-mapType\" rel=\"Titanium.Map.View-property-mapType\" class=\"docClass\">mapType</a> to display satellite imagery of the area.</p>\n\n\n<p>@description <p>The Android Google Maps API does not support displaying satellite imagery\n<em>without</em> roads and names, so specifying <code>SATELLITE_TYPE</code> on Android produces\nthe same results as <a href=\"#!/api/Titanium.Map-property-HYBRID_TYPE\" rel=\"Titanium.Map-property-HYBRID_TYPE\" class=\"docClass\">HYBRID_TYPE</a> on other platforms.</p></p>\n</div></div></div><div id='property-STANDARD_TYPE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-property-STANDARD_TYPE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-property-STANDARD_TYPE' class='name not-expandable'>STANDARD_TYPE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Used with <a href=\"#!/api/Titanium.Map.View-property-mapType\" rel=\"Titanium.Map.View-property-mapType\" class=\"docClass\">mapType</a> to display a street map that shows the position of all roads and some road names.</p>\n\n</div><div class='long'><p>Used with <a href=\"#!/api/Titanium.Map.View-property-mapType\" rel=\"Titanium.Map.View-property-mapType\" class=\"docClass\">mapType</a> to display a street map that shows the position of all roads and some road names.</p>\n\n</div></div></div><div id='property-TERRAIN_TYPE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-property-TERRAIN_TYPE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-property-TERRAIN_TYPE' class='name expandable'>TERRAIN_TYPE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>@platform mobileweb 1.8\n\nUsed with mapType to display the terrain that shows the position of all roads and some road ...</div><div class='long'><p>@platform mobileweb 1.8</p>\n\n<p>Used with <a href=\"#!/api/Titanium.Map.View-property-mapType\" rel=\"Titanium.Map.View-property-mapType\" class=\"docClass\">mapType</a> to display the terrain that shows the position of all roads and some road names.</p>\n\n</div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-property-bubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0\n\nIndicates if the proxy will bubble an event to its par...</div><div class='long'><p>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n\n<p>Indicates if the proxy will bubble an event to its parent.</p>\n\n\n<p>@description <p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p></p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-addEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> ) : Object</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-applyProperties' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> ) : Object</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n\n<p>@description <p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void\n@platform android 3.0\n@platform iphone 3.0\n@platform ipad 3.0\n@platform mobileweb 3.0</p>\n</div></li></ul></div></div></div><div id='method-createAnnotation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-method-createAnnotation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-method-createAnnotation' class='name expandable'>createAnnotation</a>( <span class='pre'>[parameters]</span> ) : <a href=\"#!/api/Titanium.Map.Annotation\" rel=\"Titanium.Map.Annotation\" class=\"docClass\">Titanium.Map.Annotation</a></div><div class='description'><div class='short'>Creates and returns an instance of Titanium.Map.Annotation. ...</div><div class='long'><p>Creates and returns an instance of <a href=\"#!/api/Titanium.Map.Annotation\" rel=\"Titanium.Map.Annotation\" class=\"docClass\">Titanium.Map.Annotation</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : Dictionary&lt;Titanium.Map.Annotation&gt; (optional)<div class='sub-desc'><p>Properties to set on a new object, including any defined by <a href=\"#!/api/Titanium.Map.Annotation\" rel=\"Titanium.Map.Annotation\" class=\"docClass\">Titanium.Map.Annotation</a> except those marked not-creation or read-only.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.Map.Annotation\" rel=\"Titanium.Map.Annotation\" class=\"docClass\">Titanium.Map.Annotation</a></span><div class='sub-desc'><p>@platform android 0.9\n@platform iphone 0.9\n@platform ipad 0.9\n@platform mobileweb 1.8</p>\n</div></li></ul></div></div></div><div id='method-createView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Map'>Titanium.Map</span><br/><a href='source/titanium.html#Titanium-Map-method-createView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Map-method-createView' class='name expandable'>createView</a>( <span class='pre'>[parameters]</span> ) : <a href=\"#!/api/Titanium.Map.View\" rel=\"Titanium.Map.View\" class=\"docClass\">Titanium.Map.View</a></div><div class='description'><div class='short'>Creates and returns an instance of Titanium.Map.View. ...</div><div class='long'><p>Creates and returns an instance of <a href=\"#!/api/Titanium.Map.View\" rel=\"Titanium.Map.View\" class=\"docClass\">Titanium.Map.View</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : Dictionary&lt;Titanium.Map.View&gt; (optional)<div class='sub-desc'><p>Properties to set on a new object, including any defined by <a href=\"#!/api/Titanium.Map.View\" rel=\"Titanium.Map.View\" class=\"docClass\">Titanium.Map.View</a> except those marked not-creation or read-only.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.Map.View\" rel=\"Titanium.Map.View\" class=\"docClass\">Titanium.Map.View</a></span><div class='sub-desc'><p>@platform android 0.8\n@platform iphone 0.8\n@platform ipad 0.8\n@platform mobileweb 1.8</p>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> ) : Object</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-getBubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-removeEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> ) : Object</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n\n<p>@description <p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove. </p></p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void</p>\n</div></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a><br/><a href='source/titanium.html#Titanium-Proxy-method-setBubbleParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> ) : Object</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>void\n@platform iphone 3.0\n@platform ipad 3.0\n@platform android 3.0</p>\n</div></li></ul></div></div></div></div></div></div></div>"});