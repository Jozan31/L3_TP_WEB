import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less'],
  providers: [ CardService ]
})
export class CardsComponent implements OnInit {

  cards: any[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getChamps();
  }

  getChamps(): void {
    this.cardService.getCards().subscribe(champions => {
      champions.data = this.shuffle(this.convertObjectToArray(champions.data));
      this.cards = [];
      let nb_cards = 10;
      for(let i = 0; i < nb_cards/2; i++){
        let obj1 = {key: "", num: 0};
        let obj2 = {key: "", num: 1};
        obj1.key = champions.data[i][1].key;
        obj2.key = champions.data[i][1].key;
        this.cards.push(obj1);
        this.cards.push(obj2);
      }
      this.cards = this.convertObjectToArray(this.cards);
      this.cards = this.shuffle(this.cards);
      console.log(this.cards);
    });
  }

  private convertObjectToArray(object) {
    return Object.keys(object).map(function(key){
      return [String(key), object[key]];
    });
  }

  private shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
