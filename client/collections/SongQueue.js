// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if(this.length <= 1) {
        this.playFirst()
      }
    }, this);

    this.on('ended', function() {
      this.first().set('playCount', this.first().get('playCount')+1);
      debugger; 
      this.first().dequeue();
    }, this);

    this.on('dequeue', function(song){ 
      this.remove(song.cid);
      if(this.length > 0){
        this.playFirst();
      } else{
        this.stopPlay(); 
      }
    }, this);
  }, 

  playFirst: function() {
    this.first().play();
  }, 

  stopPlay: function(){
    this.trigger('stopPlay');
  }

});

