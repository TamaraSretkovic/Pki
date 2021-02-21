import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-prodavac-nav-bar',
  templateUrl: './prodavac-nav-bar.component.html',
  styleUrls: ['./prodavac-nav-bar.component.css']
})
export class ProdavacNavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route: string){
    this.router.navigate(['/' + route]);
  }

  logout(){
    console.log('/');
    
    this.router.navigate(['/']);
  }
}
