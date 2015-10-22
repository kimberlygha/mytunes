// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', this.play, this);
    this.on('dequeue', this.removeSong, this); 
  }, 

  play: function() {
    if(this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.first().play();
  }, 

  removeSong: function(){
      this.shift();
      this.playFirst();
  }

});