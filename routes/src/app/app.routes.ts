import { Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/a', pathMatch: 'full' },
    { path: 'a', component: AComponent, outlet: 'popup' },
    { path: 'b', component: BComponent, outlet: 'popup' },
    { path: 'c', component: CComponent },
    { path: '**', component: NotFoundComponent },
  ];