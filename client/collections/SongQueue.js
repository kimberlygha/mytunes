// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if(this.length <= 1) {
        this.playFirst()
      }
    }, this);

    this.on('ended', function(song){
      this.first().dequeue()
    }, this);

    this.on('dequeue', function(song){ 
      this.remove(song.cid);
      if(this.length > 0){
        this.playFirst();
      } else{
        this.finish(); 
      }
    }, this);
  }, 

  playFirst: function() {
    this.first().play();
  }, 

  finish: function(){
    this.trigger('finish');
  }

});


    // params.library.on('ended', function(song){
    //   song.dequeue();
    // },this)
    // params.library.on('dequeue', function(song){
    //   this.set('currentlyPlaying', false);
    //   this.get('songQueue').remove(song.cid);
    //   if(this.get('songQueue').length > 0){
    //     this.get('songQueue').playFirst();
    //   } else{
    //     this.get('songQueue').finish(); 
    //   }
    // }, this)