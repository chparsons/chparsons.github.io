
(function($,ch,window,document) {

var sections;
var cur; 

var $data, $thumbs, $sidebar;

//var $flattr;

function init() 
{
  $data = $('.data');
  $thumbs = $('.thumbsbox');
  $sidebar = $('.sidebar');

  //$flattr = $('.FlattrButton');
  $('iframe[id*="coinbase_button"]').hide();

  init_sections();

  var deflang = 'ar';
  var d = parse_url();

  if ( set_lang( d.lang ) )
  {
    goto( d.section );
  }
  else
  {
    load_lang( function(r) 
    {
      ( set_lang( r ) || set_lang(deflang) );
      goto( d.section );
    });
  }

  window.onhashchange = function()
  {
    var d = parse_url();
    ( set_lang( d.lang ) || set_lang(deflang) );
    goto( d.section );
  };
}

function parse_url() 
{
  var data = {};

  var params = ch.url_params('#');

  data.lang = params.lang;

  data.section = params.section || (function() 
  {
    var pairs = _.pairs( params );
    for ( var i = 0, len = pairs.length; i < len; i++ )
    {
      if ( pairs[i][0] === pairs[i][1] ) 
        return pairs[i][0];
    }
    return undefined;
  })();

  return data;
}

function set_lang( str ) 
{
  if ( !_.isString( str ) )
    return false;

  var pais = str.toUpperCase();
  var continente = ch.continentes[pais];
  if ( continente === 'SA' || pais === 'ES' )
    ch.lang = 'ar';
  else
    ch.lang = 'en';

  return true;
}

function load_lang( callback ) 
{
  /*
   * http://www.hostip.info/use.html
   */
  $.ajax({ 
    url: 'http://api.hostip.info/country.php',
    //url: 'http://x.x', 
    type: 'GET',
    timeout: 3000
  }).done( callback ).fail( callback );
}

function init_sections() 
{
  sections = new Sections(); 

  // take the sections from html elems

  $sidebar.find('li').each( function(i) 
  {
    sections.add( 
      $(this).attr('class') 
    ); 
  });

  $thumbs.find('li').each( function(i) 
  {
    sections.add( 
      $(this).find('a')
        .attr('href').split('#')[1]
    );
  }); 

  sections.on( 'intro:enter', function() 
  { 
    intro_in();    
  });

  parse_sections_links( $sidebar ); 
  parse_sections_links( $thumbs ); 
}

function parse_sections_links( $el )
{
  //console.log('===parse_sections_links',$el.attr('class') );
 
  $el.find('a[href^="#"]').each( 
    function(i) 
    {
      //console.log( $(this).attr('href') );
      $(this).click( function() 
      {
        goto( 
          $(this).attr('href')
            .split('#')[1] 
        );
      });
    });

  //for ( var id in sections.list() )
  //{
    //var lnk = $el.find('a[href="#'+id+'"]')
      //.click( function() 
      //{
        //goto( 
          //$(this).attr('href')
            //.split('#')[1] 
        //);
      //});
    ////console.log( id, lnk.length, lnk.selector );
  //}
}

function intro_in()
{
  $thumbs.show();
  //$sidebar.find('.home-ico').show();
  //$sidebar.find('.back-ico').hide();
}

function intro_out()
{
  $thumbs.hide();
  //$sidebar.find('.home-ico').hide();
  //$sidebar.find('.back-ico').show();

  //$flattr.hide();
  $('iframe[id*="coinbase_button"]').hide();
}

function section_in( section )
{
  _gaq.push([ '_trackPageview', location.href ]);
  section.enter();
  $data.show();
  parse_sections_links( $data ); 

  //$flattr.show();
  $('iframe[id*="coinbase_button"]').show();
}

function goto( id ) 
{
  //console.log('goto', id);

  if ( cur )
    $sidebar.find('a[href*="'+cur+'"]')
      .parent()
      .removeClass('active');

  id = id || 'intro';

  var section = sections.get(id);
  if ( !section )
  {
    section = sections.add(id);
  }

  cur = id; 

  $sidebar.find('a[href*="'+cur+'"]')
    .parent()
    .addClass('active');

  intro_out();    

  $data.empty();
  $data.load( section.url(), function() 
  {
    section_in( section ); 
  });
}


init();


function Sections()
{
  _.extend( this, new ch.Events() );

  var ls = {};

  this.add = function( id, opt )
  {
    ls[id] = new Section( id, opt, this );
    return ls[id];
  };

  this.get = function( id ) 
  {
    return ls[id];
  };

  this.list = function()
  {
    return ls;
  };
};  

function Section( id, opt, bus ) 
{
  if ( !id ) 
    throw 'new section falta id en nueva seccion';

  opt = opt || {};

  //this.id = function() { return id; }
  //this.config = function() { return opt; }

  this.url = function() { 
    return opt.url || 'html/'+id+'.'+ch.lang+'.html'; 
  };

  this.enter = function() 
  {
    bus.trigger('section:enter', { section: id });
    bus.trigger( id+':enter' );
  };
}

})(jQuery,ch,window,document);

