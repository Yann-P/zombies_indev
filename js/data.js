// Generated by CoffeeScript 1.3.3
(function() {

  define([], function() {
    window.Data = {
      store: {},
      load: function(callback) {
        var _this = this;
        return $.ajax({
          dataType: "json",
          url: "resources/setup.json",
          cache: false,
          success: function(data) {
            return _this.getFiles(data.load.json, function() {
              return _this.preloadImages(callback);
            });
          },
          error: function() {
            throw "Cannot load setup.json.";
          }
        });
      },
      loadImageInCache: function(url, callback) {
        var image;
        image = new Image();
        image.onload = callback;
        return image.src = url;
      },
      preloadImages: function(callback) {
        return callback();
      },
      getFiles: function(files, callback, index) {
        var file, url,
          _this = this;
        if (index == null) {
          index = 0;
        }
        file = files[index];
        url = "resources/" + file + ".json";
        return $.ajax({
          dataType: "json",
          url: url,
          cache: false,
          success: function(data) {
            _this.store[file] = data;
            if (index === files.length - 1) {
              return callback();
            } else {
              return _this.getFiles(files, callback, index + 1);
            }
          },
          error: function() {
            throw "Error loading JSON";
          }
        });
      }
    };
    return Data;
  });

}).call(this);
