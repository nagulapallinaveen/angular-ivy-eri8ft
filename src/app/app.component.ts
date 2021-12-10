import { Component, VERSION, OnInit } from '@angular/core';
import { RandomGeneratorService } from './random-generator.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  sum: number;

  constructor(private randomService: RandomGeneratorService) {}

  ngOnInit(): void {
    let that = this;
    (async () => {
      const value = await this.getRandomSum(5, 5);
      that.sum = value;
    })();
  }

  /**
   * Question 1 :: Complete the function "getRandomSum" by implementing the follwong logic.
   * Implement the follwing logic
   * 1. Use "RandomGeneratorService" to get a random number by giving an initial seed  from "initialSeed" variable;
   * 2. The random number generated in Step 1 will be added to the variable "sum" and will be used as a new initial seed.
   * 3. Repeat Step 1 and Step 2 "n" number or times, where n is the variable "repeatCount".
   * 4. Return the finalSum as output.
   */

  getRandomSum = async (
    noOfTimes: number,
    initialSeed: number
  ): Promise<number> => {
    let initial = initialSeed;
    let currentRandom;
    let sum = 0;
    let total;

    for (let i = 0; i < noOfTimes; i++) {
      currentRandom = Promise.resolve(
        this.randomService.generateRandomNumber(initial).then((res) => {
          currentRandom = res;
          initial = res;
          sum = sum + currentRandom;
          return sum;
        })
      );
    }
    await currentRandom.then((res) => {
      total = res;
    });
    return total;
  };

  /**
   * Question 2: Complete the function "getSumOfRandomNumbers" by implementing the follwong logic.
   * Implement the  following logic
   * 1. Use "RandomGeneratorService" to get a random number by giving an initial seed  from "initialSeed" variable;
   * 2. Return the sum of "n" random number, wehre "n" is the input parameter "noOfTimes".
   *
   */
  getSumOfRandomNumbers = (noOfTimes: number, initialSeed: number): number => {
    let sum: number = 0;
    /**
     *  Implement logic here
     */
    return 0;
  };
}
