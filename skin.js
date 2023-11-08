// Garden Gnome Software - Skin
// Pano2VR 7.0.6/20004
// Filename: huonmedi.ggsk
// Generated 2023-11-08T13:32:42

function pano2vrSkin(player,base) {
	player.addVariable('vis_mouse_on1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mouse_on2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mouse_on3', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._header=document.createElement('div');
		el.ggId="header";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._header.ggUpdatePosition=function (useTransition) {
		}
		el=me.__143=document.createElement('div');
		el.ggId="\uc717\ubc30\uacbd\uc0c9\uae54";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__143.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__143.ggUpdatePosition=function (useTransition) {
		}
		el=me.__148=document.createElement('div');
		el.ggId="\ub85c\uace0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 54%;';
		hs+='left : 2.34375%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((54% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__148.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__148.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__148.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__148.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__148.style.transition='left 0s, top 0s';
				if (me.__148.ggCurrentLogicStatePosition == 0) {
					me.__148.style.left='30%';
					me.__148.style.top = 'calc(50% - (54% / 2))';
				}
				else {
					me.__148.style.left='2.34375%';
					me.__148.style.top='calc(50% - ((54% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__148.logicBlock_position();
		me.__148.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.__148.appendChild(me._image_1);
		me.__143.appendChild(me.__148);
		el=me.__145=document.createElement('div');
		el.ggId="\uc11c\ube0c\uc717\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -40px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__145.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__145.ggUpdatePosition=function (useTransition) {
		}
		el=me.__146=document.createElement('div');
		el.ggId="\uc11c\ube0c\uc717\ubc30\uacbd\uc0c9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__146.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__146.ggUpdatePosition=function (useTransition) {
		}
		el=me.__147=document.createElement('div');
		els=me.__147__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\ud655\uc778";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 21px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__147.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488 \ud655\uc778", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__147.ggUpdateText();
		el.appendChild(els);
		me.__147.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__147.onclick=function (e) {
			me.__139.ggVisible = !me.__139.ggVisible;
			var flag=me.__139.ggVisible;
			me.__139.style.transition='none';
			me.__139.style.visibility=((flag)&&(Number(me.__139.style.opacity)>0||!me.__139.style.opacity))?'inherit':'hidden';
			me._up.ggVisible = !me._up.ggVisible;
			var flag=me._up.ggVisible;
			me._up.style.transition='none';
			me._up.style.visibility=((flag)&&(Number(me._up.style.opacity)>0||!me._up.style.opacity))?'inherit':'hidden';
			me._down.ggVisible = !me._down.ggVisible;
			var flag=me._down.ggVisible;
			me._down.style.transition='none';
			me._down.style.visibility=((flag)&&(Number(me._down.style.opacity)>0||!me._down.style.opacity))?'inherit':'hidden';
		}
		me.__147.ggUpdatePosition=function (useTransition) {
		}
		el=me._down=document.createElement('div');
		els=me._down__img=document.createElement('img');
		els.className='ggskin ggskin_down';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAjtJREFUeF7tm2tSwzAMhKOT0Z4MOBm5mZhkmozrKH7q4Uf7F4aS3dV+sguwTP6CyZ9/+QgwfQIQ8WdiEVZ4CfA9qQjPvQMmFWEFgFOAx7Isf5Ol4AkA60mByVKwu78Z/oZBRMQZUgAA53P7AmxEGL0QfwHgJN9lERo8BWf0j6RTAoycgr343DEnV+FBC/Hi/qUEXWUGHIWL+zEBRhqFt+KLjsDxDaOkwMWej/ngcXiQLiCjf0sBXyFE3FbkbVXu8UUWX/IIDHBQCrofLEGPCD0WYtT9ZAFeSejtnBB1P1eAnlJwi70sChCF2EMKkqKfTIEOuyAp+kUCdECFLPezOsDZDlu+Pstyv0iAhlOQ7X6xAC1iMbTvh1bY4o/GGjsnJG'+
			'OvCoONYrEo+sUUaBCL2cWXdRiKHQGNR6HK/aoS9JJgtSFWuc8pgMU5obj4WEfAWZBUU1CKPVYKGBZidfRZKEBgUeP6rLr4REZAcUVmc5+tBBVHgdV9EQGEzwms7ksKIIFFFuyJUUD4nMAefREKCHYBe/TFBWCkgpj7Yh3gbIcc12di7osLwJACUfdVBKjBIte+HzrSF1+Jxe4JGApRBHtqGKzEonj0VShQkQLR4hM7DMXGIvH6TM19tRL0khC7OFFz30qA0DlBpfjMRsBZkMgUaGDPjAIJhagafXUKEFh0r89Ui898BIgV2cR9kxIkRuHr+O+NGEYlvq6yCod+cUR8+H/CLvGgdz/TXADNh6Xe6yOAtQPW7z99Av4BNvUOymgfMjYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="down";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._down.onclick=function (e) {
			me._down.ggVisible = !me._down.ggVisible;
			var flag=me._down.ggVisible;
			me._down.style.transition='none';
			me._down.style.visibility=((flag)&&(Number(me._down.style.opacity)>0||!me._down.style.opacity))?'inherit':'hidden';
		}
		me._down.ggUpdatePosition=function (useTransition) {
		}
		me.__147.appendChild(me._down);
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABAoAMABAAAAAEAAABAAAAAAFSMbK4AAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludG'+
			'F4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAAK/SURBVHgB7VYBksIgDNSb+5fxZeLL6s+8jQMn1kABA5TazHDlKCTZzZJ6OOy2M7AzsDPQiYH7/U6dQq8jLAiYMMw6smmcBVcfw9n3kQDkk0PP88b89w0HwH71HQ9dVHDsQQUjluIeYdJ6zbWfms4l38BupHVei70LnRlqHQAl6WP5'+
			'aUMByk0WMKcn1ODM5PodYj/gLlbfo2R7JADc5AFcnA5R1dQkgdYsIn7f0EQFTT47jC2VLH9fi89i9c8gsBf/ysPZJirwSVedA0BO48N20Ug1qZmz2gq4zOKV/Eslh7qfQS01qu8kYWoBqtYEkTnffdJKvFZDrHIFAN5ogmcSrU+eqpq6ApAoIcPizh9DV0MFNRSg0fhEHmqpQAxWssjVx6htpiS30BltBVSrvgfg5M3XM0XZW1TfqctoIVdrgpyZVlIpfrQaosoVAHa1iqSA5z1aMT9WABIh5DNxUq1NQwUaCmjR+ERutVQgOk9Z5Opj9DaTkmtoz0dXAMhZ+hRy3mr9k6tQfAUA3gAgtQIZi2NziW0JvitWAOs+6LXDi1IVFCkA2Lt0/RivpSrIVgACERJZHQGWnDOUcLPzpEeJAi5JnvtsoqphufoYazeTQ0LWFQ'+
			'Bylj7lBOixN6chJl8BgDcAQz0A5ca0uSYdS1IAHDLwtTY+EWiqClIVsObGJxKQowLRgVvk6mOMasbhCD1TFDBc9T2wJ28uTqMEoOyEUzxGNVaviSUfbYKs+9jhUd7FGmJQAUvMjQKe84xhERWAA4RzEx/eioVUEFLAyI1PrFlIBW8E2OqT6GXsxYtEwtsVwCaW/hYJeJRvfhVeFGAZ2ix4ZmCughcF4OUmPnuPUkf++Cr4VwCwb6rrR/C/qOChAIAnHPgaAiw5Zyjh5hRwiTG20XfEuI5fWn1X0+uvnV3dyv7cGdgZ2Bn4Jgb+ANSqI3iZ9lY3AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="up";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 10%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me.__147.appendChild(me._up);
		me.__146.appendChild(me.__147);
		me.__145.appendChild(me.__146);
		me.__143.appendChild(me.__145);
		el=me.__144=document.createElement('div');
		el.ggId="\ubc29 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__144.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__144.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__144.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__144.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__144.style.transition='';
				if (me.__144.ggCurrentLogicStateVisible == 0) {
					me.__144.style.visibility="hidden";
					me.__144.ggVisible=false;
				}
				else {
					me.__144.style.visibility=(Number(me.__144.style.opacity)>0||!me.__144.style.opacity)?'inherit':'hidden';
					me.__144.ggVisible=true;
				}
			}
		}
		me.__144.logicBlock_visible();
		me.__144.ggUpdatePosition=function (useTransition) {
		}
		el=me._aesthetic_therapy=document.createElement('div');
		els=me._aesthetic_therapy__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="AESTHETIC THERAPY";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._aesthetic_therapy.ggUpdateText=function() {
			var params = [];
			var hs = player._("AESTHETIC \nTHERAPY", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._aesthetic_therapy.ggUpdateText();
		el.appendChild(els);
		me._aesthetic_therapy.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._aesthetic_therapy.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_mouse_on1') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._aesthetic_therapy.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._aesthetic_therapy.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._aesthetic_therapy.style.transition='color 0s';
				if (me._aesthetic_therapy.ggCurrentLogicStateTextColor == 0) {
					me._aesthetic_therapy.style.color="rgba(0,102,119,1)";
				}
				else {
					me._aesthetic_therapy.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._aesthetic_therapy.logicBlock_textcolor();
		me._aesthetic_therapy.onclick=function (e) {
			player.setVariableValue('vis_mouse_on1', true);
			player.setVariableValue('vis_mouse_on2', false);
			player.setVariableValue('vis_mouse_on3', false);
			player.openNext("{node4}","");
		}
		me._aesthetic_therapy.ggUpdatePosition=function (useTransition) {
		}
		me.__144.appendChild(me._aesthetic_therapy);
		el=me._endoscope=document.createElement('div');
		els=me._endoscope__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ENDOSCOPE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._endoscope.ggUpdateText=function() {
			var params = [];
			var hs = player._("ENDOSCOPE\nREPROCESSOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._endoscope.ggUpdateText();
		el.appendChild(els);
		me._endoscope.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._endoscope.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_mouse_on2') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._endoscope.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._endoscope.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._endoscope.style.transition='color 0s';
				if (me._endoscope.ggCurrentLogicStateTextColor == 0) {
					me._endoscope.style.color="rgba(0,102,119,1)";
				}
				else {
					me._endoscope.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._endoscope.logicBlock_textcolor();
		me._endoscope.onclick=function (e) {
			player.setVariableValue('vis_mouse_on1', false);
			player.setVariableValue('vis_mouse_on2', true);
			player.setVariableValue('vis_mouse_on3', false);
			player.openNext("{node5}","");
		}
		me._endoscope.ggUpdatePosition=function (useTransition) {
		}
		me.__144.appendChild(me._endoscope);
		el=me._extracorporeal=document.createElement('div');
		els=me._extracorporeal__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="EXTRACORPOREAL";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._extracorporeal.ggUpdateText=function() {
			var params = [];
			var hs = player._("EXTRACORPOREAL\nSHOCK WAVE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._extracorporeal.ggUpdateText();
		el.appendChild(els);
		me._extracorporeal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._extracorporeal.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_mouse_on3') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._extracorporeal.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._extracorporeal.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._extracorporeal.style.transition='color 0s';
				if (me._extracorporeal.ggCurrentLogicStateTextColor == 0) {
					me._extracorporeal.style.color="rgba(0,102,119,1)";
				}
				else {
					me._extracorporeal.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._extracorporeal.logicBlock_textcolor();
		me._extracorporeal.onclick=function (e) {
			player.setVariableValue('vis_mouse_on1', false);
			player.setVariableValue('vis_mouse_on2', false);
			player.setVariableValue('vis_mouse_on3', true);
			player.openNext("{node6}","");
		}
		me._extracorporeal.ggUpdatePosition=function (useTransition) {
		}
		me.__144.appendChild(me._extracorporeal);
		me.__143.appendChild(me.__144);
		el=me.__room=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c Room";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__room.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__room.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__room.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__room.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__room.style.transition='';
				if (me.__room.ggCurrentLogicStateVisible == 0) {
					me.__room.style.visibility="hidden";
					me.__room.ggVisible=false;
				}
				else {
					me.__room.style.visibility="hidden";
					me.__room.ggVisible=false;
				}
			}
		}
		me.__room.logicBlock_visible();
		me.__room.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #006677;';
		hs+='border-color : #006677;';
		hs+='border-radius : 15px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 70%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 45%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:0.5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_4.ggUpdateText();
		});
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.__room.appendChild(me._text_4);
		me.__143.appendChild(me.__room);
		me._header.appendChild(me.__143);
		me.divSkin.appendChild(me._header);
		el=me.__139=document.createElement('div');
		el.ggId="\uc81c\ud488\ud655\uc778 \ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 500px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 100px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__139.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__139.ggUpdatePosition=function (useTransition) {
		}
		el=me.__140=document.createElement('div');
		el.ggId="\uc81c\ud488\ud655\uc778\ucee8\ud14c\uc774\ub108\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__140.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__140.ggUpdatePosition=function (useTransition) {
		}
		el=me.__141=document.createElement('div');
		el.ggId="\uc81c\ud488\ud655\uc778\uc2a4\ud06c\ub864";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__141.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__141.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 499px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 299px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 5 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 5 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 500px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 500px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(30 * me._scrollarea_1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight - 5) || (!me._scrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_1.ggVertScrollVisible = true;
				} else {
					me._scrollarea_1__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_1__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_1.ggVertScrollVisible = false;
				}
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 5;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 5;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					if (me._scrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
						me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me.__142=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__142;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc2a4\ud06c\ub864\ucee8\ud14c\uc774\ub108";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__142.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__142.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 300;
		el.ggHeight = 60;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_1.ggUpdating == true) return;
			me._cloner_1.ggUpdating = true;
			var el=me._cloner_1;
			var curNumCols = 0;
			curNumCols = me._cloner_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_1.getFilteredNodes(tourNodes, filter);
			me._cloner_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_1.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._cloner_1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._cloner_1.ggNodeCount = me._cloner_1.ggNumFilterPassed;
			me._cloner_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1.parentNode && me._cloner_1.parentNode.classList.contains('ggskin_subelement') && me._cloner_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "제품";
		el.ggId="Cloner 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_1.childNodes.length; i++) {
				var child=me._cloner_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_1.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me._cloner_1.ggUpdate();
		}
		me.__142.appendChild(me._cloner_1);
		me._scrollarea_1__content.appendChild(me.__142);
		me.__141.appendChild(me._scrollarea_1);
		me.__140.appendChild(me.__141);
		me.__139.appendChild(me.__140);
		me.divSkin.appendChild(me.__139);
		el=me._footer=document.createElement('div');
		el.ggId="Footer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._footer.ggUpdatePosition=function (useTransition) {
		}
		el=me._footerbg=document.createElement('div');
		el.ggId="footerbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footerbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._footerbg.ggUpdatePosition=function (useTransition) {
		}
		me._footer.appendChild(me._footerbg);
		me.divSkin.appendChild(me._footer);
		el=me.__14=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5\ucc3d1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__=document.createElement('div');
		el.ggId="\uc81c\ud488\ud31d\uc5c5\ucc3d \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me.__133=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc81c\ud488\uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__133.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__133.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 63.69%;';
		hs+='left : calc(50% - ((49% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 49%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : -34px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 150%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_5.ggUpdateText=function() {
			var params = [];
			var hs = player._("DermaAKNE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5.ggUpdateText();
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_6=document.createElement('div');
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -68px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_6.ggUpdateText=function() {
			var params = [];
			var hs = player._("IPL\uacfc RF \uae30\uc220\uc744 \uc774\uc6a9\ud558\uc5ec \uc120\ud0dd\uc801 \uc5ec\ub4dc\ub984 \uc99d\uc0c1 \uac1c\uc120\uc5d0 \ubcf4\uc870\uc801\uc73c\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6.ggUpdateText();
		el.appendChild(els);
		me._text_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_6.ggUpdatePosition=function (useTransition) {
		}
		me._text_5.appendChild(me._text_6);
		me._image_4.appendChild(me._text_5);
		me.__133.appendChild(me._image_4);
		el=me.__138=document.createElement('div');
		els=me.__138__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c\uc138\ubd80\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__138.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__138.ggUpdateText();
		el.appendChild(els);
		me.__138.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__138.ggUpdatePosition=function (useTransition) {
		}
		me.__133.appendChild(me.__138);
		el=me.__137=document.createElement('div');
		els=me.__137__img=document.createElement('img');
		els.className='ggskin ggskin__137';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5xJREFUeF7tm11S6zAMhe2yIpq8X9hMuwxgGc1m6H1PyoqoGRkcHNeJJVtK3Sl9YYDm53w+UmTF1mqFT9u2T+p8foJLGWP+jZfU2v5NGXOEH1rr//7t9KfTq/TtaYkLWMGg6/PzRTmRmRfSSr3BoVIwWAGAcA7Rs6yMOYJLOGGwABAXHiECzuAAUQTgGsJDFqUgsgDUINwHUQKBDMCKP5/fM3Oa6GF6s3nu+94+UbAfEoB2u301Sr1gT36N71HdgAbALb5pGsunaVs19L0ahoGNFwUCCgCneBC+2++VA+Cr7rpOdYcDCwgshCQAbvGHrlsUuN/t2NyAgbAIgFM8qAbxsZH3iUAoAASuTwrCLADubA/CU6PvRHO6wM4xFp4Osw'+
			'Ca7dZwjQKcB+J+hxxZbgBLEKIAuK1PBcCZDMdBNOY4fHw8RyrJ6Z8kxFcBYCYULhzAbX2HlxICIg6AG4m4YAJAavRrcUAsF0wASI1+TQBCF4wAJEe/KgBBLhgBNI+P76Xtq6XHZhU5wN2glwt+ATA/90MYVQHwXGABSNu/thDwk+HdAnDJ0AKQzP5V1QFBXA6nk9Zr2L/GEHBhQAbgd3IokyU4LjUVdueDKXFOh4jaWYKpMhrAUieHAkL6uwAOukoYgGgAlEeYtEDs+VFTanjThCmAesaGJVZA6fdQnSUMAEonp/SmuY9PusACSFSAt2h/BzIJACrCFIBbdgCmr5DMAbcMIOkATA4AO2Ha2dzxy3G+9uft0+y5sABu0QUo+/8VQoRK0NnIlrRtS3aodCkMZTB8MBWgu/nvSnCl9/2UxynGvuQRiBxgAdz9dNgCEO4H'+
			'1jgddi9NvztCK4RBbSFw9wCgG2SbImN2Fw6DqhwQa4tLh0FNAPxFE9NXY4IuqAmAs/8kBKSTYS0AwiUzl6/HhVxQCwB/9C8cIOmCGgDEFkxFl8hIFEbXBjC3Wiy+RkigMKJMqSXmAqH1vQlRfFrB/VikAEh2cogzoaxlcjYfMC+OxnSWUO1sAoDshZLuGpwQMC7gHP2U+OhTIAaXE8JcMqS80sIYACMeDUAiHFxnKaeTkwKAFU8CIAEhJSTn/xTxZACShVKO2PAY8S0z/gU580KxeOjvPzy8UfcLZTmgKggFwpOFEGVUVncDg3BWAJOaATZHF+4XnoXPKFwEQBge8HvxNrsf0XCunBhPOTm5aSp1Asz/IUT8741b6IPt8zYpuS30m81RQnB4v18pFcebm87ZiwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub354\ud558\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__137.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__137.onclick=function (e) {
			me.__134.style.transition='none';
			me.__134.style.visibility=(Number(me.__134.style.opacity)>0||!me.__134.style.opacity)?'inherit':'hidden';
			me.__134.ggVisible=true;
			me.__137.style.transition='none';
			me.__137.style.visibility='hidden';
			me.__137.ggVisible=false;
			me.__136.style.transition='none';
			me.__136.style.visibility=(Number(me.__136.style.opacity)>0||!me.__136.style.opacity)?'inherit':'hidden';
			me.__136.ggVisible=true;
		}
		me.__137.onmouseover=function (e) {
			me.elementMouseOver['_137']=true;
			me._text_7.logicBlock_visible();
		}
		me.__137.onmouseout=function (e) {
			me.elementMouseOver['_137']=false;
			me._text_7.logicBlock_visible();
		}
		me.__137.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_137']) {
				me.elementMouseOver['_137']=true;
				me._text_7.logicBlock_visible();
			}
		}
		me.__137.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_7=document.createElement('div');
		els=me._text_7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_7.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_7.ggUpdateText();
		el.appendChild(els);
		me._text_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_137'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_7.style.transition='';
				if (me._text_7.ggCurrentLogicStateVisible == 0) {
					me._text_7.style.visibility=(Number(me._text_7.style.opacity)>0||!me._text_7.style.opacity)?'inherit':'hidden';
					me._text_7.ggVisible=true;
				}
				else {
					me._text_7.style.visibility="hidden";
					me._text_7.ggVisible=false;
				}
			}
		}
		me._text_7.logicBlock_visible();
		me._text_7.ggUpdatePosition=function (useTransition) {
		}
		me.__137.appendChild(me._text_7);
		me.__133.appendChild(me.__137);
		el=me.__136=document.createElement('div');
		els=me.__136__img=document.createElement('img');
		els.className='ggskin ggskin__136';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAvtJREFUeF7tm1t2gjAQhhP7ZBdR11DhvXYzuIzWZchmtO+ga7CLqE+anomGQghkwqXmAi8eldv/zZ/JEBJK/mGL43hFrtcVXIox9lZcklL+G2FsDx+U0q/y7WSHw+fYt0fHuAAXDLoulw8iRHa8ECVkA4eOBWNQACB8CNGNrBjbg0uGhDEIgNGFK4iAM4YA0QvAI4TLLPqC6ATABuFlEH0gGAPg4q/XXcecNuphdDZ7z7KM9yjYzQhAvFx+MkI+sCd/xH6mbkADcEG8AG4CAQXAJfGmELQAXBRvAqEVgMvisRAaAdic7U2Ta1vv0AggWi6Z6YVs3r8JghKAD9avBYOxfX48visqyepPXoq/S1S5oOYA36xfCa/CBRUAPke/6B'+
			'WkcrkCwOvoCwKSCwoAIURf5YICQPT6uus7fGVzN9iUC/4AeNbv64IhegQOICT7y80gWAAwFA+FEQcQRPZXtIn8cKA0RPuXm4ExgCiKSJ7nuhzzkP9fFgvyfTqhrw0jR2gAIDxZrwl82rxBcNLtFhUkNAAQniSJzbpr97ZOEj0EeNOEKYAySy3fFhFwAkBo3TAAwPLbNHUq+uJmtS7gADQVoIv2RwOAV/I6AC47IE1TnhDbNm0OcBkArgkgngIhB9je/amiHOu6bEwS5KWyg4kQZf+pEDKoBIXFbC6Fn+dz8nM+o7vsWyVo8ft+tJKOO3IAwT8OcwCInqAjZGsPE3MIbiNCATaD4AHAaBAEfxoWF400pGZQnkNUfTUWSDIU9q80gVCSoTyDrP563HMXlKNfc4DvLlDNH1ROkfGxMGqaPKmeI+RhYSRbX/R+0zS5tmLd'+
			'h9dmunnD01RZzOOai07QRV6bA2QwLkHAilfWAa7nBBPxxgBsL5RGXzJTdodVTQLG95+eNqbrhTo5wCoIPYQbJ0GrcsMAwgcFUAyqwKoyWBzdc71wI+wBhY8CQG4e8L33Mru7aDhXlzauq3O0laDuBJj/IWGW9yuW0EvL53lSEkvoZ7P9GILl+/0FIEjgjMT80c8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ube7c\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__136.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__136.onclick=function (e) {
			me.__137.style.transition='none';
			me.__137.style.visibility=(Number(me.__137.style.opacity)>0||!me.__137.style.opacity)?'inherit':'hidden';
			me.__137.ggVisible=true;
			me.__136.style.transition='none';
			me.__136.style.visibility='hidden';
			me.__136.ggVisible=false;
			me.__134.style.transition='none';
			me.__134.style.visibility='hidden';
			me.__134.ggVisible=false;
		}
		me.__136.onmouseover=function (e) {
			me.elementMouseOver['_136']=true;
			me._text_8.logicBlock_visible();
		}
		me.__136.onmouseout=function (e) {
			me.elementMouseOver['_136']=false;
			me._text_8.logicBlock_visible();
		}
		me.__136.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_136']) {
				me.elementMouseOver['_136']=true;
				me._text_8.logicBlock_visible();
			}
		}
		me.__136.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_8=document.createElement('div');
		els=me._text_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_8.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2eb\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_8.ggUpdateText();
		el.appendChild(els);
		me._text_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_136'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_8.style.transition='';
				if (me._text_8.ggCurrentLogicStateVisible == 0) {
					me._text_8.style.visibility=(Number(me._text_8.style.opacity)>0||!me._text_8.style.opacity)?'inherit':'hidden';
					me._text_8.ggVisible=true;
				}
				else {
					me._text_8.style.visibility="hidden";
					me._text_8.ggVisible=false;
				}
			}
		}
		me._text_8.logicBlock_visible();
		me._text_8.ggUpdatePosition=function (useTransition) {
		}
		me.__136.appendChild(me._text_8);
		me.__133.appendChild(me.__136);
		el=me.__134=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__134.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__134.ggUpdatePosition=function (useTransition) {
		}
		el=me.__135=document.createElement('div');
		els=me.__135__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub354\ubcf4\uae30 \uc0c1\uc138";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 89%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all\"';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__135.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\/\ubaa8\ub378\uba85<\/b>\nDermaAKNE\/\ubc94\uc6a9\uc804\uae30\uc218\uc220\uae30\n\n<b>*\ubcf8\uccb4<\/b>\n-\uc911\ub7c9 : 35kg\n\n<b>*\ubc94\uc6a9\uc804\uae30\uc218\uc220\uae30<\/b>\n- \ud658\uc790\uc5d0\uac8c \uace0\uc8fc\ud30c(RF)\uc5d0\ub108\uc9c0\ub97c \ud758\ub824\ubcf4\ub0b4 \uc138\ud3ec\uc870\uc9c1\uc744 \uc751\uace0\uc2dc\ud0a4\ub294 \uae30\uad6c\n- \uace0\uc8fc\ud30c \ucd9c\ub825\uc758 \uc5d0\ub108\uc9c0 \uc124\uc815\uac00\ub2a5(1~10)\n- \uace0\uc8fc\ud30c \ucd9c\ub825\uc2dc\uac04 \uc124\uc815\uac00\ub2a5(50msec~200msec, 300msec, 400msec+10%)\n\n<b>*\uace0\uc8fc\ud30c\uc790\uadf9\uae30<\/b>\n- \ud658\uc790\uc5d0\uac8c \uace0\uc8fc\ud30c(RF)\uc5d0\ub108\uc9c0\ub97c \uac00\ud558\uc5ec \uc0dd\uccb4\uc5f4\uc744 \ubc1c\uc0dd \ud1b5\uc99d\uc744 \uc644\ud654\uc2dc\ud0a4\ub294 \uae30\uad6c\n- \uace0\uc8fc\ud30c \ucd9c\ub825\uc2dc\uac04 \uc124\uc815\uac00\ub2a5(High, Middle, Low)\n- \ucd9c\ub825\uc2dc\uac04 \uc124\uc815\uac00\ub2a5(5\/10\/15\/20\ubd84)\n\n<b>*\ud384\uc2a4\uad11\uc120\uc870\uc0ac\uae30<\/b>\n- \ud658\uc790\uc5d0\uac8c \ud384\uc2a4 \ud615\ud0dc\uc758 \ube5b\uc758 \ud30c\uc7a5\uc744 \uc870\uc0ac\ud558\uc5ec \ud53c\ubd80\uc9c8\ud658\uc744 \uce58\ub8cc\ud558\ub294 \uae30\uad6c\n- \ube5b\uc758 \ucd9c\ub825 \ud06c\uae30\ub97c \uc124\uc815\uac00\ub2a5(1~9Level)\n- Vacuum\uc758 \uac15\ub3c4 \uc124\uc815\uac00\ub2a5(S1,S2,V1,V2)\n- \ube5b\uc758 \ucd9c\ub825\ubc29\uc2dd, \ubc18\ubcf5\ud69f\uc218, \ubc18\ubcf5\uc2dc\uac04 \uc124\uc815\uac00\ub2a5\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__135.ggUpdateText();
		el.appendChild(els);
		me.__135.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__135.ggUpdatePosition=function (useTransition) {
		}
		me.__134.appendChild(me.__135);
		me.__133.appendChild(me.__134);
		me.__15.appendChild(me.__133);
		el=me.__17=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__17.style.transition='';
				if (me.__17.ggCurrentLogicStateVisible == 0) {
					me.__17.style.visibility="hidden";
					me.__17.ggVisible=false;
				}
				else {
					me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
					me.__17.ggVisible=true;
				}
			}
		}
		me.__17.logicBlock_visible();
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		el.ggId="\uc124\uba85\ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 678px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me.__132=document.createElement('div');
		els=me.__132__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 2px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__132.ggUpdateText=function() {
			var params = [];
			var hs = player._("DermaAKNE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__132.ggUpdateText();
		el.appendChild(els);
		me.__132.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__132.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me.__132);
		el=me.__130=document.createElement('div');
		els=me.__130__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__130.ggUpdateText=function() {
			var params = [];
			var hs = player._("DermaAKNE\ub294 \uc911\ub4f1\uc99d \ub610\ub294 \uc911\uc99d \uc5ec\ub4dc\ub984 \uc644\ud654\uc5d0 \n\ubcf4\uc870\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \uc758\ub8cc\uae30\uae30 \uc785\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__130.ggUpdateText();
		el.appendChild(els);
		me.__130.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__130.ggUpdatePosition=function (useTransition) {
		}
		el=me.__131=document.createElement('div');
		els=me.__131__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc138\ubd80\uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__131.ggUpdateText=function() {
			var params = [];
			var hs = player._("IPL\uacfc RF \uae30\uc220\uc744 \uc774\uc6a9\ud558\uc5ec \uc120\ud0dd\uc801 \uc5ec\ub4dc\ub984 \uc99d\uc0c1 \uac1c\uc120\uc5d0 \ubcf4\uc870\uc801\uc73c\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__131.ggUpdateText();
		el.appendChild(els);
		me.__131.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__131.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 231px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\/\ubaa8\ub378\uba85<\/b>\nDermaAKNE\/\ubc94\uc6a9\uc804\uae30\uc218\uc220\uae30\n\n<b>*\ubcf8\uccb4<\/b>\n-\uc911\ub7c9 : 35kg\n\n<b>*\ubc94\uc6a9\uc804\uae30\uc218\uc220\uae30<\/b>\n- \ud658\uc790\uc5d0\uac8c \uace0\uc8fc\ud30c(RF)\uc5d0\ub108\uc9c0\ub97c \ud758\ub824\ubcf4\ub0b4 \uc138\ud3ec\uc870\uc9c1\uc744 \uc751\uace0\uc2dc\ud0a4\ub294 \uae30\uad6c\n- \uace0\uc8fc\ud30c \ucd9c\ub825\uc758 \uc5d0\ub108\uc9c0 \uc124\uc815\uac00\ub2a5(1~10)\n- \uace0\uc8fc\ud30c \ucd9c\ub825\uc2dc\uac04 \uc124\uc815\uac00\ub2a5(50msec~200msec, 300msec, 400msec+10%)\n\n<b>*\uace0\uc8fc\ud30c\uc790\uadf9\uae30<\/b>\n- \ud658\uc790\uc5d0\uac8c \uace0\uc8fc\ud30c(RF)\uc5d0\ub108\uc9c0\ub97c \uac00\ud558\uc5ec \uc0dd\uccb4\uc5f4\uc744 \ubc1c\uc0dd \ud1b5\uc99d\uc744 \uc644\ud654\uc2dc\ud0a4\ub294 \uae30\uad6c\n- \uace0\uc8fc\ud30c \ucd9c\ub825\uc2dc\uac04 \uc124\uc815\uac00\ub2a5(High, Middle, Low)\n- \ucd9c\ub825\uc2dc\uac04 \uc124\uc815\uac00\ub2a5(5\/10\/15\/20\ubd84)\n\n<b>*\ud384\uc2a4\uad11\uc120\uc870\uc0ac\uae30<\/b>\n- \ud658\uc790\uc5d0\uac8c \ud384\uc2a4 \ud615\ud0dc\uc758 \ube5b\uc758 \ud30c\uc7a5\uc744 \uc870\uc0ac\ud558\uc5ec \ud53c\ubd80\uc9c8\ud658\uc744 \uce58\ub8cc\ud558\ub294 \uae30\uad6c\n- \ube5b\uc758 \ucd9c\ub825 \ud06c\uae30\ub97c \uc124\uc815\uac00\ub2a5(1~9Level)\n- Vacuum\uc758 \uac15\ub3c4 \uc124\uc815\uac00\ub2a5(S1,S2,V1,V2)\n- \ube5b\uc758 \ucd9c\ub825\ubc29\uc2dd, \ubc18\ubcf5\ud69f\uc218, \ubc18\ubcf5\uc2dc\uac04 \uc124\uc815\uac00\ub2a5\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me.__131.appendChild(me._text_3);
		me.__130.appendChild(me.__131);
		me.__19.appendChild(me.__130);
		me.__17.appendChild(me.__19);
		el=me.__18=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 133.323%;';
		hs+='left : calc(50% - ((58.24% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((133.323% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 58.24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_2.style.transition='width 0s, height 0s';
				if (me._image_2.ggCurrentLogicStateSize == 0) {
					me._image_2.style.width='150%';
					me._image_2.style.height='100%';
					me._image_2.style.left = 'calc(50% - (150% / 2))';
					me._image_2.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me._image_2);
				}
				else {
					me._image_2.style.width='58.24%';
					me._image_2.style.height='133.323%';
					me._image_2.style.left = 'calc(50% - (58.24% / 2))';
					me._image_2.style.top = 'calc(50% - (133.323% / 2))';
					skin.updateSize(me._image_2);
				}
			}
		}
		me._image_2.logicBlock_size();
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me._image_2);
		me.__17.appendChild(me.__18);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 20px 15px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me._text_2);
		me.__15.appendChild(me.__17);
		el=me.__16=document.createElement('div');
		els=me.__16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__16.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__16.ggUpdateText();
		el.appendChild(els);
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16.style.transition='';
				if (me.__16.ggCurrentLogicStateVisible == 0) {
					me.__16.style.visibility="hidden";
					me.__16.ggVisible=false;
				}
				else {
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
			}
		}
		me.__16.logicBlock_visible();
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		me.__15.appendChild(me.__16);
		me.__0.appendChild(me.__15);
		me.__.appendChild(me.__0);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.onclick=function (e) {
			me.__14.style.transition='none';
			me.__14.style.visibility='hidden';
			me.__14.ggVisible=false;
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me._image_3);
		me.__14.appendChild(me.__);
		me.divSkin.appendChild(me.__14);
		el=me.__20=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5\ucc3d2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__21=document.createElement('div');
		el.ggId="\uc81c\ud488\ud31d\uc5c5\ucc3d \ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5-2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ubc30\uacbd-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me.__211=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc81c\ud488\uc124\uba85-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_42=document.createElement('div');
		els=me._image_42__img=document.createElement('img');
		els.className='ggskin ggskin_image_42';
		hs=basePath + 'images/image_42.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 63.69%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_42.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_52=document.createElement('div');
		els=me._text_52__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : -34px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_52.ggUpdateText=function() {
			var params = [];
			var hs = player._("JILL-SOF", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_52.ggUpdateText();
		el.appendChild(els);
		me._text_52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_52.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_62=document.createElement('div');
		els=me._text_62__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -68px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_62.ggUpdateText=function() {
			var params = [];
			var hs = player._("jill\'sof\ub294\n\uc74c\uc555\uc744 \uc774\uc6a9\ud55c \uc804\ub3d9\uc2dd\uc758\uc57d\ud488\uc8fc\uc785\ud38c\ud504\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_62.ggUpdateText();
		el.appendChild(els);
		me._text_62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_62.ggUpdatePosition=function (useTransition) {
		}
		me._text_52.appendChild(me._text_62);
		me._image_42.appendChild(me._text_52);
		me.__211.appendChild(me._image_42);
		el=me.__216=document.createElement('div');
		els=me.__216__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c\uc138\ubd80\uc815\ubcf4-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__216.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__216.ggUpdateText();
		el.appendChild(els);
		me.__216.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__216.ggUpdatePosition=function (useTransition) {
		}
		me.__211.appendChild(me.__216);
		el=me.__215=document.createElement('div');
		els=me.__215__img=document.createElement('img');
		els.className='ggskin ggskin__215';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5xJREFUeF7tm11S6zAMhe2yIpq8X9hMuwxgGc1m6H1PyoqoGRkcHNeJJVtK3Sl9YYDm53w+UmTF1mqFT9u2T+p8foJLGWP+jZfU2v5NGXOEH1rr//7t9KfTq/TtaYkLWMGg6/PzRTmRmRfSSr3BoVIwWAGAcA7Rs6yMOYJLOGGwABAXHiECzuAAUQTgGsJDFqUgsgDUINwHUQKBDMCKP5/fM3Oa6GF6s3nu+94+UbAfEoB2u301Sr1gT36N71HdgAbALb5pGsunaVs19L0ahoGNFwUCCgCneBC+2++VA+Cr7rpOdYcDCwgshCQAbvGHrlsUuN/t2NyAgbAIgFM8qAbxsZH3iUAoAASuTwrCLADubA/CU6PvRHO6wM4xFp4Osw'+
			'Ca7dZwjQKcB+J+hxxZbgBLEKIAuK1PBcCZDMdBNOY4fHw8RyrJ6Z8kxFcBYCYULhzAbX2HlxICIg6AG4m4YAJAavRrcUAsF0wASI1+TQBCF4wAJEe/KgBBLhgBNI+P76Xtq6XHZhU5wN2glwt+ATA/90MYVQHwXGABSNu/thDwk+HdAnDJ0AKQzP5V1QFBXA6nk9Zr2L/GEHBhQAbgd3IokyU4LjUVdueDKXFOh4jaWYKpMhrAUieHAkL6uwAOukoYgGgAlEeYtEDs+VFTanjThCmAesaGJVZA6fdQnSUMAEonp/SmuY9PusACSFSAt2h/BzIJACrCFIBbdgCmr5DMAbcMIOkATA4AO2Ha2dzxy3G+9uft0+y5sABu0QUo+/8VQoRK0NnIlrRtS3aodCkMZTB8MBWgu/nvSnCl9/2UxynGvuQRiBxgAdz9dNgCEO4H'+
			'1jgddi9NvztCK4RBbSFw9wCgG2SbImN2Fw6DqhwQa4tLh0FNAPxFE9NXY4IuqAmAs/8kBKSTYS0AwiUzl6/HhVxQCwB/9C8cIOmCGgDEFkxFl8hIFEbXBjC3Wiy+RkigMKJMqSXmAqH1vQlRfFrB/VikAEh2cogzoaxlcjYfMC+OxnSWUO1sAoDshZLuGpwQMC7gHP2U+OhTIAaXE8JcMqS80sIYACMeDUAiHFxnKaeTkwKAFU8CIAEhJSTn/xTxZACShVKO2PAY8S0z/gU580KxeOjvPzy8UfcLZTmgKggFwpOFEGVUVncDg3BWAJOaATZHF+4XnoXPKFwEQBge8HvxNrsf0XCunBhPOTm5aSp1Asz/IUT8741b6IPt8zYpuS30m81RQnB4v18pFcebm87ZiwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub354\ud558\uae30-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__215.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__215.onclick=function (e) {
			me.__212.style.transition='none';
			me.__212.style.visibility=(Number(me.__212.style.opacity)>0||!me.__212.style.opacity)?'inherit':'hidden';
			me.__212.ggVisible=true;
			me.__215.style.transition='none';
			me.__215.style.visibility='hidden';
			me.__215.ggVisible=false;
			me.__214.style.transition='none';
			me.__214.style.visibility=(Number(me.__214.style.opacity)>0||!me.__214.style.opacity)?'inherit':'hidden';
			me.__214.ggVisible=true;
		}
		me.__215.onmouseover=function (e) {
			me.elementMouseOver['_215']=true;
			me._text_72.logicBlock_visible();
		}
		me.__215.onmouseout=function (e) {
			me.elementMouseOver['_215']=false;
			me._text_72.logicBlock_visible();
		}
		me.__215.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_215']) {
				me.elementMouseOver['_215']=true;
				me._text_72.logicBlock_visible();
			}
		}
		me.__215.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_72=document.createElement('div');
		els=me._text_72__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7-2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_72.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_72.ggUpdateText();
		el.appendChild(els);
		me._text_72.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_72.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_215'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_72.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_72.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_72.style.transition='';
				if (me._text_72.ggCurrentLogicStateVisible == 0) {
					me._text_72.style.visibility=(Number(me._text_72.style.opacity)>0||!me._text_72.style.opacity)?'inherit':'hidden';
					me._text_72.ggVisible=true;
				}
				else {
					me._text_72.style.visibility="hidden";
					me._text_72.ggVisible=false;
				}
			}
		}
		me._text_72.logicBlock_visible();
		me._text_72.ggUpdatePosition=function (useTransition) {
		}
		me.__215.appendChild(me._text_72);
		me.__211.appendChild(me.__215);
		el=me.__214=document.createElement('div');
		els=me.__214__img=document.createElement('img');
		els.className='ggskin ggskin__214';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAvtJREFUeF7tm1t2gjAQhhP7ZBdR11DhvXYzuIzWZchmtO+ga7CLqE+anomGQghkwqXmAi8eldv/zZ/JEBJK/mGL43hFrtcVXIox9lZcklL+G2FsDx+U0q/y7WSHw+fYt0fHuAAXDLoulw8iRHa8ECVkA4eOBWNQACB8CNGNrBjbg0uGhDEIgNGFK4iAM4YA0QvAI4TLLPqC6ATABuFlEH0gGAPg4q/XXcecNuphdDZ7z7KM9yjYzQhAvFx+MkI+sCd/xH6mbkADcEG8AG4CAQXAJfGmELQAXBRvAqEVgMvisRAaAdic7U2Ta1vv0AggWi6Z6YVs3r8JghKAD9avBYOxfX48visqyepPXoq/S1S5oOYA36xfCa/CBRUAPke/6B'+
			'WkcrkCwOvoCwKSCwoAIURf5YICQPT6uus7fGVzN9iUC/4AeNbv64IhegQOICT7y80gWAAwFA+FEQcQRPZXtIn8cKA0RPuXm4ExgCiKSJ7nuhzzkP9fFgvyfTqhrw0jR2gAIDxZrwl82rxBcNLtFhUkNAAQniSJzbpr97ZOEj0EeNOEKYAySy3fFhFwAkBo3TAAwPLbNHUq+uJmtS7gADQVoIv2RwOAV/I6AC47IE1TnhDbNm0OcBkArgkgngIhB9je/amiHOu6bEwS5KWyg4kQZf+pEDKoBIXFbC6Fn+dz8nM+o7vsWyVo8ft+tJKOO3IAwT8OcwCInqAjZGsPE3MIbiNCATaD4AHAaBAEfxoWF400pGZQnkNUfTUWSDIU9q80gVCSoTyDrP563HMXlKNfc4DvLlDNH1ROkfGxMGqaPKmeI+RhYSRbX/R+0zS5tmLd'+
			'h9dmunnD01RZzOOai07QRV6bA2QwLkHAilfWAa7nBBPxxgBsL5RGXzJTdodVTQLG95+eNqbrhTo5wCoIPYQbJ0GrcsMAwgcFUAyqwKoyWBzdc71wI+wBhY8CQG4e8L33Mru7aDhXlzauq3O0laDuBJj/IWGW9yuW0EvL53lSEkvoZ7P9GILl+/0FIEjgjMT80c8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ube7c\uae30-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__214.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__214.onclick=function (e) {
			me.__215.style.transition='none';
			me.__215.style.visibility=(Number(me.__215.style.opacity)>0||!me.__215.style.opacity)?'inherit':'hidden';
			me.__215.ggVisible=true;
			me.__214.style.transition='none';
			me.__214.style.visibility='hidden';
			me.__214.ggVisible=false;
			me.__212.style.transition='none';
			me.__212.style.visibility='hidden';
			me.__212.ggVisible=false;
		}
		me.__214.onmouseover=function (e) {
			me.elementMouseOver['_214']=true;
			me._text_82.logicBlock_visible();
		}
		me.__214.onmouseout=function (e) {
			me.elementMouseOver['_214']=false;
			me._text_82.logicBlock_visible();
		}
		me.__214.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_214']) {
				me.elementMouseOver['_214']=true;
				me._text_82.logicBlock_visible();
			}
		}
		me.__214.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_82=document.createElement('div');
		els=me._text_82__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8-2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_82.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2eb\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_82.ggUpdateText();
		el.appendChild(els);
		me._text_82.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_82.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_214'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_82.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_82.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_82.style.transition='';
				if (me._text_82.ggCurrentLogicStateVisible == 0) {
					me._text_82.style.visibility=(Number(me._text_82.style.opacity)>0||!me._text_82.style.opacity)?'inherit':'hidden';
					me._text_82.ggVisible=true;
				}
				else {
					me._text_82.style.visibility="hidden";
					me._text_82.ggVisible=false;
				}
			}
		}
		me._text_82.logicBlock_visible();
		me._text_82.ggUpdatePosition=function (useTransition) {
		}
		me.__214.appendChild(me._text_82);
		me.__211.appendChild(me.__214);
		el=me.__212=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ubc30\uacbd-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__212.ggUpdatePosition=function (useTransition) {
		}
		el=me.__213=document.createElement('div');
		els=me.__213__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub354\ubcf4\uae30 \uc0c1\uc138-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 89%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all\"';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__213.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\/\ubaa8\ub378\uba85<\/b>\n\uc804\ub3d9\uc2dd\uc758\uc57d\ud488\uc8fc\uc785\ud38c\ud504\/Panace-Ds-52\n\n<b>*\ubcf8\uccb4<\/b>\n- \uc758\uc57d\ud488\uc744 \ud658\uc790\uc5d0\uac8c \uc77c\uc815\ub7c9 \uc8fc\uc785\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uae30\uad6c\n- \ud761\uc778\uc7a5\uce58\n- \ud761\uc785\uc555\ub825 \uc120\ud0dd \uac00\ub2a5\n- \uc911\ub7c9: 3.4Kg\n\n<b>*Injector<\/b>\n- \ubcf8\uccb4\ub85c\ubd80\ud130 \uc804\uc6d0\uc744 \uacf5\uae09\ubc1b\uc544 \uc758\uc57d\ud488\uc744 \uc8fc\uc785\ud558\ub294 \uc7a5\uce58\n- \uac01 \ubaa8\ub4dc\uc5d0 \ub530\ub77c \ud53c\uc2a4\ud1a4\ud640\ub354\uc758 \uc804\uc9c4 \uc18d\ub3c4 \ubc0f \uac70\ub9ac\ub97c \uc870\uc815\ud574 \ubcf8\uccb4\uc5d0 \uc7a5\ucc29\ub41c \uc8fc\uc0ac\uae30 \uc2e4\ub9b0\uc9c0\uc758 \ud22c\uc785\ub7c9\uc744 \uc870\uc808\n- 1ml, 3ml, 5ml \uc2e4\ub9b0\uc9c0 \uc0ac\uc6a9 \uac00\ub2a5\n- \uc911\ub7c9 : 364g", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__213.ggUpdateText();
		el.appendChild(els);
		me.__213.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__213.ggUpdatePosition=function (useTransition) {
		}
		me.__212.appendChild(me.__213);
		me.__211.appendChild(me.__212);
		me.__23.appendChild(me.__211);
		el=me.__25=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__25.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__25.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__25.style.transition='';
				if (me.__25.ggCurrentLogicStateVisible == 0) {
					me.__25.style.visibility="hidden";
					me.__25.ggVisible=false;
				}
				else {
					me.__25.style.visibility=(Number(me.__25.style.opacity)>0||!me.__25.style.opacity)?'inherit':'hidden';
					me.__25.ggVisible=true;
				}
			}
		}
		me.__25.logicBlock_visible();
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me.__27=document.createElement('div');
		el.ggId="\uc124\uba85\ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 678px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		els=me.__210__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 2px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__210.ggUpdateText=function() {
			var params = [];
			var hs = player._("JILL-SOF", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__210.ggUpdateText();
		el.appendChild(els);
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me.__210);
		el=me.__28=document.createElement('div');
		els=me.__28__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc124\uba85-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__28.ggUpdateText=function() {
			var params = [];
			var hs = player._("jill\'sof\ub294\n\uc74c\uc555\uc744 \uc774\uc6a9\ud55c \uc804\ub3d9\uc2dd\uc758\uc57d\ud488\uc8fc\uc785\ud38c\ud504\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__28.ggUpdateText();
		el.appendChild(els);
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me.__29=document.createElement('div');
		els=me.__29__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc138\ubd80\uc124\uba85-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -35px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__29.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc555\ub825 \uac10\uc9c0 \ud6c4 4\uac1c\uc758 \ub2c8\ub4e4\ub85c \uad6c\uc131\ub41c \uc758\uc57d\ud488\uc9c1\uc811\uc8fc\uc785\uae30\uad6c\ub97c \ud1b5\ud574 \uc2dc\uc220 \ubc94\uc704\uc5d0 \ud6a8\uacfc\uc801\uc73c\ub85c \uc57d\ubb3c\uc774 \uc8fc\uc785\ub420 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__29.ggUpdateText();
		el.appendChild(els);
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_32=document.createElement('div');
		els=me._text_32__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 231px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_32.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\/\ubaa8\ub378\uba85<\/b>\n\uc804\ub3d9\uc2dd\uc758\uc57d\ud488\uc8fc\uc785\ud38c\ud504\/Panace-Ds-52\n\n<b>*\ubcf8\uccb4<\/b>\n- \uc758\uc57d\ud488\uc744 \ud658\uc790\uc5d0\uac8c \uc77c\uc815\ub7c9 \uc8fc\uc785\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uae30\uad6c\n- \ud761\uc778\uc7a5\uce58\n- \ud761\uc785\uc555\ub825 \uc120\ud0dd \uac00\ub2a5\n- \uc911\ub7c9: 3.4Kg\n\n<b>*Injector<\/b>\n- \ubcf8\uccb4\ub85c\ubd80\ud130 \uc804\uc6d0\uc744 \uacf5\uae09\ubc1b\uc544 \uc758\uc57d\ud488\uc744 \uc8fc\uc785\ud558\ub294 \uc7a5\uce58\n- \uac01 \ubaa8\ub4dc\uc5d0 \ub530\ub77c \ud53c\uc2a4\ud1a4\ud640\ub354\uc758 \uc804\uc9c4 \uc18d\ub3c4 \ubc0f \uac70\ub9ac\ub97c \uc870\uc815\ud574 \ubcf8\uccb4\uc5d0 \uc7a5\ucc29\ub41c \uc8fc\uc0ac\uae30 \uc2e4\ub9b0\uc9c0\uc758 \ud22c\uc785\ub7c9\uc744 \uc870\uc808\n- 1ml, 3ml, 5ml \uc2e4\ub9b0\uc9c0 \uc0ac\uc6a9 \uac00\ub2a5\n- \uc911\ub7c9 : 364g", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_32.ggUpdateText();
		el.appendChild(els);
		me._text_32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_32.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me._text_32);
		me.__28.appendChild(me.__29);
		me.__27.appendChild(me.__28);
		me.__25.appendChild(me.__27);
		el=me.__26=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_22=document.createElement('div');
		els=me._image_22__img=document.createElement('img');
		els.className='ggskin ggskin_image_22';
		hs=basePath + 'images/image_22.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 133.323%;';
		hs+='left : calc(50% - ((77.24% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((133.323% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 77.24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_22.ggUpdatePosition=function (useTransition) {
		}
		me.__26.appendChild(me._image_22);
		me.__25.appendChild(me.__26);
		el=me._text_22=document.createElement('div');
		els=me._text_22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 20px 15px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_22.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_22.ggUpdateText();
		el.appendChild(els);
		me._text_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_22.ggUpdatePosition=function (useTransition) {
		}
		me.__25.appendChild(me._text_22);
		me.__23.appendChild(me.__25);
		el=me.__24=document.createElement('div');
		els=me.__24__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__24.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__24.ggUpdateText();
		el.appendChild(els);
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__24.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__24.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__24.style.transition='';
				if (me.__24.ggCurrentLogicStateVisible == 0) {
					me.__24.style.visibility="hidden";
					me.__24.ggVisible=false;
				}
				else {
					me.__24.style.visibility=(Number(me.__24.style.opacity)>0||!me.__24.style.opacity)?'inherit':'hidden';
					me.__24.ggVisible=true;
				}
			}
		}
		me.__24.logicBlock_visible();
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me.__23.appendChild(me.__24);
		me.__22.appendChild(me.__23);
		me.__21.appendChild(me.__22);
		el=me._image_32=document.createElement('div');
		els=me._image_32__img=document.createElement('img');
		els.className='ggskin ggskin_image_32';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_32.onclick=function (e) {
			me.__20.style.transition='none';
			me.__20.style.visibility='hidden';
			me.__20.ggVisible=false;
		}
		me._image_32.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me._image_32);
		me.__20.appendChild(me.__21);
		me.divSkin.appendChild(me.__20);
		el=me.__30=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5\ucc3d3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__31=document.createElement('div');
		el.ggId="\uc81c\ud488\ud31d\uc5c5\ucc3d \ubc30\uacbd3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5-3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ubc30\uacbd-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me.__311=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc81c\ud488\uc124\uba85-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__311.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__311.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_43=document.createElement('div');
		els=me._image_43__img=document.createElement('img');
		els.className='ggskin ggskin_image_43';
		hs=basePath + 'images/image_43.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 63.69%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_43.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_53=document.createElement('div');
		els=me._text_53__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : -34px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_53.ggUpdateText=function() {
			var params = [];
			var hs = player._("Dermashine PRO", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_53.ggUpdateText();
		el.appendChild(els);
		me._text_53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_53.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_63=document.createElement('div');
		els=me._text_63__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -68px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_63.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc555\ub825 \uac10\uc9c0 \uc790\ub3d9\uc8fc\uc0ac \ubaa8\ub4dc(Auto-Sensing)\uc774 9\uac1c\uc758 \ubbf8\uc138 \ub2c8\ub4e4\ub85c \uad6c\uc131\ub41c \uba78\uade0 \uc8fc\uc0ac\uce68\uacfc \ud53c\ubd80  \ud45c\uba74 \uc0ac\uc774\ub97c \ubc00\ucc29\uc2dc\ucf1c \uc2dc\uc220 \ubc94\uc704\uc5d0 \ud6a8\uacfc\uc801\uc73c\ub85c \uc57d\ubb3c\uc774 \uc8fc\uc785\ub420 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4.  ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_63.ggUpdateText();
		el.appendChild(els);
		me._text_63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_63.ggUpdatePosition=function (useTransition) {
		}
		me._text_53.appendChild(me._text_63);
		me._image_43.appendChild(me._text_53);
		me.__311.appendChild(me._image_43);
		el=me.__316=document.createElement('div');
		els=me.__316__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c\uc138\ubd80\uc815\ubcf4-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__316.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__316.ggUpdateText();
		el.appendChild(els);
		me.__316.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__316.ggUpdatePosition=function (useTransition) {
		}
		me.__311.appendChild(me.__316);
		el=me.__315=document.createElement('div');
		els=me.__315__img=document.createElement('img');
		els.className='ggskin ggskin__315';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5xJREFUeF7tm11S6zAMhe2yIpq8X9hMuwxgGc1m6H1PyoqoGRkcHNeJJVtK3Sl9YYDm53w+UmTF1mqFT9u2T+p8foJLGWP+jZfU2v5NGXOEH1rr//7t9KfTq/TtaYkLWMGg6/PzRTmRmRfSSr3BoVIwWAGAcA7Rs6yMOYJLOGGwABAXHiECzuAAUQTgGsJDFqUgsgDUINwHUQKBDMCKP5/fM3Oa6GF6s3nu+94+UbAfEoB2u301Sr1gT36N71HdgAbALb5pGsunaVs19L0ahoGNFwUCCgCneBC+2++VA+Cr7rpOdYcDCwgshCQAbvGHrlsUuN/t2NyAgbAIgFM8qAbxsZH3iUAoAASuTwrCLADubA/CU6PvRHO6wM4xFp4Osw'+
			'Ca7dZwjQKcB+J+hxxZbgBLEKIAuK1PBcCZDMdBNOY4fHw8RyrJ6Z8kxFcBYCYULhzAbX2HlxICIg6AG4m4YAJAavRrcUAsF0wASI1+TQBCF4wAJEe/KgBBLhgBNI+P76Xtq6XHZhU5wN2glwt+ATA/90MYVQHwXGABSNu/thDwk+HdAnDJ0AKQzP5V1QFBXA6nk9Zr2L/GEHBhQAbgd3IokyU4LjUVdueDKXFOh4jaWYKpMhrAUieHAkL6uwAOukoYgGgAlEeYtEDs+VFTanjThCmAesaGJVZA6fdQnSUMAEonp/SmuY9PusACSFSAt2h/BzIJACrCFIBbdgCmr5DMAbcMIOkATA4AO2Ha2dzxy3G+9uft0+y5sABu0QUo+/8VQoRK0NnIlrRtS3aodCkMZTB8MBWgu/nvSnCl9/2UxynGvuQRiBxgAdz9dNgCEO4H'+
			'1jgddi9NvztCK4RBbSFw9wCgG2SbImN2Fw6DqhwQa4tLh0FNAPxFE9NXY4IuqAmAs/8kBKSTYS0AwiUzl6/HhVxQCwB/9C8cIOmCGgDEFkxFl8hIFEbXBjC3Wiy+RkigMKJMqSXmAqH1vQlRfFrB/VikAEh2cogzoaxlcjYfMC+OxnSWUO1sAoDshZLuGpwQMC7gHP2U+OhTIAaXE8JcMqS80sIYACMeDUAiHFxnKaeTkwKAFU8CIAEhJSTn/xTxZACShVKO2PAY8S0z/gU580KxeOjvPzy8UfcLZTmgKggFwpOFEGVUVncDg3BWAJOaATZHF+4XnoXPKFwEQBge8HvxNrsf0XCunBhPOTm5aSp1Asz/IUT8741b6IPt8zYpuS30m81RQnB4v18pFcebm87ZiwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub354\ud558\uae30-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__315.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__315.onclick=function (e) {
			me.__312.style.transition='none';
			me.__312.style.visibility=(Number(me.__312.style.opacity)>0||!me.__312.style.opacity)?'inherit':'hidden';
			me.__312.ggVisible=true;
			me.__315.style.transition='none';
			me.__315.style.visibility='hidden';
			me.__315.ggVisible=false;
			me.__314.style.transition='none';
			me.__314.style.visibility=(Number(me.__314.style.opacity)>0||!me.__314.style.opacity)?'inherit':'hidden';
			me.__314.ggVisible=true;
		}
		me.__315.onmouseover=function (e) {
			me.elementMouseOver['_315']=true;
			me._text_73.logicBlock_visible();
		}
		me.__315.onmouseout=function (e) {
			me.elementMouseOver['_315']=false;
			me._text_73.logicBlock_visible();
		}
		me.__315.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_315']) {
				me.elementMouseOver['_315']=true;
				me._text_73.logicBlock_visible();
			}
		}
		me.__315.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_73=document.createElement('div');
		els=me._text_73__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7-3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_73.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_73.ggUpdateText();
		el.appendChild(els);
		me._text_73.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_73.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_315'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_73.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_73.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_73.style.transition='';
				if (me._text_73.ggCurrentLogicStateVisible == 0) {
					me._text_73.style.visibility=(Number(me._text_73.style.opacity)>0||!me._text_73.style.opacity)?'inherit':'hidden';
					me._text_73.ggVisible=true;
				}
				else {
					me._text_73.style.visibility="hidden";
					me._text_73.ggVisible=false;
				}
			}
		}
		me._text_73.logicBlock_visible();
		me._text_73.ggUpdatePosition=function (useTransition) {
		}
		me.__315.appendChild(me._text_73);
		me.__311.appendChild(me.__315);
		el=me.__314=document.createElement('div');
		els=me.__314__img=document.createElement('img');
		els.className='ggskin ggskin__314';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAvtJREFUeF7tm1t2gjAQhhP7ZBdR11DhvXYzuIzWZchmtO+ga7CLqE+anomGQghkwqXmAi8eldv/zZ/JEBJK/mGL43hFrtcVXIox9lZcklL+G2FsDx+U0q/y7WSHw+fYt0fHuAAXDLoulw8iRHa8ECVkA4eOBWNQACB8CNGNrBjbg0uGhDEIgNGFK4iAM4YA0QvAI4TLLPqC6ATABuFlEH0gGAPg4q/XXcecNuphdDZ7z7KM9yjYzQhAvFx+MkI+sCd/xH6mbkADcEG8AG4CAQXAJfGmELQAXBRvAqEVgMvisRAaAdic7U2Ta1vv0AggWi6Z6YVs3r8JghKAD9avBYOxfX48visqyepPXoq/S1S5oOYA36xfCa/CBRUAPke/6B'+
			'WkcrkCwOvoCwKSCwoAIURf5YICQPT6uus7fGVzN9iUC/4AeNbv64IhegQOICT7y80gWAAwFA+FEQcQRPZXtIn8cKA0RPuXm4ExgCiKSJ7nuhzzkP9fFgvyfTqhrw0jR2gAIDxZrwl82rxBcNLtFhUkNAAQniSJzbpr97ZOEj0EeNOEKYAySy3fFhFwAkBo3TAAwPLbNHUq+uJmtS7gADQVoIv2RwOAV/I6AC47IE1TnhDbNm0OcBkArgkgngIhB9je/amiHOu6bEwS5KWyg4kQZf+pEDKoBIXFbC6Fn+dz8nM+o7vsWyVo8ft+tJKOO3IAwT8OcwCInqAjZGsPE3MIbiNCATaD4AHAaBAEfxoWF400pGZQnkNUfTUWSDIU9q80gVCSoTyDrP563HMXlKNfc4DvLlDNH1ROkfGxMGqaPKmeI+RhYSRbX/R+0zS5tmLd'+
			'h9dmunnD01RZzOOai07QRV6bA2QwLkHAilfWAa7nBBPxxgBsL5RGXzJTdodVTQLG95+eNqbrhTo5wCoIPYQbJ0GrcsMAwgcFUAyqwKoyWBzdc71wI+wBhY8CQG4e8L33Mru7aDhXlzauq3O0laDuBJj/IWGW9yuW0EvL53lSEkvoZ7P9GILl+/0FIEjgjMT80c8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ube7c\uae30-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__314.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__314.onclick=function (e) {
			me.__315.style.transition='none';
			me.__315.style.visibility=(Number(me.__315.style.opacity)>0||!me.__315.style.opacity)?'inherit':'hidden';
			me.__315.ggVisible=true;
			me.__314.style.transition='none';
			me.__314.style.visibility='hidden';
			me.__314.ggVisible=false;
			me.__312.style.transition='none';
			me.__312.style.visibility='hidden';
			me.__312.ggVisible=false;
		}
		me.__314.onmouseover=function (e) {
			me.elementMouseOver['_314']=true;
			me._text_83.logicBlock_visible();
		}
		me.__314.onmouseout=function (e) {
			me.elementMouseOver['_314']=false;
			me._text_83.logicBlock_visible();
		}
		me.__314.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_314']) {
				me.elementMouseOver['_314']=true;
				me._text_83.logicBlock_visible();
			}
		}
		me.__314.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_83=document.createElement('div');
		els=me._text_83__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8-3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_83.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2eb\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_83.ggUpdateText();
		el.appendChild(els);
		me._text_83.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_83.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_314'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_83.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_83.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_83.style.transition='';
				if (me._text_83.ggCurrentLogicStateVisible == 0) {
					me._text_83.style.visibility=(Number(me._text_83.style.opacity)>0||!me._text_83.style.opacity)?'inherit':'hidden';
					me._text_83.ggVisible=true;
				}
				else {
					me._text_83.style.visibility="hidden";
					me._text_83.ggVisible=false;
				}
			}
		}
		me._text_83.logicBlock_visible();
		me._text_83.ggUpdatePosition=function (useTransition) {
		}
		me.__314.appendChild(me._text_83);
		me.__311.appendChild(me.__314);
		el=me.__312=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ubc30\uacbd-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__312.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__312.ggUpdatePosition=function (useTransition) {
		}
		el=me.__313=document.createElement('div');
		els=me.__313__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub354\ubcf4\uae30 \uc0c1\uc138-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 89%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all\"';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__313.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\/\ubaa8\ub378\uba85<\/b>\n\uc804\ub3d9\uc2dd\uc758\uc57d\ud488\uc8fc\uc785\ud38c\ud504\/Panace-Ds-51\n\n<b>*\ubcf8\uccb4<\/b>\n- \uc758\uc57d\ud488\uc744 \ud658\uc790\uc5d0\uac8c \uc77c\uc815\ub7c9 \uc8fc\uc785\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uae30\uad6c\n- \ud761\uc778\uc7a5\uce58\n- \ud761\uc785\uc555\ub825 \uc120\ud0dd \uac00\ub2a5\n- \uc911\ub7c9: 3.4Kg\n\n<b>*Injector<\/b>\n- \ubcf8\uccb4\ub85c\ubd80\ud130 \uc804\uc6d0\uc744 \uacf5\uae09\ubc1b\uc544 \uc758\uc57d\ud488\uc744 \uc8fc\uc785\ud558\ub294 \uc7a5\uce58\n- \uac01 \ubaa8\ub4dc\uc5d0 \ub530\ub77c \ud53c\uc2a4\ud1a4\ud640\ub354\uc758 \uc804\uc9c4 \uc18d\ub3c4 \ubc0f \uac70\ub9ac\ub97c \uc870\uc815\ud574 \ubcf8\uccb4\uc5d0 \uc7a5\ucc29\ub41c \uc8fc\uc0ac\uae30      \uc2e4\ub9b0\uc9c0\uc758 \ud22c\uc785\ub7c9\uc744 \uc870\uc808\n- 1ml, 3ml, 5ml \uc2e4\ub9b0\uc9c0 \uc0ac\uc6a9 \uac00\ub2a5\n- \uc911\ub7c9 : 158g", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__313.ggUpdateText();
		el.appendChild(els);
		me.__313.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__313.ggUpdatePosition=function (useTransition) {
		}
		me.__312.appendChild(me.__313);
		me.__311.appendChild(me.__312);
		me.__34.appendChild(me.__311);
		el=me.__35=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__35.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__35.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__35.style.transition='';
				if (me.__35.ggCurrentLogicStateVisible == 0) {
					me.__35.style.visibility="hidden";
					me.__35.ggVisible=false;
				}
				else {
					me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
					me.__35.ggVisible=true;
				}
			}
		}
		me.__35.logicBlock_visible();
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me.__37=document.createElement('div');
		el.ggId="\uc124\uba85\ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 678px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me.__310=document.createElement('div');
		els=me.__310__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 2px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__310.ggUpdateText=function() {
			var params = [];
			var hs = player._("Dermashine PRO", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__310.ggUpdateText();
		el.appendChild(els);
		me.__310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__310.ggUpdatePosition=function (useTransition) {
		}
		me.__37.appendChild(me.__310);
		el=me.__38=document.createElement('div');
		els=me.__38__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc124\uba85-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__38.ggUpdateText=function() {
			var params = [];
			var hs = player._("Dermashine PRO\ub294\n\uc74c\uc555\uc744 \uc774\uc6a9\ud55c \uc804\ub3d9\uc2dd \uc758\uc57d\ud488\uc8fc\uc785\ud38c\ud504\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__38.ggUpdateText();
		el.appendChild(els);
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me.__39=document.createElement('div');
		els=me.__39__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc138\ubd80\uc124\uba85-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -35px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__39.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc555\ub825 \uac10\uc9c0 \uc790\ub3d9\uc8fc\uc0ac \ubaa8\ub4dc(Auto-Sensing)\uc774 9\uac1c\uc758 \ubbf8\uc138 \ub2c8\ub4e4\ub85c \uad6c\uc131\ub41c \uba78\uade0 \uc8fc\uc0ac\uce68\uacfc \ud53c\ubd80  \ud45c\uba74 \uc0ac\uc774\ub97c \ubc00\ucc29\uc2dc\ucf1c \uc2dc\uc220 \ubc94\uc704\uc5d0 \ud6a8\uacfc\uc801\uc73c\ub85c \uc57d\ubb3c\uc774 \uc8fc\uc785\ub420 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4.  ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__39.ggUpdateText();
		el.appendChild(els);
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_33=document.createElement('div');
		els=me._text_33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 231px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_33.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\/\ubaa8\ub378\uba85<\/b>\n\uc804\ub3d9\uc2dd\uc758\uc57d\ud488\uc8fc\uc785\ud38c\ud504\/Panace-Ds-51\n\n<b>*\ubcf8\uccb4<\/b>\n- \uc758\uc57d\ud488\uc744 \ud658\uc790\uc5d0\uac8c \uc77c\uc815\ub7c9 \uc8fc\uc785\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uae30\uad6c\n- \ud761\uc778\uc7a5\uce58\n- \ud761\uc785\uc555\ub825 \uc120\ud0dd \uac00\ub2a5\n- \uc911\ub7c9: 3.4Kg\n\n<b>*Injector<\/b>\n- \ubcf8\uccb4\ub85c\ubd80\ud130 \uc804\uc6d0\uc744 \uacf5\uae09\ubc1b\uc544 \uc758\uc57d\ud488\uc744 \uc8fc\uc785\ud558\ub294 \uc7a5\uce58\n- \uac01 \ubaa8\ub4dc\uc5d0 \ub530\ub77c \ud53c\uc2a4\ud1a4\ud640\ub354\uc758 \uc804\uc9c4 \uc18d\ub3c4 \ubc0f \uac70\ub9ac\ub97c \uc870\uc815\ud574 \ubcf8\uccb4\uc5d0 \uc7a5\ucc29\ub41c \uc8fc\uc0ac\uae30      \uc2e4\ub9b0\uc9c0\uc758 \ud22c\uc785\ub7c9\uc744 \uc870\uc808\n- 1ml, 3ml, 5ml \uc2e4\ub9b0\uc9c0 \uc0ac\uc6a9 \uac00\ub2a5\n- \uc911\ub7c9 : 158g", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_33.ggUpdateText();
		el.appendChild(els);
		me._text_33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_33.ggUpdatePosition=function (useTransition) {
		}
		me.__39.appendChild(me._text_33);
		me.__38.appendChild(me.__39);
		me.__37.appendChild(me.__38);
		me.__35.appendChild(me.__37);
		el=me.__36=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_23=document.createElement('div');
		els=me._image_23__img=document.createElement('img');
		els.className='ggskin ggskin_image_23';
		hs=basePath + 'images/image_23.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 133.323%;';
		hs+='left : calc(50% - ((77.24% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((133.323% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 77.24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_23.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me._image_23);
		me.__35.appendChild(me.__36);
		el=me._text_23=document.createElement('div');
		els=me._text_23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 20px 15px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_23.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_23.ggUpdateText();
		el.appendChild(els);
		me._text_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_23.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me._text_23);
		me.__34.appendChild(me.__35);
		me.__32.appendChild(me.__34);
		el=me.__33=document.createElement('div');
		els=me.__33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__33.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__33.ggUpdateText();
		el.appendChild(els);
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__33.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__33.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__33.style.transition='';
				if (me.__33.ggCurrentLogicStateVisible == 0) {
					me.__33.style.visibility="hidden";
					me.__33.ggVisible=false;
				}
				else {
					me.__33.style.visibility=(Number(me.__33.style.opacity)>0||!me.__33.style.opacity)?'inherit':'hidden';
					me.__33.ggVisible=true;
				}
			}
		}
		me.__33.logicBlock_visible();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me.__33);
		me.__31.appendChild(me.__32);
		el=me._image_33=document.createElement('div');
		els=me._image_33__img=document.createElement('img');
		els.className='ggskin ggskin_image_33';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_33.onclick=function (e) {
			me.__30.style.transition='none';
			me.__30.style.visibility='hidden';
			me.__30.ggVisible=false;
		}
		me._image_33.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._image_33);
		me.__30.appendChild(me.__31);
		me.divSkin.appendChild(me.__30);
		el=me.__40=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5\ucc3d4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		el.ggId="\uc81c\ud488\ud31d\uc5c5\ucc3d \ubc30\uacbd4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5-4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		el=me.__43=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ubc30\uacbd-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__411=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc81c\ud488\uc124\uba85-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__411.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__411.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_44=document.createElement('div');
		els=me._image_44__img=document.createElement('img');
		els.className='ggskin ggskin_image_44';
		hs=basePath + 'images/image_44.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 63.69%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_44.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_54=document.createElement('div');
		els=me._text_54__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : -34px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_54.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN DR 02", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_54.ggUpdateText();
		el.appendChild(els);
		me._text_54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_54.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_64=document.createElement('div');
		els=me._text_64__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -68px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_64.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN DR 02\uc740\n\uc18c\ub3c5\uc57d\uc744 \uc774\uc6a9\ud558\uc5ec \ubb3c\uad00 \ud63c\ud569\ud558\uc5ec \ub0b4\uc2dc\uacbd\uc758 \uac01 \ub0b4\ubd80 \ucc44\ub110 \ubc0f \n\uc678\ubd80\ud45c\uba74\uc744 \uc138\ucc99, \uc18c\ub3c5\ud558\ub294 \uc5f0\uc131\ub0b4\uc2dc\uacbd\uc6a9 \uc138\uc815\uc18c\ub3c5\uae30 \uc785\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_64.ggUpdateText();
		el.appendChild(els);
		me._text_64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_64.ggUpdatePosition=function (useTransition) {
		}
		me._text_54.appendChild(me._text_64);
		me._image_44.appendChild(me._text_54);
		me.__411.appendChild(me._image_44);
		el=me.__416=document.createElement('div');
		els=me.__416__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c\uc138\ubd80\uc815\ubcf4-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__416.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__416.ggUpdateText();
		el.appendChild(els);
		me.__416.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__416.ggUpdatePosition=function (useTransition) {
		}
		me.__411.appendChild(me.__416);
		el=me.__415=document.createElement('div');
		els=me.__415__img=document.createElement('img');
		els.className='ggskin ggskin__415';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5xJREFUeF7tm11S6zAMhe2yIpq8X9hMuwxgGc1m6H1PyoqoGRkcHNeJJVtK3Sl9YYDm53w+UmTF1mqFT9u2T+p8foJLGWP+jZfU2v5NGXOEH1rr//7t9KfTq/TtaYkLWMGg6/PzRTmRmRfSSr3BoVIwWAGAcA7Rs6yMOYJLOGGwABAXHiECzuAAUQTgGsJDFqUgsgDUINwHUQKBDMCKP5/fM3Oa6GF6s3nu+94+UbAfEoB2u301Sr1gT36N71HdgAbALb5pGsunaVs19L0ahoGNFwUCCgCneBC+2++VA+Cr7rpOdYcDCwgshCQAbvGHrlsUuN/t2NyAgbAIgFM8qAbxsZH3iUAoAASuTwrCLADubA/CU6PvRHO6wM4xFp4Osw'+
			'Ca7dZwjQKcB+J+hxxZbgBLEKIAuK1PBcCZDMdBNOY4fHw8RyrJ6Z8kxFcBYCYULhzAbX2HlxICIg6AG4m4YAJAavRrcUAsF0wASI1+TQBCF4wAJEe/KgBBLhgBNI+P76Xtq6XHZhU5wN2glwt+ATA/90MYVQHwXGABSNu/thDwk+HdAnDJ0AKQzP5V1QFBXA6nk9Zr2L/GEHBhQAbgd3IokyU4LjUVdueDKXFOh4jaWYKpMhrAUieHAkL6uwAOukoYgGgAlEeYtEDs+VFTanjThCmAesaGJVZA6fdQnSUMAEonp/SmuY9PusACSFSAt2h/BzIJACrCFIBbdgCmr5DMAbcMIOkATA4AO2Ha2dzxy3G+9uft0+y5sABu0QUo+/8VQoRK0NnIlrRtS3aodCkMZTB8MBWgu/nvSnCl9/2UxynGvuQRiBxgAdz9dNgCEO4H'+
			'1jgddi9NvztCK4RBbSFw9wCgG2SbImN2Fw6DqhwQa4tLh0FNAPxFE9NXY4IuqAmAs/8kBKSTYS0AwiUzl6/HhVxQCwB/9C8cIOmCGgDEFkxFl8hIFEbXBjC3Wiy+RkigMKJMqSXmAqH1vQlRfFrB/VikAEh2cogzoaxlcjYfMC+OxnSWUO1sAoDshZLuGpwQMC7gHP2U+OhTIAaXE8JcMqS80sIYACMeDUAiHFxnKaeTkwKAFU8CIAEhJSTn/xTxZACShVKO2PAY8S0z/gU580KxeOjvPzy8UfcLZTmgKggFwpOFEGVUVncDg3BWAJOaATZHF+4XnoXPKFwEQBge8HvxNrsf0XCunBhPOTm5aSp1Asz/IUT8741b6IPt8zYpuS30m81RQnB4v18pFcebm87ZiwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub354\ud558\uae30-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__415.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__415.onclick=function (e) {
			me.__412.style.transition='none';
			me.__412.style.visibility=(Number(me.__412.style.opacity)>0||!me.__412.style.opacity)?'inherit':'hidden';
			me.__412.ggVisible=true;
			me.__415.style.transition='none';
			me.__415.style.visibility='hidden';
			me.__415.ggVisible=false;
			me.__414.style.transition='none';
			me.__414.style.visibility=(Number(me.__414.style.opacity)>0||!me.__414.style.opacity)?'inherit':'hidden';
			me.__414.ggVisible=true;
		}
		me.__415.onmouseover=function (e) {
			me.elementMouseOver['_415']=true;
			me._text_74.logicBlock_visible();
		}
		me.__415.onmouseout=function (e) {
			me.elementMouseOver['_415']=false;
			me._text_74.logicBlock_visible();
		}
		me.__415.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_415']) {
				me.elementMouseOver['_415']=true;
				me._text_74.logicBlock_visible();
			}
		}
		me.__415.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_74=document.createElement('div');
		els=me._text_74__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7-4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_74.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_74.ggUpdateText();
		el.appendChild(els);
		me._text_74.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_74.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_415'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_74.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_74.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_74.style.transition='';
				if (me._text_74.ggCurrentLogicStateVisible == 0) {
					me._text_74.style.visibility=(Number(me._text_74.style.opacity)>0||!me._text_74.style.opacity)?'inherit':'hidden';
					me._text_74.ggVisible=true;
				}
				else {
					me._text_74.style.visibility="hidden";
					me._text_74.ggVisible=false;
				}
			}
		}
		me._text_74.logicBlock_visible();
		me._text_74.ggUpdatePosition=function (useTransition) {
		}
		me.__415.appendChild(me._text_74);
		me.__411.appendChild(me.__415);
		el=me.__414=document.createElement('div');
		els=me.__414__img=document.createElement('img');
		els.className='ggskin ggskin__414';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAvtJREFUeF7tm1t2gjAQhhP7ZBdR11DhvXYzuIzWZchmtO+ga7CLqE+anomGQghkwqXmAi8eldv/zZ/JEBJK/mGL43hFrtcVXIox9lZcklL+G2FsDx+U0q/y7WSHw+fYt0fHuAAXDLoulw8iRHa8ECVkA4eOBWNQACB8CNGNrBjbg0uGhDEIgNGFK4iAM4YA0QvAI4TLLPqC6ATABuFlEH0gGAPg4q/XXcecNuphdDZ7z7KM9yjYzQhAvFx+MkI+sCd/xH6mbkADcEG8AG4CAQXAJfGmELQAXBRvAqEVgMvisRAaAdic7U2Ta1vv0AggWi6Z6YVs3r8JghKAD9avBYOxfX48visqyepPXoq/S1S5oOYA36xfCa/CBRUAPke/6B'+
			'WkcrkCwOvoCwKSCwoAIURf5YICQPT6uus7fGVzN9iUC/4AeNbv64IhegQOICT7y80gWAAwFA+FEQcQRPZXtIn8cKA0RPuXm4ExgCiKSJ7nuhzzkP9fFgvyfTqhrw0jR2gAIDxZrwl82rxBcNLtFhUkNAAQniSJzbpr97ZOEj0EeNOEKYAySy3fFhFwAkBo3TAAwPLbNHUq+uJmtS7gADQVoIv2RwOAV/I6AC47IE1TnhDbNm0OcBkArgkgngIhB9je/amiHOu6bEwS5KWyg4kQZf+pEDKoBIXFbC6Fn+dz8nM+o7vsWyVo8ft+tJKOO3IAwT8OcwCInqAjZGsPE3MIbiNCATaD4AHAaBAEfxoWF400pGZQnkNUfTUWSDIU9q80gVCSoTyDrP563HMXlKNfc4DvLlDNH1ROkfGxMGqaPKmeI+RhYSRbX/R+0zS5tmLd'+
			'h9dmunnD01RZzOOai07QRV6bA2QwLkHAilfWAa7nBBPxxgBsL5RGXzJTdodVTQLG95+eNqbrhTo5wCoIPYQbJ0GrcsMAwgcFUAyqwKoyWBzdc71wI+wBhY8CQG4e8L33Mru7aDhXlzauq3O0laDuBJj/IWGW9yuW0EvL53lSEkvoZ7P9GILl+/0FIEjgjMT80c8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ube7c\uae30-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__414.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__414.onclick=function (e) {
			me.__415.style.transition='none';
			me.__415.style.visibility=(Number(me.__415.style.opacity)>0||!me.__415.style.opacity)?'inherit':'hidden';
			me.__415.ggVisible=true;
			me.__414.style.transition='none';
			me.__414.style.visibility='hidden';
			me.__414.ggVisible=false;
			me.__412.style.transition='none';
			me.__412.style.visibility='hidden';
			me.__412.ggVisible=false;
		}
		me.__414.onmouseover=function (e) {
			me.elementMouseOver['_414']=true;
			me._text_84.logicBlock_visible();
		}
		me.__414.onmouseout=function (e) {
			me.elementMouseOver['_414']=false;
			me._text_84.logicBlock_visible();
		}
		me.__414.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_414']) {
				me.elementMouseOver['_414']=true;
				me._text_84.logicBlock_visible();
			}
		}
		me.__414.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_84=document.createElement('div');
		els=me._text_84__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8-4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_84.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2eb\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_84.ggUpdateText();
		el.appendChild(els);
		me._text_84.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_84.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_414'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_84.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_84.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_84.style.transition='';
				if (me._text_84.ggCurrentLogicStateVisible == 0) {
					me._text_84.style.visibility=(Number(me._text_84.style.opacity)>0||!me._text_84.style.opacity)?'inherit':'hidden';
					me._text_84.ggVisible=true;
				}
				else {
					me._text_84.style.visibility="hidden";
					me._text_84.ggVisible=false;
				}
			}
		}
		me._text_84.logicBlock_visible();
		me._text_84.ggUpdatePosition=function (useTransition) {
		}
		me.__414.appendChild(me._text_84);
		me.__411.appendChild(me.__414);
		el=me.__412=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ubc30\uacbd-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__412.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__412.ggUpdatePosition=function (useTransition) {
		}
		el=me.__413=document.createElement('div');
		els=me.__413__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub354\ubcf4\uae30 \uc0c1\uc138-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 89%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all\"';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__413.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uc81c\ud488\uc815\ubcf4<\/b>\n1. \ub0b4\uc2dc\uacbd \uc218\ub7c9 : 2 Scope\n2. \uc138\ucc99 \ubc29\ubc95 : 360\ub3c4 \ud68c\uc804\ubd84\uc0ac\n3. \ucc54\ubc84\uc6a9\ub7c9 : \uc57d 16L(\uc18c\ub3c5\uc561 \ud0f1\ud06c : 18L)\n4. \ud0f1\ud06c\uc6a9\ub7c9 : \ubb3c 9L\/\uc54c\ucf54\uc62c 1L\/\uc138\uc815\uc561 1L\n5. \uc804\uc58d\/\uc8fc\ud30c\uc218 : AC 220~230V, 50\/60Hz\n6. \uc18c\ube44\uc804\ub825 : 1,500W\n7. \ud06c\uae30 : 696 X 656 X 4,045mm\n8.\ubb34\uac8c : 81kg\n\n\uc8fc\uc758 : \uc774 \uc81c\ud488\uc740 \'\uc758\ub8cc\uae30\uae30\'\uc774\uba70, \'\uc0ac\uc6a9\uc0c1\uc758 \uc8fc\uc758\uc0ac\ud56d\'\uacfc \'\uc0ac\uc6a9\ubc29\ubc95\'\uc744 \uc798 \uc77d\uace0 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc694. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__413.ggUpdateText();
		el.appendChild(els);
		me.__413.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__413.ggUpdatePosition=function (useTransition) {
		}
		me.__412.appendChild(me.__413);
		me.__411.appendChild(me.__412);
		me.__43.appendChild(me.__411);
		el=me.__45=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__45.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__45.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__45.style.transition='';
				if (me.__45.ggCurrentLogicStateVisible == 0) {
					me.__45.style.visibility="hidden";
					me.__45.ggVisible=false;
				}
				else {
					me.__45.style.visibility=(Number(me.__45.style.opacity)>0||!me.__45.style.opacity)?'inherit':'hidden';
					me.__45.ggVisible=true;
				}
			}
		}
		me.__45.logicBlock_visible();
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me.__47=document.createElement('div');
		el.ggId="\uc124\uba85\ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 678px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me.__410=document.createElement('div');
		els=me.__410__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 2px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__410.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN DR 02", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__410.ggUpdateText();
		el.appendChild(els);
		me.__410.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__410.ggUpdatePosition=function (useTransition) {
		}
		me.__47.appendChild(me.__410);
		el=me.__48=document.createElement('div');
		els=me.__48__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc124\uba85-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 97px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__48.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN DR 02\uc740\n\uc18c\ub3c5\uc57d\uc744 \uc774\uc6a9\ud558\uc5ec \ubb3c\uad00 \ud63c\ud569\ud558\uc5ec \ub0b4\uc2dc\uacbd\uc758 \uac01 \ub0b4\ubd80 \ucc44\ub110 \ubc0f \n\uc678\ubd80\ud45c\uba74\uc744 \uc138\ucc99, \uc18c\ub3c5\ud558\ub294 \uc5f0\uc131\ub0b4\uc2dc\uacbd\uc6a9 \uc138\uc815\uc18c\ub3c5\uae30 \uc785\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__48.ggUpdateText();
		el.appendChild(els);
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__49=document.createElement('div');
		els=me.__49__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc138\ubd80\uc124\uba85-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -48px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__49.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc555\ub825 \uc138\ucc99 \ubc0f \ud5f9\uad7c\uacfc \uc18c\ub3c5 \ubaa8\ub450 \ub0b4\uc2dc\uacbd \ucc44\ub110 \ub0b4\ubd80\uc5d0\ub3c4 \uc9c4\ud589\ub418\ub3c4\ub85d \ucee4\ub125\ud130\ub97c \ud1b5\ud574 \ub0b4\uc2dc\uacbd \ud2b8\ub7fc\ud3ab \ubc38\ube0c\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uacf5\uae09\ud569\ub2c8\ub2e4. \ub610\ud55c, \uac01 \uacfc\uc815 \uc804, \ud6c4\ub85c \uacf5\uae30 \uacfc\uc815\uc774 \uc788\uc5b4 \ucc44\ub110 \ub0b4\ubd80\uc5d0 \uc794\ub958\ud558\ub294 \uc138\ucc99\uc218, \uc18c\ub3c5\uc218\ub97c \ubd88\uc5b4 \uac74\uc870\uc2dc\ud0b5\ub2c8\ub2e4.  ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__49.ggUpdateText();
		el.appendChild(els);
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_34=document.createElement('div');
		els=me._text_34__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 178px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_34.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uc81c\ud488\uc815\ubcf4<\/b>\n1. \ub0b4\uc2dc\uacbd \uc218\ub7c9 : 2 Scope\n2. \uc138\ucc99 \ubc29\ubc95 : 360\ub3c4 \ud68c\uc804\ubd84\uc0ac\n3. \ucc54\ubc84\uc6a9\ub7c9 : \uc57d 16L(\uc18c\ub3c5\uc561 \ud0f1\ud06c : 18L)\n4. \ud0f1\ud06c\uc6a9\ub7c9 : \ubb3c 9L\/\uc54c\ucf54\uc62c 1L\/\uc138\uc815\uc561 1L\n5. \uc804\uc58d\/\uc8fc\ud30c\uc218 : AC 220~230V, 50\/60Hz\n6. \uc18c\ube44\uc804\ub825 : 1,500W\n7. \ud06c\uae30 : 696 X 656 X 4,045mm\n8.\ubb34\uac8c : 81kg\n\n\uc8fc\uc758 : \uc774 \uc81c\ud488\uc740 \'\uc758\ub8cc\uae30\uae30\'\uc774\uba70, \'\uc0ac\uc6a9\uc0c1\uc758 \uc8fc\uc758\uc0ac\ud56d\'\uacfc \'\uc0ac\uc6a9\ubc29\ubc95\'\uc744 \uc798 \uc77d\uace0 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc694. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_34.ggUpdateText();
		el.appendChild(els);
		me._text_34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_34.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me._text_34);
		me.__48.appendChild(me.__49);
		me.__47.appendChild(me.__48);
		me.__45.appendChild(me.__47);
		el=me.__46=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_24=document.createElement('div');
		els=me._image_24__img=document.createElement('img');
		els.className='ggskin ggskin_image_24';
		hs=basePath + 'images/image_24.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 133.323%;';
		hs+='left : calc(50% - ((85.24% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((133.323% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85.24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_24.ggUpdatePosition=function (useTransition) {
		}
		me.__46.appendChild(me._image_24);
		me.__45.appendChild(me.__46);
		el=me._text_24=document.createElement('div');
		els=me._text_24__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 20px 15px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_24.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_24.ggUpdateText();
		el.appendChild(els);
		me._text_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_24.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me._text_24);
		me.__43.appendChild(me.__45);
		el=me.__44=document.createElement('div');
		els=me.__44__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__44.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__44.ggUpdateText();
		el.appendChild(els);
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__44.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__44.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__44.style.transition='';
				if (me.__44.ggCurrentLogicStateVisible == 0) {
					me.__44.style.visibility="hidden";
					me.__44.ggVisible=false;
				}
				else {
					me.__44.style.visibility=(Number(me.__44.style.opacity)>0||!me.__44.style.opacity)?'inherit':'hidden';
					me.__44.ggVisible=true;
				}
			}
		}
		me.__44.logicBlock_visible();
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__44);
		me.__42.appendChild(me.__43);
		me.__41.appendChild(me.__42);
		el=me._image_34=document.createElement('div');
		els=me._image_34__img=document.createElement('img');
		els.className='ggskin ggskin_image_34';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_34.onclick=function (e) {
			me.__40.style.transition='none';
			me.__40.style.visibility='hidden';
			me.__40.ggVisible=false;
		}
		me._image_34.ggUpdatePosition=function (useTransition) {
		}
		me.__41.appendChild(me._image_34);
		me.__40.appendChild(me.__41);
		me.divSkin.appendChild(me.__40);
		el=me.__50=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5\ucc3d5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		el.ggId="\uc81c\ud488\ud31d\uc5c5\ucc3d \ubc30\uacbd5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me.__52=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5-5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ubc30\uacbd-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me.__511=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc81c\ud488\uc124\uba85-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__511.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__511.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_45=document.createElement('div');
		els=me._image_45__img=document.createElement('img');
		els.className='ggskin ggskin_image_45';
		hs=basePath + 'images/image_45.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 63.69%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_45.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_55=document.createElement('div');
		els=me._text_55__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : -34px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_55.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN DR 01", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_55.ggUpdateText();
		el.appendChild(els);
		me._text_55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_55.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_65=document.createElement('div');
		els=me._text_65__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -68px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_65.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc555\ub825 \uc138\ucc99 \ubc0f \ud5f9\uad7c\uacfc \uc18c\ub3c5 \ubaa8\ub450 \ub0b4\uc2dc\uacbd \ucc44\ub110 \ub0b4\ubd80\uc5d0\ub3c4 \uc9c4\ud589\ub418\ub3c4\ub85d \ucee4\ub125\ud130\ub97c \ud1b5\ud574 \ub0b4\uc2dc\uacbd \ud2b8\ub7fc\ud3ab \ubc38\ube0c\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uacf5\uae09\ud569\ub2c8\ub2e4. \ub610\ud55c, \uac01 \uacfc\uc815 \uc804, \ud6c4\ub85c \uacf5\uae30 \uacfc\uc815\uc774 \uc788\uc5b4 \ucc44\ub110 \ub0b4\ubd80\uc5d0 \uc794\ub958\ud558\ub294 \uc138\ucc99\uc218, \uc18c\ub3c5\uc218\ub97c \ubd88\uc5b4 \uac74\uc870\uc2dc\ud0b5\ub2c8\ub2e4.  ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_65.ggUpdateText();
		el.appendChild(els);
		me._text_65.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_65.ggUpdatePosition=function (useTransition) {
		}
		me._text_55.appendChild(me._text_65);
		me._image_45.appendChild(me._text_55);
		me.__511.appendChild(me._image_45);
		el=me.__516=document.createElement('div');
		els=me.__516__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c\uc138\ubd80\uc815\ubcf4-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__516.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__516.ggUpdateText();
		el.appendChild(els);
		me.__516.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__516.ggUpdatePosition=function (useTransition) {
		}
		me.__511.appendChild(me.__516);
		el=me.__515=document.createElement('div');
		els=me.__515__img=document.createElement('img');
		els.className='ggskin ggskin__515';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5xJREFUeF7tm11S6zAMhe2yIpq8X9hMuwxgGc1m6H1PyoqoGRkcHNeJJVtK3Sl9YYDm53w+UmTF1mqFT9u2T+p8foJLGWP+jZfU2v5NGXOEH1rr//7t9KfTq/TtaYkLWMGg6/PzRTmRmRfSSr3BoVIwWAGAcA7Rs6yMOYJLOGGwABAXHiECzuAAUQTgGsJDFqUgsgDUINwHUQKBDMCKP5/fM3Oa6GF6s3nu+94+UbAfEoB2u301Sr1gT36N71HdgAbALb5pGsunaVs19L0ahoGNFwUCCgCneBC+2++VA+Cr7rpOdYcDCwgshCQAbvGHrlsUuN/t2NyAgbAIgFM8qAbxsZH3iUAoAASuTwrCLADubA/CU6PvRHO6wM4xFp4Osw'+
			'Ca7dZwjQKcB+J+hxxZbgBLEKIAuK1PBcCZDMdBNOY4fHw8RyrJ6Z8kxFcBYCYULhzAbX2HlxICIg6AG4m4YAJAavRrcUAsF0wASI1+TQBCF4wAJEe/KgBBLhgBNI+P76Xtq6XHZhU5wN2glwt+ATA/90MYVQHwXGABSNu/thDwk+HdAnDJ0AKQzP5V1QFBXA6nk9Zr2L/GEHBhQAbgd3IokyU4LjUVdueDKXFOh4jaWYKpMhrAUieHAkL6uwAOukoYgGgAlEeYtEDs+VFTanjThCmAesaGJVZA6fdQnSUMAEonp/SmuY9PusACSFSAt2h/BzIJACrCFIBbdgCmr5DMAbcMIOkATA4AO2Ha2dzxy3G+9uft0+y5sABu0QUo+/8VQoRK0NnIlrRtS3aodCkMZTB8MBWgu/nvSnCl9/2UxynGvuQRiBxgAdz9dNgCEO4H'+
			'1jgddi9NvztCK4RBbSFw9wCgG2SbImN2Fw6DqhwQa4tLh0FNAPxFE9NXY4IuqAmAs/8kBKSTYS0AwiUzl6/HhVxQCwB/9C8cIOmCGgDEFkxFl8hIFEbXBjC3Wiy+RkigMKJMqSXmAqH1vQlRfFrB/VikAEh2cogzoaxlcjYfMC+OxnSWUO1sAoDshZLuGpwQMC7gHP2U+OhTIAaXE8JcMqS80sIYACMeDUAiHFxnKaeTkwKAFU8CIAEhJSTn/xTxZACShVKO2PAY8S0z/gU580KxeOjvPzy8UfcLZTmgKggFwpOFEGVUVncDg3BWAJOaATZHF+4XnoXPKFwEQBge8HvxNrsf0XCunBhPOTm5aSp1Asz/IUT8741b6IPt8zYpuS30m81RQnB4v18pFcebm87ZiwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub354\ud558\uae30-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__515.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__515.onclick=function (e) {
			me.__512.style.transition='none';
			me.__512.style.visibility=(Number(me.__512.style.opacity)>0||!me.__512.style.opacity)?'inherit':'hidden';
			me.__512.ggVisible=true;
			me.__515.style.transition='none';
			me.__515.style.visibility='hidden';
			me.__515.ggVisible=false;
			me.__514.style.transition='none';
			me.__514.style.visibility=(Number(me.__514.style.opacity)>0||!me.__514.style.opacity)?'inherit':'hidden';
			me.__514.ggVisible=true;
		}
		me.__515.onmouseover=function (e) {
			me.elementMouseOver['_515']=true;
			me._text_75.logicBlock_visible();
		}
		me.__515.onmouseout=function (e) {
			me.elementMouseOver['_515']=false;
			me._text_75.logicBlock_visible();
		}
		me.__515.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_515']) {
				me.elementMouseOver['_515']=true;
				me._text_75.logicBlock_visible();
			}
		}
		me.__515.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_75=document.createElement('div');
		els=me._text_75__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7-5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_75.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_75.ggUpdateText();
		el.appendChild(els);
		me._text_75.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_75.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_515'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_75.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_75.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_75.style.transition='';
				if (me._text_75.ggCurrentLogicStateVisible == 0) {
					me._text_75.style.visibility=(Number(me._text_75.style.opacity)>0||!me._text_75.style.opacity)?'inherit':'hidden';
					me._text_75.ggVisible=true;
				}
				else {
					me._text_75.style.visibility="hidden";
					me._text_75.ggVisible=false;
				}
			}
		}
		me._text_75.logicBlock_visible();
		me._text_75.ggUpdatePosition=function (useTransition) {
		}
		me.__515.appendChild(me._text_75);
		me.__511.appendChild(me.__515);
		el=me.__514=document.createElement('div');
		els=me.__514__img=document.createElement('img');
		els.className='ggskin ggskin__514';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAvtJREFUeF7tm1t2gjAQhhP7ZBdR11DhvXYzuIzWZchmtO+ga7CLqE+anomGQghkwqXmAi8eldv/zZ/JEBJK/mGL43hFrtcVXIox9lZcklL+G2FsDx+U0q/y7WSHw+fYt0fHuAAXDLoulw8iRHa8ECVkA4eOBWNQACB8CNGNrBjbg0uGhDEIgNGFK4iAM4YA0QvAI4TLLPqC6ATABuFlEH0gGAPg4q/XXcecNuphdDZ7z7KM9yjYzQhAvFx+MkI+sCd/xH6mbkADcEG8AG4CAQXAJfGmELQAXBRvAqEVgMvisRAaAdic7U2Ta1vv0AggWi6Z6YVs3r8JghKAD9avBYOxfX48visqyepPXoq/S1S5oOYA36xfCa/CBRUAPke/6B'+
			'WkcrkCwOvoCwKSCwoAIURf5YICQPT6uus7fGVzN9iUC/4AeNbv64IhegQOICT7y80gWAAwFA+FEQcQRPZXtIn8cKA0RPuXm4ExgCiKSJ7nuhzzkP9fFgvyfTqhrw0jR2gAIDxZrwl82rxBcNLtFhUkNAAQniSJzbpr97ZOEj0EeNOEKYAySy3fFhFwAkBo3TAAwPLbNHUq+uJmtS7gADQVoIv2RwOAV/I6AC47IE1TnhDbNm0OcBkArgkgngIhB9je/amiHOu6bEwS5KWyg4kQZf+pEDKoBIXFbC6Fn+dz8nM+o7vsWyVo8ft+tJKOO3IAwT8OcwCInqAjZGsPE3MIbiNCATaD4AHAaBAEfxoWF400pGZQnkNUfTUWSDIU9q80gVCSoTyDrP563HMXlKNfc4DvLlDNH1ROkfGxMGqaPKmeI+RhYSRbX/R+0zS5tmLd'+
			'h9dmunnD01RZzOOai07QRV6bA2QwLkHAilfWAa7nBBPxxgBsL5RGXzJTdodVTQLG95+eNqbrhTo5wCoIPYQbJ0GrcsMAwgcFUAyqwKoyWBzdc71wI+wBhY8CQG4e8L33Mru7aDhXlzauq3O0laDuBJj/IWGW9yuW0EvL53lSEkvoZ7P9GILl+/0FIEjgjMT80c8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ube7c\uae30-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__514.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__514.onclick=function (e) {
			me.__515.style.transition='none';
			me.__515.style.visibility=(Number(me.__515.style.opacity)>0||!me.__515.style.opacity)?'inherit':'hidden';
			me.__515.ggVisible=true;
			me.__514.style.transition='none';
			me.__514.style.visibility='hidden';
			me.__514.ggVisible=false;
			me.__512.style.transition='none';
			me.__512.style.visibility='hidden';
			me.__512.ggVisible=false;
		}
		me.__514.onmouseover=function (e) {
			me.elementMouseOver['_514']=true;
			me._text_85.logicBlock_visible();
		}
		me.__514.onmouseout=function (e) {
			me.elementMouseOver['_514']=false;
			me._text_85.logicBlock_visible();
		}
		me.__514.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_514']) {
				me.elementMouseOver['_514']=true;
				me._text_85.logicBlock_visible();
			}
		}
		me.__514.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_85=document.createElement('div');
		els=me._text_85__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8-5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_85.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2eb\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_85.ggUpdateText();
		el.appendChild(els);
		me._text_85.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_85.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_514'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_85.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_85.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_85.style.transition='';
				if (me._text_85.ggCurrentLogicStateVisible == 0) {
					me._text_85.style.visibility=(Number(me._text_85.style.opacity)>0||!me._text_85.style.opacity)?'inherit':'hidden';
					me._text_85.ggVisible=true;
				}
				else {
					me._text_85.style.visibility="hidden";
					me._text_85.ggVisible=false;
				}
			}
		}
		me._text_85.logicBlock_visible();
		me._text_85.ggUpdatePosition=function (useTransition) {
		}
		me.__514.appendChild(me._text_85);
		me.__511.appendChild(me.__514);
		el=me.__512=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ubc30\uacbd-5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__512.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__512.ggUpdatePosition=function (useTransition) {
		}
		el=me.__513=document.createElement('div');
		els=me.__513__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub354\ubcf4\uae30 \uc0c1\uc138-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 89%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all\"';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__513.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uc81c\ud488\uc815\ubcf4<\/b>\n1. \ub0b4\uc2dc\uacbd \uc218\ub7c9 : 1 Scope\n2. \uc138\ucc99 \ubc29\ubc95 : 360\ub3c4 \ud68c\uc804\ubd84\uc0ac\n3. \ucc54\ubc84\uc6a9\ub7c9 : \uc57d 8L(\uc18c\ub3c5\uc561 \ud0f1\ud06c : 9L)\n4. \ud0f1\ud06c\uc6a9\ub7c9 : \uc54c\ucf54\uc62c 1L\/\uc138\uc815\uc561 1L\n5. \uc804\uc58d\/\uc8fc\ud30c\uc218 : AC 220~230V, 50\/60Hz\n6. \uc18c\ube44\uc804\ub825 : 500W\n7. \ud06c\uae30 : 516 X 755 X 1,020mm\n8.\ubb34\uac8c : 58kg\n\n\uc8fc\uc758 : \uc774 \uc81c\ud488\uc740 \'\uc758\ub8cc\uae30\uae30\'\uc774\uba70, \'\uc0ac\uc6a9\uc0c1\uc758 \uc8fc\uc758\uc0ac\ud56d\'\uacfc \'\uc0ac\uc6a9\ubc29\ubc95\'\uc744 \uc798 \uc77d\uace0 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc694. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__513.ggUpdateText();
		el.appendChild(els);
		me.__513.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__513.ggUpdatePosition=function (useTransition) {
		}
		me.__512.appendChild(me.__513);
		me.__511.appendChild(me.__512);
		me.__53.appendChild(me.__511);
		el=me.__55=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__55.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__55.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__55.style.transition='';
				if (me.__55.ggCurrentLogicStateVisible == 0) {
					me.__55.style.visibility="hidden";
					me.__55.ggVisible=false;
				}
				else {
					me.__55.style.visibility=(Number(me.__55.style.opacity)>0||!me.__55.style.opacity)?'inherit':'hidden';
					me.__55.ggVisible=true;
				}
			}
		}
		me.__55.logicBlock_visible();
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__57=document.createElement('div');
		el.ggId="\uc124\uba85\ucee8\ud14c\uc774\ub108-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 678px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		el=me.__510=document.createElement('div');
		els=me.__510__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 2px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__510.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN DR 01", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__510.ggUpdateText();
		el.appendChild(els);
		me.__510.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__510.ggUpdatePosition=function (useTransition) {
		}
		me.__57.appendChild(me.__510);
		el=me.__58=document.createElement('div');
		els=me.__58__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc124\uba85-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 97px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__58.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN DR 01\uc740\n\uc18c\ub3c5\uc57d\uc744 \uc774\uc6a9\ud558\uc5ec \ubb3c\uad00 \ud63c\ud569\ud558\uc5ec \ub0b4\uc2dc\uacbd\uc758 \uac01 \ub0b4\ubd80 \ucc44\ub110 \ubc0f \n\uc678\ubd80\ud45c\uba74\uc744 \uc138\ucc99, \uc18c\ub3c5\ud558\ub294 \uc5f0\uc131\ub0b4\uc2dc\uacbd\uc6a9 \uc138\uc815\uc18c\ub3c5\uae30 \uc785\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__58.ggUpdateText();
		el.appendChild(els);
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me.__59=document.createElement('div');
		els=me.__59__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc138\ubd80\uc124\uba85-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -48px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__59.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc555\ub825 \uc138\ucc99 \ubc0f \ud5f9\uad7c\uacfc \uc18c\ub3c5 \ubaa8\ub450 \ub0b4\uc2dc\uacbd \ucc44\ub110 \ub0b4\ubd80\uc5d0\ub3c4 \uc9c4\ud589\ub418\ub3c4\ub85d \ucee4\ub125\ud130\ub97c \ud1b5\ud574 \ub0b4\uc2dc\uacbd \ud2b8\ub7fc\ud3ab \ubc38\ube0c\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uacf5\uae09\ud569\ub2c8\ub2e4. \ub610\ud55c, \uac01 \uacfc\uc815 \uc804, \ud6c4\ub85c \uacf5\uae30 \uacfc\uc815\uc774 \uc788\uc5b4 \ucc44\ub110 \ub0b4\ubd80\uc5d0 \uc794\ub958\ud558\ub294 \uc138\ucc99\uc218, \uc18c\ub3c5\uc218\ub97c \ubd88\uc5b4 \uac74\uc870\uc2dc\ud0b5\ub2c8\ub2e4.  ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__59.ggUpdateText();
		el.appendChild(els);
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_35=document.createElement('div');
		els=me._text_35__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 178px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_35.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uc81c\ud488\uc815\ubcf4<\/b>\n1. \ub0b4\uc2dc\uacbd \uc218\ub7c9 : 1 Scope\n2. \uc138\ucc99 \ubc29\ubc95 : 360\ub3c4 \ud68c\uc804\ubd84\uc0ac\n3. \ucc54\ubc84\uc6a9\ub7c9 : \uc57d 8L(\uc18c\ub3c5\uc561 \ud0f1\ud06c : 9L)\n4. \ud0f1\ud06c\uc6a9\ub7c9 : \uc54c\ucf54\uc62c 1L\/\uc138\uc815\uc561 1L\n5. \uc804\uc58d\/\uc8fc\ud30c\uc218 : AC 220~230V, 50\/60Hz\n6. \uc18c\ube44\uc804\ub825 : 500W\n7. \ud06c\uae30 : 516 X 755 X 1,020mm\n8.\ubb34\uac8c : 58kg\n\n\uc8fc\uc758 : \uc774 \uc81c\ud488\uc740 \'\uc758\ub8cc\uae30\uae30\'\uc774\uba70, \'\uc0ac\uc6a9\uc0c1\uc758 \uc8fc\uc758\uc0ac\ud56d\'\uacfc \'\uc0ac\uc6a9\ubc29\ubc95\'\uc744 \uc798 \uc77d\uace0 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc694. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_35.ggUpdateText();
		el.appendChild(els);
		me._text_35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_35.ggUpdatePosition=function (useTransition) {
		}
		me.__59.appendChild(me._text_35);
		me.__58.appendChild(me.__59);
		me.__57.appendChild(me.__58);
		me.__55.appendChild(me.__57);
		el=me.__56=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_25=document.createElement('div');
		els=me._image_25__img=document.createElement('img');
		els.className='ggskin ggskin_image_25';
		hs=basePath + 'images/image_25.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 133.323%;';
		hs+='left : calc(50% - ((85.24% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((133.323% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85.24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_25.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me._image_25);
		me.__55.appendChild(me.__56);
		el=me._text_25=document.createElement('div');
		els=me._text_25__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 20px 15px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_25.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_25.ggUpdateText();
		el.appendChild(els);
		me._text_25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_25.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me._text_25);
		me.__53.appendChild(me.__55);
		el=me.__54=document.createElement('div');
		els=me.__54__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__54.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__54.ggUpdateText();
		el.appendChild(els);
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__54.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__54.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__54.style.transition='';
				if (me.__54.ggCurrentLogicStateVisible == 0) {
					me.__54.style.visibility="hidden";
					me.__54.ggVisible=false;
				}
				else {
					me.__54.style.visibility=(Number(me.__54.style.opacity)>0||!me.__54.style.opacity)?'inherit':'hidden';
					me.__54.ggVisible=true;
				}
			}
		}
		me.__54.logicBlock_visible();
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me.__54);
		me.__52.appendChild(me.__53);
		me.__51.appendChild(me.__52);
		el=me._image_35=document.createElement('div');
		els=me._image_35__img=document.createElement('img');
		els.className='ggskin ggskin_image_35';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3-5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_35.onclick=function (e) {
			me.__50.style.transition='none';
			me.__50.style.visibility='hidden';
			me.__50.ggVisible=false;
		}
		me._image_35.ggUpdatePosition=function (useTransition) {
		}
		me.__51.appendChild(me._image_35);
		me.__50.appendChild(me.__51);
		me.divSkin.appendChild(me.__50);
		el=me.__60=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5\ucc3d6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me.__61=document.createElement('div');
		el.ggId="\uc81c\ud488\ud31d\uc5c5\ucc3d \ubc30\uacbd6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me.__62=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5-6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		el=me.__63=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ubc30\uacbd-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		el=me.__69=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc81c\ud488\uc124\uba85-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__69.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_46=document.createElement('div');
		els=me._image_46__img=document.createElement('img');
		els.className='ggskin ggskin_image_46';
		hs=basePath + 'images/image_46.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 63.69%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_46.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_56=document.createElement('div');
		els=me._text_56__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : -34px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_56.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud734\uc5d4 \uc2f1\uae00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_56.ggUpdateText();
		el.appendChild(els);
		me._text_56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_56.ggUpdatePosition=function (useTransition) {
		}
		me._image_46.appendChild(me._text_56);
		me.__69.appendChild(me._image_46);
		el=me.__614=document.createElement('div');
		els=me.__614__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c\uc138\ubd80\uc815\ubcf4-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__614.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__614.ggUpdateText();
		el.appendChild(els);
		me.__614.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__614.ggUpdatePosition=function (useTransition) {
		}
		me.__69.appendChild(me.__614);
		el=me.__613=document.createElement('div');
		els=me.__613__img=document.createElement('img');
		els.className='ggskin ggskin__613';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5xJREFUeF7tm11S6zAMhe2yIpq8X9hMuwxgGc1m6H1PyoqoGRkcHNeJJVtK3Sl9YYDm53w+UmTF1mqFT9u2T+p8foJLGWP+jZfU2v5NGXOEH1rr//7t9KfTq/TtaYkLWMGg6/PzRTmRmRfSSr3BoVIwWAGAcA7Rs6yMOYJLOGGwABAXHiECzuAAUQTgGsJDFqUgsgDUINwHUQKBDMCKP5/fM3Oa6GF6s3nu+94+UbAfEoB2u301Sr1gT36N71HdgAbALb5pGsunaVs19L0ahoGNFwUCCgCneBC+2++VA+Cr7rpOdYcDCwgshCQAbvGHrlsUuN/t2NyAgbAIgFM8qAbxsZH3iUAoAASuTwrCLADubA/CU6PvRHO6wM4xFp4Osw'+
			'Ca7dZwjQKcB+J+hxxZbgBLEKIAuK1PBcCZDMdBNOY4fHw8RyrJ6Z8kxFcBYCYULhzAbX2HlxICIg6AG4m4YAJAavRrcUAsF0wASI1+TQBCF4wAJEe/KgBBLhgBNI+P76Xtq6XHZhU5wN2glwt+ATA/90MYVQHwXGABSNu/thDwk+HdAnDJ0AKQzP5V1QFBXA6nk9Zr2L/GEHBhQAbgd3IokyU4LjUVdueDKXFOh4jaWYKpMhrAUieHAkL6uwAOukoYgGgAlEeYtEDs+VFTanjThCmAesaGJVZA6fdQnSUMAEonp/SmuY9PusACSFSAt2h/BzIJACrCFIBbdgCmr5DMAbcMIOkATA4AO2Ha2dzxy3G+9uft0+y5sABu0QUo+/8VQoRK0NnIlrRtS3aodCkMZTB8MBWgu/nvSnCl9/2UxynGvuQRiBxgAdz9dNgCEO4H'+
			'1jgddi9NvztCK4RBbSFw9wCgG2SbImN2Fw6DqhwQa4tLh0FNAPxFE9NXY4IuqAmAs/8kBKSTYS0AwiUzl6/HhVxQCwB/9C8cIOmCGgDEFkxFl8hIFEbXBjC3Wiy+RkigMKJMqSXmAqH1vQlRfFrB/VikAEh2cogzoaxlcjYfMC+OxnSWUO1sAoDshZLuGpwQMC7gHP2U+OhTIAaXE8JcMqS80sIYACMeDUAiHFxnKaeTkwKAFU8CIAEhJSTn/xTxZACShVKO2PAY8S0z/gU580KxeOjvPzy8UfcLZTmgKggFwpOFEGVUVncDg3BWAJOaATZHF+4XnoXPKFwEQBge8HvxNrsf0XCunBhPOTm5aSp1Asz/IUT8741b6IPt8zYpuS30m81RQnB4v18pFcebm87ZiwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub354\ud558\uae30-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__613.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__613.onclick=function (e) {
			me.__610.style.transition='none';
			me.__610.style.visibility=(Number(me.__610.style.opacity)>0||!me.__610.style.opacity)?'inherit':'hidden';
			me.__610.ggVisible=true;
			me.__613.style.transition='none';
			me.__613.style.visibility='hidden';
			me.__613.ggVisible=false;
			me.__612.style.transition='none';
			me.__612.style.visibility=(Number(me.__612.style.opacity)>0||!me.__612.style.opacity)?'inherit':'hidden';
			me.__612.ggVisible=true;
		}
		me.__613.onmouseover=function (e) {
			me.elementMouseOver['_613']=true;
			me._text_76.logicBlock_visible();
		}
		me.__613.onmouseout=function (e) {
			me.elementMouseOver['_613']=false;
			me._text_76.logicBlock_visible();
		}
		me.__613.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_613']) {
				me.elementMouseOver['_613']=true;
				me._text_76.logicBlock_visible();
			}
		}
		me.__613.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_76=document.createElement('div');
		els=me._text_76__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7-6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_76.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_76.ggUpdateText();
		el.appendChild(els);
		me._text_76.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_76.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_613'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_76.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_76.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_76.style.transition='';
				if (me._text_76.ggCurrentLogicStateVisible == 0) {
					me._text_76.style.visibility=(Number(me._text_76.style.opacity)>0||!me._text_76.style.opacity)?'inherit':'hidden';
					me._text_76.ggVisible=true;
				}
				else {
					me._text_76.style.visibility="hidden";
					me._text_76.ggVisible=false;
				}
			}
		}
		me._text_76.logicBlock_visible();
		me._text_76.ggUpdatePosition=function (useTransition) {
		}
		me.__613.appendChild(me._text_76);
		me.__69.appendChild(me.__613);
		el=me.__612=document.createElement('div');
		els=me.__612__img=document.createElement('img');
		els.className='ggskin ggskin__612';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAvtJREFUeF7tm1t2gjAQhhP7ZBdR11DhvXYzuIzWZchmtO+ga7CLqE+anomGQghkwqXmAi8eldv/zZ/JEBJK/mGL43hFrtcVXIox9lZcklL+G2FsDx+U0q/y7WSHw+fYt0fHuAAXDLoulw8iRHa8ECVkA4eOBWNQACB8CNGNrBjbg0uGhDEIgNGFK4iAM4YA0QvAI4TLLPqC6ATABuFlEH0gGAPg4q/XXcecNuphdDZ7z7KM9yjYzQhAvFx+MkI+sCd/xH6mbkADcEG8AG4CAQXAJfGmELQAXBRvAqEVgMvisRAaAdic7U2Ta1vv0AggWi6Z6YVs3r8JghKAD9avBYOxfX48visqyepPXoq/S1S5oOYA36xfCa/CBRUAPke/6B'+
			'WkcrkCwOvoCwKSCwoAIURf5YICQPT6uus7fGVzN9iUC/4AeNbv64IhegQOICT7y80gWAAwFA+FEQcQRPZXtIn8cKA0RPuXm4ExgCiKSJ7nuhzzkP9fFgvyfTqhrw0jR2gAIDxZrwl82rxBcNLtFhUkNAAQniSJzbpr97ZOEj0EeNOEKYAySy3fFhFwAkBo3TAAwPLbNHUq+uJmtS7gADQVoIv2RwOAV/I6AC47IE1TnhDbNm0OcBkArgkgngIhB9je/amiHOu6bEwS5KWyg4kQZf+pEDKoBIXFbC6Fn+dz8nM+o7vsWyVo8ft+tJKOO3IAwT8OcwCInqAjZGsPE3MIbiNCATaD4AHAaBAEfxoWF400pGZQnkNUfTUWSDIU9q80gVCSoTyDrP563HMXlKNfc4DvLlDNH1ROkfGxMGqaPKmeI+RhYSRbX/R+0zS5tmLd'+
			'h9dmunnD01RZzOOai07QRV6bA2QwLkHAilfWAa7nBBPxxgBsL5RGXzJTdodVTQLG95+eNqbrhTo5wCoIPYQbJ0GrcsMAwgcFUAyqwKoyWBzdc71wI+wBhY8CQG4e8L33Mru7aDhXlzauq3O0laDuBJj/IWGW9yuW0EvL53lSEkvoZ7P9GILl+/0FIEjgjMT80c8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ube7c\uae30-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__612.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__612.onclick=function (e) {
			me.__613.style.transition='none';
			me.__613.style.visibility=(Number(me.__613.style.opacity)>0||!me.__613.style.opacity)?'inherit':'hidden';
			me.__613.ggVisible=true;
			me.__612.style.transition='none';
			me.__612.style.visibility='hidden';
			me.__612.ggVisible=false;
			me.__610.style.transition='none';
			me.__610.style.visibility='hidden';
			me.__610.ggVisible=false;
		}
		me.__612.onmouseover=function (e) {
			me.elementMouseOver['_612']=true;
			me._text_86.logicBlock_visible();
		}
		me.__612.onmouseout=function (e) {
			me.elementMouseOver['_612']=false;
			me._text_86.logicBlock_visible();
		}
		me.__612.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_612']) {
				me.elementMouseOver['_612']=true;
				me._text_86.logicBlock_visible();
			}
		}
		me.__612.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_86=document.createElement('div');
		els=me._text_86__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8-6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_86.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2eb\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_86.ggUpdateText();
		el.appendChild(els);
		me._text_86.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_86.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_612'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_86.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_86.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_86.style.transition='';
				if (me._text_86.ggCurrentLogicStateVisible == 0) {
					me._text_86.style.visibility=(Number(me._text_86.style.opacity)>0||!me._text_86.style.opacity)?'inherit':'hidden';
					me._text_86.ggVisible=true;
				}
				else {
					me._text_86.style.visibility="hidden";
					me._text_86.ggVisible=false;
				}
			}
		}
		me._text_86.logicBlock_visible();
		me._text_86.ggUpdatePosition=function (useTransition) {
		}
		me.__612.appendChild(me._text_86);
		me.__69.appendChild(me.__612);
		el=me.__610=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ubc30\uacbd-6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__610.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__610.ggUpdatePosition=function (useTransition) {
		}
		el=me.__611=document.createElement('div');
		els=me.__611__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub354\ubcf4\uae30 \uc0c1\uc138-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 89%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all\"';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__611.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uc81c\ud488\uc815\ubcf4<\/b>\n1. \ub0b4\uc2dc\uacbd \uc218\ub7c9 : 1 Scope\n2. \uc138\ucc99 \ubc29\ubc95 : 360\ub3c4 \ud68c\uc804\ubd84\uc0ac\n3. \ucc54\ubc84\uc6a9\ub7c9 : \uc57d 8L(\uc18c\ub3c5\uc561 \ud0f1\ud06c : 9L)\n4. \ud0f1\ud06c\uc6a9\ub7c9 : \uc54c\ucf54\uc62c 1L\/\uc138\uc815\uc561 1L\n5. \uc804\uc58d\/\uc8fc\ud30c\uc218 : AC 220~230V, 50\/60Hz\n6. \uc18c\ube44\uc804\ub825 : 500W\n7. \ud06c\uae30 : 516 X 755 X 1,020mm\n8.\ubb34\uac8c : 58kg\n\n\uc8fc\uc758 : \uc774 \uc81c\ud488\uc740 \'\uc758\ub8cc\uae30\uae30\'\uc774\uba70, \'\uc0ac\uc6a9\uc0c1\uc758 \uc8fc\uc758\uc0ac\ud56d\'\uacfc \'\uc0ac\uc6a9\ubc29\ubc95\'\uc744 \uc798 \uc77d\uace0 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc694. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__611.ggUpdateText();
		el.appendChild(els);
		me.__611.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__611.ggUpdatePosition=function (useTransition) {
		}
		me.__610.appendChild(me.__611);
		me.__69.appendChild(me.__610);
		me.__63.appendChild(me.__69);
		el=me.__65=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__65.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__65.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__65.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__65.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__65.style.transition='';
				if (me.__65.ggCurrentLogicStateVisible == 0) {
					me.__65.style.visibility="hidden";
					me.__65.ggVisible=false;
				}
				else {
					me.__65.style.visibility=(Number(me.__65.style.opacity)>0||!me.__65.style.opacity)?'inherit':'hidden';
					me.__65.ggVisible=true;
				}
			}
		}
		me.__65.logicBlock_visible();
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		el=me.__67=document.createElement('div');
		el.ggId="\uc124\uba85\ucee8\ud14c\uc774\ub108-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 678px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__67.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		el=me.__68=document.createElement('div');
		els=me.__68__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 2px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__68.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud734\uc5d4 \uc2f1\uae00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__68.ggUpdateText();
		el.appendChild(els);
		me.__68.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		me.__67.appendChild(me.__68);
		me.__65.appendChild(me.__67);
		el=me.__66=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__66.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_26=document.createElement('div');
		els=me._image_26__img=document.createElement('img');
		els.className='ggskin ggskin_image_26';
		hs=basePath + 'images/image_26.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 133.323%;';
		hs+='left : calc(50% - ((85.24% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((133.323% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85.24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_26.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me._image_26);
		me.__65.appendChild(me.__66);
		el=me._text_26=document.createElement('div');
		els=me._text_26__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-6";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 20px 15px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_26.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_26.ggUpdateText();
		el.appendChild(els);
		me._text_26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_26.ggUpdatePosition=function (useTransition) {
		}
		me.__65.appendChild(me._text_26);
		me.__63.appendChild(me.__65);
		el=me.__64=document.createElement('div');
		els=me.__64__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__64.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__64.ggUpdateText();
		el.appendChild(els);
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__64.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__64.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__64.style.transition='';
				if (me.__64.ggCurrentLogicStateVisible == 0) {
					me.__64.style.visibility="hidden";
					me.__64.ggVisible=false;
				}
				else {
					me.__64.style.visibility=(Number(me.__64.style.opacity)>0||!me.__64.style.opacity)?'inherit':'hidden';
					me.__64.ggVisible=true;
				}
			}
		}
		me.__64.logicBlock_visible();
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		me.__63.appendChild(me.__64);
		me.__62.appendChild(me.__63);
		me.__61.appendChild(me.__62);
		el=me._image_36=document.createElement('div');
		els=me._image_36__img=document.createElement('img');
		els.className='ggskin ggskin_image_36';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3-6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_36.onclick=function (e) {
			me.__60.style.transition='none';
			me.__60.style.visibility='hidden';
			me.__60.ggVisible=false;
		}
		me._image_36.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me._image_36);
		me.__60.appendChild(me.__61);
		me.divSkin.appendChild(me.__60);
		el=me.__70=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5\ucc3d7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__70.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		el=me.__71=document.createElement('div');
		el.ggId="\uc81c\ud488\ud31d\uc5c5\ucc3d \ubc30\uacbd7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		el=me.__72=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5-7";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__72.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		el=me.__73=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ubc30\uacbd-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__73.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		el=me.__711=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc81c\ud488\uc124\uba85-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__711.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__711.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_47=document.createElement('div');
		els=me._image_47__img=document.createElement('img');
		els.className='ggskin ggskin_image_47';
		hs=basePath + 'images/image_47.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-7";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 63.69%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_47.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_57=document.createElement('div');
		els=me._text_57__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : -34px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_57.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX_D", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_57.ggUpdateText();
		el.appendChild(els);
		me._text_57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_57.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_67=document.createElement('div');
		els=me._text_67__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -68px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_67.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX_D\ub294 \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd \uccb4\uc678 \ucda9\uaca9\ud30c \uc1c4\uc11d\uae30\ub85c \uc804\uc790\ud29c\ube0c\uc5d0 \uc758\ud574 \ubc1c\uc0dd\ub418\ub294 \ucda9\uaca9\ud30c\ub97c \uccb4\ub0b4\uc5d0 \uc804\ub2ec\ud558\uc5ec \uc694\ub85c, \uc2e0\uc7a5 \ub4f1\uc758 \uacb0\uc11d\uc744 \ud30c\uc1c4\ud558\ub294 \uae30\uae30\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_67.ggUpdateText();
		el.appendChild(els);
		me._text_67.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_67.ggUpdatePosition=function (useTransition) {
		}
		me._text_57.appendChild(me._text_67);
		me._image_47.appendChild(me._text_57);
		me.__711.appendChild(me._image_47);
		el=me.__716=document.createElement('div');
		els=me.__716__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c\uc138\ubd80\uc815\ubcf4-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__716.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__716.ggUpdateText();
		el.appendChild(els);
		me.__716.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__716.ggUpdatePosition=function (useTransition) {
		}
		me.__711.appendChild(me.__716);
		el=me.__715=document.createElement('div');
		els=me.__715__img=document.createElement('img');
		els.className='ggskin ggskin__715';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5xJREFUeF7tm11S6zAMhe2yIpq8X9hMuwxgGc1m6H1PyoqoGRkcHNeJJVtK3Sl9YYDm53w+UmTF1mqFT9u2T+p8foJLGWP+jZfU2v5NGXOEH1rr//7t9KfTq/TtaYkLWMGg6/PzRTmRmRfSSr3BoVIwWAGAcA7Rs6yMOYJLOGGwABAXHiECzuAAUQTgGsJDFqUgsgDUINwHUQKBDMCKP5/fM3Oa6GF6s3nu+94+UbAfEoB2u301Sr1gT36N71HdgAbALb5pGsunaVs19L0ahoGNFwUCCgCneBC+2++VA+Cr7rpOdYcDCwgshCQAbvGHrlsUuN/t2NyAgbAIgFM8qAbxsZH3iUAoAASuTwrCLADubA/CU6PvRHO6wM4xFp4Osw'+
			'Ca7dZwjQKcB+J+hxxZbgBLEKIAuK1PBcCZDMdBNOY4fHw8RyrJ6Z8kxFcBYCYULhzAbX2HlxICIg6AG4m4YAJAavRrcUAsF0wASI1+TQBCF4wAJEe/KgBBLhgBNI+P76Xtq6XHZhU5wN2glwt+ATA/90MYVQHwXGABSNu/thDwk+HdAnDJ0AKQzP5V1QFBXA6nk9Zr2L/GEHBhQAbgd3IokyU4LjUVdueDKXFOh4jaWYKpMhrAUieHAkL6uwAOukoYgGgAlEeYtEDs+VFTanjThCmAesaGJVZA6fdQnSUMAEonp/SmuY9PusACSFSAt2h/BzIJACrCFIBbdgCmr5DMAbcMIOkATA4AO2Ha2dzxy3G+9uft0+y5sABu0QUo+/8VQoRK0NnIlrRtS3aodCkMZTB8MBWgu/nvSnCl9/2UxynGvuQRiBxgAdz9dNgCEO4H'+
			'1jgddi9NvztCK4RBbSFw9wCgG2SbImN2Fw6DqhwQa4tLh0FNAPxFE9NXY4IuqAmAs/8kBKSTYS0AwiUzl6/HhVxQCwB/9C8cIOmCGgDEFkxFl8hIFEbXBjC3Wiy+RkigMKJMqSXmAqH1vQlRfFrB/VikAEh2cogzoaxlcjYfMC+OxnSWUO1sAoDshZLuGpwQMC7gHP2U+OhTIAaXE8JcMqS80sIYACMeDUAiHFxnKaeTkwKAFU8CIAEhJSTn/xTxZACShVKO2PAY8S0z/gU580KxeOjvPzy8UfcLZTmgKggFwpOFEGVUVncDg3BWAJOaATZHF+4XnoXPKFwEQBge8HvxNrsf0XCunBhPOTm5aSp1Asz/IUT8741b6IPt8zYpuS30m81RQnB4v18pFcebm87ZiwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub354\ud558\uae30-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__715.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__715.onclick=function (e) {
			me.__712.style.transition='none';
			me.__712.style.visibility=(Number(me.__712.style.opacity)>0||!me.__712.style.opacity)?'inherit':'hidden';
			me.__712.ggVisible=true;
			me.__715.style.transition='none';
			me.__715.style.visibility='hidden';
			me.__715.ggVisible=false;
			me.__714.style.transition='none';
			me.__714.style.visibility=(Number(me.__714.style.opacity)>0||!me.__714.style.opacity)?'inherit':'hidden';
			me.__714.ggVisible=true;
		}
		me.__715.onmouseover=function (e) {
			me.elementMouseOver['_715']=true;
			me._text_77.logicBlock_visible();
		}
		me.__715.onmouseout=function (e) {
			me.elementMouseOver['_715']=false;
			me._text_77.logicBlock_visible();
		}
		me.__715.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_715']) {
				me.elementMouseOver['_715']=true;
				me._text_77.logicBlock_visible();
			}
		}
		me.__715.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_77=document.createElement('div');
		els=me._text_77__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7-7";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_77.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_77.ggUpdateText();
		el.appendChild(els);
		me._text_77.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_77.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_715'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_77.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_77.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_77.style.transition='';
				if (me._text_77.ggCurrentLogicStateVisible == 0) {
					me._text_77.style.visibility=(Number(me._text_77.style.opacity)>0||!me._text_77.style.opacity)?'inherit':'hidden';
					me._text_77.ggVisible=true;
				}
				else {
					me._text_77.style.visibility="hidden";
					me._text_77.ggVisible=false;
				}
			}
		}
		me._text_77.logicBlock_visible();
		me._text_77.ggUpdatePosition=function (useTransition) {
		}
		me.__715.appendChild(me._text_77);
		me.__711.appendChild(me.__715);
		el=me.__714=document.createElement('div');
		els=me.__714__img=document.createElement('img');
		els.className='ggskin ggskin__714';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAvtJREFUeF7tm1t2gjAQhhP7ZBdR11DhvXYzuIzWZchmtO+ga7CLqE+anomGQghkwqXmAi8eldv/zZ/JEBJK/mGL43hFrtcVXIox9lZcklL+G2FsDx+U0q/y7WSHw+fYt0fHuAAXDLoulw8iRHa8ECVkA4eOBWNQACB8CNGNrBjbg0uGhDEIgNGFK4iAM4YA0QvAI4TLLPqC6ATABuFlEH0gGAPg4q/XXcecNuphdDZ7z7KM9yjYzQhAvFx+MkI+sCd/xH6mbkADcEG8AG4CAQXAJfGmELQAXBRvAqEVgMvisRAaAdic7U2Ta1vv0AggWi6Z6YVs3r8JghKAD9avBYOxfX48visqyepPXoq/S1S5oOYA36xfCa/CBRUAPke/6B'+
			'WkcrkCwOvoCwKSCwoAIURf5YICQPT6uus7fGVzN9iUC/4AeNbv64IhegQOICT7y80gWAAwFA+FEQcQRPZXtIn8cKA0RPuXm4ExgCiKSJ7nuhzzkP9fFgvyfTqhrw0jR2gAIDxZrwl82rxBcNLtFhUkNAAQniSJzbpr97ZOEj0EeNOEKYAySy3fFhFwAkBo3TAAwPLbNHUq+uJmtS7gADQVoIv2RwOAV/I6AC47IE1TnhDbNm0OcBkArgkgngIhB9je/amiHOu6bEwS5KWyg4kQZf+pEDKoBIXFbC6Fn+dz8nM+o7vsWyVo8ft+tJKOO3IAwT8OcwCInqAjZGsPE3MIbiNCATaD4AHAaBAEfxoWF400pGZQnkNUfTUWSDIU9q80gVCSoTyDrP563HMXlKNfc4DvLlDNH1ROkfGxMGqaPKmeI+RhYSRbX/R+0zS5tmLd'+
			'h9dmunnD01RZzOOai07QRV6bA2QwLkHAilfWAa7nBBPxxgBsL5RGXzJTdodVTQLG95+eNqbrhTo5wCoIPYQbJ0GrcsMAwgcFUAyqwKoyWBzdc71wI+wBhY8CQG4e8L33Mru7aDhXlzauq3O0laDuBJj/IWGW9yuW0EvL53lSEkvoZ7P9GILl+/0FIEjgjMT80c8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ube7c\uae30-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__714.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__714.onclick=function (e) {
			me.__715.style.transition='none';
			me.__715.style.visibility=(Number(me.__715.style.opacity)>0||!me.__715.style.opacity)?'inherit':'hidden';
			me.__715.ggVisible=true;
			me.__714.style.transition='none';
			me.__714.style.visibility='hidden';
			me.__714.ggVisible=false;
			me.__712.style.transition='none';
			me.__712.style.visibility='hidden';
			me.__712.ggVisible=false;
		}
		me.__714.onmouseover=function (e) {
			me.elementMouseOver['_714']=true;
			me._text_87.logicBlock_visible();
		}
		me.__714.onmouseout=function (e) {
			me.elementMouseOver['_714']=false;
			me._text_87.logicBlock_visible();
		}
		me.__714.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_714']) {
				me.elementMouseOver['_714']=true;
				me._text_87.logicBlock_visible();
			}
		}
		me.__714.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_87=document.createElement('div');
		els=me._text_87__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8-7";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_87.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2eb\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_87.ggUpdateText();
		el.appendChild(els);
		me._text_87.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_87.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_714'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_87.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_87.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_87.style.transition='';
				if (me._text_87.ggCurrentLogicStateVisible == 0) {
					me._text_87.style.visibility=(Number(me._text_87.style.opacity)>0||!me._text_87.style.opacity)?'inherit':'hidden';
					me._text_87.ggVisible=true;
				}
				else {
					me._text_87.style.visibility="hidden";
					me._text_87.ggVisible=false;
				}
			}
		}
		me._text_87.logicBlock_visible();
		me._text_87.ggUpdatePosition=function (useTransition) {
		}
		me.__714.appendChild(me._text_87);
		me.__711.appendChild(me.__714);
		el=me.__712=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ubc30\uacbd-7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__712.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__712.ggUpdatePosition=function (useTransition) {
		}
		el=me.__713=document.createElement('div');
		els=me.__713__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub354\ubcf4\uae30 \uc0c1\uc138-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 89%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all\"';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__713.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uae30\ub300 \ud6a8\ub2a5<\/b>\n- \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd\uc5d0 \uc758\ud55c \ucda9\uaca9\ud30c \ubc1c\uc0dd, \uc2e0\uc7a5 \ubc0f \uc694\uad00\uc758 \uacb0\uc11d \ud30c\uc1c4\n- C-arm\ud615 X-ray \ub514\ud14d\ud130\ub97c \ud1b5\ud55c \uacb0\uc11d \uc704\uce58 \ud655\uc778\n- \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \ud1b5\ud55c \ud658\uc790\uc815\ubcf4\uc758 \uc785\ub825 \ubc0f \uc800\uc7a5\n\n<b>*\ud06c\uae30<\/b>\n- C-arm: 640 * 1380 * 1530(mm)\n\n<b>*\uc911\ub7c9<\/b>\n- C-arm : 350kg\n- \ud658\uc790\ud14c\uc774\ube14 : 150kg\n- \uc870\uc791\ubd80 : 35kg\n- \uc778\ubc84\ud130 \uc81c\uc5b4\ubd80 : 40kg\n- \ub9ac\ubaa8\ucf58 \ubc0f \ubc1c\ud310 \uc2a4\uc704\uce58 : \uc57d 300g\n\n<b>*\uc804\uae30\uc801 \uc815\uaca9<\/b>\n- \ub2e8\uc0c1 220V, 60Hz\n\n<b>*\uad6c\uc131\ud488<\/b>\n- X\uc120 \ubc1c\uc0dd\uae30 \n- C-arm\n- \ub514\ud14d\ud130\n- \uc870\uc791\ubd80\n- \ub9ac\ubaa8\ucf58\n- \ud658\uc790\ud14c\uc774\ube14\n- \uc778\ubc84\ud130 \uc81c\uc5b4\ubd80\n- \ucda9\uaca9\ud30c\ud5e4\ub4dc\n- \ub9ac\ud50c\ub809\ud130\n- \ubc1c\ud310\uc2a4\uc704\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__713.ggUpdateText();
		el.appendChild(els);
		me.__713.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__713.ggUpdatePosition=function (useTransition) {
		}
		me.__712.appendChild(me.__713);
		me.__711.appendChild(me.__712);
		me.__73.appendChild(me.__711);
		el=me.__75=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__75.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__75.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__75.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__75.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__75.style.transition='';
				if (me.__75.ggCurrentLogicStateVisible == 0) {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
				else {
					me.__75.style.visibility=(Number(me.__75.style.opacity)>0||!me.__75.style.opacity)?'inherit':'hidden';
					me.__75.ggVisible=true;
				}
			}
		}
		me.__75.logicBlock_visible();
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		el=me.__77=document.createElement('div');
		el.ggId="\uc124\uba85\ucee8\ud14c\uc774\ub108-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 678px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 51%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__77.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		el=me.__710=document.createElement('div');
		els=me.__710__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 2px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__710.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX_D", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__710.ggUpdateText();
		el.appendChild(els);
		me.__710.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__710.ggUpdatePosition=function (useTransition) {
		}
		me.__77.appendChild(me.__710);
		el=me.__78=document.createElement('div');
		els=me.__78__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc124\uba85-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 69px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 52px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__78.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__78.ggUpdateText();
		el.appendChild(els);
		me.__78.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		el=me.__79=document.createElement('div');
		els=me.__79__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc138\ubd80\uc124\uba85-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -48px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__79.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX_D\ub294 \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd \uccb4\uc678 \ucda9\uaca9\ud30c \uc1c4\uc11d\uae30\ub85c \uc804\uc790\ud29c\ube0c\uc5d0 \uc758\ud574 \ubc1c\uc0dd\ub418\ub294 \ucda9\uaca9\ud30c\ub97c \uccb4\ub0b4\uc5d0 \uc804\ub2ec\ud558\uc5ec \uc694\ub85c, \uc2e0\uc7a5 \ub4f1\uc758 \uacb0\uc11d\uc744 \ud30c\uc1c4\ud558\ub294 \uae30\uae30\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__79.ggUpdateText();
		el.appendChild(els);
		me.__79.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_37=document.createElement('div');
		els=me._text_37__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_37.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uae30\ub300 \ud6a8\ub2a5<\/b>\n- \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd\uc5d0 \uc758\ud55c \ucda9\uaca9\ud30c \ubc1c\uc0dd, \uc2e0\uc7a5 \ubc0f \uc694\uad00\uc758 \uacb0\uc11d \ud30c\uc1c4\n- C-arm\ud615 X-ray \ub514\ud14d\ud130\ub97c \ud1b5\ud55c \uacb0\uc11d \uc704\uce58 \ud655\uc778\n- \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \ud1b5\ud55c \ud658\uc790\uc815\ubcf4\uc758 \uc785\ub825 \ubc0f \uc800\uc7a5\n\n<b>*\ud06c\uae30<\/b>\n- C-arm: 640 * 1380 * 1530(mm)\n\n<b>*\uc911\ub7c9<\/b>\n- C-arm : 350kg\n- \ud658\uc790\ud14c\uc774\ube14 : 150kg\n- \uc870\uc791\ubd80 : 35kg\n- \uc778\ubc84\ud130 \uc81c\uc5b4\ubd80 : 40kg\n- \ub9ac\ubaa8\ucf58 \ubc0f \ubc1c\ud310 \uc2a4\uc704\uce58 : \uc57d 300g\n\n<b>*\uc804\uae30\uc801 \uc815\uaca9<\/b>\n- \ub2e8\uc0c1 220V, 60Hz\n\n<b>*\uad6c\uc131\ud488<\/b>\n- X\uc120 \ubc1c\uc0dd\uae30 \n- C-arm\n- \ub514\ud14d\ud130\n- \uc870\uc791\ubd80\n- \ub9ac\ubaa8\ucf58\n- \ud658\uc790\ud14c\uc774\ube14\n- \uc778\ubc84\ud130 \uc81c\uc5b4\ubd80\n- \ucda9\uaca9\ud30c\ud5e4\ub4dc\n- \ub9ac\ud50c\ub809\ud130\n- \ubc1c\ud310\uc2a4\uc704\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_37.ggUpdateText();
		el.appendChild(els);
		me._text_37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_37.ggUpdatePosition=function (useTransition) {
		}
		me.__79.appendChild(me._text_37);
		me.__78.appendChild(me.__79);
		me.__77.appendChild(me.__78);
		me.__75.appendChild(me.__77);
		el=me.__76=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__76.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_27=document.createElement('div');
		els=me._image_27__img=document.createElement('img');
		els.className='ggskin ggskin_image_27';
		hs=basePath + 'images/image_27.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 133.323%;';
		hs+='left : calc(50% - ((85.24% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((133.323% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85.24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_27.ggUpdatePosition=function (useTransition) {
		}
		me.__76.appendChild(me._image_27);
		me.__75.appendChild(me.__76);
		el=me._text_27=document.createElement('div');
		els=me._text_27__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 20px 15px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_27.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_27.ggUpdateText();
		el.appendChild(els);
		me._text_27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_27.ggUpdatePosition=function (useTransition) {
		}
		me.__75.appendChild(me._text_27);
		me.__73.appendChild(me.__75);
		el=me.__74=document.createElement('div');
		els=me.__74__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__74.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__74.ggUpdateText();
		el.appendChild(els);
		me.__74.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__74.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__74.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__74.style.transition='';
				if (me.__74.ggCurrentLogicStateVisible == 0) {
					me.__74.style.visibility="hidden";
					me.__74.ggVisible=false;
				}
				else {
					me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
					me.__74.ggVisible=true;
				}
			}
		}
		me.__74.logicBlock_visible();
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		me.__73.appendChild(me.__74);
		me.__72.appendChild(me.__73);
		me.__71.appendChild(me.__72);
		el=me._image_37=document.createElement('div');
		els=me._image_37__img=document.createElement('img');
		els.className='ggskin ggskin_image_37';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_37.onclick=function (e) {
			me.__70.style.transition='none';
			me.__70.style.visibility='hidden';
			me.__70.ggVisible=false;
		}
		me._image_37.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me._image_37);
		me.__70.appendChild(me.__71);
		me.divSkin.appendChild(me.__70);
		el=me.__80=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5\ucc3d8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__80.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		el=me.__81=document.createElement('div');
		el.ggId="\uc81c\ud488\ud31d\uc5c5\ucc3d \ubc30\uacbd8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__81.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		el=me.__82=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5-8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__82.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		el=me.__83=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ubc30\uacbd-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__83.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		el=me.__811=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc81c\ud488\uc124\uba85-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__811.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__811.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_48=document.createElement('div');
		els=me._image_48__img=document.createElement('img');
		els.className='ggskin ggskin_image_48';
		hs=basePath + 'images/image_48.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 63.69%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_48.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_58=document.createElement('div');
		els=me._text_58__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : -34px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_58.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX_D", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_58.ggUpdateText();
		el.appendChild(els);
		me._text_58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_58.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_68=document.createElement('div');
		els=me._text_68__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -68px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_68.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX_D\ub294 \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd \uccb4\uc678 \ucda9\uaca9\ud30c \uc1c4\uc11d\uae30\ub85c \uc804\uc790\ud29c\ube0c\uc5d0 \uc758\ud574 \ubc1c\uc0dd\ub418\ub294 \ucda9\uaca9\ud30c\ub97c \uccb4\ub0b4\uc5d0 \uc804\ub2ec\ud558\uc5ec \uc694\ub85c, \uc2e0\uc7a5 \ub4f1\uc758 \uacb0\uc11d\uc744 \ud30c\uc1c4\ud558\ub294 \uae30\uae30\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_68.ggUpdateText();
		el.appendChild(els);
		me._text_68.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_68.ggUpdatePosition=function (useTransition) {
		}
		me._text_58.appendChild(me._text_68);
		me._image_48.appendChild(me._text_58);
		me.__811.appendChild(me._image_48);
		el=me.__816=document.createElement('div');
		els=me.__816__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c\uc138\ubd80\uc815\ubcf4-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__816.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__816.ggUpdateText();
		el.appendChild(els);
		me.__816.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__816.ggUpdatePosition=function (useTransition) {
		}
		me.__811.appendChild(me.__816);
		el=me.__815=document.createElement('div');
		els=me.__815__img=document.createElement('img');
		els.className='ggskin ggskin__815';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5xJREFUeF7tm11S6zAMhe2yIpq8X9hMuwxgGc1m6H1PyoqoGRkcHNeJJVtK3Sl9YYDm53w+UmTF1mqFT9u2T+p8foJLGWP+jZfU2v5NGXOEH1rr//7t9KfTq/TtaYkLWMGg6/PzRTmRmRfSSr3BoVIwWAGAcA7Rs6yMOYJLOGGwABAXHiECzuAAUQTgGsJDFqUgsgDUINwHUQKBDMCKP5/fM3Oa6GF6s3nu+94+UbAfEoB2u301Sr1gT36N71HdgAbALb5pGsunaVs19L0ahoGNFwUCCgCneBC+2++VA+Cr7rpOdYcDCwgshCQAbvGHrlsUuN/t2NyAgbAIgFM8qAbxsZH3iUAoAASuTwrCLADubA/CU6PvRHO6wM4xFp4Osw'+
			'Ca7dZwjQKcB+J+hxxZbgBLEKIAuK1PBcCZDMdBNOY4fHw8RyrJ6Z8kxFcBYCYULhzAbX2HlxICIg6AG4m4YAJAavRrcUAsF0wASI1+TQBCF4wAJEe/KgBBLhgBNI+P76Xtq6XHZhU5wN2glwt+ATA/90MYVQHwXGABSNu/thDwk+HdAnDJ0AKQzP5V1QFBXA6nk9Zr2L/GEHBhQAbgd3IokyU4LjUVdueDKXFOh4jaWYKpMhrAUieHAkL6uwAOukoYgGgAlEeYtEDs+VFTanjThCmAesaGJVZA6fdQnSUMAEonp/SmuY9PusACSFSAt2h/BzIJACrCFIBbdgCmr5DMAbcMIOkATA4AO2Ha2dzxy3G+9uft0+y5sABu0QUo+/8VQoRK0NnIlrRtS3aodCkMZTB8MBWgu/nvSnCl9/2UxynGvuQRiBxgAdz9dNgCEO4H'+
			'1jgddi9NvztCK4RBbSFw9wCgG2SbImN2Fw6DqhwQa4tLh0FNAPxFE9NXY4IuqAmAs/8kBKSTYS0AwiUzl6/HhVxQCwB/9C8cIOmCGgDEFkxFl8hIFEbXBjC3Wiy+RkigMKJMqSXmAqH1vQlRfFrB/VikAEh2cogzoaxlcjYfMC+OxnSWUO1sAoDshZLuGpwQMC7gHP2U+OhTIAaXE8JcMqS80sIYACMeDUAiHFxnKaeTkwKAFU8CIAEhJSTn/xTxZACShVKO2PAY8S0z/gU580KxeOjvPzy8UfcLZTmgKggFwpOFEGVUVncDg3BWAJOaATZHF+4XnoXPKFwEQBge8HvxNrsf0XCunBhPOTm5aSp1Asz/IUT8741b6IPt8zYpuS30m81RQnB4v18pFcebm87ZiwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub354\ud558\uae30-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__815.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__815.onclick=function (e) {
			me.__812.style.transition='none';
			me.__812.style.visibility=(Number(me.__812.style.opacity)>0||!me.__812.style.opacity)?'inherit':'hidden';
			me.__812.ggVisible=true;
			me.__815.style.transition='none';
			me.__815.style.visibility='hidden';
			me.__815.ggVisible=false;
			me.__814.style.transition='none';
			me.__814.style.visibility=(Number(me.__814.style.opacity)>0||!me.__814.style.opacity)?'inherit':'hidden';
			me.__814.ggVisible=true;
		}
		me.__815.onmouseover=function (e) {
			me.elementMouseOver['_815']=true;
			me._text_78.logicBlock_visible();
		}
		me.__815.onmouseout=function (e) {
			me.elementMouseOver['_815']=false;
			me._text_78.logicBlock_visible();
		}
		me.__815.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_815']) {
				me.elementMouseOver['_815']=true;
				me._text_78.logicBlock_visible();
			}
		}
		me.__815.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_78=document.createElement('div');
		els=me._text_78__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7-8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_78.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_78.ggUpdateText();
		el.appendChild(els);
		me._text_78.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_78.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_815'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_78.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_78.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_78.style.transition='';
				if (me._text_78.ggCurrentLogicStateVisible == 0) {
					me._text_78.style.visibility=(Number(me._text_78.style.opacity)>0||!me._text_78.style.opacity)?'inherit':'hidden';
					me._text_78.ggVisible=true;
				}
				else {
					me._text_78.style.visibility="hidden";
					me._text_78.ggVisible=false;
				}
			}
		}
		me._text_78.logicBlock_visible();
		me._text_78.ggUpdatePosition=function (useTransition) {
		}
		me.__815.appendChild(me._text_78);
		me.__811.appendChild(me.__815);
		el=me.__814=document.createElement('div');
		els=me.__814__img=document.createElement('img');
		els.className='ggskin ggskin__814';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAvtJREFUeF7tm1t2gjAQhhP7ZBdR11DhvXYzuIzWZchmtO+ga7CLqE+anomGQghkwqXmAi8eldv/zZ/JEBJK/mGL43hFrtcVXIox9lZcklL+G2FsDx+U0q/y7WSHw+fYt0fHuAAXDLoulw8iRHa8ECVkA4eOBWNQACB8CNGNrBjbg0uGhDEIgNGFK4iAM4YA0QvAI4TLLPqC6ATABuFlEH0gGAPg4q/XXcecNuphdDZ7z7KM9yjYzQhAvFx+MkI+sCd/xH6mbkADcEG8AG4CAQXAJfGmELQAXBRvAqEVgMvisRAaAdic7U2Ta1vv0AggWi6Z6YVs3r8JghKAD9avBYOxfX48visqyepPXoq/S1S5oOYA36xfCa/CBRUAPke/6B'+
			'WkcrkCwOvoCwKSCwoAIURf5YICQPT6uus7fGVzN9iUC/4AeNbv64IhegQOICT7y80gWAAwFA+FEQcQRPZXtIn8cKA0RPuXm4ExgCiKSJ7nuhzzkP9fFgvyfTqhrw0jR2gAIDxZrwl82rxBcNLtFhUkNAAQniSJzbpr97ZOEj0EeNOEKYAySy3fFhFwAkBo3TAAwPLbNHUq+uJmtS7gADQVoIv2RwOAV/I6AC47IE1TnhDbNm0OcBkArgkgngIhB9je/amiHOu6bEwS5KWyg4kQZf+pEDKoBIXFbC6Fn+dz8nM+o7vsWyVo8ft+tJKOO3IAwT8OcwCInqAjZGsPE3MIbiNCATaD4AHAaBAEfxoWF400pGZQnkNUfTUWSDIU9q80gVCSoTyDrP563HMXlKNfc4DvLlDNH1ROkfGxMGqaPKmeI+RhYSRbX/R+0zS5tmLd'+
			'h9dmunnD01RZzOOai07QRV6bA2QwLkHAilfWAa7nBBPxxgBsL5RGXzJTdodVTQLG95+eNqbrhTo5wCoIPYQbJ0GrcsMAwgcFUAyqwKoyWBzdc71wI+wBhY8CQG4e8L33Mru7aDhXlzauq3O0laDuBJj/IWGW9yuW0EvL53lSEkvoZ7P9GILl+/0FIEjgjMT80c8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ube7c\uae30-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__814.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__814.onclick=function (e) {
			me.__815.style.transition='none';
			me.__815.style.visibility=(Number(me.__815.style.opacity)>0||!me.__815.style.opacity)?'inherit':'hidden';
			me.__815.ggVisible=true;
			me.__814.style.transition='none';
			me.__814.style.visibility='hidden';
			me.__814.ggVisible=false;
			me.__812.style.transition='none';
			me.__812.style.visibility='hidden';
			me.__812.ggVisible=false;
		}
		me.__814.onmouseover=function (e) {
			me.elementMouseOver['_814']=true;
			me._text_88.logicBlock_visible();
		}
		me.__814.onmouseout=function (e) {
			me.elementMouseOver['_814']=false;
			me._text_88.logicBlock_visible();
		}
		me.__814.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_814']) {
				me.elementMouseOver['_814']=true;
				me._text_88.logicBlock_visible();
			}
		}
		me.__814.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_88=document.createElement('div');
		els=me._text_88__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8-8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_88.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2eb\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_88.ggUpdateText();
		el.appendChild(els);
		me._text_88.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_88.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_814'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_88.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_88.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_88.style.transition='';
				if (me._text_88.ggCurrentLogicStateVisible == 0) {
					me._text_88.style.visibility=(Number(me._text_88.style.opacity)>0||!me._text_88.style.opacity)?'inherit':'hidden';
					me._text_88.ggVisible=true;
				}
				else {
					me._text_88.style.visibility="hidden";
					me._text_88.ggVisible=false;
				}
			}
		}
		me._text_88.logicBlock_visible();
		me._text_88.ggUpdatePosition=function (useTransition) {
		}
		me.__814.appendChild(me._text_88);
		me.__811.appendChild(me.__814);
		el=me.__812=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ubc30\uacbd-8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__812.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__812.ggUpdatePosition=function (useTransition) {
		}
		el=me.__813=document.createElement('div');
		els=me.__813__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub354\ubcf4\uae30 \uc0c1\uc138-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 89%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all\"';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__813.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uae30\ub300 \ud6a8\ub2a5<\/b>\n- \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd\uc5d0 \uc758\ud55c \ucda9\uaca9\ud30c \ubc1c\uc0dd, \uc2e0\uc7a5 \ubc0f \uc694\uad00\uc758 \uacb0\uc11d \ud30c\uc1c4\n- C-arm\ud615 X-ray \ub514\ud14d\ud130\ub97c \ud1b5\ud55c \uacb0\uc11d \uc704\uce58 \ud655\uc778\n- \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \ud1b5\ud55c \ud658\uc790\uc815\ubcf4\uc758 \uc785\ub825 \ubc0f \uc800\uc7a5\n\n<b>*\ud06c\uae30<\/b>\n- C-arm: 640 * 1380 * 1530(mm)\n\n<b>*\uc911\ub7c9<\/b>\n- C-arm : 350kg\n- \ud658\uc790\ud14c\uc774\ube14 : 150kg\n- \uc870\uc791\ubd80 : 35kg\n- \uc778\ubc84\ud130 \uc81c\uc5b4\ubd80 : 40kg\n- \ub9ac\ubaa8\ucf58 \ubc0f \ubc1c\ud310 \uc2a4\uc704\uce58 : \uc57d 300g\n\n<b>*\uc804\uae30\uc801 \uc815\uaca9<\/b>\n- \ub2e8\uc0c1 220V, 60Hz\n\n<b>*\uad6c\uc131\ud488<\/b>\n- X\uc120 \ubc1c\uc0dd\uae30 \n- C-arm\n- \ub514\ud14d\ud130\n- \uc870\uc791\ubd80\n- \ub9ac\ubaa8\ucf58\n- \ud658\uc790\ud14c\uc774\ube14\n- \uc778\ubc84\ud130 \uc81c\uc5b4\ubd80\n- \ucda9\uaca9\ud30c\ud5e4\ub4dc\n- \ub9ac\ud50c\ub809\ud130\n- \ubc1c\ud310\uc2a4\uc704\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__813.ggUpdateText();
		el.appendChild(els);
		me.__813.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__813.ggUpdatePosition=function (useTransition) {
		}
		me.__812.appendChild(me.__813);
		me.__811.appendChild(me.__812);
		me.__83.appendChild(me.__811);
		el=me.__85=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__85.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__85.ggUpdatePosition=function (useTransition) {
		}
		el=me.__87=document.createElement('div');
		el.ggId="\uc124\uba85\ucee8\ud14c\uc774\ub108-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 678px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 51%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__87.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__87.ggUpdatePosition=function (useTransition) {
		}
		el=me.__810=document.createElement('div');
		els=me.__810__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 2px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__810.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-MXD", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__810.ggUpdateText();
		el.appendChild(els);
		me.__810.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__810.ggUpdatePosition=function (useTransition) {
		}
		me.__87.appendChild(me.__810);
		el=me.__88=document.createElement('div');
		els=me.__88__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc124\uba85-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 69px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 52px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__88.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__88.ggUpdateText();
		el.appendChild(els);
		me.__88.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__88.ggUpdatePosition=function (useTransition) {
		}
		el=me.__89=document.createElement('div');
		els=me.__89__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc138\ubd80\uc124\uba85-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -48px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__89.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-MXD\ub294 \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd \uccb4\uc678 \ucda9\uaca9\ud30c \uc1c4\uc11d\uae30\ub85c \uc804\uc790\ud29c\ube0c\uc5d0 \uc758\ud574 \ubc1c\uc0dd\ub418\ub294 \ucda9\uaca9\ud30c\ub97c \uccb4\ub0b4\uc5d0 \uc804\ub2ec\ud558\uc5ec \uc694\ub85c, \uc2e0\uc7a5 \ub4f1\uc758 \uacb0\uc11d\uc744 \ud30c\uc1c4\ud558\ub294 \uae30\uae30\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__89.ggUpdateText();
		el.appendChild(els);
		me.__89.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__89.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_38=document.createElement('div');
		els=me._text_38__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_38.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uae30\ub300 \ud6a8\ub2a5<\/b>\n- \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd\uc5d0 \uc758\ud55c \ucda9\uaca9\ud30c \ubc1c\uc0dd, \uc2e0\uc7a5 \ubc0f \uc694\uad00\uc758 \uacb0\uc11d \ud30c\uc1c4\n- C-arm\ud615 X-ray \ub514\ud14d\ud130\ub97c \ud1b5\ud55c \uacb0\uc11d \uc704\uce58 \ud655\uc778\n- \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \ud1b5\ud55c \ud658\uc790\uc815\ubcf4\uc758 \uc785\ub825 \ubc0f \uc800\uc7a5\n\n<b>*\ud06c\uae30<\/b>\n- C-arm: 600 * 1192 * 1727(mm)\n\n<b>*\uc911\ub7c9<\/b>\n- C-arm : 185kg\n- \ud658\uc790\ud14c\uc774\ube14 : 150kg\n- \uc870\uc791\ubd80 : 40kg\n- \uc778\ubc84\ud130 \uc81c\uc5b4\ubd80 : 35kg\n- \ub9ac\ubaa8\ucf58 \ubc0f \ubc1c\ud310 \uc2a4\uc704\uce58 : \uc57d 300g\n\n<b>*\uc804\uae30\uc801 \uc815\uaca9<\/b>\n- \ub2e8\uc0c1 220V, 60Hz\n\n<b>*\uad6c\uc131\ud488<\/b>\n- X\uc120 \ubc1c\uc0dd\uae30 \n- C-arm\n- \ub514\ud14d\ud130\n- \uc870\uc791\ubd80\n- \ub9ac\ubaa8\ucf58\n- \ud658\uc790\ud14c\uc774\ube14\n- \uc778\ubc84\ud130 \uc81c\uc5b4\ubd80\n- \ucda9\uaca9\ud30c\ud5e4\ub4dc\n- \ub9ac\ud50c\ub809\ud130\n- \ubc1c\ud310\uc2a4\uc704\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_38.ggUpdateText();
		el.appendChild(els);
		me._text_38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_38.ggUpdatePosition=function (useTransition) {
		}
		me.__89.appendChild(me._text_38);
		me.__88.appendChild(me.__89);
		me.__87.appendChild(me.__88);
		me.__85.appendChild(me.__87);
		el=me.__86=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__86.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__86.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_28=document.createElement('div');
		els=me._image_28__img=document.createElement('img');
		els.className='ggskin ggskin_image_28';
		hs=basePath + 'images/image_28.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 133.323%;';
		hs+='left : calc(50% - ((85.24% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((133.323% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85.24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_28.ggUpdatePosition=function (useTransition) {
		}
		me.__86.appendChild(me._image_28);
		me.__85.appendChild(me.__86);
		el=me._text_28=document.createElement('div');
		els=me._text_28__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 20px 15px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_28.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_28.ggUpdateText();
		el.appendChild(els);
		me._text_28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_28.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me._text_28);
		me.__83.appendChild(me.__85);
		el=me.__84=document.createElement('div');
		els=me.__84__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__84.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__84.ggUpdateText();
		el.appendChild(els);
		me.__84.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		me.__83.appendChild(me.__84);
		me.__82.appendChild(me.__83);
		me.__81.appendChild(me.__82);
		el=me._image_38=document.createElement('div');
		els=me._image_38__img=document.createElement('img');
		els.className='ggskin ggskin_image_38';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_38.onclick=function (e) {
			me.__80.style.transition='none';
			me.__80.style.visibility='hidden';
			me.__80.ggVisible=false;
		}
		me._image_38.ggUpdatePosition=function (useTransition) {
		}
		me.__81.appendChild(me._image_38);
		me.__80.appendChild(me.__81);
		me.divSkin.appendChild(me.__80);
		el=me.__90=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5\ucc3d9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__90.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__90.ggUpdatePosition=function (useTransition) {
		}
		el=me.__91=document.createElement('div');
		el.ggId="\uc81c\ud488\ud31d\uc5c5\ucc3d \ubc30\uacbd9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__91.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__91.ggUpdatePosition=function (useTransition) {
		}
		el=me.__92=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5-9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__92.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__92.ggUpdatePosition=function (useTransition) {
		}
		el=me.__93=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ubc30\uacbd-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__93.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__93.ggUpdatePosition=function (useTransition) {
		}
		el=me.__911=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc81c\ud488\uc124\uba85-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__911.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__911.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_49=document.createElement('div');
		els=me._image_49__img=document.createElement('img');
		els.className='ggskin ggskin_image_49';
		hs=basePath + 'images/image_49.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 63.69%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_49.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_59=document.createElement('div');
		els=me._text_59__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : -34px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_59.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_59.ggUpdateText();
		el.appendChild(els);
		me._text_59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_59.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_69=document.createElement('div');
		els=me._text_69__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -68px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_69.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX\ub294 \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd \uccb4\uc678 \ucda9\uaca9\ud30c \uc1c4\uc11d\uae30\ub85c \uc804\uc790\ud29c\ube0c\uc5d0 \uc758\ud574 \ubc1c\uc0dd\ub418\ub294 \ucda9\uaca9\ud30c\ub97c \uccb4\ub0b4\uc5d0 \uc804\ub2ec\ud558\uc5ec \uc694\ub85c, \uc2e0\uc7a5 \ub4f1\uc758 \uacb0\uc11d\uc744 \ud30c\uc1c4\ud558\ub294 \uae30\uae30\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_69.ggUpdateText();
		el.appendChild(els);
		me._text_69.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_69.ggUpdatePosition=function (useTransition) {
		}
		me._text_59.appendChild(me._text_69);
		me._image_49.appendChild(me._text_59);
		me.__911.appendChild(me._image_49);
		el=me.__916=document.createElement('div');
		els=me.__916__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c\uc138\ubd80\uc815\ubcf4-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__916.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__916.ggUpdateText();
		el.appendChild(els);
		me.__916.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__916.ggUpdatePosition=function (useTransition) {
		}
		me.__911.appendChild(me.__916);
		el=me.__915=document.createElement('div');
		els=me.__915__img=document.createElement('img');
		els.className='ggskin ggskin__915';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5xJREFUeF7tm11S6zAMhe2yIpq8X9hMuwxgGc1m6H1PyoqoGRkcHNeJJVtK3Sl9YYDm53w+UmTF1mqFT9u2T+p8foJLGWP+jZfU2v5NGXOEH1rr//7t9KfTq/TtaYkLWMGg6/PzRTmRmRfSSr3BoVIwWAGAcA7Rs6yMOYJLOGGwABAXHiECzuAAUQTgGsJDFqUgsgDUINwHUQKBDMCKP5/fM3Oa6GF6s3nu+94+UbAfEoB2u301Sr1gT36N71HdgAbALb5pGsunaVs19L0ahoGNFwUCCgCneBC+2++VA+Cr7rpOdYcDCwgshCQAbvGHrlsUuN/t2NyAgbAIgFM8qAbxsZH3iUAoAASuTwrCLADubA/CU6PvRHO6wM4xFp4Osw'+
			'Ca7dZwjQKcB+J+hxxZbgBLEKIAuK1PBcCZDMdBNOY4fHw8RyrJ6Z8kxFcBYCYULhzAbX2HlxICIg6AG4m4YAJAavRrcUAsF0wASI1+TQBCF4wAJEe/KgBBLhgBNI+P76Xtq6XHZhU5wN2glwt+ATA/90MYVQHwXGABSNu/thDwk+HdAnDJ0AKQzP5V1QFBXA6nk9Zr2L/GEHBhQAbgd3IokyU4LjUVdueDKXFOh4jaWYKpMhrAUieHAkL6uwAOukoYgGgAlEeYtEDs+VFTanjThCmAesaGJVZA6fdQnSUMAEonp/SmuY9PusACSFSAt2h/BzIJACrCFIBbdgCmr5DMAbcMIOkATA4AO2Ha2dzxy3G+9uft0+y5sABu0QUo+/8VQoRK0NnIlrRtS3aodCkMZTB8MBWgu/nvSnCl9/2UxynGvuQRiBxgAdz9dNgCEO4H'+
			'1jgddi9NvztCK4RBbSFw9wCgG2SbImN2Fw6DqhwQa4tLh0FNAPxFE9NXY4IuqAmAs/8kBKSTYS0AwiUzl6/HhVxQCwB/9C8cIOmCGgDEFkxFl8hIFEbXBjC3Wiy+RkigMKJMqSXmAqH1vQlRfFrB/VikAEh2cogzoaxlcjYfMC+OxnSWUO1sAoDshZLuGpwQMC7gHP2U+OhTIAaXE8JcMqS80sIYACMeDUAiHFxnKaeTkwKAFU8CIAEhJSTn/xTxZACShVKO2PAY8S0z/gU580KxeOjvPzy8UfcLZTmgKggFwpOFEGVUVncDg3BWAJOaATZHF+4XnoXPKFwEQBge8HvxNrsf0XCunBhPOTm5aSp1Asz/IUT8741b6IPt8zYpuS30m81RQnB4v18pFcebm87ZiwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub354\ud558\uae30-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__915.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__915.onclick=function (e) {
			me.__912.style.transition='none';
			me.__912.style.visibility=(Number(me.__912.style.opacity)>0||!me.__912.style.opacity)?'inherit':'hidden';
			me.__912.ggVisible=true;
			me.__915.style.transition='none';
			me.__915.style.visibility='hidden';
			me.__915.ggVisible=false;
			me.__914.style.transition='none';
			me.__914.style.visibility=(Number(me.__914.style.opacity)>0||!me.__914.style.opacity)?'inherit':'hidden';
			me.__914.ggVisible=true;
		}
		me.__915.onmouseover=function (e) {
			me.elementMouseOver['_915']=true;
			me._text_79.logicBlock_visible();
		}
		me.__915.onmouseout=function (e) {
			me.elementMouseOver['_915']=false;
			me._text_79.logicBlock_visible();
		}
		me.__915.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_915']) {
				me.elementMouseOver['_915']=true;
				me._text_79.logicBlock_visible();
			}
		}
		me.__915.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_79=document.createElement('div');
		els=me._text_79__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7-9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_79.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_79.ggUpdateText();
		el.appendChild(els);
		me._text_79.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_79.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_915'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_79.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_79.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_79.style.transition='';
				if (me._text_79.ggCurrentLogicStateVisible == 0) {
					me._text_79.style.visibility=(Number(me._text_79.style.opacity)>0||!me._text_79.style.opacity)?'inherit':'hidden';
					me._text_79.ggVisible=true;
				}
				else {
					me._text_79.style.visibility="hidden";
					me._text_79.ggVisible=false;
				}
			}
		}
		me._text_79.logicBlock_visible();
		me._text_79.ggUpdatePosition=function (useTransition) {
		}
		me.__915.appendChild(me._text_79);
		me.__911.appendChild(me.__915);
		el=me.__914=document.createElement('div');
		els=me.__914__img=document.createElement('img');
		els.className='ggskin ggskin__914';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAvtJREFUeF7tm1t2gjAQhhP7ZBdR11DhvXYzuIzWZchmtO+ga7CLqE+anomGQghkwqXmAi8eldv/zZ/JEBJK/mGL43hFrtcVXIox9lZcklL+G2FsDx+U0q/y7WSHw+fYt0fHuAAXDLoulw8iRHa8ECVkA4eOBWNQACB8CNGNrBjbg0uGhDEIgNGFK4iAM4YA0QvAI4TLLPqC6ATABuFlEH0gGAPg4q/XXcecNuphdDZ7z7KM9yjYzQhAvFx+MkI+sCd/xH6mbkADcEG8AG4CAQXAJfGmELQAXBRvAqEVgMvisRAaAdic7U2Ta1vv0AggWi6Z6YVs3r8JghKAD9avBYOxfX48visqyepPXoq/S1S5oOYA36xfCa/CBRUAPke/6B'+
			'WkcrkCwOvoCwKSCwoAIURf5YICQPT6uus7fGVzN9iUC/4AeNbv64IhegQOICT7y80gWAAwFA+FEQcQRPZXtIn8cKA0RPuXm4ExgCiKSJ7nuhzzkP9fFgvyfTqhrw0jR2gAIDxZrwl82rxBcNLtFhUkNAAQniSJzbpr97ZOEj0EeNOEKYAySy3fFhFwAkBo3TAAwPLbNHUq+uJmtS7gADQVoIv2RwOAV/I6AC47IE1TnhDbNm0OcBkArgkgngIhB9je/amiHOu6bEwS5KWyg4kQZf+pEDKoBIXFbC6Fn+dz8nM+o7vsWyVo8ft+tJKOO3IAwT8OcwCInqAjZGsPE3MIbiNCATaD4AHAaBAEfxoWF400pGZQnkNUfTUWSDIU9q80gVCSoTyDrP563HMXlKNfc4DvLlDNH1ROkfGxMGqaPKmeI+RhYSRbX/R+0zS5tmLd'+
			'h9dmunnD01RZzOOai07QRV6bA2QwLkHAilfWAa7nBBPxxgBsL5RGXzJTdodVTQLG95+eNqbrhTo5wCoIPYQbJ0GrcsMAwgcFUAyqwKoyWBzdc71wI+wBhY8CQG4e8L33Mru7aDhXlzauq3O0laDuBJj/IWGW9yuW0EvL53lSEkvoZ7P9GILl+/0FIEjgjMT80c8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ube7c\uae30-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__914.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__914.onclick=function (e) {
			me.__915.style.transition='none';
			me.__915.style.visibility=(Number(me.__915.style.opacity)>0||!me.__915.style.opacity)?'inherit':'hidden';
			me.__915.ggVisible=true;
			me.__914.style.transition='none';
			me.__914.style.visibility='hidden';
			me.__914.ggVisible=false;
			me.__912.style.transition='none';
			me.__912.style.visibility='hidden';
			me.__912.ggVisible=false;
		}
		me.__914.onmouseover=function (e) {
			me.elementMouseOver['_914']=true;
			me._text_89.logicBlock_visible();
		}
		me.__914.onmouseout=function (e) {
			me.elementMouseOver['_914']=false;
			me._text_89.logicBlock_visible();
		}
		me.__914.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_914']) {
				me.elementMouseOver['_914']=true;
				me._text_89.logicBlock_visible();
			}
		}
		me.__914.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_89=document.createElement('div');
		els=me._text_89__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8-9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_89.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2eb\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_89.ggUpdateText();
		el.appendChild(els);
		me._text_89.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_89.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_914'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_89.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_89.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_89.style.transition='';
				if (me._text_89.ggCurrentLogicStateVisible == 0) {
					me._text_89.style.visibility=(Number(me._text_89.style.opacity)>0||!me._text_89.style.opacity)?'inherit':'hidden';
					me._text_89.ggVisible=true;
				}
				else {
					me._text_89.style.visibility="hidden";
					me._text_89.ggVisible=false;
				}
			}
		}
		me._text_89.logicBlock_visible();
		me._text_89.ggUpdatePosition=function (useTransition) {
		}
		me.__914.appendChild(me._text_89);
		me.__911.appendChild(me.__914);
		el=me.__912=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ubc30\uacbd-9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__912.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__912.ggUpdatePosition=function (useTransition) {
		}
		el=me.__913=document.createElement('div');
		els=me.__913__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub354\ubcf4\uae30 \uc0c1\uc138-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 89%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all\"';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__913.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\uba85<\/b>\n- \uc804\uae30\uccb4\uc678\ucda9\uaca9\ud30c\uc1c4\uc11d\uae30\n\n<b>*\uc0ac\uc6a9\ubaa9\uc801<\/b>\n- \ucd08\uc74c\ud30c, \uc804\uae30 \ucda9\uaca9 \ud384\uc2a4 \ub4f1\uc73c\ub85c \uccb4\uc678\uc5d0\uc11c \uacb0\uc11d\uc744 \ud30c\uad34\ud558\ub294 \uae30\uad6c\n\n<b>*\uc804\uae30\uc815\uaca9<\/b>\n- \uc18c\ube44\uc804\ub825 : 3.5 kW\n\n<b>*\uc804\uae30\ucda9\uaca9\uc5d0 \ub300\ud55c \ubcf4\ud638\ud615\uc2dd \ubc0f \ubcf4\ud638\uc815\ub3c4<\/b>\n- 1\uae09 B\ud615 \uae30\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__913.ggUpdateText();
		el.appendChild(els);
		me.__913.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__913.ggUpdatePosition=function (useTransition) {
		}
		me.__912.appendChild(me.__913);
		me.__911.appendChild(me.__912);
		me.__93.appendChild(me.__911);
		el=me.__95=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__95.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__95.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__95.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__95.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__95.style.transition='';
				if (me.__95.ggCurrentLogicStateVisible == 0) {
					me.__95.style.visibility="hidden";
					me.__95.ggVisible=false;
				}
				else {
					me.__95.style.visibility=(Number(me.__95.style.opacity)>0||!me.__95.style.opacity)?'inherit':'hidden';
					me.__95.ggVisible=true;
				}
			}
		}
		me.__95.logicBlock_visible();
		me.__95.ggUpdatePosition=function (useTransition) {
		}
		el=me.__97=document.createElement('div');
		el.ggId="\uc124\uba85\ucee8\ud14c\uc774\ub108-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 678px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 51%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__97.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__97.ggUpdatePosition=function (useTransition) {
		}
		el=me.__910=document.createElement('div');
		els=me.__910__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 2px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__910.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__910.ggUpdateText();
		el.appendChild(els);
		me.__910.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__910.ggUpdatePosition=function (useTransition) {
		}
		me.__97.appendChild(me.__910);
		el=me.__98=document.createElement('div');
		els=me.__98__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc124\uba85-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 102px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 76px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__98.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX\ub294 \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd \uccb4\uc678 \ucda9\uaca9\ud30c \uc1c4\uc11d\uae30\ub85c \uc804\uc790\ud29c\ube0c\uc5d0 \uc758\ud574 \ubc1c\uc0dd\ub418\ub294 \ucda9\uaca9\ud30c\ub97c \uccb4\ub0b4\uc5d0 \uc804\ub2ec\ud558\uc5ec \uc694\ub85c, \uc2e0\uc7a5 \ub4f1\uc758 \uacb0\uc11d\uc744 \ud30c\uc1c4\ud558\ub294 \uae30\uae30\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__98.ggUpdateText();
		el.appendChild(els);
		me.__98.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__98.ggUpdatePosition=function (useTransition) {
		}
		el=me.__99=document.createElement('div');
		els=me.__99__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc138\ubd80\uc124\uba85-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -48px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__99.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX\ub294 \ub9c8\uadf8\ub124\ud2f1\ubc29\uc2dd\uc5d0 \uc758\ud55c \ucda9\uaca9\ud30c\ub97c \ubc1c\uc0dd\uc2dc\ucf1c \ud658\uc790\uc5d0\uac8c \uc801\uc6a9\ud568\uc73c\ub85c \uc694\uad00\uc758 \uacb0\uc11d\uc744 \ud30c\uc1c4\ud558\ub294 \uae30\uae30\ub85c, C-arm\ud615 X\uc120\ud22c\uc2dc\ucd2c\uc601\uc7a5\uce58\ub97c \uc0ac\uc6a9\ud558\uc5ec \uacb0\uc11d\uc758 \uc704\uce58\ub97c \ucc3e\uc544 \ucda9\uaca9\ud30c\ubc1c\uc0dd\uae30\uc640 \ucd08\uc810\uc744 \uc77c\uce58\uc2dc\ucf1c \uc815\ud655\ud558\uac8c \uacb0\uc11d\uc744 \ud30c\uc1c4\ud569\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__99.ggUpdateText();
		el.appendChild(els);
		me.__99.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__99.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_39=document.createElement('div');
		els=me._text_39__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 162px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_39.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\uba85<\/b>\n- \uc804\uae30\uccb4\uc678\ucda9\uaca9\ud30c\uc1c4\uc11d\uae30\n\n<b>*\uc0ac\uc6a9\ubaa9\uc801<\/b>\n- \ucd08\uc74c\ud30c, \uc804\uae30 \ucda9\uaca9 \ud384\uc2a4 \ub4f1\uc73c\ub85c \uccb4\uc678\uc5d0\uc11c \uacb0\uc11d\uc744 \ud30c\uad34\ud558\ub294 \uae30\uad6c\n\n<b>*\uc804\uae30\uc815\uaca9<\/b>\n- \uc18c\ube44\uc804\ub825 : 3.5 kW\n\n<b>*\uc804\uae30\ucda9\uaca9\uc5d0 \ub300\ud55c \ubcf4\ud638\ud615\uc2dd \ubc0f \ubcf4\ud638\uc815\ub3c4<\/b>\n- 1\uae09 B\ud615 \uae30\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_39.ggUpdateText();
		el.appendChild(els);
		me._text_39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_39.ggUpdatePosition=function (useTransition) {
		}
		me.__99.appendChild(me._text_39);
		me.__98.appendChild(me.__99);
		me.__97.appendChild(me.__98);
		me.__95.appendChild(me.__97);
		el=me.__96=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__96.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__96.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_29=document.createElement('div');
		els=me._image_29__img=document.createElement('img');
		els.className='ggskin ggskin_image_29';
		hs=basePath + 'images/image_29.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 133.323%;';
		hs+='left : calc(50% - ((85.24% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((133.323% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85.24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_29.ggUpdatePosition=function (useTransition) {
		}
		me.__96.appendChild(me._image_29);
		me.__95.appendChild(me.__96);
		el=me._text_29=document.createElement('div');
		els=me._text_29__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-9";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 20px 15px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_29.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_29.ggUpdateText();
		el.appendChild(els);
		me._text_29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_29.ggUpdatePosition=function (useTransition) {
		}
		me.__95.appendChild(me._text_29);
		me.__93.appendChild(me.__95);
		el=me.__94=document.createElement('div');
		els=me.__94__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__94.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__94.ggUpdateText();
		el.appendChild(els);
		me.__94.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__94.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__94.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__94.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__94.style.transition='';
				if (me.__94.ggCurrentLogicStateVisible == 0) {
					me.__94.style.visibility="hidden";
					me.__94.ggVisible=false;
				}
				else {
					me.__94.style.visibility=(Number(me.__94.style.opacity)>0||!me.__94.style.opacity)?'inherit':'hidden';
					me.__94.ggVisible=true;
				}
			}
		}
		me.__94.logicBlock_visible();
		me.__94.ggUpdatePosition=function (useTransition) {
		}
		me.__93.appendChild(me.__94);
		me.__92.appendChild(me.__93);
		me.__91.appendChild(me.__92);
		el=me._image_39=document.createElement('div');
		els=me._image_39__img=document.createElement('img');
		els.className='ggskin ggskin_image_39';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3-9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_39.onclick=function (e) {
			me.__90.style.transition='none';
			me.__90.style.visibility='hidden';
			me.__90.ggVisible=false;
		}
		me._image_39.ggUpdatePosition=function (useTransition) {
		}
		me.__91.appendChild(me._image_39);
		me.__90.appendChild(me.__91);
		me.divSkin.appendChild(me.__90);
		el=me.__100=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5\ucc3d10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__100.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__100.ggUpdatePosition=function (useTransition) {
		}
		el=me.__101=document.createElement('div');
		el.ggId="\uc81c\ud488\ud31d\uc5c5\ucc3d \ubc30\uacbd10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__101.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__101.ggUpdatePosition=function (useTransition) {
		}
		el=me.__102=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5-10";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__102.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__102.ggUpdatePosition=function (useTransition) {
		}
		el=me.__103=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ubc30\uacbd-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__103.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__103.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1011=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc81c\ud488\uc124\uba85-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1011.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1011.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_410=document.createElement('div');
		els=me._image_410__img=document.createElement('img');
		els.className='ggskin ggskin_image_410';
		hs=basePath + 'images/image_410.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-10";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 63.69%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_410.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_410.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_510=document.createElement('div');
		els=me._text_510__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : -34px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_510.ggUpdateText=function() {
			var params = [];
			var hs = player._("IMPO 88", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_510.ggUpdateText();
		el.appendChild(els);
		me._text_510.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_510.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_610=document.createElement('div');
		els=me._text_610__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -68px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_610.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud68c\uc74c\ubd80\uc5d0 \uc800\uac15\ub3c4\uc758 \uccb4\uc678\ucda9\uaca9\ud30c\ub97c \uc804\ub2ec\ud558\uc5ec \ud608\uad00\ub0b4\ud53c\uc131\uc7a5\uc778\uc790\uc758 \ubc1c\ud604 \ubc0f \ub0b4\ud53c\uc804\uad6c\uc138\ud3ec\uc758 \ubaa8\uc9d1\uc744 \uc99d\uac00\uc2dc\ucf1c \ud68c\uc74c\ubd80\uc758 \ubaa8\uc138\ud608\uad00 \uc2e0\uc0dd\uc744 \ucd09\uc9c4, \ud608\ub958\uc7a5\uc560\ub85c \uc778\ud55c \ubc1c\uae30\ubd80\uc804 \ud658\uc790\uc758 \uc99d\uc0c1\uc744 \uac1c\uc120\uc2dc\ud0a4\ub294 \uccb4\uc678\ucda9\uaca9\ud30c\uce58\ub8cc\uae30 \uc785\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_610.ggUpdateText();
		el.appendChild(els);
		me._text_610.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_610.ggUpdatePosition=function (useTransition) {
		}
		me._text_510.appendChild(me._text_610);
		me._image_410.appendChild(me._text_510);
		me.__1011.appendChild(me._image_410);
		el=me.__1016=document.createElement('div');
		els=me.__1016__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c\uc138\ubd80\uc815\ubcf4-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1016.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1016.ggUpdateText();
		el.appendChild(els);
		me.__1016.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1016.ggUpdatePosition=function (useTransition) {
		}
		me.__1011.appendChild(me.__1016);
		el=me.__1015=document.createElement('div');
		els=me.__1015__img=document.createElement('img');
		els.className='ggskin ggskin__1015';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5xJREFUeF7tm11S6zAMhe2yIpq8X9hMuwxgGc1m6H1PyoqoGRkcHNeJJVtK3Sl9YYDm53w+UmTF1mqFT9u2T+p8foJLGWP+jZfU2v5NGXOEH1rr//7t9KfTq/TtaYkLWMGg6/PzRTmRmRfSSr3BoVIwWAGAcA7Rs6yMOYJLOGGwABAXHiECzuAAUQTgGsJDFqUgsgDUINwHUQKBDMCKP5/fM3Oa6GF6s3nu+94+UbAfEoB2u301Sr1gT36N71HdgAbALb5pGsunaVs19L0ahoGNFwUCCgCneBC+2++VA+Cr7rpOdYcDCwgshCQAbvGHrlsUuN/t2NyAgbAIgFM8qAbxsZH3iUAoAASuTwrCLADubA/CU6PvRHO6wM4xFp4Osw'+
			'Ca7dZwjQKcB+J+hxxZbgBLEKIAuK1PBcCZDMdBNOY4fHw8RyrJ6Z8kxFcBYCYULhzAbX2HlxICIg6AG4m4YAJAavRrcUAsF0wASI1+TQBCF4wAJEe/KgBBLhgBNI+P76Xtq6XHZhU5wN2glwt+ATA/90MYVQHwXGABSNu/thDwk+HdAnDJ0AKQzP5V1QFBXA6nk9Zr2L/GEHBhQAbgd3IokyU4LjUVdueDKXFOh4jaWYKpMhrAUieHAkL6uwAOukoYgGgAlEeYtEDs+VFTanjThCmAesaGJVZA6fdQnSUMAEonp/SmuY9PusACSFSAt2h/BzIJACrCFIBbdgCmr5DMAbcMIOkATA4AO2Ha2dzxy3G+9uft0+y5sABu0QUo+/8VQoRK0NnIlrRtS3aodCkMZTB8MBWgu/nvSnCl9/2UxynGvuQRiBxgAdz9dNgCEO4H'+
			'1jgddi9NvztCK4RBbSFw9wCgG2SbImN2Fw6DqhwQa4tLh0FNAPxFE9NXY4IuqAmAs/8kBKSTYS0AwiUzl6/HhVxQCwB/9C8cIOmCGgDEFkxFl8hIFEbXBjC3Wiy+RkigMKJMqSXmAqH1vQlRfFrB/VikAEh2cogzoaxlcjYfMC+OxnSWUO1sAoDshZLuGpwQMC7gHP2U+OhTIAaXE8JcMqS80sIYACMeDUAiHFxnKaeTkwKAFU8CIAEhJSTn/xTxZACShVKO2PAY8S0z/gU580KxeOjvPzy8UfcLZTmgKggFwpOFEGVUVncDg3BWAJOaATZHF+4XnoXPKFwEQBge8HvxNrsf0XCunBhPOTm5aSp1Asz/IUT8741b6IPt8zYpuS30m81RQnB4v18pFcebm87ZiwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub354\ud558\uae30-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1015.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1015.onclick=function (e) {
			me.__1012.style.transition='none';
			me.__1012.style.visibility=(Number(me.__1012.style.opacity)>0||!me.__1012.style.opacity)?'inherit':'hidden';
			me.__1012.ggVisible=true;
			me.__1015.style.transition='none';
			me.__1015.style.visibility='hidden';
			me.__1015.ggVisible=false;
			me.__1014.style.transition='none';
			me.__1014.style.visibility=(Number(me.__1014.style.opacity)>0||!me.__1014.style.opacity)?'inherit':'hidden';
			me.__1014.ggVisible=true;
		}
		me.__1015.onmouseover=function (e) {
			me.elementMouseOver['_1015']=true;
			me._text_710.logicBlock_visible();
		}
		me.__1015.onmouseout=function (e) {
			me.elementMouseOver['_1015']=false;
			me._text_710.logicBlock_visible();
		}
		me.__1015.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_1015']) {
				me.elementMouseOver['_1015']=true;
				me._text_710.logicBlock_visible();
			}
		}
		me.__1015.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_710=document.createElement('div');
		els=me._text_710__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7-10";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_710.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_710.ggUpdateText();
		el.appendChild(els);
		me._text_710.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_710.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_1015'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_710.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_710.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_710.style.transition='';
				if (me._text_710.ggCurrentLogicStateVisible == 0) {
					me._text_710.style.visibility=(Number(me._text_710.style.opacity)>0||!me._text_710.style.opacity)?'inherit':'hidden';
					me._text_710.ggVisible=true;
				}
				else {
					me._text_710.style.visibility="hidden";
					me._text_710.ggVisible=false;
				}
			}
		}
		me._text_710.logicBlock_visible();
		me._text_710.ggUpdatePosition=function (useTransition) {
		}
		me.__1015.appendChild(me._text_710);
		me.__1011.appendChild(me.__1015);
		el=me.__1014=document.createElement('div');
		els=me.__1014__img=document.createElement('img');
		els.className='ggskin ggskin__1014';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAvtJREFUeF7tm1t2gjAQhhP7ZBdR11DhvXYzuIzWZchmtO+ga7CLqE+anomGQghkwqXmAi8eldv/zZ/JEBJK/mGL43hFrtcVXIox9lZcklL+G2FsDx+U0q/y7WSHw+fYt0fHuAAXDLoulw8iRHa8ECVkA4eOBWNQACB8CNGNrBjbg0uGhDEIgNGFK4iAM4YA0QvAI4TLLPqC6ATABuFlEH0gGAPg4q/XXcecNuphdDZ7z7KM9yjYzQhAvFx+MkI+sCd/xH6mbkADcEG8AG4CAQXAJfGmELQAXBRvAqEVgMvisRAaAdic7U2Ta1vv0AggWi6Z6YVs3r8JghKAD9avBYOxfX48visqyepPXoq/S1S5oOYA36xfCa/CBRUAPke/6B'+
			'WkcrkCwOvoCwKSCwoAIURf5YICQPT6uus7fGVzN9iUC/4AeNbv64IhegQOICT7y80gWAAwFA+FEQcQRPZXtIn8cKA0RPuXm4ExgCiKSJ7nuhzzkP9fFgvyfTqhrw0jR2gAIDxZrwl82rxBcNLtFhUkNAAQniSJzbpr97ZOEj0EeNOEKYAySy3fFhFwAkBo3TAAwPLbNHUq+uJmtS7gADQVoIv2RwOAV/I6AC47IE1TnhDbNm0OcBkArgkgngIhB9je/amiHOu6bEwS5KWyg4kQZf+pEDKoBIXFbC6Fn+dz8nM+o7vsWyVo8ft+tJKOO3IAwT8OcwCInqAjZGsPE3MIbiNCATaD4AHAaBAEfxoWF400pGZQnkNUfTUWSDIU9q80gVCSoTyDrP563HMXlKNfc4DvLlDNH1ROkfGxMGqaPKmeI+RhYSRbX/R+0zS5tmLd'+
			'h9dmunnD01RZzOOai07QRV6bA2QwLkHAilfWAa7nBBPxxgBsL5RGXzJTdodVTQLG95+eNqbrhTo5wCoIPYQbJ0GrcsMAwgcFUAyqwKoyWBzdc71wI+wBhY8CQG4e8L33Mru7aDhXlzauq3O0laDuBJj/IWGW9yuW0EvL53lSEkvoZ7P9GILl+/0FIEjgjMT80c8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ube7c\uae30-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1014.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1014.onclick=function (e) {
			me.__1015.style.transition='none';
			me.__1015.style.visibility=(Number(me.__1015.style.opacity)>0||!me.__1015.style.opacity)?'inherit':'hidden';
			me.__1015.ggVisible=true;
			me.__1014.style.transition='none';
			me.__1014.style.visibility='hidden';
			me.__1014.ggVisible=false;
			me.__1012.style.transition='none';
			me.__1012.style.visibility='hidden';
			me.__1012.ggVisible=false;
		}
		me.__1014.onmouseover=function (e) {
			me.elementMouseOver['_1014']=true;
			me._text_810.logicBlock_visible();
		}
		me.__1014.onmouseout=function (e) {
			me.elementMouseOver['_1014']=false;
			me._text_810.logicBlock_visible();
		}
		me.__1014.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_1014']) {
				me.elementMouseOver['_1014']=true;
				me._text_810.logicBlock_visible();
			}
		}
		me.__1014.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_810=document.createElement('div');
		els=me._text_810__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8-10";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_810.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2eb\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_810.ggUpdateText();
		el.appendChild(els);
		me._text_810.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_810.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_1014'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_810.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_810.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_810.style.transition='';
				if (me._text_810.ggCurrentLogicStateVisible == 0) {
					me._text_810.style.visibility=(Number(me._text_810.style.opacity)>0||!me._text_810.style.opacity)?'inherit':'hidden';
					me._text_810.ggVisible=true;
				}
				else {
					me._text_810.style.visibility="hidden";
					me._text_810.ggVisible=false;
				}
			}
		}
		me._text_810.logicBlock_visible();
		me._text_810.ggUpdatePosition=function (useTransition) {
		}
		me.__1014.appendChild(me._text_810);
		me.__1011.appendChild(me.__1014);
		el=me.__1012=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ubc30\uacbd-10";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1012.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1012.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1013=document.createElement('div');
		els=me.__1013__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub354\ubcf4\uae30 \uc0c1\uc138-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 89%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all\"';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__1013.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\uba85<\/b>\n- \uc804\uae30\uccb4\uc678\ucda9\uaca9\ud30c\uc1c4\uc11d\uae30\n\n<b>*\uc0ac\uc6a9\ubaa9\uc801<\/b>\n- \uc804\uae30\uc218\ub825\ubc29\uc2dd(electrohydraulic)\uc73c\ub85c \ucda9\uaca9\ud30c\ub97c \ubc1c\uc0dd\uc2dc\ucf1c \uccb4\ub0b4\uc5d0 \uae30\uacc4\uc801\uc778 \uc790\uadf9\uc744 \uac00\ud568\uc73c\ub85c\uc368 \ud1b5\uc99d \uc644\ud654 \ubc0f \ubc1c\uae30\ubd80\uc804\uc758 \uc99d\uc0c1 \uc644\ud654 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \uae30\uad6c\n\n<b>*\uc804\uae30\uc815\uaca9<\/b>\n- \ub2e8\uc0c1 220V, 60Hz", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1013.ggUpdateText();
		el.appendChild(els);
		me.__1013.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1013.ggUpdatePosition=function (useTransition) {
		}
		me.__1012.appendChild(me.__1013);
		me.__1011.appendChild(me.__1012);
		me.__103.appendChild(me.__1011);
		el=me.__105=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__105.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__105.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__105.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__105.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__105.style.transition='';
				if (me.__105.ggCurrentLogicStateVisible == 0) {
					me.__105.style.visibility="hidden";
					me.__105.ggVisible=false;
				}
				else {
					me.__105.style.visibility=(Number(me.__105.style.opacity)>0||!me.__105.style.opacity)?'inherit':'hidden';
					me.__105.ggVisible=true;
				}
			}
		}
		me.__105.logicBlock_visible();
		me.__105.ggUpdatePosition=function (useTransition) {
		}
		el=me.__107=document.createElement('div');
		el.ggId="\uc124\uba85\ucee8\ud14c\uc774\ub108-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 678px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 51%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__107.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__107.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1010=document.createElement('div');
		els=me.__1010__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 2px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1010.ggUpdateText=function() {
			var params = [];
			var hs = player._("IMPO 88", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1010.ggUpdateText();
		el.appendChild(els);
		me.__1010.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1010.ggUpdatePosition=function (useTransition) {
		}
		me.__107.appendChild(me.__1010);
		el=me.__108=document.createElement('div');
		els=me.__108__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc124\uba85-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 61px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 76px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__108.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\ud559\ubcd1\uc6d0\uc5d0\uc11c \uc784\uc0c1\uc2dc\ud5d8\uc744 \uac70\uccd0 \ubc1c\uae30\ubd80\uc804 \uc99d\uc0c1\uc644\ud654\uc758 \ud6a8\uacfc\ub97c \ud655\uc778\ud55c \uccb4\uc678\ucda9\uaca9\ud30c \uce58\ub8cc\uae30 \uc785\ub2c8\ub2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__108.ggUpdateText();
		el.appendChild(els);
		me.__108.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__108.ggUpdatePosition=function (useTransition) {
		}
		el=me.__109=document.createElement('div');
		els=me.__109__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc138\ubd80\uc124\uba85-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -77px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__109.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud68c\uc74c\ubd80\uc5d0 \uc800\uac15\ub3c4\uc758 \uccb4\uc678\ucda9\uaca9\ud30c\ub97c \uc804\ub2ec\ud558\uc5ec \ud608\uad00\ub0b4\ud53c\uc131\uc7a5\uc778\uc790\uc758 \ubc1c\ud604 \ubc0f \ub0b4\ud53c\uc804\uad6c\uc138\ud3ec\uc758 \ubaa8\uc9d1\uc744 \uc99d\uac00\uc2dc\ucf1c \ud68c\uc74c\ubd80\uc758 \ubaa8\uc138\ud608\uad00 \uc2e0\uc0dd\uc744 \ucd09\uc9c4, \ud608\ub958\uc7a5\uc560\ub85c \uc778\ud55c \ubc1c\uae30\ubd80\uc804 \ud658\uc790\uc758 \uc99d\uc0c1\uc744 \uac1c\uc120\uc2dc\ud0a4\ub294 \uccb4\uc678\ucda9\uaca9\ud30c\uce58\ub8cc\uae30 \uc785\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__109.ggUpdateText();
		el.appendChild(els);
		me.__109.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__109.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_310=document.createElement('div');
		els=me._text_310__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 162px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_310.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\uba85<\/b>\n- \uc804\uae30\uccb4\uc678\ucda9\uaca9\ud30c\uc1c4\uc11d\uae30\n\n<b>*\uc0ac\uc6a9\ubaa9\uc801<\/b>\n- \uc804\uae30\uc218\ub825\ubc29\uc2dd(electrohydraulic)\uc73c\ub85c \ucda9\uaca9\ud30c\ub97c \ubc1c\uc0dd\uc2dc\ucf1c \uccb4\ub0b4\uc5d0 \uae30\uacc4\uc801\uc778 \uc790\uadf9\uc744 \uac00\ud568\uc73c\ub85c\uc368 \ud1b5\uc99d \uc644\ud654 \ubc0f \ubc1c\uae30\ubd80\uc804\uc758 \uc99d\uc0c1 \uc644\ud654 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \uae30\uad6c\n\n<b>*\uc804\uae30\uc815\uaca9<\/b>\n- \ub2e8\uc0c1 220V, 60Hz", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_310.ggUpdateText();
		el.appendChild(els);
		me._text_310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_310.ggUpdatePosition=function (useTransition) {
		}
		me.__109.appendChild(me._text_310);
		me.__108.appendChild(me.__109);
		me.__107.appendChild(me.__108);
		me.__105.appendChild(me.__107);
		el=me.__106=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__106.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__106.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_210=document.createElement('div');
		els=me._image_210__img=document.createElement('img');
		els.className='ggskin ggskin_image_210';
		hs=basePath + 'images/image_210.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-10";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 133.323%;';
		hs+='left : calc(50% - ((85.24% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((133.323% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85.24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_210.ggUpdatePosition=function (useTransition) {
		}
		me.__106.appendChild(me._image_210);
		me.__105.appendChild(me.__106);
		el=me._text_210=document.createElement('div');
		els=me._text_210__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-10";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 20px 15px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_210.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_210.ggUpdateText();
		el.appendChild(els);
		me._text_210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_210.ggUpdatePosition=function (useTransition) {
		}
		me.__105.appendChild(me._text_210);
		me.__103.appendChild(me.__105);
		el=me.__104=document.createElement('div');
		els=me.__104__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__104.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__104.ggUpdateText();
		el.appendChild(els);
		me.__104.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__104.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__104.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__104.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__104.style.transition='';
				if (me.__104.ggCurrentLogicStateVisible == 0) {
					me.__104.style.visibility="hidden";
					me.__104.ggVisible=false;
				}
				else {
					me.__104.style.visibility=(Number(me.__104.style.opacity)>0||!me.__104.style.opacity)?'inherit':'hidden';
					me.__104.ggVisible=true;
				}
			}
		}
		me.__104.logicBlock_visible();
		me.__104.ggUpdatePosition=function (useTransition) {
		}
		me.__103.appendChild(me.__104);
		me.__102.appendChild(me.__103);
		me.__101.appendChild(me.__102);
		el=me._image_310=document.createElement('div');
		els=me._image_310__img=document.createElement('img');
		els.className='ggskin ggskin_image_310';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3-10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_310.onclick=function (e) {
			me.__100.style.transition='none';
			me.__100.style.visibility='hidden';
			me.__100.ggVisible=false;
		}
		me._image_310.ggUpdatePosition=function (useTransition) {
		}
		me.__101.appendChild(me._image_310);
		me.__100.appendChild(me.__101);
		me.divSkin.appendChild(me.__100);
		el=me.__110=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5\ucc3d11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__111=document.createElement('div');
		el.ggId="\uc81c\ud488\ud31d\uc5c5\ucc3d \ubc30\uacbd11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		el=me.__112=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5-11";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__112.ggUpdatePosition=function (useTransition) {
		}
		el=me.__113=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ubc30\uacbd-11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__113.ggUpdatePosition=function (useTransition) {
		}
		el=me.__119=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc81c\ud488\uc124\uba85-11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__119.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__119.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_411=document.createElement('div');
		els=me._image_411__img=document.createElement('img');
		els.className='ggskin ggskin_image_411';
		hs=basePath + 'images/image_411.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-11";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 66.69%;';
		hs+='left : calc(50% - ((58% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 58%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_411.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_411.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_511=document.createElement('div');
		els=me._text_511__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : -44px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_511.ggUpdateText=function() {
			var params = [];
			var hs = player._("MT 3000", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_511.ggUpdateText();
		el.appendChild(els);
		me._text_511.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_511.ggUpdatePosition=function (useTransition) {
		}
		me._image_411.appendChild(me._text_511);
		me.__119.appendChild(me._image_411);
		el=me.__1112=document.createElement('div');
		els=me.__1112__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c\uc138\ubd80\uc815\ubcf4-11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1112.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1112.ggUpdateText();
		el.appendChild(els);
		me.__1112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1112.ggUpdatePosition=function (useTransition) {
		}
		me.__119.appendChild(me.__1112);
		el=me.__1110=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ubc30\uacbd-11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1111=document.createElement('div');
		els=me.__1111__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub354\ubcf4\uae30 \uc0c1\uc138-11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 89%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all\"';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__1111.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\uba85<\/b>\n- \uc804\uae30\uccb4\uc678\ucda9\uaca9\ud30c\uc1c4\uc11d\uae30\n\n<b>*\uc0ac\uc6a9\ubaa9\uc801<\/b>\n- \uc804\uae30\uc218\ub825\ubc29\uc2dd(electrohydraulic)\uc73c\ub85c \ucda9\uaca9\ud30c\ub97c \ubc1c\uc0dd\uc2dc\ucf1c \uccb4\ub0b4\uc5d0 \uae30\uacc4\uc801\uc778 \uc790\uadf9\uc744 \uac00\ud568\uc73c\ub85c\uc368 \ud1b5\uc99d \uc644\ud654 \ubc0f \ubc1c\uae30\ubd80\uc804\uc758 \uc99d\uc0c1 \uc644\ud654 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \uae30\uad6c\n\n<b>*\uc804\uae30\uc815\uaca9<\/b>\n- \ub2e8\uc0c1 220V, 60Hz", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1111.ggUpdateText();
		el.appendChild(els);
		me.__1111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1111.ggUpdatePosition=function (useTransition) {
		}
		me.__1110.appendChild(me.__1111);
		me.__119.appendChild(me.__1110);
		me.__113.appendChild(me.__119);
		el=me.__115=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0-11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__115.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__115.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__115.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__115.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__115.style.transition='';
				if (me.__115.ggCurrentLogicStateVisible == 0) {
					me.__115.style.visibility="hidden";
					me.__115.ggVisible=false;
				}
				else {
					me.__115.style.visibility=(Number(me.__115.style.opacity)>0||!me.__115.style.opacity)?'inherit':'hidden';
					me.__115.ggVisible=true;
				}
			}
		}
		me.__115.logicBlock_visible();
		me.__115.ggUpdatePosition=function (useTransition) {
		}
		el=me.__117=document.createElement('div');
		el.ggId="\uc124\uba85\ucee8\ud14c\uc774\ub108-11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 678px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 51%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__117.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__117.ggUpdatePosition=function (useTransition) {
		}
		el=me.__118=document.createElement('div');
		els=me.__118__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85-11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 2px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__118.ggUpdateText=function() {
			var params = [];
			var hs = player._("MT 3000", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__118.ggUpdateText();
		el.appendChild(els);
		me.__118.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__118.ggUpdatePosition=function (useTransition) {
		}
		me.__117.appendChild(me.__118);
		me.__115.appendChild(me.__117);
		el=me.__116=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108-11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__116.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__116.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_211=document.createElement('div');
		els=me._image_211__img=document.createElement('img');
		els.className='ggskin ggskin_image_211';
		hs=basePath + 'images/image_211.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 122.32%;';
		hs+='left : calc(50% - ((57.24% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((122.32% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 57.24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_211.ggUpdatePosition=function (useTransition) {
		}
		me.__116.appendChild(me._image_211);
		me.__115.appendChild(me.__116);
		el=me._text_211=document.createElement('div');
		els=me._text_211__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 20px 15px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_211.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_211.ggUpdateText();
		el.appendChild(els);
		me._text_211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_211.ggUpdatePosition=function (useTransition) {
		}
		me.__115.appendChild(me._text_211);
		me.__113.appendChild(me.__115);
		el=me.__114=document.createElement('div');
		els=me.__114__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4-11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__114.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__114.ggUpdateText();
		el.appendChild(els);
		me.__114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__114.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__114.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__114.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__114.style.transition='';
				if (me.__114.ggCurrentLogicStateVisible == 0) {
					me.__114.style.visibility="hidden";
					me.__114.ggVisible=false;
				}
				else {
					me.__114.style.visibility=(Number(me.__114.style.opacity)>0||!me.__114.style.opacity)?'inherit':'hidden';
					me.__114.ggVisible=true;
				}
			}
		}
		me.__114.logicBlock_visible();
		me.__114.ggUpdatePosition=function (useTransition) {
		}
		me.__113.appendChild(me.__114);
		me.__112.appendChild(me.__113);
		me.__111.appendChild(me.__112);
		el=me._image_311=document.createElement('div');
		els=me._image_311__img=document.createElement('img');
		els.className='ggskin ggskin_image_311';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3-11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_311.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_311.onclick=function (e) {
			me.__110.style.transition='none';
			me.__110.style.visibility='hidden';
			me.__110.ggVisible=false;
		}
		me._image_311.ggUpdatePosition=function (useTransition) {
		}
		me.__111.appendChild(me._image_311);
		me.__110.appendChild(me.__111);
		me.divSkin.appendChild(me.__110);
		el=me.__120=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5\ucc3d12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__120.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__120.ggUpdatePosition=function (useTransition) {
		}
		el=me.__121=document.createElement('div');
		el.ggId="\uc81c\ud488\ud31d\uc5c5\ucc3d \ubc30\uacbd12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 86%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__121.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__121.ggUpdatePosition=function (useTransition) {
		}
		el=me.__122=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5-12";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__122.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__122.ggUpdatePosition=function (useTransition) {
		}
		el=me.__123=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ubc30\uacbd-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__123.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__123.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1211=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\uc81c\ud488\uc124\uba85-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1211.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_412=document.createElement('div');
		els=me._image_412__img=document.createElement('img');
		els.className='ggskin ggskin_image_412';
		hs=basePath + 'images/image_412.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4-12";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 63.69%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_412.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_412.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_512=document.createElement('div');
		els=me._text_512__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='bottom : -34px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_512.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN IVH ER", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_512.ggUpdateText();
		el.appendChild(els);
		me._text_512.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_512.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_612=document.createElement('div');
		els=me._text_612__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -68px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_612.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04 \ubc0f \ud45c\uba74 \ub0b4 \ubc14\uc774\ub7ec\uc2a4\ub97c \ucd5c\ub300 99.9999%(6 log reduction) \uc0ac\uba78\uc2dc\ud0a4\uba70, \uc561\uccb4\ud575\ud654\ubd84\uc0ac\uae30\uc220\uacfc \uba78\uade0\uc81c\uc758 \uc99d\ubc1c \ud6a8\uc728\uc744 \uc81c\uace0\ud55c \"\uc5d0\uc5b4\ucfe0\uc158 \uae30\uc220\"\uc744 \uacb0\ud569\uc2dc\ucf1c \ub3c5\uc790\uc801\uc778 \uae30\uc220\uc744 \ud655\ub9bd\ud588\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_612.ggUpdateText();
		el.appendChild(els);
		me._text_612.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_612.ggUpdatePosition=function (useTransition) {
		}
		me._text_512.appendChild(me._text_612);
		me._image_412.appendChild(me._text_512);
		me.__1211.appendChild(me._image_412);
		el=me.__1216=document.createElement('div');
		els=me.__1216__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c\uc138\ubd80\uc815\ubcf4-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1216.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1216.ggUpdateText();
		el.appendChild(els);
		me.__1216.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1216.ggUpdatePosition=function (useTransition) {
		}
		me.__1211.appendChild(me.__1216);
		el=me.__1215=document.createElement('div');
		els=me.__1215__img=document.createElement('img');
		els.className='ggskin ggskin__1215';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5xJREFUeF7tm11S6zAMhe2yIpq8X9hMuwxgGc1m6H1PyoqoGRkcHNeJJVtK3Sl9YYDm53w+UmTF1mqFT9u2T+p8foJLGWP+jZfU2v5NGXOEH1rr//7t9KfTq/TtaYkLWMGg6/PzRTmRmRfSSr3BoVIwWAGAcA7Rs6yMOYJLOGGwABAXHiECzuAAUQTgGsJDFqUgsgDUINwHUQKBDMCKP5/fM3Oa6GF6s3nu+94+UbAfEoB2u301Sr1gT36N71HdgAbALb5pGsunaVs19L0ahoGNFwUCCgCneBC+2++VA+Cr7rpOdYcDCwgshCQAbvGHrlsUuN/t2NyAgbAIgFM8qAbxsZH3iUAoAASuTwrCLADubA/CU6PvRHO6wM4xFp4Osw'+
			'Ca7dZwjQKcB+J+hxxZbgBLEKIAuK1PBcCZDMdBNOY4fHw8RyrJ6Z8kxFcBYCYULhzAbX2HlxICIg6AG4m4YAJAavRrcUAsF0wASI1+TQBCF4wAJEe/KgBBLhgBNI+P76Xtq6XHZhU5wN2glwt+ATA/90MYVQHwXGABSNu/thDwk+HdAnDJ0AKQzP5V1QFBXA6nk9Zr2L/GEHBhQAbgd3IokyU4LjUVdueDKXFOh4jaWYKpMhrAUieHAkL6uwAOukoYgGgAlEeYtEDs+VFTanjThCmAesaGJVZA6fdQnSUMAEonp/SmuY9PusACSFSAt2h/BzIJACrCFIBbdgCmr5DMAbcMIOkATA4AO2Ha2dzxy3G+9uft0+y5sABu0QUo+/8VQoRK0NnIlrRtS3aodCkMZTB8MBWgu/nvSnCl9/2UxynGvuQRiBxgAdz9dNgCEO4H'+
			'1jgddi9NvztCK4RBbSFw9wCgG2SbImN2Fw6DqhwQa4tLh0FNAPxFE9NXY4IuqAmAs/8kBKSTYS0AwiUzl6/HhVxQCwB/9C8cIOmCGgDEFkxFl8hIFEbXBjC3Wiy+RkigMKJMqSXmAqH1vQlRfFrB/VikAEh2cogzoaxlcjYfMC+OxnSWUO1sAoDshZLuGpwQMC7gHP2U+OhTIAaXE8JcMqS80sIYACMeDUAiHFxnKaeTkwKAFU8CIAEhJSTn/xTxZACShVKO2PAY8S0z/gU580KxeOjvPzy8UfcLZTmgKggFwpOFEGVUVncDg3BWAJOaATZHF+4XnoXPKFwEQBge8HvxNrsf0XCunBhPOTm5aSp1Asz/IUT8741b6IPt8zYpuS30m81RQnB4v18pFcebm87ZiwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub354\ud558\uae30-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1215.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1215.onclick=function (e) {
			me.__1212.style.transition='none';
			me.__1212.style.visibility=(Number(me.__1212.style.opacity)>0||!me.__1212.style.opacity)?'inherit':'hidden';
			me.__1212.ggVisible=true;
			me.__1215.style.transition='none';
			me.__1215.style.visibility='hidden';
			me.__1215.ggVisible=false;
			me.__1214.style.transition='none';
			me.__1214.style.visibility=(Number(me.__1214.style.opacity)>0||!me.__1214.style.opacity)?'inherit':'hidden';
			me.__1214.ggVisible=true;
		}
		me.__1215.onmouseover=function (e) {
			me.elementMouseOver['_1215']=true;
			me._text_712.logicBlock_visible();
		}
		me.__1215.onmouseout=function (e) {
			me.elementMouseOver['_1215']=false;
			me._text_712.logicBlock_visible();
		}
		me.__1215.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_1215']) {
				me.elementMouseOver['_1215']=true;
				me._text_712.logicBlock_visible();
			}
		}
		me.__1215.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_712=document.createElement('div');
		els=me._text_712__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7-12";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_712.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub354\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_712.ggUpdateText();
		el.appendChild(els);
		me._text_712.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_712.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_1215'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_712.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_712.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_712.style.transition='';
				if (me._text_712.ggCurrentLogicStateVisible == 0) {
					me._text_712.style.visibility=(Number(me._text_712.style.opacity)>0||!me._text_712.style.opacity)?'inherit':'hidden';
					me._text_712.ggVisible=true;
				}
				else {
					me._text_712.style.visibility="hidden";
					me._text_712.ggVisible=false;
				}
			}
		}
		me._text_712.logicBlock_visible();
		me._text_712.ggUpdatePosition=function (useTransition) {
		}
		me.__1215.appendChild(me._text_712);
		me.__1211.appendChild(me.__1215);
		el=me.__1214=document.createElement('div');
		els=me.__1214__img=document.createElement('img');
		els.className='ggskin ggskin__1214';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAvtJREFUeF7tm1t2gjAQhhP7ZBdR11DhvXYzuIzWZchmtO+ga7CLqE+anomGQghkwqXmAi8eldv/zZ/JEBJK/mGL43hFrtcVXIox9lZcklL+G2FsDx+U0q/y7WSHw+fYt0fHuAAXDLoulw8iRHa8ECVkA4eOBWNQACB8CNGNrBjbg0uGhDEIgNGFK4iAM4YA0QvAI4TLLPqC6ATABuFlEH0gGAPg4q/XXcecNuphdDZ7z7KM9yjYzQhAvFx+MkI+sCd/xH6mbkADcEG8AG4CAQXAJfGmELQAXBRvAqEVgMvisRAaAdic7U2Ta1vv0AggWi6Z6YVs3r8JghKAD9avBYOxfX48visqyepPXoq/S1S5oOYA36xfCa/CBRUAPke/6B'+
			'WkcrkCwOvoCwKSCwoAIURf5YICQPT6uus7fGVzN9iUC/4AeNbv64IhegQOICT7y80gWAAwFA+FEQcQRPZXtIn8cKA0RPuXm4ExgCiKSJ7nuhzzkP9fFgvyfTqhrw0jR2gAIDxZrwl82rxBcNLtFhUkNAAQniSJzbpr97ZOEj0EeNOEKYAySy3fFhFwAkBo3TAAwPLbNHUq+uJmtS7gADQVoIv2RwOAV/I6AC47IE1TnhDbNm0OcBkArgkgngIhB9je/amiHOu6bEwS5KWyg4kQZf+pEDKoBIXFbC6Fn+dz8nM+o7vsWyVo8ft+tJKOO3IAwT8OcwCInqAjZGsPE3MIbiNCATaD4AHAaBAEfxoWF400pGZQnkNUfTUWSDIU9q80gVCSoTyDrP563HMXlKNfc4DvLlDNH1ROkfGxMGqaPKmeI+RhYSRbX/R+0zS5tmLd'+
			'h9dmunnD01RZzOOai07QRV6bA2QwLkHAilfWAa7nBBPxxgBsL5RGXzJTdodVTQLG95+eNqbrhTo5wCoIPYQbJ0GrcsMAwgcFUAyqwKoyWBzdc71wI+wBhY8CQG4e8L33Mru7aDhXlzauq3O0laDuBJj/IWGW9yuW0EvL53lSEkvoZ7P9GILl+/0FIEjgjMT80c8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ube7c\uae30-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1214.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1214.onclick=function (e) {
			me.__1215.style.transition='none';
			me.__1215.style.visibility=(Number(me.__1215.style.opacity)>0||!me.__1215.style.opacity)?'inherit':'hidden';
			me.__1215.ggVisible=true;
			me.__1214.style.transition='none';
			me.__1214.style.visibility='hidden';
			me.__1214.ggVisible=false;
			me.__1212.style.transition='none';
			me.__1212.style.visibility='hidden';
			me.__1212.ggVisible=false;
		}
		me.__1214.onmouseover=function (e) {
			me.elementMouseOver['_1214']=true;
			me._text_812.logicBlock_visible();
		}
		me.__1214.onmouseout=function (e) {
			me.elementMouseOver['_1214']=false;
			me._text_812.logicBlock_visible();
		}
		me.__1214.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_1214']) {
				me.elementMouseOver['_1214']=true;
				me._text_812.logicBlock_visible();
			}
		}
		me.__1214.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_812=document.createElement('div');
		els=me._text_812__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8-12";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,102,119,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_812.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2eb\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_812.ggUpdateText();
		el.appendChild(els);
		me._text_812.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_812.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_1214'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_812.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_812.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_812.style.transition='';
				if (me._text_812.ggCurrentLogicStateVisible == 0) {
					me._text_812.style.visibility=(Number(me._text_812.style.opacity)>0||!me._text_812.style.opacity)?'inherit':'hidden';
					me._text_812.ggVisible=true;
				}
				else {
					me._text_812.style.visibility="hidden";
					me._text_812.ggVisible=false;
				}
			}
		}
		me._text_812.logicBlock_visible();
		me._text_812.ggUpdatePosition=function (useTransition) {
		}
		me.__1214.appendChild(me._text_812);
		me.__1211.appendChild(me.__1214);
		el=me.__1212=document.createElement('div');
		el.ggId="\ub354\ubcf4\uae30 \ubc30\uacbd-12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1212.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1213=document.createElement('div');
		els=me.__1213__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub354\ubcf4\uae30 \uc0c1\uc138-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 89%;';
		hs+='pointer-events:auto;';
		hs+='word-break:keep-all\"';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__1213.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uc545\uc138\uc11c\ub9ac<\/b>\n- Sterigen, Air circulator, Scrubber, Chemical indicator, Biological indicator, H2O2 Gas Detector\n\n<b>*\ud06c\uae30<\/b>\n- 499.6 X 273.8 X 555.71 (mm)\n\n<b>*\ubb34\uac8c<\/b>\n- 25kg\n\n<b>*\uc804\uae30\uc815\uaca9<\/b>\n- 120V~, 60Hz (UL)\n- AC 220~230v, 50\/60Hz(CE)\n\n<b>*\uc0b4\uade0\uc81c \uc6a9\ub7c9<\/b>\n- 1L", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1213.ggUpdateText();
		el.appendChild(els);
		me.__1213.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1213.ggUpdatePosition=function (useTransition) {
		}
		me.__1212.appendChild(me.__1213);
		me.__1211.appendChild(me.__1212);
		me.__123.appendChild(me.__1211);
		el=me.__125=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__125.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__125.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__125.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__125.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__125.style.transition='';
				if (me.__125.ggCurrentLogicStateVisible == 0) {
					me.__125.style.visibility="hidden";
					me.__125.ggVisible=false;
				}
				else {
					me.__125.style.visibility=(Number(me.__125.style.opacity)>0||!me.__125.style.opacity)?'inherit':'hidden';
					me.__125.ggVisible=true;
				}
			}
		}
		me.__125.logicBlock_visible();
		me.__125.ggUpdatePosition=function (useTransition) {
		}
		el=me.__127=document.createElement('div');
		el.ggId="\uc124\uba85\ucee8\ud14c\uc774\ub108-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 678px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 91px;';
		hs+='visibility : inherit;';
		hs+='width : 51%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__127.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__127.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1210=document.createElement('div');
		els=me.__1210__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uba85-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border-color : rgba(0,0,0,0.392157);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 2px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1210.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN IVH ER", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1210.ggUpdateText();
		el.appendChild(els);
		me.__1210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1210.ggUpdatePosition=function (useTransition) {
		}
		me.__127.appendChild(me.__1210);
		el=me.__128=document.createElement('div');
		els=me.__128__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc124\uba85-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 61px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 76px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__128.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN IVH ER\uc740 \uacf5\uac04\uacfc \ud45c\uba74 \ub0b4 \ube44\ubcd1\uc6d0\uc131\/\ubcd1\uc6d0\uc131 \uc138\uade0\uc744 \ubbf8\uc0dd\ubb3c\uc744 \uc0ac\uba78\uc2dc\ud0a4\ub294 \uacf5\uac04\uba78\uade0\uae30\uc785\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__128.ggUpdateText();
		el.appendChild(els);
		me.__128.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__128.ggUpdatePosition=function (useTransition) {
		}
		el=me.__129=document.createElement('div');
		els=me.__129__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc81c\ud488\uc138\ubd80\uc124\uba85-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -77px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__129.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04 \ubc0f \ud45c\uba74 \ub0b4 \ubc14\uc774\ub7ec\uc2a4\ub97c \ucd5c\ub300 99.9999%(6 log reduction) \uc0ac\uba78\uc2dc\ud0a4\uba70, \uc561\uccb4\ud575\ud654\ubd84\uc0ac\uae30\uc220\uacfc \uba78\uade0\uc81c\uc758 \uc99d\ubc1c \ud6a8\uc728\uc744 \uc81c\uace0\ud55c \"\uc5d0\uc5b4\ucfe0\uc158 \uae30\uc220\"\uc744 \uacb0\ud569\uc2dc\ucf1c \ub3c5\uc790\uc801\uc778 \uae30\uc220\uc744 \ud655\ub9bd\ud588\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__129.ggUpdateText();
		el.appendChild(els);
		me.__129.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__129.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_312=document.createElement('div');
		els=me._text_312__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 162px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_312.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uc545\uc138\uc11c\ub9ac<\/b>\n- Sterigen, Air circulator, Scrubber, Chemical indicator, Biological indicator, H2O2 Gas Detector\n\n<b>*\ud06c\uae30<\/b>\n- 499.6 X 273.8 X 555.71 (mm)\n\n<b>*\ubb34\uac8c<\/b>\n- 25kg\n\n<b>*\uc804\uae30\uc815\uaca9<\/b>\n- 120V~, 60Hz (UL)\n- AC 220~230v, 50\/60Hz(CE)\n\n<b>*\uc0b4\uade0\uc81c \uc6a9\ub7c9<\/b>\n- 1L", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_312.ggUpdateText();
		el.appendChild(els);
		me._text_312.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_312.ggUpdatePosition=function (useTransition) {
		}
		me.__129.appendChild(me._text_312);
		me.__128.appendChild(me.__129);
		me.__127.appendChild(me.__128);
		me.__125.appendChild(me.__127);
		el=me.__126=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__126.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__126.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_212=document.createElement('div');
		els=me._image_212__img=document.createElement('img');
		els.className='ggskin ggskin_image_212';
		hs=basePath + 'images/image_212.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2-12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 122.32%;';
		hs+='left : calc(50% - ((57.24% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((122.32% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 57.24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_212.ggUpdatePosition=function (useTransition) {
		}
		me.__126.appendChild(me._image_212);
		me.__125.appendChild(me.__126);
		el=me._text_212=document.createElement('div');
		els=me._text_212__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-12";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 20px 15px 0px 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_212.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_212.ggUpdateText();
		el.appendChild(els);
		me._text_212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_212.ggUpdatePosition=function (useTransition) {
		}
		me.__125.appendChild(me._text_212);
		me.__123.appendChild(me.__125);
		el=me.__124=document.createElement('div');
		els=me.__124__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__124.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__124.ggUpdateText();
		el.appendChild(els);
		me.__124.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__124.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__124.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__124.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__124.style.transition='';
				if (me.__124.ggCurrentLogicStateVisible == 0) {
					me.__124.style.visibility="hidden";
					me.__124.ggVisible=false;
				}
				else {
					me.__124.style.visibility=(Number(me.__124.style.opacity)>0||!me.__124.style.opacity)?'inherit':'hidden';
					me.__124.ggVisible=true;
				}
			}
		}
		me.__124.logicBlock_visible();
		me.__124.ggUpdatePosition=function (useTransition) {
		}
		me.__123.appendChild(me.__124);
		me.__122.appendChild(me.__123);
		me.__121.appendChild(me.__122);
		el=me._image_312=document.createElement('div');
		els=me._image_312__img=document.createElement('img');
		els.className='ggskin ggskin_image_312';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3-12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_312.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_312.onclick=function (e) {
			me.__120.style.transition='none';
			me.__120.style.visibility='hidden';
			me.__120.ggVisible=false;
		}
		me._image_312.ggUpdatePosition=function (useTransition) {
		}
		me.__121.appendChild(me._image_312);
		me.__120.appendChild(me.__121);
		me.divSkin.appendChild(me.__120);
		me.__148.logicBlock_position();
		me.__144.logicBlock_visible();
		me._aesthetic_therapy.logicBlock_textcolor();
		me._endoscope.logicBlock_textcolor();
		me._extracorporeal.logicBlock_textcolor();
		me.__room.logicBlock_visible();
		me._text_7.logicBlock_visible();
		me._text_8.logicBlock_visible();
		me.__17.logicBlock_visible();
		me._image_2.logicBlock_size();
		me.__16.logicBlock_visible();
		me._text_72.logicBlock_visible();
		me._text_82.logicBlock_visible();
		me.__25.logicBlock_visible();
		me.__24.logicBlock_visible();
		me._text_73.logicBlock_visible();
		me._text_83.logicBlock_visible();
		me.__35.logicBlock_visible();
		me.__33.logicBlock_visible();
		me._text_74.logicBlock_visible();
		me._text_84.logicBlock_visible();
		me.__45.logicBlock_visible();
		me.__44.logicBlock_visible();
		me._text_75.logicBlock_visible();
		me._text_85.logicBlock_visible();
		me.__55.logicBlock_visible();
		me.__54.logicBlock_visible();
		me._text_76.logicBlock_visible();
		me._text_86.logicBlock_visible();
		me.__65.logicBlock_visible();
		me.__64.logicBlock_visible();
		me._text_77.logicBlock_visible();
		me._text_87.logicBlock_visible();
		me.__75.logicBlock_visible();
		me.__74.logicBlock_visible();
		me._text_78.logicBlock_visible();
		me._text_88.logicBlock_visible();
		me._text_79.logicBlock_visible();
		me._text_89.logicBlock_visible();
		me.__95.logicBlock_visible();
		me.__94.logicBlock_visible();
		me._text_710.logicBlock_visible();
		me._text_810.logicBlock_visible();
		me.__105.logicBlock_visible();
		me.__104.logicBlock_visible();
		me.__115.logicBlock_visible();
		me.__114.logicBlock_visible();
		me._text_712.logicBlock_visible();
		me._text_812.logicBlock_visible();
		me.__125.logicBlock_visible();
		me.__124.logicBlock_visible();
		player.addListener('changenode', function(event) {
			me._aesthetic_therapy.logicBlock_textcolor();
			me._endoscope.logicBlock_textcolor();
			me._extracorporeal.logicBlock_textcolor();
			me._cloner_1.ggUpdateConditionNodeChange();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me._aesthetic_therapy.logicBlock_textcolor();
			me._endoscope.logicBlock_textcolor();
			me._extracorporeal.logicBlock_textcolor();
			me._scrollarea_1.ggUpdatePosition();
		});
		player.addListener('hsproxyclick', function(event) {
			if (hotspotTemplates.hasOwnProperty('제품설명1')) {
				for(var i = 0; i < hotspotTemplates['제품설명1'].length; i++) {
					hotspotTemplates['제품설명1'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명2')) {
				for(var i = 0; i < hotspotTemplates['제품설명2'].length; i++) {
					hotspotTemplates['제품설명2'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명3')) {
				for(var i = 0; i < hotspotTemplates['제품설명3'].length; i++) {
					hotspotTemplates['제품설명3'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명4')) {
				for(var i = 0; i < hotspotTemplates['제품설명4'].length; i++) {
					hotspotTemplates['제품설명4'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명5')) {
				for(var i = 0; i < hotspotTemplates['제품설명5'].length; i++) {
					hotspotTemplates['제품설명5'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명6')) {
				for(var i = 0; i < hotspotTemplates['제품설명6'].length; i++) {
					hotspotTemplates['제품설명6'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명7')) {
				for(var i = 0; i < hotspotTemplates['제품설명7'].length; i++) {
					hotspotTemplates['제품설명7'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명8')) {
				for(var i = 0; i < hotspotTemplates['제품설명8'].length; i++) {
					hotspotTemplates['제품설명8'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명9')) {
				for(var i = 0; i < hotspotTemplates['제품설명9'].length; i++) {
					hotspotTemplates['제품설명9'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명 10')) {
				for(var i = 0; i < hotspotTemplates['제품설명 10'].length; i++) {
					hotspotTemplates['제품설명 10'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명11')) {
				for(var i = 0; i < hotspotTemplates['제품설명11'].length; i++) {
					hotspotTemplates['제품설명11'][i].ggEvent_hsproxyclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명12')) {
				for(var i = 0; i < hotspotTemplates['제품설명12'].length; i++) {
					hotspotTemplates['제품설명12'][i].ggEvent_hsproxyclick();
				}
			}
		});
		player.addListener('hsproxydblclick', function(event) {
			if (hotspotTemplates.hasOwnProperty('제품설명1')) {
				for(var i = 0; i < hotspotTemplates['제품설명1'].length; i++) {
					hotspotTemplates['제품설명1'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명2')) {
				for(var i = 0; i < hotspotTemplates['제품설명2'].length; i++) {
					hotspotTemplates['제품설명2'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명3')) {
				for(var i = 0; i < hotspotTemplates['제품설명3'].length; i++) {
					hotspotTemplates['제품설명3'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명4')) {
				for(var i = 0; i < hotspotTemplates['제품설명4'].length; i++) {
					hotspotTemplates['제품설명4'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명5')) {
				for(var i = 0; i < hotspotTemplates['제품설명5'].length; i++) {
					hotspotTemplates['제품설명5'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명6')) {
				for(var i = 0; i < hotspotTemplates['제품설명6'].length; i++) {
					hotspotTemplates['제품설명6'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명7')) {
				for(var i = 0; i < hotspotTemplates['제품설명7'].length; i++) {
					hotspotTemplates['제품설명7'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명8')) {
				for(var i = 0; i < hotspotTemplates['제품설명8'].length; i++) {
					hotspotTemplates['제품설명8'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명9')) {
				for(var i = 0; i < hotspotTemplates['제품설명9'].length; i++) {
					hotspotTemplates['제품설명9'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명 10')) {
				for(var i = 0; i < hotspotTemplates['제품설명 10'].length; i++) {
					hotspotTemplates['제품설명 10'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명11')) {
				for(var i = 0; i < hotspotTemplates['제품설명11'].length; i++) {
					hotspotTemplates['제품설명11'][i].ggEvent_hsproxydblclick();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명12')) {
				for(var i = 0; i < hotspotTemplates['제품설명12'].length; i++) {
					hotspotTemplates['제품설명12'][i].ggEvent_hsproxydblclick();
				}
			}
		});
		player.addListener('hsproxyout', function(event) {
			if (hotspotTemplates.hasOwnProperty('제품설명1')) {
				for(var i = 0; i < hotspotTemplates['제품설명1'].length; i++) {
					hotspotTemplates['제품설명1'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명2')) {
				for(var i = 0; i < hotspotTemplates['제품설명2'].length; i++) {
					hotspotTemplates['제품설명2'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명3')) {
				for(var i = 0; i < hotspotTemplates['제품설명3'].length; i++) {
					hotspotTemplates['제품설명3'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명4')) {
				for(var i = 0; i < hotspotTemplates['제품설명4'].length; i++) {
					hotspotTemplates['제품설명4'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명5')) {
				for(var i = 0; i < hotspotTemplates['제품설명5'].length; i++) {
					hotspotTemplates['제품설명5'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명6')) {
				for(var i = 0; i < hotspotTemplates['제품설명6'].length; i++) {
					hotspotTemplates['제품설명6'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명7')) {
				for(var i = 0; i < hotspotTemplates['제품설명7'].length; i++) {
					hotspotTemplates['제품설명7'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명8')) {
				for(var i = 0; i < hotspotTemplates['제품설명8'].length; i++) {
					hotspotTemplates['제품설명8'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명9')) {
				for(var i = 0; i < hotspotTemplates['제품설명9'].length; i++) {
					hotspotTemplates['제품설명9'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명 10')) {
				for(var i = 0; i < hotspotTemplates['제품설명 10'].length; i++) {
					hotspotTemplates['제품설명 10'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명11')) {
				for(var i = 0; i < hotspotTemplates['제품설명11'].length; i++) {
					hotspotTemplates['제품설명11'][i].ggEvent_hsproxyout();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명12')) {
				for(var i = 0; i < hotspotTemplates['제품설명12'].length; i++) {
					hotspotTemplates['제품설명12'][i].ggEvent_hsproxyout();
				}
			}
		});
		player.addListener('hsproxyover', function(event) {
			if (hotspotTemplates.hasOwnProperty('제품설명1')) {
				for(var i = 0; i < hotspotTemplates['제품설명1'].length; i++) {
					hotspotTemplates['제품설명1'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명2')) {
				for(var i = 0; i < hotspotTemplates['제품설명2'].length; i++) {
					hotspotTemplates['제품설명2'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명3')) {
				for(var i = 0; i < hotspotTemplates['제품설명3'].length; i++) {
					hotspotTemplates['제품설명3'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명4')) {
				for(var i = 0; i < hotspotTemplates['제품설명4'].length; i++) {
					hotspotTemplates['제품설명4'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명5')) {
				for(var i = 0; i < hotspotTemplates['제품설명5'].length; i++) {
					hotspotTemplates['제품설명5'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명6')) {
				for(var i = 0; i < hotspotTemplates['제품설명6'].length; i++) {
					hotspotTemplates['제품설명6'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명7')) {
				for(var i = 0; i < hotspotTemplates['제품설명7'].length; i++) {
					hotspotTemplates['제품설명7'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명8')) {
				for(var i = 0; i < hotspotTemplates['제품설명8'].length; i++) {
					hotspotTemplates['제품설명8'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명9')) {
				for(var i = 0; i < hotspotTemplates['제품설명9'].length; i++) {
					hotspotTemplates['제품설명9'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명 10')) {
				for(var i = 0; i < hotspotTemplates['제품설명 10'].length; i++) {
					hotspotTemplates['제품설명 10'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명11')) {
				for(var i = 0; i < hotspotTemplates['제품설명11'].length; i++) {
					hotspotTemplates['제품설명11'][i].ggEvent_hsproxyover();
				}
			}
			if (hotspotTemplates.hasOwnProperty('제품설명12')) {
				for(var i = 0; i < hotspotTemplates['제품설명12'].length; i++) {
					hotspotTemplates['제품설명12'][i].ggEvent_hsproxyover();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__148.logicBlock_position();
			me.__144.logicBlock_visible();
			me.__room.logicBlock_visible();
			me.__17.logicBlock_visible();
			me._image_2.logicBlock_size();
			me.__16.logicBlock_visible();
			me.__25.logicBlock_visible();
			me.__24.logicBlock_visible();
			me.__35.logicBlock_visible();
			me.__33.logicBlock_visible();
			me.__45.logicBlock_visible();
			me.__44.logicBlock_visible();
			me.__55.logicBlock_visible();
			me.__54.logicBlock_visible();
			me.__65.logicBlock_visible();
			me.__64.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__74.logicBlock_visible();
			me.__95.logicBlock_visible();
			me.__94.logicBlock_visible();
			me.__105.logicBlock_visible();
			me.__104.logicBlock_visible();
			me.__115.logicBlock_visible();
			me.__114.logicBlock_visible();
			me.__125.logicBlock_visible();
			me.__124.logicBlock_visible();
		});
		player.addListener('varchanged_vis_mouse_on1', function(event) {
			me._aesthetic_therapy.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_mouse_on2', function(event) {
			me._endoscope.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_mouse_on3', function(event) {
			me._extracorporeal.logicBlock_textcolor();
		});
		player.addListener('viewerinit', function(event) {
			me._cloner_1.ggUpdate();
		});
	};
	function SkinCloner_cloner_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90%;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.onclick=function (e) {
			if (me._nodeimage_1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -110px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_1.appendChild(me._text_1);
		me.__div.appendChild(me._nodeimage_1);
	};
	function SkinHotspotClass_hotspot_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_1=document.createElement('div');
		el.ggId="Hotspot 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 48px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_1.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hotspot_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot_1']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['hotspot_1']=true;
			}
		}
		me._hotspot_1.ggUpdatePosition=function (useTransition) {
		}
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._hotspot_1.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._hotspot_1;
	};
	function SkinHotspotClass__1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__1=document.createElement('div');
		el.ggId="\uc81c\ud488\ud45c\uc9c0\ud3101";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 248px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__1.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_1']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_1']=true;
			}
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_12=document.createElement('div');
		els=me._external_12__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_12.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_12.ggSubElement.setAttribute('alt', player._(me._external_12.ggAltText));
			me._external_12.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_12.ggText_untranslated = img;
			me._external_12.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_12.ggSubElement.style.width = '0px';
			me._external_12.ggSubElement.style.height = '0px';
			me._external_12.ggSubElement.src='';
			me._external_12.ggSubElement.src=me._external_12.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_12.ggText != player._(me._external_12.ggText_untranslated)) {
				me._external_12.ggText = player._(me._external_12.ggText_untranslated);
				me._external_12.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 48px;';
		hs+='position : absolute;';
		hs+='top : -14px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_12.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_12.clientWidth;
			var parentHeight = me._external_12.clientHeight;
			var img = me._external_12__img;
			var aspectRatioDiv = me._external_12.clientWidth / me._external_12.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_12.ggScrollbars || currentWidth < me._external_12.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_12.ggScrollbars || currentHeight < me._external_12.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__1.appendChild(me._external_12);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_12.style.width=hotspot.customimagewidth + 'px';
			me._external_12.style.height=hotspot.customimageheight + 'px';
		}
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__1.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__1;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_node']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_node']=true;
			}
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: 99,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggLottie.setSpeed(1.5);
		el.ggId="Lottie 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		hs+='border-radius:50%;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lottie_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lottie_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStatePosition == 0) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='0px';
				}
				else {
					me._lottie_2.style.left='-10px';
					me._lottie_2.style.top='0px';
				}
			}
		}
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._lottie_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._lottie_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStateSize == 0) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else if (me._lottie_2.ggCurrentLogicStateSize == 1) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else {
					me._lottie_2.style.width='70px';
					me._lottie_2.style.height='70px';
					skin.updateSize(me._lottie_2);
				}
			}
		}
		me._lottie_2.logicBlock_size();
		me._lottie_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_size();
			};
		me.ggUse3d=true;
		me.gg3dDistance=500;
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_node.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	function SkinHotspotClass__12(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__12=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba8512";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__12.onclick=function (e) {
			skin.__120.ggVisible = !skin.__120.ggVisible;
			var flag=skin.__120.ggVisible;
			skin.__120.style.transition='none';
			skin.__120.style.visibility=((flag)&&(Number(skin.__120.style.opacity)>0||!skin.__120.style.opacity))?'inherit':'hidden';
			skin.__139.style.transition='none';
			skin.__139.style.visibility='hidden';
			skin.__139.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__12.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__12.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_12']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__12.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_12']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__12.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_12']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_12']=true;
			}
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_120=document.createElement('div');
		els=me._external_120__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_120.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_120.ggSubElement.setAttribute('alt', player._(me._external_120.ggAltText));
			me._external_120.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_120.ggText_untranslated = img;
			me._external_120.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_120.ggSubElement.style.width = '0px';
			me._external_120.ggSubElement.style.height = '0px';
			me._external_120.ggSubElement.src='';
			me._external_120.ggSubElement.src=me._external_120.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_120.ggText != player._(me._external_120.ggText_untranslated)) {
				me._external_120.ggText = player._(me._external_120.ggText_untranslated);
				me._external_120.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_120.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_120.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_120.clientWidth;
			var parentHeight = me._external_120.clientHeight;
			var img = me._external_120__img;
			var aspectRatioDiv = me._external_120.clientWidth / me._external_120.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_120.ggScrollbars || currentWidth < me._external_120.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_120.ggScrollbars || currentHeight < me._external_120.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__12.appendChild(me._external_120);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_120.style.width=hotspot.customimagewidth + 'px';
			me._external_120.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_120.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_120.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='제품설명11') {
					me.__12.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명11') {
					me.__12.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명11') {
					me.__12.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명11') {
					me.__12.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__12.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__12;
	};
	function SkinHotspotClass__11(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__11=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba8511";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__11.onclick=function (e) {
			skin.__110.ggVisible = !skin.__110.ggVisible;
			var flag=skin.__110.ggVisible;
			skin.__110.style.transition='none';
			skin.__110.style.visibility=((flag)&&(Number(skin.__110.style.opacity)>0||!skin.__110.style.opacity))?'inherit':'hidden';
			skin.__139.style.transition='none';
			skin.__139.style.visibility='hidden';
			skin.__139.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__11.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__11.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_11']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__11.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_11']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__11.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_11']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_11']=true;
			}
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_11=document.createElement('div');
		els=me._external_11__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_11.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_11.ggSubElement.setAttribute('alt', player._(me._external_11.ggAltText));
			me._external_11.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_11.ggText_untranslated = img;
			me._external_11.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_11.ggSubElement.style.width = '0px';
			me._external_11.ggSubElement.style.height = '0px';
			me._external_11.ggSubElement.src='';
			me._external_11.ggSubElement.src=me._external_11.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_11.ggText != player._(me._external_11.ggText_untranslated)) {
				me._external_11.ggText = player._(me._external_11.ggText_untranslated);
				me._external_11.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_11.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_11.clientWidth;
			var parentHeight = me._external_11.clientHeight;
			var img = me._external_11__img;
			var aspectRatioDiv = me._external_11.clientWidth / me._external_11.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_11.ggScrollbars || currentWidth < me._external_11.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_11.ggScrollbars || currentHeight < me._external_11.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__11.appendChild(me._external_11);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_11.style.width=hotspot.customimagewidth + 'px';
			me._external_11.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_11.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_11.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='제품설명11') {
					me.__11.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명11') {
					me.__11.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명11') {
					me.__11.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명11') {
					me.__11.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__11.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__11;
	};
	function SkinHotspotClass__10(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__10=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__10.onclick=function (e) {
			skin.__80.ggVisible = !skin.__80.ggVisible;
			var flag=skin.__80.ggVisible;
			skin.__80.style.transition='none';
			skin.__80.style.visibility=((flag)&&(Number(skin.__80.style.opacity)>0||!skin.__80.style.opacity))?'inherit':'hidden';
			skin.__139.style.transition='none';
			skin.__139.style.visibility='hidden';
			skin.__139.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__10.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__10.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_10']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__10.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_10']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__10.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_10']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_10']=true;
			}
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_10=document.createElement('div');
		els=me._external_10__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_10.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_10.ggSubElement.setAttribute('alt', player._(me._external_10.ggAltText));
			me._external_10.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_10.ggText_untranslated = img;
			me._external_10.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_10.ggSubElement.style.width = '0px';
			me._external_10.ggSubElement.style.height = '0px';
			me._external_10.ggSubElement.src='';
			me._external_10.ggSubElement.src=me._external_10.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_10.ggText != player._(me._external_10.ggText_untranslated)) {
				me._external_10.ggText = player._(me._external_10.ggText_untranslated);
				me._external_10.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 10";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_10.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_10.clientWidth;
			var parentHeight = me._external_10.clientHeight;
			var img = me._external_10__img;
			var aspectRatioDiv = me._external_10.clientWidth / me._external_10.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_10.ggScrollbars || currentWidth < me._external_10.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_10.ggScrollbars || currentHeight < me._external_10.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__10.appendChild(me._external_10);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_10.style.width=hotspot.customimagewidth + 'px';
			me._external_10.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_10.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_10.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='제품설명10') {
					me.__10.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명10') {
					me.__10.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명10') {
					me.__10.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명10') {
					me.__10.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__10.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__10;
	};
	function SkinHotspotClass__9(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__9=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba859";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__9.onclick=function (e) {
			skin.__90.ggVisible = !skin.__90.ggVisible;
			var flag=skin.__90.ggVisible;
			skin.__90.style.transition='none';
			skin.__90.style.visibility=((flag)&&(Number(skin.__90.style.opacity)>0||!skin.__90.style.opacity))?'inherit':'hidden';
			skin.__139.style.transition='none';
			skin.__139.style.visibility='hidden';
			skin.__139.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__9.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__9.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_9']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__9.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_9']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__9.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_9']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_9']=true;
			}
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_9=document.createElement('div');
		els=me._external_9__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_9.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_9.ggSubElement.setAttribute('alt', player._(me._external_9.ggAltText));
			me._external_9.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_9.ggText_untranslated = img;
			me._external_9.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_9.ggSubElement.style.width = '0px';
			me._external_9.ggSubElement.style.height = '0px';
			me._external_9.ggSubElement.src='';
			me._external_9.ggSubElement.src=me._external_9.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_9.ggText != player._(me._external_9.ggText_untranslated)) {
				me._external_9.ggText = player._(me._external_9.ggText_untranslated);
				me._external_9.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_9.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_9.clientWidth;
			var parentHeight = me._external_9.clientHeight;
			var img = me._external_9__img;
			var aspectRatioDiv = me._external_9.clientWidth / me._external_9.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_9.ggScrollbars || currentWidth < me._external_9.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_9.ggScrollbars || currentHeight < me._external_9.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__9.appendChild(me._external_9);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_9.style.width=hotspot.customimagewidth + 'px';
			me._external_9.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_9.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_9.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='제품설명9') {
					me.__9.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명9') {
					me.__9.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명9') {
					me.__9.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명9') {
					me.__9.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__9.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__9;
	};
	function SkinHotspotClass__8(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__8=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba858";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__8.onclick=function (e) {
			skin.__80.ggVisible = !skin.__80.ggVisible;
			var flag=skin.__80.ggVisible;
			skin.__80.style.transition='none';
			skin.__80.style.visibility=((flag)&&(Number(skin.__80.style.opacity)>0||!skin.__80.style.opacity))?'inherit':'hidden';
			skin.__139.style.transition='none';
			skin.__139.style.visibility='hidden';
			skin.__139.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__8.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__8.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_8']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__8.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_8']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__8.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_8']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_8']=true;
			}
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_8=document.createElement('div');
		els=me._external_8__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_8.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_8.ggSubElement.setAttribute('alt', player._(me._external_8.ggAltText));
			me._external_8.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_8.ggText_untranslated = img;
			me._external_8.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_8.ggSubElement.style.width = '0px';
			me._external_8.ggSubElement.style.height = '0px';
			me._external_8.ggSubElement.src='';
			me._external_8.ggSubElement.src=me._external_8.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_8.ggText != player._(me._external_8.ggText_untranslated)) {
				me._external_8.ggText = player._(me._external_8.ggText_untranslated);
				me._external_8.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_8.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_8.clientWidth;
			var parentHeight = me._external_8.clientHeight;
			var img = me._external_8__img;
			var aspectRatioDiv = me._external_8.clientWidth / me._external_8.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_8.ggScrollbars || currentWidth < me._external_8.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_8.ggScrollbars || currentHeight < me._external_8.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__8.appendChild(me._external_8);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_8.style.width=hotspot.customimagewidth + 'px';
			me._external_8.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_8.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_8.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='제품설명8') {
					me.__8.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명8') {
					me.__8.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명8') {
					me.__8.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명8') {
					me.__8.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__8.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__8;
	};
	function SkinHotspotClass__7(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__7=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba857";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__7.onclick=function (e) {
			skin.__70.ggVisible = !skin.__70.ggVisible;
			var flag=skin.__70.ggVisible;
			skin.__70.style.transition='none';
			skin.__70.style.visibility=((flag)&&(Number(skin.__70.style.opacity)>0||!skin.__70.style.opacity))?'inherit':'hidden';
			skin.__139.style.transition='none';
			skin.__139.style.visibility='hidden';
			skin.__139.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__7.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__7.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_7']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__7.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_7']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__7.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_7']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_7']=true;
			}
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_7=document.createElement('div');
		els=me._external_7__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_7.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_7.ggSubElement.setAttribute('alt', player._(me._external_7.ggAltText));
			me._external_7.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_7.ggText_untranslated = img;
			me._external_7.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_7.ggSubElement.style.width = '0px';
			me._external_7.ggSubElement.style.height = '0px';
			me._external_7.ggSubElement.src='';
			me._external_7.ggSubElement.src=me._external_7.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_7.ggText != player._(me._external_7.ggText_untranslated)) {
				me._external_7.ggText = player._(me._external_7.ggText_untranslated);
				me._external_7.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_7.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_7.clientWidth;
			var parentHeight = me._external_7.clientHeight;
			var img = me._external_7__img;
			var aspectRatioDiv = me._external_7.clientWidth / me._external_7.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_7.ggScrollbars || currentWidth < me._external_7.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_7.ggScrollbars || currentHeight < me._external_7.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__7.appendChild(me._external_7);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_7.style.width=hotspot.customimagewidth + 'px';
			me._external_7.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_7.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_7.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='제품설명7') {
					me.__7.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명7') {
					me.__7.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명7') {
					me.__7.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명7') {
					me.__7.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__7.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__7;
	};
	function SkinHotspotClass__6(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__6=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba856";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__6.onclick=function (e) {
			skin.__60.ggVisible = !skin.__60.ggVisible;
			var flag=skin.__60.ggVisible;
			skin.__60.style.transition='none';
			skin.__60.style.visibility=((flag)&&(Number(skin.__60.style.opacity)>0||!skin.__60.style.opacity))?'inherit':'hidden';
			skin.__139.style.transition='none';
			skin.__139.style.visibility='hidden';
			skin.__139.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__6.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__6.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_6']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__6.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_6']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__6.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_6']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_6']=true;
			}
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_6=document.createElement('div');
		els=me._external_6__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_6.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_6.ggSubElement.setAttribute('alt', player._(me._external_6.ggAltText));
			me._external_6.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_6.ggText_untranslated = img;
			me._external_6.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_6.ggSubElement.style.width = '0px';
			me._external_6.ggSubElement.style.height = '0px';
			me._external_6.ggSubElement.src='';
			me._external_6.ggSubElement.src=me._external_6.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_6.ggText != player._(me._external_6.ggText_untranslated)) {
				me._external_6.ggText = player._(me._external_6.ggText_untranslated);
				me._external_6.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_6.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_6.clientWidth;
			var parentHeight = me._external_6.clientHeight;
			var img = me._external_6__img;
			var aspectRatioDiv = me._external_6.clientWidth / me._external_6.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_6.ggScrollbars || currentWidth < me._external_6.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_6.ggScrollbars || currentHeight < me._external_6.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__6.appendChild(me._external_6);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_6.style.width=hotspot.customimagewidth + 'px';
			me._external_6.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_6.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_6.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='제품설명6') {
					me.__6.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명6') {
					me.__6.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명6') {
					me.__6.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명6') {
					me.__6.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__6.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__6;
	};
	function SkinHotspotClass__5(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__5=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba855";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__5.onclick=function (e) {
			skin.__50.ggVisible = !skin.__50.ggVisible;
			var flag=skin.__50.ggVisible;
			skin.__50.style.transition='none';
			skin.__50.style.visibility=((flag)&&(Number(skin.__50.style.opacity)>0||!skin.__50.style.opacity))?'inherit':'hidden';
			skin.__139.style.transition='none';
			skin.__139.style.visibility='hidden';
			skin.__139.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_5']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_5']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_5']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_5']=true;
			}
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_5=document.createElement('div');
		els=me._external_5__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_5.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_5.ggSubElement.setAttribute('alt', player._(me._external_5.ggAltText));
			me._external_5.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_5.ggText_untranslated = img;
			me._external_5.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_5.ggSubElement.style.width = '0px';
			me._external_5.ggSubElement.style.height = '0px';
			me._external_5.ggSubElement.src='';
			me._external_5.ggSubElement.src=me._external_5.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_5.ggText != player._(me._external_5.ggText_untranslated)) {
				me._external_5.ggText = player._(me._external_5.ggText_untranslated);
				me._external_5.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_5.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_5.clientWidth;
			var parentHeight = me._external_5.clientHeight;
			var img = me._external_5__img;
			var aspectRatioDiv = me._external_5.clientWidth / me._external_5.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_5.ggScrollbars || currentWidth < me._external_5.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_5.ggScrollbars || currentHeight < me._external_5.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__5.appendChild(me._external_5);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_5.style.width=hotspot.customimagewidth + 'px';
			me._external_5.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_5.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_5.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='제품설명5') {
					me.__5.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명5') {
					me.__5.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명5') {
					me.__5.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명5') {
					me.__5.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__5.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__5;
	};
	function SkinHotspotClass__4(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__4=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba854";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__4.onclick=function (e) {
			skin.__40.ggVisible = !skin.__40.ggVisible;
			var flag=skin.__40.ggVisible;
			skin.__40.style.transition='none';
			skin.__40.style.visibility=((flag)&&(Number(skin.__40.style.opacity)>0||!skin.__40.style.opacity))?'inherit':'hidden';
			skin.__139.style.transition='none';
			skin.__139.style.visibility='hidden';
			skin.__139.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_4']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_4']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_4']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_4']=true;
			}
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_4=document.createElement('div');
		els=me._external_4__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_4.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_4.ggSubElement.setAttribute('alt', player._(me._external_4.ggAltText));
			me._external_4.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_4.ggText_untranslated = img;
			me._external_4.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_4.ggSubElement.style.width = '0px';
			me._external_4.ggSubElement.style.height = '0px';
			me._external_4.ggSubElement.src='';
			me._external_4.ggSubElement.src=me._external_4.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_4.ggText != player._(me._external_4.ggText_untranslated)) {
				me._external_4.ggText = player._(me._external_4.ggText_untranslated);
				me._external_4.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_4.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_4.clientWidth;
			var parentHeight = me._external_4.clientHeight;
			var img = me._external_4__img;
			var aspectRatioDiv = me._external_4.clientWidth / me._external_4.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_4.ggScrollbars || currentWidth < me._external_4.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_4.ggScrollbars || currentHeight < me._external_4.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__4.appendChild(me._external_4);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_4.style.width=hotspot.customimagewidth + 'px';
			me._external_4.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_4.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_4.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='제품설명4') {
					me.__4.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명4') {
					me.__4.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명4') {
					me.__4.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명4') {
					me.__4.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__4.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__4;
	};
	function SkinHotspotClass__3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__3=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba853";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__3.onclick=function (e) {
			skin.__30.ggVisible = !skin.__30.ggVisible;
			var flag=skin.__30.ggVisible;
			skin.__30.style.transition='none';
			skin.__30.style.visibility=((flag)&&(Number(skin.__30.style.opacity)>0||!skin.__30.style.opacity))?'inherit':'hidden';
			skin.__139.style.transition='none';
			skin.__139.style.visibility='hidden';
			skin.__139.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_3']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_3']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_3']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_3']=true;
			}
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_3=document.createElement('div');
		els=me._external_3__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_3.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_3.ggSubElement.setAttribute('alt', player._(me._external_3.ggAltText));
			me._external_3.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_3.ggText_untranslated = img;
			me._external_3.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_3.ggSubElement.style.width = '0px';
			me._external_3.ggSubElement.style.height = '0px';
			me._external_3.ggSubElement.src='';
			me._external_3.ggSubElement.src=me._external_3.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_3.ggText != player._(me._external_3.ggText_untranslated)) {
				me._external_3.ggText = player._(me._external_3.ggText_untranslated);
				me._external_3.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_3.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_3.clientWidth;
			var parentHeight = me._external_3.clientHeight;
			var img = me._external_3__img;
			var aspectRatioDiv = me._external_3.clientWidth / me._external_3.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_3.ggScrollbars || currentWidth < me._external_3.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_3.ggScrollbars || currentHeight < me._external_3.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__3.appendChild(me._external_3);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_3.style.width=hotspot.customimagewidth + 'px';
			me._external_3.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_3.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_3.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='제품설명3') {
					me.__3.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명3') {
					me.__3.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명3') {
					me.__3.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명3') {
					me.__3.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__3.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__3;
	};
	function SkinHotspotClass__2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__2=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba852";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__2.onclick=function (e) {
			skin.__20.ggVisible = !skin.__20.ggVisible;
			var flag=skin.__20.ggVisible;
			skin.__20.style.transition='none';
			skin.__20.style.visibility=((flag)&&(Number(skin.__20.style.opacity)>0||!skin.__20.style.opacity))?'inherit':'hidden';
			skin.__139.style.transition='none';
			skin.__139.style.visibility='hidden';
			skin.__139.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_2']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_2']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__2.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_2']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_2']=true;
			}
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__2.appendChild(me._external_2);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='제품설명2') {
					me.__2.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명2') {
					me.__2.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명2') {
					me.__2.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명2') {
					me.__2.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__2.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__2;
	};
	function SkinHotspotClass__13(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__13=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba851";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 109px;';
		hs+='position : absolute;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__13.onclick=function (e) {
			skin.__14.ggVisible = !skin.__14.ggVisible;
			var flag=skin.__14.ggVisible;
			skin.__14.style.transition='none';
			skin.__14.style.visibility=((flag)&&(Number(skin.__14.style.opacity)>0||!skin.__14.style.opacity))?'inherit':'hidden';
			skin.__139.style.transition='none';
			skin.__139.style.visibility='hidden';
			skin.__139.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__13.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__13.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_13']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__13.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_13']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__13.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_13']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_13']=true;
			}
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.__13.appendChild(me._external_1);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='제품설명1') {
					me.__13.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명1') {
					me.__13.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명1') {
					me.__13.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명1') {
					me.__13.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__13.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__13;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='제품설명1') {
				hotspot.skinid = '제품설명1';
				hsinst = new SkinHotspotClass__13(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명2') {
				hotspot.skinid = '제품설명2';
				hsinst = new SkinHotspotClass__2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명3') {
				hotspot.skinid = '제품설명3';
				hsinst = new SkinHotspotClass__3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명4') {
				hotspot.skinid = '제품설명4';
				hsinst = new SkinHotspotClass__4(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명5') {
				hotspot.skinid = '제품설명5';
				hsinst = new SkinHotspotClass__5(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명6') {
				hotspot.skinid = '제품설명6';
				hsinst = new SkinHotspotClass__6(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명7') {
				hotspot.skinid = '제품설명7';
				hsinst = new SkinHotspotClass__7(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명8') {
				hotspot.skinid = '제품설명8';
				hsinst = new SkinHotspotClass__8(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명9') {
				hotspot.skinid = '제품설명9';
				hsinst = new SkinHotspotClass__9(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명 10') {
				hotspot.skinid = '제품설명 10';
				hsinst = new SkinHotspotClass__10(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명11') {
				hotspot.skinid = '제품설명11';
				hsinst = new SkinHotspotClass__11(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명12') {
				hotspot.skinid = '제품설명12';
				hsinst = new SkinHotspotClass__12(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품표지판1') {
				hotspot.skinid = '제품표지판1';
				hsinst = new SkinHotspotClass__1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'Hotspot 1';
				hsinst = new SkinHotspotClass_hotspot_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = [];
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__137.ggUpdateConditionTimer();
		me.__136.ggUpdateConditionTimer();
		me.__215.ggUpdateConditionTimer();
		me.__214.ggUpdateConditionTimer();
		me.__315.ggUpdateConditionTimer();
		me.__314.ggUpdateConditionTimer();
		me.__415.ggUpdateConditionTimer();
		me.__414.ggUpdateConditionTimer();
		me.__515.ggUpdateConditionTimer();
		me.__514.ggUpdateConditionTimer();
		me.__613.ggUpdateConditionTimer();
		me.__612.ggUpdateConditionTimer();
		me.__715.ggUpdateConditionTimer();
		me.__714.ggUpdateConditionTimer();
		me.__815.ggUpdateConditionTimer();
		me.__814.ggUpdateConditionTimer();
		me.__915.ggUpdateConditionTimer();
		me.__914.ggUpdateConditionTimer();
		me.__1015.ggUpdateConditionTimer();
		me.__1014.ggUpdateConditionTimer();
		me.__1215.ggUpdateConditionTimer();
		me.__1214.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};