console.log('we are learning to create class')
//constructor must take the  book list as an implement 
// create a class library and implement the following
// getBookList()
// issueBook(bookname,user)
// returnbook(bookname)
class Library{
    constructor(booklist){
        this.booklist=booklist;
        this.issueBooks={};
    }
    getbookList(){
        this.booklist.forEach(element => {
            console.log(element);            
        });
    }
    issueBook(bookname,user){
        this.issueBooks[bookname]=user;
    }
    returnbook(bookname){
        delete this.issueBooks[bookname];
    }
}