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

function findLevel(id) {
	for (var i = 0; i < data.levels.length; i++) {
		if (data.levels[i].id === id) {
			return data.levels[i].title;
		}
	}
	return null;
}

//add empty cells from left side
function moveRight(result) {
	for (var i = 0; i < result.length; i++) {
		for (var j = 0; j < result[i].structure.length; i++) {
			result[i].structure[j].unshift({});
		}
	}
}

//add empty cells from right side
function moveLeft(result) {
	for (var i = 0; i < result.length; i++) {
		for (var j = 0; j < result[i].structure.length; i++) {
			result[i].structure[j].push({});
		}
	}
}

function hasChildren(id) {
	for (var i = 0; i < data.items.length; i++) {
		if (data.items[i].parent === id) {
			return true;
		}
	}
	return false;
}

function transform(data) {
	var result = [];
	//find if selected has children
	var elements = [];
	for (var i = 0; i < data.items.length; i++) {
		if (data.items[i].parent === data.selected) {
			elements.push({
				id: data.items[i].id, 
				level: data.items[i].level, 
				name: data.items[i].title, 
				selected: (data.items[i].id === data.selected),
				current: (data.items[i].id === data.selected),
				hasChildren: hasChildren(data.items[i].id)
			});
		}
	}
	if (elements.length > 0) {
		result.unshift({structure: elements, levelName: findLevel(elements[0].level)});
	}
	//find selected element
	var sel = null;
	for (var i = 0; i < data.items.length; i++) {
		if (data.items[i].id === data.selected) {
			sel = data.items[i];
		}
	}
	//find selected sublings
	elements = [];
	//skip if selected root
	if (sel.parent) {
		for (var i = 0; i < data.items.length; i++) {
			if (data.items[i].parent === sel.parent) {
				elements.push({
					id: data.items[i].id, 
					level: data.items[i].level, 
					name: data.items[i].title, 
					selected: (data.items[i].id === sel.id),
					current: (data.items[i].id === data.selected),
					hasChildren: hasChildren(data.items[i].id)
				});
			}
		}
	}
	if (elements.length > 0) {
		if (result.length > 0) {
			while (result[result.length - 1].structure.length < elements.length) {
				result[result.length - 1].structure.push({});
			}
			while (result[result.length - 1].structure.length > elements.length) {
				elements.push({});
			}
		}
		result.unshift({structure: elements, levelName: findLevel(elements[0].level)});
	}
	//recursivelly find parent
	do {
		elements = [];
		for (var i = 0; i < data.items.length; i++) {
			if (sel.parent === data.items[i].id) {
				sel = data.items[i];
				break;
			}
		}
		//find selected sublings
		for (var i = 0; i < data.items.length; i++) {
			if (data.items[i].parent === sel.parent) {
				elements.push({
					id: data.items[i].id, 
					level: data.items[i].level, 
					name: data.items[i].title, 
					selected: (data.items[i].id === sel.id),
					current: (data.items[i].id === data.selected),
					hasChildren: hasChildren(data.items[i].id)
				});
			}
		}
		if (elements.length > 0) {
			if (result.length > 0) {
				while (result[result.length - 1].structure.length < elements.length) {
					result[result.length - 1].structure.push({});
				}
				while (result[result.length - 1].structure.length > elements.length) {
					elements.push({});
				}
			}
			result.unshift({structure: elements, levelName: findLevel(elements[0].level)});
		}
	}
	while (sel.parent);
	return result;
}

//click event
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