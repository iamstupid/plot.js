// tabstop = 3 / 4 / 5
var plotjs={};
(function(p){
	//module API for plugins or external libraries
	/**
	 * mix two modules together
	 * @param  {object}		a module to merge into
	 * @param  {object}		b module to merge from (method: overwritten)
	 * @return {undefined}	no return
	 */
	function mixModule(a,b){
		//merge module b into a
		var k=Object.keys(b),l=k.length;//get keys
		for(var i=0;i<l;i++){
			a[k[i]]=b[k[i]];
		}
		return undefined;
	}
	p.module=function(name,module){
		module.call((p[name]=(p[name]?p[name]:{})));
		p[name].__type__="plotjs.module";
	}
	p.module.mbind=function(extractor){
		return function(name,module){
			module.call(extractor);
			p[name]=p[name]?mixModule(p[name],extractor):extractor;
			p[name].__type__="plotjs.module";
		}
	}
	p.module.has=function(mname){
		return p[mname]?(p[mname].__type__==="plotjs.module"):false;
	}
	p.module("plot",function(){
	});
})(plotjs);