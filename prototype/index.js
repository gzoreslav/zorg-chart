//temp function modify matrix to html table
function matrixToTable(matrix) {
	var html = '';
	$('#chart tbody').html('');
	var height = matrix.length;
	var width = height > 0 ? matrix[0].structure.length : 0;
	for (var i = 0; i < height; i++ ) {
		var tr = $('<tr/>');
		var tr1 = $('<tr class="level"/>');
		var tr2 = $('<tr class="level2"/>');
		for (j = 0; j < width; j++) {
			var className = 'item';
			if (matrix[i].structure[j].hasChildren && !matrix[i].structure[j].selected) {
				className = className + ' group';
			}
			if (matrix[i].structure[j].selected) {
				className = className + ' selected';
			}
			if (matrix[i].structure[j].current) {
				className = className + ' current';
			}
			if (matrix[i].structure[j].name) {
				$('<td colspan="2"><div class="' + 
					className + '" onclick="selectItem(this);" data-id="' + 
					matrix[i].structure[j].id + '">' + 
					matrix[i].structure[j].name + '</div></td>').appendTo($(tr));
			} else {
				if (matrix[i].structure[j].more) {
					$('<td colspan="2">...</td>').appendTo($(tr));
				} else {
					$('<td colspan="2">&nbsp;</td>').appendTo($(tr));
				}
			}
			if (i < height - 1) {
				if (matrix[i].structure[j].name) {
					var className1 = '';
					var text = '';
					if (matrix[i].structure[j].selected) {
						className1 = className1 + ' right';
						text = matrix[i + 1].levelName;
					}
					$('<td class="' + className1 + '"><span>' + text + '</span></td><td>&nbsp;</td>').appendTo($(tr1));
				} else {
					$('<td>&nbsp;</td><td>&nbsp;</td>').appendTo($(tr1));
				}
				if (matrix[i + 1].structure[j].name || matrix[i + 1].structure[j].more) {
					var className1 = 'right';
					var className2 = '';
					if ((j > 0) && (matrix[i + 1].structure[j - 1].name || matrix[i + 1].structure[j - 1].more)) {
						className1 = className1 + ' top';
					}
					if ((j < width - 1) && (matrix[i + 1].structure[j + 1].name || matrix[i + 1].structure[j + 1].more)) {
						className2 = className2 + ' top';
					}
					$('<td class="' + className1 + '">&nbsp;</td><td class="' + className2 + '">&nbsp;</td>').appendTo($(tr2));
				} else {
					$('<td>&nbsp;</td><td>&nbsp;</td>').appendTo($(tr2));
				}
			}
		}
		$(tr).appendTo($('#chart'));
		$(tr1).appendTo($('#chart'));
		$(tr2).appendTo($('#chart'));
	}
};

function selectItem(target) {
	var sel = $(target).data('id');
	data.selected = sel;
	draw();
}

function draw() {
	//matrixToTable(matrix);
	var transformedData = transform(data);
	matrixToTable(transformedData);
}

$( document ).ready(draw);