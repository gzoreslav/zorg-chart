var data = {
	levels: [
		{id: 'root',        title: 'Root level'},
		{id: 'institution', title: 'Foo level'},
		{id: 'hospital',    title: 'Bar level'},
		{id: 'department',  title: 'Baz level'},
		{id: 'doctor',      title: 'Qwerty'}
	],
	items: [
		{id: '1', title: 'Super-Puper, Inc.', parent: null, level: 'root'},

		{id: '1-1', title: 'Foo Hospital', parent: '1', level: 'institution'},
		{id: '1-2', title: 'Foo Services', parent: '1', level: 'institution'},
		{id: '1-3', title: 'Foo Center', parent: '1', level: 'institution'},

		{id: '2-1',         title: 'Foo Children\'s',       parent: '1-2',      level: 'hospital'},
		{id: '2-2',          title: 'Foo Services',           parent: '1-2',      level: 'hospital'},
		{id: '2-3',         title: 'Foo',                   parent: '1-2',      level: 'hospital'},
		{id: '2-4',         title: 'Bar Children\'s',       parent: '1-2',      level: 'hospital'},
		{id: '2-5',          title: 'Bar Services',           parent: '1-2',      level: 'hospital'},
		{id: '2-6',         title: 'Bar',                   parent: '1-2',      level: 'hospital'},
		{id: '2-7',         title: 'Baz Children\'s',       parent: '1-2',      level: 'hospital'},
		{id: '2-8',          title: 'Baz Services',           parent: '1-2',      level: 'hospital'},
		{id: '2-9',         title: 'Baz',                   parent: '1-2',      level: 'hospital'},
		{id: '2-10',         title: 'Qwe Children\'s',       parent: '1-2',      level: 'hospital'},
		{id: '2-11',          title: 'Qwe Services',           parent: '1-2',      level: 'hospital'},
		{id: '2-12',         title: 'Qwe',                   parent: '1-2',      level: 'hospital'},

		{id: '3-1',         title: 'Foo Foo Children\'s',       parent: '1-1',      level: 'hospital'},
		{id: '3-2',          title: 'Foo Foo Services',           parent: '1-1',      level: 'hospital'},
		{id: '3-3',         title: 'Foo Foo',                   parent: '1-1',      level: 'hospital'},

		{id: '4-1',         title: 'Qwe Children\'s',       parent: '1-3',      level: 'hospital'},
		{id: '4-2',          title: 'Qwe Services',           parent: '1-3',      level: 'hospital'},
		{id: '4-3',         title: 'Qwe',                   parent: '1-3',      level: 'hospital'},

		{id: '1-1-1', title: 'AAAA',                                 parent: '2-1', level: 'department'},
		{id: '1-1-2',       title: 'AAAA 2',                                       parent: '2-1', level: 'department'},
		{id: '1-1-3',       title: 'AAAA 3',                                       parent: '2-1', level: 'department'},
		{id: '1-1-4',       title: 'AAAA 4',                                       parent: '2-1', level: 'department'},

		{id: '1-2-1',        title: 'Johns 1',                            parent: '2-2',  level: 'department'},
		{id: '1-2-2',        title: 'Johns 2',                            parent: '2-2',  level: 'department'},
		{id: '1-2-3',        title: 'Johns 3',                            parent: '2-2',  level: 'department'},

		{id: '1-3-1',       title: 'Jackson 1',                           parent: '3-1',  level: 'department'},
		{id: '1-3-2',       title: 'Jackson 2',                           parent: '3-1',  level: 'department'},
		{id: '1-3-3',       title: 'Jackson 3',                           parent: '3-1',  level: 'department'},

		{id: '1-4-1',        title: 'New York 1',                                parent: '4-2',  level: 'department'},
		{id: '1-4-2',        title: 'New York 2',                                parent: '4-2',  level: 'department'},
		{id: '1-4-3',        title: 'New York 3',                                parent: '4-2',  level: 'department'},

		{id: 'a', title: 'dr.Jackson',                                     parent: '1-4-1', level: 'doctor'},
		{id: 'b', title: 'dr.Sarra',                                       parent: '1-4-1', level: 'doctor'}

	],
	selected: '1'
};
