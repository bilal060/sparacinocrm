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
                path: '/email',
            },
            {
                title: 'Calender',
                path: '/calender',
            },
            {
                title: 'Tasks',
                path: '/task',
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
                path: '/contacts',
            },
            {
                title: 'Leads',
                path: '/leads',
            },
            {
                title: 'Accounts',
                path: '/account',
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
                path: '/leads',
            },
            {
                title: 'Marketing',
                path: '/marketing',
            },
            {
                title: 'Finalization',
                path: '/finalization',
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
                path: '/changes',
            },
            {
                title: 'Reports',
                path: '/reports',
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