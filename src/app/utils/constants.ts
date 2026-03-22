export interface NavItem {
  N: string;
  S: string;
  H: string;
}

export const NAV_ITEMS: NavItem[] = [
  {N: 'Ссылки', S: 'app-link', H: '/links'},
  {N: 'Контакты', S: 'app-user', H: '/contacts'},
  {N: 'Теги', S: 'app-tag', H: '/tags'},
  {N: 'Избранное', S: 'app-star', H: '/favorites'},
  {N: 'Посещения', S: 'app-clock', H: '/visits'},
];

export interface HeaderSearchDropdownListItem {
  I: number;
  N: string;
}

export const HISTORY_ITEMS: HeaderSearchDropdownListItem[] = [
  {I: 1, N: 'закрепить теги'},
  {I: 2, N: 'кнопка'},
  {I: 3, N: 'приложение'},
  {I: 4, N: 'форма'},
  {I: 5, N: 'текстовое поле'},
  {I: 6, N: 'выпадающий список'},
];
