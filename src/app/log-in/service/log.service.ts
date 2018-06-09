import { Injectable } from '@angular/core';

const user = {name: 'Person1', email: 'person1@gmail.com', id: 1};

@Injectable()
export class LogService {

  constructor() { }

  log() {
    return user;
  }
}
