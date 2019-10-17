import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component'
import { ProductModule } from './product-list/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
  
    HttpClientModule,
    RouterModule.forRoot ([
      { path:'welcome', component:WelcomeComponent},
    
      { path:'', redirectTo:'welcome', pathMatch:'full'}
  ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
