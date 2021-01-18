class Rope{
    constructor(bodyA,pointB){
        var options = {
            stiffness: 0.04,
            length: 100,
            bodyA:bodyA,
            pointB:pointB 
        }


        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope)
    }

display(){
    // line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)
    // strokeWeight(4)

    if(this.rope.bodyA != null){
        var pointA = this.rope.bodyA.position;
       var pointB = this.rope.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
}
attach(body){
    this.rope.bodyA = body
}

 
 
 fly(){
     this.rope.bodyA = null
 }




}

//class Slingshot{
   // constructor(bodyA, pointB){
        //var options = {
           // bodyA: bodyA,
           // pointB: pointB,
          //  stiffness: 0.04,
            //length: 10
        //}
        //this.chain = Constraint.create(options);
       // World.add(world, this.chain);
  //  }

   // display(){
        //checks if the constraint is present or not and if not then do not display
       // if(this.chain.bodyA != null){
       // var pointA = this.chain.bodyA.position;
       // var pointB = this.chain.pointB;
        //strokeWeight(4);
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
        //}
    //}
    //this removes the body(bodyA) from the constraint(this.chain) by making it null
    //fly(){
      //  this.chain.bodyA = null
    //}
//}