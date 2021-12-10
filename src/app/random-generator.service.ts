import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RandomGeneratorService {
  constructor() {}

  /**
   * Function will take a random number and return a random number.
   */
  generateRandomNumber = (seed: number): Promise<number> => {
    return new Promise<number>(async (resolve, reject) => {
      await this.waitForNSeconds(1);
      return resolve(Math.floor(Math.random() * seed) + 1);
    });
  };

  /**
   * Only for candidates who don't know Promise.
   */
  generateRandomNumberObervable = (seed: number): Observable<number> => {
    return new Observable(subscriber => {
      this.generateRandomNumber(seed)
      .then((randomNumber) => {
        subscriber.next(randomNumber);
        subscriber.complete();
      })
      .catch((err) => {
        console.log(`RandomGeneratorService :: generateRandomNumberObervable :: Err`);
        console.log(err);
        subscriber.error(err);
        subscriber.complete();
      })
    })
  }

  /**
   * Take a number "waitInSeconds" as an input and returns a promese which will be resolved afer waitInSeconds for the number of seconds porvided in the input.
   */
  private waitForNSeconds = (waitInSeconds: number): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(
          `RandomGeneratorService :: waitForNSeconds :: Timeout Of ${waitInSeconds} is completed.`
        );
        return resolve(true);
      }, Math.abs(waitInSeconds) * 1000);
    });
  };
}
