import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }   from './app.component';
import { FilterPipe } from "./filter.pipe";
import { FilterService } from "./filter.service";


@NgModule({
    declarations: [AppComponent, FilterPipe],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}