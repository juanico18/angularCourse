import { Injectable } from '@angular/core';
import { Character } from '../../characters/model/character';
import { CHARACTERS } from '../../characters/data/data-characters';


@Injectable()
export class CharactersService {

  constructor() { }

  getCharacters(): Promise<Character[]>{
    return Promise.resolve(CHARACTERS);
  }

}
