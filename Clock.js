class Clock{
    constructor(){

    }
    hr=hour();
    mn=minute();
    sc=second();
  

    display(){
        push();
        rotate(scAngle);
        stroke(255,0,0);
        strokeWeight(7);
        line(0,0,100,0);
        pop();
    }

    map(){
        scAngle=map(sc,0, 60, 0, 360);
    }
}