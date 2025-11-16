import { Panel } from '@/layouts/panel/panel';

export const routes = [
  {
    path: '',
    component: Panel,
    children: [
      {
        path: '',
        loadComponent: () => import('@/views/home/home').then((m) => m.Home),
      },
      {
        path: 'customer',
        loadComponent: () => import('@/views/customer/customer').then((m) => m.Customer),
      },
      {
        path: 'product',
        loadComponent: () => import('@/views/product/product').then((m) => m.Product),
      },
      {
        path: 'settings',
        loadComponent: () => import('@/views/settings/settings').then((m) => m.Settings),
      },
    ],
  },
];
