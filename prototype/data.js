//data in matrix format
var matrix = [
	{
		structure: [
			{}, 
			{}, 
			{},
			{name: 'MCIC-MCIC Vermont, Inc.', selected: true}, 
			{}, 
			{},
			{}
		],
		levelName: 'root'
	},
	{
		structure: [
			{}, 
			{more: true},
			{name: 'NYPH-CO-New York-Presbyterian Hospital', hasChildren: true}, 
			{name: 'JHHS-CO-Johns Hopkins Health Services', selected: true}, 
			{name: 'URMC-CO-University of Rochester Medical Center', hasChildren: true}, 
			{more: true},
			{}
		],
		levelName: 'Institution level (very long level name; 2+ rows level name example)'
	},
	{
		structure: [
			{}, 
			{more: true},
			{name: 'JHHS-ACHS-All Children\'s Hospital, Inc.', selected: true}, 
			{name: 'JHHS-ARS-American Radiology Services', hasChildren: true}, 
			{name: 'JHHS-JHBP-Bayview Physicians', hasChildren: true}, 
			{more: true},
			{}
		],
		levelName: 'Hospital level'
	},
	{
		structure: [
			{more: true},
			{name: 'ACHS39-Allergy', current: true}, 
			{name: 'JACHS39-2'}, 
			{name: 'ACHS39-3'}, 
			{more: true},
			{},
			{}
		],
		levelName: 'Department level'
	}
];

