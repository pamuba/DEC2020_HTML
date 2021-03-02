// function* generator(i) {
//     yield i;
//     yield i + 10;
//   }
  
//   const gen = generator(10);
  
//   console.log(gen.next().value);
//   // expected output: 10
  
//   console.log(gen.next().value);
//   // expected output: 20

// function* idMaker() {
//     var index = 0;
//     while (true)
//       yield index++;
//   }
  
//   var gen = idMaker();
  
//   console.log(gen.next()); // 0
//   console.log(gen.next()); // 1
//   console.log(gen.next().value); // 2
//   console.log(gen.next().value); // 3

// function* anotherGenerator(i) {
//     yield i + 1;
//     yield i + 2;
//     yield i + 3;
//   }
  
//   function* generator(i) {
//     yield i;
//     yield* anotherGenerator(i);
//     yield i + 10;
//   }
  
//   var gen = generator(10);
  
//   console.log(gen.next().value); // 10
//   console.log(gen.next().value); // 11
//   console.log(gen.next().value); // 12
//   console.log(gen.next().value); // 13
//   console.log(gen.next().value); // 20