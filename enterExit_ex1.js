var upd=d3.select("body").selectAll("circle").data([6,8]);
upd.attr('class',function(d){console.log('old'+d)});
upd.enter().append("circle").attr('class',function(d){console.log('new'+d)});
upd.attr('class',function(d){console.log('old and new'+d);return 'c'+d})
upd.exit().remove()





