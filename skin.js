// Garden Gnome Software - Skin
// Pano2VR 7.0.6/20004
// Filename: huonmedi.ggsk
// Generated 2023-11-08T15:47:06

function pano2vrSkin(player,base) {
	player.addVariable('vis_mouse_on1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mouse_on2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mouse_on3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_6', 2, false, { ignoreInState: 0  });
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
		el=me.__149=document.createElement('div');
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
		me.__149.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__149.ggUpdatePosition=function (useTransition) {
		}
		el=me.__154=document.createElement('div');
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
		me.__154.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__154.logicBlock_position = function() {
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
			if (me.__154.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__154.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__154.style.transition='left 0s, top 0s';
				if (me.__154.ggCurrentLogicStatePosition == 0) {
					me.__154.style.left='30%';
					me.__154.style.top = 'calc(50% - (54% / 2))';
				}
				else {
					me.__154.style.left='2.34375%';
					me.__154.style.top='calc(50% - ((54% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__154.logicBlock_position();
		me.__154.ggUpdatePosition=function (useTransition) {
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
		me.__154.appendChild(me._image_1);
		me.__149.appendChild(me.__154);
		el=me.__151=document.createElement('div');
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
		me.__151.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__151.ggUpdatePosition=function (useTransition) {
		}
		el=me.__152=document.createElement('div');
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
		me.__152.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__152.ggUpdatePosition=function (useTransition) {
		}
		el=me.__153=document.createElement('div');
		els=me.__153__text=document.createElement('div');
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
		me.__153.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc81c\ud488 \ud655\uc778", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__153.ggUpdateText();
		el.appendChild(els);
		me.__153.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__153.onclick=function (e) {
			me.__145.ggVisible = !me.__145.ggVisible;
			var flag=me.__145.ggVisible;
			me.__145.style.transition='none';
			me.__145.style.visibility=((flag)&&(Number(me.__145.style.opacity)>0||!me.__145.style.opacity))?'inherit':'hidden';
			me._up.ggVisible = !me._up.ggVisible;
			var flag=me._up.ggVisible;
			me._up.style.transition='none';
			me._up.style.visibility=((flag)&&(Number(me._up.style.opacity)>0||!me._up.style.opacity))?'inherit':'hidden';
			me._down.ggVisible = !me._down.ggVisible;
			var flag=me._down.ggVisible;
			me._down.style.transition='none';
			me._down.style.visibility=((flag)&&(Number(me._down.style.opacity)>0||!me._down.style.opacity))?'inherit':'hidden';
		}
		me.__153.ggUpdatePosition=function (useTransition) {
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
		me.__153.appendChild(me._down);
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
		me.__153.appendChild(me._up);
		me.__152.appendChild(me.__153);
		me.__151.appendChild(me.__152);
		me.__149.appendChild(me.__151);
		el=me.__150=document.createElement('div');
		el.ggId="\ubc29 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 45px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 450px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__150.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__150.logicBlock_visible = function() {
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
			if (me.__150.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__150.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__150.style.transition='';
				if (me.__150.ggCurrentLogicStateVisible == 0) {
					me.__150.style.visibility="hidden";
					me.__150.ggVisible=false;
				}
				else {
					me.__150.style.visibility=(Number(me.__150.style.opacity)>0||!me.__150.style.opacity)?'inherit':'hidden';
					me.__150.ggVisible=true;
				}
			}
		}
		me.__150.logicBlock_visible();
		me.__150.ggUpdatePosition=function (useTransition) {
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
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 2px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
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
		me.__150.appendChild(me._aesthetic_therapy);
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
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
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
		me.__150.appendChild(me._endoscope);
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
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 2px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : 310px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
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
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 20px;';
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
		me.__150.appendChild(me._extracorporeal);
		me.__149.appendChild(me.__150);
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
		me.__149.appendChild(me.__room);
		me._header.appendChild(me.__149);
		me.divSkin.appendChild(me._header);
		el=me.__145=document.createElement('div');
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
		me.__145.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__145.ggUpdatePosition=function (useTransition) {
		}
		el=me.__146=document.createElement('div');
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
		me.__147.ggUpdatePosition=function (useTransition) {
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
		el=me.__148=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__148;
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
		me.__148.ggUpdatePosition=function (useTransition) {
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
		me.__148.appendChild(me._cloner_1);
		me._scrollarea_1__content.appendChild(me.__148);
		me.__147.appendChild(me._scrollarea_1);
		me.__146.appendChild(me.__147);
		me.__145.appendChild(me.__146);
		me.divSkin.appendChild(me.__145);
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
		el=me.__131=document.createElement('div');
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
		me.__131.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__131.ggUpdatePosition=function (useTransition) {
		}
		el=me.__132=document.createElement('div');
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
		el=me.__133=document.createElement('div');
		el.ggId="\uc81c\ud488\uc124\uba85\ud31d\uc5c5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67.1027%;';
		hs+='left : calc(50% - ((68% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 68%;';
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
		el=me.__134=document.createElement('div');
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
		el=me.__139=document.createElement('div');
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
		me.__139.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__139.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 461))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__139.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__139.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__139.style.transition='';
				if (me.__139.ggCurrentLogicStateVisible == 0) {
					me.__139.style.visibility="hidden";
					me.__139.ggVisible=false;
				}
				else {
					me.__139.style.visibility=(Number(me.__139.style.opacity)>0||!me.__139.style.opacity)?'inherit':'hidden';
					me.__139.ggVisible=true;
				}
			}
		}
		me.__139.logicBlock_visible();
		me.__139.ggUpdatePosition=function (useTransition) {
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
		me.__139.appendChild(me._image_4);
		el=me.__144=document.createElement('div');
		els=me.__144__text=document.createElement('div');
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
		me.__144.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__144.ggUpdateText();
		el.appendChild(els);
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
		me.__144.ggUpdatePosition=function (useTransition) {
		}
		me.__139.appendChild(me.__144);
		el=me.__143=document.createElement('div');
		els=me.__143__img=document.createElement('img');
		els.className='ggskin ggskin__143';
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
		me.__143.onclick=function (e) {
			me.__140.style.transition='none';
			me.__140.style.visibility=(Number(me.__140.style.opacity)>0||!me.__140.style.opacity)?'inherit':'hidden';
			me.__140.ggVisible=true;
			me.__143.style.transition='none';
			me.__143.style.visibility='hidden';
			me.__143.ggVisible=false;
			me.__142.style.transition='none';
			me.__142.style.visibility=(Number(me.__142.style.opacity)>0||!me.__142.style.opacity)?'inherit':'hidden';
			me.__142.ggVisible=true;
		}
		me.__143.onmouseover=function (e) {
			me.elementMouseOver['_143']=true;
			me._text_7.logicBlock_visible();
		}
		me.__143.onmouseout=function (e) {
			me.elementMouseOver['_143']=false;
			me._text_7.logicBlock_visible();
		}
		me.__143.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_143']) {
				me.elementMouseOver['_143']=true;
				me._text_7.logicBlock_visible();
			}
		}
		me.__143.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_143'] == true))
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
		me.__143.appendChild(me._text_7);
		me.__139.appendChild(me.__143);
		el=me.__142=document.createElement('div');
		els=me.__142__img=document.createElement('img');
		els.className='ggskin ggskin__142';
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
		me.__142.onclick=function (e) {
			me.__143.style.transition='none';
			me.__143.style.visibility=(Number(me.__143.style.opacity)>0||!me.__143.style.opacity)?'inherit':'hidden';
			me.__143.ggVisible=true;
			me.__142.style.transition='none';
			me.__142.style.visibility='hidden';
			me.__142.ggVisible=false;
			me.__140.style.transition='none';
			me.__140.style.visibility='hidden';
			me.__140.ggVisible=false;
		}
		me.__142.onmouseover=function (e) {
			me.elementMouseOver['_142']=true;
			me._text_8.logicBlock_visible();
		}
		me.__142.onmouseout=function (e) {
			me.elementMouseOver['_142']=false;
			me._text_8.logicBlock_visible();
		}
		me.__142.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_142']) {
				me.elementMouseOver['_142']=true;
				me._text_8.logicBlock_visible();
			}
		}
		me.__142.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_142'] == true))
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
		me.__142.appendChild(me._text_8);
		me.__139.appendChild(me.__142);
		el=me.__140=document.createElement('div');
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
		els=me.__141__text=document.createElement('div');
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
		me.__141.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\/\ubaa8\ub378\uba85<\/b>\nDermaAKNE\/\ubc94\uc6a9\uc804\uae30\uc218\uc220\uae30\n\n<b>*\ubcf8\uccb4<\/b>\n-\uc911\ub7c9 : 35kg\n\n<b>*\ubc94\uc6a9\uc804\uae30\uc218\uc220\uae30<\/b>\n- \ud658\uc790\uc5d0\uac8c \uace0\uc8fc\ud30c(RF)\uc5d0\ub108\uc9c0\ub97c \ud758\ub824\ubcf4\ub0b4 \uc138\ud3ec\uc870\uc9c1\uc744 \uc751\uace0\uc2dc\ud0a4\ub294 \uae30\uad6c\n- \uace0\uc8fc\ud30c \ucd9c\ub825\uc758 \uc5d0\ub108\uc9c0 \uc124\uc815\uac00\ub2a5(1~10)\n- \uace0\uc8fc\ud30c \ucd9c\ub825\uc2dc\uac04 \uc124\uc815\uac00\ub2a5(50msec~200msec, 300msec, 400msec+10%)\n\n<b>*\uace0\uc8fc\ud30c\uc790\uadf9\uae30<\/b>\n- \ud658\uc790\uc5d0\uac8c \uace0\uc8fc\ud30c(RF)\uc5d0\ub108\uc9c0\ub97c \uac00\ud558\uc5ec \uc0dd\uccb4\uc5f4\uc744 \ubc1c\uc0dd \ud1b5\uc99d\uc744 \uc644\ud654\uc2dc\ud0a4\ub294 \uae30\uad6c\n- \uace0\uc8fc\ud30c \ucd9c\ub825\uc2dc\uac04 \uc124\uc815\uac00\ub2a5(High, Middle, Low)\n- \ucd9c\ub825\uc2dc\uac04 \uc124\uc815\uac00\ub2a5(5\/10\/15\/20\ubd84)\n\n<b>*\ud384\uc2a4\uad11\uc120\uc870\uc0ac\uae30<\/b>\n- \ud658\uc790\uc5d0\uac8c \ud384\uc2a4 \ud615\ud0dc\uc758 \ube5b\uc758 \ud30c\uc7a5\uc744 \uc870\uc0ac\ud558\uc5ec \ud53c\ubd80\uc9c8\ud658\uc744 \uce58\ub8cc\ud558\ub294 \uae30\uad6c\n- \ube5b\uc758 \ucd9c\ub825 \ud06c\uae30\ub97c \uc124\uc815\uac00\ub2a5(1~9Level)\n- Vacuum\uc758 \uac15\ub3c4 \uc124\uc815\uac00\ub2a5(S1,S2,V1,V2)\n- \ube5b\uc758 \ucd9c\ub825\ubc29\uc2dd, \ubc18\ubcf5\ud69f\uc218, \ubc18\ubcf5\uc2dc\uac04 \uc124\uc815\uac00\ub2a5\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__141.ggUpdateText();
		el.appendChild(els);
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
		me.__140.appendChild(me.__141);
		me.__139.appendChild(me.__140);
		me.__134.appendChild(me.__139);
		el=me.__137=document.createElement('div');
		el.ggId="\uc81c\ud488\uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:none;';
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
		me.__137.logicBlock_visible = function() {
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
			if (me.__137.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__137.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__137.style.transition='';
				if (me.__137.ggCurrentLogicStateVisible == 0) {
					me.__137.style.visibility="hidden";
					me.__137.ggVisible=false;
				}
				else {
					me.__137.style.visibility=(Number(me.__137.style.opacity)>0||!me.__137.style.opacity)?'inherit':'hidden';
					me.__137.ggVisible=true;
				}
			}
		}
		me.__137.logicBlock_visible();
		me.__137.ggUpdatePosition=function (useTransition) {
		}
		el=me.__138=document.createElement('div');
		el.ggId="\uc774\ubbf8\uc9c0\ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 69%;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__138.appendChild(me._image_2);
		me.__137.appendChild(me.__138);
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
		hs+='left : 0%;';
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
		hs+='padding: 20px 0px 0px 20px;';
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
		me.__137.appendChild(me._text_2);
		me.__134.appendChild(me.__137);
		el=me.__136=document.createElement('div');
		els=me.__136__text=document.createElement('div');
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
		me.__136.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__136.ggUpdateText();
		el.appendChild(els);
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
		me.__136.logicBlock_visible = function() {
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
			if (me.__136.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__136.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__136.style.transition='';
				if (me.__136.ggCurrentLogicStateVisible == 0) {
					me.__136.style.visibility="hidden";
					me.__136.ggVisible=false;
				}
				else {
					me.__136.style.visibility=(Number(me.__136.style.opacity)>0||!me.__136.style.opacity)?'inherit':'hidden';
					me.__136.ggVisible=true;
				}
			}
		}
		me.__136.logicBlock_visible();
		me.__136.ggUpdatePosition=function (useTransition) {
		}
		me.__134.appendChild(me.__136);
		el=me.__135=document.createElement('div');
		els=me.__135__text=document.createElement('div');
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
		hs+='height : 70%;';
		hs+='position : absolute;';
		hs+='right : 46px;';
		hs+='top : 114px;';
		hs+='visibility : inherit;';
		hs+='width : 46%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__135.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>DermaAKNE<\/b>\n\nIPL\uacfc RF \uae30\uc220\uc744 \uc774\uc6a9\ud558\uc5ec \uc120\ud0dd\uc801 \uc5ec\ub4dc\ub984 \uc99d\uc0c1 \uac1c\uc120\uc5d0 \ubcf4\uc870\uc801\uc73c\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\n<b>*\ud488\ubaa9\/\ubaa8\ub378\uba85<\/b>\nDermaAKNE\/\ubc94\uc6a9\uc804\uae30\uc218\uc220\uae30\n\n<b>*\ubcf8\uccb4<\/b>\n-\uc911\ub7c9 : 35kg\n\n<b>*\ubc94\uc6a9\uc804\uae30\uc218\uc220\uae30<\/b>\n- \ud658\uc790\uc5d0\uac8c \uace0\uc8fc\ud30c(RF)\uc5d0\ub108\uc9c0\ub97c \ud758\ub824\ubcf4\ub0b4 \uc138\ud3ec\uc870\uc9c1\uc744 \uc751\uace0\uc2dc\ud0a4\ub294 \uae30\uad6c\n- \uace0\uc8fc\ud30c \ucd9c\ub825\uc758 \uc5d0\ub108\uc9c0 \uc124\uc815\uac00\ub2a5(1~10)\n- \uace0\uc8fc\ud30c \ucd9c\ub825\uc2dc\uac04 \uc124\uc815\uac00\ub2a5(50msec~200msec, 300msec, 400msec+10%)\n\n<b>*\uace0\uc8fc\ud30c\uc790\uadf9\uae30<\/b>\n- \ud658\uc790\uc5d0\uac8c \uace0\uc8fc\ud30c(RF)\uc5d0\ub108\uc9c0\ub97c \uac00\ud558\uc5ec \uc0dd\uccb4\uc5f4\uc744 \ubc1c\uc0dd \ud1b5\uc99d\uc744 \uc644\ud654\uc2dc\ud0a4\ub294 \uae30\uad6c\n- \uace0\uc8fc\ud30c \ucd9c\ub825\uc2dc\uac04 \uc124\uc815\uac00\ub2a5(High, Middle, Low)\n- \ucd9c\ub825\uc2dc\uac04 \uc124\uc815\uac00\ub2a5(5\/10\/15\/20\ubd84)\n\n<b>*\ud384\uc2a4\uad11\uc120\uc870\uc0ac\uae30<\/b>\n- \ud658\uc790\uc5d0\uac8c \ud384\uc2a4 \ud615\ud0dc\uc758 \ube5b\uc758 \ud30c\uc7a5\uc744 \uc870\uc0ac\ud558\uc5ec \ud53c\ubd80\uc9c8\ud658\uc744 \uce58\ub8cc\ud558\ub294 \uae30\uad6c\n- \ube5b\uc758 \ucd9c\ub825 \ud06c\uae30\ub97c \uc124\uc815\uac00\ub2a5(1~9Level)\n- Vacuum\uc758 \uac15\ub3c4 \uc124\uc815\uac00\ub2a5(S1,S2,V1,V2)\n- \ube5b\uc758 \ucd9c\ub825\ubc29\uc2dd, \ubc18\ubcf5\ud69f\uc218, \ubc18\ubcf5\uc2dc\uac04 \uc124\uc815\uac00\ub2a5\n\n", params);
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
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA01JREFUeF7t3W1uwjAMBuD2ZMDJgJMBJ2PypKD92Do78cfrxJGmTQIa10+dhKpT9vf7/d6qwWRgLxAYi+9ACgTLo0DAPAqkQNAyABZPzSEFApYBsHCqQgoELANg4Ygr5Pl8bvf7faPf1K7X63Y+n79/Vm4tL5QD+pvycTqdttvtJkqLCIQOThi/NYKRdi6KFPjNmnlhgxx12nK1IgonL4/Hgz2CsEEul8tnmDq6WFdC4WBQrmj4IhROY4Ps+8453mdemX344mK0pHFvqrNBuBWywvAlxaCchIO0FdhsldKDIRnG2RVCSzmqEmmTBCM9tvf7ezAoRpNJnQ7cG9AMKF7nzq6QdjV6BeZ99R/153nOYpDVKsUTg3LbBbIKijfGEM'+
			'jsKBEYwyCzokRhqIDMhhKJoQYyC0o0hipIdhQEDHWQrCgoGCYg2VCQMMxAsqCgYZiCoKMgYpiDoKKgYriAoKEgY7iBoKCgY7iCRKNkwHAHiULJghEC4o2SCSMMxAslG0YoiDVKRoxwECuUrBgQINoomTFgQLRQsmNAgYyi0Of/+lcJeu2vhvbMWPdTJ0cnOfJa71Xe0ycaBlyFtKR6oCBiwIKMDF+cSkHFgAaxQkHGgAfRRkHHSAGihZIBIw3IKEoWjALhrACc3wP3PeS389dYBmepEngQDYyGnAEFGkQTIwsKLIgFRgYUSBBLDHQUOBAPDGQUKJBeDJqs6/a78vp8BIM+O/LlEWn1BVEhGhijt+5RUMJBNDFmQAkFscDIjhIGYomRGSUExAMjK4o7iCdGRhRXkAiMbChuIJEYmVBcQBAwsqCYgyBhZEAxBUHEQEcx'+
			'A0HGQEYxAcmAgYqiDpIJAxFFFSQjBhqKGkhmDCQUFZAZMFBQhkFmwkBAGQKZESMapRtkZoxIlC6QFTCiUMQgK2FEoIhAVsTwRmGD1IYu/funmGzo0lMdKM86aT7T15OH8F3aKAEzYvQOX+EgM2P0ooTt0rYChhTFpEI4k/pKGBIUSV7Yq6z/ni6XdKo5ySIc62iil+ZFBNJQXq/XZ19cKse2hTdCcqJioBHk5xbevXkRg0Sd8Cr9FgiYdIEUCFgGwMKpCikQsAyAhVMVUiBgGQALpyqkQMAyABbOFwOw+BFBH87/AAAAAElFTkSuQmCC';
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
		hs+='right : -62px;';
		hs+='top : -37px;';
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
			me.__131.style.transition='none';
			me.__131.style.visibility='hidden';
			me.__131.ggVisible=false;
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__134.appendChild(me._image_3);
		me.__133.appendChild(me.__134);
		me.__132.appendChild(me.__133);
		me.__131.appendChild(me.__132);
		me.divSkin.appendChild(me.__131);
		el=me.__211=document.createElement('div');
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
		me.__211.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		el=me.__212=document.createElement('div');
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
		el=me.__214=document.createElement('div');
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
		me.__214.ggUpdatePosition=function (useTransition) {
		}
		el=me.__222=document.createElement('div');
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
		me.__222.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__222.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 461))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__222.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__222.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__222.style.transition='';
				if (me.__222.ggCurrentLogicStateVisible == 0) {
					me.__222.style.visibility="hidden";
					me.__222.ggVisible=false;
				}
				else {
					me.__222.style.visibility=(Number(me.__222.style.opacity)>0||!me.__222.style.opacity)?'inherit':'hidden';
					me.__222.ggVisible=true;
				}
			}
		}
		me.__222.logicBlock_visible();
		me.__222.ggUpdatePosition=function (useTransition) {
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
		me.__222.appendChild(me._image_42);
		el=me.__227=document.createElement('div');
		els=me.__227__text=document.createElement('div');
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
		me.__227.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__227.ggUpdateText();
		el.appendChild(els);
		me.__227.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__227.ggUpdatePosition=function (useTransition) {
		}
		me.__222.appendChild(me.__227);
		el=me.__226=document.createElement('div');
		els=me.__226__img=document.createElement('img');
		els.className='ggskin ggskin__226';
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
		me.__226.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__226.onclick=function (e) {
			me.__223.style.transition='none';
			me.__223.style.visibility=(Number(me.__223.style.opacity)>0||!me.__223.style.opacity)?'inherit':'hidden';
			me.__223.ggVisible=true;
			me.__226.style.transition='none';
			me.__226.style.visibility='hidden';
			me.__226.ggVisible=false;
			me.__225.style.transition='none';
			me.__225.style.visibility=(Number(me.__225.style.opacity)>0||!me.__225.style.opacity)?'inherit':'hidden';
			me.__225.ggVisible=true;
		}
		me.__226.onmouseover=function (e) {
			me.elementMouseOver['_226']=true;
			me._text_72.logicBlock_visible();
		}
		me.__226.onmouseout=function (e) {
			me.elementMouseOver['_226']=false;
			me._text_72.logicBlock_visible();
		}
		me.__226.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_226']) {
				me.elementMouseOver['_226']=true;
				me._text_72.logicBlock_visible();
			}
		}
		me.__226.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_226'] == true))
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
		me.__226.appendChild(me._text_72);
		me.__222.appendChild(me.__226);
		el=me.__225=document.createElement('div');
		els=me.__225__img=document.createElement('img');
		els.className='ggskin ggskin__225';
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
		me.__225.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__225.onclick=function (e) {
			me.__226.style.transition='none';
			me.__226.style.visibility=(Number(me.__226.style.opacity)>0||!me.__226.style.opacity)?'inherit':'hidden';
			me.__226.ggVisible=true;
			me.__225.style.transition='none';
			me.__225.style.visibility='hidden';
			me.__225.ggVisible=false;
			me.__223.style.transition='none';
			me.__223.style.visibility='hidden';
			me.__223.ggVisible=false;
		}
		me.__225.onmouseover=function (e) {
			me.elementMouseOver['_225']=true;
			me._text_82.logicBlock_visible();
		}
		me.__225.onmouseout=function (e) {
			me.elementMouseOver['_225']=false;
			me._text_82.logicBlock_visible();
		}
		me.__225.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_225']) {
				me.elementMouseOver['_225']=true;
				me._text_82.logicBlock_visible();
			}
		}
		me.__225.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_225'] == true))
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
		me.__225.appendChild(me._text_82);
		me.__222.appendChild(me.__225);
		el=me.__223=document.createElement('div');
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
		me.__223.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__223.ggUpdatePosition=function (useTransition) {
		}
		el=me.__224=document.createElement('div');
		els=me.__224__text=document.createElement('div');
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
		me.__224.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\/\ubaa8\ub378\uba85<\/b>\n\uc804\ub3d9\uc2dd\uc758\uc57d\ud488\uc8fc\uc785\ud38c\ud504\/Panace-Ds-52\n\n<b>*\ubcf8\uccb4<\/b>\n- \uc758\uc57d\ud488\uc744 \ud658\uc790\uc5d0\uac8c \uc77c\uc815\ub7c9 \uc8fc\uc785\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uae30\uad6c\n- \ud761\uc778\uc7a5\uce58\n- \ud761\uc785\uc555\ub825 \uc120\ud0dd \uac00\ub2a5\n- \uc911\ub7c9: 3.4Kg\n\n<b>*Injector<\/b>\n- \ubcf8\uccb4\ub85c\ubd80\ud130 \uc804\uc6d0\uc744 \uacf5\uae09\ubc1b\uc544 \uc758\uc57d\ud488\uc744 \uc8fc\uc785\ud558\ub294 \uc7a5\uce58\n- \uac01 \ubaa8\ub4dc\uc5d0 \ub530\ub77c \ud53c\uc2a4\ud1a4\ud640\ub354\uc758 \uc804\uc9c4 \uc18d\ub3c4 \ubc0f \uac70\ub9ac\ub97c \uc870\uc815\ud574 \ubcf8\uccb4\uc5d0 \uc7a5\ucc29\ub41c \uc8fc\uc0ac\uae30 \uc2e4\ub9b0\uc9c0\uc758 \ud22c\uc785\ub7c9\uc744 \uc870\uc808\n- 1ml, 3ml, 5ml \uc2e4\ub9b0\uc9c0 \uc0ac\uc6a9 \uac00\ub2a5\n- \uc911\ub7c9 : 364g", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__224.ggUpdateText();
		el.appendChild(els);
		me.__224.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__224.ggUpdatePosition=function (useTransition) {
		}
		me.__223.appendChild(me.__224);
		me.__222.appendChild(me.__223);
		me.__214.appendChild(me.__222);
		el=me.__216=document.createElement('div');
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
		me.__216.logicBlock_visible = function() {
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
			if (me.__216.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__216.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__216.style.transition='';
				if (me.__216.ggCurrentLogicStateVisible == 0) {
					me.__216.style.visibility="hidden";
					me.__216.ggVisible=false;
				}
				else {
					me.__216.style.visibility=(Number(me.__216.style.opacity)>0||!me.__216.style.opacity)?'inherit':'hidden';
					me.__216.ggVisible=true;
				}
			}
		}
		me.__216.logicBlock_visible();
		me.__216.ggUpdatePosition=function (useTransition) {
		}
		el=me.__218=document.createElement('div');
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
		me.__218.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__218.ggUpdatePosition=function (useTransition) {
		}
		el=me.__221=document.createElement('div');
		els=me.__221__text=document.createElement('div');
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
		me.__221.ggUpdateText=function() {
			var params = [];
			var hs = player._("JILL-SOF", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__221.ggUpdateText();
		el.appendChild(els);
		me.__221.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__221.ggUpdatePosition=function (useTransition) {
		}
		me.__218.appendChild(me.__221);
		el=me.__219=document.createElement('div');
		els=me.__219__text=document.createElement('div');
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
		me.__219.ggUpdateText=function() {
			var params = [];
			var hs = player._("jill\'sof\ub294\n\uc74c\uc555\uc744 \uc774\uc6a9\ud55c \uc804\ub3d9\uc2dd\uc758\uc57d\ud488\uc8fc\uc785\ud38c\ud504\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__219.ggUpdateText();
		el.appendChild(els);
		me.__219.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__219.ggUpdatePosition=function (useTransition) {
		}
		el=me.__220=document.createElement('div');
		els=me.__220__text=document.createElement('div');
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
		me.__220.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc555\ub825 \uac10\uc9c0 \ud6c4 4\uac1c\uc758 \ub2c8\ub4e4\ub85c \uad6c\uc131\ub41c \uc758\uc57d\ud488\uc9c1\uc811\uc8fc\uc785\uae30\uad6c\ub97c \ud1b5\ud574 \uc2dc\uc220 \ubc94\uc704\uc5d0 \ud6a8\uacfc\uc801\uc73c\ub85c \uc57d\ubb3c\uc774 \uc8fc\uc785\ub420 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__220.ggUpdateText();
		el.appendChild(els);
		me.__220.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__220.ggUpdatePosition=function (useTransition) {
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
		me.__220.appendChild(me._text_32);
		me.__219.appendChild(me.__220);
		me.__218.appendChild(me.__219);
		me.__216.appendChild(me.__218);
		el=me.__217=document.createElement('div');
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
		me.__217.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__217.ggUpdatePosition=function (useTransition) {
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
		me.__217.appendChild(me._image_22);
		me.__216.appendChild(me.__217);
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
		me.__216.appendChild(me._text_22);
		me.__214.appendChild(me.__216);
		el=me.__215=document.createElement('div');
		els=me.__215__text=document.createElement('div');
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
		me.__215.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__215.ggUpdateText();
		el.appendChild(els);
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
		me.__215.logicBlock_visible = function() {
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
			if (me.__215.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__215.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__215.style.transition='';
				if (me.__215.ggCurrentLogicStateVisible == 0) {
					me.__215.style.visibility="hidden";
					me.__215.ggVisible=false;
				}
				else {
					me.__215.style.visibility=(Number(me.__215.style.opacity)>0||!me.__215.style.opacity)?'inherit':'hidden';
					me.__215.ggVisible=true;
				}
			}
		}
		me.__215.logicBlock_visible();
		me.__215.ggUpdatePosition=function (useTransition) {
		}
		me.__214.appendChild(me.__215);
		me.__213.appendChild(me.__214);
		me.__212.appendChild(me.__213);
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
			me.__211.style.transition='none';
			me.__211.style.visibility='hidden';
			me.__211.ggVisible=false;
		}
		me._image_32.ggUpdatePosition=function (useTransition) {
		}
		me.__212.appendChild(me._image_32);
		me.__211.appendChild(me.__212);
		me.divSkin.appendChild(me.__211);
		el=me.__34=document.createElement('div');
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
		me.__34.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
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
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
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
		el=me.__38=document.createElement('div');
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
		el=me.__315=document.createElement('div');
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
		me.__315.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 461))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__315.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__315.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__315.style.transition='';
				if (me.__315.ggCurrentLogicStateVisible == 0) {
					me.__315.style.visibility="hidden";
					me.__315.ggVisible=false;
				}
				else {
					me.__315.style.visibility=(Number(me.__315.style.opacity)>0||!me.__315.style.opacity)?'inherit':'hidden';
					me.__315.ggVisible=true;
				}
			}
		}
		me.__315.logicBlock_visible();
		me.__315.ggUpdatePosition=function (useTransition) {
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
		me.__315.appendChild(me._image_43);
		el=me.__320=document.createElement('div');
		els=me.__320__text=document.createElement('div');
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
		me.__320.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__320.ggUpdateText();
		el.appendChild(els);
		me.__320.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__320.ggUpdatePosition=function (useTransition) {
		}
		me.__315.appendChild(me.__320);
		el=me.__319=document.createElement('div');
		els=me.__319__img=document.createElement('img');
		els.className='ggskin ggskin__319';
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
		me.__319.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__319.onclick=function (e) {
			me.__316.style.transition='none';
			me.__316.style.visibility=(Number(me.__316.style.opacity)>0||!me.__316.style.opacity)?'inherit':'hidden';
			me.__316.ggVisible=true;
			me.__319.style.transition='none';
			me.__319.style.visibility='hidden';
			me.__319.ggVisible=false;
			me.__318.style.transition='none';
			me.__318.style.visibility=(Number(me.__318.style.opacity)>0||!me.__318.style.opacity)?'inherit':'hidden';
			me.__318.ggVisible=true;
		}
		me.__319.onmouseover=function (e) {
			me.elementMouseOver['_319']=true;
			me._text_73.logicBlock_visible();
		}
		me.__319.onmouseout=function (e) {
			me.elementMouseOver['_319']=false;
			me._text_73.logicBlock_visible();
		}
		me.__319.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_319']) {
				me.elementMouseOver['_319']=true;
				me._text_73.logicBlock_visible();
			}
		}
		me.__319.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_319'] == true))
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
		me.__319.appendChild(me._text_73);
		me.__315.appendChild(me.__319);
		el=me.__318=document.createElement('div');
		els=me.__318__img=document.createElement('img');
		els.className='ggskin ggskin__318';
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
		me.__318.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__318.onclick=function (e) {
			me.__319.style.transition='none';
			me.__319.style.visibility=(Number(me.__319.style.opacity)>0||!me.__319.style.opacity)?'inherit':'hidden';
			me.__319.ggVisible=true;
			me.__318.style.transition='none';
			me.__318.style.visibility='hidden';
			me.__318.ggVisible=false;
			me.__316.style.transition='none';
			me.__316.style.visibility='hidden';
			me.__316.ggVisible=false;
		}
		me.__318.onmouseover=function (e) {
			me.elementMouseOver['_318']=true;
			me._text_83.logicBlock_visible();
		}
		me.__318.onmouseout=function (e) {
			me.elementMouseOver['_318']=false;
			me._text_83.logicBlock_visible();
		}
		me.__318.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_318']) {
				me.elementMouseOver['_318']=true;
				me._text_83.logicBlock_visible();
			}
		}
		me.__318.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_318'] == true))
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
		me.__318.appendChild(me._text_83);
		me.__315.appendChild(me.__318);
		el=me.__316=document.createElement('div');
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
		el=me.__317=document.createElement('div');
		els=me.__317__text=document.createElement('div');
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
		me.__317.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\/\ubaa8\ub378\uba85<\/b>\n\uc804\ub3d9\uc2dd\uc758\uc57d\ud488\uc8fc\uc785\ud38c\ud504\/Panace-Ds-51\n\n<b>*\ubcf8\uccb4<\/b>\n- \uc758\uc57d\ud488\uc744 \ud658\uc790\uc5d0\uac8c \uc77c\uc815\ub7c9 \uc8fc\uc785\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uae30\uad6c\n- \ud761\uc778\uc7a5\uce58\n- \ud761\uc785\uc555\ub825 \uc120\ud0dd \uac00\ub2a5\n- \uc911\ub7c9: 3.4Kg\n\n<b>*Injector<\/b>\n- \ubcf8\uccb4\ub85c\ubd80\ud130 \uc804\uc6d0\uc744 \uacf5\uae09\ubc1b\uc544 \uc758\uc57d\ud488\uc744 \uc8fc\uc785\ud558\ub294 \uc7a5\uce58\n- \uac01 \ubaa8\ub4dc\uc5d0 \ub530\ub77c \ud53c\uc2a4\ud1a4\ud640\ub354\uc758 \uc804\uc9c4 \uc18d\ub3c4 \ubc0f \uac70\ub9ac\ub97c \uc870\uc815\ud574 \ubcf8\uccb4\uc5d0 \uc7a5\ucc29\ub41c \uc8fc\uc0ac\uae30      \uc2e4\ub9b0\uc9c0\uc758 \ud22c\uc785\ub7c9\uc744 \uc870\uc808\n- 1ml, 3ml, 5ml \uc2e4\ub9b0\uc9c0 \uc0ac\uc6a9 \uac00\ub2a5\n- \uc911\ub7c9 : 158g", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__317.ggUpdateText();
		el.appendChild(els);
		me.__317.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__317.ggUpdatePosition=function (useTransition) {
		}
		me.__316.appendChild(me.__317);
		me.__315.appendChild(me.__316);
		me.__38.appendChild(me.__315);
		el=me.__39=document.createElement('div');
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
		me.__39.logicBlock_visible = function() {
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
			if (me.__39.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__39.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__39.style.transition='';
				if (me.__39.ggCurrentLogicStateVisible == 0) {
					me.__39.style.visibility="hidden";
					me.__39.ggVisible=false;
				}
				else {
					me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
					me.__39.ggVisible=true;
				}
			}
		}
		me.__39.logicBlock_visible();
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me.__311=document.createElement('div');
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
		el=me.__314=document.createElement('div');
		els=me.__314__text=document.createElement('div');
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
		me.__314.ggUpdateText=function() {
			var params = [];
			var hs = player._("Dermashine PRO", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__314.ggUpdateText();
		el.appendChild(els);
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
		me.__314.ggUpdatePosition=function (useTransition) {
		}
		me.__311.appendChild(me.__314);
		el=me.__312=document.createElement('div');
		els=me.__312__text=document.createElement('div');
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
		me.__312.ggUpdateText=function() {
			var params = [];
			var hs = player._("Dermashine PRO\ub294\n\uc74c\uc555\uc744 \uc774\uc6a9\ud55c \uc804\ub3d9\uc2dd \uc758\uc57d\ud488\uc8fc\uc785\ud38c\ud504\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__312.ggUpdateText();
		el.appendChild(els);
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
		me.__313.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc555\ub825 \uac10\uc9c0 \uc790\ub3d9\uc8fc\uc0ac \ubaa8\ub4dc(Auto-Sensing)\uc774 9\uac1c\uc758 \ubbf8\uc138 \ub2c8\ub4e4\ub85c \uad6c\uc131\ub41c \uba78\uade0 \uc8fc\uc0ac\uce68\uacfc \ud53c\ubd80  \ud45c\uba74 \uc0ac\uc774\ub97c \ubc00\ucc29\uc2dc\ucf1c \uc2dc\uc220 \ubc94\uc704\uc5d0 \ud6a8\uacfc\uc801\uc73c\ub85c \uc57d\ubb3c\uc774 \uc8fc\uc785\ub420 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4.  ", params);
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
		me.__313.appendChild(me._text_33);
		me.__312.appendChild(me.__313);
		me.__311.appendChild(me.__312);
		me.__39.appendChild(me.__311);
		el=me.__310=document.createElement('div');
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
		me.__310.appendChild(me._image_23);
		me.__39.appendChild(me.__310);
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
		me.__39.appendChild(me._text_23);
		me.__38.appendChild(me.__39);
		me.__36.appendChild(me.__38);
		el=me.__37=document.createElement('div');
		els=me.__37__text=document.createElement('div');
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
		me.__37.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__37.ggUpdateText();
		el.appendChild(els);
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
		me.__37.logicBlock_visible = function() {
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
			if (me.__37.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__37.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__37.style.transition='';
				if (me.__37.ggCurrentLogicStateVisible == 0) {
					me.__37.style.visibility="hidden";
					me.__37.ggVisible=false;
				}
				else {
					me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
					me.__37.ggVisible=true;
				}
			}
		}
		me.__37.logicBlock_visible();
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me.__37);
		me.__35.appendChild(me.__36);
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
			me.__34.style.transition='none';
			me.__34.style.visibility='hidden';
			me.__34.ggVisible=false;
		}
		me._image_33.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me._image_33);
		me.__34.appendChild(me.__35);
		me.divSkin.appendChild(me.__34);
		el=me.__42=document.createElement('div');
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
		me.__42.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		el=me.__43=document.createElement('div');
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
		el=me.__44=document.createElement('div');
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
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
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
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me.__413=document.createElement('div');
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
		me.__413.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 461))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__413.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__413.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__413.style.transition='';
				if (me.__413.ggCurrentLogicStateVisible == 0) {
					me.__413.style.visibility="hidden";
					me.__413.ggVisible=false;
				}
				else {
					me.__413.style.visibility=(Number(me.__413.style.opacity)>0||!me.__413.style.opacity)?'inherit':'hidden';
					me.__413.ggVisible=true;
				}
			}
		}
		me.__413.logicBlock_visible();
		me.__413.ggUpdatePosition=function (useTransition) {
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
		me.__413.appendChild(me._image_44);
		el=me.__418=document.createElement('div');
		els=me.__418__text=document.createElement('div');
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
		me.__418.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__418.ggUpdateText();
		el.appendChild(els);
		me.__418.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__418.ggUpdatePosition=function (useTransition) {
		}
		me.__413.appendChild(me.__418);
		el=me.__417=document.createElement('div');
		els=me.__417__img=document.createElement('img');
		els.className='ggskin ggskin__417';
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
		me.__417.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__417.onclick=function (e) {
			me.__414.style.transition='none';
			me.__414.style.visibility=(Number(me.__414.style.opacity)>0||!me.__414.style.opacity)?'inherit':'hidden';
			me.__414.ggVisible=true;
			me.__417.style.transition='none';
			me.__417.style.visibility='hidden';
			me.__417.ggVisible=false;
			me.__416.style.transition='none';
			me.__416.style.visibility=(Number(me.__416.style.opacity)>0||!me.__416.style.opacity)?'inherit':'hidden';
			me.__416.ggVisible=true;
		}
		me.__417.onmouseover=function (e) {
			me.elementMouseOver['_417']=true;
			me._text_74.logicBlock_visible();
		}
		me.__417.onmouseout=function (e) {
			me.elementMouseOver['_417']=false;
			me._text_74.logicBlock_visible();
		}
		me.__417.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_417']) {
				me.elementMouseOver['_417']=true;
				me._text_74.logicBlock_visible();
			}
		}
		me.__417.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_417'] == true))
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
		me.__417.appendChild(me._text_74);
		me.__413.appendChild(me.__417);
		el=me.__416=document.createElement('div');
		els=me.__416__img=document.createElement('img');
		els.className='ggskin ggskin__416';
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
		me.__416.onclick=function (e) {
			me.__417.style.transition='none';
			me.__417.style.visibility=(Number(me.__417.style.opacity)>0||!me.__417.style.opacity)?'inherit':'hidden';
			me.__417.ggVisible=true;
			me.__416.style.transition='none';
			me.__416.style.visibility='hidden';
			me.__416.ggVisible=false;
			me.__414.style.transition='none';
			me.__414.style.visibility='hidden';
			me.__414.ggVisible=false;
		}
		me.__416.onmouseover=function (e) {
			me.elementMouseOver['_416']=true;
			me._text_84.logicBlock_visible();
		}
		me.__416.onmouseout=function (e) {
			me.elementMouseOver['_416']=false;
			me._text_84.logicBlock_visible();
		}
		me.__416.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_416']) {
				me.elementMouseOver['_416']=true;
				me._text_84.logicBlock_visible();
			}
		}
		me.__416.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_416'] == true))
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
		me.__416.appendChild(me._text_84);
		me.__413.appendChild(me.__416);
		el=me.__414=document.createElement('div');
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
		me.__414.ggUpdatePosition=function (useTransition) {
		}
		el=me.__415=document.createElement('div');
		els=me.__415__text=document.createElement('div');
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
		me.__415.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uc81c\ud488\uc815\ubcf4<\/b>\n1. \ub0b4\uc2dc\uacbd \uc218\ub7c9 : 2 Scope\n2. \uc138\ucc99 \ubc29\ubc95 : 360\ub3c4 \ud68c\uc804\ubd84\uc0ac\n3. \ucc54\ubc84\uc6a9\ub7c9 : \uc57d 16L(\uc18c\ub3c5\uc561 \ud0f1\ud06c : 18L)\n4. \ud0f1\ud06c\uc6a9\ub7c9 : \ubb3c 9L\/\uc54c\ucf54\uc62c 1L\/\uc138\uc815\uc561 1L\n5. \uc804\uc58d\/\uc8fc\ud30c\uc218 : AC 220~230V, 50\/60Hz\n6. \uc18c\ube44\uc804\ub825 : 1,500W\n7. \ud06c\uae30 : 696 X 656 X 4,045mm\n8.\ubb34\uac8c : 81kg\n\n\uc8fc\uc758 : \uc774 \uc81c\ud488\uc740 \'\uc758\ub8cc\uae30\uae30\'\uc774\uba70, \'\uc0ac\uc6a9\uc0c1\uc758 \uc8fc\uc758\uc0ac\ud56d\'\uacfc \'\uc0ac\uc6a9\ubc29\ubc95\'\uc744 \uc798 \uc77d\uace0 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc694. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__415.ggUpdateText();
		el.appendChild(els);
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
		me.__415.ggUpdatePosition=function (useTransition) {
		}
		me.__414.appendChild(me.__415);
		me.__413.appendChild(me.__414);
		me.__45.appendChild(me.__413);
		el=me.__47=document.createElement('div');
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
		me.__47.logicBlock_visible = function() {
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
			if (me.__47.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__47.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__47.style.transition='';
				if (me.__47.ggCurrentLogicStateVisible == 0) {
					me.__47.style.visibility="hidden";
					me.__47.ggVisible=false;
				}
				else {
					me.__47.style.visibility=(Number(me.__47.style.opacity)>0||!me.__47.style.opacity)?'inherit':'hidden';
					me.__47.ggVisible=true;
				}
			}
		}
		me.__47.logicBlock_visible();
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me.__49=document.createElement('div');
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
		el=me.__412=document.createElement('div');
		els=me.__412__text=document.createElement('div');
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
		me.__412.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN DR 02", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__412.ggUpdateText();
		el.appendChild(els);
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
		me.__49.appendChild(me.__412);
		el=me.__410=document.createElement('div');
		els=me.__410__text=document.createElement('div');
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
		me.__410.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN DR 02\uc740\n\uc18c\ub3c5\uc57d\uc744 \uc774\uc6a9\ud558\uc5ec \ubb3c\uad00 \ud63c\ud569\ud558\uc5ec \ub0b4\uc2dc\uacbd\uc758 \uac01 \ub0b4\ubd80 \ucc44\ub110 \ubc0f \n\uc678\ubd80\ud45c\uba74\uc744 \uc138\ucc99, \uc18c\ub3c5\ud558\ub294 \uc5f0\uc131\ub0b4\uc2dc\uacbd\uc6a9 \uc138\uc815\uc18c\ub3c5\uae30 \uc785\ub2c8\ub2e4. ", params);
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
		el=me.__411=document.createElement('div');
		els=me.__411__text=document.createElement('div');
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
		me.__411.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc555\ub825 \uc138\ucc99 \ubc0f \ud5f9\uad7c\uacfc \uc18c\ub3c5 \ubaa8\ub450 \ub0b4\uc2dc\uacbd \ucc44\ub110 \ub0b4\ubd80\uc5d0\ub3c4 \uc9c4\ud589\ub418\ub3c4\ub85d \ucee4\ub125\ud130\ub97c \ud1b5\ud574 \ub0b4\uc2dc\uacbd \ud2b8\ub7fc\ud3ab \ubc38\ube0c\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uacf5\uae09\ud569\ub2c8\ub2e4. \ub610\ud55c, \uac01 \uacfc\uc815 \uc804, \ud6c4\ub85c \uacf5\uae30 \uacfc\uc815\uc774 \uc788\uc5b4 \ucc44\ub110 \ub0b4\ubd80\uc5d0 \uc794\ub958\ud558\ub294 \uc138\ucc99\uc218, \uc18c\ub3c5\uc218\ub97c \ubd88\uc5b4 \uac74\uc870\uc2dc\ud0b5\ub2c8\ub2e4.  ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__411.ggUpdateText();
		el.appendChild(els);
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
		me.__411.appendChild(me._text_34);
		me.__410.appendChild(me.__411);
		me.__49.appendChild(me.__410);
		me.__47.appendChild(me.__49);
		el=me.__48=document.createElement('div');
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
		me.__48.appendChild(me._image_24);
		me.__47.appendChild(me.__48);
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
		me.__47.appendChild(me._text_24);
		me.__45.appendChild(me.__47);
		el=me.__46=document.createElement('div');
		els=me.__46__text=document.createElement('div');
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
		me.__46.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__46.ggUpdateText();
		el.appendChild(els);
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
		me.__46.logicBlock_visible = function() {
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
			if (me.__46.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__46.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__46.style.transition='';
				if (me.__46.ggCurrentLogicStateVisible == 0) {
					me.__46.style.visibility="hidden";
					me.__46.ggVisible=false;
				}
				else {
					me.__46.style.visibility=(Number(me.__46.style.opacity)>0||!me.__46.style.opacity)?'inherit':'hidden';
					me.__46.ggVisible=true;
				}
			}
		}
		me.__46.logicBlock_visible();
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me.__46);
		me.__44.appendChild(me.__45);
		me.__43.appendChild(me.__44);
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
			me.__42.style.transition='none';
			me.__42.style.visibility='hidden';
			me.__42.ggVisible=false;
		}
		me._image_34.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me._image_34);
		me.__42.appendChild(me.__43);
		me.divSkin.appendChild(me.__42);
		el=me.__52=document.createElement('div');
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
		me.__52.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
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
		el=me.__54=document.createElement('div');
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
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		el=me.__55=document.createElement('div');
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
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__513=document.createElement('div');
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
		me.__513.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 461))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__513.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__513.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__513.style.transition='';
				if (me.__513.ggCurrentLogicStateVisible == 0) {
					me.__513.style.visibility="hidden";
					me.__513.ggVisible=false;
				}
				else {
					me.__513.style.visibility=(Number(me.__513.style.opacity)>0||!me.__513.style.opacity)?'inherit':'hidden';
					me.__513.ggVisible=true;
				}
			}
		}
		me.__513.logicBlock_visible();
		me.__513.ggUpdatePosition=function (useTransition) {
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
		me.__513.appendChild(me._image_45);
		el=me.__518=document.createElement('div');
		els=me.__518__text=document.createElement('div');
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
		me.__518.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__518.ggUpdateText();
		el.appendChild(els);
		me.__518.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__518.ggUpdatePosition=function (useTransition) {
		}
		me.__513.appendChild(me.__518);
		el=me.__517=document.createElement('div');
		els=me.__517__img=document.createElement('img');
		els.className='ggskin ggskin__517';
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
		me.__517.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__517.onclick=function (e) {
			me.__514.style.transition='none';
			me.__514.style.visibility=(Number(me.__514.style.opacity)>0||!me.__514.style.opacity)?'inherit':'hidden';
			me.__514.ggVisible=true;
			me.__517.style.transition='none';
			me.__517.style.visibility='hidden';
			me.__517.ggVisible=false;
			me.__516.style.transition='none';
			me.__516.style.visibility=(Number(me.__516.style.opacity)>0||!me.__516.style.opacity)?'inherit':'hidden';
			me.__516.ggVisible=true;
		}
		me.__517.onmouseover=function (e) {
			me.elementMouseOver['_517']=true;
			me._text_75.logicBlock_visible();
		}
		me.__517.onmouseout=function (e) {
			me.elementMouseOver['_517']=false;
			me._text_75.logicBlock_visible();
		}
		me.__517.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_517']) {
				me.elementMouseOver['_517']=true;
				me._text_75.logicBlock_visible();
			}
		}
		me.__517.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_517'] == true))
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
		me.__517.appendChild(me._text_75);
		me.__513.appendChild(me.__517);
		el=me.__516=document.createElement('div');
		els=me.__516__img=document.createElement('img');
		els.className='ggskin ggskin__516';
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
		me.__516.onclick=function (e) {
			me.__517.style.transition='none';
			me.__517.style.visibility=(Number(me.__517.style.opacity)>0||!me.__517.style.opacity)?'inherit':'hidden';
			me.__517.ggVisible=true;
			me.__516.style.transition='none';
			me.__516.style.visibility='hidden';
			me.__516.ggVisible=false;
			me.__514.style.transition='none';
			me.__514.style.visibility='hidden';
			me.__514.ggVisible=false;
		}
		me.__516.onmouseover=function (e) {
			me.elementMouseOver['_516']=true;
			me._text_85.logicBlock_visible();
		}
		me.__516.onmouseout=function (e) {
			me.elementMouseOver['_516']=false;
			me._text_85.logicBlock_visible();
		}
		me.__516.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_516']) {
				me.elementMouseOver['_516']=true;
				me._text_85.logicBlock_visible();
			}
		}
		me.__516.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_516'] == true))
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
		me.__516.appendChild(me._text_85);
		me.__513.appendChild(me.__516);
		el=me.__514=document.createElement('div');
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
		me.__514.ggUpdatePosition=function (useTransition) {
		}
		el=me.__515=document.createElement('div');
		els=me.__515__text=document.createElement('div');
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
		me.__515.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uc81c\ud488\uc815\ubcf4<\/b>\n1. \ub0b4\uc2dc\uacbd \uc218\ub7c9 : 1 Scope\n2. \uc138\ucc99 \ubc29\ubc95 : 360\ub3c4 \ud68c\uc804\ubd84\uc0ac\n3. \ucc54\ubc84\uc6a9\ub7c9 : \uc57d 8L(\uc18c\ub3c5\uc561 \ud0f1\ud06c : 9L)\n4. \ud0f1\ud06c\uc6a9\ub7c9 : \uc54c\ucf54\uc62c 1L\/\uc138\uc815\uc561 1L\n5. \uc804\uc58d\/\uc8fc\ud30c\uc218 : AC 220~230V, 50\/60Hz\n6. \uc18c\ube44\uc804\ub825 : 500W\n7. \ud06c\uae30 : 516 X 755 X 1,020mm\n8.\ubb34\uac8c : 58kg\n\n\uc8fc\uc758 : \uc774 \uc81c\ud488\uc740 \'\uc758\ub8cc\uae30\uae30\'\uc774\uba70, \'\uc0ac\uc6a9\uc0c1\uc758 \uc8fc\uc758\uc0ac\ud56d\'\uacfc \'\uc0ac\uc6a9\ubc29\ubc95\'\uc744 \uc798 \uc77d\uace0 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc694. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__515.ggUpdateText();
		el.appendChild(els);
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
		me.__515.ggUpdatePosition=function (useTransition) {
		}
		me.__514.appendChild(me.__515);
		me.__513.appendChild(me.__514);
		me.__55.appendChild(me.__513);
		el=me.__57=document.createElement('div');
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
		me.__57.logicBlock_visible = function() {
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
			if (me.__57.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__57.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__57.style.transition='';
				if (me.__57.ggCurrentLogicStateVisible == 0) {
					me.__57.style.visibility="hidden";
					me.__57.ggVisible=false;
				}
				else {
					me.__57.style.visibility=(Number(me.__57.style.opacity)>0||!me.__57.style.opacity)?'inherit':'hidden';
					me.__57.ggVisible=true;
				}
			}
		}
		me.__57.logicBlock_visible();
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		el=me.__59=document.createElement('div');
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
		el=me.__512=document.createElement('div');
		els=me.__512__text=document.createElement('div');
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
		me.__512.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN DR 01", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__512.ggUpdateText();
		el.appendChild(els);
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
		me.__59.appendChild(me.__512);
		el=me.__510=document.createElement('div');
		els=me.__510__text=document.createElement('div');
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
		me.__510.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN DR 01\uc740\n\uc18c\ub3c5\uc57d\uc744 \uc774\uc6a9\ud558\uc5ec \ubb3c\uad00 \ud63c\ud569\ud558\uc5ec \ub0b4\uc2dc\uacbd\uc758 \uac01 \ub0b4\ubd80 \ucc44\ub110 \ubc0f \n\uc678\ubd80\ud45c\uba74\uc744 \uc138\ucc99, \uc18c\ub3c5\ud558\ub294 \uc5f0\uc131\ub0b4\uc2dc\uacbd\uc6a9 \uc138\uc815\uc18c\ub3c5\uae30 \uc785\ub2c8\ub2e4. ", params);
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
		el=me.__511=document.createElement('div');
		els=me.__511__text=document.createElement('div');
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
		me.__511.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc555\ub825 \uc138\ucc99 \ubc0f \ud5f9\uad7c\uacfc \uc18c\ub3c5 \ubaa8\ub450 \ub0b4\uc2dc\uacbd \ucc44\ub110 \ub0b4\ubd80\uc5d0\ub3c4 \uc9c4\ud589\ub418\ub3c4\ub85d \ucee4\ub125\ud130\ub97c \ud1b5\ud574 \ub0b4\uc2dc\uacbd \ud2b8\ub7fc\ud3ab \ubc38\ube0c\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uacf5\uae09\ud569\ub2c8\ub2e4. \ub610\ud55c, \uac01 \uacfc\uc815 \uc804, \ud6c4\ub85c \uacf5\uae30 \uacfc\uc815\uc774 \uc788\uc5b4 \ucc44\ub110 \ub0b4\ubd80\uc5d0 \uc794\ub958\ud558\ub294 \uc138\ucc99\uc218, \uc18c\ub3c5\uc218\ub97c \ubd88\uc5b4 \uac74\uc870\uc2dc\ud0b5\ub2c8\ub2e4.  ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__511.ggUpdateText();
		el.appendChild(els);
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
		me.__511.appendChild(me._text_35);
		me.__510.appendChild(me.__511);
		me.__59.appendChild(me.__510);
		me.__57.appendChild(me.__59);
		el=me.__58=document.createElement('div');
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
		me.__58.appendChild(me._image_25);
		me.__57.appendChild(me.__58);
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
		me.__57.appendChild(me._text_25);
		me.__55.appendChild(me.__57);
		el=me.__56=document.createElement('div');
		els=me.__56__text=document.createElement('div');
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
		me.__56.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__56.ggUpdateText();
		el.appendChild(els);
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
		me.__56.logicBlock_visible = function() {
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
			if (me.__56.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__56.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__56.style.transition='';
				if (me.__56.ggCurrentLogicStateVisible == 0) {
					me.__56.style.visibility="hidden";
					me.__56.ggVisible=false;
				}
				else {
					me.__56.style.visibility=(Number(me.__56.style.opacity)>0||!me.__56.style.opacity)?'inherit':'hidden';
					me.__56.ggVisible=true;
				}
			}
		}
		me.__56.logicBlock_visible();
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__56);
		me.__54.appendChild(me.__55);
		me.__53.appendChild(me.__54);
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
			me.__52.style.transition='none';
			me.__52.style.visibility='hidden';
			me.__52.ggVisible=false;
		}
		me._image_35.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me._image_35);
		me.__52.appendChild(me.__53);
		me.divSkin.appendChild(me.__52);
		el=me.__62=document.createElement('div');
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
		me.__62.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		el=me.__63=document.createElement('div');
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
		el=me.__64=document.createElement('div');
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
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		el=me.__65=document.createElement('div');
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
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		el=me.__611=document.createElement('div');
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
		me.__611.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 461))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__611.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__611.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__611.style.transition='';
				if (me.__611.ggCurrentLogicStateVisible == 0) {
					me.__611.style.visibility="hidden";
					me.__611.ggVisible=false;
				}
				else {
					me.__611.style.visibility=(Number(me.__611.style.opacity)>0||!me.__611.style.opacity)?'inherit':'hidden';
					me.__611.ggVisible=true;
				}
			}
		}
		me.__611.logicBlock_visible();
		me.__611.ggUpdatePosition=function (useTransition) {
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
		me.__611.appendChild(me._image_46);
		el=me.__616=document.createElement('div');
		els=me.__616__text=document.createElement('div');
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
		me.__616.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__616.ggUpdateText();
		el.appendChild(els);
		me.__616.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__616.ggUpdatePosition=function (useTransition) {
		}
		me.__611.appendChild(me.__616);
		el=me.__615=document.createElement('div');
		els=me.__615__img=document.createElement('img');
		els.className='ggskin ggskin__615';
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
		me.__615.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__615.onclick=function (e) {
			me.__612.style.transition='none';
			me.__612.style.visibility=(Number(me.__612.style.opacity)>0||!me.__612.style.opacity)?'inherit':'hidden';
			me.__612.ggVisible=true;
			me.__615.style.transition='none';
			me.__615.style.visibility='hidden';
			me.__615.ggVisible=false;
			me.__614.style.transition='none';
			me.__614.style.visibility=(Number(me.__614.style.opacity)>0||!me.__614.style.opacity)?'inherit':'hidden';
			me.__614.ggVisible=true;
		}
		me.__615.onmouseover=function (e) {
			me.elementMouseOver['_615']=true;
			me._text_76.logicBlock_visible();
		}
		me.__615.onmouseout=function (e) {
			me.elementMouseOver['_615']=false;
			me._text_76.logicBlock_visible();
		}
		me.__615.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_615']) {
				me.elementMouseOver['_615']=true;
				me._text_76.logicBlock_visible();
			}
		}
		me.__615.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_615'] == true))
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
		me.__615.appendChild(me._text_76);
		me.__611.appendChild(me.__615);
		el=me.__614=document.createElement('div');
		els=me.__614__img=document.createElement('img');
		els.className='ggskin ggskin__614';
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
		me.__614.onclick=function (e) {
			me.__615.style.transition='none';
			me.__615.style.visibility=(Number(me.__615.style.opacity)>0||!me.__615.style.opacity)?'inherit':'hidden';
			me.__615.ggVisible=true;
			me.__614.style.transition='none';
			me.__614.style.visibility='hidden';
			me.__614.ggVisible=false;
			me.__612.style.transition='none';
			me.__612.style.visibility='hidden';
			me.__612.ggVisible=false;
		}
		me.__614.onmouseover=function (e) {
			me.elementMouseOver['_614']=true;
			me._text_86.logicBlock_visible();
		}
		me.__614.onmouseout=function (e) {
			me.elementMouseOver['_614']=false;
			me._text_86.logicBlock_visible();
		}
		me.__614.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_614']) {
				me.elementMouseOver['_614']=true;
				me._text_86.logicBlock_visible();
			}
		}
		me.__614.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_614'] == true))
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
		me.__614.appendChild(me._text_86);
		me.__611.appendChild(me.__614);
		el=me.__612=document.createElement('div');
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
		me.__612.ggUpdatePosition=function (useTransition) {
		}
		el=me.__613=document.createElement('div');
		els=me.__613__text=document.createElement('div');
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
		me.__613.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uc81c\ud488\uc815\ubcf4<\/b>\n1. \ub0b4\uc2dc\uacbd \uc218\ub7c9 : 1 Scope\n2. \uc138\ucc99 \ubc29\ubc95 : 360\ub3c4 \ud68c\uc804\ubd84\uc0ac\n3. \ucc54\ubc84\uc6a9\ub7c9 : \uc57d 8L(\uc18c\ub3c5\uc561 \ud0f1\ud06c : 9L)\n4. \ud0f1\ud06c\uc6a9\ub7c9 : \uc54c\ucf54\uc62c 1L\/\uc138\uc815\uc561 1L\n5. \uc804\uc58d\/\uc8fc\ud30c\uc218 : AC 220~230V, 50\/60Hz\n6. \uc18c\ube44\uc804\ub825 : 500W\n7. \ud06c\uae30 : 516 X 755 X 1,020mm\n8.\ubb34\uac8c : 58kg\n\n\uc8fc\uc758 : \uc774 \uc81c\ud488\uc740 \'\uc758\ub8cc\uae30\uae30\'\uc774\uba70, \'\uc0ac\uc6a9\uc0c1\uc758 \uc8fc\uc758\uc0ac\ud56d\'\uacfc \'\uc0ac\uc6a9\ubc29\ubc95\'\uc744 \uc798 \uc77d\uace0 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc694. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__613.ggUpdateText();
		el.appendChild(els);
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
		me.__613.ggUpdatePosition=function (useTransition) {
		}
		me.__612.appendChild(me.__613);
		me.__611.appendChild(me.__612);
		me.__65.appendChild(me.__611);
		el=me.__67=document.createElement('div');
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
		me.__67.logicBlock_visible = function() {
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
			if (me.__67.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__67.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__67.style.transition='';
				if (me.__67.ggCurrentLogicStateVisible == 0) {
					me.__67.style.visibility="hidden";
					me.__67.ggVisible=false;
				}
				else {
					me.__67.style.visibility=(Number(me.__67.style.opacity)>0||!me.__67.style.opacity)?'inherit':'hidden';
					me.__67.ggVisible=true;
				}
			}
		}
		me.__67.logicBlock_visible();
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		el=me.__69=document.createElement('div');
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
		el=me.__610=document.createElement('div');
		els=me.__610__text=document.createElement('div');
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
		me.__610.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud734\uc5d4 \uc2f1\uae00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__610.ggUpdateText();
		el.appendChild(els);
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
		me.__69.appendChild(me.__610);
		me.__67.appendChild(me.__69);
		el=me.__68=document.createElement('div');
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
		me.__68.appendChild(me._image_26);
		me.__67.appendChild(me.__68);
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
		me.__67.appendChild(me._text_26);
		me.__65.appendChild(me.__67);
		el=me.__66=document.createElement('div');
		els=me.__66__text=document.createElement('div');
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
		me.__66.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__66.ggUpdateText();
		el.appendChild(els);
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
		me.__66.logicBlock_visible = function() {
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
			if (me.__66.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__66.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__66.style.transition='';
				if (me.__66.ggCurrentLogicStateVisible == 0) {
					me.__66.style.visibility="hidden";
					me.__66.ggVisible=false;
				}
				else {
					me.__66.style.visibility=(Number(me.__66.style.opacity)>0||!me.__66.style.opacity)?'inherit':'hidden';
					me.__66.ggVisible=true;
				}
			}
		}
		me.__66.logicBlock_visible();
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		me.__65.appendChild(me.__66);
		me.__64.appendChild(me.__65);
		me.__63.appendChild(me.__64);
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
			me.__62.style.transition='none';
			me.__62.style.visibility='hidden';
			me.__62.ggVisible=false;
		}
		me._image_36.ggUpdatePosition=function (useTransition) {
		}
		me.__63.appendChild(me._image_36);
		me.__62.appendChild(me.__63);
		me.divSkin.appendChild(me.__62);
		el=me.__71=document.createElement('div');
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
		me.__71.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		el=me.__72=document.createElement('div');
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
		el=me.__74=document.createElement('div');
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
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		el=me.__712=document.createElement('div');
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
		me.__712.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 461))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__712.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__712.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__712.style.transition='';
				if (me.__712.ggCurrentLogicStateVisible == 0) {
					me.__712.style.visibility="hidden";
					me.__712.ggVisible=false;
				}
				else {
					me.__712.style.visibility=(Number(me.__712.style.opacity)>0||!me.__712.style.opacity)?'inherit':'hidden';
					me.__712.ggVisible=true;
				}
			}
		}
		me.__712.logicBlock_visible();
		me.__712.ggUpdatePosition=function (useTransition) {
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
		me.__712.appendChild(me._image_47);
		el=me.__717=document.createElement('div');
		els=me.__717__text=document.createElement('div');
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
		me.__717.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__717.ggUpdateText();
		el.appendChild(els);
		me.__717.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__717.ggUpdatePosition=function (useTransition) {
		}
		me.__712.appendChild(me.__717);
		el=me.__716=document.createElement('div');
		els=me.__716__img=document.createElement('img');
		els.className='ggskin ggskin__716';
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
		me.__716.onclick=function (e) {
			me.__713.style.transition='none';
			me.__713.style.visibility=(Number(me.__713.style.opacity)>0||!me.__713.style.opacity)?'inherit':'hidden';
			me.__713.ggVisible=true;
			me.__716.style.transition='none';
			me.__716.style.visibility='hidden';
			me.__716.ggVisible=false;
			me.__715.style.transition='none';
			me.__715.style.visibility=(Number(me.__715.style.opacity)>0||!me.__715.style.opacity)?'inherit':'hidden';
			me.__715.ggVisible=true;
		}
		me.__716.onmouseover=function (e) {
			me.elementMouseOver['_716']=true;
			me._text_77.logicBlock_visible();
		}
		me.__716.onmouseout=function (e) {
			me.elementMouseOver['_716']=false;
			me._text_77.logicBlock_visible();
		}
		me.__716.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_716']) {
				me.elementMouseOver['_716']=true;
				me._text_77.logicBlock_visible();
			}
		}
		me.__716.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_716'] == true))
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
		me.__716.appendChild(me._text_77);
		me.__712.appendChild(me.__716);
		el=me.__715=document.createElement('div');
		els=me.__715__img=document.createElement('img');
		els.className='ggskin ggskin__715';
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
			me.__716.style.transition='none';
			me.__716.style.visibility=(Number(me.__716.style.opacity)>0||!me.__716.style.opacity)?'inherit':'hidden';
			me.__716.ggVisible=true;
			me.__715.style.transition='none';
			me.__715.style.visibility='hidden';
			me.__715.ggVisible=false;
			me.__713.style.transition='none';
			me.__713.style.visibility='hidden';
			me.__713.ggVisible=false;
		}
		me.__715.onmouseover=function (e) {
			me.elementMouseOver['_715']=true;
			me._text_87.logicBlock_visible();
		}
		me.__715.onmouseout=function (e) {
			me.elementMouseOver['_715']=false;
			me._text_87.logicBlock_visible();
		}
		me.__715.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_715']) {
				me.elementMouseOver['_715']=true;
				me._text_87.logicBlock_visible();
			}
		}
		me.__715.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_715'] == true))
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
		me.__715.appendChild(me._text_87);
		me.__712.appendChild(me.__715);
		el=me.__713=document.createElement('div');
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
		el=me.__714=document.createElement('div');
		els=me.__714__text=document.createElement('div');
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
		me.__714.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uae30\ub300 \ud6a8\ub2a5<\/b>\n- \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd\uc5d0 \uc758\ud55c \ucda9\uaca9\ud30c \ubc1c\uc0dd, \uc2e0\uc7a5 \ubc0f \uc694\uad00\uc758 \uacb0\uc11d \ud30c\uc1c4\n- C-arm\ud615 X-ray \ub514\ud14d\ud130\ub97c \ud1b5\ud55c \uacb0\uc11d \uc704\uce58 \ud655\uc778\n- \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \ud1b5\ud55c \ud658\uc790\uc815\ubcf4\uc758 \uc785\ub825 \ubc0f \uc800\uc7a5\n\n<b>*\ud06c\uae30<\/b>\n- C-arm: 640 * 1380 * 1530(mm)\n\n<b>*\uc911\ub7c9<\/b>\n- C-arm : 350kg\n- \ud658\uc790\ud14c\uc774\ube14 : 150kg\n- \uc870\uc791\ubd80 : 35kg\n- \uc778\ubc84\ud130 \uc81c\uc5b4\ubd80 : 40kg\n- \ub9ac\ubaa8\ucf58 \ubc0f \ubc1c\ud310 \uc2a4\uc704\uce58 : \uc57d 300g\n\n<b>*\uc804\uae30\uc801 \uc815\uaca9<\/b>\n- \ub2e8\uc0c1 220V, 60Hz\n\n<b>*\uad6c\uc131\ud488<\/b>\n- X\uc120 \ubc1c\uc0dd\uae30 \n- C-arm\n- \ub514\ud14d\ud130\n- \uc870\uc791\ubd80\n- \ub9ac\ubaa8\ucf58\n- \ud658\uc790\ud14c\uc774\ube14\n- \uc778\ubc84\ud130 \uc81c\uc5b4\ubd80\n- \ucda9\uaca9\ud30c\ud5e4\ub4dc\n- \ub9ac\ud50c\ub809\ud130\n- \ubc1c\ud310\uc2a4\uc704\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__714.ggUpdateText();
		el.appendChild(els);
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
		me.__714.ggUpdatePosition=function (useTransition) {
		}
		me.__713.appendChild(me.__714);
		me.__712.appendChild(me.__713);
		me.__74.appendChild(me.__712);
		el=me.__76=document.createElement('div');
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
		me.__76.logicBlock_visible = function() {
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
			if (me.__76.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__76.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__76.style.transition='';
				if (me.__76.ggCurrentLogicStateVisible == 0) {
					me.__76.style.visibility="hidden";
					me.__76.ggVisible=false;
				}
				else {
					me.__76.style.visibility=(Number(me.__76.style.opacity)>0||!me.__76.style.opacity)?'inherit':'hidden';
					me.__76.ggVisible=true;
				}
			}
		}
		me.__76.logicBlock_visible();
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		el=me.__78=document.createElement('div');
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
		el=me.__711=document.createElement('div');
		els=me.__711__text=document.createElement('div');
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
		me.__711.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX_D", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__711.ggUpdateText();
		el.appendChild(els);
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
		me.__78.appendChild(me.__711);
		el=me.__79=document.createElement('div');
		els=me.__79__text=document.createElement('div');
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
		me.__79.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
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
		el=me.__710=document.createElement('div');
		els=me.__710__text=document.createElement('div');
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
		me.__710.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX_D\ub294 \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd \uccb4\uc678 \ucda9\uaca9\ud30c \uc1c4\uc11d\uae30\ub85c \uc804\uc790\ud29c\ube0c\uc5d0 \uc758\ud574 \ubc1c\uc0dd\ub418\ub294 \ucda9\uaca9\ud30c\ub97c \uccb4\ub0b4\uc5d0 \uc804\ub2ec\ud558\uc5ec \uc694\ub85c, \uc2e0\uc7a5 \ub4f1\uc758 \uacb0\uc11d\uc744 \ud30c\uc1c4\ud558\ub294 \uae30\uae30\uc785\ub2c8\ub2e4.", params);
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
		me.__710.appendChild(me._text_37);
		me.__79.appendChild(me.__710);
		me.__78.appendChild(me.__79);
		me.__76.appendChild(me.__78);
		el=me.__77=document.createElement('div');
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
		me.__77.appendChild(me._image_27);
		me.__76.appendChild(me.__77);
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
		me.__76.appendChild(me._text_27);
		me.__74.appendChild(me.__76);
		el=me.__75=document.createElement('div');
		els=me.__75__text=document.createElement('div');
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
		me.__75.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__75.ggUpdateText();
		el.appendChild(els);
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
		me.__74.appendChild(me.__75);
		me.__73.appendChild(me.__74);
		me.__72.appendChild(me.__73);
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
			me.__71.style.transition='none';
			me.__71.style.visibility='hidden';
			me.__71.ggVisible=false;
		}
		me._image_37.ggUpdatePosition=function (useTransition) {
		}
		me.__72.appendChild(me._image_37);
		me.__71.appendChild(me.__72);
		me.divSkin.appendChild(me.__71);
		el=me.__81=document.createElement('div');
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
		me.__81.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		el=me.__82=document.createElement('div');
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
		el=me.__84=document.createElement('div');
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
		el=me.__812=document.createElement('div');
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
		me.__812.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 461))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__812.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__812.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__812.style.transition='';
				if (me.__812.ggCurrentLogicStateVisible == 0) {
					me.__812.style.visibility="hidden";
					me.__812.ggVisible=false;
				}
				else {
					me.__812.style.visibility=(Number(me.__812.style.opacity)>0||!me.__812.style.opacity)?'inherit':'hidden';
					me.__812.ggVisible=true;
				}
			}
		}
		me.__812.logicBlock_visible();
		me.__812.ggUpdatePosition=function (useTransition) {
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
		me.__812.appendChild(me._image_48);
		el=me.__817=document.createElement('div');
		els=me.__817__text=document.createElement('div');
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
		me.__817.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__817.ggUpdateText();
		el.appendChild(els);
		me.__817.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__817.ggUpdatePosition=function (useTransition) {
		}
		me.__812.appendChild(me.__817);
		el=me.__816=document.createElement('div');
		els=me.__816__img=document.createElement('img');
		els.className='ggskin ggskin__816';
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
		me.__816.onclick=function (e) {
			me.__813.style.transition='none';
			me.__813.style.visibility=(Number(me.__813.style.opacity)>0||!me.__813.style.opacity)?'inherit':'hidden';
			me.__813.ggVisible=true;
			me.__816.style.transition='none';
			me.__816.style.visibility='hidden';
			me.__816.ggVisible=false;
			me.__815.style.transition='none';
			me.__815.style.visibility=(Number(me.__815.style.opacity)>0||!me.__815.style.opacity)?'inherit':'hidden';
			me.__815.ggVisible=true;
		}
		me.__816.onmouseover=function (e) {
			me.elementMouseOver['_816']=true;
			me._text_78.logicBlock_visible();
		}
		me.__816.onmouseout=function (e) {
			me.elementMouseOver['_816']=false;
			me._text_78.logicBlock_visible();
		}
		me.__816.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_816']) {
				me.elementMouseOver['_816']=true;
				me._text_78.logicBlock_visible();
			}
		}
		me.__816.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_816'] == true))
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
		me.__816.appendChild(me._text_78);
		me.__812.appendChild(me.__816);
		el=me.__815=document.createElement('div');
		els=me.__815__img=document.createElement('img');
		els.className='ggskin ggskin__815';
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
			me.__816.style.transition='none';
			me.__816.style.visibility=(Number(me.__816.style.opacity)>0||!me.__816.style.opacity)?'inherit':'hidden';
			me.__816.ggVisible=true;
			me.__815.style.transition='none';
			me.__815.style.visibility='hidden';
			me.__815.ggVisible=false;
			me.__813.style.transition='none';
			me.__813.style.visibility='hidden';
			me.__813.ggVisible=false;
		}
		me.__815.onmouseover=function (e) {
			me.elementMouseOver['_815']=true;
			me._text_88.logicBlock_visible();
		}
		me.__815.onmouseout=function (e) {
			me.elementMouseOver['_815']=false;
			me._text_88.logicBlock_visible();
		}
		me.__815.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_815']) {
				me.elementMouseOver['_815']=true;
				me._text_88.logicBlock_visible();
			}
		}
		me.__815.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_815'] == true))
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
		me.__815.appendChild(me._text_88);
		me.__812.appendChild(me.__815);
		el=me.__813=document.createElement('div');
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
		el=me.__814=document.createElement('div');
		els=me.__814__text=document.createElement('div');
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
		me.__814.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uae30\ub300 \ud6a8\ub2a5<\/b>\n- \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd\uc5d0 \uc758\ud55c \ucda9\uaca9\ud30c \ubc1c\uc0dd, \uc2e0\uc7a5 \ubc0f \uc694\uad00\uc758 \uacb0\uc11d \ud30c\uc1c4\n- C-arm\ud615 X-ray \ub514\ud14d\ud130\ub97c \ud1b5\ud55c \uacb0\uc11d \uc704\uce58 \ud655\uc778\n- \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \ud1b5\ud55c \ud658\uc790\uc815\ubcf4\uc758 \uc785\ub825 \ubc0f \uc800\uc7a5\n\n<b>*\ud06c\uae30<\/b>\n- C-arm: 640 * 1380 * 1530(mm)\n\n<b>*\uc911\ub7c9<\/b>\n- C-arm : 350kg\n- \ud658\uc790\ud14c\uc774\ube14 : 150kg\n- \uc870\uc791\ubd80 : 35kg\n- \uc778\ubc84\ud130 \uc81c\uc5b4\ubd80 : 40kg\n- \ub9ac\ubaa8\ucf58 \ubc0f \ubc1c\ud310 \uc2a4\uc704\uce58 : \uc57d 300g\n\n<b>*\uc804\uae30\uc801 \uc815\uaca9<\/b>\n- \ub2e8\uc0c1 220V, 60Hz\n\n<b>*\uad6c\uc131\ud488<\/b>\n- X\uc120 \ubc1c\uc0dd\uae30 \n- C-arm\n- \ub514\ud14d\ud130\n- \uc870\uc791\ubd80\n- \ub9ac\ubaa8\ucf58\n- \ud658\uc790\ud14c\uc774\ube14\n- \uc778\ubc84\ud130 \uc81c\uc5b4\ubd80\n- \ucda9\uaca9\ud30c\ud5e4\ub4dc\n- \ub9ac\ud50c\ub809\ud130\n- \ubc1c\ud310\uc2a4\uc704\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__814.ggUpdateText();
		el.appendChild(els);
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
		me.__814.ggUpdatePosition=function (useTransition) {
		}
		me.__813.appendChild(me.__814);
		me.__812.appendChild(me.__813);
		me.__84.appendChild(me.__812);
		el=me.__86=document.createElement('div');
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
		el=me.__88=document.createElement('div');
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
		el=me.__811=document.createElement('div');
		els=me.__811__text=document.createElement('div');
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
		me.__811.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-MXD", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__811.ggUpdateText();
		el.appendChild(els);
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
		me.__88.appendChild(me.__811);
		el=me.__89=document.createElement('div');
		els=me.__89__text=document.createElement('div');
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
		me.__89.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
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
		el=me.__810=document.createElement('div');
		els=me.__810__text=document.createElement('div');
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
		me.__810.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-MXD\ub294 \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd \uccb4\uc678 \ucda9\uaca9\ud30c \uc1c4\uc11d\uae30\ub85c \uc804\uc790\ud29c\ube0c\uc5d0 \uc758\ud574 \ubc1c\uc0dd\ub418\ub294 \ucda9\uaca9\ud30c\ub97c \uccb4\ub0b4\uc5d0 \uc804\ub2ec\ud558\uc5ec \uc694\ub85c, \uc2e0\uc7a5 \ub4f1\uc758 \uacb0\uc11d\uc744 \ud30c\uc1c4\ud558\ub294 \uae30\uae30\uc785\ub2c8\ub2e4.", params);
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
		me.__810.appendChild(me._text_38);
		me.__89.appendChild(me.__810);
		me.__88.appendChild(me.__89);
		me.__86.appendChild(me.__88);
		el=me.__87=document.createElement('div');
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
		me.__87.appendChild(me._image_28);
		me.__86.appendChild(me.__87);
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
		me.__86.appendChild(me._text_28);
		me.__84.appendChild(me.__86);
		el=me.__85=document.createElement('div');
		els=me.__85__text=document.createElement('div');
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
		me.__85.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__85.ggUpdateText();
		el.appendChild(els);
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
		me.__84.appendChild(me.__85);
		me.__83.appendChild(me.__84);
		me.__82.appendChild(me.__83);
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
			me.__81.style.transition='none';
			me.__81.style.visibility='hidden';
			me.__81.ggVisible=false;
		}
		me._image_38.ggUpdatePosition=function (useTransition) {
		}
		me.__82.appendChild(me._image_38);
		me.__81.appendChild(me.__82);
		me.divSkin.appendChild(me.__81);
		el=me.__91=document.createElement('div');
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
		me.__91.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__91.ggUpdatePosition=function (useTransition) {
		}
		el=me.__92=document.createElement('div');
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
		el=me.__94=document.createElement('div');
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
		me.__94.ggUpdatePosition=function (useTransition) {
		}
		el=me.__912=document.createElement('div');
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
		me.__912.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 461))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__912.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__912.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__912.style.transition='';
				if (me.__912.ggCurrentLogicStateVisible == 0) {
					me.__912.style.visibility="hidden";
					me.__912.ggVisible=false;
				}
				else {
					me.__912.style.visibility=(Number(me.__912.style.opacity)>0||!me.__912.style.opacity)?'inherit':'hidden';
					me.__912.ggVisible=true;
				}
			}
		}
		me.__912.logicBlock_visible();
		me.__912.ggUpdatePosition=function (useTransition) {
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
		me.__912.appendChild(me._image_49);
		el=me.__917=document.createElement('div');
		els=me.__917__text=document.createElement('div');
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
		me.__917.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__917.ggUpdateText();
		el.appendChild(els);
		me.__917.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__917.ggUpdatePosition=function (useTransition) {
		}
		me.__912.appendChild(me.__917);
		el=me.__916=document.createElement('div');
		els=me.__916__img=document.createElement('img');
		els.className='ggskin ggskin__916';
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
		me.__916.onclick=function (e) {
			me.__913.style.transition='none';
			me.__913.style.visibility=(Number(me.__913.style.opacity)>0||!me.__913.style.opacity)?'inherit':'hidden';
			me.__913.ggVisible=true;
			me.__916.style.transition='none';
			me.__916.style.visibility='hidden';
			me.__916.ggVisible=false;
			me.__915.style.transition='none';
			me.__915.style.visibility=(Number(me.__915.style.opacity)>0||!me.__915.style.opacity)?'inherit':'hidden';
			me.__915.ggVisible=true;
		}
		me.__916.onmouseover=function (e) {
			me.elementMouseOver['_916']=true;
			me._text_79.logicBlock_visible();
		}
		me.__916.onmouseout=function (e) {
			me.elementMouseOver['_916']=false;
			me._text_79.logicBlock_visible();
		}
		me.__916.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_916']) {
				me.elementMouseOver['_916']=true;
				me._text_79.logicBlock_visible();
			}
		}
		me.__916.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_916'] == true))
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
		me.__916.appendChild(me._text_79);
		me.__912.appendChild(me.__916);
		el=me.__915=document.createElement('div');
		els=me.__915__img=document.createElement('img');
		els.className='ggskin ggskin__915';
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
			me.__916.style.transition='none';
			me.__916.style.visibility=(Number(me.__916.style.opacity)>0||!me.__916.style.opacity)?'inherit':'hidden';
			me.__916.ggVisible=true;
			me.__915.style.transition='none';
			me.__915.style.visibility='hidden';
			me.__915.ggVisible=false;
			me.__913.style.transition='none';
			me.__913.style.visibility='hidden';
			me.__913.ggVisible=false;
		}
		me.__915.onmouseover=function (e) {
			me.elementMouseOver['_915']=true;
			me._text_89.logicBlock_visible();
		}
		me.__915.onmouseout=function (e) {
			me.elementMouseOver['_915']=false;
			me._text_89.logicBlock_visible();
		}
		me.__915.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_915']) {
				me.elementMouseOver['_915']=true;
				me._text_89.logicBlock_visible();
			}
		}
		me.__915.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_915'] == true))
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
		me.__915.appendChild(me._text_89);
		me.__912.appendChild(me.__915);
		el=me.__913=document.createElement('div');
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
		el=me.__914=document.createElement('div');
		els=me.__914__text=document.createElement('div');
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
		me.__914.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\uba85<\/b>\n- \uc804\uae30\uccb4\uc678\ucda9\uaca9\ud30c\uc1c4\uc11d\uae30\n\n<b>*\uc0ac\uc6a9\ubaa9\uc801<\/b>\n- \ucd08\uc74c\ud30c, \uc804\uae30 \ucda9\uaca9 \ud384\uc2a4 \ub4f1\uc73c\ub85c \uccb4\uc678\uc5d0\uc11c \uacb0\uc11d\uc744 \ud30c\uad34\ud558\ub294 \uae30\uad6c\n\n<b>*\uc804\uae30\uc815\uaca9<\/b>\n- \uc18c\ube44\uc804\ub825 : 3.5 kW\n\n<b>*\uc804\uae30\ucda9\uaca9\uc5d0 \ub300\ud55c \ubcf4\ud638\ud615\uc2dd \ubc0f \ubcf4\ud638\uc815\ub3c4<\/b>\n- 1\uae09 B\ud615 \uae30\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__914.ggUpdateText();
		el.appendChild(els);
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
		me.__914.ggUpdatePosition=function (useTransition) {
		}
		me.__913.appendChild(me.__914);
		me.__912.appendChild(me.__913);
		me.__94.appendChild(me.__912);
		el=me.__96=document.createElement('div');
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
		me.__96.logicBlock_visible = function() {
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
			if (me.__96.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__96.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__96.style.transition='';
				if (me.__96.ggCurrentLogicStateVisible == 0) {
					me.__96.style.visibility="hidden";
					me.__96.ggVisible=false;
				}
				else {
					me.__96.style.visibility=(Number(me.__96.style.opacity)>0||!me.__96.style.opacity)?'inherit':'hidden';
					me.__96.ggVisible=true;
				}
			}
		}
		me.__96.logicBlock_visible();
		me.__96.ggUpdatePosition=function (useTransition) {
		}
		el=me.__98=document.createElement('div');
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
		el=me.__911=document.createElement('div');
		els=me.__911__text=document.createElement('div');
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
		me.__911.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__911.ggUpdateText();
		el.appendChild(els);
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
		me.__98.appendChild(me.__911);
		el=me.__99=document.createElement('div');
		els=me.__99__text=document.createElement('div');
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
		me.__99.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX\ub294 \ub9c8\uadf8\ub124\ud2f1 \ubc29\uc2dd \uccb4\uc678 \ucda9\uaca9\ud30c \uc1c4\uc11d\uae30\ub85c \uc804\uc790\ud29c\ube0c\uc5d0 \uc758\ud574 \ubc1c\uc0dd\ub418\ub294 \ucda9\uaca9\ud30c\ub97c \uccb4\ub0b4\uc5d0 \uc804\ub2ec\ud558\uc5ec \uc694\ub85c, \uc2e0\uc7a5 \ub4f1\uc758 \uacb0\uc11d\uc744 \ud30c\uc1c4\ud558\ub294 \uae30\uae30\uc785\ub2c8\ub2e4.", params);
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
		el=me.__910=document.createElement('div');
		els=me.__910__text=document.createElement('div');
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
		me.__910.ggUpdateText=function() {
			var params = [];
			var hs = player._("URO-EMX\ub294 \ub9c8\uadf8\ub124\ud2f1\ubc29\uc2dd\uc5d0 \uc758\ud55c \ucda9\uaca9\ud30c\ub97c \ubc1c\uc0dd\uc2dc\ucf1c \ud658\uc790\uc5d0\uac8c \uc801\uc6a9\ud568\uc73c\ub85c \uc694\uad00\uc758 \uacb0\uc11d\uc744 \ud30c\uc1c4\ud558\ub294 \uae30\uae30\ub85c, C-arm\ud615 X\uc120\ud22c\uc2dc\ucd2c\uc601\uc7a5\uce58\ub97c \uc0ac\uc6a9\ud558\uc5ec \uacb0\uc11d\uc758 \uc704\uce58\ub97c \ucc3e\uc544 \ucda9\uaca9\ud30c\ubc1c\uc0dd\uae30\uc640 \ucd08\uc810\uc744 \uc77c\uce58\uc2dc\ucf1c \uc815\ud655\ud558\uac8c \uacb0\uc11d\uc744 \ud30c\uc1c4\ud569\ub2c8\ub2e4.", params);
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
		me.__910.appendChild(me._text_39);
		me.__99.appendChild(me.__910);
		me.__98.appendChild(me.__99);
		me.__96.appendChild(me.__98);
		el=me.__97=document.createElement('div');
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
		me.__97.appendChild(me._image_29);
		me.__96.appendChild(me.__97);
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
		me.__96.appendChild(me._text_29);
		me.__94.appendChild(me.__96);
		el=me.__95=document.createElement('div');
		els=me.__95__text=document.createElement('div');
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
		me.__95.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__95.ggUpdateText();
		el.appendChild(els);
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
		me.__94.appendChild(me.__95);
		me.__93.appendChild(me.__94);
		me.__92.appendChild(me.__93);
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
			me.__91.style.transition='none';
			me.__91.style.visibility='hidden';
			me.__91.ggVisible=false;
		}
		me._image_39.ggUpdatePosition=function (useTransition) {
		}
		me.__92.appendChild(me._image_39);
		me.__91.appendChild(me.__92);
		me.divSkin.appendChild(me.__91);
		el=me.__101=document.createElement('div');
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
		me.__101.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__101.ggUpdatePosition=function (useTransition) {
		}
		el=me.__102=document.createElement('div');
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
		el=me.__104=document.createElement('div');
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
		me.__104.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1012=document.createElement('div');
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
		me.__1012.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 461))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1012.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1012.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1012.style.transition='';
				if (me.__1012.ggCurrentLogicStateVisible == 0) {
					me.__1012.style.visibility="hidden";
					me.__1012.ggVisible=false;
				}
				else {
					me.__1012.style.visibility=(Number(me.__1012.style.opacity)>0||!me.__1012.style.opacity)?'inherit':'hidden';
					me.__1012.ggVisible=true;
				}
			}
		}
		me.__1012.logicBlock_visible();
		me.__1012.ggUpdatePosition=function (useTransition) {
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
		me.__1012.appendChild(me._image_410);
		el=me.__1017=document.createElement('div');
		els=me.__1017__text=document.createElement('div');
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
		me.__1017.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1017.ggUpdateText();
		el.appendChild(els);
		me.__1017.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1017.ggUpdatePosition=function (useTransition) {
		}
		me.__1012.appendChild(me.__1017);
		el=me.__1016=document.createElement('div');
		els=me.__1016__img=document.createElement('img');
		els.className='ggskin ggskin__1016';
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
		me.__1016.onclick=function (e) {
			me.__1013.style.transition='none';
			me.__1013.style.visibility=(Number(me.__1013.style.opacity)>0||!me.__1013.style.opacity)?'inherit':'hidden';
			me.__1013.ggVisible=true;
			me.__1016.style.transition='none';
			me.__1016.style.visibility='hidden';
			me.__1016.ggVisible=false;
			me.__1015.style.transition='none';
			me.__1015.style.visibility=(Number(me.__1015.style.opacity)>0||!me.__1015.style.opacity)?'inherit':'hidden';
			me.__1015.ggVisible=true;
		}
		me.__1016.onmouseover=function (e) {
			me.elementMouseOver['_1016']=true;
			me._text_710.logicBlock_visible();
		}
		me.__1016.onmouseout=function (e) {
			me.elementMouseOver['_1016']=false;
			me._text_710.logicBlock_visible();
		}
		me.__1016.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_1016']) {
				me.elementMouseOver['_1016']=true;
				me._text_710.logicBlock_visible();
			}
		}
		me.__1016.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_1016'] == true))
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
		me.__1016.appendChild(me._text_710);
		me.__1012.appendChild(me.__1016);
		el=me.__1015=document.createElement('div');
		els=me.__1015__img=document.createElement('img');
		els.className='ggskin ggskin__1015';
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
			me.__1016.style.transition='none';
			me.__1016.style.visibility=(Number(me.__1016.style.opacity)>0||!me.__1016.style.opacity)?'inherit':'hidden';
			me.__1016.ggVisible=true;
			me.__1015.style.transition='none';
			me.__1015.style.visibility='hidden';
			me.__1015.ggVisible=false;
			me.__1013.style.transition='none';
			me.__1013.style.visibility='hidden';
			me.__1013.ggVisible=false;
		}
		me.__1015.onmouseover=function (e) {
			me.elementMouseOver['_1015']=true;
			me._text_810.logicBlock_visible();
		}
		me.__1015.onmouseout=function (e) {
			me.elementMouseOver['_1015']=false;
			me._text_810.logicBlock_visible();
		}
		me.__1015.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_1015']) {
				me.elementMouseOver['_1015']=true;
				me._text_810.logicBlock_visible();
			}
		}
		me.__1015.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_1015'] == true))
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
		me.__1015.appendChild(me._text_810);
		me.__1012.appendChild(me.__1015);
		el=me.__1013=document.createElement('div');
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
		el=me.__1014=document.createElement('div');
		els=me.__1014__text=document.createElement('div');
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
		me.__1014.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\uba85<\/b>\n- \uc804\uae30\uccb4\uc678\ucda9\uaca9\ud30c\uc1c4\uc11d\uae30\n\n<b>*\uc0ac\uc6a9\ubaa9\uc801<\/b>\n- \uc804\uae30\uc218\ub825\ubc29\uc2dd(electrohydraulic)\uc73c\ub85c \ucda9\uaca9\ud30c\ub97c \ubc1c\uc0dd\uc2dc\ucf1c \uccb4\ub0b4\uc5d0 \uae30\uacc4\uc801\uc778 \uc790\uadf9\uc744 \uac00\ud568\uc73c\ub85c\uc368 \ud1b5\uc99d \uc644\ud654 \ubc0f \ubc1c\uae30\ubd80\uc804\uc758 \uc99d\uc0c1 \uc644\ud654 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \uae30\uad6c\n\n<b>*\uc804\uae30\uc815\uaca9<\/b>\n- \ub2e8\uc0c1 220V, 60Hz", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1014.ggUpdateText();
		el.appendChild(els);
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
		me.__1014.ggUpdatePosition=function (useTransition) {
		}
		me.__1013.appendChild(me.__1014);
		me.__1012.appendChild(me.__1013);
		me.__104.appendChild(me.__1012);
		el=me.__106=document.createElement('div');
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
		me.__106.logicBlock_visible = function() {
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
			if (me.__106.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__106.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__106.style.transition='';
				if (me.__106.ggCurrentLogicStateVisible == 0) {
					me.__106.style.visibility="hidden";
					me.__106.ggVisible=false;
				}
				else {
					me.__106.style.visibility=(Number(me.__106.style.opacity)>0||!me.__106.style.opacity)?'inherit':'hidden';
					me.__106.ggVisible=true;
				}
			}
		}
		me.__106.logicBlock_visible();
		me.__106.ggUpdatePosition=function (useTransition) {
		}
		el=me.__108=document.createElement('div');
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
		el=me.__1011=document.createElement('div');
		els=me.__1011__text=document.createElement('div');
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
		me.__1011.ggUpdateText=function() {
			var params = [];
			var hs = player._("IMPO 88", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1011.ggUpdateText();
		el.appendChild(els);
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
		me.__108.appendChild(me.__1011);
		el=me.__109=document.createElement('div');
		els=me.__109__text=document.createElement('div');
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
		me.__109.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\ud559\ubcd1\uc6d0\uc5d0\uc11c \uc784\uc0c1\uc2dc\ud5d8\uc744 \uac70\uccd0 \ubc1c\uae30\ubd80\uc804 \uc99d\uc0c1\uc644\ud654\uc758 \ud6a8\uacfc\ub97c \ud655\uc778\ud55c \uccb4\uc678\ucda9\uaca9\ud30c \uce58\ub8cc\uae30 \uc785\ub2c8\ub2e4", params);
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
		el=me.__1010=document.createElement('div');
		els=me.__1010__text=document.createElement('div');
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
		me.__1010.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud68c\uc74c\ubd80\uc5d0 \uc800\uac15\ub3c4\uc758 \uccb4\uc678\ucda9\uaca9\ud30c\ub97c \uc804\ub2ec\ud558\uc5ec \ud608\uad00\ub0b4\ud53c\uc131\uc7a5\uc778\uc790\uc758 \ubc1c\ud604 \ubc0f \ub0b4\ud53c\uc804\uad6c\uc138\ud3ec\uc758 \ubaa8\uc9d1\uc744 \uc99d\uac00\uc2dc\ucf1c \ud68c\uc74c\ubd80\uc758 \ubaa8\uc138\ud608\uad00 \uc2e0\uc0dd\uc744 \ucd09\uc9c4, \ud608\ub958\uc7a5\uc560\ub85c \uc778\ud55c \ubc1c\uae30\ubd80\uc804 \ud658\uc790\uc758 \uc99d\uc0c1\uc744 \uac1c\uc120\uc2dc\ud0a4\ub294 \uccb4\uc678\ucda9\uaca9\ud30c\uce58\ub8cc\uae30 \uc785\ub2c8\ub2e4. ", params);
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
		me.__1010.appendChild(me._text_310);
		me.__109.appendChild(me.__1010);
		me.__108.appendChild(me.__109);
		me.__106.appendChild(me.__108);
		el=me.__107=document.createElement('div');
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
		me.__107.appendChild(me._image_210);
		me.__106.appendChild(me.__107);
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
		me.__106.appendChild(me._text_210);
		me.__104.appendChild(me.__106);
		el=me.__105=document.createElement('div');
		els=me.__105__text=document.createElement('div');
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
		me.__105.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__105.ggUpdateText();
		el.appendChild(els);
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
		me.__104.appendChild(me.__105);
		me.__103.appendChild(me.__104);
		me.__102.appendChild(me.__103);
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
			me.__101.style.transition='none';
			me.__101.style.visibility='hidden';
			me.__101.ggVisible=false;
		}
		me._image_310.ggUpdatePosition=function (useTransition) {
		}
		me.__102.appendChild(me._image_310);
		me.__101.appendChild(me.__102);
		me.divSkin.appendChild(me.__101);
		el=me.__113=document.createElement('div');
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
		me.__113.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__113.ggUpdatePosition=function (useTransition) {
		}
		el=me.__114=document.createElement('div');
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
		me.__114.ggUpdatePosition=function (useTransition) {
		}
		el=me.__115=document.createElement('div');
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
		me.__115.ggUpdatePosition=function (useTransition) {
		}
		el=me.__116=document.createElement('div');
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
		el=me.__1112=document.createElement('div');
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
		me.__1112.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 461))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1112.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1112.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1112.style.transition='';
				if (me.__1112.ggCurrentLogicStateVisible == 0) {
					me.__1112.style.visibility="hidden";
					me.__1112.ggVisible=false;
				}
				else {
					me.__1112.style.visibility=(Number(me.__1112.style.opacity)>0||!me.__1112.style.opacity)?'inherit':'hidden';
					me.__1112.ggVisible=true;
				}
			}
		}
		me.__1112.logicBlock_visible();
		me.__1112.ggUpdatePosition=function (useTransition) {
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
		me.__1112.appendChild(me._image_411);
		el=me.__1115=document.createElement('div');
		els=me.__1115__text=document.createElement('div');
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
		me.__1115.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1115.ggUpdateText();
		el.appendChild(els);
		me.__1115.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1115.ggUpdatePosition=function (useTransition) {
		}
		me.__1112.appendChild(me.__1115);
		el=me.__1113=document.createElement('div');
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
		me.__1113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1113.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1114=document.createElement('div');
		els=me.__1114__text=document.createElement('div');
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
		me.__1114.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\ud488\ubaa9\uba85<\/b>\n- \uc804\uae30\uccb4\uc678\ucda9\uaca9\ud30c\uc1c4\uc11d\uae30\n\n<b>*\uc0ac\uc6a9\ubaa9\uc801<\/b>\n- \uc804\uae30\uc218\ub825\ubc29\uc2dd(electrohydraulic)\uc73c\ub85c \ucda9\uaca9\ud30c\ub97c \ubc1c\uc0dd\uc2dc\ucf1c \uccb4\ub0b4\uc5d0 \uae30\uacc4\uc801\uc778 \uc790\uadf9\uc744 \uac00\ud568\uc73c\ub85c\uc368 \ud1b5\uc99d \uc644\ud654 \ubc0f \ubc1c\uae30\ubd80\uc804\uc758 \uc99d\uc0c1 \uc644\ud654 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \uae30\uad6c\n\n<b>*\uc804\uae30\uc815\uaca9<\/b>\n- \ub2e8\uc0c1 220V, 60Hz", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1114.ggUpdateText();
		el.appendChild(els);
		me.__1114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1114.ggUpdatePosition=function (useTransition) {
		}
		me.__1113.appendChild(me.__1114);
		me.__1112.appendChild(me.__1113);
		me.__116.appendChild(me.__1112);
		el=me.__118=document.createElement('div');
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
		me.__118.logicBlock_visible = function() {
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
			if (me.__118.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__118.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__118.style.transition='';
				if (me.__118.ggCurrentLogicStateVisible == 0) {
					me.__118.style.visibility="hidden";
					me.__118.ggVisible=false;
				}
				else {
					me.__118.style.visibility=(Number(me.__118.style.opacity)>0||!me.__118.style.opacity)?'inherit':'hidden';
					me.__118.ggVisible=true;
				}
			}
		}
		me.__118.logicBlock_visible();
		me.__118.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1110=document.createElement('div');
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
		me.__1111.ggUpdateText=function() {
			var params = [];
			var hs = player._("MT 3000", params);
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
		me.__118.appendChild(me.__1110);
		el=me.__119=document.createElement('div');
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
		me.__119.appendChild(me._image_211);
		me.__118.appendChild(me.__119);
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
		me.__118.appendChild(me._text_211);
		me.__116.appendChild(me.__118);
		el=me.__117=document.createElement('div');
		els=me.__117__text=document.createElement('div');
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
		me.__117.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__117.ggUpdateText();
		el.appendChild(els);
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
		me.__117.logicBlock_visible = function() {
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
			if (me.__117.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__117.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__117.style.transition='';
				if (me.__117.ggCurrentLogicStateVisible == 0) {
					me.__117.style.visibility="hidden";
					me.__117.ggVisible=false;
				}
				else {
					me.__117.style.visibility=(Number(me.__117.style.opacity)>0||!me.__117.style.opacity)?'inherit':'hidden';
					me.__117.ggVisible=true;
				}
			}
		}
		me.__117.logicBlock_visible();
		me.__117.ggUpdatePosition=function (useTransition) {
		}
		me.__116.appendChild(me.__117);
		me.__115.appendChild(me.__116);
		me.__114.appendChild(me.__115);
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
			me.__113.style.transition='none';
			me.__113.style.visibility='hidden';
			me.__113.ggVisible=false;
		}
		me._image_311.ggUpdatePosition=function (useTransition) {
		}
		me.__114.appendChild(me._image_311);
		me.__113.appendChild(me.__114);
		me.divSkin.appendChild(me.__113);
		el=me.__121=document.createElement('div');
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
		me.__121.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__121.ggUpdatePosition=function (useTransition) {
		}
		el=me.__122=document.createElement('div');
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
		el=me.__124=document.createElement('div');
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
		me.__124.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1212=document.createElement('div');
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
		me.__1212.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width >= 461))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1212.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1212.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1212.style.transition='';
				if (me.__1212.ggCurrentLogicStateVisible == 0) {
					me.__1212.style.visibility="hidden";
					me.__1212.ggVisible=false;
				}
				else {
					me.__1212.style.visibility=(Number(me.__1212.style.opacity)>0||!me.__1212.style.opacity)?'inherit':'hidden';
					me.__1212.ggVisible=true;
				}
			}
		}
		me.__1212.logicBlock_visible();
		me.__1212.ggUpdatePosition=function (useTransition) {
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
		me.__1212.appendChild(me._image_412);
		el=me.__1217=document.createElement('div');
		els=me.__1217__text=document.createElement('div');
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
		me.__1217.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1217.ggUpdateText();
		el.appendChild(els);
		me.__1217.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1217.ggUpdatePosition=function (useTransition) {
		}
		me.__1212.appendChild(me.__1217);
		el=me.__1216=document.createElement('div');
		els=me.__1216__img=document.createElement('img');
		els.className='ggskin ggskin__1216';
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
		me.__1216.onclick=function (e) {
			me.__1213.style.transition='none';
			me.__1213.style.visibility=(Number(me.__1213.style.opacity)>0||!me.__1213.style.opacity)?'inherit':'hidden';
			me.__1213.ggVisible=true;
			me.__1216.style.transition='none';
			me.__1216.style.visibility='hidden';
			me.__1216.ggVisible=false;
			me.__1215.style.transition='none';
			me.__1215.style.visibility=(Number(me.__1215.style.opacity)>0||!me.__1215.style.opacity)?'inherit':'hidden';
			me.__1215.ggVisible=true;
		}
		me.__1216.onmouseover=function (e) {
			me.elementMouseOver['_1216']=true;
			me._text_712.logicBlock_visible();
		}
		me.__1216.onmouseout=function (e) {
			me.elementMouseOver['_1216']=false;
			me._text_712.logicBlock_visible();
		}
		me.__1216.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_1216']) {
				me.elementMouseOver['_1216']=true;
				me._text_712.logicBlock_visible();
			}
		}
		me.__1216.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_1216'] == true))
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
		me.__1216.appendChild(me._text_712);
		me.__1212.appendChild(me.__1216);
		el=me.__1215=document.createElement('div');
		els=me.__1215__img=document.createElement('img');
		els.className='ggskin ggskin__1215';
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
			me.__1216.style.transition='none';
			me.__1216.style.visibility=(Number(me.__1216.style.opacity)>0||!me.__1216.style.opacity)?'inherit':'hidden';
			me.__1216.ggVisible=true;
			me.__1215.style.transition='none';
			me.__1215.style.visibility='hidden';
			me.__1215.ggVisible=false;
			me.__1213.style.transition='none';
			me.__1213.style.visibility='hidden';
			me.__1213.ggVisible=false;
		}
		me.__1215.onmouseover=function (e) {
			me.elementMouseOver['_1215']=true;
			me._text_812.logicBlock_visible();
		}
		me.__1215.onmouseout=function (e) {
			me.elementMouseOver['_1215']=false;
			me._text_812.logicBlock_visible();
		}
		me.__1215.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_1215']) {
				me.elementMouseOver['_1215']=true;
				me._text_812.logicBlock_visible();
			}
		}
		me.__1215.ggUpdatePosition=function (useTransition) {
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
				((me.elementMouseOver['_1215'] == true))
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
		me.__1215.appendChild(me._text_812);
		me.__1212.appendChild(me.__1215);
		el=me.__1213=document.createElement('div');
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
		el=me.__1214=document.createElement('div');
		els=me.__1214__text=document.createElement('div');
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
		me.__1214.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>*\uc545\uc138\uc11c\ub9ac<\/b>\n- Sterigen, Air circulator, Scrubber, Chemical indicator, Biological indicator, H2O2 Gas Detector\n\n<b>*\ud06c\uae30<\/b>\n- 499.6 X 273.8 X 555.71 (mm)\n\n<b>*\ubb34\uac8c<\/b>\n- 25kg\n\n<b>*\uc804\uae30\uc815\uaca9<\/b>\n- 120V~, 60Hz (UL)\n- AC 220~230v, 50\/60Hz(CE)\n\n<b>*\uc0b4\uade0\uc81c \uc6a9\ub7c9<\/b>\n- 1L", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1214.ggUpdateText();
		el.appendChild(els);
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
		me.__1214.ggUpdatePosition=function (useTransition) {
		}
		me.__1213.appendChild(me.__1214);
		me.__1212.appendChild(me.__1213);
		me.__124.appendChild(me.__1212);
		el=me.__126=document.createElement('div');
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
		me.__126.logicBlock_visible = function() {
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
			if (me.__126.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__126.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__126.style.transition='';
				if (me.__126.ggCurrentLogicStateVisible == 0) {
					me.__126.style.visibility="hidden";
					me.__126.ggVisible=false;
				}
				else {
					me.__126.style.visibility=(Number(me.__126.style.opacity)>0||!me.__126.style.opacity)?'inherit':'hidden';
					me.__126.ggVisible=true;
				}
			}
		}
		me.__126.logicBlock_visible();
		me.__126.ggUpdatePosition=function (useTransition) {
		}
		el=me.__128=document.createElement('div');
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
		el=me.__1211=document.createElement('div');
		els=me.__1211__text=document.createElement('div');
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
		me.__1211.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN IVH ER", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1211.ggUpdateText();
		el.appendChild(els);
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
		me.__128.appendChild(me.__1211);
		el=me.__129=document.createElement('div');
		els=me.__129__text=document.createElement('div');
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
		me.__129.ggUpdateText=function() {
			var params = [];
			var hs = player._("HUEN IVH ER\uc740 \uacf5\uac04\uacfc \ud45c\uba74 \ub0b4 \ube44\ubcd1\uc6d0\uc131\/\ubcd1\uc6d0\uc131 \uc138\uade0\uc744 \ubbf8\uc0dd\ubb3c\uc744 \uc0ac\uba78\uc2dc\ud0a4\ub294 \uacf5\uac04\uba78\uade0\uae30\uc785\ub2c8\ub2e4. ", params);
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
		el=me.__1210=document.createElement('div');
		els=me.__1210__text=document.createElement('div');
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
		me.__1210.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04 \ubc0f \ud45c\uba74 \ub0b4 \ubc14\uc774\ub7ec\uc2a4\ub97c \ucd5c\ub300 99.9999%(6 log reduction) \uc0ac\uba78\uc2dc\ud0a4\uba70, \uc561\uccb4\ud575\ud654\ubd84\uc0ac\uae30\uc220\uacfc \uba78\uade0\uc81c\uc758 \uc99d\ubc1c \ud6a8\uc728\uc744 \uc81c\uace0\ud55c \"\uc5d0\uc5b4\ucfe0\uc158 \uae30\uc220\"\uc744 \uacb0\ud569\uc2dc\ucf1c \ub3c5\uc790\uc801\uc778 \uae30\uc220\uc744 \ud655\ub9bd\ud588\uc2b5\ub2c8\ub2e4. ", params);
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
		me.__1210.appendChild(me._text_312);
		me.__129.appendChild(me.__1210);
		me.__128.appendChild(me.__129);
		me.__126.appendChild(me.__128);
		el=me.__127=document.createElement('div');
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
		me.__127.appendChild(me._image_212);
		me.__126.appendChild(me.__127);
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
		me.__126.appendChild(me._text_212);
		me.__124.appendChild(me.__126);
		el=me.__125=document.createElement('div');
		els=me.__125__text=document.createElement('div');
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
		me.__125.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__125.ggUpdateText();
		el.appendChild(els);
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
		me.__124.appendChild(me.__125);
		me.__123.appendChild(me.__124);
		me.__122.appendChild(me.__123);
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
			me.__121.style.transition='none';
			me.__121.style.visibility='hidden';
			me.__121.ggVisible=false;
		}
		me._image_312.ggUpdatePosition=function (useTransition) {
		}
		me.__122.appendChild(me._image_312);
		me.__121.appendChild(me.__122);
		me.divSkin.appendChild(me.__121);
		el=me.__8=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\uc2a4\ud0a8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 590px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15%;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__8.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1500))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__8.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__8.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__8.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__8.ggCurrentLogicStatePosition == 0) {
					me.__8.style.right='3px';
					me.__8.style.top='23%';
				}
				else {
					me.__8.style.right='15px';
					me.__8.style.top='15%';
				}
			}
		}
		me.__8.logicBlock_position();
		me.__8.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1500))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__8.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__8.ggCurrentLogicStateSize = newLogicStateSize;
				me.__8.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__8.ggCurrentLogicStateSize == 0) {
					me.__8.style.width='68px';
					me.__8.style.height='465px';
					skin.updateSize(me.__8);
				}
				else {
					me.__8.style.width='85px';
					me.__8.style.height='590px';
					skin.updateSize(me.__8);
				}
			}
		}
		me.__8.logicBlock_size();
		me.__8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__8.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__8.ggCurrentLogicStateVisible == 0) {
					me.__8.style.visibility="hidden";
					me.__8.ggVisible=false;
				}
				else if (me.__8.ggCurrentLogicStateVisible == 1) {
					me.__8.style.visibility="hidden";
					me.__8.ggVisible=false;
				}
				else {
					me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
					me.__8.ggVisible=true;
				}
			}
		}
		me.__8.logicBlock_visible();
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\uc2a4\ud0a8\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__29=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubcf4\uae30";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me.__50=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__50.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__50.ggCurrentLogicStateSize = newLogicStateSize;
				me.__50.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__50.ggCurrentLogicStateSize == 0) {
					me.__50.style.width='48px';
					me.__50.style.height='48px';
					me.__50.style.left = 'calc(50% - (48px / 2))';
					me.__50.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__50);
				}
				else {
					me.__50.style.width='60px';
					me.__50.style.height='60px';
					me.__50.style.left = 'calc(50% - (60px / 2))';
					me.__50.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__50);
				}
			}
		}
		me.__50.logicBlock_size();
		me.__50.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__50.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__50.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__50.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__50.ggCurrentLogicStateBackgroundColor == 0) {
					me.__50.style.backgroundColor="rgba(2,2,2,1)";
				}
				else {
					me.__50.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__50.logicBlock_backgroundcolor();
		me.__50.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_4', !player.getVariableValue('vis_buttonbg_4'));
		}
		me.__50.onmouseover=function (e) {
			me.elementMouseOver['_50']=true;
			me.__32.logicBlock_visible();
		}
		me.__50.onmouseout=function (e) {
			me.elementMouseOver['_50']=false;
			me.__32.logicBlock_visible();
		}
		me.__50.ggCurrentLogicStateSize = -1;
		me.__50.ggCurrentLogicStateBackgroundColor = -1;
		me.__50.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_50']) {
				me.elementMouseOver['_50']=true;
				me.__32.logicBlock_visible();
			}
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		els=me.__32__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='text-align:center;';
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
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__32.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__32.ggUpdateText();
		el.appendChild(els);
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
		me.__32.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_50'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__32.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__32.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__32.style.transition='';
				if (me.__32.ggCurrentLogicStateVisible == 0) {
					me.__32.style.visibility=(Number(me.__32.style.opacity)>0||!me.__32.style.opacity)?'inherit':'hidden';
					me.__32.ggVisible=true;
				}
				else {
					me.__32.style.visibility="hidden";
					me.__32.ggVisible=false;
				}
			}
		}
		me.__32.logicBlock_visible();
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__32);
		el=me.__31=document.createElement('div');
		els=me.__31__img=document.createElement('img');
		els.className='ggskin ggskin__31';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA8SAAAPEgEhm/IzAAAE/klEQVR4nO3aW4hVVRzH8c+MVpZZMUEEXcC8VBKUFoZ2sbCop6gIK8LoQkQ9GV1okCQqEqOnCKIg6IZkNyiF6PJgQXShMNJKgyyie0llmZnm6WFbnKY9M2dmzj77zJ//F/7MsNh77d9a37332ouZnkajIYlLb90BkmpJwcFJwcFJwcFJwcFJwcFJwcFJwcFJwcHp2fNzGs7H71iNL+sKlLSfSXgGf2IrVuEazKgzVNI+VqExSL2FpZhbW7r6ORlLsKiFY2fjRlyKAyrMNCJ2Glxwc32OB3AeDqwjaIc4QDHG+/GZ/87BI0Oct3jAsb/gWVyPWdXFHZ7tWhPcXL/ieVyN6Z2P3Ham4SrFUrXV0GM/d5A+Ph3mvD'+
			'dxO+ZXNIZSehQDmjLGft7Dq/gI67B+jP1VzXGK1+nROAcnjeDcZbhzQNsk/ID9W+zjC7yEDdiomLvdI8gwIoa7Y0dTm7ACp2FiVcFHwEScirsUN+FYxnZLSf+T8dMY+vwKT+BKHNHGcaMawc31LZ7CJTi43eGHoA8X4Ul804Zx/FM3lVxrP2xp4zVeVHyszWnHRFQtuLm24xX0q+bD4xjcjJexraIxdEJwc23EcizEvqOZlE4KHljv416chQmjyN6LBbhHsfZ3InOnBTfXj4pt7cU4pNVJqlNwc32teJ32G/5OvRUrFWtXp3PWKbi5dmCt4ua+UrETKKVbBDfXmsHCKsTWma1bBJfV27gN85rDdaPgBmaWTOTULsjVzYKbax1md/Nfk44saWv7FiIwJ+Dpbha8s6RtV8dTjG8O72bBjRbbksHZ1c2Ck7GzOwUHJwUH'+
			'JwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHpxcT6g6RVEcv9qo7RFIdvdhQd4hxxt4lbT269EHpxWJ8U3eQccS2krY/sKPTQVqhFx9iKi7Hc/i11kTdTQPPlLT/hdc6nGXUHIh5uBSP4zvFwDpdp5dkm1dTlu/xGI4ZYt760I93aspYVluHyPsve+MM3IEPOhiubsEf426ciX1amagmZuAWvKR4I3a14I'+
			'EcjyVYjZ0Vhuu04L/wIm7A7NFMzCAchAuxEl9VmL9tgps5FJfhUXzZ5nCdEPytYhlajMPGOhktMAGn4E6sb/NYKhHcTI/idbYc77Yh3IKSa8xvQ7/rsAIL1b+1mYXrsQbbdbnggRylmMR+rB1FuLNL+lwwin7ewNI9Waa3e5BtpA9zcYViN7NFlwseyExci6fwQwvhZpT0MbWF835WbGWuw7FVDaYD7ItzcR82G53g2ra8k3ARHsSmkmBPD3HuwyXHf4KHcAmmVJa6XubgJryudcF/9NQS9f+ciAsUT9wG3K4IOBjLFF/zm/AC3qo4X7cxTbFcLVQ85X2DHPdbxxIllTFZ8XDcr3g4mpeqRd3yBCdjZ7JiC3bynt8346GeRmOoN2Ey3sn/6AhOCg5OCg5OCg5OCg5OCg5OCg5OCg5OCg7O30osxceEvq98AAAAAElF'+
			'TkSuQmCC';
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
		el.ggId="\ud3c9\uba74\ub3c4\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
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
		me.__31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__31.style.transition='';
				if (me.__31.ggCurrentLogicStateVisible == 0) {
					me.__31.style.visibility="hidden";
					me.__31.ggVisible=false;
				}
				else {
					me.__31.style.visibility=(Number(me.__31.style.opacity)>0||!me.__31.style.opacity)?'inherit':'hidden';
					me.__31.ggVisible=true;
				}
			}
		}
		me.__31.logicBlock_visible();
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__31);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA8SAAAPEgEhm/IzAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODoyODoz'+
			'MSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MDcrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MDcrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZiNDg1M2I3LTc0NTYtOTg0Mi05OGM4LTM0OTFkZDZkZmY4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmYjQ4NTNiNy03NDU2LTk4NDItOThjOC0zNDkxZGQ2ZGZmODYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYjQ4NTNiNy03NDU2LTk4NDItOThjOC0zNDkxZGQ2ZG'+
			'ZmODYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZiNDg1M2I3LTc0NTYtOTg0Mi05OGM4LTM0OTFkZDZkZmY4NiIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODoyODozMSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj68+/gAAAWTSURBVHic7drbr1TlGcfxz2yQ'+
			'7Ko1hnjhOUUs9VwVgwdiQBtQ0RJsPaQmmqaJ/AdNGi+MaW+98NrECw8x8RBsbVWKiEoqKk1F4xERE7Vq1HgBaoWiLC/eIYzjnr1nmDUHHp9vMpk976z3Xb+1vut95l2zp1FVlSQuE6MOkAyWFBycFBycFBycFBycFBycFBycFBycFByc2c3n+ViF/+Hv+O+oAiX10qiqahL3YSV24QmsxzPYNrpoSR00qqp6ANd1eP9FZUY/ic1DSzVenI8L8REenGHbc3Bpc9vHsHOw0WamUVXVHvtL9XS8p8zuJ/Asdgwy2Ag5AkuxHFfiZy3v3Y3fd+h3I+5peb1TqYRPKdXwjVpTdkmjqqqvMdljvy+xAY8qst+pO9iQmY8lWKGI/ek0216BtVO0b8dJ0/R7Af/EOmw6sJi906iqaqfpD6gb/qNcrW9gC17tN9iAOUMpp7/AZT'+
			'ivh7634i9tbZP4DId3Ocb7iuzX8JZy7vb2kKFruinN3bCw+djH2/gr/oHn8U1N+zlQZuMCXI7f4NQ+xto9RdssvR3jibi55fVHeFop5+vxwQGna6OuGTwdn2Aj1iiLtc8HuK9W5ioLnmuU8nt0TeP+Ebe3tR2qSJlb0z7WKqKfxkv9DDQMwa3swr+Uz++/qX/hcQp+jWVYrJz4uhmG4Fa24hFF+CZ83UvnYQtu5xUl+Frlav22x/4TuFhZ7S7D2XWG68CwBbfyuVLG1yjn69OZOoxacCsfK6X8Fdxh+iv1TzhLKb3HDjzZ9xml4Fb+r6xvNuNN5dxtb9+orkVWHRyD65uPxbiqw3b343fDCjXGzFEu8CUtbZuVhe16Rf7Y/rPhSiyYon2elDsdi/Bn5bN6C84ZV8GUW4l2Thh6ioOXs/HQOAveM0XbqO+nDzaOH2fB'+
			'U/0iP3+l3xvfjLPgpH/2puDgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgTGDWqEMkg2MCh4w6RDI4JvDaqEMcZMyZoq1hTCfKBG7Ex6MOchDx1RRtu7B72EG6YQKvYx5uwhp8MdJE402Fh6do/xbPDjlLV+xbRe/GvfgtTsBFuAH34dPRRBsrPlPOz2n4sMM2q3EL/j2sUN3QqKpqpm3mKMIvxS'+
			'qcOeBM+1iCjW1tF2LTkPb/Fh7Bk8199lKCf46r8Svl3B1ee7ru+KIbwe38Epco4S/H7LpTNRm24L1Y13w8gy01jXukMjmuUY7p2JrG7YYDEtzK0Yro5c3n4+pI1WQYgj9RZug6bNC5/NbFLFygTIxVOGPA++tbcCsNLFVkL8PCPsdb6ocLl4vwXJ/jvmz/TN2IPX2O1w+nKce5QpkgkzWPX6vgdk5SVueLcJkyI3thuTK7WlmilM9e2ITH8QLewzs99h8Wc3GyIn2lcqxz+xxzoILbWWD/Z/clOKqL7be1tc3DuzP024H1eEq5GN7sNeiY8BNF8gpcpRx7r3w5TMGtTCqhlyklakHb+w/j2g5978If2tq2KTI34DEx7+XPVRZrK3Fxl312j0pwOwuV24pTla9Ob1O+VOjErcpqfiseVcrvj4n5yuzedyfTqZSPbAYn'+
			'9XGY/XcxS3F6s30HVqfgOByGxTi/+fe7uDMFByd/0RGcFBycFBycFBycFBycFBycFBycFBycFByc7wDHNR/ErjqpsQAAAABJRU5ErkJggg==';
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
		el.ggId="Image 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_6.style.transition='';
				if (me._image_6.ggCurrentLogicStateVisible == 0) {
					me._image_6.style.visibility=(Number(me._image_6.style.opacity)>0||!me._image_6.style.opacity)?'inherit':'hidden';
					me._image_6.ggVisible=true;
				}
				else {
					me._image_6.style.visibility="hidden";
					me._image_6.ggVisible=false;
				}
			}
		}
		me._image_6.logicBlock_visible();
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me._image_6);
		me.__29.appendChild(me.__50);
		me.__9.appendChild(me.__29);
		el=me.__26=document.createElement('div');
		el.ggId="\uc601\uc0c1\ubcf4\uae30";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
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
		me.__26.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__26.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__26.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__26.style.transition='left 0s, top 0s';
				if (me.__26.ggCurrentLogicStatePosition == 0) {
					me.__26.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__26.style.top='80px';
				}
				else {
					me.__26.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__26.style.top='100px';
				}
			}
		}
		me.__26.logicBlock_position();
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me.__110=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__110.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__110.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__110.ggCurrentLogicStateSize = newLogicStateSize;
				me.__110.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__110.ggCurrentLogicStateSize == 0) {
					me.__110.style.width='48px';
					me.__110.style.height='48px';
					me.__110.style.left = 'calc(50% - (48px / 2))';
					me.__110.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__110);
				}
				else {
					me.__110.style.width='60px';
					me.__110.style.height='60px';
					me.__110.style.left = 'calc(50% - (60px / 2))';
					me.__110.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__110);
				}
			}
		}
		me.__110.logicBlock_size();
		me.__110.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__110.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__110.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__110.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__110.ggCurrentLogicStateBackgroundColor == 0) {
					me.__110.style.backgroundColor="rgba(2,2,2,1)";
				}
				else {
					me.__110.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__110.logicBlock_backgroundcolor();
		me.__110.onclick=function (e) {
			player.setVariableValue('vis_buttonbg', !player.getVariableValue('vis_buttonbg'));
		}
		me.__110.onmouseover=function (e) {
			me.elementMouseOver['_110']=true;
			me.__28.logicBlock_visible();
		}
		me.__110.onmouseout=function (e) {
			me.elementMouseOver['_110']=false;
			me.__28.logicBlock_visible();
		}
		me.__110.ggCurrentLogicStateSize = -1;
		me.__110.ggCurrentLogicStateBackgroundColor = -1;
		me.__110.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_110']) {
				me.elementMouseOver['_110']=true;
				me.__28.logicBlock_visible();
			}
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		els=me.__28__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc601\uc0c1\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__28.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc601\uc0c1\ubcf4\uae30", params);
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
		me.__28.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_110'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__28.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__28.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__28.style.transition='';
				if (me.__28.ggCurrentLogicStateVisible == 0) {
					me.__28.style.visibility=(Number(me.__28.style.opacity)>0||!me.__28.style.opacity)?'inherit':'hidden';
					me.__28.ggVisible=true;
				}
				else {
					me.__28.style.visibility="hidden";
					me.__28.ggVisible=false;
				}
			}
		}
		me.__28.logicBlock_visible();
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me.__28);
		el=me.__27=document.createElement('div');
		els=me.__27__img=document.createElement('img');
		els.className='ggskin ggskin__27';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABLpJREFUeF7tnWt2nDAMhcnK2q6szcqarqw94kRTD7FetsfIcOdPTwMYcT9LFn7xtuGXSoG3VNbAmA1AklUCAAGQZAokMwceAiDJFEhmDjwEQJIpkMwceAiAJFMgmTnwkJsA+X54zuP/+fC3Rj2k8qTiPpz3+WOcVyvHW7bLhFYP+fVZOgsaFchl3IInlXDet20Lw4oAIQg/FxTpbJMJCsGhnwnIAwQgxiH9YUGxgADGOBhcEnkJgan+NCC/t23L3DaY7v/5xBmfQYQiAWmFcRSplrVoQnpFHlFvLVC141pWaJV3tLkKpQbEE6bKRmqmiCNAvLoMBkMJkAWJdOSMdbfrCIQKIO+Qfl8KePXTLV4+6WmBedL0CEQLVYDRXjusqP'+
			'PgUALRvAMw2mHwlRqUh74lEMk71DSt385blSBBqQL5K0hjvszcStK+h9W8ZHcO9hApXME7+gDUrpYq/u4lDEQiByDjgahhi4FI7QfC1XggajRiIJIbWX1d4829R4k1vfdoRIKj/ZhfCUQHAJD5MOiOUhPxpgHBy+DrYEkN+x6yzJeV19l125JFzTUgGTKs0nAeCr1C7/KSQLSOzgyVpce9pUTqnTwk4zuINQxAYqzsMcsBsbqry9q5IpjlgLQMIa8ERnz3yxqyWoCw16yQrqtAMnab9ABZBUy1+4Q8ZCUgVPtp5oc1eYChZA5jlwDC6a5n8kD2hv9SQFjslcFcEohnAkHtBS7DwNulgbDo0WTgzIzsFkAITDSM0TVndMXcBkhr+zLbW0JAzo6xI/vXIh4zc8i6+rohvYdcCUik4Z8ZugDEsSQPQIRBhZEhi6f7e9ZH'+
			'pgVSzmrsGYhpvXYUkEg3foZGfZ9KulJflrcGR0BQpZkNg+4ZakNW9ZAVQHDUuDSQFhAkzNNystb42njdJYFEQVA6TwtRzwRxSQ8hQSPjIme1E5rzXMJDuIZ7UtjsI4ehrpOsjXokXJ+ROUXsuw2Q7CC4R7q2/PxjtfcQrQauAKLsiRaBiFPjI/43+NxI9sS7SmTInLwyNM3LmtkVfXwQz1TSjJlTL5C0c3v5pU3KplYKTzVI6lRScfGItdmWtzp0nMdxlh5gxdAkPfqyQDpYpr4UQJLhwZI2AEmmQDJzxAE4LIs+h5QKhEzKOGp4jlRz7gogc3R23UV76d03DqDfqEkFLotufpJr8xlsHjCvlqg791n7Za3eRTFPZv+d1GhUdiCiYfeL2nqm1n7sU5xKIAhbrTL7rzM3GvUAWbmb2y/V68/UxngeEwCPYx5S2AKUPm'+
			'BaqHpaaXAEYo3U8VdjrrAjT5/E/qstTZ+mx9ZGBa0CyBSejsNgAOg/IPKGckN+Dd2XdTjSMK0Wuqy6IcE5frrCgmgdt+zwHNc2IKgdO36uwruBQc0W9+cq6GLvmLbnoXFOXYHqTH5rIkN0mTHEtxVQt/uwgFDxnjbFNgNnuDJVDxCWMrKaFfI/K+DugooAKW/BjRn9WzZ0PY3c6hDLJIQTGPpbKDlpBWKJVwNjwfJ+htUqh9Nyy0bpuOdDZiGRI4a8CkjEBpxbKAAgyaoDgABIMgWSmQMPAZBkCiQzBx4CIMkUSGYOPARAkimQzBx4CIAkUyCZOf8A56lgm63gz7kAAAAASUVORK5CYII=';
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
		el.ggId="\uc601\uc0c1\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
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
		me.__27.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__27.style.transition='';
				if (me.__27.ggCurrentLogicStateVisible == 0) {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
				else {
					me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
					me.__27.ggVisible=true;
				}
			}
		}
		me.__27.logicBlock_visible();
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me.__27);
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABQ1JREFUeF7tnVt23CAMhu2VtVlZm5U1WZl7RGAO9qALNsY/tvLUnvEwQp91AQTMk/9BaWCGksaFmRwI2EvgQBwImAbAxHELcSBgGgATxy3EgYBpAEwctxAHAqYBMHHcQp4AZFmW35t+bv+fPv61Ux9ce1xzX8bf+Vaee2tnnmdr2yYRdlnIsix/Y+tJobUKMgk34EM5nM89sMxAIoQ/AyrpapEJ0icJYQGkAnEQTXl+aFBEIA6jKYzU2Nc8zx9cyyyQZVn+TdOEHBuswRSxDyyUIpADMLZKKmUtrCI1c275vhYywW3zJZBSVlgLvgjlDYjRTYUgNU0TNWp9U1vqE7atDDQlQBokysRSxhr6tAISGyNXxf29NQCrGQDBoj41MC'+
			'udboFIccNh7ISseZ15nl8cXv9QrMNh7ISRvqZAeek3B8JZh5imHZTzUV8XoBSBLIx21MHMo7R6oLOSlSS3FSxEcFduHQcAlL66LAv34gcrSUAo9SrNUzmQ9kA4Xa+AcPHD3VV7IDQ2KQ0twsufLKRoRnk61liuRzfHuK0fIB4/+r8bXBwhA3Ag/XlQElUMERoQHwyeBEtIf4PLEqP+STI9ullR5yKti2dyN7KFpdA7zC4PCURZkxk6HRcSqU9yWXBjEMMyQFiLGdViRgTCxbVS7BkOzIhA9qznDwNGHPuBuqw9QJL1wKfrGhC4aZMDRRa5S4MGw06fSMP4qwYLAhAqrqDKD614IIkO68buAiSku8bigfx9ggNzKyDZOjVZilbVAQnmlkCMBQTFVFkq5+zhqm8NJANTm51dFvgfASSrD6hxY/S17lMxjwFyIL50tZZa'+
			'IJcWN7QcrNZkZD2XrNnhhrS+2yO4MaUyzSc8tXLOKEc31+VA+IW4/J1wIGdbSLZB1bI/EhYIbVBU9x+e5dJaxRCjm7pkUrLWZQ0NpBIEAemaYcX0vDypO9jkouhSRgCRpeX3BbIHBClmu53sLBfMxMn7AdkBgmZ9v68EcUsLiSBq1kUuiROSxd0lqIc3nNk6wfW/e8C2uL7aqRPULMvS10vS2BrBhCzri+qy7ramDmkRObCnFDnAg9jMRJc37Uil8bVm2Or5yuwpHX20OhGhlSxntKNZCLtX4QxhLG0aS0nhMidL32L84La1Ydb2RqGlctJh3BMzKBSBcB3vNvPJvVnRndLH1IHhXJPQrzGBWF3AaM9pxdawFjKaoq3y+pY2q6Y6PedAOina+jPiApzvU7eqsd1zIhBhXuXS+ax23cdryYEAMZEGveHggGghzeuggH'+
			'QAJYoWIrTjmYYeEUORiMII7mp1GpCf5tCJnlbilJ+5CLcu0klH3X5GmTQNU1U5ELeSk9Fo7op+3gJk2Gnuk/Vb1byyxvOayN0epMwd0OhQqtS/flhxVautH1sg2pEWNAXu571XwDGsfq6WOfYexp/KccJB/Hc4MqlCx+Kj0RrSPnqt4v5tYxR3XYXkujTZudsStldXiLcq9ICsXFlhua7CeoBBSWe26yriyJ1b0dJg+Od2DRRXZLUrj2q3GdvFee6T4qkS6qYcQ1B6rmrre65ORalA0m/W7Gatl/P231BBJA2YgeQqy4IhxZr8XqYjQW50KnmSkhKY6iHCLiCa5pjsRYNlvYZVa4fEO3IvlnqR2ZkZ4ClANGD+Oa8BBwL2djgQBwKmATBx3EIcCJgGwMRxC3EgYBoAE8ctxIGAaQBMHLcQBwKmATBx/gNCBJRB0iAR'+
			'hwAAAABJRU5ErkJggg==';
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
		el.ggId="Image 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_8.style.transition='';
				if (me._image_8.ggCurrentLogicStateVisible == 0) {
					me._image_8.style.visibility=(Number(me._image_8.style.opacity)>0||!me._image_8.style.opacity)?'inherit':'hidden';
					me._image_8.ggVisible=true;
				}
				else {
					me._image_8.style.visibility="hidden";
					me._image_8.ggVisible=false;
				}
			}
		}
		me._image_8.logicBlock_visible();
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me._image_8);
		me.__26.appendChild(me.__110);
		me.__9.appendChild(me.__26);
		el=me.__23=document.createElement('div');
		el.ggId="\uac00\uad6c\uc628\uc624\ud504";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 180px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
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
		me.__23.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__23.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__23.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__23.style.transition='left 0s, top 0s';
				if (me.__23.ggCurrentLogicStatePosition == 0) {
					me.__23.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__23.style.top='140px';
				}
				else {
					me.__23.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__23.style.top='180px';
				}
			}
		}
		me.__23.logicBlock_position();
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me.__onoff_=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \ud604\uad00";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__onoff_.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_.ggCurrentLogicStateSize == 0) {
					me.__onoff_.style.width='48px';
					me.__onoff_.style.height='48px';
					me.__onoff_.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_);
				}
				else {
					me.__onoff_.style.width='60px';
					me.__onoff_.style.height='60px';
					me.__onoff_.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_);
				}
			}
		}
		me.__onoff_.logicBlock_size();
		me.__onoff_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_.ggCurrentLogicStateVisible == 0) {
					me.__onoff_.style.visibility="hidden";
					me.__onoff_.ggVisible=false;
				}
				else if (me.__onoff_.ggCurrentLogicStateVisible == 1) {
					me.__onoff_.style.visibility="hidden";
					me.__onoff_.ggVisible=false;
				}
				else {
					me.__onoff_.style.visibility=(Number(me.__onoff_.style.opacity)>0||!me.__onoff_.style.opacity)?'inherit':'hidden';
					me.__onoff_.ggVisible=true;
				}
			}
		}
		me.__onoff_.logicBlock_visible();
		me.__onoff_.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_.logicBlock_backgroundcolor();
		me.__onoff_.onmouseover=function (e) {
			me.elementMouseOver['_onoff_']=true;
			me.__25.logicBlock_visible();
			me.__24.logicBlock_visible();
		}
		me.__onoff_.onmouseout=function (e) {
			me.elementMouseOver['_onoff_']=false;
			me.__25.logicBlock_visible();
			me.__24.logicBlock_visible();
		}
		me.__onoff_.ggCurrentLogicStateSize = -1;
		me.__onoff_.ggCurrentLogicStateVisible = -1;
		me.__onoff_.ggCurrentLogicStateBackgroundColor = -1;
		me.__onoff_.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_onoff_']) {
				me.elementMouseOver['_onoff_']=true;
				me.__25.logicBlock_visible();
				me.__24.logicBlock_visible();
			}
		}
		me.__onoff_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_=document.createElement('div');
		els=me.__off___img=document.createElement('img');
		els.className='ggskin ggskin__off_';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \ud604\uad00";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__off_.onclick=function (e) {
			player.openNext("{node20}","$(cur)");
			me.__off_.style.transition='none';
			me.__off_.style.visibility='hidden';
			me.__off_.ggVisible=false;
			me.__on_.style.transition='none';
			me.__on_.style.visibility=(Number(me.__on_.style.opacity)>0||!me.__on_.style.opacity)?'inherit':'hidden';
			me.__on_.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_.appendChild(me.__off_);
		el=me.__on_=document.createElement('div');
		els=me.__on___img=document.createElement('img');
		els.className='ggskin ggskin__on_';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \ud604\uad00";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__on_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__on_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_.style.transition='';
				if (me.__on_.ggCurrentLogicStateVisible == 0) {
					me.__on_.style.visibility=(Number(me.__on_.style.opacity)>0||!me.__on_.style.opacity)?'inherit':'hidden';
					me.__on_.ggVisible=true;
				}
				else {
					me.__on_.style.visibility="hidden";
					me.__on_.ggVisible=false;
				}
			}
		}
		me.__on_.logicBlock_visible();
		me.__on_.onclick=function (e) {
			player.openNext("{node30}","$(cur)");
			me.__on_.style.transition='none';
			me.__on_.style.visibility='hidden';
			me.__on_.ggVisible=false;
			me.__off_.style.transition='none';
			me.__off_.style.visibility=(Number(me.__off_.style.opacity)>0||!me.__off_.style.opacity)?'inherit':'hidden';
			me.__off_.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_.appendChild(me.__on_);
		el=me.__25=document.createElement('div');
		els=me.__25__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00\uc628";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__25.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__25.ggUpdateText();
		el.appendChild(els);
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
				((me.elementMouseOver['_onoff_'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
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
					me.__25.style.visibility=(Number(me.__25.style.opacity)>0||!me.__25.style.opacity)?'inherit':'hidden';
					me.__25.ggVisible=true;
				}
				else {
					me.__25.style.visibility="hidden";
					me.__25.ggVisible=false;
				}
			}
		}
		me.__25.logicBlock_visible();
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_.appendChild(me.__25);
		el=me.__24=document.createElement('div');
		els=me.__24__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__24.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
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
				((me.elementMouseOver['_onoff_'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
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
					me.__24.style.visibility=(Number(me.__24.style.opacity)>0||!me.__24.style.opacity)?'inherit':'hidden';
					me.__24.ggVisible=true;
				}
				else {
					me.__24.style.visibility="hidden";
					me.__24.ggVisible=false;
				}
			}
		}
		me.__24.logicBlock_visible();
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_.appendChild(me.__24);
		me.__23.appendChild(me.__onoff_);
		me.__9.appendChild(me.__23);
		el=me.__20=document.createElement('div');
		el.ggId="\uc635\uc158\uc628\uc624\ud504";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__20.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__20.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__20.style.transition='left 0s, top 0s';
				if (me.__20.ggCurrentLogicStatePosition == 0) {
					me.__20.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__20.style.top='200px';
				}
				else {
					me.__20.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__20.style.top='260px';
				}
			}
		}
		me.__20.logicBlock_position();
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__30=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__30.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__30.ggCurrentLogicStateSize = newLogicStateSize;
				me.__30.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__30.ggCurrentLogicStateSize == 0) {
					me.__30.style.width='48px';
					me.__30.style.height='48px';
					me.__30.style.left = 'calc(50% - (48px / 2))';
					me.__30.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__30);
				}
				else {
					me.__30.style.width='60px';
					me.__30.style.height='60px';
					me.__30.style.left = 'calc(50% - (60px / 2))';
					me.__30.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__30);
				}
			}
		}
		me.__30.logicBlock_size();
		me.__30.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__30.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__30.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__30.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__30.ggCurrentLogicStateBackgroundColor == 0) {
					me.__30.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__30.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__30.logicBlock_backgroundcolor();
		me.__30.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_2', !player.getVariableValue('vis_buttonbg_2'));
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
		}
		me.__30.onmouseover=function (e) {
			me.elementMouseOver['_30']=true;
			me.__22.logicBlock_visible();
		}
		me.__30.onmouseout=function (e) {
			me.elementMouseOver['_30']=false;
			me.__22.logicBlock_visible();
		}
		me.__30.ggCurrentLogicStateSize = -1;
		me.__30.ggCurrentLogicStateBackgroundColor = -1;
		me.__30.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_30']) {
				me.elementMouseOver['_30']=true;
				me.__22.logicBlock_visible();
			}
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		els=me.__22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc635\uc158\uc628\uc624\ud504\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__22.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uc0b4\ud45c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__22.ggUpdateText();
		el.appendChild(els);
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
		me.__22.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_30'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__22.style.transition='';
				if (me.__22.ggCurrentLogicStateVisible == 0) {
					me.__22.style.visibility=(Number(me.__22.style.opacity)>0||!me.__22.style.opacity)?'inherit':'hidden';
					me.__22.ggVisible=true;
				}
				else {
					me.__22.style.visibility="hidden";
					me.__22.ggVisible=false;
				}
			}
		}
		me.__22.logicBlock_visible();
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me.__22);
		el=me.__21=document.createElement('div');
		els=me.__21__img=document.createElement('img');
		els.className='ggskin ggskin__21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABIhJREFUeF7tnD+uFDEMxr93Au7AEeiogIIDwG1ASEDFaZCoaPlzAA5CTQ3ITztSFCVjx+N4nHmedp3E+X6xncxm9w75hFLgLpQ36QwSSLBFkEASSDAFgrmTEZJAgikQzJ2MkAQSTIFg7mSEJJBgCgRzJyMkIJAPwXx60O5QhPx70AoEm3wCSSDBFAjmTkZIAgmmQDB3MkISSDAFgrnDRchHAHlOsYVGer7vdZlAbMWW9JZAJCo52iQQR7ElQyUQiUqONgnEUWzJUKcAeQrgFYAnAH4D+ArgC4A/Eo8vbuMO5CWANwBeVMJ+AvAOwN8Bwcn5ZwBo+/19oF1kU3cgnwG87ihC4v4UqlV/LXCVL9NcgTwG8AvAo47obwFQpHDPNw'+
			'DPK6OrHFKXA0IgCEjruQIUVyAk4tGU1YqOEs7qqcsdyJGivuvsjcrqUeIOhHTTbHv3UlWdvlaOklOAcEW79TmXqso2K0fJEkB60UHC09N6Xb0qlCWAtK4i0UFwO1z2riqtmLrCA+k5SDC203nPZsUoCQ2kl6rK6NhqhwScpnZ5twkNpFfIy+goBeNSm7e4mvHCAtGkIU0bjWgz24QFol3tvahapcCHBDKaqsoVu3qUhAOyd+aQXjlaGUo4IFYpZ8bZhBYLHUJ/3LbcM74UCwXEcus6I0pKyK2tt0WxDwNk5MwhnXhvcpoC3+prxsEzDJAjhXwPUCt1jQq5J1LvTCRdNLVdCCAWhXybGPVV5naL1LX3ptk6dYUA0ppwPdHN0T0BSpvyJsqRAr8r0G0VWEbJ6UC4Qt76nKDUV3/2cvyRKJH+6FVTl1pp7VQgXCHnVue2'+
			'MiV225a1FmFvdXP9ln1Zpa5TgfRyM63+7m8kKkWltiRYfXWIuuoV+BEYm0sWqes0IJoJa3cuXLseFGm62vq3iJLTgIxOlhP16OetGqBZNKNb6hDb3pELC0eFlrbvCanx9Ujqco+Qkes8UjGt7FpQNP4eSV3uQDQrzkpwST9npy5XIJqcLBHR0sYydWnOJm5ANKFvKfRIXy0hNf5rUpcbkOipqgRmGSWjBd4FiGZ1jazoGbZnFXgXICtFRwn3jAI/HcgKhbwXYWekrqlAVkxVkpePmnlJC/xUIKumqlkFXvJaZRoQzSqaUZwt+rR6+Ui+cLuuaUCivTw8CsbrbDIFyBVSVQ3Qq8CbA7lSqpJA0cxXci+gGdGaPzC7YnRwX0Bp5qz6pnIUyMpnDmmNsTrB9wq8acq6WiHvQWoVeM3cR34Jdu/LaIRonJKuzEh2ra2rZu'+
			'6taDONEOqM/tHnyg/dfKd5lk/vihGnQ/0XVWRvCoRzID/nFUggvEauFgnEVW5+sATCa+RqkUBc5eYHSyC8Rq4WCcRVbn6wQ0DopEn78nzsFKBzXOuW/v0I3Endzo3sSaRAAhHJ5GeUQPy0Fo2UQEQy+RklED+tRSMlEJFMfkYJxE9r0Uia3zeIOk4jnQIJRKfbtFYJZJq0uo4TiE63aa0SyDRpdR0nEJ1u01olkGnS6jpOIDrdprVKINOk1XWcQHS6TWv1HyeloKdbfNVKAAAAAElFTkSuQmCC';
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
		el.ggId="\uc635\uc158\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
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
		me.__21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__21.style.transition='';
				if (me.__21.ggCurrentLogicStateVisible == 0) {
					me.__21.style.visibility="hidden";
					me.__21.ggVisible=false;
				}
				else {
					me.__21.style.visibility=(Number(me.__21.style.opacity)>0||!me.__21.style.opacity)?'inherit':'hidden';
					me.__21.ggVisible=true;
				}
			}
		}
		me.__21.logicBlock_visible();
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me.__21);
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNZJREFUeF7tnTFyFTEMhuUTcAeOQEcVUnAAuA0MM5CK0zBDRUvCATgINTVi/Gbfyz7HsmSv7JU3ei1eW/6/lWTZ3hDAf6YUCKascWPAgRh7CRyIAzGmgDFz3EMciDEFjJnjHuJAjClgzBz3EAdiTAFj5riHWAOCiF+M2fSszQmIiM9aAWOTdyAOxJgCxsxxD3EgxhQwZo57iAMxpoAxczgPuQsheJ2iCG2p+z5TXToQRbElXTkQiUoD2ziQgWJLhnIgEpUGtnEgA8WWDLULEER8DQDvAOAVAPwBgB8A8D2E8Fdi9JHbDAeCiG8B4AMA3CbCfgWATyGEf1LBF+NvACAuv++lz1lutweQbwDwnhDlJoTwSyJYeiwQQjjEYdpQII'+
			'j4EgB+A8ALQvSPIYToKcUfIv4EgDdJo0MUqdMBQcQIIgLJ/aaHMhRIVBARN4UswjsucGYPXXsAaU7qnLELlam9hJtjl72slmUvE6quwtfMXrILEC5p5/6dC1VHSfBTACl4x90CIrddPWXomgVI7irSfQjhVFxSV5VmDF3mgRQMvD1X54U203mJaSCFUHXxjnPukIBryV2jn7EOJFeRR40u3rEWjAhdT+CNFrlmPLNAWsJQyzM1Yo1oaxlIMZFT4lDL41kSvEkghZojG6qSsBVvwUy7DDYHpFRzSK8czRy6LALJJvLakNOjNlleluh9DwAQFwvqh2KmgGguXXt4SQK5y+rNDJCamkO62qEmV+tty25ALjepF56WgFTVHBVQcqu1KiEZkdiFhtTWAvjH8x7mk7aqiRWWqtQpYHX/0dPWsV0jdDE7zaqhy4SHEBO+mujK'+
			'UFKAdZv1TZQtCZ4TaHnJ1LyEG6/LAZWwbjhNkjAwrm6urv4Q7U4etsVLpB+9tuQl4tyHqqNOzbsC4RI597ac97Qk7ZZbKrmCkXy7Bf2uNVUJXdyYvYFQiTwePJHfSKSng8K20avSq0Oxq2ye4oQh8uHm0MWN2w0IN3DNykShLQWl9hv9zV7C6dITSO1kFXSnu8jlAE4corfqlaEwp/bLIZUXFrqCWHVOeQkVVkt2NYcu7iVQ95Ca6zyjSJSgNNrbHLr2ANLyxg1js3foGgqEG2yY6uWB1EJXS23CaaQWshpdfxdGhJeULnlTdlaHrpFATIeqtLbJHYY1LkaqEvwQIDN5x94JfhSQmbzjcas781UWJ9jW2oTrf3MO4QbYJUnIB1VL8NRdstQUTq9NQCYNValGT3JA47xECb43kClDVccEz26rdAPS+BbJg8nYllqbj9'+
			'Hq4qqrJxBTm4db+Y2qTboAaVyvb9Ws9/NDErw6kIOFqhTyEyiN85XcC8i+YNWrrIN6x1mcrJCNc246qawCwrlb75gyqH8tL8kmeE7DWiCHSuQUYCLBt8y95kuwkzkOJE8lVyy2AMl5m941oMXd4p9LOvLvId0JXt2Kr5r3+Svi9UOqIavKGm+cVcCBGHsxHIgDMaaAMXPcQxyIMQWMmeMecjAg8UZ5/CLVf3oKxDoud0tfVKnrmeE9iRTgtk5EnXgjPQUciJ6WKj05EBUZ9TpxIHpaqvTkQFRk1OvEgehpqdLTIf7HARUljHTiQIyAOJvhQByIMQWMmeMe4kCMKWDMHPcQB2JMAWPmuIc4EGMKGDPnP0T6iuomrW/TAAAAAElFTkSuQmCC';
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
		el.ggId="Image 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_9.style.transition='';
				if (me._image_9.ggCurrentLogicStateVisible == 0) {
					me._image_9.style.visibility=(Number(me._image_9.style.opacity)>0||!me._image_9.style.opacity)?'inherit':'hidden';
					me._image_9.ggVisible=true;
				}
				else {
					me._image_9.style.visibility="hidden";
					me._image_9.ggVisible=false;
				}
			}
		}
		me._image_9.logicBlock_visible();
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me._image_9);
		me.__20.appendChild(me.__30);
		me.__9.appendChild(me.__20);
		el=me.__17=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 340px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
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
		me.__17.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__17.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__17.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__17.style.transition='left 0s, top 0s';
				if (me.__17.ggCurrentLogicStatePosition == 0) {
					me.__17.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__17.style.top='260px';
				}
				else {
					me.__17.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__17.style.top='340px';
				}
			}
		}
		me.__17.logicBlock_position();
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__40.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__40.ggCurrentLogicStateSize = newLogicStateSize;
				me.__40.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__40.ggCurrentLogicStateSize == 0) {
					me.__40.style.width='48px';
					me.__40.style.height='48px';
					me.__40.style.left = 'calc(50% - (48px / 2))';
					me.__40.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__40);
				}
				else {
					me.__40.style.width='60px';
					me.__40.style.height='60px';
					me.__40.style.left = 'calc(50% - (60px / 2))';
					me.__40.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__40);
				}
			}
		}
		me.__40.logicBlock_size();
		me.__40.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__40.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__40.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__40.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__40.ggCurrentLogicStateBackgroundColor == 0) {
					me.__40.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__40.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__40.logicBlock_backgroundcolor();
		me.__40.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_3', !player.getVariableValue('vis_buttonbg_3'));
			player.toggleFullscreen();
		}
		me.__40.onmouseover=function (e) {
			me.elementMouseOver['_40']=true;
			me.__19.logicBlock_visible();
		}
		me.__40.onmouseout=function (e) {
			me.elementMouseOver['_40']=false;
			me.__19.logicBlock_visible();
		}
		me.__40.ggCurrentLogicStateSize = -1;
		me.__40.ggCurrentLogicStateBackgroundColor = -1;
		me.__40.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_40']) {
				me.elementMouseOver['_40']=true;
				me.__19.logicBlock_visible();
			}
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uccb4\ud654\uba74\uc628\uc624\ud504\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__19.ggUpdateText();
		el.appendChild(els);
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
		me.__19.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_40'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__19.style.transition='';
				if (me.__19.ggCurrentLogicStateVisible == 0) {
					me.__19.style.visibility=(Number(me.__19.style.opacity)>0||!me.__19.style.opacity)?'inherit':'hidden';
					me.__19.ggVisible=true;
				}
				else {
					me.__19.style.visibility="hidden";
					me.__19.ggVisible=false;
				}
			}
		}
		me.__19.logicBlock_visible();
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__19);
		el=me.__18=document.createElement('div');
		els=me.__18__img=document.createElement('img');
		els.className='ggskin ggskin__18';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACrklEQVR4nO3cP2sTcRzH8fdd0n+i1H8EukoVB3cXJ5+AoI9AcHLsU3AXZ518Bj6DdnJwctDBQRzU2kHEgqUqrXFIBk1zl0tyud/1y/sFmXLkPvSdpKVwlwHPgJvAMe3RAV4BD1IPqeg+sAUcpR7yjxz40AVuAdcTjxlnOfWAKVwFbqQeMcZmDuylXlGgrbvG2U89oMCnPPUCLZaBgzNwcG0OfJr+yOqmHlCkzYHXUg+YwlLqAUWqvPO2gJc0+2ZYBr42eL55PQV2gF8NnrMPrAMvgNWig6oE3gZe1zIprt3hI4XSf1BV+VRu1DRE9bsIZGUHtPl3sGpg4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OAMHJyBgzNwcA'+
			'YOzsDBGTg4Awdn4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OBy4MqEY841MUQz6QBnSp6/1gUeM7gJy+hFTBmDN8CbxWxTDQ6AJ8AK8GfkuQ7wpelBkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkqToMuA2sMH4WxlmwDbeEq+tloE7wBInb2WYA/sA74B+yeNeQ2M1vR7l7Q5zYG/CixwucqHmcgz8Lnn+c87Jj/aofn17tACjv1r/e84bggdn4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OAMHJyBgzNwcAYOzsDBGTg4AwdXJfCPha/QrL4z4cqTboUXOT88Lpt/T2VLDK65OWrwnPPIgTXKrxNahEtM6FIl8HMGF6A1+XW+AuwAdxs85zweAo+Anw2esw90gNWyg6oEvjB8NG0z'+
			'wTln1WPwTdc6bf4j61vqAVM4SD2gSJsDqwYGDs7AweXA5dQjCrR11zhnUw8o0OsCb4F12nWrhozBrtNiF/hI+36G7/8CwN1O7BtfIr8AAAAASUVORK5CYII=';
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
		el.ggId="\uc804\uccb4\ud654\uba74\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
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
		me.__18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18.style.transition='';
				if (me.__18.ggCurrentLogicStateVisible == 0) {
					me.__18.style.visibility="hidden";
					me.__18.ggVisible=false;
				}
				else {
					me.__18.style.visibility=(Number(me.__18.style.opacity)>0||!me.__18.style.opacity)?'inherit':'hidden';
					me.__18.ggVisible=true;
				}
			}
		}
		me.__18.logicBlock_visible();
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__18);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNTow'+
			'MSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTYrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTYrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY1YTIyOWNhLTE5NjgtZWQ0Ni1iNGY2LWM2YWViMGQ1MjI1YSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmNWEyMjljYS0xOTY4LWVkNDYtYjRmNi1jNmFlYjBkNTIyNWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNWEyMjljYS0xOTY4LWVkNDYtYjRmNi1jNmFlYjBkNT'+
			'IyNWEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY1YTIyOWNhLTE5NjgtZWQ0Ni1iNGY2LWM2YWViMGQ1MjI1YSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNTowMSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgUqjYgAAAMHSURBVHic7dy9ahRhAIXhd2Z/'+
			'kogS/1hIKzFY2NtYeQOCeAOClWVuwV6stfICBO8gqSysLLSwEAs1iSBiwGCUxLGYLXSzMzu7O/t9Xw7ngVQz7Bx8N9lFmMmKongK3ACOSUcHeAXcjz2koXvAJnAUe8g/cuBDF7gJXIs8Zpx+7AFTuApcjz1ijPUc2Iu9okKqu8bZjz2gwqc89gJbLAcW58DiUg58mr5kdWMPqJJy4JXYA6bQiz2gSpN33ibwkrBvhj7wNeD15vUE2AZ+BbxmAawCL4DlqpOaBN4CXrcySdfO8CeG2v+gavJbudbSEGvfRSCrOyHlz2BrgQOLc2BxDizOgcU5sDgHFufA4hxYnAOLc2BxDizOgcU5sDgHFufA4hxYnAOLc2BxDizOgcU5sDgHFufA4hxYnAOLy4ErE845F2KIzaQDnKk5vtEFHlE+hGX0JqaM8g3wZjHbrAUHwGNgCf'+
			'gzcqwD7GZFUYQeZQH5M1icA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFhcF7gFrDH+UYYZsAXsBt5lzfSB20CPk48yzIH9rCiKd8BGzYvcBZ4vZp/NaQB8qTl+mAN7E17kZ3t7rGXHwO+a459zTv5qj/LTStM2+tH63zF/yRLnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbXJPCPha+wWX1nwp0n3QYvcn54Xjb/nsZ6lPfcHAW85jxyYIX6+4QW4RITujQJ/IzyBrSQf86XgG3gTsBrzuMB8BA4DHjN'+
			'AugAy3UnNQl8YfgT2nqEa85qQPmXLjkpf8n6FnvAFA5iD6iScmBrgQOLc2BxOXA59ogKqe4a52zsARUGXeAtsEpaj2rIKHedFjvAR9L7N3z/F7tKTAa8NAeFAAAAAElFTkSuQmCC';
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
		el.ggId="Image 10";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_10.style.transition='';
				if (me._image_10.ggCurrentLogicStateVisible == 0) {
					me._image_10.style.visibility=(Number(me._image_10.style.opacity)>0||!me._image_10.style.opacity)?'inherit':'hidden';
					me._image_10.ggVisible=true;
				}
				else {
					me._image_10.style.visibility="hidden";
					me._image_10.ggVisible=false;
				}
			}
		}
		me._image_10.logicBlock_visible();
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me._image_10);
		me.__17.appendChild(me.__40);
		me.__9.appendChild(me.__17);
		el=me.__13=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc84\ud2bc";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 420px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__13.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__13.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__13.style.transition='left 0s, top 0s';
				if (me.__13.ggCurrentLogicStatePosition == 0) {
					me.__13.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__13.style.top='320px';
				}
				else {
					me.__13.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__13.style.top='420px';
				}
			}
		}
		me.__13.logicBlock_position();
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__14.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__14.ggCurrentLogicStateSize = newLogicStateSize;
				me.__14.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__14.ggCurrentLogicStateSize == 0) {
					me.__14.style.width='48px';
					me.__14.style.height='48px';
					me.__14.style.left = 'calc(50% - (48px / 2))';
					me.__14.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__14);
				}
				else {
					me.__14.style.width='60px';
					me.__14.style.height='60px';
					me.__14.style.left = 'calc(50% - (60px / 2))';
					me.__14.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__14);
				}
			}
		}
		me.__14.logicBlock_size();
		me.__14.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__14.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__14.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__14.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__14.ggCurrentLogicStateBackgroundColor == 0) {
					me.__14.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__14.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__14.logicBlock_backgroundcolor();
		me.__14.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_5', !player.getVariableValue('vis_buttonbg_5'));
		}
		me.__14.onmouseover=function (e) {
			me.elementMouseOver['_14']=true;
			me.__16.logicBlock_visible();
		}
		me.__14.onmouseout=function (e) {
			me.elementMouseOver['_14']=false;
			me.__16.logicBlock_visible();
		}
		me.__14.ggCurrentLogicStateSize = -1;
		me.__14.ggCurrentLogicStateBackgroundColor = -1;
		me.__14.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_14']) {
				me.elementMouseOver['_14']=true;
				me.__16.logicBlock_visible();
			}
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		els=me.__16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__16.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubbf8\ub2c8\ub9f5\n", params);
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
				((me.elementMouseOver['_14'] == true))
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
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
				else {
					me.__16.style.visibility="hidden";
					me.__16.ggVisible=false;
				}
			}
		}
		me.__16.logicBlock_visible();
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		me.__14.appendChild(me.__16);
		el=me.__15=document.createElement('div');
		els=me.__15__img=document.createElement('img');
		els.className='ggskin ggskin__15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABLRJREFUeF7tnGuS00AMhLMnA04GnAw4GZTAqjJeJ7HV3Xo4mz+7lY0nM/rULc241m+3Oa/Py1T956fV1P29n8t7vzbLsvf9b61X/NZ6drebBfrrBgQy5e/Lxd+QQZTXdgTiEDzrVetvCacTkCwQe4ANTgvVdABSCWILpxxMJZBOINZgSq2sCojZgxdrVY1Axy1RSwWQH7d/3dOEVzqUTCBdLepIYnzJ2sdkATEYpozJrxS1ZACZUC+OJoocihrIlWA4NCkUJZAr2NQ95chqihLI76M+MPBzdlBpUOgvFZBJrW00qBIoCiBXrBv3oNHrCRvIK8FwSNR6wgZy5bpxTyVU62ICyVSHBcEPAS1Qfjdwe1cx67yMphImELU6HMLZW7'+
			'EGaX3nMVrEH11HUwkLiFIdURDbAPoNKJVqKAWeBUSlDsoiN2SUyQPHEx5gufWpyDqaL+94jeoUAZ4zA4hiEwgv7GChYCsbriUMIOxFZcEwZgqlQPNHgbD9WFEznomFvYbLAKmA4bCYtgvZFqoQpl2hc3mmhEd/Z1tXeC3hC8ndVaU6HBTTusK21QUIMg9EGetrmSoJJxgSCFZGQZ7LorGMw6ol4TUhQFiTD2cTGQazDR4NJOy3H0D+jwCrw0JUKmByK10XEozSiStILGOWrisKhNWRhL1WCIRVG0NW/AHkPdmXBmLhiCaFSiQjLcuCUTpxFY3qdSHZ+QHkcVaEYhu6iNyNhIqfSCGs04ewFSNAWMWvU6fFAhJeEwKENflwNglUwrLh8HEQAoS1F7G4drAtZoKNBxKWOFElLHVAikcUwmx9q1XCVEcpEFZh90RHEyQq'+
			'GKY6wnYFkVxWzqwjNmSFdbGTqhQI27ZsPGhBJyXCtio4yRkWwc6wLCgKGHAyMYCwbcuTHF7cA7UokoiSSAwgCttax5IJRv14Dzie8ABL5FQZt1aL/R59yJgaBEUdcAFapbHKtrauY12YPeDyyEMt/T+n7GGZGU8foiiZpRALnFoleyVh/RTSvaeUnmy6oI9TYkkZRLQngaKTfDFFHUzL8vUzd7zJMYW+jpbYtIGW5Sh6eyhSCRfT1KFQiLoFTojv6a+gJjV1sKQW+HTEhBdQ1aFSSFYLLIzz4aHpCU0f8IVUQleHSiE27iuoRJLMkkFfoOOSqEOpkKvvS2SJLBv4wiqRqSNDIVVnXIfbpMAHpUksHfyCZ1xSdWQp5CoqkcPIBHKFNjjDTVL/WWbywWOKOjIV4rWz4iZWoG6/uyRFHRVAJlpXmjoqgEwr8KkwqoBMum'+
			'eSZlVukulfOGhvkq6OSoV0t64SGNVAOltXlXOk7kP22s+OXVeZOjooxObQacNYCqMLkE71pMyqqrusrX11sK5ydXRSSLV1tYDRDUiVdbWB0RFIhXWV1421f7eaTMEuvpU6OirEkyWjFW4HozMQdT1pCaM7EOXRSker/usObScmrCdt1TEBCHt/0hrGFCAsKO1hTAKCFvmKh9rsnW4/fa97DVkvANk0jlnnmIkCRb7D4wOfKqPbae/hCZ+8fzKibnQ/OjkC58hOfhyMaUV9C+oRlJEwpgO513mN6aj2rGBaUd9bgyvFnxQUfYTTEauUf+YP0q/2ZbAn3a4AAAAASUVORK5CYII=';
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
		el.ggId="\ubbf8\ub2c8\ub9f5\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
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
		me.__15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__15.style.transition='';
				if (me.__15.ggCurrentLogicStateVisible == 0) {
					me.__15.style.visibility="hidden";
					me.__15.ggVisible=false;
				}
				else {
					me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
					me.__15.ggVisible=true;
				}
			}
		}
		me.__15.logicBlock_visible();
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me.__14.appendChild(me.__15);
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABMFJREFUeF7tnP1y2yAQxMWTtXmyNk/W9Mno4IEZokq2fLd7H9j5JzOOrQA/dvdAMmVL8lNr/dmbOn7/mJo+Xvvqr/3ddeurlDL+FrrHJXLrOoRfOxCaJn+2D5dSfmsuwvxsOCAThDHrWf0PCScMEEMQR4A/o6jGHYgziD0cdzBuQIKBmMG4WpkLkFprC9UR1qyM0F7XRS3mQGqtf7ZtYwe2Fsb4vDkUMyCBLeoKvA+rdYwJkA6jKSPzj4la6ECS5MXViUKHQgWyGAyTXKEBWcSmzpRDyxQmkHrVBxK+r21WfjDaTQGSrLSVjisFChzIorlxBg0e8lAgLwZjQILmCRrIyrlxphKodcGAGKuj3f27bQL2G063u4EHdxWt9stgKk'+
			'ECYavjBuHZLYwOqe2dMeHAVAIBQlaHCMTeX3ob28ssMJCARwFhqQPSyRkOc/KUUtTjqb4AsYMwXz5QS7Mwxmanus0IIIz7G+qOXVnt1VrRylZnCQIIulMmMKaqDK0UVftVQAh2Bc+MR0oh9GEZIOYwBizw3pvKtrQKgdkVokJ5pIazv6NvFWj6IgYClrqbOiaVIJ+EEdtWCCCaGSVVBbkUFk+wCEBUnosC0qsuVAkv7pMGCKrx4tmEhAEug1MDEfvtG8g0AqhVboT82O11QSpHab80luXacLQ6pmrLtV8iIMC6Xey1RCCobBRZ8RvIjixw1Z4SSPu+n2hSEBWSz7J6ieja8DeQ/6X9BnJnVkiVL7YLVNm7bZvIaxkKQe7PeQBBVSNhKi0gEHGfNAqB7Y5KZxNaJUDVi7eDNECQDwq42xZQHW2epAciljhKJUB1qEp5'+
			'sUKQpW8fVDeVgNXhCgQV7DcmXlmCVIfGrm5joJE8cE9rNMPcuoBbJaMP4vxQAyHYlioQn51caKtCqFylEPBtz3k8VbPsChgGDK1doRSCLH9NoBBsCmJXECAk26KAYR/vgShK1JZFtK1vULo/i47mY4PoDYXYLAoIy7b2cdC+vNMOuHx4qOX0zal2WKbF6UNxgBip5Cir51NIj04pvZLvkPcg7AqWIR2IlUogAwi+CEQdUCAG4Q4eQ9zlUOpgAIFtyeOGi34lmDrgQF5RJUh1sIBANxzp81v3D6DqYAF5mXBHq4MCxLEE1s315z8NVwcTyPIqYaiDBqSrZOWKi6IOKpCVKy6WOiyArKgSmjroQFYMeKY6rICsFPBUdZgAWUgldBiWQNKrhG1VYxkEuUF1ZU1Feqjgyr9GvMdEHWYKGSNCfLgAMein17BShweQjNZlpg'+
			'5zIAkD3hSGC5BMK3hLqzIP9dmgCc8EMzLEXB1uCklgXS4wXIFEti4Pq3K1rKkMjlh1uanDXSFdJZF2hF1hhAASKU88rSqEZQWzLnd1hFFIAOsKASMUEEfrCgMjIhDzqitCbsyrWrPt96tLaeNVfCh1hFPIFPIWpXA4GGGBGORJSBihgTC3VqLlRugMMdgVDquO8AohrE9Cw0gBBAglPIw0QAAhb36ozdUyf/++cOuQs45o1ieRQzwtkK4SyUre7WA0iUrSKES4aEyRG2nK3jv2dWUlnw5GqlDfw3nwaGpKGKmB3Km80lRURw6QLkPuKOV2UlApRXSEkySAGZ/5B0jLjoPzuUiDAAAAAElFTkSuQmCC';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_12.style.transition='';
				if (me._image_12.ggCurrentLogicStateVisible == 0) {
					me._image_12.style.visibility=(Number(me._image_12.style.opacity)>0||!me._image_12.style.opacity)?'inherit':'hidden';
					me._image_12.ggVisible=true;
				}
				else {
					me._image_12.style.visibility="hidden";
					me._image_12.ggVisible=false;
				}
			}
		}
		me._image_12.logicBlock_visible();
		me._image_12.ggUpdatePosition=function (useTransition) {
		}
		me.__14.appendChild(me._image_12);
		me.__13.appendChild(me.__14);
		me.__9.appendChild(me.__13);
		el=me.__10=document.createElement('div');
		el.ggId="\ucc38\uace0\ub0b4\uc6a9";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : 500px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__10.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__10.ggCurrentLogicStatePosition == 0) {
					me.__10.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					me.__10.style.top='380px';
				}
				else {
					me.__10.style.left='calc(50% - ((60px + 0px) / 2) - 1px)';
					me.__10.style.top='500px';
				}
			}
		}
		me.__10.logicBlock_position();
		me.__10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1450))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__10.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__10.ggCurrentLogicStateSize = newLogicStateSize;
				me.__10.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__10.ggCurrentLogicStateSize == 0) {
					me.__10.style.width='48px';
					me.__10.style.height='48px';
					me.__10.style.left = 'calc(50% - (48px / 2) + (0px / 2) + -1px)';
					skin.updateSize(me.__10);
				}
				else {
					me.__10.style.width='60px';
					me.__10.style.height='60px';
					me.__10.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -1px)';
					skin.updateSize(me.__10);
				}
			}
		}
		me.__10.logicBlock_size();
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__60=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__60.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__60.ggCurrentLogicStateSize = newLogicStateSize;
				me.__60.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__60.ggCurrentLogicStateSize == 0) {
					me.__60.style.width='48px';
					me.__60.style.height='48px';
					me.__60.style.left = 'calc(50% - (48px / 2))';
					me.__60.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__60);
				}
				else {
					me.__60.style.width='60px';
					me.__60.style.height='60px';
					me.__60.style.left = 'calc(50% - (60px / 2))';
					me.__60.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__60);
				}
			}
		}
		me.__60.logicBlock_size();
		me.__60.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__60.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__60.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__60.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__60.ggCurrentLogicStateBackgroundColor == 0) {
					me.__60.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__60.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__60.logicBlock_backgroundcolor();
		me.__60.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_6', !player.getVariableValue('vis_buttonbg_6'));
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
		}
		me.__60.onmouseover=function (e) {
			me.elementMouseOver['_60']=true;
			me.__12.logicBlock_visible();
		}
		me.__60.onmouseout=function (e) {
			me.elementMouseOver['_60']=false;
			me.__12.logicBlock_visible();
		}
		me.__60.ggCurrentLogicStateSize = -1;
		me.__60.ggCurrentLogicStateBackgroundColor = -1;
		me.__60.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_60']) {
				me.elementMouseOver['_60']=true;
				me.__12.logicBlock_visible();
			}
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me.__12=document.createElement('div');
		els=me.__12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uba58\ud2b8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 46.67%;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((46.67% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__12.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\uacf5\uc720", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__12.ggUpdateText();
		el.appendChild(els);
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_60'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__12.style.transition='';
				if (me.__12.ggCurrentLogicStateVisible == 0) {
					me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
					me.__12.ggVisible=true;
				}
				else {
					me.__12.style.visibility="hidden";
					me.__12.ggVisible=false;
				}
			}
		}
		me.__12.logicBlock_visible();
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me.__12);
		el=me.__11=document.createElement('div');
		els=me.__11__img=document.createElement('img');
		els.className='ggskin ggskin__11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAJRUlEQVR4nO2da8wdRRnHfy9yqZFSX6g2pRTbSN+Ctt0TA0EjgRIgEINCIMEQEY2AJoBpJAgi4YOIRuQD5RJuAiEqkoBQ5aYihIJUqdcqsdgWe+FmLUhLtWJL5PhhWHs4nJ2dfeaZ2T1z9pc8SZP37Mx/5unM7M7lmTFaYpABRwPzgdnADGAKsAewHdgKvACsA54CHgZW1CG0xZ1DgcXAGqArsGeAq4GPRNbdUsJhwJ3InFpkPwQOj1mIlrdzOHAXuo7tt3uAI2MVqGUnlxHWsf12eZxitewNLCWuc3NbBkwLXsIRZh/gOepxbm5/A94buqCjyHxgLfU6N7cNwETY4o4WC4D/UL9je20zbUtWoYnOzW11wHKPBN'+
			'NornNzuzlY6RMnw7zQ1O1AFzs4UB0kS0bzW26vrQhSC4kyj+Fybm4n5gUYU62OtJgOrATerZjmc8AqzOTI08CrwF7AQcBCYC6wv0I+a2g/naxkwBb0WtRrwGnALiX5jgGnAv9SyPOTHuVPGu0xdzXVW9P7MS3cJ9+lFfMcCSbQde6vMIv6EnYF/uyZ/3uEeSfJHOB59Jz7YwVN++A3JXqGgoYkyDDjpGbL1eKjHjruVtQxtGTod8vabBJq+W0ALUPFTJrvXIBrhHqeDqRnKJgPPIuec5cE1LpQqOnFgJoaTYbZrtr0lpszXajrH4F1NRLtMffJCJrfBfxToG1rBG2NQnvJ7xeRdO8t1L05kr5GkAEb0XPu/ZG1SzT+PaLGWtEec58k7kLNuUKd6yJqrI35DLdzwQwFEq1PRdYZnX0x45CWcx8ivnOneuh9JLLWqGSY'+
			'9VYt5z4aV/7/WVJBY79dUoPeKGTod8tla7kh+LJQb26HxpccngmGf8wF+JRQb26b4ksOzwTmILWWc++lHueeLdTba5dGVx2YDrpLfjFmqAZxWgWNRfZfYM/YwkPSoe2We+362MJDMpPWuf2WzFadBQzPkp+NcypoLLNzImsPRgf9llsHmi335cjag5HRdsuDLIlzSdPQde4T1OPcTwv1FtmiuPLD0EF3ye8Bx3zPAh7HHDPRQOM7t9c+q6SrVjrottzluLXck3qeWQ/M8iyHdrd8gaeeRnAg9Tj3EwOe3YL8gJi2c28U6mgU70D38LXrkt/BljRewGyjqcKZimXoYsIcJsFy9CrlUcc8T3ZIa1mFMpyhWIYuCR1JWYxepSzH9AZluDg3N5f1Vu0Xqm845DkUHIKuc1265WMEaR9YkuaLiuVIYswFeCd6U5CuS34LgR'+
			'2C9P9Sku7xSuVIpuUCXIhey3WhSrc8yM4vSX+VZ/rJjLk5v0fHuS4t92KFvF4FJlnyuMAj7ascyjBUTOBf4VXmlr+rkF8XONaSh+2Ty2bJjLm93IJfRUtO1n8IeNAz329b0p8CvF4xvQsF5Wg8u+G37WadZ/6/9sh7g2LaZ3uWo7EcgbyCd2B2d/gwC3jDQ8MHLGlf55iGardcx15fGz4XT3wRE2jMh/XAeR7P2+5TWOHw/I3AFzzybzwPIGs5v1PW8SehjjssaR5W8mwS3fI8TNi+IqTBv7T/1y8S6rAFPXmf5bkkXqiOxCz5FY1Tk4BXkFXsHGWtHxTqeJ7iYW8K8O8BzyTxKbQvOwtUxDiyN+hXcFtEqMIk5CETijac78rblz2TWPLrsPOUny3s/DiwjeqVGuoM7GqBli0UO3gM8xmX/zaJ6ccOb92J8Yzlt1OR'+
			'xaFYH0D3LshWgTZjAqYU8dKbv0ti4WDQKb+NmK5qEJORteAd2CtVwjjmfI/EwUVz0vlB7nuUtdZC0Sm/7di3uvx1wDMuZpsHljBoL5aL2XqoDvBNZZ21kGF/WVpgefYnluds9iPlMvxUqONnljRrmVTSzjTDzLnals5s04krhfmeAOwnfLafA5D3CLbYkG8I0/RC08EzMc7dveR3cy1/8zkfdKvHs73c4vHsb5Q0NI4qgT2XWNKZjN9q0rWe5fi6R96vY17OkiOj2qb0zdh7jrsrpDXIviYsh+/J+nuF+TaaDNm364ctaZ4oSK/fbqdahBmNsAmLKuQ3FPgE9rTdYD2GfE661+5zLMfpCnl1sX8dDB0ZfsdJVpWkL41wntuVmK23ZWidrE/qboQMnZC8tvtuZ3mk6/oWrNEt55bMVeuad/nZFsfBbGKrmuZjjuXQdK'+
			'5ts91QMR3dwJ4u8ZZXVkjPdcz9vGIZyoaaoSFD9y6/pY757onbqs4VjulpHuEsm1cfGjJ0w+C7nvLLOagkvbsc09HslrvA5yqUobHMQd+5koAn3ypIr44xt0six0mmoRtkzDew52V96d3u+JxmkLEuiSz5TUb3XKtWkLFjMXfr3ub4e+1QRWfqFKN+NMMmaAcZm+74O+1u+Rq1EtRMf1fYJOe6ou3c78SVH44F6FXKksjac6RX0BTZV+LKD8tD6LXcOtBuuclEbgWzaN92ywl2yznSg1+9Fusuv36035Zviis/PPPwrxTXuWBttONQnRtXfhyuxq9SpDNUvmh3y0m9UPXis3j/LPqHv1zQdm5y3XKOz8vVa/iH15VwlkCrzZKZxBjERcgr5pQa9GoH9kxm+rGI7yGrmDouH9bulpNYOCjjCWSV8/PIOrWDaSc75vaz'+
			'FlkFxXzj1P4UGomWm7MJWSV9PJI+7W45+TG3n63IKuqICNq0u+UkYmJUJQ8rUNWOD6yrHXOVWIeswkLGdtLeZpPsDJULy5BVmu00uw/aLTepJT8J30dWcRsDaGm75QB8FXkFnqSoQ3vJL4kIchr4bNPZhk5sDO3v3JHvlvvxufBxLX6rSe2SXwSuxa9S/4gJ9FUVn8sqBlk75hagsZtyPXAcbq15LvADhTx7bSQnMaogDULWbxsw4es/BszGnJKYiomZsQh4WCmfXhu56UcJGfoV38VEmvUJjVRmI7Vw4MsjhHNECGvH3Ip0qN9prpZESN46uJz6nVdmSQTTrpM/UL8Ti6x9W1ZgHPlGgJDWjrmKzMDcIlK3U3NL4uqZpjEb+YYATTs9dEFHmRnIbwLTsC+FL2ILwA3Edewa/O4ybBFwFPA4YR27HbPc17SLM0eKUz'+
			'H39Gk6dhuwGP8rYlsU+Qz+B8dXA5eSUMTWJqF1pnc2sBA4+s1/jwN7YW5f2Q1zydQOTIyrrZgNBo9huvtfKmloGcD/AG56CJOtna8RAAAAAElFTkSuQmCC';
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
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__11.style.transition='';
				if (me.__11.ggCurrentLogicStateVisible == 0) {
					me.__11.style.visibility="hidden";
					me.__11.ggVisible=false;
				}
				else {
					me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
					me.__11.ggVisible=true;
				}
			}
		}
		me.__11.logicBlock_visible();
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me.__11);
		el=me._off0=document.createElement('div');
		els=me._off0__img=document.createElement('img');
		els.className='ggskin ggskin_off0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODoyODow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6NTkrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6NTkrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMmZjOGQ5LTk0ZmItNWM0NC1iZjA1LWE5OWJmMDBjODdiNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpiMDJmYzhkOS05NGZiLTVjNDQtYmYwNS1hOTliZjAwYzg3YjUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMDJmYzhkOS05NGZiLTVjNDQtYmYwNS1hOTliZjAwYz'+
			'g3YjUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMmZjOGQ5LTk0ZmItNWM0NC1iZjA1LWE5OWJmMDBjODdiNSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODoyODowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsiQM2oAAAvASURBVHic7Z17sFVVHcc/XEFo'+
			'fIGRIAlJykUKOLcxMysLC9OpJNMeGihTgBkXrLEyzGymicBHTQjV5MWcXlr2UEIUh3wAiXExi2jCEB0YDCHKkYAhIHH1x+9u3BzO3nvttX5n733O2Z+ZPcNln/XY53vWY6/f+v1WL2MMJXWnAowHxgDDgdcDJwB9gf3ALmArsAn4K/AwsFaj4F6lwHXjbOBy4IPA6Q7pnwMeBH4O/MG1EqXA+rwLuAb4mGKevwHmAyvTJiwF1uPdwEzgo3Us4z5gAfCYbYJSYB1mAzdkWN4twJdtPlgK7MeJwL3Ae3Io+wngEuCfcR8qBXbntchM95Qc67AdmaHviPpAW3Z1aSrGAE+Sr7gAg3vq0R71gbIFp2cssAZ5hy0KO4GR1GjJZQtORxHFBegPPF7rRimwPYMoprgBI4A7qv+z7KLtqAAPIWNe0TkL+GPwRylwMhWgm+K23G'+
			'r+AnQEf5RddDyjaSxxQX6QFwd/lC04mpOB9cgERovngQ3AcuBp4D/A8cAoYBwyEx6mUM5Gel6dSoFrUwFWICY9DfYB04C7gVdiPtcLuAxYCBzjWeZlwD2lwEeiPeZuBD4EPJMizWnAEuAMj3JXAONKgQ+nHViHnrirka53v0Pa3siE6U0e5Z9UTrJeZQTwKHriLgbOwU1cgJcRE+QmjzpMKFuwUEFaWz+l/FYj4mrwTiJWqSy4txRYf8zVFDdgB/A6h3RPtXoXPZTiiwtwj2O6Y1pZ4DHAKvTEXUR9xAXZk+XCCb1Vq9E4VBDDwdFK+a0GPqKUVy02OKbr24otOBhztcTtpn4tN2AXsMchXZ9WE3gQumPu48DblfKKoy/QxyHdwVYSuIIsHGiJ+wBwrlJeSQzFrd4HWmUM1h5zu4GLlPKywfWHtLcVWvAY9MU9B8hy'+
			'AeETjun2NLvAQxB3Dy1xf0f24g5E3GFc2NHMAlcQm2t/pfyWA+8nW3FBTIeuLG/WMbgeY+77lPJKw5cI7c5wYFkzrkW3Iz62jTzmAkwEfuaR/l80obmwHfG80xL3fvIRdzp+4gL8AJpry04H4iitZfLrJptFjGomAT/1zOMVZLvRnmYZgztovOXHWkzEX1yALnqWNpuhBQ8FnqUcc8OchIzBDb8veixi8tMSdxHSLWctbid64s6gR1xo7BbcgX63nMeYq9lyX0QWRg7RqC24EU1+tdAUF+DC6v9oRIEDLz8tcVeRz5h7Bbrifp6Q01lAowncgZj8tMR9EFnnTRJ3GrKmfbxSudOBnyjlBfAp4Laad4wxjXJ1GGP2Gz26jTG9LMq9JJRmszHmVM/nmKj4DMYYc11ceXmLZnudYfIRd0KNtDuNMcMcn0Nb3NuTysxbOJ'+
			'vrKGPMNsUvZZmxE/etMXlsNcacmPI5pio+gzHGzLcpN2/xbK5uxS/lMcsyL7XIa1WKZ5ii+AymJz+rsvMWL+map/ildBvpDTTEDbjRIr/pOtU/xDctyjx0FXmh4yzkdUiDNditUJ0PLEuZ9yjg7zH3X0CcyTXoAj6TJkFRX5Neg/tu/mrux07ccchOybQsSrh/lUOetZhDSnGhuAJfgxgRfFkDTCBZ3EsRO7LL3uORwBdj7i8hnfN3LabiGOy0qAK77iIME3TLSdwA/NqzrBuJt0P/0CPv+T7piyhwO/AWzzwCw4HNBGOkZ1kgK1xxEWcfdcy3C/icY1qgmAJbxUGOYTHpTH5XAmcCSz3LjduUtxHx2E/DLBzG3GqKNovugzhauW672YwceuHKGmT27sIW4A1KeXcC33esx2EUrQW/A3dx/4fEtPDh47hblYYRHzDl'+
			'CEtPBF0oiQvFE9hHoJlIoDEfNgPXeqQ/L+beWov0t6PQLYcpmsCuOyr+hHw5GsxD9lW7EOdisj4hbSdwtWO5kWQt8Ghk5SeKNzrm2+WYLgrX15IRMffiepdZKHbLYbIU+DzgKSRcXy36Ibs1XHB9DYniYcd0g4n+TncC/63x/13AzY7lJZLVLHoIcnQbRAs8AFm3TTvJegkJMXTQrWo16YfsTDw2ZbrdyLPWCrfQG2nF4ZjTC5BVu7qRRQvuQLz8QN4H44gL1BnFVnTFBQkeus0hXVz9D/bkGzCVOosL8quqJx0cvvsx7gd1VM+VluMc0iTRRvrWC/KKFdUlmlCec/BbvrSmni24nSO3th5L9I9qP24tcQj+oXerOQH3+UDUMwzsue4jw1PS6iVwlJffAKJ3Ju5GDnpKSx/cPeCjOBe37+ZFDu+Gw5wCzEVOK8uMeg'+
			'gcRLMZUuPe0cQfJuVqVvusY7oopjumey7m3jrgK475OqMtcOBZHzcTjrPzJi0GRPFh9E4hOx24wDHt0zH3XCaQ3mgKPBQ7j4M489xqj/Lv9Egbxmfy86RSHdTQEjgI7GnjcRAX8+khosewJM4HvuuYNuAbuK+Hv4x4ShQKDYEriKXEdovNuJhyd+P3JXUCX3dMOwn4qkfZS5FFl0LhK7CLl19/4G0x93093L8G3AWcnSKNRtiERzzT1wUfgX0Ce8aF3v0t/i3hk9i3xivRCZtgfex6lrgKXEHsm66BPS+OuWeQFujDPMR4n0Qn8GPPskBOAV+nkI86LsYGrTMOBhF9cvWpuJ82cicwxeJzGt1ywGASjlrPi7QtWPMsv9r+rMJm4FaHPFeSvbi3UlBxIV0L1j7L7wHkRLA41hO/QSDMEuxC/F6F3u6PZ9DZdls3bFuw'+
			'dmDPFSSLCzLbtjHbfQs7caeiJ+4B8onrkQ4LD7WKMWafonecrZdfcI1KyO9XlvlMUnwGY4z5dIpnyO1K+sAIoy+ujfN19XVTRH4rLNNri3ubwzMUTuBBxpgtil/KYuMmbnDNrsrvLst0nYrPYIwxczyeoTACH2eMeUHxS1mtVOELjDF7jDE/svz8FYrPYIyEYchdtDRX1Cy6m/jlxDRox348GbuJl+arEIghY6ZifplQaxY9m+KKC/mIewcNKC4c+R48FtmNocEi6nvcWxQzkO2oWlwP3KSYX6ZUC7wMsav60sjBtMPMAL6nmF/mhAUeg86CeV7xluvRLU9TzC8XwmOwRjcUnOWXR2BPTXEX0gTiwqsCjwY+4JnXErI7yy+MdmDPmehFxsmdQGDfBwqi2WTNJHTHyOvx39dVKIIxeBuHO0Wl4XkkbIK2f1AS2mPuQp'+
			'qo5Qa0IZMrV3H3IbsQsxZ3GvqLGE0nLoifkI3ZLorJiHE+S6ag6/A9DZkxNyVtxAcOiWMH8EvFutgwCV0x5irnVzjacA87lPUmM61DowIWkoOvUNa0UdtJzIYs9wFrnOUXZi5NOuZW0xs3R2eAv2lWJAbtV6GmHnOracM98NguzYpEoN0tL6CFxAUReL9j2nqETgijfWjUQjKIiVE02qgdEcaGN2tWpArNs/xAVqhaYsytpg0JXeTCezUrEmIiusuFM2hge64vbbi7iFQ0K9JDPbrlhrbn+tKGe9iEQegGFNE+y6+LFu2Ww/Qyxvhs09mLuG78w7Me09FtaQ2/E0OLwJq0Hfe4UJuQIJyuBgdtq1BD76HSJrAH+xxKMRwJ5zsw6YM1uA795cdS3BCBwL7WmbFInI4LsQtHOBK4G90oqwsox9wjCG+6W0qNE6Qd2IK4'+
			'hi5BPBL/jfgTn4bs17qI+AMsXGip5cc0hAUOwjJoswsJ0uK6JJrEXFrAKuRK9b7oR6jfAkY9aMptNppUu658IZdauDGHUtxEqgVeC9ySQz3S4nyWX6sR5V34ZySYdxGpexj8ZiJK4AHABuQshCJRjrkpiQrC8hJyQOTWiPt5MItS3NQkhVEajngtuKxSaTIZXfeUliEpjNImZCx2PQlMg2spxXXGJk7WVmQpUiu+lC3PImfyfifjcpuKNKEMrwbGA7+vU10CDiDmvpFIaMISD1xPPrscWRQ5U7Eue5FZ8rfxP0W0pAffo+0mI2F7fXyLNwK/QAz0hQ3q2ahonV04HAnVP77n38H5SP2Qc40OIl3vHsT4sB2JV7kSeEKjAiW1+T+SupENPZqoEQAAAABJRU5ErkJggg==';
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
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uc544\uc774\ucf58-off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off0.style.transition='';
				if (me._off0.ggCurrentLogicStateVisible == 0) {
					me._off0.style.visibility=(Number(me._off0.style.opacity)>0||!me._off0.style.opacity)?'inherit':'hidden';
					me._off0.ggVisible=true;
				}
				else {
					me._off0.style.visibility="hidden";
					me._off0.ggVisible=false;
				}
			}
		}
		me._off0.logicBlock_visible();
		me._off0.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me._off0);
		me.__10.appendChild(me.__60);
		me.__9.appendChild(me.__10);
		me.__8.appendChild(me.__9);
		me.divSkin.appendChild(me.__8);
		el=me.__1=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 310px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 14.58%;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1.style.transition='';
				if (me.__1.ggCurrentLogicStateVisible == 0) {
					me.__1.style.visibility="hidden";
					me.__1.ggVisible=false;
				}
				else if (me.__1.ggCurrentLogicStateVisible == 1) {
					me.__1.style.visibility="hidden";
					me.__1.ggVisible=false;
				}
				else {
					me.__1.style.visibility="hidden";
					me.__1.ggVisible=false;
				}
			}
		}
		me.__1.logicBlock_visible();
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 12px 24px 0 rgb(0 0 0 \/ 10%); box-sizing:border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \uc6b0\uce21 \ud68c\uc0c9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(77,77,77,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 10px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 113px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_0=document.createElement('div');
		els=me.__1_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uce35 \uc124\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(254,254,254,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_0.ggUpdateText();
		player.addListener('changenode', function() {
			me.__1_0.ggUpdateText();
		});
		el.appendChild(els);
		me.__1_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_0.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me.__1_0);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		el.ggId="\ub4dc\ub86d\ub2e4\uc6b4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 999;';
		hs+='background : rgba(153,153,153,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_=document.createElement('div');
		els=me.__1___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4 1\uce35 \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 79.646%;';
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
		me.__1_.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_.ggUpdateText();
		el.appendChild(els);
		me.__1_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_.onclick=function (e) {
			player.openNext("{node26}","");
		}
		me.__1_.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me.__1_);
		el=me.__2_=document.createElement('div');
		els=me.__2___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4 2\uce35 \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
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
		me.__2_.ggUpdateText=function() {
			var params = [];
			var hs = player._("2\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_.ggUpdateText();
		el.appendChild(els);
		me.__2_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__2_.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me.__2_);
		me._container_2.appendChild(me.__7);
		me.__6.appendChild(me._container_2);
		me.__2.appendChild(me.__6);
		el=me.__4=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \uc88c\uce21 \uc81c\ubaa9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5=document.createElement('div');
		els=me.__5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(252,252,252,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 20px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__5.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5.ggUpdateText();
		player.addListener('changenode', function() {
			me.__5.ggUpdateText();
		});
		el.appendChild(els);
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABIdJREFUeF7tnWFu2zAMhe2TbT3Z1pOtO5kGphIgBHYjl++RT5rzp0DiOrY+fSRNOcm+3Q+pEdiljuY+mG0qIKWUn5WZ/f3R8WvP21Mf9fm/3esf+76356WxywOpEH51IDwD+m7AlOFIAukg9DPfA+Lofw3Otu/7b/SOPfuTAhIE4nm83pWgyAAppfzZto1pxKuJKwEmHUgpxUJGyxGvBi3i9VQwqUAErDgDnAYlBUhSrrhql1Vjb1f/ybt9OJAKw/LFLI+3yDI5FIhgvhidFGEhLAzIhGY8wwoxJRJIGZ2OwtvRoYQAEa6mrrKnJ3o6kInzxhksKhQqkAVhNEi0JM8GwswbR232NmDWmqe2YfZ9p4wdZac2KiQ7GgSboS/XN2'+
			'plZ2AYrRmKJUwgaDtcA0CaIPCqiwIEfPIuEM+ZGXxs8AQPBwK+AITCaHDAUKCWMICg2ukUGAQoUEsYQBC5gwoDDQVZcUGBgMJVCAwwFFjYQgNxhyvkbBvti5RSvFbDwhYaiPfEQu0AWrImkAw7OijemywgYQtmCKCUTLGjA2JX9J6VzLWAZNpRWz1eIJAJJWNINpAKxRO25ICkn8xoVXW2nXMhDZLYkYasAMRTtssB8ZS8EN0BhnjyyFJAIBVKMhC7k94dcdw76MpGjyEqQDwhSw7InUMAt54iDbmBLAQEkhABOSR9UiENSY+/ACCePAipFGWAbNuWmthVenFIIJ4a3iZ3atgCAIFMKBiQ2gvyKG+7gJzU1dAFgAEpee240UA8STHNEgAQSP5gAPGGLTsm2MmNmAKAAT1mqCGgsBUWukA3ZcDCFdwQwJpCm9QhCR5w'+
			'cwPUDhYQRNh65JMavl7eVD0SmvptwJ8ChoZYeMgChq02htATRoWpdnCIDm8/WVhAXFftBzPeDQVsBWWyUEIWqB1/FoUug2F+RgRtBxuI95rkq9RgecW+oOyRX/oP7xx8yRnrk1SXJ8dIrqOErJpHUMl95DzCt2HYQTUEWAKHD/bAG1LsiACypCUsO+hAFrWEZkcUkNUsmRvIYpZQYYQYsljFtQaQRSyhwwgzZBFL1gIyuyXMUpfeXDy7sEJ3Wgcu4FCbhNgRGrLITUfUwB/uJ8qOLCDo1jwVRvQaP625+NUogZZO2SAe+4+0I8WQmtxnsSQsd7TZlWJIheK9qY5uSLQdaYZMUgKH25ENRLrpmGFHKhBxS1LsUAAiaUmWHelARC1Js0MFiJol/zcQMUtSYUgYItaav4F0TUfmjXUjF5HpMGQMEbHkBvI8bZ1fjzRiwe'+
			'k2maVuf1BpvayjkUlcwJKwQypkdbkkvOmoYocqkOjWvIwdkkCiW/NKdigDibJEyg5ZIFGWqNmhDoR9oShnhzoQatNR0Q5pIOSmo6QdMwChWKJqhzwQkiWydswCBG3JDcTV9fv8kUpUxSUNYwpDwK35G4jXjq7p6L16l4cxjSGAVcWQ799CTD6p9ZCRE/pGPpkGxnSGfCN8TRGmZFcMRwzpt6lfYGm/nW4PK48v/bz31feL2H66kBUxKJnvcQPJHP2D9/4H6i15g3WNZLcAAAAASUVORK5CYII=';
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
		el.ggId="Image 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._image_7);
		me.__4.appendChild(me.__5);
		me.__2.appendChild(me.__4);
		el=me.__3=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 \ucee8\ud14c\uc774\ub108";
		el.ggDx=0;
		el.ggDy=23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 72.2581%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72.2581% + 0px) / 2) + 23px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._on=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='over-flow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on.style.transition='';
				if (me._on.ggCurrentLogicStateVisible == 0) {
					me._on.style.visibility=(Number(me._on.style.opacity)>0||!me._on.style.opacity)?'inherit':'hidden';
					me._on.ggVisible=true;
				}
				else {
					me._on.style.visibility="hidden";
					me._on.ggVisible=false;
				}
			}
		}
		me._on.logicBlock_visible();
		me._on.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._on);
		el=me._off=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='over-flow:hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off.style.transition='';
				if (me._off.ggCurrentLogicStateVisible == 0) {
					me._off.style.visibility=(Number(me._off.style.opacity)>0||!me._off.style.opacity)?'inherit':'hidden';
					me._off.ggVisible=true;
				}
				else {
					me._off.style.visibility="hidden";
					me._off.ggVisible=false;
				}
			}
		}
		me._off.logicBlock_visible();
		me._off.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._off);
		me.__2.appendChild(me.__3);
		me.__1.appendChild(me.__2);
		me.divSkin.appendChild(me.__1);
		el=me._videocontainer=document.createElement('div');
		el.ggId="video-container";
		el.ggDx=-2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 65%;';
		hs+='left : calc(50% - ((65% + 0px) / 2) - 2%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((65% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 65%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._videocontainer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._videocontainer.logicBlock_visible = function() {
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
			if (me._videocontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._videocontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._videocontainer.style.transition='';
				if (me._videocontainer.ggCurrentLogicStateVisible == 0) {
					me._videocontainer.style.visibility="hidden";
					me._videocontainer.ggVisible=false;
				}
				else {
					me._videocontainer.style.visibility="hidden";
					me._videocontainer.ggVisible=false;
				}
			}
		}
		me._videocontainer.logicBlock_visible();
		me._videocontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._videobg=document.createElement('div');
		el.ggId="video-bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._videobg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._videobg.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_1=document.createElement('div');
		me._video_1.seekbars = [];
			me._video_1.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1.ggVideoNotLoaded == false && me._video_1.ggDeactivate && player.isPlaying('video_1')) { me._video_1.ggDeactivate(); }
				me._video_1.ggVideoNotLoaded = true;
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('iframe');
			me._video_1__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=0&amp;controls=1&amp;loop=1&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_1__vid.setAttribute('src', ggVideoUrl);
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__vid.setAttribute('allow', 'autoplay');
			me._video_1__vid.setAttribute('allowfullscreen', 'true');
			me._video_1__vid.setAttribute('style', 'border:none; ; ;');
			me._video_1.appendChild(me._video_1__vid);
			me._video_1.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_1.ggYoutubeApiReady();}
		}
		el.ggId="Video 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_1.ggUpdatePosition=function (useTransition) {
		}
		me._videobg.appendChild(me._video_1);
		me._videocontainer.appendChild(me._videobg);
		me.divSkin.appendChild(me._videocontainer);
		me.__154.logicBlock_position();
		me.__150.logicBlock_visible();
		me._aesthetic_therapy.logicBlock_textcolor();
		me._endoscope.logicBlock_textcolor();
		me._extracorporeal.logicBlock_textcolor();
		me.__room.logicBlock_visible();
		me.__139.logicBlock_visible();
		me._text_7.logicBlock_visible();
		me._text_8.logicBlock_visible();
		me.__137.logicBlock_visible();
		me._image_2.logicBlock_size();
		me.__136.logicBlock_visible();
		me.__222.logicBlock_visible();
		me._text_72.logicBlock_visible();
		me._text_82.logicBlock_visible();
		me.__216.logicBlock_visible();
		me.__215.logicBlock_visible();
		me.__315.logicBlock_visible();
		me._text_73.logicBlock_visible();
		me._text_83.logicBlock_visible();
		me.__39.logicBlock_visible();
		me.__37.logicBlock_visible();
		me.__413.logicBlock_visible();
		me._text_74.logicBlock_visible();
		me._text_84.logicBlock_visible();
		me.__47.logicBlock_visible();
		me.__46.logicBlock_visible();
		me.__513.logicBlock_visible();
		me._text_75.logicBlock_visible();
		me._text_85.logicBlock_visible();
		me.__57.logicBlock_visible();
		me.__56.logicBlock_visible();
		me.__611.logicBlock_visible();
		me._text_76.logicBlock_visible();
		me._text_86.logicBlock_visible();
		me.__67.logicBlock_visible();
		me.__66.logicBlock_visible();
		me.__712.logicBlock_visible();
		me._text_77.logicBlock_visible();
		me._text_87.logicBlock_visible();
		me.__76.logicBlock_visible();
		me.__75.logicBlock_visible();
		me.__812.logicBlock_visible();
		me._text_78.logicBlock_visible();
		me._text_88.logicBlock_visible();
		me.__912.logicBlock_visible();
		me._text_79.logicBlock_visible();
		me._text_89.logicBlock_visible();
		me.__96.logicBlock_visible();
		me.__95.logicBlock_visible();
		me.__1012.logicBlock_visible();
		me._text_710.logicBlock_visible();
		me._text_810.logicBlock_visible();
		me.__106.logicBlock_visible();
		me.__105.logicBlock_visible();
		me.__1112.logicBlock_visible();
		me.__118.logicBlock_visible();
		me.__117.logicBlock_visible();
		me.__1212.logicBlock_visible();
		me._text_712.logicBlock_visible();
		me._text_812.logicBlock_visible();
		me.__126.logicBlock_visible();
		me.__125.logicBlock_visible();
		me.__8.logicBlock_position();
		me.__8.logicBlock_size();
		me.__8.logicBlock_visible();
		me.__50.logicBlock_size();
		me.__50.logicBlock_backgroundcolor();
		me.__32.logicBlock_visible();
		me.__31.logicBlock_visible();
		me._image_6.logicBlock_visible();
		me.__26.logicBlock_position();
		me.__110.logicBlock_size();
		me.__110.logicBlock_backgroundcolor();
		me.__28.logicBlock_visible();
		me.__27.logicBlock_visible();
		me._image_8.logicBlock_visible();
		me.__23.logicBlock_position();
		me.__onoff_.logicBlock_size();
		me.__onoff_.logicBlock_visible();
		me.__onoff_.logicBlock_backgroundcolor();
		me.__on_.logicBlock_visible();
		me.__25.logicBlock_visible();
		me.__24.logicBlock_visible();
		me.__20.logicBlock_position();
		me.__30.logicBlock_size();
		me.__30.logicBlock_backgroundcolor();
		me.__22.logicBlock_visible();
		me.__21.logicBlock_visible();
		me._image_9.logicBlock_visible();
		me.__17.logicBlock_position();
		me.__40.logicBlock_size();
		me.__40.logicBlock_backgroundcolor();
		me.__19.logicBlock_visible();
		me.__18.logicBlock_visible();
		me._image_10.logicBlock_visible();
		me.__13.logicBlock_position();
		me.__14.logicBlock_size();
		me.__14.logicBlock_backgroundcolor();
		me.__16.logicBlock_visible();
		me.__15.logicBlock_visible();
		me._image_12.logicBlock_visible();
		me.__10.logicBlock_position();
		me.__10.logicBlock_size();
		me.__60.logicBlock_size();
		me.__60.logicBlock_backgroundcolor();
		me.__12.logicBlock_visible();
		me.__11.logicBlock_visible();
		me._off0.logicBlock_visible();
		me.__1.logicBlock_visible();
		me._on.logicBlock_visible();
		me._off.logicBlock_visible();
		me._videocontainer.logicBlock_visible();
		me._video_1.ggInitMedia('wn2XGg1FwqU');
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me._aesthetic_therapy.logicBlock_textcolor();
			me._endoscope.logicBlock_textcolor();
			me._extracorporeal.logicBlock_textcolor();
			me._cloner_1.ggUpdateConditionNodeChange();
			me.__50.logicBlock_backgroundcolor();
			me.__31.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me.__110.logicBlock_backgroundcolor();
			me.__27.logicBlock_visible();
			me._image_8.logicBlock_visible();
			me.__onoff_.logicBlock_backgroundcolor();
			me.__on_.logicBlock_visible();
			me.__25.logicBlock_visible();
			me.__24.logicBlock_visible();
			me.__30.logicBlock_backgroundcolor();
			me.__21.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me.__40.logicBlock_backgroundcolor();
			me.__18.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me.__14.logicBlock_backgroundcolor();
			me.__15.logicBlock_visible();
			me._image_12.logicBlock_visible();
			me.__60.logicBlock_backgroundcolor();
			me.__11.logicBlock_visible();
			me._off0.logicBlock_visible();
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
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
			me.__8.logicBlock_visible();
			me.__50.logicBlock_backgroundcolor();
			me.__31.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me.__110.logicBlock_backgroundcolor();
			me.__27.logicBlock_visible();
			me._image_8.logicBlock_visible();
			me.__onoff_.logicBlock_visible();
			me.__onoff_.logicBlock_backgroundcolor();
			me.__30.logicBlock_backgroundcolor();
			me.__21.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me.__40.logicBlock_backgroundcolor();
			me.__18.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me.__14.logicBlock_backgroundcolor();
			me.__15.logicBlock_visible();
			me._image_12.logicBlock_visible();
			me.__60.logicBlock_backgroundcolor();
			me.__11.logicBlock_visible();
			me._off0.logicBlock_visible();
			me.__1.logicBlock_visible();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
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
			if (hotspotTemplates.hasOwnProperty('point2')) {
				for(var i = 0; i < hotspotTemplates['point2'].length; i++) {
					hotspotTemplates['point2'][i].ggEvent_hsproxyclick();
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
			if (hotspotTemplates.hasOwnProperty('point2')) {
				for(var i = 0; i < hotspotTemplates['point2'].length; i++) {
					hotspotTemplates['point2'][i].ggEvent_hsproxydblclick();
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
			if (hotspotTemplates.hasOwnProperty('point2')) {
				for(var i = 0; i < hotspotTemplates['point2'].length; i++) {
					hotspotTemplates['point2'][i].ggEvent_hsproxyout();
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
			if (hotspotTemplates.hasOwnProperty('point2')) {
				for(var i = 0; i < hotspotTemplates['point2'].length; i++) {
					hotspotTemplates['point2'][i].ggEvent_hsproxyover();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__154.logicBlock_position();
			me.__150.logicBlock_visible();
			me.__room.logicBlock_visible();
			me.__139.logicBlock_visible();
			me.__137.logicBlock_visible();
			me._image_2.logicBlock_size();
			me.__136.logicBlock_visible();
			me.__222.logicBlock_visible();
			me.__216.logicBlock_visible();
			me.__215.logicBlock_visible();
			me.__315.logicBlock_visible();
			me.__39.logicBlock_visible();
			me.__37.logicBlock_visible();
			me.__413.logicBlock_visible();
			me.__47.logicBlock_visible();
			me.__46.logicBlock_visible();
			me.__513.logicBlock_visible();
			me.__57.logicBlock_visible();
			me.__56.logicBlock_visible();
			me.__611.logicBlock_visible();
			me.__67.logicBlock_visible();
			me.__66.logicBlock_visible();
			me.__712.logicBlock_visible();
			me.__76.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__812.logicBlock_visible();
			me.__912.logicBlock_visible();
			me.__96.logicBlock_visible();
			me.__95.logicBlock_visible();
			me.__1012.logicBlock_visible();
			me.__106.logicBlock_visible();
			me.__105.logicBlock_visible();
			me.__1112.logicBlock_visible();
			me.__118.logicBlock_visible();
			me.__117.logicBlock_visible();
			me.__1212.logicBlock_visible();
			me.__126.logicBlock_visible();
			me.__125.logicBlock_visible();
			me.__8.logicBlock_position();
			me.__8.logicBlock_size();
			me.__8.logicBlock_visible();
			me.__50.logicBlock_size();
			me.__26.logicBlock_position();
			me.__110.logicBlock_size();
			me.__23.logicBlock_position();
			me.__onoff_.logicBlock_size();
			me.__onoff_.logicBlock_visible();
			me.__20.logicBlock_position();
			me.__30.logicBlock_size();
			me.__17.logicBlock_position();
			me.__40.logicBlock_size();
			me.__13.logicBlock_position();
			me.__14.logicBlock_size();
			me.__10.logicBlock_position();
			me.__10.logicBlock_size();
			me.__60.logicBlock_size();
			me.__1.logicBlock_visible();
			me._videocontainer.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg', function(event) {
			me.__110.logicBlock_backgroundcolor();
			me.__27.logicBlock_visible();
			me._image_8.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_1', function(event) {
			me.__onoff_.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_buttonbg_2', function(event) {
			me.__30.logicBlock_backgroundcolor();
			me.__21.logicBlock_visible();
			me._image_9.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_3', function(event) {
			me.__40.logicBlock_backgroundcolor();
			me.__18.logicBlock_visible();
			me._image_10.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_4', function(event) {
			me.__50.logicBlock_backgroundcolor();
			me.__31.logicBlock_visible();
			me._image_6.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_5', function(event) {
			me.__14.logicBlock_backgroundcolor();
			me.__15.logicBlock_visible();
			me._image_12.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_6', function(event) {
			me.__60.logicBlock_backgroundcolor();
			me.__11.logicBlock_visible();
			me._off0.logicBlock_visible();
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
	function SkinHotspotClass_point2(parentScope,hotspot) {
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
		el=me._point2=document.createElement('div');
		el.ggId="point2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 74px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._point2.ggIsActive=function() {
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
		me._point2.onclick=function (e) {
			player.openNext("","0\/0\/0");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._point2.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._point2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['point2']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._point2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['point2']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._point2.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['point2']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['point2']=true;
			}
		}
		me._point2.ggUpdatePosition=function (useTransition) {
		}
			me.ggEvent_hsproxyclick=function() {
				if (event.id=='이동') {
					me._point2.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='이동') {
					me._point2.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='이동') {
					me._point2.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='이동') {
					me._point2.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._point2.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._point2;
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
			player.openNext(player._(me.hotspot.url),"$(cur)");
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
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
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
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lottie_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lottie_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStatePosition == 0) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else if (me._lottie_2.ggCurrentLogicStatePosition == 1) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else {
					me._lottie_2.style.left='-30px';
					me._lottie_2.style.top='-20px';
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
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
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
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		els=me.__0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
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
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__0.ggUpdateText();
		player.addListener('changenode', function() {
			me.__0.ggUpdateText();
		});
		el.appendChild(els);
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
			return me.ggNodeId;
		}
		me.__0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__0.ggCurrentLogicStatePosition == 0) {
					me.__0.style.left = 'calc(50% - (50px / 2))';
					me.__0.style.bottom='0px';
				}
				else {
					me.__0.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__0.style.bottom='-28px';
				}
			}
		}
		me.__0.logicBlock_position();
		me.__0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__0.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__0.ggCurrentLogicStateSize = newLogicStateSize;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__0.ggCurrentLogicStateSize == 0) {
					me.__0.style.width='95px';
					me.__0.style.height='25px';
					me.__0.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__0);
				}
				else if (me.__0.ggCurrentLogicStateSize == 1) {
					me.__0.style.width='60px';
					me.__0.style.height='25px';
					me.__0.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__0);
				}
				else if (me.__0.ggCurrentLogicStateSize == 2) {
					me.__0.style.width='60px';
					me.__0.style.height='25px';
					me.__0.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__0);
				}
				else {
					me.__0.style.width='50px';
					me.__0.style.height='25px';
					me.__0.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__0);
				}
			}
		}
		me.__0.logicBlock_size();
		me.__0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__0.ggCurrentLogicStateVisible == 0) {
					me.__0.style.visibility=(Number(me.__0.style.opacity)>0||!me.__0.style.opacity)?'inherit':'hidden';
					me.__0.ggVisible=true;
				}
				else if (me.__0.ggCurrentLogicStateVisible == 1) {
					me.__0.style.visibility=(Number(me.__0.style.opacity)>0||!me.__0.style.opacity)?'inherit':'hidden';
					me.__0.ggVisible=true;
				}
				else {
					me.__0.style.visibility="hidden";
					me.__0.ggVisible=false;
				}
			}
		}
		me.__0.logicBlock_visible();
		me.__0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__0.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__0.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__0.logicBlock_backgroundcolor();
		me.__0.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__0.ggCurrentLogicStateText != newLogicStateText) {
				me.__0.ggCurrentLogicStateText = newLogicStateText;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__0.ggCurrentLogicStateText == 0) {
					if (me.__0.ggUpdateText) {
					me.__0.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__0.ggUpdateText();
					} else {
						if (me.__0.ggUpdatePosition) me.__0.ggUpdatePosition();
					}
				}
				else {
					if (me.__0.ggUpdateText) {
					me.__0.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__0.ggUpdateText();
					} else {
						if (me.__0.ggUpdatePosition) me.__0.ggUpdatePosition();
					}
				}
			}
		}
		me.__0.logicBlock_text();
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__0);
		el=me.__=document.createElement('div');
		els=me.____text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text menu";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
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
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__.ggUpdateText();
		player.addListener('changenode', function() {
			me.__.ggUpdateText();
		});
		el.appendChild(els);
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
			return me.ggNodeId;
		}
		me.__.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__.ggCurrentLogicStatePosition == 0) {
					me.__.style.left = 'calc(50% - (60px / 2))';
					me.__.style.bottom='0px';
				}
				else if (me.__.ggCurrentLogicStatePosition == 1) {
					me.__.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -5px)';
					me.__.style.bottom='40px';
				}
				else {
					me.__.style.left='calc(50% - ((60px + 0px) / 2) + 0px)';
					me.__.style.bottom='-40px';
				}
			}
		}
		me.__.logicBlock_position();
		me.__.logicBlock_size = function() {
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
			else if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__.ggCurrentLogicStateSize = newLogicStateSize;
				me.__.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__.ggCurrentLogicStateSize == 0) {
					me.__.style.width='50px';
					me.__.style.height='25px';
					me.__.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__);
				}
				else if (me.__.ggCurrentLogicStateSize == 1) {
					me.__.style.width='50px';
					me.__.style.height='25px';
					me.__.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__);
				}
				else if (me.__.ggCurrentLogicStateSize == 2) {
					me.__.style.width='95px';
					me.__.style.height='25px';
					me.__.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__);
				}
				else {
					me.__.style.width='60px';
					me.__.style.height='30px';
					me.__.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__);
				}
			}
		}
		me.__.logicBlock_size();
		me.__.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__.ggCurrentLogicStateVisible == 0) {
					me.__.style.visibility="hidden";
					me.__.ggVisible=false;
				}
				else if (me.__.ggCurrentLogicStateVisible == 1) {
					me.__.style.visibility="hidden";
					me.__.ggVisible=false;
				}
				else {
					me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
					me.__.ggVisible=true;
				}
			}
		}
		me.__.logicBlock_visible();
		me.__.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__.ggCurrentLogicStateBackgroundColor == 0) {
					me.__.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__.logicBlock_backgroundcolor();
		me.__.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__.ggCurrentLogicStateText != newLogicStateText) {
				me.__.ggCurrentLogicStateText = newLogicStateText;
				me.__.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__.ggCurrentLogicStateText == 0) {
					if (me.__.ggUpdateText) {
					me.__.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__.ggUpdateText();
					} else {
						if (me.__.ggUpdatePosition) me.__.ggUpdatePosition();
					}
				}
				else {
					if (me.__.ggUpdateText) {
					me.__.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__.ggUpdateText();
					} else {
						if (me.__.ggUpdatePosition) me.__.ggUpdatePosition();
					}
				}
			}
		}
		me.__.logicBlock_text();
		me.__.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__);
		me._lottie_2.appendChild(me._container_6);
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
		me.__0.logicBlock_position();
		me.__0.logicBlock_size();
		me.__0.logicBlock_visible();
		me.__0.logicBlock_backgroundcolor();
		me.__0.logicBlock_text();
		me.__.logicBlock_position();
		me.__.logicBlock_size();
		me.__.logicBlock_visible();
		me.__.logicBlock_backgroundcolor();
		me.__.logicBlock_text();
			me.ggEvent_activehotspotchanged=function() {
				me.__0.logicBlock_size();
				me.__0.logicBlock_backgroundcolor();
				me.__0.logicBlock_text();
				me.__.logicBlock_size();
				me.__.logicBlock_backgroundcolor();
				me.__.logicBlock_text();
			};
			me.ggEvent_changenode=function() {
				me.__0.logicBlock_size();
				me.__0.logicBlock_backgroundcolor();
				me.__0.logicBlock_text();
				me.__.logicBlock_size();
				me.__.logicBlock_backgroundcolor();
				me.__.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__0.logicBlock_size();
				me.__0.logicBlock_visible();
				me.__0.logicBlock_backgroundcolor();
				me.__0.logicBlock_text();
				me.__.logicBlock_position();
				me.__.logicBlock_size();
				me.__.logicBlock_visible();
				me.__.logicBlock_backgroundcolor();
				me.__.logicBlock_text();
			};
			me.ggEvent_hotspotsupdated=function() {
				me.__0.logicBlock_position();
				me.__.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__0.logicBlock_size();
				me.__0.logicBlock_visible();
				me.__.logicBlock_size();
				me.__.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_node.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	function SkinHotspotClass__111(parentScope,hotspot) {
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
		el=me.__111=document.createElement('div');
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
		me.__111.ggIsActive=function() {
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
		me.__111.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__111.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__111.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_111']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__111.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_111']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__111.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_111']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_111']=true;
			}
		}
		me.__111.ggUpdatePosition=function (useTransition) {
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
		me.__111.appendChild(me._external_12);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_12.style.width=hotspot.customimagewidth + 'px';
			me._external_12.style.height=hotspot.customimageheight + 'px';
		}
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__111.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__111;
	};
	function SkinHotspotClass__120(parentScope,hotspot) {
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
		el=me.__120=document.createElement('div');
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
		me.__120.ggIsActive=function() {
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
		me.__120.onclick=function (e) {
			skin.__121.ggVisible = !skin.__121.ggVisible;
			var flag=skin.__121.ggVisible;
			skin.__121.style.transition='none';
			skin.__121.style.visibility=((flag)&&(Number(skin.__121.style.opacity)>0||!skin.__121.style.opacity))?'inherit':'hidden';
			skin.__145.style.transition='none';
			skin.__145.style.visibility='hidden';
			skin.__145.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__120.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__120.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_120']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__120.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_120']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__120.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_120']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_120']=true;
			}
		}
		me.__120.ggUpdatePosition=function (useTransition) {
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
		me.__120.appendChild(me._external_120);
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
					me.__120.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명11') {
					me.__120.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명11') {
					me.__120.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명11') {
					me.__120.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__120.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__120;
	};
	function SkinHotspotClass__112(parentScope,hotspot) {
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
		el=me.__112=document.createElement('div');
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
		me.__112.ggIsActive=function() {
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
		me.__112.onclick=function (e) {
			skin.__113.ggVisible = !skin.__113.ggVisible;
			var flag=skin.__113.ggVisible;
			skin.__113.style.transition='none';
			skin.__113.style.visibility=((flag)&&(Number(skin.__113.style.opacity)>0||!skin.__113.style.opacity))?'inherit':'hidden';
			skin.__145.style.transition='none';
			skin.__145.style.visibility='hidden';
			skin.__145.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__112.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__112.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_112']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__112.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_112']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__112.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_112']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_112']=true;
			}
		}
		me.__112.ggUpdatePosition=function (useTransition) {
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
		me.__112.appendChild(me._external_11);
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
					me.__112.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명11') {
					me.__112.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명11') {
					me.__112.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명11') {
					me.__112.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__112.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__112;
	};
	function SkinHotspotClass__100(parentScope,hotspot) {
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
		el=me.__100=document.createElement('div');
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
		me.__100.ggIsActive=function() {
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
		me.__100.onclick=function (e) {
			skin.__81.ggVisible = !skin.__81.ggVisible;
			var flag=skin.__81.ggVisible;
			skin.__81.style.transition='none';
			skin.__81.style.visibility=((flag)&&(Number(skin.__81.style.opacity)>0||!skin.__81.style.opacity))?'inherit':'hidden';
			skin.__145.style.transition='none';
			skin.__145.style.visibility='hidden';
			skin.__145.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__100.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__100.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_100']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__100.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_100']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__100.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_100']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_100']=true;
			}
		}
		me.__100.ggUpdatePosition=function (useTransition) {
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
		me.__100.appendChild(me._external_10);
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
					me.__100.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명10') {
					me.__100.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명10') {
					me.__100.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명10') {
					me.__100.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__100.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__100;
	};
	function SkinHotspotClass__90(parentScope,hotspot) {
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
		el=me.__90=document.createElement('div');
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
		me.__90.ggIsActive=function() {
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
		me.__90.onclick=function (e) {
			skin.__91.ggVisible = !skin.__91.ggVisible;
			var flag=skin.__91.ggVisible;
			skin.__91.style.transition='none';
			skin.__91.style.visibility=((flag)&&(Number(skin.__91.style.opacity)>0||!skin.__91.style.opacity))?'inherit':'hidden';
			skin.__145.style.transition='none';
			skin.__145.style.visibility='hidden';
			skin.__145.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__90.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__90.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_90']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__90.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_90']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__90.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_90']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_90']=true;
			}
		}
		me.__90.ggUpdatePosition=function (useTransition) {
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
		me.__90.appendChild(me._external_9);
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
					me.__90.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명9') {
					me.__90.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명9') {
					me.__90.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명9') {
					me.__90.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__90.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__90;
	};
	function SkinHotspotClass__80(parentScope,hotspot) {
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
		el=me.__80=document.createElement('div');
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
		me.__80.ggIsActive=function() {
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
		me.__80.onclick=function (e) {
			skin.__81.ggVisible = !skin.__81.ggVisible;
			var flag=skin.__81.ggVisible;
			skin.__81.style.transition='none';
			skin.__81.style.visibility=((flag)&&(Number(skin.__81.style.opacity)>0||!skin.__81.style.opacity))?'inherit':'hidden';
			skin.__145.style.transition='none';
			skin.__145.style.visibility='hidden';
			skin.__145.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__80.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__80.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_80']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__80.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_80']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__80.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_80']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_80']=true;
			}
		}
		me.__80.ggUpdatePosition=function (useTransition) {
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
		me.__80.appendChild(me._external_8);
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
					me.__80.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명8') {
					me.__80.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명8') {
					me.__80.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명8') {
					me.__80.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__80.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__80;
	};
	function SkinHotspotClass__70(parentScope,hotspot) {
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
		el=me.__70=document.createElement('div');
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
		me.__70.ggIsActive=function() {
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
		me.__70.onclick=function (e) {
			skin.__71.ggVisible = !skin.__71.ggVisible;
			var flag=skin.__71.ggVisible;
			skin.__71.style.transition='none';
			skin.__71.style.visibility=((flag)&&(Number(skin.__71.style.opacity)>0||!skin.__71.style.opacity))?'inherit':'hidden';
			skin.__145.style.transition='none';
			skin.__145.style.visibility='hidden';
			skin.__145.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__70.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__70.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_70']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__70.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_70']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__70.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_70']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_70']=true;
			}
		}
		me.__70.ggUpdatePosition=function (useTransition) {
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
		me.__70.appendChild(me._external_7);
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
					me.__70.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명7') {
					me.__70.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명7') {
					me.__70.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명7') {
					me.__70.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__70.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__70;
	};
	function SkinHotspotClass__61(parentScope,hotspot) {
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
		el=me.__61=document.createElement('div');
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
		me.__61.ggIsActive=function() {
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
		me.__61.onclick=function (e) {
			skin.__62.ggVisible = !skin.__62.ggVisible;
			var flag=skin.__62.ggVisible;
			skin.__62.style.transition='none';
			skin.__62.style.visibility=((flag)&&(Number(skin.__62.style.opacity)>0||!skin.__62.style.opacity))?'inherit':'hidden';
			skin.__145.style.transition='none';
			skin.__145.style.visibility='hidden';
			skin.__145.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__61.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__61.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_61']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__61.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_61']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__61.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_61']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_61']=true;
			}
		}
		me.__61.ggUpdatePosition=function (useTransition) {
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
		me.__61.appendChild(me._external_6);
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
					me.__61.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명6') {
					me.__61.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명6') {
					me.__61.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명6') {
					me.__61.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__61.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__61;
	};
	function SkinHotspotClass__51(parentScope,hotspot) {
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
		el=me.__51=document.createElement('div');
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
		me.__51.ggIsActive=function() {
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
		me.__51.onclick=function (e) {
			skin.__52.ggVisible = !skin.__52.ggVisible;
			var flag=skin.__52.ggVisible;
			skin.__52.style.transition='none';
			skin.__52.style.visibility=((flag)&&(Number(skin.__52.style.opacity)>0||!skin.__52.style.opacity))?'inherit':'hidden';
			skin.__145.style.transition='none';
			skin.__145.style.visibility='hidden';
			skin.__145.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__51.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__51.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_51']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__51.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_51']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__51.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_51']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_51']=true;
			}
		}
		me.__51.ggUpdatePosition=function (useTransition) {
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
		me.__51.appendChild(me._external_5);
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
					me.__51.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명5') {
					me.__51.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명5') {
					me.__51.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명5') {
					me.__51.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__51.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__51;
	};
	function SkinHotspotClass__41(parentScope,hotspot) {
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
		el=me.__41=document.createElement('div');
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
		me.__41.ggIsActive=function() {
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
		me.__41.onclick=function (e) {
			skin.__42.ggVisible = !skin.__42.ggVisible;
			var flag=skin.__42.ggVisible;
			skin.__42.style.transition='none';
			skin.__42.style.visibility=((flag)&&(Number(skin.__42.style.opacity)>0||!skin.__42.style.opacity))?'inherit':'hidden';
			skin.__145.style.transition='none';
			skin.__145.style.visibility='hidden';
			skin.__145.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__41.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__41.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_41']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__41.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_41']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__41.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_41']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_41']=true;
			}
		}
		me.__41.ggUpdatePosition=function (useTransition) {
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
		me.__41.appendChild(me._external_4);
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
					me.__41.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명4') {
					me.__41.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명4') {
					me.__41.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명4') {
					me.__41.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__41.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__41;
	};
	function SkinHotspotClass__33(parentScope,hotspot) {
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
		el=me.__33=document.createElement('div');
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
		me.__33.ggIsActive=function() {
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
		me.__33.onclick=function (e) {
			skin.__34.ggVisible = !skin.__34.ggVisible;
			var flag=skin.__34.ggVisible;
			skin.__34.style.transition='none';
			skin.__34.style.visibility=((flag)&&(Number(skin.__34.style.opacity)>0||!skin.__34.style.opacity))?'inherit':'hidden';
			skin.__145.style.transition='none';
			skin.__145.style.visibility='hidden';
			skin.__145.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__33.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__33.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_33']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__33.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_33']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__33.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_33']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_33']=true;
			}
		}
		me.__33.ggUpdatePosition=function (useTransition) {
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
		me.__33.appendChild(me._external_3);
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
					me.__33.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명3') {
					me.__33.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명3') {
					me.__33.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명3') {
					me.__33.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__33.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__33;
	};
	function SkinHotspotClass__210(parentScope,hotspot) {
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
		el=me.__210=document.createElement('div');
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
		me.__210.ggIsActive=function() {
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
		me.__210.onclick=function (e) {
			skin.__211.ggVisible = !skin.__211.ggVisible;
			var flag=skin.__211.ggVisible;
			skin.__211.style.transition='none';
			skin.__211.style.visibility=((flag)&&(Number(skin.__211.style.opacity)>0||!skin.__211.style.opacity))?'inherit':'hidden';
			skin.__145.style.transition='none';
			skin.__145.style.visibility='hidden';
			skin.__145.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__210.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__210.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_210']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__210.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_210']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__210.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_210']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_210']=true;
			}
		}
		me.__210.ggUpdatePosition=function (useTransition) {
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
		me.__210.appendChild(me._external_2);
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
					me.__210.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명2') {
					me.__210.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명2') {
					me.__210.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명2') {
					me.__210.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__210.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__210;
	};
	function SkinHotspotClass__130(parentScope,hotspot) {
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
		el=me.__130=document.createElement('div');
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
		me.__130.ggIsActive=function() {
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
		me.__130.onclick=function (e) {
			skin.__131.ggVisible = !skin.__131.ggVisible;
			var flag=skin.__131.ggVisible;
			skin.__131.style.transition='none';
			skin.__131.style.visibility=((flag)&&(Number(skin.__131.style.opacity)>0||!skin.__131.style.opacity))?'inherit':'hidden';
			skin.__145.style.transition='none';
			skin.__145.style.visibility='hidden';
			skin.__145.ggVisible=false;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__130.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__130.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_130']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__130.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_130']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__130.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_130']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_130']=true;
			}
		}
		me.__130.ggUpdatePosition=function (useTransition) {
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
		me.__130.appendChild(me._external_1);
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
					me.__130.onclick();
				}
			};
			me.ggEvent_hsproxydblclick=function() {
				if (event.id=='제품설명1') {
					me.__130.ondblclick();
				}
			};
			me.ggEvent_hsproxyout=function() {
				if (event.id=='제품설명1') {
					me.__130.onmouseout();
				}
			};
			me.ggEvent_hsproxyover=function() {
				if (event.id=='제품설명1') {
					me.__130.onmouseover();
				}
			};
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__130.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me.__130;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='제품설명1') {
				hotspot.skinid = '제품설명1';
				hsinst = new SkinHotspotClass__130(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명2') {
				hotspot.skinid = '제품설명2';
				hsinst = new SkinHotspotClass__210(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명3') {
				hotspot.skinid = '제품설명3';
				hsinst = new SkinHotspotClass__33(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명4') {
				hotspot.skinid = '제품설명4';
				hsinst = new SkinHotspotClass__41(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명5') {
				hotspot.skinid = '제품설명5';
				hsinst = new SkinHotspotClass__51(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명6') {
				hotspot.skinid = '제품설명6';
				hsinst = new SkinHotspotClass__61(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명7') {
				hotspot.skinid = '제품설명7';
				hsinst = new SkinHotspotClass__70(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명8') {
				hotspot.skinid = '제품설명8';
				hsinst = new SkinHotspotClass__80(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명9') {
				hotspot.skinid = '제품설명9';
				hsinst = new SkinHotspotClass__90(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명 10') {
				hotspot.skinid = '제품설명 10';
				hsinst = new SkinHotspotClass__100(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명11') {
				hotspot.skinid = '제품설명11';
				hsinst = new SkinHotspotClass__112(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품설명12') {
				hotspot.skinid = '제품설명12';
				hsinst = new SkinHotspotClass__120(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='제품표지판1') {
				hotspot.skinid = '제품표지판1';
				hsinst = new SkinHotspotClass__111(me, hotspot);
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
		{
				hotspot.skinid = 'point2';
				hsinst = new SkinHotspotClass_point2(me, hotspot);
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
		me.__143.ggUpdateConditionTimer();
		me.__142.ggUpdateConditionTimer();
		me.__226.ggUpdateConditionTimer();
		me.__225.ggUpdateConditionTimer();
		me.__319.ggUpdateConditionTimer();
		me.__318.ggUpdateConditionTimer();
		me.__417.ggUpdateConditionTimer();
		me.__416.ggUpdateConditionTimer();
		me.__517.ggUpdateConditionTimer();
		me.__516.ggUpdateConditionTimer();
		me.__615.ggUpdateConditionTimer();
		me.__614.ggUpdateConditionTimer();
		me.__716.ggUpdateConditionTimer();
		me.__715.ggUpdateConditionTimer();
		me.__816.ggUpdateConditionTimer();
		me.__815.ggUpdateConditionTimer();
		me.__916.ggUpdateConditionTimer();
		me.__915.ggUpdateConditionTimer();
		me.__1016.ggUpdateConditionTimer();
		me.__1015.ggUpdateConditionTimer();
		me.__1216.ggUpdateConditionTimer();
		me.__1215.ggUpdateConditionTimer();
		me.__50.ggUpdateConditionTimer();
		me.__110.ggUpdateConditionTimer();
		me.__onoff_.ggUpdateConditionTimer();
		me.__30.ggUpdateConditionTimer();
		me.__40.ggUpdateConditionTimer();
		me.__14.ggUpdateConditionTimer();
		me.__60.ggUpdateConditionTimer();
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