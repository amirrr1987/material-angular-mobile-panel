import { Panel } from '@/layouts/panel/panel';
import { Customer } from '@/views/customer/customer';

export const routes = [
  {
    path: '',
    component: Panel,
    children: [
      {
        path: '',
        component: Customer
      }
    ]
  },
];
