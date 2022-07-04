import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { FAQsComponent } from './faqs/faqs.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SearchComponent } from './search/search.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { BookingComponent } from './booking/booking.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { BusesComponent } from './buses/buses.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    AddOwnerComponent,
    RemoveOwnerComponent,
    RemoveUserComponent,
    AddBusComponent,
    UpdateBusComponent,
    DeleteBusComponent,
    GetAllTicketsComponent,
    SetAvaliabilityComponent,
    GetAllFeedbacksComponent,
    ShowAllBusesComponent,
    BookTicketComponent,
    ViewTicketComponent,
    CheckAvaliabilityComponent,
    UpdateUserComponent,
    CancelTicketComponent,
    GiveFeedbackComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    TermsComponent,
    FAQsComponent,
    PrivacyComponent,
    SearchComponent,
    MydashboardComponent,
    BookingComponent,
    AdminComponent,
    UsersComponent,
    BusesComponent,
    BookingDetailsComponent,
    UpdatebusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
