import PageMain from '../PageMain/pageMain';
import PageNews from '../PageNews/pageNews';

const ListMenu = [
    {
        id: 1,
        icon: '',
        label: 'Главная',
        type: 'route',
        path: '/',
        component: PageMain
    },
    {
        id: 2,
        icon: '',
        label: 'Новости',
        type: 'route',
        path: '/news',
        component: PageNews
    },
    {
        id: 3,
        icon: '',
        label: 'Список тестов',
        type: 'sub',
    },
    {
        id: 301,
        parentId: 3,
        level: 1,
        icon: '',
        label: 'Список дисциплин',
        type: 'route',
        path: '/list-disciplines'
    },
/*
    {
        id: 302,
        parentId: 3,
        level: 1,
        icon: '',
        label: '----------',
        type: 'sep',
        path: ''
    },
*/
    {
        id: 303,
        parentId: 3,
        level: 1,
        icon: '',
        label: 'Список тем',
        type: 'sub',
        path: '',
    },
    {
        id: 30301,
        parentId: 303,
        level: 2,
        icon: '',
        label: 'Список тем - 2',
        type: 'sub',
        path: '/list-topics'
    },
    {
        id: 3030101,
        parentId: 30301,
        level: 3,
        icon: '',
        label: 'Список тем - 3',
        type: 'route',
        path: '/list-topics'
    },
    {
        id: 304,
        parentId: 3,
        level: 1,
        icon: '',
        label: 'https://www.google.com',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 4,
        icon: '',
        label: 'Итоги тестирования',
        type: 'sub',
    },
    {
        id: 401,
        parentId: 4,
        level: 1,
        icon: '',
        label: 'Просмотр результатов',
        type: 'route',
        path: ''
    },
    {
        id: 5,
        icon: '',
        label: '----------',
        type: 'sep',
        path: ''
    },
    {
        id: 6,
        icon: '',
        label: 'www.maliugin.com.ua',
        type: 'link',
        path: 'http://www.maliugin.com.ua'
    },
    {
        id: 7,
        icon: '',
        label: '----------',
        type: 'sep',
        path: ''
    },
    {
        id: 8,
        icon: '',
        label: 'External Link 8',
        type: 'link',
        path: 'https://www.google.com',
        externalLink: true
    },
    {
        id: 9,
        icon: '',
        label: 'External Link 9',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 10,
        icon: '',
        label: 'External Link 10',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 11,
        icon: '',
        label: 'External Link 11',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 12,
        icon: '',
        label: 'External Link 12',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 13,
        icon: '',
        label: 'External Link 13',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 14,
        icon: '',
        label: 'External Link 14',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 15,
        icon: '',
        label: 'External Link 15',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 16,
        icon: '',
        label: 'External Link 16',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 17,
        icon: '',
        label: 'External Link 17',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 18,
        icon: '',
        label: 'External Link 18',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 19,
        icon: '',
        label: 'External Link 19',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 20,
        icon: '',
        label: 'External Link 20',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 21,
        icon: '',
        label: 'External Link 21',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 22,
        icon: '',
        label: 'External Link 22',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 23,
        icon: '',
        label: 'External Link 23',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 24,
        icon: '',
        label: 'External Link 24',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 25,
        icon: '',
        label: 'External Link 25',
        type: 'link',
        path: 'https://www.google.com'
    }
]

export default ListMenu;