import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula3';
}

/* 
1ª CRIAR UM PROJETO: ng new aula03

2ª CRIAR DOIS COMPONENTES:
ng g c paginas/login
ng g c paginas/admin

3ª CRIAR O AUTENTICADOR DE ROTAS (AUTH GUARD)
ng g g seguranca/autenticar
ng generate guard seguranca/autenticar

4ª BAIXAR OS ARQUIVOS BOOTSTRAP: 
npm i bootstrap
*/ 


