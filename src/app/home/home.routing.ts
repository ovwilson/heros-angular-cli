import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const APPRROUTES: Routes = [
  { path: '', component: HomeComponent },
];

/*
this.router.navigate(["/heroes", { outlets: { "sidenav": ["heroes-edit", hero.id] } }]);

export const APPRROUTES: Routes = [
  { path: "", component: HeroesComponent },
  { path: "heroes-edit/:id", component: HeroesEditComponent, outlet: "sidenav" }
];
*/
// Example Auxiliary Route http://localhost:8080/heroes/(sidenav:heroes-add)