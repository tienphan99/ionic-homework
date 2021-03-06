import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'details/:Id',
            loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
            path: 'detail-films/:episode_id',
            loadChildren: () => import('../detail-films/detail-films.module').then( m => m.DetailFilmsPageModule)
          },
        ]
      },
      {
        path: 'details/:Id',
        loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)
      },
    ]
  },
  {
    path: '', 
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
