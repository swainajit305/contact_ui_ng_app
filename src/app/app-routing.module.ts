import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { ContacteditComponent } from './contactedit/contactedit.component';

const routes: Routes = [

{path:'contacts' ,component:ContactlistComponent },
{path:'create-contact' ,component:CreatecontactComponent },
{path:'edit/:id' ,component:ContacteditComponent },
{path:'',redirectTo:'contacts',pathMatch:'full'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
