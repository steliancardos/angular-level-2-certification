import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ActivateRouteDirective } from '../../directives/activate-route.directive';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterModule, ActivateRouteDirective],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {}