var data = {
	levels: [
		{id: 'root',        title: 'Root level'},
		{id: 'institution', title: 'Institution level'},
		{id: 'hospital',    title: 'Hospital level'},
		{id: 'department',  title: 'Department level'}
	],
	items: [
		{id: 'MCIC',                   title: 'MCIC Vermont, Inc.',                             parent: null,             level: 'root'},

		{id: 'MCIC-NYPH',              title: 'NYPH-CO-New York-Presbyterian Hospital',         parent: 'MCIC',           level: 'institution'},
		{id: 'MCIC-JHHS',              title: 'JHHS-CO-Johns Hopkins Health Services',          parent: 'MCIC',           level: 'institution'},
		{id: 'MCIC-URMC',              title: 'URMC-CO-University of Rochester Medical Center', parent: 'MCIC',           level: 'institution'},

		{id: 'MCIC-JHHS-ACHS',         title: 'JHHS-ACHS-All Children\'s Hospital, Inc.',       parent: 'MCIC-JHHS',      level: 'hospital'},
		{id: 'MCIC-JHHS-ARS',          title: 'JHHS-ARS-American Radiology Services',           parent: 'MCIC-JHHS',      level: 'hospital'},
		{id: 'MCIC-JHHS-JHBP',         title: 'JHHS-JHBP-Bayview Physicians',                   parent: 'MCIC-JHHS',      level: 'hospital'},
		{id: 'MCIC-JHHS-ACHS1',         title: 'JHHS-ACHS-All Children\'s Hospital, Inc.',       parent: 'MCIC-JHHS',      level: 'hospital'},
		{id: 'MCIC-JHHS-ARS1',          title: 'JHHS-ARS-American Radiology Services',           parent: 'MCIC-JHHS',      level: 'hospital'},
		{id: 'MCIC-JHHS-JHBP1',         title: 'JHHS-JHBP-Bayview Physicians',                   parent: 'MCIC-JHHS',      level: 'hospital'},
		{id: 'MCIC-JHHS-ACHS2',         title: 'JHHS-ACHS-All Children\'s Hospital, Inc.',       parent: 'MCIC-JHHS',      level: 'hospital'},
		{id: 'MCIC-JHHS-ARS2',          title: 'JHHS-ARS-American Radiology Services',           parent: 'MCIC-JHHS',      level: 'hospital'},
		{id: 'MCIC-JHHS-JHBP2',         title: 'JHHS-JHBP-Bayview Physicians',                   parent: 'MCIC-JHHS',      level: 'hospital'},
		{id: 'MCIC-JHHS-ACHS3',         title: 'JHHS-ACHS-All Children\'s Hospital, Inc.',       parent: 'MCIC-JHHS',      level: 'hospital'},
		{id: 'MCIC-JHHS-ARS3',          title: 'JHHS-ARS-American Radiology Services',           parent: 'MCIC-JHHS',      level: 'hospital'},
		{id: 'MCIC-JHHS-JHBP3',         title: 'JHHS-JHBP-Bayview Physicians',                   parent: 'MCIC-JHHS',      level: 'hospital'},

		{id: 'MCIC-NYPH-ACHS',         title: 'NYPH-ACHS-All Children\'s Hospital, Inc.',       parent: 'MCIC-NYPH',      level: 'hospital'},
		{id: 'MCIC-NYPH-ARS',          title: 'NYPH-ARS-American Radiology Services',           parent: 'MCIC-NYPH',      level: 'hospital'},
		{id: 'MCIC-NYPH-JHBP',         title: 'NYPH-JHBP-Bayview Physicians',                   parent: 'MCIC-NYPH',      level: 'hospital'},

		{id: 'MCIC-URMC-ACHS',         title: 'URMC-ACHS-All Children\'s Hospital, Inc.',       parent: 'MCIC-URMC',      level: 'hospital'},
		{id: 'MCIC-URMC-ARS',          title: 'URMC-ARS-American Radiology Services',           parent: 'MCIC-URMC',      level: 'hospital'},
		{id: 'MCIC-URMC-JHBP',         title: 'URMC-JHBP-Bayview Physicians',                   parent: 'MCIC-URMC',      level: 'hospital'},

		{id: 'MCIC-JHHS-ACHS-Allergy', title: 'ACHS39-Allergy',                                 parent: 'MCIC-JHHS-ACHS', level: 'department'},
		{id: 'MCIC-JHHS-ACHS-2',       title: 'ACHS39-2',                                       parent: 'MCIC-JHHS-ACHS', level: 'department'},
		{id: 'MCIC-JHHS-ACHS-3',       title: 'ACHS39-3',                                       parent: 'MCIC-JHHS-ACHS', level: 'department'},
		{id: 'MCIC-JHHS-ACHS-4',       title: 'ACHS39-4',                                       parent: 'MCIC-JHHS-ACHS', level: 'department'},

		{id: 'MCIC-JHHS-ARS-1',        title: 'Johns Hopkins ARS-1',                            parent: 'MCIC-JHHS-ARS',  level: 'department'},
		{id: 'MCIC-JHHS-ARS-2',        title: 'Johns Hopkins ARS-2',                            parent: 'MCIC-JHHS-ARS',  level: 'department'},
		{id: 'MCIC-JHHS-ARS-3',        title: 'Johns Hopkins ARS-3',                            parent: 'MCIC-JHHS-ARS',  level: 'department'},

		{id: 'MCIC-JHHS-JHBP-1',       title: 'Johns Hopkins JHBP-1',                           parent: 'MCIC-JHHS-JHBP',  level: 'department'},
		{id: 'MCIC-JHHS-JHBP-2',       title: 'Johns Hopkins JHBP-2',                           parent: 'MCIC-JHHS-JHBP',  level: 'department'},
		{id: 'MCIC-JHHS-JHBP-3',       title: 'Johns Hopkins JHBP-3',                           parent: 'MCIC-JHHS-JHBP',  level: 'department'},

		{id: 'MCIC-NYPH-ARS-1',        title: 'New York JHBP-1',                                parent: 'MCIC-NYPH-ARS',  level: 'department'},
		{id: 'MCIC-NYPH-ARS-2',        title: 'New York JHBP-2',                                parent: 'MCIC-NYPH-ARS',  level: 'department'},
		{id: 'MCIC-NYPH-ARS-3',        title: 'New York JHBP-3',                                parent: 'MCIC-NYPH-ARS',  level: 'department'}

	],
	selected: 'MCIC'
};
