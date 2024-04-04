import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'chart',
    loadComponent: () => import('./graph/graph.page').then( m => m.GraphPage)
  },
  {
    path: 'graph',
    loadComponent: () => import('./graph/graph.page').then( m => m.GraphPage)
  },
  {
    path: 'file',
    loadComponent: () => import('./file/file.page').then( m => m.FilePage)
  }
//  {
 //   path: 'abstractclass',
   // loadComponent: () => import('./abstractclass/abstractclass.page').then( m => m.AbstractclassPage)
  //},
];
