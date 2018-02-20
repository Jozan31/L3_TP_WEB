import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';

@Injectable()
export class CardService {

  private _url: string = './data/champions.json';

  constructor(private _http: Http) { }

  getCards() {
    return this._http.get(this._url).map((response: Response) => response.json());
  }

}
