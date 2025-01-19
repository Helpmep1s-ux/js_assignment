class Book{
    constructor(t,a,y){
        this.titles= t;
        this.authors = a;
        this.years = y;
    }
    display(){
        console.log('Book Info:')
        console.log(`Title : ${this.titles}
Author : ${this.authors}
Year : ${this.years}`);
    }
}

const b1 = new Book('BOOKA','AUTHORB','2005');
b1.display();