const pageData = {
    home: {
        leftBlocks: [{
            elementType: 'p',
            content: 'I am a parent element in leftBlocks',
            children: []
        }],
        centerBlocks: [
            {
            elementType: 'h2',
            content: 'Hello from recursive',
            children: [{
                elementType: 'p',
                content: 'I am the child of the previous h2',
                children: []
            }]
        }],
        rightBlocks: [{
            elementType: 'p',
            content: 'I am a parent element in rightBlocks',
            children: []
        }]
    },
    about: {
        leftBlocks: [{
            elementType: 'h2',
            content: 'More about... about',
            children: [{
                elementType: 'p',
                content: 'I am the child of more about...about',
                children: [{
                    elementType: 'p',
                    content: 'I am the child of the child paragraph',
                    children: []
                }]
            }]
        }],
        centerBlocks: [{
            elementType: 'p',
            content: 'I am a parent element in centerBlocks',
            children: []
        }],
        rightBlocks: []
    },
    contact: {
        leftBlocks: [{
            elementType: 'p',
            content: 'I am a parent element in leftBlocks',
            children: []
        }],
        centerBlocks: [{
            elementType: 'p',
            content: 'I am a parent element in centerBlocks',
            children: []
        }],
        rightBlocks: [{
            elementType: 'p',
            content: 'I am a parent element in rightBlocks',
            children: []
        }]
    },
    help: {
        leftBlocks: [],
        centerBlocks: [{
            elementType: 'p',
            content: 'I am a parent element in centerBlocks',
            children: []
        }],
        rightBlocks: [{
            elementType: 'p',
            content: 'I am a parent element in rightBlocks',
            children: []
        }]
    },
    notfound: {
        leftBlocks: [],
        centerBlocks: [{
            elementType: 'h1',
            content: 'Page not found!',
            children: []
        }],
        rightBlocks: []
    }

}


export const pageUtil = [
    {page: 'Home',
    headerText: 'Welcome to my Arweave Hashrouting Tutorial Page',
    altHeader: '',
    url: '#/',
    template: 'center',
    pageData: pageData.home
    },
    {page: 'About',
    headerText: 'Arweave Hashrouting Tutorial Page',
    altHeader: '',
    url: '#/about',
    template: 'left',
    pageData: pageData.about
    },
    {page: 'Contact',
    headerText: 'Contact!',
    altHeader: '',
    url: '#/contact',
    template: 'center',
    pageData: pageData.contact
    },
    {page: 'Help',
    headerText: 'Want some help?',
    altHeader: '',
    url: '#/help',
    template: 'right',
    pageData: pageData.help
    },
    {page: 'Not Found',
    headerText: 'Page Not Found',
    altHeader: '',
    url: '#/notfound',
    template: 'center',
    pageData: pageData.notfound
    },
];