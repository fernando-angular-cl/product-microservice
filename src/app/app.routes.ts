import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
         /*
        Declara las carpetas hijas de la ruta 'dashboard'
        recordar poner default en la clase de los componentes para que no de error
      */
      {
        path: 'product-list',
        title: 'Lista de Productos',
        loadComponent: () => import('./dashboard/pages/product-list/product-list.component')
      },
      {
        path: 'product-detail/:id',
        title: 'Detalle Producto',
        loadComponent: () => import('./dashboard/pages/product-detail/product-detail.component')
      },
      {
        path:'product-form',
        title: 'Formulario',
        loadComponent: () => import('./dashboard/pages/product-form/product-form.component')
      },
      {
        path: '',
        redirectTo: 'product-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '', // la ruta raíz, si pone el link vacío lo redirecciona a la ruta '/dashboard'
    redirectTo: '/dashboard',  // redirige a la ruta '/dashboard'
    pathMatch: 'full' // redirige solo si la URL es exactamente '/'
  }
];
