import { NavItemCategory, NavItemLink } from './nav';

export const DEFAULT_LOGIN_ITEM: NavItemLink = { label: 'Login', sortOrder: 9999, type: 'link', route: '/auth/login', icon: 'login' };

export const DEFAULT_LOGOUT_ITEM: NavItemLink = { label: 'Logout', sortOrder: 9999, type: 'link', route: '/auth/logout', icon: 'person' };

export const DEFAULT_NAV_ITEMS: Array<NavItemCategory|NavItemLink> = [
    { label: 'Home', sortOrder: 1, type: 'link', route: '/home', icon: 'home' },
    DEFAULT_LOGIN_ITEM
];
