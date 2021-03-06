﻿import PageMain from '../PageMain/pageMain';
import PageNews from '../PageNews/pageNews';
import PageCategoriesTests from '../PageCategoriesTests/pageCategoriesTests';
import PageListTests from '../PageListTests/pageListTests';
import PageContacts from '../PageContacts/pageContacts';

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
        level: 0,
        icon: '',
        label: 'Список тестов',
        type: 'sub',
    },
    {
        id: 301,
        parentId: 3,
        level: 1,
        icon: '',
        label: 'Категории тестов',
        type: 'route',
        path: '/categories-tests',
        component: PageCategoriesTests
    },
    {
        id: 302,
        parentId: 3,
        level: 1,
        icon: '',
        label: 'Список тестов',
        type: 'route',
        path: '/list-tests',
        component: PageListTests
    },
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
        label: 'Список 2',
        type: 'sub',
        path: '',
    },
    {
        id: 30401,
        parentId: 304,
        level: 2,
        icon: '',
        label: 'Список тем 2-2',
        type: 'sub',
        path: '/list-topics'
    },
    {
        id: 305,
        parentId: 3,
        level: 1,
        icon: '',
        label: 'https://www.google.com',
        type: 'link',
        path: 'https://www.google.com'
    },
    {
        id: 4,
        level: 0,
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
        label: 'Контакты',
        type: 'route',
        path: '/contacts',
        component: PageContacts
    },
    {
        id: 6,
        icon: '',
        label: '----------',
        type: 'sep',
        path: ''
    },
    {
        id: 7,
        icon: '',
        label: 'www.maliugin.com.ua',
        type: 'link',
        path: 'http://www.maliugin.com.ua'
    },
    {
        id: 8,
        icon: '',
        label: '----------',
        type: 'sep',
        path: ''
    },
    {
        id: 9,
        icon: '',
        label: 'GitHub "TestingSystem"',
        type: 'link',
        path: 'https://github.com/svshp/TestingSystem'
    },
    {
        id: 10,
        icon: '',
        label: '----------',
        type: 'sep',
        path: ''
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