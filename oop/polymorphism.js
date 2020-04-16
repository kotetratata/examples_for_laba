class Leaf {
    form() {
        console.log('i have some form');
    }
}

class OakLeaf extends Leaf {
    form() {
        console.log('i have specific oak form');
    }
}

class MapleLeaf extends Leaf {
    form() {
        console.log('i have specific maple form');
    }
}