function Vector(a, b) {
    this.a = a;
    this.b = b;
    this.plus = function (vector) {
        var a = vector.a + this.a;
        var b = vector.b + this.b;
        return new Vector(a, b);
    };
    this.minus = function (vector) {
        var a = this.a - vector.a;
        var b = this.b - vector.b;
        return new Vector(a, b);
    }
}