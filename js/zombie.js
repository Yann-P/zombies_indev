// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['lib/jquery', 'data', 'character'], function($, Data, Character) {
    var Zombie;
    return Zombie = (function(_super) {

      __extends(Zombie, _super);

      function Zombie(id, kind) {
        var data;
        data = Data.store.zombies[kind] || (function() {
          throw "Zombie '" + kind + "' inexistant";
        })();
        this.type = data.type, this.health = data.health, this.strength = data.strength, this.resistance = data.resistance, this.speed = data.speed;
        this.maxHealth = this.health;
        Zombie.__super__.constructor.call(this, id, kind);
      }

      return Zombie;

    })(Character);
  });

}).call(this);
