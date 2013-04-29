
(function($,ch,window,document) {

var config = { 

  intro: {},

  cv: {},

  clients: {},

  tools: {},

  github: {},

  tent: {},

  twitter: {},

  youtube: {},

  blog: {},

  linkedin: {},

  dineroypolitica: {},

  infomous: {},

  afluentes: {},

  camara_lucida: {},

  terra_incognita: {},

  pajaros: {},

  cicadas: {},

  cloud_chamber: {},

  videogames: {},

  tangible: {},

  huellas: {},

  cenerentola: {}

};

var model = new ch.Events();

var sections = {}; 

function Section( id, opt ) 
{
  if ( !id ) 
    throw 'model.js falta id en nueva seccion';

  //this.id = function() { return id; }
  //this.config = function() { return opt; }

  this.url = function() { 
    return opt.url || 'html/'+id+'.'+ch.lang+'.html'; 
  };

  this.enter = function() 
  {
    model.trigger('section:enter', { section: id });
    model.trigger( id+':enter' );
  };
}

for ( var _id in config )
{
  sections[_id] = new Section( _id, config[_id] );
}

model.sections = sections;

ch.model = model;

})(jQuery,ch,window,document);

