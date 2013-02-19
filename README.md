jquery-listTable-plugin
=======================

A table enhancement plugin for jquery.

Usage:
---------

``` js
var tbl = $('#list').listTable();

// aquire checked id
var ids = tbl.listTable.selected_id();
```

Html structure:
-------------------

``` html
<table class="table table-hover" id="list">
  <colgroup>
		<col width="25" />
		<col width="50" />
		<col width="300" />
		<col width="80" />
		<col />
	</colgroup>
	<thead>
		<tr>
			<th><input type="checkbox" id="check_all" /></th>
			<th>ID</th>
			<th>Category</th>
			<th>Offers</th>
		</tr>
	</thead>
	<tbody id="content"></tbody>
</table>
```

Css:
---------

``` css
/* table list */
table.list-table .operate {
  display:none;
}
table.list-table .camp_opt {
	position:relative;
}
table.list-table .operate {
	position:absolute;
	right:0;
	bottom:0;
}
table.list-table input[type="checkbox"] { margin:0; }
table.list-table tbody tr:nth-child(even) td,
table.list-table tbody tr:nth-child(even) th {
	background-color:#f2f2f2;
}
table.list-table.table-hover tbody tr:nth-child(odd):hover td,
table.list-table.table-hover tbody tr:nth-child(odd):hover th {
	background-color:#FFFFE1;
}
table.list-table.table-hover tbody tr:nth-child(even):hover td,
table.list-table.table-hover tbody tr:nth-child(even):hover th {
	background-color:#FFFFAF;
}
table.list-table tbody tr:nth-child(odd).active td,
table.list-table tbody tr.active-even td {
	background-color:#FFFFE1;
}
table.list-table tbody tr:nth-child(even).active td,
table.list-table tbody tr.active-odd td {
	background-color:#FFFFAF;
}
```
