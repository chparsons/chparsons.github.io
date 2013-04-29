
(function($,ch,window,document) {

var Events = function() {

  var self = this;

  var ls = {}; // listeners;

  this.log = function() { 
    for (var k in ls ) 
      console.log( '[Events]', ls[k] );
  }

  /*
   * @param {Function} fn
   * @param {String||Array} types
   * if 'types' has 'all'
   * it will bind the callback to all events triggered
   */
  this.on = function( types, fn, ctx ) {

    var tps = ch.arr.make( types );
    var i = tps.length;
    var type;

    while( i-- ) 
    {
      type = tps[i];
      ls[type] = ls[type] || []; 

      if ( _.contains( ls[type], fn ) )
        continue;

      ls[type].push( { fn: fn, ctx: ctx } );
    }
  }

  /*
   * remove one or many callbacks
   * 
   * @param {String||Array} types
   *  if 'types' is undefined 
   *  removes all callbacks for all events
   *
   * @param {Function} fn
   *  if 'fn' is not a function (i.e. undefined) 
   *  removes all callbacks for the event types
   */

  this.off = function( types, fn, ctx ) 
  {
    if ( types === undefined ) {
      ls = {};
      return;
    }

    var tps = ch.arr.make( types );

    var type, list, newlist;
    var j, i = tps.length;

    while( i-- ) 
    {
      type = tps[i];
      list = ls[type];
      newlist = [];

      if ( _.isFunction( fn ) ) {

        j = list ? list.length : 0;

        while( j-- )
          if ( list[j].fn !== fn ) 
            newlist.push( list[j] );
      }

      ls[type] = newlist;
    }
  }

  this.trigger = function( type, e, callback ) 
  {
    var _defprev = false;
    var _stop = false;
    var _locked = [];

    var cblist, cblen, cb;

    cblist = (ls.all || []).concat( ls[type] );
    cblen = cblist.length;

    for ( var i = 0; i < cblen; i++ ) 
    {
      cb = cblist[i];
      if ( !cb ) continue;

      var _e = e || {};

      _e.type = type; 

      _e.prevent_default = function() { 
        _defprev = true; 
      }

      _e.stop_propagation = function() { 
        _stop = true; 
      }

      _e.default_prevented = function() { 
        return _defprev; 
      }

      _e.lock = function() { 
        _locked.push(_e); 
      }

      _e.unlock = function() { 
        ch.arr.remove( _locked, _e );
        _complete(); 
      }

      cb.fn.call( cb.ctx, _e );

      if ( _stop ) break;
    }

    function _complete() 
    {
      if ( _locked.length > 0 )
        return;

      ch.fn.run( callback, { 
        default_prevented: function() { 
          return _defprev; 
        }
      });
    }

    _complete(); 

    return _locked.length === 0;
  }
}

ch.Events = Events;

})(jQuery,ch,window,document);

