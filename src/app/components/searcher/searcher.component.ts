import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  heroes: any[] = [];
  search: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesSerive: HeroesService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.search = params.search;
      this.heroes = this.heroesSerive.searchHeroes(params.search);
    });
  }
}
