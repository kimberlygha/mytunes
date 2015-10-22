// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', this.playFirst, this);
  }, 

  // events: {
  //    'add': 'playFirst'
  // },
  
  playFirst: function() {
    this.first().play();
  }

});