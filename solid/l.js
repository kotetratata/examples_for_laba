class Basic {};

class Inheritor extends Basic{};

class InheritorInheritor extends inheritor{};

///
someFunc(a: Basic){};

////
let basic = new Basic;

let inheritor = new Inheritor;

let inheritorInheritor =  new InheritorInheritor;



someFunc(basic);
//should work same fine as top one
someFunc(inheritor);

someFunc(inheritorInheritor);