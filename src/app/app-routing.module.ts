import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { RemoveOwnerComponent } from './remove-owner/remove-owner.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { GetAllTicketsComponent } from './get-all-tickets/get-all-tickets.component';
import { SetAvaliabilityComponent } from './set-avaliability/set-avaliability.component';
import { GetAllFeedbacksComponent } from './get-all-feedbacks/get-all-feedbacks.component';
import { ShowAllBusesComponent } from './show-all-buses/show-all-buses.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { CheckAvaliabilityComponent } from './check-avaliability/check-avaliability.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { GiveFeedbackComponent } from './give-feedback/give-feedback.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { FAQsComponent } from './faqs/faqs.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { BookingComponent } from './booking/booking.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { AdminComponent } from './admin/admin.component';
import { BusesComponent} from './buses/buses.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { UsersComponent } from './users/users.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addOwner', component: AddOwnerComponent},
  {path: 'removeOwner', component: RemoveOwnerComponent},
  {path: 'removeUser', component: RemoveUserComponent},
  {path: 'addBus', component: AddBusComponent},
  {path: 'updateBus', component: UpdateBusComponent},
  {path: 'deleteBus', component: DeleteBusComponent},
  {path: 'getAllTickets', component: GetAllTicketsComponent},
  {path: 'setAvaliability', component: SetAvaliabilityComponent},
  {path: 'getAllFeedbacks', component: GetAllFeedbacksComponent},
  {path: 'showAllBuses', component: ShowAllBusesComponent},
  {path: 'bookTicket', component: BookTicketComponent},
  {path: 'viewTicket', component: ViewTicketComponent},
  {path: 'checkAvaliability', component: CheckAvaliabilityComponent},
  {path: 'updateUser', component: UpdateUserComponent},
  {path: 'cancelTicket', component: CancelTicketComponent},
  {path: 'giveFeedback', component: GiveFeedbackComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path:'search',component:SearchComponent},
  {path:'faqs',component:FAQsComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'terms',component:TermsComponent},
  {path:'booking',component:BookingComponent},
  {path:'mydashboard',component:MydashboardComponent},
  {path:'admin',component:AdminComponent},
  {path:'booking-details',component:BookingDetailsComponent},
  {path:'users',component:UsersComponent},
  {path:'buses',component:BusesComponent},
  {path:'updateBus',component:UpdateBusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
