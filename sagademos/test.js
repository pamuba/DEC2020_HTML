function* idMaker() {
    var index = 0;
    // while (true)
      yield index++;
  }
  
  var gen = idMaker();
  
  console.log(gen.next()); // 0
  console.log(gen.next()); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3