class Gadget {
        use();
        //...
}
class Phone extends Gadget {
    use() {
        //do call
    }
}
class Calculator extends Gadget {
    use() {
       // do calculations
    }
}

function useGadget(a: Array<Gadget> ) {
    for(int i = 0; i <= a.length; i++) {
        a[i].use();
    }
}
useGadget(gadgets);


///////////////////////////////////instead of
class Phone {

}
class Calculator {

}

function useGadget(a: Array<Gadget> ) {
    for(int i = 0; i <= a.length; i++) {
        
        if (typeof a[i] == Phone){
            //do call
        }
        if (typeof a[i] == Calculator){
            // do calculations
        }
    }
}
useGadget(gadgets);