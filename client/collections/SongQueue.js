// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', this.play, this);
    // this.on('dequeue', this.removeSong, this); 
  }, 

  play: function() {
    if(this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.first().play();
  }, 

  removeSong: function(id){
      this.remove(id);
      if(this.length > 0){
        this.playFirst();
      } else{
        this.finish(); 
      }
  },

  finish: function(){
    this.trigger('finish');
  }

});