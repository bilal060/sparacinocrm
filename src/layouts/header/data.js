const links = [
    {
        title: 'Home',
        path: '/',
        isDropdown: false,
        dropdownlist: []
    },
    {
        title: 'Productivity',
        path: '/productivity',
        isDropdown: true,
        dropdownlist: [
            {
                title: 'Email',
                path: '/productivity',
            },
            {
                title: 'Calender',
                path: '/productivity',
            },
            {
                title: 'Tasks',
                path: '/productivity',
            },
        ]
    },
    {
        title: 'Properties',
        path: '/properties',
        isDropdown: false,
        dropdownlist: []
    },
    {
        title: 'People',
        path: '/people',
        isDropdown: true,
        dropdownlist: [
            {
                title: 'Contacts',
                path: '/people',
            },
            {
                title: 'Leads',
                path: '/people',
            },
            {
                title: 'Accounts',
                path: '/people',
            },
        ]
    },
    {
        title: 'Pipeline',
        path: '/pipeline',
        isDropdown: true,
        dropdownlist: [
            {
                title: 'Leads',
                path: '/pipeline',
            },
            {
                title: 'Marketing',
                path: '/pipeline',
            },
            {
                title: 'Finalization',
                path: '/pipeline',
            },
        ]
    },
    {
        title: 'Campaigns',
        path: '/campaigns',
        isDropdown: false,
        dropdownlist: []
    },
    {
        title: 'Opportunities',
        path: '/opportunities',
        isDropdown: false,
        dropdownlist: []
    },
    {
        title: 'Data',
        path: '/data',
        isDropdown: true,
        dropdownlist: [
            {
                title: 'Changes',
                path: '/data',
            },
            {
                title: 'Reports',
                path: '/data',
            },

        ]
    },
    {
        title: 'GIS',
        path: '/gis',
        isDropdown: false,
        dropdownlist: []
    },
]

export default links;