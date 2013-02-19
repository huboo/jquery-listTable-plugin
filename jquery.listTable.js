/*
 * list table plugin
 * AUTHOR: Wayne Chen (wayne@yeahcpa.com)
 *
 * USAGE: $('#table').listTable();
 */
(function($){
  var defaultOptions = {
		tableClass: 		'list-table',
		evenClass: 			'even',
		oddClass: 			'odd',
		activeEvenClass: 	'active',
		activeOddClass: 	'active',
		checkBoxClass: 		'check-box',
		checkAllId: 		'check_all'
	}
	$.fn.listTable = function(options){
		options = $.extend(defaultOptions, options);

		return this.each(function(index, node){
			var thisTable = $(node);
			$.fn.listTable.thisTable = $(node);

			thisTable.addClass(options.tableClass);
			thisTable.find('tbody tr:even').addClass(options.evenClass);
			thisTable.find('tbody tr:odd').addClass(options.oddClass);

			thisTable.on('click', 'tbody tr', function(e){
				e.stopPropagation();
				var el = $(this),
					chk = el.find('input[type=checkbox]'),
					all_flag = true,
					index = $('tbody tr', thisTable).index(el);

				if(chk){
					if(chk.attr('checked')){
						chk.attr('checked', false);
						el.removeClass((index % 2 == 0) ? options.activeEvenClass : options.activeOddClass);
					}else{
						chk.attr('checked', true);
						el.addClass((index % 2 == 0) ? options.activeEvenClass : options.activeOddClass);
					}
				}
				
				all_flag = $.fn.listTable.is_checked_all();

				$('#' + options.checkAllId).attr('checked', all_flag);
				return false;
			})
			
			thisTable.on('mouseover', 'tbody tr', function(e){
				e.stopPropagation();
				$(this).find('.operate').show();
			})
			thisTable.on('mouseout', 'tbody tr', function(e){
				e.stopPropagation();
				$(this).find('.operate').hide();
			})
			
			thisTable.on('click', 'a', function(e){
				e.stopPropagation();
			})
			
			thisTable.on('click', 'input.' + options.checkBoxClass, function(e){
				e.stopPropagation();
				var pr = $(this).parents('tr'),
					chk = $(this).attr('checked'),
					all_flag = true,
					index = $('tbody tr', thisTable).index(pr);

				if(chk)
					pr.addClass((index % 2 == 0) ? options.activeEvenClass : options.activeOddClass);
				else
					pr.removeClass((index % 2 == 0) ? options.activeEvenClass : options.activeOddClass);
				
				all_flag = $.fn.listTable.is_checked_all();

				$('#' + options.checkAllId).attr('checked', all_flag);
			})
			
			$('#' + options.checkAllId).click(function(e){
				e.stopPropagation();
				var do_check = true;
				if( ! $(this).attr('checked'))
					do_check = false;
				$.each($('tbody .' + options.checkBoxClass, thisTable), function() {
					var a = $(this),
						pr = a.parents('tr'),
						index = $('tbody tr', thisTable).index(pr);

					a.attr('checked', do_check);
					if(do_check)
						pr.addClass((index % 2 == 0) ? options.activeEvenClass : options.activeOddClass);
					else
						pr.removeClass((index % 2 == 0) ? options.activeEvenClass : options.activeOddClass);
				})
			})
		})
	}
	$.fn.listTable.is_checked_all = function(){
		var flag = true,
			options = defaultOptions,
			tbl = $.fn.listTable.thisTable;

		$.each($('.' + options.checkBoxClass, tbl), function(){
			if( ! $(this).attr('checked')){
				flag = false;
				// 跳出 each 循环
				return false;
			}
		})
		return flag;
	}
	$.fn.listTable.selected_id = function(){
		var id = [],
			tbl = $.fn.listTable.thisTable;

		$.each($('tbody input[type=checkbox][checked=checked]', tbl), function(i, n){
			id.push($(n).val());
		})
		return {len:id.length, ids:id.toString()}
	}
})(jQuery);
