import { Injectable } from '@angular/core';
import { Hero } from '../../../controllers/Hero';
import { HEROES } from '../../../models/mock-heroes';
import { MessageService } from '../message/message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('HeroService: Fetched Heroes.');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`HeroService: Hero Fetched id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}