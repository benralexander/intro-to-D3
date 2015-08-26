var tools= (function(){
  var holder,  // private variable

  updSel=function(data){   // generate an 'update' selector
      holder=d3.select("body").selectAll("circle").data(data);
      console.log('stored array -> '+data);
    },
  updOverlap=function(data){    // examine data we stored
     var overlap=[];
     holder.attr('class',function(d){overlap.push(d)});
     console.log('overlap -> '+overlap);
  },
  updNew=function(data){  // generate 'enter' selector, use it to append to DOM
     var newstf=[];
     holder.enter().append("circle").attr('class',function(d){newstf.push(d)});
     console.log('newstf -> '+newstf);
  },
  updEverything=function(data){  // data resulting after using the 'enter' selector 
     var everything=[];
     holder.attr('class',function(d){everything.push(d)})
     console.log('everything -> '+everything);
  },
  updExit=function(data){   // generate 'exit' selector
     holder.exit().remove()
  };
  return {  // make methods publicly available
    updSel:updSel,
    updOverlap:updOverlap,
    updNew:updNew,
    updEverything:updEverything,
    updExit:updExit
  }
})();


