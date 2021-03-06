// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['entity', 'animation'], function(Entity, Animation) {
    var Effect;
    return Effect = (function(_super) {

      __extends(Effect, _super);

      function Effect(id, effectid, permanent) {
        this.effectid = effectid;
        this.permanent = permanent;
        Effect.__super__.constructor.call(this, id, 'effect_' + effectid);
      }

      Effect.prototype.playAt = function(x, y, callback) {
        this.setOffset(this.sprite.frameWidth / 2 - 16, this.sprite.frameHeight / 2 - 16);
        this.setPosition(x, y);
        return this.setAnimation('default', 1, callback);
      };

      Effect.prototype.remove = function() {
        console.log("remove effect");
        return Entity.prototype.remove.call(this);
      };

      return Effect;

    })(Entity);
  });

}).call(this);
