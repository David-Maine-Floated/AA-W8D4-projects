Function.prototype.inherits = function(Parent) {
    function Surrogate() {}
    this.prototype = new Surrogate();

    this.prototype.constructor = this;

}




let surrogate1 = new Surrogate
surrogate1.prototype = MovingObject.prototype
Asteroid.prototype = surrogate1.prototype
Asteroid.prototype.constructor = Asteroid.constructor





function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);