
(function($,_,window,document,undefined) {

var ch = {};

ch.fn = {};
ch.fn.run = function( fn, args, ctx ) { 
  ctx = ctx || {};
  if ( !_.isFunction( fn ) ) return false;
  return fn.apply( ctx, ch.arr.make(args) );

}

ch.arr = {};

ch.arr.make = function( obj ) {
  return _.isArray( obj ) ? obj: [obj];
}

ch.arr.remove = function( arr, obj ) 
{
  if ( !_.isArray( arr ) )
    return undefined;

  var i = _.indexOf( arr, obj );
  if (i === -1)
    return undefined;

  return arr.splice(i,1)[0];
}

ch.str = {};
ch.str.is_empty = function( str ) 
{
  if ( !_.isString( str ) ) return false;
  return str.replace(/\s/g,'') === ''; 
};

ch.url_params = function( url, sep )
{
  if ( sep === undefined 
      && _.isString( url )
      && url.length === 1 ) {
    sep = url;
    url = undefined;
  }

  url = url || location.href; 
  sep = sep || '?';

  var query = url.split(sep);
  if (query.length == 1)
    return {};

  query = query[1];

  var args = query.split('&');
  var i = args.length;
  var params = {};

  while ( i-- )
  {
    if ( ch.str.is_empty( args[i] ) )
      continue;

    var pair = args[i].split('=');
    var key = pair[0];
    var val = pair[1]; 

    params[key] = val ? decodeURIComponent(val) : key; 
  }

  return params;
}

window.ch = ch;

})(jQuery,_,window,document,undefined);

