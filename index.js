
var d = {};
['zebra', 'horse'].forEach(function (k) {
    d[k] = null;
});

console.log(d)

for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function () { console.log(i); });
    document.body.appendChild(btn);
}

var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
    }
};

(function () {
    console.log("inner func: " + this);
    console.log("inner func:  self.foo = " + self.foo);
}());

myObject.func();