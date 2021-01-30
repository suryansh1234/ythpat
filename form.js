class Form{
constructor(){
    this.input=createInput("name");
    this.button=createButton("submit");
    this.greeting=createElement("h2");
    this.title=createElement("h1")
}
  

display(){
    this.title.html("mythpadd car");
    this.title.position(130,160)
}


}