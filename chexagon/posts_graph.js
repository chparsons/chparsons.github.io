chRequire("d3.min.js");
chRequire("underscore-min.js");

var svg, force, net;
var width = 500, height = 500;

function init() { 

  $('svg').remove();

  var $net = $('<div/>');
  $('.module-title').after( $net );

  svg = d3.select( $net[0] ).append("svg")
    .attr("width", width)
    .attr("height", height);

  $('#morePosts').click( function() {
    $('body').append('<div id="loading" style="position:fixed; top:0px; background-color:#fff; padding: 4px;">loading/processing...</div>');
    setTimeout(update,2000) 
  });

}


function update() {

  $('svg').empty();

  //max = max || 100;

  force = d3.layout.force()
    //.charge( -60 )
    //.linkDistance( 70 )
    .size([width, height]);

  net = { 
    nodes:[], 
    links:[] 
  };

  net.nodes = scrape_nodes(); 
  net.links = compute_links( net.nodes );
  net.nodes = _.filter( net.nodes, function(n) {
    return n.links.length > 0;
  });
  net.links = compute_links( net.nodes );

  force
    .nodes( net.nodes )
    .links( net.links );
    //.start();

  var link = svg.selectAll(".link")
    .data( net.links )
    .enter().append("line")
      .attr("class", "link")
      .attr("stroke", "#000")
      .attr("stroke-opacity", ".06")
      .style("stroke-width", function(d) { return Math.sqrt(d.weight); });

  var rscale = d3.scale.linear().domain([0,1]).range([2,8]);
  //var color = d3.scale.category10();
  var colormap = {
    'positive': '#4daf4a',
    'negative': '#e41a1c',
    'neutral': '#377eb8'
  }
  var color = function( cat ) {
    for (var k in colormap ) {
      if (cat.toLowerCase().indexOf(k) > -1)
        return colormap[k];
    };
    return '#000';
  }

  var node = svg.selectAll(".node")
    .data( net.nodes )
    .enter().append("circle")
      .attr("class", "node")
      .attr("stroke", "#fff")
      .attr("stroke-width", "1.2px")
      .attr("r", function(d) {
        //return rscale( d.score );
        return rscale( d.links.length / net.nodes.length );
      })
      .style("fill", function(d) { 
        return color( d.cat ); 
      })
      .call( force.drag );

  node
    .append("title")
    .text(function(d) { 
      return '@'+d.author+' '+d.date; 
    });

  force
    .on("tick", function() {

      link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

      node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });

    });


  if ( optim() )
    force
      .on("start", function() {
        link.style('display','none');
      })
      .on("end", function() {
        link.style('display','inline');
      });


  if ( net.nodes.length <= 100 )
    force.charge(-60).linkDistance(90).start(); //nodes w links
    //force.charge(-60).linkDistance(70).start();
  //if ( net.nodes.length <= 200 )
  else
    force.charge(-50).linkDistance(70).start(); //nodes w links
    //force.charge(-25).linkDistance(80).start();


  if ( optim() )
    //initial ticks
    for (var t = 0; t < 300; ++t) 
      force.tick();
    //force.stop();

  $('#loading').remove();

  function optim() {
    return net.nodes.length > 200;
  }

  function scrape_nodes() {
    var nodes = [];
    $('.post').each(function(i,el){ 
      //if ( i >= max ) return false;

      var handles = [], hashtags = [];

      var $el = $(el);
      var $content = $el.find('.content span');

      $content.find('.handle').each(function(j,el) {
        handles[j] = $(el).text();
      });

      $content.find('.hashtag').each(function(j,el) {
        var hash = $(el).text();
        //filter
        if ( hash.toLowerCase().replace(/#/g,'') !== 'worldcup' )
          hashtags[j] = hash;
      });

      nodes[i] = {
        author: $el.find('.post-source div').text().split('/')[1],
        date: $el.find('.date').text().replace(/ /g,''),
        score: parseFloat( $el.attr('data-ch-score') ),
        cat: $el.attr('data-ch-category'),
        catid: parseInt( $el.attr('data-ch-catid') ),
        handles: handles,
        hashtags: hashtags,
        links: []
      };

    });
    return nodes;
  }

  function compute_links( nodes ) {
    var links = [];
    var nlen = nodes.length;
    var i, j, n0, n1, ln, ii;
    for ( i = 0; i < nlen; i++ ) {
      n0 = nodes[i];
      for ( j = i+1; j < nlen; j++ ) {
        n1 = nodes[j];
        ii = _.union(
          _.intersection( n0.handles, n1.handles ),
          _.intersection( n0.hashtags, n1.hashtags )
        );
        //ii = _.intersection( n0.hashtags, n1.hashtags );
        if ( ii.length ) {

          ln = {
            source: i,
            target: j,
            weight: ii.length
          };

          links.push( ln );
          n0.links.push( ln );
          n1.links.push( ln );
          
        }
      }
    }
    return links;
  }

}

init();
update();
