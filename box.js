class Box {


constructor(x,y){
    var options={
        isStatic: true
    }
    this.body=Bodies.rectangle(x,y,50,50,options);
World .add(world,this.body);
}
display(){
    var psk = this.body.position
    fill ("limegreen");
rectMode(CENTER);
rect(psk.x,psk.y,50,50);

}


}