(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vo="167",rc=0,Jo=1,sc=2,qa=1,oc=2,En=3,Gn=0,je=1,Tn=2,zn=0,Di=1,Qo=2,ta=3,ea=4,ac=5,Qn=100,lc=101,cc=102,uc=103,hc=104,fc=200,dc=201,pc=202,mc=203,Os=204,Bs=205,gc=206,_c=207,vc=208,xc=209,Mc=210,Sc=211,yc=212,Ec=213,Tc=214,Ac=0,bc=1,wc=2,Xr=3,Rc=4,Cc=5,Pc=6,Lc=7,Ka=0,Dc=1,Uc=2,Hn=0,Ic=1,Nc=2,Fc=3,Oc=4,Bc=5,zc=6,Hc=7,$a=300,Fi=301,Oi=302,zs=303,Hs=304,Jr=306,Gs=1e3,ei=1001,Vs=1002,rn=1003,Gc=1004,gr=1005,hn=1006,cs=1007,ni=1008,wn=1009,Za=1010,Ja=1011,ir=1012,xo=1013,ii=1014,An=1015,rr=1016,Mo=1017,So=1018,Bi=1020,Qa=35902,tl=1021,el=1022,fn=1023,nl=1024,il=1025,Ui=1026,zi=1027,rl=1028,yo=1029,sl=1030,Eo=1031,To=1033,zr=33776,Hr=33777,Gr=33778,Vr=33779,ks=35840,Ws=35841,Xs=35842,Ys=35843,js=36196,qs=37492,Ks=37496,$s=37808,Zs=37809,Js=37810,Qs=37811,to=37812,eo=37813,no=37814,io=37815,ro=37816,so=37817,oo=37818,ao=37819,lo=37820,co=37821,kr=36492,uo=36494,ho=36495,ol=36283,fo=36284,po=36285,mo=36286,Vc=3200,kc=3201,Wc=0,Xc=1,Bn="",pn="srgb",kn="srgb-linear",Ao="display-p3",Qr="display-p3-linear",Yr="linear",ve="srgb",jr="rec709",qr="p3",di=7680,na=519,Yc=512,jc=513,qc=514,al=515,Kc=516,$c=517,Zc=518,Jc=519,ia=35044,ra="300 es",bn=2e3,Kr=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],us=Math.PI/180,go=180/Math.PI;function sr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function Qc(i,t){return(i%t+t)%t}function hs(i,t,e){return(1-e)*i+e*t}function Ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class le{constructor(t=0,e=0){le.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*r+t.x,this.y=o*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,r,o,a,l,u,f){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,a,l,u,f)}set(t,e,n,r,o,a,l,u,f){const p=this.elements;return p[0]=t,p[1]=r,p[2]=l,p[3]=e,p[4]=o,p[5]=u,p[6]=n,p[7]=a,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,a=n[0],l=n[3],u=n[6],f=n[1],p=n[4],v=n[7],_=n[2],M=n[5],E=n[8],A=r[0],m=r[3],d=r[6],U=r[1],w=r[4],L=r[7],J=r[2],O=r[5],N=r[8];return o[0]=a*A+l*U+u*J,o[3]=a*m+l*w+u*O,o[6]=a*d+l*L+u*N,o[1]=f*A+p*U+v*J,o[4]=f*m+p*w+v*O,o[7]=f*d+p*L+v*N,o[2]=_*A+M*U+E*J,o[5]=_*m+M*w+E*O,o[8]=_*d+M*L+E*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],a=t[4],l=t[5],u=t[6],f=t[7],p=t[8];return e*a*p-e*l*f-n*o*p+n*l*u+r*o*f-r*a*u}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],a=t[4],l=t[5],u=t[6],f=t[7],p=t[8],v=p*a-l*f,_=l*u-p*o,M=f*o-a*u,E=e*v+n*_+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(r*f-p*n)*A,t[2]=(l*n-r*a)*A,t[3]=_*A,t[4]=(p*e-r*u)*A,t[5]=(r*o-l*e)*A,t[6]=M*A,t[7]=(n*u-f*e)*A,t[8]=(a*e-n*o)*A,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,a,l){const u=Math.cos(o),f=Math.sin(o);return this.set(n*u,n*f,-n*(u*a+f*l)+a+t,-r*f,r*u,-r*(-f*a+u*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(fs.makeScale(t,e)),this}rotate(t){return this.premultiply(fs.makeRotation(-t)),this}translate(t,e){return this.premultiply(fs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fs=new Qt;function ll(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tu(){const i=$r("canvas");return i.style.display="block",i}const sa={};function nr(i){i in sa||(sa[i]=!0,console.warn(i))}function eu(i,t,e){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const oa=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),aa=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$i={[kn]:{transfer:Yr,primaries:jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[pn]:{transfer:ve,primaries:jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qr]:{transfer:Yr,primaries:qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(aa),fromReference:i=>i.applyMatrix3(oa)},[Ao]:{transfer:ve,primaries:qr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(aa),fromReference:i=>i.applyMatrix3(oa).convertLinearToSRGB()}},nu=new Set([kn,Qr]),ce={enabled:!0,_workingColorSpace:kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!nu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=$i[t].toReference,r=$i[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return $i[i].primaries},getTransfer:function(i){return i===Bn?Yr:$i[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray($i[t].luminanceCoefficients)}};function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pi;class iu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=$r("canvas")),pi.width=t.width,pi.height=t.height;const n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$r("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Ii(o[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ii(e[n]/255)*255):e[n]=Ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ru=0;class cl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=sr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?o.push(ps(r[a].image)):o.push(ps(r[a]))}else o=ps(r);n.url=o}return e||(t.images[this.uuid]=n),n}}function ps(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let su=0;class Ge extends Gi{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=ei,r=ei,o=hn,a=ni,l=fn,u=wn,f=Ge.DEFAULT_ANISOTROPY,p=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=sr(),this.name="",this.source=new cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=u,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$a)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Vs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Vs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=$a;Ge.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,r=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o;const u=t.elements,f=u[0],p=u[4],v=u[8],_=u[1],M=u[5],E=u[9],A=u[2],m=u[6],d=u[10];if(Math.abs(p-_)<.01&&Math.abs(v-A)<.01&&Math.abs(E-m)<.01){if(Math.abs(p+_)<.1&&Math.abs(v+A)<.1&&Math.abs(E+m)<.1&&Math.abs(f+M+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(f+1)/2,L=(M+1)/2,J=(d+1)/2,O=(p+_)/4,N=(v+A)/4,W=(E+m)/4;return w>L&&w>J?w<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(w),r=O/n,o=N/n):L>J?L<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(L),n=O/r,o=W/r):J<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(J),n=N/o,r=W/o),this.set(n,r,o,e),this}let U=Math.sqrt((m-E)*(m-E)+(v-A)*(v-A)+(_-p)*(_-p));return Math.abs(U)<.001&&(U=1),this.x=(m-E)/U,this.y=(v-A)/U,this.z=(_-p)/U,this.w=Math.acos((f+M+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ou extends Gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ge(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends ou{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ul extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class au extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,a,l){let u=n[r+0],f=n[r+1],p=n[r+2],v=n[r+3];const _=o[a+0],M=o[a+1],E=o[a+2],A=o[a+3];if(l===0){t[e+0]=u,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(l===1){t[e+0]=_,t[e+1]=M,t[e+2]=E,t[e+3]=A;return}if(v!==A||u!==_||f!==M||p!==E){let m=1-l;const d=u*_+f*M+p*E+v*A,U=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const J=Math.sqrt(w),O=Math.atan2(J,d*U);m=Math.sin(m*O)/J,l=Math.sin(l*O)/J}const L=l*U;if(u=u*m+_*L,f=f*m+M*L,p=p*m+E*L,v=v*m+A*L,m===1-l){const J=1/Math.sqrt(u*u+f*f+p*p+v*v);u*=J,f*=J,p*=J,v*=J}}t[e]=u,t[e+1]=f,t[e+2]=p,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,r,o,a){const l=n[r],u=n[r+1],f=n[r+2],p=n[r+3],v=o[a],_=o[a+1],M=o[a+2],E=o[a+3];return t[e]=l*E+p*v+u*M-f*_,t[e+1]=u*E+p*_+f*v-l*M,t[e+2]=f*E+p*M+l*_-u*v,t[e+3]=p*E-l*v-u*_-f*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,o=t._z,a=t._order,l=Math.cos,u=Math.sin,f=l(n/2),p=l(r/2),v=l(o/2),_=u(n/2),M=u(r/2),E=u(o/2);switch(a){case"XYZ":this._x=_*p*v+f*M*E,this._y=f*M*v-_*p*E,this._z=f*p*E+_*M*v,this._w=f*p*v-_*M*E;break;case"YXZ":this._x=_*p*v+f*M*E,this._y=f*M*v-_*p*E,this._z=f*p*E-_*M*v,this._w=f*p*v+_*M*E;break;case"ZXY":this._x=_*p*v-f*M*E,this._y=f*M*v+_*p*E,this._z=f*p*E+_*M*v,this._w=f*p*v-_*M*E;break;case"ZYX":this._x=_*p*v-f*M*E,this._y=f*M*v+_*p*E,this._z=f*p*E-_*M*v,this._w=f*p*v+_*M*E;break;case"YZX":this._x=_*p*v+f*M*E,this._y=f*M*v+_*p*E,this._z=f*p*E-_*M*v,this._w=f*p*v-_*M*E;break;case"XZY":this._x=_*p*v-f*M*E,this._y=f*M*v-_*p*E,this._z=f*p*E+_*M*v,this._w=f*p*v+_*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],o=e[8],a=e[1],l=e[5],u=e[9],f=e[2],p=e[6],v=e[10],_=n+l+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(p-u)*M,this._y=(o-f)*M,this._z=(a-r)*M}else if(n>l&&n>v){const M=2*Math.sqrt(1+n-l-v);this._w=(p-u)/M,this._x=.25*M,this._y=(r+a)/M,this._z=(o+f)/M}else if(l>v){const M=2*Math.sqrt(1+l-n-v);this._w=(o-f)/M,this._x=(r+a)/M,this._y=.25*M,this._z=(u+p)/M}else{const M=2*Math.sqrt(1+v-n-l);this._w=(a-r)/M,this._x=(o+f)/M,this._y=(u+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,o=t._z,a=t._w,l=e._x,u=e._y,f=e._z,p=e._w;return this._x=n*p+a*l+r*f-o*u,this._y=r*p+a*u+o*l-n*f,this._z=o*p+a*f+n*u-r*l,this._w=a*p-n*l-r*u-o*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,o=this._z,a=this._w;let l=a*t._w+n*t._x+r*t._y+o*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=n,this._y=r,this._z=o,this;const u=1-l*l;if(u<=Number.EPSILON){const M=1-e;return this._w=M*a+e*this._w,this._x=M*n+e*this._x,this._y=M*r+e*this._y,this._z=M*o+e*this._z,this.normalize(),this}const f=Math.sqrt(u),p=Math.atan2(f,l),v=Math.sin((1-e)*p)/f,_=Math.sin(e*p)/f;return this._w=a*v+this._w*_,this._x=n*v+this._x*_,this._y=r*v+this._y*_,this._z=o*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,e=0,n=0){Z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(la.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(la.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,o=t.x,a=t.y,l=t.z,u=t.w,f=2*(a*r-l*n),p=2*(l*e-o*r),v=2*(o*n-a*e);return this.x=e+u*f+a*v-l*p,this.y=n+u*p+l*f-o*v,this.z=r+u*v+o*p-a*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,o=t.z,a=e.x,l=e.y,u=e.z;return this.x=r*u-o*l,this.y=o*a-n*u,this.z=n*l-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ms.copy(this).projectOnVector(t),this.sub(ms)}reflect(t){return this.sub(ms.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ms=new Z,la=new or;class ar{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(o,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}const r=t.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),vr.subVectors(this.max,Zi),mi.subVectors(t.a,Zi),gi.subVectors(t.b,Zi),_i.subVectors(t.c,Zi),Dn.subVectors(gi,mi),Un.subVectors(_i,gi),Xn.subVectors(mi,_i);let e=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-Xn.z,Xn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,Xn.z,0,-Xn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-Xn.y,Xn.x,0];return!gs(e,mi,gi,_i,vr)||(e=[1,0,0,0,1,0,0,0,1],!gs(e,mi,gi,_i,vr))?!1:(xr.crossVectors(Dn,Un),e=[xr.x,xr.y,xr.z],gs(e,mi,gi,_i,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],an=new Z,_r=new ar,mi=new Z,gi=new Z,_i=new Z,Dn=new Z,Un=new Z,Xn=new Z,Zi=new Z,vr=new Z,xr=new Z,Yn=new Z;function gs(i,t,e,n,r){for(let o=0,a=i.length-3;o<=a;o+=3){Yn.fromArray(i,o);const l=r.x*Math.abs(Yn.x)+r.y*Math.abs(Yn.y)+r.z*Math.abs(Yn.z),u=t.dot(Yn),f=e.dot(Yn),p=n.dot(Yn);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>l)return!1}return!0}const lu=new ar,Ji=new Z,_s=new Z;class bo{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lu.setFromPoints(t).getCenter(n);let r=0;for(let o=0,a=t.length;o<a;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ji,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_s.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(_s)),this.expandByPoint(Ji.copy(t.center).sub(_s))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new Z,vs=new Z,Mr=new Z,In=new Z,xs=new Z,Sr=new Z,Ms=new Z;class cu{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){vs.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),In.copy(this.origin).sub(vs);const o=t.distanceTo(e)*.5,a=-this.direction.dot(Mr),l=In.dot(this.direction),u=-In.dot(Mr),f=In.lengthSq(),p=Math.abs(1-a*a);let v,_,M,E;if(p>0)if(v=a*u-l,_=a*l-u,E=o*p,v>=0)if(_>=-E)if(_<=E){const A=1/p;v*=A,_*=A,M=v*(v+a*_+2*l)+_*(a*v+_+2*u)+f}else _=o,v=Math.max(0,-(a*_+l)),M=-v*v+_*(_+2*u)+f;else _=-o,v=Math.max(0,-(a*_+l)),M=-v*v+_*(_+2*u)+f;else _<=-E?(v=Math.max(0,-(-a*o+l)),_=v>0?-o:Math.min(Math.max(-o,-u),o),M=-v*v+_*(_+2*u)+f):_<=E?(v=0,_=Math.min(Math.max(-o,-u),o),M=_*(_+2*u)+f):(v=Math.max(0,-(a*o+l)),_=v>0?o:Math.min(Math.max(-o,-u),o),M=-v*v+_*(_+2*u)+f);else _=a>0?-o:o,v=Math.max(0,-(a*_+l)),M=-v*v+_*(_+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(vs).addScaledVector(Mr,_),M}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),r=xn.dot(xn)-n*n,o=t.radius*t.radius;if(r>o)return null;const a=Math.sqrt(o-r),l=n-a,u=n+a;return u<0?null:l<0?this.at(u,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,a,l,u;const f=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,_=this.origin;return f>=0?(n=(t.min.x-_.x)*f,r=(t.max.x-_.x)*f):(n=(t.max.x-_.x)*f,r=(t.min.x-_.x)*f),p>=0?(o=(t.min.y-_.y)*p,a=(t.max.y-_.y)*p):(o=(t.max.y-_.y)*p,a=(t.min.y-_.y)*p),n>a||o>r||((o>n||isNaN(n))&&(n=o),(a<r||isNaN(r))&&(r=a),v>=0?(l=(t.min.z-_.z)*v,u=(t.max.z-_.z)*v):(l=(t.max.z-_.z)*v,u=(t.min.z-_.z)*v),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,r,o){xs.subVectors(e,t),Sr.subVectors(n,t),Ms.crossVectors(xs,Sr);let a=this.direction.dot(Ms),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;In.subVectors(this.origin,t);const u=l*this.direction.dot(Sr.crossVectors(In,Sr));if(u<0)return null;const f=l*this.direction.dot(xs.cross(In));if(f<0||u+f>a)return null;const p=-l*In.dot(Ms);return p<0?null:this.at(p/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,r,o,a,l,u,f,p,v,_,M,E,A,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,a,l,u,f,p,v,_,M,E,A,m)}set(t,e,n,r,o,a,l,u,f,p,v,_,M,E,A,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=o,d[5]=a,d[9]=l,d[13]=u,d[2]=f,d[6]=p,d[10]=v,d[14]=_,d[3]=M,d[7]=E,d[11]=A,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/vi.setFromMatrixColumn(t,0).length(),o=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,o=t.z,a=Math.cos(n),l=Math.sin(n),u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),v=Math.sin(o);if(t.order==="XYZ"){const _=a*p,M=a*v,E=l*p,A=l*v;e[0]=u*p,e[4]=-u*v,e[8]=f,e[1]=M+E*f,e[5]=_-A*f,e[9]=-l*u,e[2]=A-_*f,e[6]=E+M*f,e[10]=a*u}else if(t.order==="YXZ"){const _=u*p,M=u*v,E=f*p,A=f*v;e[0]=_+A*l,e[4]=E*l-M,e[8]=a*f,e[1]=a*v,e[5]=a*p,e[9]=-l,e[2]=M*l-E,e[6]=A+_*l,e[10]=a*u}else if(t.order==="ZXY"){const _=u*p,M=u*v,E=f*p,A=f*v;e[0]=_-A*l,e[4]=-a*v,e[8]=E+M*l,e[1]=M+E*l,e[5]=a*p,e[9]=A-_*l,e[2]=-a*f,e[6]=l,e[10]=a*u}else if(t.order==="ZYX"){const _=a*p,M=a*v,E=l*p,A=l*v;e[0]=u*p,e[4]=E*f-M,e[8]=_*f+A,e[1]=u*v,e[5]=A*f+_,e[9]=M*f-E,e[2]=-f,e[6]=l*u,e[10]=a*u}else if(t.order==="YZX"){const _=a*u,M=a*f,E=l*u,A=l*f;e[0]=u*p,e[4]=A-_*v,e[8]=E*v+M,e[1]=v,e[5]=a*p,e[9]=-l*p,e[2]=-f*p,e[6]=M*v+E,e[10]=_-A*v}else if(t.order==="XZY"){const _=a*u,M=a*f,E=l*u,A=l*f;e[0]=u*p,e[4]=-v,e[8]=f*p,e[1]=_*v+A,e[5]=a*p,e[9]=M*v-E,e[2]=E*v-M,e[6]=l*p,e[10]=A*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uu,t,hu)}lookAt(t,e,n){const r=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Nn.crossVectors(n,Ke),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Nn.crossVectors(n,Ke)),Nn.normalize(),yr.crossVectors(Ke,Nn),r[0]=Nn.x,r[4]=yr.x,r[8]=Ke.x,r[1]=Nn.y,r[5]=yr.y,r[9]=Ke.y,r[2]=Nn.z,r[6]=yr.z,r[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,a=n[0],l=n[4],u=n[8],f=n[12],p=n[1],v=n[5],_=n[9],M=n[13],E=n[2],A=n[6],m=n[10],d=n[14],U=n[3],w=n[7],L=n[11],J=n[15],O=r[0],N=r[4],W=r[8],R=r[12],g=r[1],T=r[5],k=r[9],H=r[13],Q=r[2],tt=r[6],B=r[10],Y=r[14],X=r[3],ct=r[7],gt=r[11],wt=r[15];return o[0]=a*O+l*g+u*Q+f*X,o[4]=a*N+l*T+u*tt+f*ct,o[8]=a*W+l*k+u*B+f*gt,o[12]=a*R+l*H+u*Y+f*wt,o[1]=p*O+v*g+_*Q+M*X,o[5]=p*N+v*T+_*tt+M*ct,o[9]=p*W+v*k+_*B+M*gt,o[13]=p*R+v*H+_*Y+M*wt,o[2]=E*O+A*g+m*Q+d*X,o[6]=E*N+A*T+m*tt+d*ct,o[10]=E*W+A*k+m*B+d*gt,o[14]=E*R+A*H+m*Y+d*wt,o[3]=U*O+w*g+L*Q+J*X,o[7]=U*N+w*T+L*tt+J*ct,o[11]=U*W+w*k+L*B+J*gt,o[15]=U*R+w*H+L*Y+J*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],a=t[1],l=t[5],u=t[9],f=t[13],p=t[2],v=t[6],_=t[10],M=t[14],E=t[3],A=t[7],m=t[11],d=t[15];return E*(+o*u*v-r*f*v-o*l*_+n*f*_+r*l*M-n*u*M)+A*(+e*u*M-e*f*_+o*a*_-r*a*M+r*f*p-o*u*p)+m*(+e*f*v-e*l*M-o*a*v+n*a*M+o*l*p-n*f*p)+d*(-r*l*p-e*u*v+e*l*_+r*a*v-n*a*_+n*u*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],a=t[4],l=t[5],u=t[6],f=t[7],p=t[8],v=t[9],_=t[10],M=t[11],E=t[12],A=t[13],m=t[14],d=t[15],U=v*m*f-A*_*f+A*u*M-l*m*M-v*u*d+l*_*d,w=E*_*f-p*m*f-E*u*M+a*m*M+p*u*d-a*_*d,L=p*A*f-E*v*f+E*l*M-a*A*M-p*l*d+a*v*d,J=E*v*u-p*A*u-E*l*_+a*A*_+p*l*m-a*v*m,O=e*U+n*w+r*L+o*J;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return t[0]=U*N,t[1]=(A*_*o-v*m*o-A*r*M+n*m*M+v*r*d-n*_*d)*N,t[2]=(l*m*o-A*u*o+A*r*f-n*m*f-l*r*d+n*u*d)*N,t[3]=(v*u*o-l*_*o-v*r*f+n*_*f+l*r*M-n*u*M)*N,t[4]=w*N,t[5]=(p*m*o-E*_*o+E*r*M-e*m*M-p*r*d+e*_*d)*N,t[6]=(E*u*o-a*m*o-E*r*f+e*m*f+a*r*d-e*u*d)*N,t[7]=(a*_*o-p*u*o+p*r*f-e*_*f-a*r*M+e*u*M)*N,t[8]=L*N,t[9]=(E*v*o-p*A*o-E*n*M+e*A*M+p*n*d-e*v*d)*N,t[10]=(a*A*o-E*l*o+E*n*f-e*A*f-a*n*d+e*l*d)*N,t[11]=(p*l*o-a*v*o-p*n*f+e*v*f+a*n*M-e*l*M)*N,t[12]=J*N,t[13]=(p*A*r-E*v*r+E*n*_-e*A*_-p*n*m+e*v*m)*N,t[14]=(E*l*r-a*A*r-E*n*u+e*A*u+a*n*m-e*l*m)*N,t[15]=(a*v*r-p*l*r+p*n*u-e*v*u-a*n*_+e*l*_)*N,this}scale(t){const e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),o=1-n,a=t.x,l=t.y,u=t.z,f=o*a,p=o*l;return this.set(f*a+n,f*l-r*u,f*u+r*l,0,f*l+r*u,p*l+n,p*u-r*a,0,f*u-r*l,p*u+r*a,o*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,a){return this.set(1,n,o,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,o=e._x,a=e._y,l=e._z,u=e._w,f=o+o,p=a+a,v=l+l,_=o*f,M=o*p,E=o*v,A=a*p,m=a*v,d=l*v,U=u*f,w=u*p,L=u*v,J=n.x,O=n.y,N=n.z;return r[0]=(1-(A+d))*J,r[1]=(M+L)*J,r[2]=(E-w)*J,r[3]=0,r[4]=(M-L)*O,r[5]=(1-(_+d))*O,r[6]=(m+U)*O,r[7]=0,r[8]=(E+w)*N,r[9]=(m-U)*N,r[10]=(1-(_+A))*N,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let o=vi.set(r[0],r[1],r[2]).length();const a=vi.set(r[4],r[5],r[6]).length(),l=vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],ln.copy(this);const f=1/o,p=1/a,v=1/l;return ln.elements[0]*=f,ln.elements[1]*=f,ln.elements[2]*=f,ln.elements[4]*=p,ln.elements[5]*=p,ln.elements[6]*=p,ln.elements[8]*=v,ln.elements[9]*=v,ln.elements[10]*=v,e.setFromRotationMatrix(ln),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,o,a,l=bn){const u=this.elements,f=2*o/(e-t),p=2*o/(n-r),v=(e+t)/(e-t),_=(n+r)/(n-r);let M,E;if(l===bn)M=-(a+o)/(a-o),E=-2*a*o/(a-o);else if(l===Kr)M=-a/(a-o),E=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=v,u[12]=0,u[1]=0,u[5]=p,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=M,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,o,a,l=bn){const u=this.elements,f=1/(e-t),p=1/(n-r),v=1/(a-o),_=(e+t)*f,M=(n+r)*p;let E,A;if(l===bn)E=(a+o)*v,A=-2*v;else if(l===Kr)E=o*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-_,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-M,u[2]=0,u[6]=0,u[10]=A,u[14]=-E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new Z,ln=new be,uu=new Z(0,0,0),hu=new Z(1,1,1),Nn=new Z,yr=new Z,Ke=new Z,ca=new be,ua=new or;class Rn{constructor(t=0,e=0,n=0,r=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,o=r[0],a=r[4],l=r[8],u=r[1],f=r[5],p=r[9],v=r[2],_=r[6],M=r[10];switch(e){case"XYZ":this._y=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,M),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-Ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(l,M));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-p,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ca.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ca,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ua.setFromEuler(this),this.setFromQuaternion(ua,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class hl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fu=0;const ha=new Z,xi=new or,Mn=new be,Er=new Z,Qi=new Z,du=new Z,pu=new or,fa=new Z(1,0,0),da=new Z(0,1,0),pa=new Z(0,0,1),ma={type:"added"},mu={type:"removed"},Mi={type:"childadded",child:null},Ss={type:"childremoved",child:null};class Je extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new Z,e=new Rn,n=new or,r=new Z(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new Qt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(fa,t)}rotateY(t){return this.rotateOnAxis(da,t)}rotateZ(t){return this.rotateOnAxis(pa,t)}translateOnAxis(t,e){return ha.copy(t).applyQuaternion(this.quaternion),this.position.add(ha.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fa,t)}translateY(t){return this.translateOnAxis(da,t)}translateZ(t){return this.translateOnAxis(pa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Er.copy(t):Er.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Qi,Er,this.up):Mn.lookAt(Er,Qi,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),xi.setFromRotationMatrix(Mn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ma),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mu),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ma),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,du),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,pu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){const v=u[f];o(t.shapes,v)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,f=this.material.length;u<f;u++)l.push(o(t.materials,this.material[u]));r.material=l}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(o(t.animations,u))}}if(e){const l=a(t.geometries),u=a(t.materials),f=a(t.textures),p=a(t.images),v=a(t.shapes),_=a(t.skeletons),M=a(t.animations),E=a(t.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),v.length>0&&(n.shapes=v),_.length>0&&(n.skeletons=_),M.length>0&&(n.animations=M),E.length>0&&(n.nodes=E)}return n.object=r,n;function a(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Je.DEFAULT_UP=new Z(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new Z,Sn=new Z,ys=new Z,yn=new Z,Si=new Z,yi=new Z,ga=new Z,Es=new Z,Ts=new Z,As=new Z;class gn{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),cn.subVectors(t,e),r.cross(cn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){cn.subVectors(r,e),Sn.subVectors(n,e),ys.subVectors(t,e);const a=cn.dot(cn),l=cn.dot(Sn),u=cn.dot(ys),f=Sn.dot(Sn),p=Sn.dot(ys),v=a*f-l*l;if(v===0)return o.set(0,0,0),null;const _=1/v,M=(f*u-l*p)*_,E=(a*p-l*u)*_;return o.set(1-M-E,E,M)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,r,o,a,l,u){return this.getBarycoord(t,e,n,r,yn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,yn.x),u.addScaledVector(a,yn.y),u.addScaledVector(l,yn.z),u)}static isFrontFacing(t,e,n,r){return cn.subVectors(n,e),Sn.subVectors(t,e),cn.cross(Sn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),cn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,o=this.c;let a,l;Si.subVectors(r,n),yi.subVectors(o,n),Es.subVectors(t,n);const u=Si.dot(Es),f=yi.dot(Es);if(u<=0&&f<=0)return e.copy(n);Ts.subVectors(t,r);const p=Si.dot(Ts),v=yi.dot(Ts);if(p>=0&&v<=p)return e.copy(r);const _=u*v-p*f;if(_<=0&&u>=0&&p<=0)return a=u/(u-p),e.copy(n).addScaledVector(Si,a);As.subVectors(t,o);const M=Si.dot(As),E=yi.dot(As);if(E>=0&&M<=E)return e.copy(o);const A=M*f-u*E;if(A<=0&&f>=0&&E<=0)return l=f/(f-E),e.copy(n).addScaledVector(yi,l);const m=p*E-M*v;if(m<=0&&v-p>=0&&M-E>=0)return ga.subVectors(o,r),l=(v-p)/(v-p+(M-E)),e.copy(r).addScaledVector(ga,l);const d=1/(m+A+_);return a=A*d,l=_*d,e.copy(n).addScaledVector(Si,a).addScaledVector(yi,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function bs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class fe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ce.workingColorSpace){if(t=Qc(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=bs(a,o,t+1/3),this.g=bs(a,o,t),this.b=bs(a,o,t-1/3)}return ce.toWorkingColorSpace(this,r),this}setStyle(t,e=pn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){const n=fl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return ce.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Ye(Fe.r*255,0,255))*65536+Math.round(Ye(Fe.g*255,0,255))*256+Math.round(Ye(Fe.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,r=Fe.g,o=Fe.b,a=Math.max(n,r,o),l=Math.min(n,r,o);let u,f;const p=(l+a)/2;if(l===a)u=0,f=0;else{const v=a-l;switch(f=p<=.5?v/(a+l):v/(2-a-l),a){case n:u=(r-o)/v+(r<o?6:0);break;case r:u=(o-n)/v+2;break;case o:u=(n-r)/v+4;break}u/=6}return t.h=u,t.s=f,t.l=p,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=pn){ce.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,r=Fe.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Tr);const n=hs(Fn.h,Tr.h,e),r=hs(Fn.s,Tr.s,e),o=hs(Fn.l,Tr.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new fe;fe.NAMES=fl;let gu=0;class ts extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=Di,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Os,this.blendDst=Bs,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Os&&(n.blendSrc=this.blendSrc),this.blendDst!==Bs&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const a=[];for(const l in o){const u=o[l];delete u.metadata,a.push(u)}return a}if(e){const o=r(t.textures),a=r(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Pi extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new Z,Ar=new le;class _n{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return nr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array),o=Xe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ia&&(t.usage=this.usage),t}}class dl extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pl extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qe extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _u=0;const nn=new be,ws=new Je,Ei=new Z,$e=new ar,tr=new ar,Pe=new Z;class Cn extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ll(t)?pl:dl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Qt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return ws.lookAt(t),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const o=e[n];$e.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const l=e[o];tr.setFromBufferAttribute(l),this.morphTargetsRelative?(Pe.addVectors($e.min,tr.min),$e.expandByPoint(Pe),Pe.addVectors($e.max,tr.max),$e.expandByPoint(Pe)):($e.expandByPoint(tr.min),$e.expandByPoint(tr.max))}$e.getCenter(n);let r=0;for(let o=0,a=t.count;o<a;o++)Pe.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(Pe));if(e)for(let o=0,a=e.length;o<a;o++){const l=e[o],u=this.morphTargetsRelative;for(let f=0,p=l.count;f<p;f++)Pe.fromBufferAttribute(l,f),u&&(Ei.fromBufferAttribute(t,f),Pe.add(Ei)),r=Math.max(r,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],u=[];for(let W=0;W<n.count;W++)l[W]=new Z,u[W]=new Z;const f=new Z,p=new Z,v=new Z,_=new le,M=new le,E=new le,A=new Z,m=new Z;function d(W,R,g){f.fromBufferAttribute(n,W),p.fromBufferAttribute(n,R),v.fromBufferAttribute(n,g),_.fromBufferAttribute(o,W),M.fromBufferAttribute(o,R),E.fromBufferAttribute(o,g),p.sub(f),v.sub(f),M.sub(_),E.sub(_);const T=1/(M.x*E.y-E.x*M.y);isFinite(T)&&(A.copy(p).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(T),m.copy(v).multiplyScalar(M.x).addScaledVector(p,-E.x).multiplyScalar(T),l[W].add(A),l[R].add(A),l[g].add(A),u[W].add(m),u[R].add(m),u[g].add(m))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let W=0,R=U.length;W<R;++W){const g=U[W],T=g.start,k=g.count;for(let H=T,Q=T+k;H<Q;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const w=new Z,L=new Z,J=new Z,O=new Z;function N(W){J.fromBufferAttribute(r,W),O.copy(J);const R=l[W];w.copy(R),w.sub(J.multiplyScalar(J.dot(R))).normalize(),L.crossVectors(O,R);const T=L.dot(u[W])<0?-1:1;a.setXYZW(W,w.x,w.y,w.z,T)}for(let W=0,R=U.length;W<R;++W){const g=U[W],T=g.start,k=g.count;for(let H=T,Q=T+k;H<Q;H+=3)N(t.getX(H+0)),N(t.getX(H+1)),N(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let _=0,M=n.count;_<M;_++)n.setXYZ(_,0,0,0);const r=new Z,o=new Z,a=new Z,l=new Z,u=new Z,f=new Z,p=new Z,v=new Z;if(t)for(let _=0,M=t.count;_<M;_+=3){const E=t.getX(_+0),A=t.getX(_+1),m=t.getX(_+2);r.fromBufferAttribute(e,E),o.fromBufferAttribute(e,A),a.fromBufferAttribute(e,m),p.subVectors(a,o),v.subVectors(r,o),p.cross(v),l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,m),l.add(p),u.add(p),f.add(p),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(A,u.x,u.y,u.z),n.setXYZ(m,f.x,f.y,f.z)}else for(let _=0,M=e.count;_<M;_+=3)r.fromBufferAttribute(e,_+0),o.fromBufferAttribute(e,_+1),a.fromBufferAttribute(e,_+2),p.subVectors(a,o),v.subVectors(r,o),p.cross(v),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(l,u){const f=l.array,p=l.itemSize,v=l.normalized,_=new f.constructor(u.length*p);let M=0,E=0;for(let A=0,m=u.length;A<m;A++){l.isInterleavedBufferAttribute?M=u[A]*l.data.stride+l.offset:M=u[A]*p;for(let d=0;d<p;d++)_[E++]=f[M++]}return new _n(_,p,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Cn,n=this.index.array,r=this.attributes;for(const l in r){const u=r[l],f=t(u,n);e.setAttribute(l,f)}const o=this.morphAttributes;for(const l in o){const u=[],f=o[l];for(let p=0,v=f.length;p<v;p++){const _=f[p],M=t(_,n);u.push(M)}e.morphAttributes[l]=u}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const f=n[u];t.data.attributes[u]=f.toJSON(t.data)}const r={};let o=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],p=[];for(let v=0,_=f.length;v<_;v++){const M=f[v];p.push(M.toJSON(t.data))}p.length>0&&(r[u]=p,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const f in r){const p=r[f];this.setAttribute(f,p.clone(e))}const o=t.morphAttributes;for(const f in o){const p=[],v=o[f];for(let _=0,M=v.length;_<M;_++)p.push(v[_].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let f=0,p=a.length;f<p;f++){const v=a[f];this.addGroup(v.start,v.count,v.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _a=new be,jn=new cu,br=new bo,va=new Z,Ti=new Z,Ai=new Z,bi=new Z,Rs=new Z,wr=new Z,Rr=new le,Cr=new le,Pr=new le,xa=new Z,Ma=new Z,Sa=new Z,Lr=new Z,Dr=new Z;class Ze extends Je{constructor(t=new Cn,e=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(o&&l){wr.set(0,0,0);for(let u=0,f=o.length;u<f;u++){const p=l[u],v=o[u];p!==0&&(Rs.fromBufferAttribute(v,t),a?wr.addScaledVector(Rs,p):wr.addScaledVector(Rs.sub(e),p))}e.add(wr)}return e}raycast(t,e){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(o),jn.copy(t.ray).recast(t.near),!(br.containsPoint(jn.origin)===!1&&(jn.intersectSphere(br,va)===null||jn.origin.distanceToSquared(va)>(t.far-t.near)**2))&&(_a.copy(o).invert(),jn.copy(t.ray).applyMatrix4(_a),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let r;const o=this.geometry,a=this.material,l=o.index,u=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,v=o.attributes.normal,_=o.groups,M=o.drawRange;if(l!==null)if(Array.isArray(a))for(let E=0,A=_.length;E<A;E++){const m=_[E],d=a[m.materialIndex],U=Math.max(m.start,M.start),w=Math.min(l.count,Math.min(m.start+m.count,M.start+M.count));for(let L=U,J=w;L<J;L+=3){const O=l.getX(L),N=l.getX(L+1),W=l.getX(L+2);r=Ur(this,d,t,n,f,p,v,O,N,W),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const E=Math.max(0,M.start),A=Math.min(l.count,M.start+M.count);for(let m=E,d=A;m<d;m+=3){const U=l.getX(m),w=l.getX(m+1),L=l.getX(m+2);r=Ur(this,a,t,n,f,p,v,U,w,L),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let E=0,A=_.length;E<A;E++){const m=_[E],d=a[m.materialIndex],U=Math.max(m.start,M.start),w=Math.min(u.count,Math.min(m.start+m.count,M.start+M.count));for(let L=U,J=w;L<J;L+=3){const O=L,N=L+1,W=L+2;r=Ur(this,d,t,n,f,p,v,O,N,W),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const E=Math.max(0,M.start),A=Math.min(u.count,M.start+M.count);for(let m=E,d=A;m<d;m+=3){const U=m,w=m+1,L=m+2;r=Ur(this,a,t,n,f,p,v,U,w,L),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function vu(i,t,e,n,r,o,a,l){let u;if(t.side===je?u=n.intersectTriangle(a,o,r,!0,l):u=n.intersectTriangle(r,o,a,t.side===Gn,l),u===null)return null;Dr.copy(l),Dr.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(Dr);return f<e.near||f>e.far?null:{distance:f,point:Dr.clone(),object:i}}function Ur(i,t,e,n,r,o,a,l,u,f){i.getVertexPosition(l,Ti),i.getVertexPosition(u,Ai),i.getVertexPosition(f,bi);const p=vu(i,t,e,n,Ti,Ai,bi,Lr);if(p){r&&(Rr.fromBufferAttribute(r,l),Cr.fromBufferAttribute(r,u),Pr.fromBufferAttribute(r,f),p.uv=gn.getInterpolation(Lr,Ti,Ai,bi,Rr,Cr,Pr,new le)),o&&(Rr.fromBufferAttribute(o,l),Cr.fromBufferAttribute(o,u),Pr.fromBufferAttribute(o,f),p.uv1=gn.getInterpolation(Lr,Ti,Ai,bi,Rr,Cr,Pr,new le)),a&&(xa.fromBufferAttribute(a,l),Ma.fromBufferAttribute(a,u),Sa.fromBufferAttribute(a,f),p.normal=gn.getInterpolation(Lr,Ti,Ai,bi,xa,Ma,Sa,new Z),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const v={a:l,b:u,c:f,normal:new Z,materialIndex:0};gn.getNormal(Ti,Ai,bi,v.normal),p.face=v}return p}class lr extends Cn{constructor(t=1,e=1,n=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:a};const l=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const u=[],f=[],p=[],v=[];let _=0,M=0;E("z","y","x",-1,-1,n,e,t,a,o,0),E("z","y","x",1,-1,n,e,-t,a,o,1),E("x","z","y",1,1,t,n,e,r,a,2),E("x","z","y",1,-1,t,n,-e,r,a,3),E("x","y","z",1,-1,t,e,n,r,o,4),E("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(u),this.setAttribute("position",new Qe(f,3)),this.setAttribute("normal",new Qe(p,3)),this.setAttribute("uv",new Qe(v,2));function E(A,m,d,U,w,L,J,O,N,W,R){const g=L/N,T=J/W,k=L/2,H=J/2,Q=O/2,tt=N+1,B=W+1;let Y=0,X=0;const ct=new Z;for(let gt=0;gt<B;gt++){const wt=gt*T-H;for(let zt=0;zt<tt;zt++){const qt=zt*g-k;ct[A]=qt*U,ct[m]=wt*w,ct[d]=Q,f.push(ct.x,ct.y,ct.z),ct[A]=0,ct[m]=0,ct[d]=O>0?1:-1,p.push(ct.x,ct.y,ct.z),v.push(zt/N),v.push(1-gt/W),Y+=1}}for(let gt=0;gt<W;gt++)for(let wt=0;wt<N;wt++){const zt=_+wt+tt*gt,qt=_+wt+tt*(gt+1),et=_+(wt+1)+tt*(gt+1),ut=_+(wt+1)+tt*gt;u.push(zt,qt,ut),u.push(qt,et,ut),X+=6}l.addGroup(M,X,R),M+=X,_+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=Hi(i[e]);for(const r in n)t[r]=n[r]}return t}function xu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ml(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Mu={clone:Hi,merge:He};var Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Su,this.fragmentShader=yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=xu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gl extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new Z,ya=new le,Ea=new le;class un extends gl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return go*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,ya,Ea),e.subVectors(Ea,ya)}setViewOffset(t,e,n,r,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,f=a.fullHeight;o+=a.offsetX*r/u,e-=a.offsetY*n/f,r*=a.width/u,n*=a.height/f}const l=this.filmOffset;l!==0&&(o+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,Ri=1;class Eu extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(wi,Ri,t,e);r.layers=this.layers,this.add(r);const o=new un(wi,Ri,t,e);o.layers=this.layers,this.add(o);const a=new un(wi,Ri,t,e);a.layers=this.layers,this.add(a);const l=new un(wi,Ri,t,e);l.layers=this.layers,this.add(l);const u=new un(wi,Ri,t,e);u.layers=this.layers,this.add(u);const f=new un(wi,Ri,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,o,a,l,u]=e;for(const f of e)this.remove(f);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,l,u,f,p]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,o),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,u),t.setRenderTarget(n,4,r),t.render(e,f),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,r),t.render(e,p),t.setRenderTarget(v,_,M),t.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class _l extends Ge{constructor(t,e,n,r,o,a,l,u,f,p){t=t!==void 0?t:[],e=e!==void 0?e:Fi,super(t,e,n,r,o,a,l,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tu extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new _l(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new lr(5,5,5),o=new Vn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:zn});o.uniforms.tEquirect.value=e;const a=new Ze(r,o),l=e.minFilter;return e.minFilter===ni&&(e.minFilter=hn),new Eu(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(o)}}const Cs=new Z,Au=new Z,bu=new Qt;class Zn{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Cs.subVectors(n,e).cross(Au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Cs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bu.getNormalMatrix(t),r=this.coplanarPoint(Cs).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new bo,Ir=new Z;class vl{constructor(t=new Zn,e=new Zn,n=new Zn,r=new Zn,o=new Zn,a=new Zn){this.planes=[t,e,n,r,o,a]}set(t,e,n,r,o,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(o),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],u=r[3],f=r[4],p=r[5],v=r[6],_=r[7],M=r[8],E=r[9],A=r[10],m=r[11],d=r[12],U=r[13],w=r[14],L=r[15];if(n[0].setComponents(u-o,_-f,m-M,L-d).normalize(),n[1].setComponents(u+o,_+f,m+M,L+d).normalize(),n[2].setComponents(u+a,_+p,m+E,L+U).normalize(),n[3].setComponents(u-a,_-p,m-E,L-U).normalize(),n[4].setComponents(u-l,_-v,m-A,L-w).normalize(),e===bn)n[5].setComponents(u+l,_+v,m+A,L+w).normalize();else if(e===Kr)n[5].setComponents(l,v,A,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ir.x=r.normal.x>0?t.max.x:t.min.x,Ir.y=r.normal.y>0?t.max.y:t.min.y,Ir.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xl(){let i=null,t=!1,e=null,n=null;function r(o,a){e(o,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function wu(i){const t=new WeakMap;function e(l,u){const f=l.array,p=l.usage,v=f.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,f,p),l.onUploadCallback();let M;if(f instanceof Float32Array)M=i.FLOAT;else if(f instanceof Uint16Array)l.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=i.SHORT;else if(f instanceof Uint32Array)M=i.UNSIGNED_INT;else if(f instanceof Int32Array)M=i.INT;else if(f instanceof Int8Array)M=i.BYTE;else if(f instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:v}}function n(l,u,f){const p=u.array,v=u._updateRange,_=u.updateRanges;if(i.bindBuffer(f,l),v.count===-1&&_.length===0&&i.bufferSubData(f,0,p),_.length!==0){for(let M=0,E=_.length;M<E;M++){const A=_[M];i.bufferSubData(f,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}u.clearUpdateRanges()}v.count!==-1&&(i.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p,v.offset,v.count),v.count=-1),u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=t.get(l);u&&(i.deleteBuffer(u.buffer),t.delete(l))}function a(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=t.get(l);(!p||p.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const f=t.get(l);if(f===void 0)t.set(l,e(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,l,u),f.version=l.version}}return{get:r,remove:o,update:a}}class cr extends Cn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const o=t/2,a=e/2,l=Math.floor(n),u=Math.floor(r),f=l+1,p=u+1,v=t/l,_=e/u,M=[],E=[],A=[],m=[];for(let d=0;d<p;d++){const U=d*_-a;for(let w=0;w<f;w++){const L=w*v-o;E.push(L,-U,0),A.push(0,0,1),m.push(w/l),m.push(1-d/u)}}for(let d=0;d<u;d++)for(let U=0;U<l;U++){const w=U+f*d,L=U+f*(d+1),J=U+1+f*(d+1),O=U+1+f*d;M.push(w,L,O),M.push(L,J,O)}this.setIndex(M),this.setAttribute("position",new Qe(E,3)),this.setAttribute("normal",new Qe(A,3)),this.setAttribute("uv",new Qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",sh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Th=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ah=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ph=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ih=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$h=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,df=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ef=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ff=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Of=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$f=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ed=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,od=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ad=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:Ru,alphahash_pars_fragment:Cu,alphamap_fragment:Pu,alphamap_pars_fragment:Lu,alphatest_fragment:Du,alphatest_pars_fragment:Uu,aomap_fragment:Iu,aomap_pars_fragment:Nu,batching_pars_vertex:Fu,batching_vertex:Ou,begin_vertex:Bu,beginnormal_vertex:zu,bsdfs:Hu,iridescence_fragment:Gu,bumpmap_pars_fragment:Vu,clipping_planes_fragment:ku,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:Yu,color_fragment:ju,color_pars_fragment:qu,color_pars_vertex:Ku,color_vertex:$u,common:Zu,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Qu,displacementmap_pars_vertex:th,displacementmap_vertex:eh,emissivemap_fragment:nh,emissivemap_pars_fragment:ih,colorspace_fragment:rh,colorspace_pars_fragment:sh,envmap_fragment:oh,envmap_common_pars_fragment:ah,envmap_pars_fragment:lh,envmap_pars_vertex:ch,envmap_physical_pars_fragment:Mh,envmap_vertex:uh,fog_vertex:hh,fog_pars_vertex:fh,fog_fragment:dh,fog_pars_fragment:ph,gradientmap_pars_fragment:mh,lightmap_pars_fragment:gh,lights_lambert_fragment:_h,lights_lambert_pars_fragment:vh,lights_pars_begin:xh,lights_toon_fragment:Sh,lights_toon_pars_fragment:yh,lights_phong_fragment:Eh,lights_phong_pars_fragment:Th,lights_physical_fragment:Ah,lights_physical_pars_fragment:bh,lights_fragment_begin:wh,lights_fragment_maps:Rh,lights_fragment_end:Ch,logdepthbuf_fragment:Ph,logdepthbuf_pars_fragment:Lh,logdepthbuf_pars_vertex:Dh,logdepthbuf_vertex:Uh,map_fragment:Ih,map_pars_fragment:Nh,map_particle_fragment:Fh,map_particle_pars_fragment:Oh,metalnessmap_fragment:Bh,metalnessmap_pars_fragment:zh,morphinstance_vertex:Hh,morphcolor_vertex:Gh,morphnormal_vertex:Vh,morphtarget_pars_vertex:kh,morphtarget_vertex:Wh,normal_fragment_begin:Xh,normal_fragment_maps:Yh,normal_pars_fragment:jh,normal_pars_vertex:qh,normal_vertex:Kh,normalmap_pars_fragment:$h,clearcoat_normal_fragment_begin:Zh,clearcoat_normal_fragment_maps:Jh,clearcoat_pars_fragment:Qh,iridescence_pars_fragment:tf,opaque_fragment:ef,packing:nf,premultiplied_alpha_fragment:rf,project_vertex:sf,dithering_fragment:of,dithering_pars_fragment:af,roughnessmap_fragment:lf,roughnessmap_pars_fragment:cf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:hf,shadowmap_vertex:ff,shadowmask_pars_fragment:df,skinbase_vertex:pf,skinning_pars_vertex:mf,skinning_vertex:gf,skinnormal_vertex:_f,specularmap_fragment:vf,specularmap_pars_fragment:xf,tonemapping_fragment:Mf,tonemapping_pars_fragment:Sf,transmission_fragment:yf,transmission_pars_fragment:Ef,uv_pars_fragment:Tf,uv_pars_vertex:Af,uv_vertex:bf,worldpos_vertex:wf,background_vert:Rf,background_frag:Cf,backgroundCube_vert:Pf,backgroundCube_frag:Lf,cube_vert:Df,cube_frag:Uf,depth_vert:If,depth_frag:Nf,distanceRGBA_vert:Ff,distanceRGBA_frag:Of,equirect_vert:Bf,equirect_frag:zf,linedashed_vert:Hf,linedashed_frag:Gf,meshbasic_vert:Vf,meshbasic_frag:kf,meshlambert_vert:Wf,meshlambert_frag:Xf,meshmatcap_vert:Yf,meshmatcap_frag:jf,meshnormal_vert:qf,meshnormal_frag:Kf,meshphong_vert:$f,meshphong_frag:Zf,meshphysical_vert:Jf,meshphysical_frag:Qf,meshtoon_vert:td,meshtoon_frag:ed,points_vert:nd,points_frag:id,shadow_vert:rd,shadow_frag:sd,sprite_vert:od,sprite_frag:ad},vt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},mn={basic:{uniforms:He([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:He([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:He([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:He([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:He([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:He([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:He([vt.points,vt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:He([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:He([vt.common,vt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:He([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:He([vt.sprite,vt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:He([vt.common,vt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:He([vt.lights,vt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};mn.physical={uniforms:He([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Nr={r:0,b:0,g:0},Kn=new Rn,ld=new be;function cd(i,t,e,n,r,o,a){const l=new fe(0);let u=o===!0?0:1,f,p,v=null,_=0,M=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?e:t).get(w)),w}function A(U){let w=!1;const L=E(U);L===null?d(l,u):L&&L.isColor&&(d(L,1),w=!0);const J=i.xr.getEnvironmentBlendMode();J==="additive"?n.buffers.color.setClear(0,0,0,1,a):J==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(U,w){const L=E(w);L&&(L.isCubeTexture||L.mapping===Jr)?(p===void 0&&(p=new Ze(new lr(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Hi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(J,O,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Kn.copy(w.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(ld.makeRotationFromEuler(Kn)),p.material.toneMapped=ce.getTransfer(L.colorSpace)!==ve,(v!==L||_!==L.version||M!==i.toneMapping)&&(p.material.needsUpdate=!0,v=L,_=L.version,M=i.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new Ze(new cr(2,2),new Vn({name:"BackgroundMaterial",uniforms:Hi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=ce.getTransfer(L.colorSpace)!==ve,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||_!==L.version||M!==i.toneMapping)&&(f.material.needsUpdate=!0,v=L,_=L.version,M=i.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function d(U,w){U.getRGB(Nr,ml(i)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,w,a)}return{getClearColor:function(){return l},setClearColor:function(U,w=1){l.set(U),u=w,d(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(U){u=U,d(l,u)},render:A,addToRenderList:m}}function ud(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=_(null);let o=r,a=!1;function l(g,T,k,H,Q){let tt=!1;const B=v(H,k,T);o!==B&&(o=B,f(o.object)),tt=M(g,H,k,Q),tt&&E(g,H,k,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,L(g,T,k,H),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function u(){return i.createVertexArray()}function f(g){return i.bindVertexArray(g)}function p(g){return i.deleteVertexArray(g)}function v(g,T,k){const H=k.wireframe===!0;let Q=n[g.id];Q===void 0&&(Q={},n[g.id]=Q);let tt=Q[T.id];tt===void 0&&(tt={},Q[T.id]=tt);let B=tt[H];return B===void 0&&(B=_(u()),tt[H]=B),B}function _(g){const T=[],k=[],H=[];for(let Q=0;Q<e;Q++)T[Q]=0,k[Q]=0,H[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:k,attributeDivisors:H,object:g,attributes:{},index:null}}function M(g,T,k,H){const Q=o.attributes,tt=T.attributes;let B=0;const Y=k.getAttributes();for(const X in Y)if(Y[X].location>=0){const gt=Q[X];let wt=tt[X];if(wt===void 0&&(X==="instanceMatrix"&&g.instanceMatrix&&(wt=g.instanceMatrix),X==="instanceColor"&&g.instanceColor&&(wt=g.instanceColor)),gt===void 0||gt.attribute!==wt||wt&&gt.data!==wt.data)return!0;B++}return o.attributesNum!==B||o.index!==H}function E(g,T,k,H){const Q={},tt=T.attributes;let B=0;const Y=k.getAttributes();for(const X in Y)if(Y[X].location>=0){let gt=tt[X];gt===void 0&&(X==="instanceMatrix"&&g.instanceMatrix&&(gt=g.instanceMatrix),X==="instanceColor"&&g.instanceColor&&(gt=g.instanceColor));const wt={};wt.attribute=gt,gt&&gt.data&&(wt.data=gt.data),Q[X]=wt,B++}o.attributes=Q,o.attributesNum=B,o.index=H}function A(){const g=o.newAttributes;for(let T=0,k=g.length;T<k;T++)g[T]=0}function m(g){d(g,0)}function d(g,T){const k=o.newAttributes,H=o.enabledAttributes,Q=o.attributeDivisors;k[g]=1,H[g]===0&&(i.enableVertexAttribArray(g),H[g]=1),Q[g]!==T&&(i.vertexAttribDivisor(g,T),Q[g]=T)}function U(){const g=o.newAttributes,T=o.enabledAttributes;for(let k=0,H=T.length;k<H;k++)T[k]!==g[k]&&(i.disableVertexAttribArray(k),T[k]=0)}function w(g,T,k,H,Q,tt,B){B===!0?i.vertexAttribIPointer(g,T,k,Q,tt):i.vertexAttribPointer(g,T,k,H,Q,tt)}function L(g,T,k,H){A();const Q=H.attributes,tt=k.getAttributes(),B=T.defaultAttributeValues;for(const Y in tt){const X=tt[Y];if(X.location>=0){let ct=Q[Y];if(ct===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(ct=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(ct=g.instanceColor)),ct!==void 0){const gt=ct.normalized,wt=ct.itemSize,zt=t.get(ct);if(zt===void 0)continue;const qt=zt.buffer,et=zt.type,ut=zt.bytesPerElement,At=et===i.INT||et===i.UNSIGNED_INT||ct.gpuType===xo;if(ct.isInterleavedBufferAttribute){const Et=ct.data,kt=Et.stride,Yt=ct.offset;if(Et.isInstancedInterleavedBuffer){for(let Kt=0;Kt<X.locationSize;Kt++)d(X.location+Kt,Et.meshPerAttribute);g.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Kt=0;Kt<X.locationSize;Kt++)m(X.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Kt=0;Kt<X.locationSize;Kt++)w(X.location+Kt,wt/X.locationSize,et,gt,kt*ut,(Yt+wt/X.locationSize*Kt)*ut,At)}else{if(ct.isInstancedBufferAttribute){for(let Et=0;Et<X.locationSize;Et++)d(X.location+Et,ct.meshPerAttribute);g.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Et=0;Et<X.locationSize;Et++)m(X.location+Et);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Et=0;Et<X.locationSize;Et++)w(X.location+Et,wt/X.locationSize,et,gt,wt*ut,wt/X.locationSize*Et*ut,At)}}else if(B!==void 0){const gt=B[Y];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(X.location,gt);break;case 3:i.vertexAttrib3fv(X.location,gt);break;case 4:i.vertexAttrib4fv(X.location,gt);break;default:i.vertexAttrib1fv(X.location,gt)}}}}U()}function J(){W();for(const g in n){const T=n[g];for(const k in T){const H=T[k];for(const Q in H)p(H[Q].object),delete H[Q];delete T[k]}delete n[g]}}function O(g){if(n[g.id]===void 0)return;const T=n[g.id];for(const k in T){const H=T[k];for(const Q in H)p(H[Q].object),delete H[Q];delete T[k]}delete n[g.id]}function N(g){for(const T in n){const k=n[T];if(k[g.id]===void 0)continue;const H=k[g.id];for(const Q in H)p(H[Q].object),delete H[Q];delete k[g.id]}}function W(){R(),a=!0,o!==r&&(o=r,f(o.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:W,resetDefaultState:R,dispose:J,releaseStatesOfGeometry:O,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:m,disableUnusedAttributes:U}}function hd(i,t,e){let n;function r(f){n=f}function o(f,p){i.drawArrays(n,f,p),e.update(p,n,1)}function a(f,p,v){v!==0&&(i.drawArraysInstanced(n,f,p,v),e.update(p,n,v))}function l(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,p,0,v);let M=0;for(let E=0;E<v;E++)M+=p[E];e.update(M,n,1)}function u(f,p,v,_){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<f.length;E++)a(f[E],p[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(n,f,0,p,0,_,0,v);let E=0;for(let A=0;A<v;A++)E+=p[A];for(let A=0;A<_.length;A++)e.update(E,n,_[A])}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function fd(i,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(O){return!(O!==fn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(O){const N=O===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==wn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==An&&!N)}function u(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const p=u(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const v=e.logarithmicDepthBuffer===!0,_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=M>0,J=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:l,precision:f,logarithmicDepthBuffer:v,maxTextures:_,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:A,maxAttributes:m,maxVertexUniforms:d,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:L,maxSamples:J}}function dd(i){const t=this;let e=null,n=0,r=!1,o=!1;const a=new Zn,l=new Qt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||n!==0||r;return r=_,n=v.length,M},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,_){e=p(v,_,0)},this.setState=function(v,_,M){const E=v.clippingPlanes,A=v.clipIntersection,m=v.clipShadows,d=i.get(v);if(!r||E===null||E.length===0||o&&!m)o?p(null):f();else{const U=o?0:n,w=U*4;let L=d.clippingState||null;u.value=L,L=p(E,_,w,M);for(let J=0;J!==w;++J)L[J]=e[J];d.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(v,_,M,E){const A=v!==null?v.length:0;let m=null;if(A!==0){if(m=u.value,E!==!0||m===null){const d=M+A*4,U=_.matrixWorldInverse;l.getNormalMatrix(U),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,L=M;w!==A;++w,L+=4)a.copy(v[w]).applyMatrix4(U,l),a.normal.toArray(m,L),m[L+3]=a.constant}u.value=m,u.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,m}}function pd(i){let t=new WeakMap;function e(a,l){return l===zs?a.mapping=Fi:l===Hs&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===zs||l===Hs)if(t.has(a)){const u=t.get(a).texture;return e(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const f=new Tu(u.height);return f.fromEquirectangularTexture(i,a),t.set(a,f),a.addEventListener("dispose",r),e(f.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Ml extends gl{constructor(t=-1,e=1,n=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-t,a=n+t,l=r+e,u=r-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,a=o+f*this.view.width,l-=p*this.view.offsetY,u=l-p*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Li=4,Ta=[.125,.215,.35,.446,.526,.582],ti=20,Ps=new Ml,Aa=new fe;let Ls=null,Ds=0,Us=0,Is=!1;const Jn=(1+Math.sqrt(5))/2,Ci=1/Jn,ba=[new Z(-Jn,Ci,0),new Z(Jn,Ci,0),new Z(-Ci,0,Jn),new Z(Ci,0,Jn),new Z(0,Jn,-Ci),new Z(0,Jn,Ci),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class wa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ls=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),Is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,r,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ls,Ds,Us),this._renderer.xr.enabled=Is,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ls=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),Is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:rr,format:fn,colorSpace:kn,depthBuffer:!1},r=Ra(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ra(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=md(o)),this._blurMaterial=gd(o,t,e)}return r}_compileMaterial(t){const e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,Ps)}_sceneToCubeUV(t,e,n,r){const l=new un(90,1,e,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,_=p.toneMapping;p.getClearColor(Aa),p.toneMapping=Hn,p.autoClear=!1;const M=new Pi({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),E=new Ze(new lr,M);let A=!1;const m=t.background;m?m.isColor&&(M.color.copy(m),t.background=null,A=!0):(M.color.copy(Aa),A=!0);for(let d=0;d<6;d++){const U=d%3;U===0?(l.up.set(0,u[d],0),l.lookAt(f[d],0,0)):U===1?(l.up.set(0,0,u[d]),l.lookAt(0,f[d],0)):(l.up.set(0,u[d],0),l.lookAt(0,0,f[d]));const w=this._cubeSize;Fr(r,U*w,d>2?w:0,w,w),p.setRenderTarget(r),A&&p.render(E,l),p.render(t,l)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=_,p.autoClear=v,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Fi||t.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ca());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=t;const u=this._cubeSize;Fr(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(a,Ps)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=ba[(r-o-1)%ba.length];this._blur(t,o-1,o,a,l)}e.autoClear=n}_blur(t,e,n,r,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",o),this._halfBlur(a,t,n,n,r,"longitudinal",o)}_halfBlur(t,e,n,r,o,a,l){const u=this._renderer,f=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,v=new Ze(this._lodPlanes[r],f),_=f.uniforms,M=this._sizeLods[n]-1,E=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*ti-1),A=o/E,m=isFinite(o)?1+Math.floor(p*A):ti;m>ti&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const d=[];let U=0;for(let N=0;N<ti;++N){const W=N/A,R=Math.exp(-W*W/2);d.push(R),N===0?U+=R:N<m&&(U+=2*R)}for(let N=0;N<d.length;N++)d[N]=d[N]/U;_.envMap.value=t.texture,_.samples.value=m,_.weights.value=d,_.latitudinal.value=a==="latitudinal",l&&(_.poleAxis.value=l);const{_lodMax:w}=this;_.dTheta.value=E,_.mipInt.value=w-n;const L=this._sizeLods[r],J=3*L*(r>w-Li?r-w+Li:0),O=4*(this._cubeSize-L);Fr(e,J,O,3*L,2*L),u.setRenderTarget(e),u.render(v,Ps)}}function md(i){const t=[],e=[],n=[];let r=i;const o=i-Li+1+Ta.length;for(let a=0;a<o;a++){const l=Math.pow(2,r);e.push(l);let u=1/l;a>i-Li?u=Ta[a-i+Li-1]:a===0&&(u=0),n.push(u);const f=1/(l-2),p=-f,v=1+f,_=[p,p,v,p,v,v,p,p,v,v,p,v],M=6,E=6,A=3,m=2,d=1,U=new Float32Array(A*E*M),w=new Float32Array(m*E*M),L=new Float32Array(d*E*M);for(let O=0;O<M;O++){const N=O%3*2/3-1,W=O>2?0:-1,R=[N,W,0,N+2/3,W,0,N+2/3,W+1,0,N,W,0,N+2/3,W+1,0,N,W+1,0];U.set(R,A*E*O),w.set(_,m*E*O);const g=[O,O,O,O,O,O];L.set(g,d*E*O)}const J=new Cn;J.setAttribute("position",new _n(U,A)),J.setAttribute("uv",new _n(w,m)),J.setAttribute("faceIndex",new _n(L,d)),t.push(J),r>Li&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ra(i,t,e){const n=new ri(i,t,e);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function gd(i,t,e){const n=new Float32Array(ti),r=new Z(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ca(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Pa(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _d(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const u=l.mapping,f=u===zs||u===Hs,p=u===Fi||u===Oi;if(f||p){let v=t.get(l);const _=v!==void 0?v.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==_)return e===null&&(e=new wa(i)),v=f?e.fromEquirectangular(l,v):e.fromCubemap(l,v),v.texture.pmremVersion=l.pmremVersion,t.set(l,v),v.texture;if(v!==void 0)return v.texture;{const M=l.image;return f&&M&&M.height>0||p&&M&&r(M)?(e===null&&(e=new wa(i)),v=f?e.fromEquirectangular(l):e.fromCubemap(l),v.texture.pmremVersion=l.pmremVersion,t.set(l,v),l.addEventListener("dispose",o),v.texture):null}}}return l}function r(l){let u=0;const f=6;for(let p=0;p<f;p++)l[p]!==void 0&&u++;return u===f}function o(l){const u=l.target;u.removeEventListener("dispose",o);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function vd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function xd(i,t,e,n){const r={},o=new WeakMap;function a(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);for(const E in _.morphAttributes){const A=_.morphAttributes[E];for(let m=0,d=A.length;m<d;m++)t.remove(A[m])}_.removeEventListener("dispose",a),delete r[_.id];const M=o.get(_);M&&(t.remove(M),o.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(v,_){return r[_.id]===!0||(_.addEventListener("dispose",a),r[_.id]=!0,e.memory.geometries++),_}function u(v){const _=v.attributes;for(const E in _)t.update(_[E],i.ARRAY_BUFFER);const M=v.morphAttributes;for(const E in M){const A=M[E];for(let m=0,d=A.length;m<d;m++)t.update(A[m],i.ARRAY_BUFFER)}}function f(v){const _=[],M=v.index,E=v.attributes.position;let A=0;if(M!==null){const U=M.array;A=M.version;for(let w=0,L=U.length;w<L;w+=3){const J=U[w+0],O=U[w+1],N=U[w+2];_.push(J,O,O,N,N,J)}}else if(E!==void 0){const U=E.array;A=E.version;for(let w=0,L=U.length/3-1;w<L;w+=3){const J=w+0,O=w+1,N=w+2;_.push(J,O,O,N,N,J)}}else return;const m=new(ll(_)?pl:dl)(_,1);m.version=A;const d=o.get(v);d&&t.remove(d),o.set(v,m)}function p(v){const _=o.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&f(v)}else f(v);return o.get(v)}return{get:l,update:u,getWireframeAttribute:p}}function Md(i,t,e){let n;function r(_){n=_}let o,a;function l(_){o=_.type,a=_.bytesPerElement}function u(_,M){i.drawElements(n,M,o,_*a),e.update(M,n,1)}function f(_,M,E){E!==0&&(i.drawElementsInstanced(n,M,o,_*a,E),e.update(M,n,E))}function p(_,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,M,0,o,_,0,E);let m=0;for(let d=0;d<E;d++)m+=M[d];e.update(m,n,1)}function v(_,M,E,A){if(E===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_.length;d++)f(_[d]/a,M[d],A[d]);else{m.multiDrawElementsInstancedWEBGL(n,M,0,o,_,0,A,0,E);let d=0;for(let U=0;U<E;U++)d+=M[U];for(let U=0;U<A.length;U++)e.update(d,n,A[U])}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=v}function Sd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(o/3);break;case i.LINES:e.lines+=l*(o/2);break;case i.LINE_STRIP:e.lines+=l*(o-1);break;case i.LINE_LOOP:e.lines+=l*o;break;case i.POINTS:e.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function yd(i,t,e){const n=new WeakMap,r=new Le;function o(a,l,u){const f=a.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=p!==void 0?p.length:0;let _=n.get(l);if(_===void 0||_.count!==v){let g=function(){W.dispose(),n.delete(l),l.removeEventListener("dispose",g)};var M=g;_!==void 0&&_.texture.dispose();const E=l.morphAttributes.position!==void 0,A=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],U=l.morphAttributes.normal||[],w=l.morphAttributes.color||[];let L=0;E===!0&&(L=1),A===!0&&(L=2),m===!0&&(L=3);let J=l.attributes.position.count*L,O=1;J>t.maxTextureSize&&(O=Math.ceil(J/t.maxTextureSize),J=t.maxTextureSize);const N=new Float32Array(J*O*4*v),W=new ul(N,J,O,v);W.type=An,W.needsUpdate=!0;const R=L*4;for(let T=0;T<v;T++){const k=d[T],H=U[T],Q=w[T],tt=J*O*4*T;for(let B=0;B<k.count;B++){const Y=B*R;E===!0&&(r.fromBufferAttribute(k,B),N[tt+Y+0]=r.x,N[tt+Y+1]=r.y,N[tt+Y+2]=r.z,N[tt+Y+3]=0),A===!0&&(r.fromBufferAttribute(H,B),N[tt+Y+4]=r.x,N[tt+Y+5]=r.y,N[tt+Y+6]=r.z,N[tt+Y+7]=0),m===!0&&(r.fromBufferAttribute(Q,B),N[tt+Y+8]=r.x,N[tt+Y+9]=r.y,N[tt+Y+10]=r.z,N[tt+Y+11]=Q.itemSize===4?r.w:1)}}_={count:v,texture:W,size:new le(J,O)},n.set(l,_),l.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let E=0;for(let m=0;m<f.length;m++)E+=f[m];const A=l.morphTargetsRelative?1:1-E;u.getUniforms().setValue(i,"morphTargetBaseInfluence",A),u.getUniforms().setValue(i,"morphTargetInfluences",f)}u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:o}}function Ed(i,t,e,n){let r=new WeakMap;function o(u){const f=n.render.frame,p=u.geometry,v=t.get(u,p);if(r.get(v)!==f&&(t.update(v),r.set(v,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==f&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const _=u.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return v}function a(){r=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}class Sl extends Ge{constructor(t,e,n,r,o,a,l,u,f,p=Ui){if(p!==Ui&&p!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===Ui&&(n=ii),n===void 0&&p===zi&&(n=Bi),super(null,r,o,a,l,u,p,n,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:rn,this.minFilter=u!==void 0?u:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yl=new Ge,La=new Sl(1,1),El=new ul,Tl=new au,Al=new _l,Da=[],Ua=[],Ia=new Float32Array(16),Na=new Float32Array(9),Fa=new Float32Array(4);function Vi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let o=Da[r];if(o===void 0&&(o=new Float32Array(r),Da[r]=o),t!==0){n.toArray(o,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(o,l)}return o}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function es(i,t){let e=Ua[t];e===void 0&&(e=new Int32Array(t),Ua[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Td(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function bd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Rd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(we(e,n))return;Fa.set(n),i.uniformMatrix2fv(this.addr,!1,Fa),Re(e,n)}}function Cd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(we(e,n))return;Na.set(n),i.uniformMatrix3fv(this.addr,!1,Na),Re(e,n)}}function Pd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(we(e,n))return;Ia.set(n),i.uniformMatrix4fv(this.addr,!1,Ia),Re(e,n)}}function Ld(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function Id(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function Nd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function Od(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Bd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function zd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(La.compareFunction=al,o=La):o=yl,e.setTexture2D(t||o,r)}function Hd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Tl,r)}function Gd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Al,r)}function Vd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||El,r)}function kd(i){switch(i){case 5126:return Td;case 35664:return Ad;case 35665:return bd;case 35666:return wd;case 35674:return Rd;case 35675:return Cd;case 35676:return Pd;case 5124:case 35670:return Ld;case 35667:case 35671:return Dd;case 35668:case 35672:return Ud;case 35669:case 35673:return Id;case 5125:return Nd;case 36294:return Fd;case 36295:return Od;case 36296:return Bd;case 35678:case 36198:case 36298:case 36306:case 35682:return zd;case 35679:case 36299:case 36307:return Hd;case 35680:case 36300:case 36308:case 36293:return Gd;case 36289:case 36303:case 36311:case 36292:return Vd}}function Wd(i,t){i.uniform1fv(this.addr,t)}function Xd(i,t){const e=Vi(t,this.size,2);i.uniform2fv(this.addr,e)}function Yd(i,t){const e=Vi(t,this.size,3);i.uniform3fv(this.addr,e)}function jd(i,t){const e=Vi(t,this.size,4);i.uniform4fv(this.addr,e)}function qd(i,t){const e=Vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kd(i,t){const e=Vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $d(i,t){const e=Vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zd(i,t){i.uniform1iv(this.addr,t)}function Jd(i,t){i.uniform2iv(this.addr,t)}function Qd(i,t){i.uniform3iv(this.addr,t)}function tp(i,t){i.uniform4iv(this.addr,t)}function ep(i,t){i.uniform1uiv(this.addr,t)}function np(i,t){i.uniform2uiv(this.addr,t)}function ip(i,t){i.uniform3uiv(this.addr,t)}function rp(i,t){i.uniform4uiv(this.addr,t)}function sp(i,t,e){const n=this.cache,r=t.length,o=es(e,r);we(n,o)||(i.uniform1iv(this.addr,o),Re(n,o));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||yl,o[a])}function op(i,t,e){const n=this.cache,r=t.length,o=es(e,r);we(n,o)||(i.uniform1iv(this.addr,o),Re(n,o));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Tl,o[a])}function ap(i,t,e){const n=this.cache,r=t.length,o=es(e,r);we(n,o)||(i.uniform1iv(this.addr,o),Re(n,o));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Al,o[a])}function lp(i,t,e){const n=this.cache,r=t.length,o=es(e,r);we(n,o)||(i.uniform1iv(this.addr,o),Re(n,o));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||El,o[a])}function cp(i){switch(i){case 5126:return Wd;case 35664:return Xd;case 35665:return Yd;case 35666:return jd;case 35674:return qd;case 35675:return Kd;case 35676:return $d;case 5124:case 35670:return Zd;case 35667:case 35671:return Jd;case 35668:case 35672:return Qd;case 35669:case 35673:return tp;case 5125:return ep;case 36294:return np;case 36295:return ip;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return lp}}class up{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kd(e.type)}}class hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cp(e.type)}}class fp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const l=r[o];l.setValue(t,e[l.id],n)}}}const Ns=/(\w+)(\])?(\[|\.)?/g;function Oa(i,t){i.seq.push(t),i.map[t.id]=t}function dp(i,t,e){const n=i.name,r=n.length;for(Ns.lastIndex=0;;){const o=Ns.exec(n),a=Ns.lastIndex;let l=o[1];const u=o[2]==="]",f=o[3];if(u&&(l=l|0),f===void 0||f==="["&&a+2===r){Oa(e,f===void 0?new up(l,i,t):new hp(l,i,t));break}else{let v=e.map[l];v===void 0&&(v=new fp(l),Oa(e,v)),e=v}}}class Wr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),a=t.getUniformLocation(e,o.name);dp(o,a,this)}}setValue(t,e,n,r){const o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,a=e.length;o!==a;++o){const l=e[o],u=n[l.id];u.needsUpdate!==!1&&l.setValue(t,u.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,o=t.length;r!==o;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ba(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pp=37297;let mp=0;function gp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=r;a<o;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}function _p(i){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(i);let n;switch(t===e?n="":t===qr&&e===jr?n="LinearDisplayP3ToLinearSRGB":t===jr&&e===qr&&(n="LinearSRGBToLinearDisplayP3"),i){case kn:case Qr:return[n,"LinearTransferOETF"];case pn:case Ao:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function za(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+gp(i.getShaderSource(t),a)}else return r}function vp(i,t){const e=_p(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function xp(i,t){let e;switch(t){case Ic:e="Linear";break;case Nc:e="Reinhard";break;case Fc:e="OptimizedCineon";break;case Oc:e="ACESFilmic";break;case zc:e="AgX";break;case Hc:e="Neutral";break;case Bc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Or=new Z;function Mp(){ce.getLuminanceCoefficients(Or);const i=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function yp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ep(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(t,r),a=o.name;let l=1;o.type===i.FLOAT_MAT2&&(l=2),o.type===i.FLOAT_MAT3&&(l=3),o.type===i.FLOAT_MAT4&&(l=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function er(i){return i!==""}function Ha(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ga(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(i){return i.replace(Tp,bp)}const Ap=new Map;function bp(i,t){let e=Jt[t];if(e===void 0){const n=Ap.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _o(e)}const wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Va(i){return i.replace(wp,Rp)}function Rp(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ka(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Cp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Pp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Oi:t="ENVMAP_TYPE_CUBE";break;case Jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function Dp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ka:t="ENVMAP_BLENDING_MULTIPLY";break;case Dc:t="ENVMAP_BLENDING_MIX";break;case Uc:t="ENVMAP_BLENDING_ADD";break}return t}function Up(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ip(i,t,e,n){const r=i.getContext(),o=e.defines;let a=e.vertexShader,l=e.fragmentShader;const u=Cp(e),f=Pp(e),p=Lp(e),v=Dp(e),_=Up(e),M=Sp(e),E=yp(o),A=r.createProgram();let m,d,U=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(er).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(er).join(`
`),d.length>0&&(d+=`
`)):(m=[ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),d=[ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?xp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,vp("linearToOutputTexel",e.outputColorSpace),Mp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),a=_o(a),a=Ha(a,e),a=Ga(a,e),l=_o(l),l=Ha(l,e),l=Ga(l,e),a=Va(a),l=Va(l),e.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,m=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=U+m+a,L=U+d+l,J=Ba(r,r.VERTEX_SHADER,w),O=Ba(r,r.FRAGMENT_SHADER,L);r.attachShader(A,J),r.attachShader(A,O),e.index0AttributeName!==void 0?r.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function N(T){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(A).trim(),H=r.getShaderInfoLog(J).trim(),Q=r.getShaderInfoLog(O).trim();let tt=!0,B=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,J,O);else{const Y=za(r,J,"vertex"),X=za(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+Y+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||Q==="")&&(B=!1);B&&(T.diagnostics={runnable:tt,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:Q,prefix:d}})}r.deleteShader(J),r.deleteShader(O),W=new Wr(r,A),R=Ep(r,A)}let W;this.getUniforms=function(){return W===void 0&&N(this),W};let R;this.getAttributes=function(){return R===void 0&&N(this),R};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(A,pp)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mp++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=J,this.fragmentShader=O,this}let Np=0;class Fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Op(t),e.set(t,n)),n}}class Op{constructor(t){this.id=Np++,this.code=t,this.usedTimes=0}}function Bp(i,t,e,n,r,o,a){const l=new hl,u=new Fp,f=new Set,p=[],v=r.logarithmicDepthBuffer,_=r.vertexTextures;let M=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(R){return f.add(R),R===0?"uv":`uv${R}`}function m(R,g,T,k,H){const Q=k.fog,tt=H.geometry,B=R.isMeshStandardMaterial?k.environment:null,Y=(R.isMeshStandardMaterial?e:t).get(R.envMap||B),X=Y&&Y.mapping===Jr?Y.image.height:null,ct=E[R.type];R.precision!==null&&(M=r.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const gt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,wt=gt!==void 0?gt.length:0;let zt=0;tt.morphAttributes.position!==void 0&&(zt=1),tt.morphAttributes.normal!==void 0&&(zt=2),tt.morphAttributes.color!==void 0&&(zt=3);let qt,et,ut,At;if(ct){const se=mn[ct];qt=se.vertexShader,et=se.fragmentShader}else qt=R.vertexShader,et=R.fragmentShader,u.update(R),ut=u.getVertexShaderID(R),At=u.getFragmentShaderID(R);const Et=i.getRenderTarget(),kt=H.isInstancedMesh===!0,Yt=H.isBatchedMesh===!0,Kt=!!R.map,ue=!!R.matcap,I=!!Y,$t=!!R.aoMap,Vt=!!R.lightMap,ae=!!R.bumpMap,Pt=!!R.normalMap,Se=!!R.displacementMap,Ht=!!R.emissiveMap,Wt=!!R.metalnessMap,D=!!R.roughnessMap,S=R.anisotropy>0,$=R.clearcoat>0,st=R.dispersion>0,ot=R.iridescence>0,rt=R.sheen>0,Lt=R.transmission>0,_t=S&&!!R.anisotropyMap,Tt=$&&!!R.clearcoatMap,Xt=$&&!!R.clearcoatNormalMap,ft=$&&!!R.clearcoatRoughnessMap,Mt=ot&&!!R.iridescenceMap,ee=ot&&!!R.iridescenceThicknessMap,Ut=rt&&!!R.sheenColorMap,St=rt&&!!R.sheenRoughnessMap,Gt=!!R.specularMap,Zt=!!R.specularColorMap,pe=!!R.specularIntensityMap,z=Lt&&!!R.transmissionMap,ht=Lt&&!!R.thicknessMap,nt=!!R.gradientMap,it=!!R.alphaMap,dt=R.alphaTest>0,It=!!R.alphaHash,ne=!!R.extensions;let he=Hn;R.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(he=i.toneMapping);const Ee={shaderID:ct,shaderType:R.type,shaderName:R.name,vertexShader:qt,fragmentShader:et,defines:R.defines,customVertexShaderID:ut,customFragmentShaderID:At,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Yt,batchingColor:Yt&&H._colorsTexture!==null,instancing:kt,instancingColor:kt&&H.instanceColor!==null,instancingMorph:kt&&H.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:kn,alphaToCoverage:!!R.alphaToCoverage,map:Kt,matcap:ue,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:X,aoMap:$t,lightMap:Vt,bumpMap:ae,normalMap:Pt,displacementMap:_&&Se,emissiveMap:Ht,normalMapObjectSpace:Pt&&R.normalMapType===Xc,normalMapTangentSpace:Pt&&R.normalMapType===Wc,metalnessMap:Wt,roughnessMap:D,anisotropy:S,anisotropyMap:_t,clearcoat:$,clearcoatMap:Tt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:ft,dispersion:st,iridescence:ot,iridescenceMap:Mt,iridescenceThicknessMap:ee,sheen:rt,sheenColorMap:Ut,sheenRoughnessMap:St,specularMap:Gt,specularColorMap:Zt,specularIntensityMap:pe,transmission:Lt,transmissionMap:z,thicknessMap:ht,gradientMap:nt,opaque:R.transparent===!1&&R.blending===Di&&R.alphaToCoverage===!1,alphaMap:it,alphaTest:dt,alphaHash:It,combine:R.combine,mapUv:Kt&&A(R.map.channel),aoMapUv:$t&&A(R.aoMap.channel),lightMapUv:Vt&&A(R.lightMap.channel),bumpMapUv:ae&&A(R.bumpMap.channel),normalMapUv:Pt&&A(R.normalMap.channel),displacementMapUv:Se&&A(R.displacementMap.channel),emissiveMapUv:Ht&&A(R.emissiveMap.channel),metalnessMapUv:Wt&&A(R.metalnessMap.channel),roughnessMapUv:D&&A(R.roughnessMap.channel),anisotropyMapUv:_t&&A(R.anisotropyMap.channel),clearcoatMapUv:Tt&&A(R.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&A(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&A(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&A(R.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&A(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&A(R.sheenColorMap.channel),sheenRoughnessMapUv:St&&A(R.sheenRoughnessMap.channel),specularMapUv:Gt&&A(R.specularMap.channel),specularColorMapUv:Zt&&A(R.specularColorMap.channel),specularIntensityMapUv:pe&&A(R.specularIntensityMap.channel),transmissionMapUv:z&&A(R.transmissionMap.channel),thicknessMapUv:ht&&A(R.thicknessMap.channel),alphaMapUv:it&&A(R.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Pt||S),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!tt.attributes.uv&&(Kt||it),fog:!!Q,useFog:R.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:H.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:zt,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:Kt&&R.map.isVideoTexture===!0&&ce.getTransfer(R.map.colorSpace)===ve,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Tn,flipSided:R.side===je,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:ne&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&R.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ee.vertexUv1s=f.has(1),Ee.vertexUv2s=f.has(2),Ee.vertexUv3s=f.has(3),f.clear(),Ee}function d(R){const g=[];if(R.shaderID?g.push(R.shaderID):(g.push(R.customVertexShaderID),g.push(R.customFragmentShaderID)),R.defines!==void 0)for(const T in R.defines)g.push(T),g.push(R.defines[T]);return R.isRawShaderMaterial===!1&&(U(g,R),w(g,R),g.push(i.outputColorSpace)),g.push(R.customProgramCacheKey),g.join()}function U(R,g){R.push(g.precision),R.push(g.outputColorSpace),R.push(g.envMapMode),R.push(g.envMapCubeUVHeight),R.push(g.mapUv),R.push(g.alphaMapUv),R.push(g.lightMapUv),R.push(g.aoMapUv),R.push(g.bumpMapUv),R.push(g.normalMapUv),R.push(g.displacementMapUv),R.push(g.emissiveMapUv),R.push(g.metalnessMapUv),R.push(g.roughnessMapUv),R.push(g.anisotropyMapUv),R.push(g.clearcoatMapUv),R.push(g.clearcoatNormalMapUv),R.push(g.clearcoatRoughnessMapUv),R.push(g.iridescenceMapUv),R.push(g.iridescenceThicknessMapUv),R.push(g.sheenColorMapUv),R.push(g.sheenRoughnessMapUv),R.push(g.specularMapUv),R.push(g.specularColorMapUv),R.push(g.specularIntensityMapUv),R.push(g.transmissionMapUv),R.push(g.thicknessMapUv),R.push(g.combine),R.push(g.fogExp2),R.push(g.sizeAttenuation),R.push(g.morphTargetsCount),R.push(g.morphAttributeCount),R.push(g.numDirLights),R.push(g.numPointLights),R.push(g.numSpotLights),R.push(g.numSpotLightMaps),R.push(g.numHemiLights),R.push(g.numRectAreaLights),R.push(g.numDirLightShadows),R.push(g.numPointLightShadows),R.push(g.numSpotLightShadows),R.push(g.numSpotLightShadowsWithMaps),R.push(g.numLightProbes),R.push(g.shadowMapType),R.push(g.toneMapping),R.push(g.numClippingPlanes),R.push(g.numClipIntersection),R.push(g.depthPacking)}function w(R,g){l.disableAll(),g.supportsVertexTextures&&l.enable(0),g.instancing&&l.enable(1),g.instancingColor&&l.enable(2),g.instancingMorph&&l.enable(3),g.matcap&&l.enable(4),g.envMap&&l.enable(5),g.normalMapObjectSpace&&l.enable(6),g.normalMapTangentSpace&&l.enable(7),g.clearcoat&&l.enable(8),g.iridescence&&l.enable(9),g.alphaTest&&l.enable(10),g.vertexColors&&l.enable(11),g.vertexAlphas&&l.enable(12),g.vertexUv1s&&l.enable(13),g.vertexUv2s&&l.enable(14),g.vertexUv3s&&l.enable(15),g.vertexTangents&&l.enable(16),g.anisotropy&&l.enable(17),g.alphaHash&&l.enable(18),g.batching&&l.enable(19),g.dispersion&&l.enable(20),g.batchingColor&&l.enable(21),R.push(l.mask),l.disableAll(),g.fog&&l.enable(0),g.useFog&&l.enable(1),g.flatShading&&l.enable(2),g.logarithmicDepthBuffer&&l.enable(3),g.skinning&&l.enable(4),g.morphTargets&&l.enable(5),g.morphNormals&&l.enable(6),g.morphColors&&l.enable(7),g.premultipliedAlpha&&l.enable(8),g.shadowMapEnabled&&l.enable(9),g.doubleSided&&l.enable(10),g.flipSided&&l.enable(11),g.useDepthPacking&&l.enable(12),g.dithering&&l.enable(13),g.transmission&&l.enable(14),g.sheen&&l.enable(15),g.opaque&&l.enable(16),g.pointsUvs&&l.enable(17),g.decodeVideoTexture&&l.enable(18),g.alphaToCoverage&&l.enable(19),R.push(l.mask)}function L(R){const g=E[R.type];let T;if(g){const k=mn[g];T=Mu.clone(k.uniforms)}else T=R.uniforms;return T}function J(R,g){let T;for(let k=0,H=p.length;k<H;k++){const Q=p[k];if(Q.cacheKey===g){T=Q,++T.usedTimes;break}}return T===void 0&&(T=new Ip(i,g,R,o),p.push(T)),T}function O(R){if(--R.usedTimes===0){const g=p.indexOf(R);p[g]=p[p.length-1],p.pop(),R.destroy()}}function N(R){u.remove(R)}function W(){u.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:L,acquireProgram:J,releaseProgram:O,releaseShaderCache:N,programs:p,dispose:W}}function zp(){let i=new WeakMap;function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function e(o){i.delete(o)}function n(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Hp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xa(){const i=[];let t=0;const e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function a(v,_,M,E,A,m){let d=i[t];return d===void 0?(d={id:v.id,object:v,geometry:_,material:M,groupOrder:E,renderOrder:v.renderOrder,z:A,group:m},i[t]=d):(d.id=v.id,d.object=v,d.geometry=_,d.material=M,d.groupOrder=E,d.renderOrder=v.renderOrder,d.z=A,d.group=m),t++,d}function l(v,_,M,E,A,m){const d=a(v,_,M,E,A,m);M.transmission>0?n.push(d):M.transparent===!0?r.push(d):e.push(d)}function u(v,_,M,E,A,m){const d=a(v,_,M,E,A,m);M.transmission>0?n.unshift(d):M.transparent===!0?r.unshift(d):e.unshift(d)}function f(v,_){e.length>1&&e.sort(v||Hp),n.length>1&&n.sort(_||Wa),r.length>1&&r.sort(_||Wa)}function p(){for(let v=t,_=i.length;v<_;v++){const M=i[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:l,unshift:u,finish:p,sort:f}}function Gp(){let i=new WeakMap;function t(n,r){const o=i.get(n);let a;return o===void 0?(a=new Xa,i.set(n,[a])):r>=o.length?(a=new Xa,o.push(a)):a=o[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new fe};break;case"SpotLight":e={position:new Z,direction:new Z,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function kp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wp=0;function Xp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yp(i){const t=new Vp,e=kp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new Z);const r=new Z,o=new be,a=new be;function l(f){let p=0,v=0,_=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let M=0,E=0,A=0,m=0,d=0,U=0,w=0,L=0,J=0,O=0,N=0;f.sort(Xp);for(let R=0,g=f.length;R<g;R++){const T=f[R],k=T.color,H=T.intensity,Q=T.distance,tt=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)p+=k.r*H,v+=k.g*H,_+=k.b*H;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],H);N++}else if(T.isDirectionalLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,X=e.get(T);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.directionalShadow[M]=X,n.directionalShadowMap[M]=tt,n.directionalShadowMatrix[M]=T.shadow.matrix,U++}n.directional[M]=B,M++}else if(T.isSpotLight){const B=t.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(k).multiplyScalar(H),B.distance=Q,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[A]=B;const Y=T.shadow;if(T.map&&(n.spotLightMap[J]=T.map,J++,Y.updateMatrices(T),T.castShadow&&O++),n.spotLightMatrix[A]=Y.matrix,T.castShadow){const X=e.get(T);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.spotShadow[A]=X,n.spotShadowMap[A]=tt,L++}A++}else if(T.isRectAreaLight){const B=t.get(T);B.color.copy(k).multiplyScalar(H),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=B,m++}else if(T.isPointLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const Y=T.shadow,X=e.get(T);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,n.pointShadow[E]=X,n.pointShadowMap[E]=tt,n.pointShadowMatrix[E]=T.shadow.matrix,w++}n.point[E]=B,E++}else if(T.isHemisphereLight){const B=t.get(T);B.skyColor.copy(T.color).multiplyScalar(H),B.groundColor.copy(T.groundColor).multiplyScalar(H),n.hemi[d]=B,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=v,n.ambient[2]=_;const W=n.hash;(W.directionalLength!==M||W.pointLength!==E||W.spotLength!==A||W.rectAreaLength!==m||W.hemiLength!==d||W.numDirectionalShadows!==U||W.numPointShadows!==w||W.numSpotShadows!==L||W.numSpotMaps!==J||W.numLightProbes!==N)&&(n.directional.length=M,n.spot.length=A,n.rectArea.length=m,n.point.length=E,n.hemi.length=d,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=U,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=L+J-O,n.spotLightMap.length=J,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=N,W.directionalLength=M,W.pointLength=E,W.spotLength=A,W.rectAreaLength=m,W.hemiLength=d,W.numDirectionalShadows=U,W.numPointShadows=w,W.numSpotShadows=L,W.numSpotMaps=J,W.numLightProbes=N,n.version=Wp++)}function u(f,p){let v=0,_=0,M=0,E=0,A=0;const m=p.matrixWorldInverse;for(let d=0,U=f.length;d<U;d++){const w=f[d];if(w.isDirectionalLight){const L=n.directional[v];L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(m),v++}else if(w.isSpotLight){const L=n.spot[M];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(m),L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(m),M++}else if(w.isRectAreaLight){const L=n.rectArea[E];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(m),a.identity(),o.copy(w.matrixWorld),o.premultiply(m),a.extractRotation(o),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),E++}else if(w.isPointLight){const L=n.point[_];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(m),_++}else if(w.isHemisphereLight){const L=n.hemi[A];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(m),A++}}}return{setup:l,setupView:u,state:n}}function Ya(i){const t=new Yp(i),e=[],n=[];function r(p){f.camera=p,e.length=0,n.length=0}function o(p){e.push(p)}function a(p){n.push(p)}function l(){t.setup(e)}function u(p){t.setupView(e,p)}const f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function jp(i){let t=new WeakMap;function e(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Ya(i),t.set(r,[l])):o>=a.length?(l=new Ya(i),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:e,dispose:n}}class qp extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kp extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jp(i,t,e){let n=new vl;const r=new le,o=new le,a=new Le,l=new qp({depthPacking:kc}),u=new Kp,f={},p=e.maxTextureSize,v={[Gn]:je,[je]:Gn,[Tn]:Tn},_=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:$p,fragmentShader:Zp}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new Cn;E.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ze(E,_),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qa;let d=this.type;this.render=function(O,N,W){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||O.length===0)return;const R=i.getRenderTarget(),g=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),k=i.state;k.setBlending(zn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=d!==En&&this.type===En,Q=d===En&&this.type!==En;for(let tt=0,B=O.length;tt<B;tt++){const Y=O[tt],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ct=X.getFrameExtents();if(r.multiply(ct),o.copy(X.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/ct.x),r.x=o.x*ct.x,X.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/ct.y),r.y=o.y*ct.y,X.mapSize.y=o.y)),X.map===null||H===!0||Q===!0){const wt=this.type!==En?{minFilter:rn,magFilter:rn}:{};X.map!==null&&X.map.dispose(),X.map=new ri(r.x,r.y,wt),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const gt=X.getViewportCount();for(let wt=0;wt<gt;wt++){const zt=X.getViewport(wt);a.set(o.x*zt.x,o.y*zt.y,o.x*zt.z,o.y*zt.w),k.viewport(a),X.updateMatrices(Y,wt),n=X.getFrustum(),L(N,W,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===En&&U(X,W),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(R,g,T)};function U(O,N){const W=t.update(A);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ri(r.x,r.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(N,null,W,_,A,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(N,null,W,M,A,null)}function w(O,N,W,R){let g=null;const T=W.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(T!==void 0)g=T;else if(g=W.isPointLight===!0?u:l,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const k=g.uuid,H=N.uuid;let Q=f[k];Q===void 0&&(Q={},f[k]=Q);let tt=Q[H];tt===void 0&&(tt=g.clone(),Q[H]=tt,N.addEventListener("dispose",J)),g=tt}if(g.visible=N.visible,g.wireframe=N.wireframe,R===En?g.side=N.shadowSide!==null?N.shadowSide:N.side:g.side=N.shadowSide!==null?N.shadowSide:v[N.side],g.alphaMap=N.alphaMap,g.alphaTest=N.alphaTest,g.map=N.map,g.clipShadows=N.clipShadows,g.clippingPlanes=N.clippingPlanes,g.clipIntersection=N.clipIntersection,g.displacementMap=N.displacementMap,g.displacementScale=N.displacementScale,g.displacementBias=N.displacementBias,g.wireframeLinewidth=N.wireframeLinewidth,g.linewidth=N.linewidth,W.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const k=i.properties.get(g);k.light=W}return g}function L(O,N,W,R,g){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&g===En)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,O.matrixWorld);const H=t.update(O),Q=O.material;if(Array.isArray(Q)){const tt=H.groups;for(let B=0,Y=tt.length;B<Y;B++){const X=tt[B],ct=Q[X.materialIndex];if(ct&&ct.visible){const gt=w(O,ct,R,g);O.onBeforeShadow(i,O,N,W,H,gt,X),i.renderBufferDirect(W,null,H,gt,O,X),O.onAfterShadow(i,O,N,W,H,gt,X)}}}else if(Q.visible){const tt=w(O,Q,R,g);O.onBeforeShadow(i,O,N,W,H,tt,null),i.renderBufferDirect(W,null,H,tt,O,null),O.onAfterShadow(i,O,N,W,H,tt,null)}}const k=O.children;for(let H=0,Q=k.length;H<Q;H++)L(k[H],N,W,R,g)}function J(O){O.target.removeEventListener("dispose",J);for(const W in f){const R=f[W],g=O.target.uuid;g in R&&(R[g].dispose(),delete R[g])}}}function Qp(i){function t(){let z=!1;const ht=new Le;let nt=null;const it=new Le(0,0,0,0);return{setMask:function(dt){nt!==dt&&!z&&(i.colorMask(dt,dt,dt,dt),nt=dt)},setLocked:function(dt){z=dt},setClear:function(dt,It,ne,he,Ee){Ee===!0&&(dt*=he,It*=he,ne*=he),ht.set(dt,It,ne,he),it.equals(ht)===!1&&(i.clearColor(dt,It,ne,he),it.copy(ht))},reset:function(){z=!1,nt=null,it.set(-1,0,0,0)}}}function e(){let z=!1,ht=null,nt=null,it=null;return{setTest:function(dt){dt?At(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(dt){ht!==dt&&!z&&(i.depthMask(dt),ht=dt)},setFunc:function(dt){if(nt!==dt){switch(dt){case Ac:i.depthFunc(i.NEVER);break;case bc:i.depthFunc(i.ALWAYS);break;case wc:i.depthFunc(i.LESS);break;case Xr:i.depthFunc(i.LEQUAL);break;case Rc:i.depthFunc(i.EQUAL);break;case Cc:i.depthFunc(i.GEQUAL);break;case Pc:i.depthFunc(i.GREATER);break;case Lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=dt}},setLocked:function(dt){z=dt},setClear:function(dt){it!==dt&&(i.clearDepth(dt),it=dt)},reset:function(){z=!1,ht=null,nt=null,it=null}}}function n(){let z=!1,ht=null,nt=null,it=null,dt=null,It=null,ne=null,he=null,Ee=null;return{setTest:function(se){z||(se?At(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(se){ht!==se&&!z&&(i.stencilMask(se),ht=se)},setFunc:function(se,Ve,Oe){(nt!==se||it!==Ve||dt!==Oe)&&(i.stencilFunc(se,Ve,Oe),nt=se,it=Ve,dt=Oe)},setOp:function(se,Ve,Oe){(It!==se||ne!==Ve||he!==Oe)&&(i.stencilOp(se,Ve,Oe),It=se,ne=Ve,he=Oe)},setLocked:function(se){z=se},setClear:function(se){Ee!==se&&(i.clearStencil(se),Ee=se)},reset:function(){z=!1,ht=null,nt=null,it=null,dt=null,It=null,ne=null,he=null,Ee=null}}}const r=new t,o=new e,a=new n,l=new WeakMap,u=new WeakMap;let f={},p={},v=new WeakMap,_=[],M=null,E=!1,A=null,m=null,d=null,U=null,w=null,L=null,J=null,O=new fe(0,0,0),N=0,W=!1,R=null,g=null,T=null,k=null,H=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,B=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),tt=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),tt=B>=2);let X=null,ct={};const gt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),zt=new Le().fromArray(gt),qt=new Le().fromArray(wt);function et(z,ht,nt,it){const dt=new Uint8Array(4),It=i.createTexture();i.bindTexture(z,It),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<nt;ne++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(ht+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return It}const ut={};ut[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),At(i.DEPTH_TEST),o.setFunc(Xr),ae(!1),Pt(Jo),At(i.CULL_FACE),$t(zn);function At(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function Et(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function kt(z,ht){return p[z]!==ht?(i.bindFramebuffer(z,ht),p[z]=ht,z===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ht),z===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Yt(z,ht){let nt=_,it=!1;if(z){nt=v.get(ht),nt===void 0&&(nt=[],v.set(ht,nt));const dt=z.textures;if(nt.length!==dt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let It=0,ne=dt.length;It<ne;It++)nt[It]=i.COLOR_ATTACHMENT0+It;nt.length=dt.length,it=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,it=!0);it&&i.drawBuffers(nt)}function Kt(z){return M!==z?(i.useProgram(z),M=z,!0):!1}const ue={[Qn]:i.FUNC_ADD,[lc]:i.FUNC_SUBTRACT,[cc]:i.FUNC_REVERSE_SUBTRACT};ue[uc]=i.MIN,ue[hc]=i.MAX;const I={[fc]:i.ZERO,[dc]:i.ONE,[pc]:i.SRC_COLOR,[Os]:i.SRC_ALPHA,[Mc]:i.SRC_ALPHA_SATURATE,[vc]:i.DST_COLOR,[gc]:i.DST_ALPHA,[mc]:i.ONE_MINUS_SRC_COLOR,[Bs]:i.ONE_MINUS_SRC_ALPHA,[xc]:i.ONE_MINUS_DST_COLOR,[_c]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[yc]:i.ONE_MINUS_CONSTANT_COLOR,[Ec]:i.CONSTANT_ALPHA,[Tc]:i.ONE_MINUS_CONSTANT_ALPHA};function $t(z,ht,nt,it,dt,It,ne,he,Ee,se){if(z===zn){E===!0&&(Et(i.BLEND),E=!1);return}if(E===!1&&(At(i.BLEND),E=!0),z!==ac){if(z!==A||se!==W){if((m!==Qn||w!==Qn)&&(i.blendEquation(i.FUNC_ADD),m=Qn,w=Qn),se)switch(z){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qo:i.blendFunc(i.ONE,i.ONE);break;case ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ea:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ea:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}d=null,U=null,L=null,J=null,O.set(0,0,0),N=0,A=z,W=se}return}dt=dt||ht,It=It||nt,ne=ne||it,(ht!==m||dt!==w)&&(i.blendEquationSeparate(ue[ht],ue[dt]),m=ht,w=dt),(nt!==d||it!==U||It!==L||ne!==J)&&(i.blendFuncSeparate(I[nt],I[it],I[It],I[ne]),d=nt,U=it,L=It,J=ne),(he.equals(O)===!1||Ee!==N)&&(i.blendColor(he.r,he.g,he.b,Ee),O.copy(he),N=Ee),A=z,W=!1}function Vt(z,ht){z.side===Tn?Et(i.CULL_FACE):At(i.CULL_FACE);let nt=z.side===je;ht&&(nt=!nt),ae(nt),z.blending===Di&&z.transparent===!1?$t(zn):$t(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const it=z.stencilWrite;a.setTest(it),it&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ht(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?At(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(z){R!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),R=z)}function Pt(z){z!==rc?(At(i.CULL_FACE),z!==g&&(z===Jo?i.cullFace(i.BACK):z===sc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),g=z}function Se(z){z!==T&&(tt&&i.lineWidth(z),T=z)}function Ht(z,ht,nt){z?(At(i.POLYGON_OFFSET_FILL),(k!==ht||H!==nt)&&(i.polygonOffset(ht,nt),k=ht,H=nt)):Et(i.POLYGON_OFFSET_FILL)}function Wt(z){z?At(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function D(z){z===void 0&&(z=i.TEXTURE0+Q-1),X!==z&&(i.activeTexture(z),X=z)}function S(z,ht,nt){nt===void 0&&(X===null?nt=i.TEXTURE0+Q-1:nt=X);let it=ct[nt];it===void 0&&(it={type:void 0,texture:void 0},ct[nt]=it),(it.type!==z||it.texture!==ht)&&(X!==nt&&(i.activeTexture(nt),X=nt),i.bindTexture(z,ht||ut[z]),it.type=z,it.texture=ht)}function $(){const z=ct[X];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(z){zt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),zt.copy(z))}function St(z){qt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),qt.copy(z))}function Gt(z,ht){let nt=u.get(ht);nt===void 0&&(nt=new WeakMap,u.set(ht,nt));let it=nt.get(z);it===void 0&&(it=i.getUniformBlockIndex(ht,z.name),nt.set(z,it))}function Zt(z,ht){const it=u.get(ht).get(z);l.get(ht)!==it&&(i.uniformBlockBinding(ht,it,z.__bindingPointIndex),l.set(ht,it))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},X=null,ct={},p={},v=new WeakMap,_=[],M=null,E=!1,A=null,m=null,d=null,U=null,w=null,L=null,J=null,O=new fe(0,0,0),N=0,W=!1,R=null,g=null,T=null,k=null,H=null,zt.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:At,disable:Et,bindFramebuffer:kt,drawBuffers:Yt,useProgram:Kt,setBlending:$t,setMaterial:Vt,setFlipSided:ae,setCullFace:Pt,setLineWidth:Se,setPolygonOffset:Ht,setScissorTest:Wt,activeTexture:D,bindTexture:S,unbindTexture:$,compressedTexImage2D:st,compressedTexImage3D:ot,texImage2D:Mt,texImage3D:ee,updateUBOMapping:Gt,uniformBlockBinding:Zt,texStorage2D:Xt,texStorage3D:ft,texSubImage2D:rt,texSubImage3D:Lt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:Ut,viewport:St,reset:pe}}function ja(i,t,e,n){const r=tm(n);switch(e){case tl:return i*t;case nl:return i*t;case il:return i*t*2;case rl:return i*t/r.components*r.byteLength;case yo:return i*t/r.components*r.byteLength;case sl:return i*t*2/r.components*r.byteLength;case Eo:return i*t*2/r.components*r.byteLength;case el:return i*t*3/r.components*r.byteLength;case fn:return i*t*4/r.components*r.byteLength;case To:return i*t*4/r.components*r.byteLength;case zr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ws:case Ys:return Math.max(i,16)*Math.max(t,8)/4;case ks:case Xs:return Math.max(i,8)*Math.max(t,8)/2;case js:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Js:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case kr:case uo:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ol:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case po:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tm(i){switch(i){case wn:case Za:return{byteLength:1,components:1};case ir:case Ja:case rr:return{byteLength:2,components:1};case Mo:case So:return{byteLength:2,components:4};case ii:case xo:case An:return{byteLength:4,components:1};case Qa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function em(i,t,e,n,r,o,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new le,p=new WeakMap;let v;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,S){return M?new OffscreenCanvas(D,S):$r("canvas")}function A(D,S,$){let st=1;const ot=Wt(D);if((ot.width>$||ot.height>$)&&(st=$/Math.max(ot.width,ot.height)),st<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const rt=Math.floor(st*ot.width),Lt=Math.floor(st*ot.height);v===void 0&&(v=E(rt,Lt));const _t=S?E(rt,Lt):v;return _t.width=rt,_t.height=Lt,_t.getContext("2d").drawImage(D,0,0,rt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+rt+"x"+Lt+")."),_t}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==rn&&D.minFilter!==hn}function d(D){i.generateMipmap(D)}function U(D,S,$,st,ot=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let rt=S;if(S===i.RED&&($===i.FLOAT&&(rt=i.R32F),$===i.HALF_FLOAT&&(rt=i.R16F),$===i.UNSIGNED_BYTE&&(rt=i.R8)),S===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(rt=i.R8UI),$===i.UNSIGNED_SHORT&&(rt=i.R16UI),$===i.UNSIGNED_INT&&(rt=i.R32UI),$===i.BYTE&&(rt=i.R8I),$===i.SHORT&&(rt=i.R16I),$===i.INT&&(rt=i.R32I)),S===i.RG&&($===i.FLOAT&&(rt=i.RG32F),$===i.HALF_FLOAT&&(rt=i.RG16F),$===i.UNSIGNED_BYTE&&(rt=i.RG8)),S===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(rt=i.RG8UI),$===i.UNSIGNED_SHORT&&(rt=i.RG16UI),$===i.UNSIGNED_INT&&(rt=i.RG32UI),$===i.BYTE&&(rt=i.RG8I),$===i.SHORT&&(rt=i.RG16I),$===i.INT&&(rt=i.RG32I)),S===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),S===i.RGBA){const Lt=ot?Yr:ce.getTransfer(st);$===i.FLOAT&&(rt=i.RGBA32F),$===i.HALF_FLOAT&&(rt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(rt=Lt===ve?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function w(D,S){let $;return D?S===null||S===ii||S===Bi?$=i.DEPTH24_STENCIL8:S===An?$=i.DEPTH32F_STENCIL8:S===ir&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ii||S===Bi?$=i.DEPTH_COMPONENT24:S===An?$=i.DEPTH_COMPONENT32F:S===ir&&($=i.DEPTH_COMPONENT16),$}function L(D,S){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==rn&&D.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function J(D){const S=D.target;S.removeEventListener("dispose",J),N(S),S.isVideoTexture&&p.delete(S)}function O(D){const S=D.target;S.removeEventListener("dispose",O),R(S)}function N(D){const S=n.get(D);if(S.__webglInit===void 0)return;const $=D.source,st=_.get($);if(st){const ot=st[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&W(D),Object.keys(st).length===0&&_.delete($)}n.remove(D)}function W(D){const S=n.get(D);i.deleteTexture(S.__webglTexture);const $=D.source,st=_.get($);delete st[S.__cacheKey],a.memory.textures--}function R(D){const S=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(S.__webglFramebuffer[st]))for(let ot=0;ot<S.__webglFramebuffer[st].length;ot++)i.deleteFramebuffer(S.__webglFramebuffer[st][ot]);else i.deleteFramebuffer(S.__webglFramebuffer[st]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[st])}else{if(Array.isArray(S.__webglFramebuffer))for(let st=0;st<S.__webglFramebuffer.length;st++)i.deleteFramebuffer(S.__webglFramebuffer[st]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let st=0;st<S.__webglColorRenderbuffer.length;st++)S.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[st]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const $=D.textures;for(let st=0,ot=$.length;st<ot;st++){const rt=n.get($[st]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove($[st])}n.remove(D)}let g=0;function T(){g=0}function k(){const D=g;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),g+=1,D}function H(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function Q(D,S){const $=n.get(D);if(D.isVideoTexture&&Se(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const st=D.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt($,D,S);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+S)}function tt(D,S){const $=n.get(D);if(D.version>0&&$.__version!==D.version){qt($,D,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+S)}function B(D,S){const $=n.get(D);if(D.version>0&&$.__version!==D.version){qt($,D,S);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+S)}function Y(D,S){const $=n.get(D);if(D.version>0&&$.__version!==D.version){et($,D,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+S)}const X={[Gs]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Vs]:i.MIRRORED_REPEAT},ct={[rn]:i.NEAREST,[Gc]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[cs]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},gt={[Yc]:i.NEVER,[Jc]:i.ALWAYS,[jc]:i.LESS,[al]:i.LEQUAL,[qc]:i.EQUAL,[Zc]:i.GEQUAL,[Kc]:i.GREATER,[$c]:i.NOTEQUAL};function wt(D,S){if(S.type===An&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===hn||S.magFilter===cs||S.magFilter===gr||S.magFilter===ni||S.minFilter===hn||S.minFilter===cs||S.minFilter===gr||S.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,X[S.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,X[S.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,X[S.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ct[S.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ct[S.minFilter]),S.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==gr&&S.minFilter!==ni||S.type===An&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function zt(D,S){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",J));const st=S.source;let ot=_.get(st);ot===void 0&&(ot={},_.set(st,ot));const rt=H(S);if(rt!==D.__cacheKey){ot[rt]===void 0&&(ot[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),ot[rt].usedTimes++;const Lt=ot[D.__cacheKey];Lt!==void 0&&(ot[D.__cacheKey].usedTimes--,Lt.usedTimes===0&&W(S)),D.__cacheKey=rt,D.__webglTexture=ot[rt].texture}return $}function qt(D,S,$){let st=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=i.TEXTURE_3D);const ot=zt(D,S),rt=S.source;e.bindTexture(st,D.__webglTexture,i.TEXTURE0+$);const Lt=n.get(rt);if(rt.version!==Lt.__version||ot===!0){e.activeTexture(i.TEXTURE0+$);const _t=ce.getPrimaries(ce.workingColorSpace),Tt=S.colorSpace===Bn?null:ce.getPrimaries(S.colorSpace),Xt=S.colorSpace===Bn||_t===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ft=A(S.image,!1,r.maxTextureSize);ft=Ht(S,ft);const Mt=o.convert(S.format,S.colorSpace),ee=o.convert(S.type);let Ut=U(S.internalFormat,Mt,ee,S.colorSpace,S.isVideoTexture);wt(st,S);let St;const Gt=S.mipmaps,Zt=S.isVideoTexture!==!0,pe=Lt.__version===void 0||ot===!0,z=rt.dataReady,ht=L(S,ft);if(S.isDepthTexture)Ut=w(S.format===zi,S.type),pe&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Ut,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Ut,ft.width,ft.height,0,Mt,ee,null));else if(S.isDataTexture)if(Gt.length>0){Zt&&pe&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,Gt[0].width,Gt[0].height);for(let nt=0,it=Gt.length;nt<it;nt++)St=Gt[nt],Zt?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,St.width,St.height,Mt,ee,St.data):e.texImage2D(i.TEXTURE_2D,nt,Ut,St.width,St.height,0,Mt,ee,St.data);S.generateMipmaps=!1}else Zt?(pe&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,ft.width,ft.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,Mt,ee,ft.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,ft.width,ft.height,0,Mt,ee,ft.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Zt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ut,Gt[0].width,Gt[0].height,ft.depth);for(let nt=0,it=Gt.length;nt<it;nt++)if(St=Gt[nt],S.format!==fn)if(Mt!==null)if(Zt){if(z)if(S.layerUpdates.size>0){const dt=ja(St.width,St.height,S.format,S.type);for(const It of S.layerUpdates){const ne=St.data.subarray(It*dt/St.data.BYTES_PER_ELEMENT,(It+1)*dt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,It,St.width,St.height,1,Mt,ne,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,St.width,St.height,ft.depth,Mt,St.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Ut,St.width,St.height,ft.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,St.width,St.height,ft.depth,Mt,ee,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Ut,St.width,St.height,ft.depth,0,Mt,ee,St.data)}else{Zt&&pe&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,Gt[0].width,Gt[0].height);for(let nt=0,it=Gt.length;nt<it;nt++)St=Gt[nt],S.format!==fn?Mt!==null?Zt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Ut,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,St.width,St.height,Mt,ee,St.data):e.texImage2D(i.TEXTURE_2D,nt,Ut,St.width,St.height,0,Mt,ee,St.data)}else if(S.isDataArrayTexture)if(Zt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ut,ft.width,ft.height,ft.depth),z)if(S.layerUpdates.size>0){const nt=ja(ft.width,ft.height,S.format,S.type);for(const it of S.layerUpdates){const dt=ft.data.subarray(it*nt/ft.data.BYTES_PER_ELEMENT,(it+1)*nt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ft.width,ft.height,1,Mt,ee,dt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Mt,ee,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,ft.width,ft.height,ft.depth,0,Mt,ee,ft.data);else if(S.isData3DTexture)Zt?(pe&&e.texStorage3D(i.TEXTURE_3D,ht,Ut,ft.width,ft.height,ft.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Mt,ee,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,ft.width,ft.height,ft.depth,0,Mt,ee,ft.data);else if(S.isFramebufferTexture){if(pe)if(Zt)e.texStorage2D(i.TEXTURE_2D,ht,Ut,ft.width,ft.height);else{let nt=ft.width,it=ft.height;for(let dt=0;dt<ht;dt++)e.texImage2D(i.TEXTURE_2D,dt,Ut,nt,it,0,Mt,ee,null),nt>>=1,it>>=1}}else if(Gt.length>0){if(Zt&&pe){const nt=Wt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Ut,nt.width,nt.height)}for(let nt=0,it=Gt.length;nt<it;nt++)St=Gt[nt],Zt?z&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Mt,ee,St):e.texImage2D(i.TEXTURE_2D,nt,Ut,Mt,ee,St);S.generateMipmaps=!1}else if(Zt){if(pe){const nt=Wt(ft);e.texStorage2D(i.TEXTURE_2D,ht,Ut,nt.width,nt.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,ee,ft)}else e.texImage2D(i.TEXTURE_2D,0,Ut,Mt,ee,ft);m(S)&&d(st),Lt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function et(D,S,$){if(S.image.length!==6)return;const st=zt(D,S),ot=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+$);const rt=n.get(ot);if(ot.version!==rt.__version||st===!0){e.activeTexture(i.TEXTURE0+$);const Lt=ce.getPrimaries(ce.workingColorSpace),_t=S.colorSpace===Bn?null:ce.getPrimaries(S.colorSpace),Tt=S.colorSpace===Bn||Lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Xt=S.isCompressedTexture||S.image[0].isCompressedTexture,ft=S.image[0]&&S.image[0].isDataTexture,Mt=[];for(let it=0;it<6;it++)!Xt&&!ft?Mt[it]=A(S.image[it],!0,r.maxCubemapSize):Mt[it]=ft?S.image[it].image:S.image[it],Mt[it]=Ht(S,Mt[it]);const ee=Mt[0],Ut=o.convert(S.format,S.colorSpace),St=o.convert(S.type),Gt=U(S.internalFormat,Ut,St,S.colorSpace),Zt=S.isVideoTexture!==!0,pe=rt.__version===void 0||st===!0,z=ot.dataReady;let ht=L(S,ee);wt(i.TEXTURE_CUBE_MAP,S);let nt;if(Xt){Zt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Gt,ee.width,ee.height);for(let it=0;it<6;it++){nt=Mt[it].mipmaps;for(let dt=0;dt<nt.length;dt++){const It=nt[dt];S.format!==fn?Ut!==null?Zt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt,0,0,It.width,It.height,Ut,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt,Gt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt,0,0,It.width,It.height,Ut,St,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt,Gt,It.width,It.height,0,Ut,St,It.data)}}}else{if(nt=S.mipmaps,Zt&&pe){nt.length>0&&ht++;const it=Wt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Gt,it.width,it.height)}for(let it=0;it<6;it++)if(ft){Zt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Mt[it].width,Mt[it].height,Ut,St,Mt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Gt,Mt[it].width,Mt[it].height,0,Ut,St,Mt[it].data);for(let dt=0;dt<nt.length;dt++){const ne=nt[dt].image[it].image;Zt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt+1,0,0,ne.width,ne.height,Ut,St,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt+1,Gt,ne.width,ne.height,0,Ut,St,ne.data)}}else{Zt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ut,St,Mt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Gt,Ut,St,Mt[it]);for(let dt=0;dt<nt.length;dt++){const It=nt[dt];Zt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt+1,0,0,Ut,St,It.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt+1,Gt,Ut,St,It.image[it])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),rt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function ut(D,S,$,st,ot,rt){const Lt=o.convert($.format,$.colorSpace),_t=o.convert($.type),Tt=U($.internalFormat,Lt,_t,$.colorSpace);if(!n.get(S).__hasExternalTextures){const ft=Math.max(1,S.width>>rt),Mt=Math.max(1,S.height>>rt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,rt,Tt,ft,Mt,S.depth,0,Lt,_t,null):e.texImage2D(ot,rt,Tt,ft,Mt,0,Lt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Pt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ot,n.get($).__webglTexture,0,ae(S)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ot,n.get($).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(D,S,$){if(i.bindRenderbuffer(i.RENDERBUFFER,D),S.depthBuffer){const st=S.depthTexture,ot=st&&st.isDepthTexture?st.type:null,rt=w(S.stencilBuffer,ot),Lt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=ae(S);Pt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,rt,S.width,S.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,rt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,rt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,D)}else{const st=S.textures;for(let ot=0;ot<st.length;ot++){const rt=st[ot],Lt=o.convert(rt.format,rt.colorSpace),_t=o.convert(rt.type),Tt=U(rt.internalFormat,Lt,_t,rt.colorSpace),Xt=ae(S);$&&Pt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Tt,S.width,S.height):Pt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,Tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(D,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const st=n.get(S.depthTexture).__webglTexture,ot=ae(S);if(S.depthTexture.format===Ui)Pt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(S.depthTexture.format===zi)Pt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function kt(D){const S=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!S.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Et(S.__webglFramebuffer,D)}else if($){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]=i.createRenderbuffer(),At(S.__webglDepthbuffer[st],D,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),At(S.__webglDepthbuffer,D,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(D,S,$){const st=n.get(D);S!==void 0&&ut(st.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&kt(D)}function Kt(D){const S=D.texture,$=n.get(D),st=n.get(S);D.addEventListener("dispose",O);const ot=D.textures,rt=D.isWebGLCubeRenderTarget===!0,Lt=ot.length>1;if(Lt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=S.version,a.memory.textures++),rt){$.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)$.__webglFramebuffer[_t][Tt]=i.createFramebuffer()}else $.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer=[];for(let _t=0;_t<S.mipmaps.length;_t++)$.__webglFramebuffer[_t]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let _t=0,Tt=ot.length;_t<Tt;_t++){const Xt=n.get(ot[_t]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Pt(D)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _t=0;_t<ot.length;_t++){const Tt=ot[_t];$.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[_t]);const Xt=o.convert(Tt.format,Tt.colorSpace),ft=o.convert(Tt.type),Mt=U(Tt.internalFormat,Xt,ft,Tt.colorSpace,D.isXRRenderTarget===!0),ee=ae(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Mt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,$.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),At($.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),wt(i.TEXTURE_CUBE_MAP,S);for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)ut($.__webglFramebuffer[_t][Tt],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else ut($.__webglFramebuffer[_t],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let _t=0,Tt=ot.length;_t<Tt;_t++){const Xt=ot[_t],ft=n.get(Xt);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),wt(i.TEXTURE_2D,Xt),ut($.__webglFramebuffer,D,Xt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m(Xt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_t=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,st.__webglTexture),wt(_t,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)ut($.__webglFramebuffer[Tt],D,S,i.COLOR_ATTACHMENT0,_t,Tt);else ut($.__webglFramebuffer,D,S,i.COLOR_ATTACHMENT0,_t,0);m(S)&&d(_t),e.unbindTexture()}D.depthBuffer&&kt(D)}function ue(D){const S=D.textures;for(let $=0,st=S.length;$<st;$++){const ot=S[$];if(m(ot)){const rt=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Lt=n.get(ot).__webglTexture;e.bindTexture(rt,Lt),d(rt),e.unbindTexture()}}}const I=[],$t=[];function Vt(D){if(D.samples>0){if(Pt(D)===!1){const S=D.textures,$=D.width,st=D.height;let ot=i.COLOR_BUFFER_BIT;const rt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(D),_t=S.length>1;if(_t)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const Xt=n.get(S[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,$,st,0,0,$,st,ot,i.NEAREST),u===!0&&(I.length=0,$t.length=0,I.push(i.COLOR_ATTACHMENT0+Tt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push(rt),$t.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,I))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const Xt=n.get(S[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&u){const S=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ae(D){return Math.min(r.maxSamples,D.samples)}function Pt(D){const S=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Se(D){const S=a.render.frame;p.get(D)!==S&&(p.set(D,S),D.update())}function Ht(D,S){const $=D.colorSpace,st=D.format,ot=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==kn&&$!==Bn&&(ce.getTransfer($)===ve?(st!==fn||ot!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),S}function Wt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(f.width=D.naturalWidth||D.width,f.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(f.width=D.displayWidth,f.height=D.displayHeight):(f.width=D.width,f.height=D.height),f}this.allocateTextureUnit=k,this.resetTextureUnits=T,this.setTexture2D=Q,this.setTexture2DArray=tt,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=Yt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Pt}function nm(i,t){function e(n,r=Bn){let o;const a=ce.getTransfer(r);if(n===wn)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Za)return i.BYTE;if(n===Ja)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===rr)return i.HALF_FLOAT;if(n===tl)return i.ALPHA;if(n===el)return i.RGB;if(n===fn)return i.RGBA;if(n===nl)return i.LUMINANCE;if(n===il)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===rl)return i.RED;if(n===yo)return i.RED_INTEGER;if(n===sl)return i.RG;if(n===Eo)return i.RG_INTEGER;if(n===To)return i.RGBA_INTEGER;if(n===zr||n===Hr||n===Gr||n===Vr)if(a===ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===zr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===zr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ks||n===Ws||n===Xs||n===Ys)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ks)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ws)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ys)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===js||n===qs||n===Ks)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===js||n===qs)return a===ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ks)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$s||n===Zs||n===Js||n===Qs||n===to||n===eo||n===no||n===io||n===ro||n===so||n===oo||n===ao||n===lo||n===co)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===$s)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zs)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Js)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qs)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===to)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eo)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===no)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===io)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oo)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lo)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return a===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kr||n===uo||n===ho)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===kr)return a===ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===fo||n===po||n===mo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===kr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===fo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class im extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Br extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rm={type:"move"};class Fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,a=null;const l=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){a=!0;for(const A of t.hand.values()){const m=e.getJointPose(A,n),d=this._getHandJoint(f,A);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const p=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],_=p.position.distanceTo(v.position),M=.02,E=.005;f.inputState.pinching&&_>M+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&_<=M-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Br;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,om=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class am{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ge,o=t.properties.get(r);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:sm,fragmentShader:om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ze(new cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lm extends Gi{constructor(t,e){super();const n=this;let r=null,o=1,a=null,l="local-floor",u=1,f=null,p=null,v=null,_=null,M=null,E=null;const A=new am,m=e.getContextAttributes();let d=null,U=null;const w=[],L=[],J=new le;let O=null;const N=new un;N.layers.enable(1),N.viewport=new Le;const W=new un;W.layers.enable(2),W.viewport=new Le;const R=[N,W],g=new im;g.layers.enable(1),g.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=w[et];return ut===void 0&&(ut=new Fs,w[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=w[et];return ut===void 0&&(ut=new Fs,w[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=w[et];return ut===void 0&&(ut=new Fs,w[et]=ut),ut.getHandSpace()};function H(et){const ut=L.indexOf(et.inputSource);if(ut===-1)return;const At=w[ut];At!==void 0&&(At.update(et.inputSource,et.frame,f||a),At.dispatchEvent({type:et.type,data:et.inputSource}))}function Q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",tt);for(let et=0;et<w.length;et++){const ut=L[et];ut!==null&&(L[et]=null,w[et].disconnect(ut))}T=null,k=null,A.reset(),t.setRenderTarget(d),M=null,_=null,v=null,r=null,U=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(J.width,J.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){l=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(et){f=et},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(et){if(r=et,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(J),r.renderState.layers===void 0){const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(r,e,ut),r.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new ri(M.framebufferWidth,M.framebufferHeight,{format:fn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,At=null,Et=null;m.depth&&(Et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?zi:Ui,At=m.stencil?Bi:ii);const kt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:o};v=new XRWebGLBinding(r,e),_=v.createProjectionLayer(kt),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),U=new ri(_.textureWidth,_.textureHeight,{format:fn,type:wn,depthTexture:new Sl(_.textureWidth,_.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(u),f=null,a=await r.requestReferenceSpace(l),qt.setContext(r),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function tt(et){for(let ut=0;ut<et.removed.length;ut++){const At=et.removed[ut],Et=L.indexOf(At);Et>=0&&(L[Et]=null,w[Et].disconnect(At))}for(let ut=0;ut<et.added.length;ut++){const At=et.added[ut];let Et=L.indexOf(At);if(Et===-1){for(let Yt=0;Yt<w.length;Yt++)if(Yt>=L.length){L.push(At),Et=Yt;break}else if(L[Yt]===null){L[Yt]=At,Et=Yt;break}if(Et===-1)break}const kt=w[Et];kt&&kt.connect(At)}}const B=new Z,Y=new Z;function X(et,ut,At){B.setFromMatrixPosition(ut.matrixWorld),Y.setFromMatrixPosition(At.matrixWorld);const Et=B.distanceTo(Y),kt=ut.projectionMatrix.elements,Yt=At.projectionMatrix.elements,Kt=kt[14]/(kt[10]-1),ue=kt[14]/(kt[10]+1),I=(kt[9]+1)/kt[5],$t=(kt[9]-1)/kt[5],Vt=(kt[8]-1)/kt[0],ae=(Yt[8]+1)/Yt[0],Pt=Kt*Vt,Se=Kt*ae,Ht=Et/(-Vt+ae),Wt=Ht*-Vt;ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Wt),et.translateZ(Ht),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert();const D=Kt+Ht,S=ue+Ht,$=Pt-Wt,st=Se+(Et-Wt),ot=I*ue/S*D,rt=$t*ue/S*D;et.projectionMatrix.makePerspective($,st,ot,rt,D,S),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}function ct(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(r===null)return;A.texture!==null&&(et.near=A.depthNear,et.far=A.depthFar),g.near=W.near=N.near=et.near,g.far=W.far=N.far=et.far,(T!==g.near||k!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),T=g.near,k=g.far,N.near=T,N.far=k,W.near=T,W.far=k,N.updateProjectionMatrix(),W.updateProjectionMatrix(),et.updateProjectionMatrix());const ut=et.parent,At=g.cameras;ct(g,ut);for(let Et=0;Et<At.length;Et++)ct(At[Et],ut);At.length===2?X(g,N,W):g.projectionMatrix.copy(N.projectionMatrix),gt(et,g,ut)};function gt(et,ut,At){At===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(At.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=go*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(_===null&&M===null))return u},this.setFoveation=function(et){u=et,_!==null&&(_.fixedFoveation=et),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=et)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(g)};let wt=null;function zt(et,ut){if(p=ut.getViewerPose(f||a),E=ut,p!==null){const At=p.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Et=!1;At.length!==g.cameras.length&&(g.cameras.length=0,Et=!0);for(let Yt=0;Yt<At.length;Yt++){const Kt=At[Yt];let ue=null;if(M!==null)ue=M.getViewport(Kt);else{const $t=v.getViewSubImage(_,Kt);ue=$t.viewport,Yt===0&&(t.setRenderTargetTextures(U,$t.colorTexture,_.ignoreDepthValues?void 0:$t.depthStencilTexture),t.setRenderTarget(U))}let I=R[Yt];I===void 0&&(I=new un,I.layers.enable(Yt),I.viewport=new Le,R[Yt]=I),I.matrix.fromArray(Kt.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Kt.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(ue.x,ue.y,ue.width,ue.height),Yt===0&&(g.matrix.copy(I.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),Et===!0&&g.cameras.push(I)}const kt=r.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const Yt=v.getDepthInformation(At[0]);Yt&&Yt.isValid&&Yt.texture&&A.init(t,Yt,r.renderState)}}for(let At=0;At<w.length;At++){const Et=L[At],kt=w[At];Et!==null&&kt!==void 0&&kt.update(Et,ut,f||a)}wt&&wt(et,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),E=null}const qt=new xl;qt.setAnimationLoop(zt),this.setAnimationLoop=function(et){wt=et},this.dispose=function(){}}}const $n=new Rn,cm=new be;function um(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ml(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,U,w,L){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),v(m,d)):d.isMeshPhongMaterial?(o(m,d),p(m,d)):d.isMeshStandardMaterial?(o(m,d),_(m,d),d.isMeshPhysicalMaterial&&M(m,d,L)):d.isMeshMatcapMaterial?(o(m,d),E(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),A(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?u(m,d,U,w):d.isSpriteMaterial?f(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===je&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===je&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const U=t.get(d),w=U.envMap,L=U.envMapRotation;w&&(m.envMap.value=w,$n.copy(L),$n.x*=-1,$n.y*=-1,$n.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),m.envMapRotation.value.setFromMatrix4(cm.makeRotationFromEuler($n)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function u(m,d,U,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*U,m.scale.value=w*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function p(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function v(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function _(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function M(m,d,U){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===je&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=U.texture,m.transmissionSamplerSize.value.set(U.width,U.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function E(m,d){d.matcap&&(m.matcap.value=d.matcap)}function A(m,d){const U=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(U.matrixWorld),m.nearDistance.value=U.shadow.camera.near,m.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function hm(i,t,e,n){let r={},o={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(U,w){const L=w.program;n.uniformBlockBinding(U,L)}function f(U,w){let L=r[U.id];L===void 0&&(E(U),L=p(U),r[U.id]=L,U.addEventListener("dispose",m));const J=w.program;n.updateUBOMapping(U,J);const O=t.render.frame;o[U.id]!==O&&(_(U),o[U.id]=O)}function p(U){const w=v();U.__bindingPointIndex=w;const L=i.createBuffer(),J=U.__size,O=U.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,J,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,L),L}function v(){for(let U=0;U<l;U++)if(a.indexOf(U)===-1)return a.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const w=r[U.id],L=U.uniforms,J=U.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let O=0,N=L.length;O<N;O++){const W=Array.isArray(L[O])?L[O]:[L[O]];for(let R=0,g=W.length;R<g;R++){const T=W[R];if(M(T,O,R,J)===!0){const k=T.__offset,H=Array.isArray(T.value)?T.value:[T.value];let Q=0;for(let tt=0;tt<H.length;tt++){const B=H[tt],Y=A(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,k+Q,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,Q),Q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(U,w,L,J){const O=U.value,N=w+"_"+L;if(J[N]===void 0)return typeof O=="number"||typeof O=="boolean"?J[N]=O:J[N]=O.clone(),!0;{const W=J[N];if(typeof O=="number"||typeof O=="boolean"){if(W!==O)return J[N]=O,!0}else if(W.equals(O)===!1)return W.copy(O),!0}return!1}function E(U){const w=U.uniforms;let L=0;const J=16;for(let N=0,W=w.length;N<W;N++){const R=Array.isArray(w[N])?w[N]:[w[N]];for(let g=0,T=R.length;g<T;g++){const k=R[g],H=Array.isArray(k.value)?k.value:[k.value];for(let Q=0,tt=H.length;Q<tt;Q++){const B=H[Q],Y=A(B),X=L%J,ct=X%Y.boundary,gt=X+ct;L+=ct,gt!==0&&J-gt<Y.storage&&(L+=J-gt),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=L,L+=Y.storage}}}const O=L%J;return O>0&&(L+=J-O),U.__size=L,U.__cache={},this}function A(U){const w={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(w.boundary=4,w.storage=4):U.isVector2?(w.boundary=8,w.storage=8):U.isVector3||U.isColor?(w.boundary=16,w.storage=12):U.isVector4?(w.boundary=16,w.storage=16):U.isMatrix3?(w.boundary=48,w.storage=48):U.isMatrix4?(w.boundary=64,w.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),w}function m(U){const w=U.target;w.removeEventListener("dispose",m);const L=a.indexOf(w.__bindingPointIndex);a.splice(L,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function d(){for(const U in r)i.deleteBuffer(r[U]);a=[],r={},o={}}return{bind:u,update:f,dispose:d}}class fm{constructor(t={}){const{canvas:e=tu(),context:n=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const M=new Uint32Array(4),E=new Int32Array(4);let A=null,m=null;const d=[],U=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Hn,this.toneMappingExposure=1;const w=this;let L=!1,J=0,O=0,N=null,W=-1,R=null;const g=new Le,T=new Le;let k=null;const H=new fe(0);let Q=0,tt=e.width,B=e.height,Y=1,X=null,ct=null;const gt=new Le(0,0,tt,B),wt=new Le(0,0,tt,B);let zt=!1;const qt=new vl;let et=!1,ut=!1;const At=new be,Et=new Z,kt=new Le,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function ue(){return N===null?Y:1}let I=n;function $t(y,G){return e.getContext(y,G)}try{const y={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vo}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",dt,!1),I===null){const G="webgl2";if(I=$t(G,y),I===null)throw $t(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Vt,ae,Pt,Se,Ht,Wt,D,S,$,st,ot,rt,Lt,_t,Tt,Xt,ft,Mt,ee,Ut,St,Gt,Zt,pe;function z(){Vt=new vd(I),Vt.init(),Gt=new nm(I,Vt),ae=new fd(I,Vt,t,Gt),Pt=new Qp(I),Se=new Sd(I),Ht=new zp,Wt=new em(I,Vt,Pt,Ht,ae,Gt,Se),D=new pd(w),S=new _d(w),$=new wu(I),Zt=new ud(I,$),st=new xd(I,$,Se,Zt),ot=new Ed(I,st,$,Se),ee=new yd(I,ae,Wt),Xt=new dd(Ht),rt=new Bp(w,D,S,Vt,ae,Zt,Xt),Lt=new um(w,Ht),_t=new Gp,Tt=new jp(Vt),Mt=new cd(w,D,S,Pt,ot,_,u),ft=new Jp(w,ot,ae),pe=new hm(I,Se,ae,Pt),Ut=new hd(I,Vt,Se),St=new Md(I,Vt,Se),Se.programs=rt.programs,w.capabilities=ae,w.extensions=Vt,w.properties=Ht,w.renderLists=_t,w.shadowMap=ft,w.state=Pt,w.info=Se}z();const ht=new lm(w,I);this.xr=ht,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Vt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Vt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(tt,B,!1))},this.getSize=function(y){return y.set(tt,B)},this.setSize=function(y,G,j=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=y,B=G,e.width=Math.floor(y*Y),e.height=Math.floor(G*Y),j===!0&&(e.style.width=y+"px",e.style.height=G+"px"),this.setViewport(0,0,y,G)},this.getDrawingBufferSize=function(y){return y.set(tt*Y,B*Y).floor()},this.setDrawingBufferSize=function(y,G,j){tt=y,B=G,Y=j,e.width=Math.floor(y*j),e.height=Math.floor(G*j),this.setViewport(0,0,y,G)},this.getCurrentViewport=function(y){return y.copy(g)},this.getViewport=function(y){return y.copy(gt)},this.setViewport=function(y,G,j,q){y.isVector4?gt.set(y.x,y.y,y.z,y.w):gt.set(y,G,j,q),Pt.viewport(g.copy(gt).multiplyScalar(Y).round())},this.getScissor=function(y){return y.copy(wt)},this.setScissor=function(y,G,j,q){y.isVector4?wt.set(y.x,y.y,y.z,y.w):wt.set(y,G,j,q),Pt.scissor(T.copy(wt).multiplyScalar(Y).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(y){Pt.setScissorTest(zt=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){ct=y},this.getClearColor=function(y){return y.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(y=!0,G=!0,j=!0){let q=0;if(y){let V=!1;if(N!==null){const lt=N.texture.format;V=lt===To||lt===Eo||lt===yo}if(V){const lt=N.texture.type,pt=lt===wn||lt===ii||lt===ir||lt===Bi||lt===Mo||lt===So,yt=Mt.getClearColor(),bt=Mt.getClearAlpha(),Nt=yt.r,Ft=yt.g,Dt=yt.b;pt?(M[0]=Nt,M[1]=Ft,M[2]=Dt,M[3]=bt,I.clearBufferuiv(I.COLOR,0,M)):(E[0]=Nt,E[1]=Ft,E[2]=Dt,E[3]=bt,I.clearBufferiv(I.COLOR,0,E))}else q|=I.COLOR_BUFFER_BIT}G&&(q|=I.DEPTH_BUFFER_BIT),j&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),Tt.dispose(),Ht.dispose(),D.dispose(),S.dispose(),ot.dispose(),Zt.dispose(),pe.dispose(),rt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Oe),ht.removeEventListener("sessionend",ur),ke.stop()};function nt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=Se.autoReset,G=ft.enabled,j=ft.autoUpdate,q=ft.needsUpdate,V=ft.type;z(),Se.autoReset=y,ft.enabled=G,ft.autoUpdate=j,ft.needsUpdate=q,ft.type=V}function dt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function It(y){const G=y.target;G.removeEventListener("dispose",It),ne(G)}function ne(y){he(y),Ht.remove(y)}function he(y){const G=Ht.get(y).programs;G!==void 0&&(G.forEach(function(j){rt.releaseProgram(j)}),y.isShaderMaterial&&rt.releaseShaderCache(y))}this.renderBufferDirect=function(y,G,j,q,V,lt){G===null&&(G=Yt);const pt=V.isMesh&&V.matrixWorld.determinant()<0,yt=oi(y,G,j,q,V);Pt.setMaterial(q,pt);let bt=j.index,Nt=1;if(q.wireframe===!0){if(bt=st.getWireframeAttribute(j),bt===void 0)return;Nt=2}const Ft=j.drawRange,Dt=j.attributes.position;let jt=Ft.start*Nt,ge=(Ft.start+Ft.count)*Nt;lt!==null&&(jt=Math.max(jt,lt.start*Nt),ge=Math.min(ge,(lt.start+lt.count)*Nt)),bt!==null?(jt=Math.max(jt,0),ge=Math.min(ge,bt.count)):Dt!=null&&(jt=Math.max(jt,0),ge=Math.min(ge,Dt.count));const de=ge-jt;if(de<0||de===1/0)return;Zt.setup(V,q,yt,j,bt);let Me,ie=Ut;if(bt!==null&&(Me=$.get(bt),ie=St,ie.setIndex(Me)),V.isMesh)q.wireframe===!0?(Pt.setLineWidth(q.wireframeLinewidth*ue()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(V.isLine){let Rt=q.linewidth;Rt===void 0&&(Rt=1),Pt.setLineWidth(Rt*ue()),V.isLineSegments?ie.setMode(I.LINES):V.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else V.isPoints?ie.setMode(I.POINTS):V.isSprite&&ie.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ie.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))ie.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Rt=V._multiDrawStarts,Te=V._multiDrawCounts,re=V._multiDrawCount,qe=bt?$.get(bt).bytesPerElement:1,Pn=Ht.get(q).currentProgram.getUniforms();for(let Ie=0;Ie<re;Ie++)Pn.setValue(I,"_gl_DrawID",Ie),ie.render(Rt[Ie]/qe,Te[Ie])}else if(V.isInstancedMesh)ie.renderInstances(jt,de,V.count);else if(j.isInstancedBufferGeometry){const Rt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Te=Math.min(j.instanceCount,Rt);ie.renderInstances(jt,de,Te)}else ie.render(jt,de)};function Ee(y,G,j){y.transparent===!0&&y.side===Tn&&y.forceSinglePass===!1?(y.side=je,y.needsUpdate=!0,Be(y,G,j),y.side=Gn,y.needsUpdate=!0,Be(y,G,j),y.side=Tn):Be(y,G,j)}this.compile=function(y,G,j=null){j===null&&(j=y),m=Tt.get(j),m.init(G),U.push(m),j.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),y!==j&&y.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const q=new Set;return y.traverse(function(V){const lt=V.material;if(lt)if(Array.isArray(lt))for(let pt=0;pt<lt.length;pt++){const yt=lt[pt];Ee(yt,j,V),q.add(yt)}else Ee(lt,j,V),q.add(lt)}),U.pop(),m=null,q},this.compileAsync=function(y,G,j=null){const q=this.compile(y,G,j);return new Promise(V=>{function lt(){if(q.forEach(function(pt){Ht.get(pt).currentProgram.isReady()&&q.delete(pt)}),q.size===0){V(y);return}setTimeout(lt,10)}Vt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let se=null;function Ve(y){se&&se(y)}function Oe(){ke.stop()}function ur(){ke.start()}const ke=new xl;ke.setAnimationLoop(Ve),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(y){se=y,ht.setAnimationLoop(y),y===null?ke.stop():ke.start()},ht.addEventListener("sessionstart",Oe),ht.addEventListener("sessionend",ur),this.render=function(y,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(G),G=ht.getCamera()),y.isScene===!0&&y.onBeforeRender(w,y,G,N),m=Tt.get(y,U.length),m.init(G),U.push(m),At.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),qt.setFromProjectionMatrix(At),ut=this.localClippingEnabled,et=Xt.init(this.clippingPlanes,ut),A=_t.get(y,d.length),A.init(),d.push(A),ht.enabled===!0&&ht.isPresenting===!0){const lt=w.xr.getDepthSensingMesh();lt!==null&&ki(lt,G,-1/0,w.sortObjects)}ki(y,G,0,w.sortObjects),A.finish(),w.sortObjects===!0&&A.sort(X,ct),Kt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Kt&&Mt.addToRenderList(A,y),this.info.render.frame++,et===!0&&Xt.beginShadows();const j=m.state.shadowsArray;ft.render(j,y,G),et===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=A.opaque,V=A.transmissive;if(m.setupLights(),G.isArrayCamera){const lt=G.cameras;if(V.length>0)for(let pt=0,yt=lt.length;pt<yt;pt++){const bt=lt[pt];dn(q,V,y,bt)}Kt&&Mt.render(y);for(let pt=0,yt=lt.length;pt<yt;pt++){const bt=lt[pt];tn(A,y,bt,bt.viewport)}}else V.length>0&&dn(q,V,y,G),Kt&&Mt.render(y),tn(A,y,G);N!==null&&(Wt.updateMultisampleRenderTarget(N),Wt.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(w,y,G),Zt.resetDefaultState(),W=-1,R=null,U.pop(),U.length>0?(m=U[U.length-1],et===!0&&Xt.setGlobalState(w.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?A=d[d.length-1]:A=null};function ki(y,G,j,q){if(y.visible===!1)return;if(y.layers.test(G.layers)){if(y.isGroup)j=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(G);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||qt.intersectsSprite(y)){q&&kt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(At);const pt=ot.update(y),yt=y.material;yt.visible&&A.push(y,pt,yt,j,kt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||qt.intersectsObject(y))){const pt=ot.update(y),yt=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),kt.copy(y.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),kt.copy(pt.boundingSphere.center)),kt.applyMatrix4(y.matrixWorld).applyMatrix4(At)),Array.isArray(yt)){const bt=pt.groups;for(let Nt=0,Ft=bt.length;Nt<Ft;Nt++){const Dt=bt[Nt],jt=yt[Dt.materialIndex];jt&&jt.visible&&A.push(y,pt,jt,j,kt.z,Dt)}}else yt.visible&&A.push(y,pt,yt,j,kt.z,null)}}const lt=y.children;for(let pt=0,yt=lt.length;pt<yt;pt++)ki(lt[pt],G,j,q)}function tn(y,G,j,q){const V=y.opaque,lt=y.transmissive,pt=y.transparent;m.setupLightsView(j),et===!0&&Xt.setGlobalState(w.clippingPlanes,j),q&&Pt.viewport(g.copy(q)),V.length>0&&Wn(V,G,j),lt.length>0&&Wn(lt,G,j),pt.length>0&&Wn(pt,G,j),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function dn(y,G,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new ri(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?rr:wn,minFilter:ni,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const lt=m.state.transmissionRenderTarget[q.id],pt=q.viewport||g;lt.setSize(pt.z,pt.w);const yt=w.getRenderTarget();w.setRenderTarget(lt),w.getClearColor(H),Q=w.getClearAlpha(),Q<1&&w.setClearColor(16777215,.5),w.clear(),Kt&&Mt.render(j);const bt=w.toneMapping;w.toneMapping=Hn;const Nt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),et===!0&&Xt.setGlobalState(w.clippingPlanes,q),Wn(y,j,q),Wt.updateMultisampleRenderTarget(lt),Wt.updateRenderTargetMipmap(lt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Dt=0,jt=G.length;Dt<jt;Dt++){const ge=G[Dt],de=ge.object,Me=ge.geometry,ie=ge.material,Rt=ge.group;if(ie.side===Tn&&de.layers.test(q.layers)){const Te=ie.side;ie.side=je,ie.needsUpdate=!0,xe(de,j,q,Me,ie,Rt),ie.side=Te,ie.needsUpdate=!0,Ft=!0}}Ft===!0&&(Wt.updateMultisampleRenderTarget(lt),Wt.updateRenderTargetMipmap(lt))}w.setRenderTarget(yt),w.setClearColor(H,Q),Nt!==void 0&&(q.viewport=Nt),w.toneMapping=bt}function Wn(y,G,j){const q=G.isScene===!0?G.overrideMaterial:null;for(let V=0,lt=y.length;V<lt;V++){const pt=y[V],yt=pt.object,bt=pt.geometry,Nt=q===null?pt.material:q,Ft=pt.group;yt.layers.test(j.layers)&&xe(yt,G,j,bt,Nt,Ft)}}function xe(y,G,j,q,V,lt){y.onBeforeRender(w,G,j,q,V,lt),y.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.transparent===!0&&V.side===Tn&&V.forceSinglePass===!1?(V.side=je,V.needsUpdate=!0,w.renderBufferDirect(j,G,q,V,y,lt),V.side=Gn,V.needsUpdate=!0,w.renderBufferDirect(j,G,q,V,y,lt),V.side=Tn):w.renderBufferDirect(j,G,q,V,y,lt),y.onAfterRender(w,G,j,q,V,lt)}function Be(y,G,j){G.isScene!==!0&&(G=Yt);const q=Ht.get(y),V=m.state.lights,lt=m.state.shadowsArray,pt=V.state.version,yt=rt.getParameters(y,V.state,lt,G,j),bt=rt.getProgramCacheKey(yt);let Nt=q.programs;q.environment=y.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(y.isMeshStandardMaterial?S:D).get(y.envMap||q.environment),q.envMapRotation=q.environment!==null&&y.envMap===null?G.environmentRotation:y.envMapRotation,Nt===void 0&&(y.addEventListener("dispose",It),Nt=new Map,q.programs=Nt);let Ft=Nt.get(bt);if(Ft!==void 0){if(q.currentProgram===Ft&&q.lightsStateVersion===pt)return hr(y,yt),Ft}else yt.uniforms=rt.getUniforms(y),y.onBeforeCompile(yt,w),Ft=rt.acquireProgram(yt,bt),Nt.set(bt,Ft),q.uniforms=yt.uniforms;const Dt=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Dt.clippingPlanes=Xt.uniform),hr(y,yt),q.needsLights=ai(y),q.lightsStateVersion=pt,q.needsLights&&(Dt.ambientLightColor.value=V.state.ambient,Dt.lightProbe.value=V.state.probe,Dt.directionalLights.value=V.state.directional,Dt.directionalLightShadows.value=V.state.directionalShadow,Dt.spotLights.value=V.state.spot,Dt.spotLightShadows.value=V.state.spotShadow,Dt.rectAreaLights.value=V.state.rectArea,Dt.ltc_1.value=V.state.rectAreaLTC1,Dt.ltc_2.value=V.state.rectAreaLTC2,Dt.pointLights.value=V.state.point,Dt.pointLightShadows.value=V.state.pointShadow,Dt.hemisphereLights.value=V.state.hemi,Dt.directionalShadowMap.value=V.state.directionalShadowMap,Dt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Dt.spotShadowMap.value=V.state.spotShadowMap,Dt.spotLightMatrix.value=V.state.spotLightMatrix,Dt.spotLightMap.value=V.state.spotLightMap,Dt.pointShadowMap.value=V.state.pointShadowMap,Dt.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Ft,q.uniformsList=null,Ft}function si(y){if(y.uniformsList===null){const G=y.currentProgram.getUniforms();y.uniformsList=Wr.seqWithValue(G.seq,y.uniforms)}return y.uniformsList}function hr(y,G){const j=Ht.get(y);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function oi(y,G,j,q,V){G.isScene!==!0&&(G=Yt),Wt.resetTextureUnits();const lt=G.fog,pt=q.isMeshStandardMaterial?G.environment:null,yt=N===null?w.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:kn,bt=(q.isMeshStandardMaterial?S:D).get(q.envMap||pt),Nt=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ft=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Dt=!!j.morphAttributes.position,jt=!!j.morphAttributes.normal,ge=!!j.morphAttributes.color;let de=Hn;q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(de=w.toneMapping);const Me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ie=Me!==void 0?Me.length:0,Rt=Ht.get(q),Te=m.state.lights;if(et===!0&&(ut===!0||y!==R)){const ze=y===R&&q.id===W;Xt.setState(q,y,ze)}let re=!1;q.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Te.state.version||Rt.outputColorSpace!==yt||V.isBatchedMesh&&Rt.batching===!1||!V.isBatchedMesh&&Rt.batching===!0||V.isBatchedMesh&&Rt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Rt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Rt.instancing===!1||!V.isInstancedMesh&&Rt.instancing===!0||V.isSkinnedMesh&&Rt.skinning===!1||!V.isSkinnedMesh&&Rt.skinning===!0||V.isInstancedMesh&&Rt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Rt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Rt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Rt.instancingMorph===!1&&V.morphTexture!==null||Rt.envMap!==bt||q.fog===!0&&Rt.fog!==lt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Xt.numPlanes||Rt.numIntersection!==Xt.numIntersection)||Rt.vertexAlphas!==Nt||Rt.vertexTangents!==Ft||Rt.morphTargets!==Dt||Rt.morphNormals!==jt||Rt.morphColors!==ge||Rt.toneMapping!==de||Rt.morphTargetsCount!==ie)&&(re=!0):(re=!0,Rt.__version=q.version);let qe=Rt.currentProgram;re===!0&&(qe=Be(q,G,V));let Pn=!1,Ie=!1,li=!1;const ye=qe.getUniforms(),sn=Rt.uniforms;if(Pt.useProgram(qe.program)&&(Pn=!0,Ie=!0,li=!0),q.id!==W&&(W=q.id,Ie=!0),Pn||R!==y){ye.setValue(I,"projectionMatrix",y.projectionMatrix),ye.setValue(I,"viewMatrix",y.matrixWorldInverse);const ze=ye.map.cameraPosition;ze!==void 0&&ze.setValue(I,Et.setFromMatrixPosition(y.matrixWorld)),ae.logarithmicDepthBuffer&&ye.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ye.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),R!==y&&(R=y,Ie=!0,li=!0)}if(V.isSkinnedMesh){ye.setOptional(I,V,"bindMatrix"),ye.setOptional(I,V,"bindMatrixInverse");const ze=V.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ye.setValue(I,"boneTexture",ze.boneTexture,Wt))}V.isBatchedMesh&&(ye.setOptional(I,V,"batchingTexture"),ye.setValue(I,"batchingTexture",V._matricesTexture,Wt),ye.setOptional(I,V,"batchingIdTexture"),ye.setValue(I,"batchingIdTexture",V._indirectTexture,Wt),ye.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&ye.setValue(I,"batchingColorTexture",V._colorsTexture,Wt));const Ce=j.morphAttributes;if((Ce.position!==void 0||Ce.normal!==void 0||Ce.color!==void 0)&&ee.update(V,j,qe),(Ie||Rt.receiveShadow!==V.receiveShadow)&&(Rt.receiveShadow=V.receiveShadow,ye.setValue(I,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(sn.envMap.value=bt,sn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&G.environment!==null&&(sn.envMapIntensity.value=G.environmentIntensity),Ie&&(ye.setValue(I,"toneMappingExposure",w.toneMappingExposure),Rt.needsLights&&Wi(sn,li),lt&&q.fog===!0&&Lt.refreshFogUniforms(sn,lt),Lt.refreshMaterialUniforms(sn,q,Y,B,m.state.transmissionRenderTarget[y.id]),Wr.upload(I,si(Rt),sn,Wt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Wr.upload(I,si(Rt),sn,Wt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ye.setValue(I,"center",V.center),ye.setValue(I,"modelViewMatrix",V.modelViewMatrix),ye.setValue(I,"normalMatrix",V.normalMatrix),ye.setValue(I,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ze=q.uniformsGroups;for(let ci=0,ui=ze.length;ci<ui;ci++){const Xi=ze[ci];pe.update(Xi,qe),pe.bind(Xi,qe)}}return qe}function Wi(y,G){y.ambientLightColor.needsUpdate=G,y.lightProbe.needsUpdate=G,y.directionalLights.needsUpdate=G,y.directionalLightShadows.needsUpdate=G,y.pointLights.needsUpdate=G,y.pointLightShadows.needsUpdate=G,y.spotLights.needsUpdate=G,y.spotLightShadows.needsUpdate=G,y.rectAreaLights.needsUpdate=G,y.hemisphereLights.needsUpdate=G}function ai(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,G,j){Ht.get(y.texture).__webglTexture=G,Ht.get(y.depthTexture).__webglTexture=j;const q=Ht.get(y);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=j===void 0,q.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,G){const j=Ht.get(y);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(y,G=0,j=0){N=y,J=G,O=j;let q=!0,V=null,lt=!1,pt=!1;if(y){const bt=Ht.get(y);bt.__useDefaultFramebuffer!==void 0?(Pt.bindFramebuffer(I.FRAMEBUFFER,null),q=!1):bt.__webglFramebuffer===void 0?Wt.setupRenderTarget(y):bt.__hasExternalTextures&&Wt.rebindTextures(y,Ht.get(y.texture).__webglTexture,Ht.get(y.depthTexture).__webglTexture);const Nt=y.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(pt=!0);const Ft=Ht.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ft[G])?V=Ft[G][j]:V=Ft[G],lt=!0):y.samples>0&&Wt.useMultisampledRTT(y)===!1?V=Ht.get(y).__webglMultisampledFramebuffer:Array.isArray(Ft)?V=Ft[j]:V=Ft,g.copy(y.viewport),T.copy(y.scissor),k=y.scissorTest}else g.copy(gt).multiplyScalar(Y).floor(),T.copy(wt).multiplyScalar(Y).floor(),k=zt;if(Pt.bindFramebuffer(I.FRAMEBUFFER,V)&&q&&Pt.drawBuffers(y,V),Pt.viewport(g),Pt.scissor(T),Pt.setScissorTest(k),lt){const bt=Ht.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,bt.__webglTexture,j)}else if(pt){const bt=Ht.get(y.texture),Nt=G||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,j||0,Nt)}W=-1},this.readRenderTargetPixels=function(y,G,j,q,V,lt,pt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ht.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){Pt.bindFramebuffer(I.FRAMEBUFFER,yt);try{const bt=y.texture,Nt=bt.format,Ft=bt.type;if(!ae.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=y.width-q&&j>=0&&j<=y.height-V&&I.readPixels(G,j,q,V,Gt.convert(Nt),Gt.convert(Ft),lt)}finally{const bt=N!==null?Ht.get(N).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(y,G,j,q,V,lt,pt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Ht.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){Pt.bindFramebuffer(I.FRAMEBUFFER,yt);try{const bt=y.texture,Nt=bt.format,Ft=bt.type;if(!ae.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=y.width-q&&j>=0&&j<=y.height-V){const Dt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Dt),I.bufferData(I.PIXEL_PACK_BUFFER,lt.byteLength,I.STREAM_READ),I.readPixels(G,j,q,V,Gt.convert(Nt),Gt.convert(Ft),0),I.flush();const jt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await eu(I,jt,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Dt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,lt)}finally{I.deleteBuffer(Dt),I.deleteSync(jt)}return lt}}finally{const bt=N!==null?Ht.get(N).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(y,G=null,j=0){y.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,y=arguments[1]);const q=Math.pow(2,-j),V=Math.floor(y.image.width*q),lt=Math.floor(y.image.height*q),pt=G!==null?G.x:0,yt=G!==null?G.y:0;Wt.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,pt,yt,V,lt),Pt.unbindTexture()},this.copyTextureToTexture=function(y,G,j=null,q=null,V=0){y.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,y=arguments[1],G=arguments[2],V=arguments[3]||0,j=null);let lt,pt,yt,bt,Nt,Ft;j!==null?(lt=j.max.x-j.min.x,pt=j.max.y-j.min.y,yt=j.min.x,bt=j.min.y):(lt=y.image.width,pt=y.image.height,yt=0,bt=0),q!==null?(Nt=q.x,Ft=q.y):(Nt=0,Ft=0);const Dt=Gt.convert(G.format),jt=Gt.convert(G.type);Wt.setTexture2D(G,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const ge=I.getParameter(I.UNPACK_ROW_LENGTH),de=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Me=I.getParameter(I.UNPACK_SKIP_PIXELS),ie=I.getParameter(I.UNPACK_SKIP_ROWS),Rt=I.getParameter(I.UNPACK_SKIP_IMAGES),Te=y.isCompressedTexture?y.mipmaps[V]:y.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Te.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yt),I.pixelStorei(I.UNPACK_SKIP_ROWS,bt),y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,Nt,Ft,lt,pt,Dt,jt,Te.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,Nt,Ft,Te.width,Te.height,Dt,Te.data):I.texSubImage2D(I.TEXTURE_2D,V,Nt,Ft,lt,pt,Dt,jt,Te),I.pixelStorei(I.UNPACK_ROW_LENGTH,ge),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Me),I.pixelStorei(I.UNPACK_SKIP_ROWS,ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rt),V===0&&G.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(y,G,j=null,q=null,V=0){y.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,q=arguments[1]||null,y=arguments[2],G=arguments[3],V=arguments[4]||0);let lt,pt,yt,bt,Nt,Ft,Dt,jt,ge;const de=y.isCompressedTexture?y.mipmaps[V]:y.image;j!==null?(lt=j.max.x-j.min.x,pt=j.max.y-j.min.y,yt=j.max.z-j.min.z,bt=j.min.x,Nt=j.min.y,Ft=j.min.z):(lt=de.width,pt=de.height,yt=de.depth,bt=0,Nt=0,Ft=0),q!==null?(Dt=q.x,jt=q.y,ge=q.z):(Dt=0,jt=0,ge=0);const Me=Gt.convert(G.format),ie=Gt.convert(G.type);let Rt;if(G.isData3DTexture)Wt.setTexture3D(G,0),Rt=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Wt.setTexture2DArray(G,0),Rt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const Te=I.getParameter(I.UNPACK_ROW_LENGTH),re=I.getParameter(I.UNPACK_IMAGE_HEIGHT),qe=I.getParameter(I.UNPACK_SKIP_PIXELS),Pn=I.getParameter(I.UNPACK_SKIP_ROWS),Ie=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,de.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ft),y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Rt,V,Dt,jt,ge,lt,pt,yt,Me,ie,de.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(Rt,V,Dt,jt,ge,lt,pt,yt,Me,de.data):I.texSubImage3D(Rt,V,Dt,jt,ge,lt,pt,yt,Me,ie,de),I.pixelStorei(I.UNPACK_ROW_LENGTH,Te),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,re),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ie),V===0&&G.generateMipmaps&&I.generateMipmap(Rt),Pt.unbindTexture()},this.initRenderTarget=function(y){Ht.get(y).__webglFramebuffer===void 0&&Wt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Wt.setTextureCube(y,0):y.isData3DTexture?Wt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Wt.setTexture2DArray(y,0):Wt.setTexture2D(y,0),Pt.unbindTexture()},this.resetState=function(){J=0,O=0,N=null,Pt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ao?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===Qr?"display-p3":"srgb"}}class dm extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pm extends Ge{constructor(t,e,n,r,o,a,l,u,f){super(t,e,n,r,o,a,l,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zr extends Cn{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const o=[],a=[],l=[],u=[],f=new Z,p=new le;a.push(0,0,0),l.push(0,0,1),u.push(.5,.5);for(let v=0,_=3;v<=e;v++,_+=3){const M=n+v/e*r;f.x=t*Math.cos(M),f.y=t*Math.sin(M),a.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(a[_]/t+1)/2,p.y=(a[_+1]/t+1)/2,u.push(p.x,p.y)}for(let v=1;v<=e;v++)o.push(v,v+1,0);this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ro extends Cn{constructor(t=1,e=32,n=16,r=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:o,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const u=Math.min(a+l,Math.PI);let f=0;const p=[],v=new Z,_=new Z,M=[],E=[],A=[],m=[];for(let d=0;d<=n;d++){const U=[],w=d/n;let L=0;d===0&&a===0?L=.5/e:d===n&&u===Math.PI&&(L=-.5/e);for(let J=0;J<=e;J++){const O=J/e;v.x=-t*Math.cos(r+O*o)*Math.sin(a+w*l),v.y=t*Math.cos(a+w*l),v.z=t*Math.sin(r+O*o)*Math.sin(a+w*l),E.push(v.x,v.y,v.z),_.copy(v).normalize(),A.push(_.x,_.y,_.z),m.push(O+L,1-w),U.push(f++)}p.push(U)}for(let d=0;d<n;d++)for(let U=0;U<e;U++){const w=p[d][U+1],L=p[d][U],J=p[d+1][U],O=p[d+1][U+1];(d!==0||a>0)&&M.push(w,L,O),(d!==n-1||u<Math.PI)&&M.push(L,J,O)}this.setIndex(M),this.setAttribute("position",new Qe(E,3)),this.setAttribute("normal",new Qe(A,3)),this.setAttribute("uv",new Qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vo);var Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mm={};(function(){var i;function t(s){var c=0;return function(){return c<s.length?{done:!1,value:s[c++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,h){return s==Array.prototype||s==Object.prototype||(s[c]=h.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ni=="object"&&Ni];for(var c=0;c<s.length;++c){var h=s[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function o(s,c){if(c)t:{var h=r;s=s.split(".");for(var x=0;x<s.length-1;x++){var b=s[x];if(!(b in h))break t;h=h[b]}s=s[s.length-1],x=h[s],c=c(x),c!=x&&c!=null&&e(h,s,{configurable:!0,writable:!0,value:c})}}o("Symbol",function(s){function c(P){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new h(x+(P||"")+"_"+b++,P)}function h(P,C){this.h=P,e(this,"description",{configurable:!0,writable:!0,value:C})}if(s)return s;h.prototype.toString=function(){return this.h};var x="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",b=0;return c}),o("Symbol.iterator",function(s){if(s)return s;s=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),h=0;h<c.length;h++){var x=r[c[h]];typeof x=="function"&&typeof x.prototype[s]!="function"&&e(x.prototype,s,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return s});function a(s){return s={next:s},s[Symbol.iterator]=function(){return this},s}function l(s){var c=typeof Symbol<"u"&&Symbol.iterator&&s[Symbol.iterator];return c?c.call(s):{next:t(s)}}function u(s){if(!(s instanceof Array)){s=l(s);for(var c,h=[];!(c=s.next()).done;)h.push(c.value);s=h}return s}var f=typeof Object.assign=="function"?Object.assign:function(s,c){for(var h=1;h<arguments.length;h++){var x=arguments[h];if(x)for(var b in x)Object.prototype.hasOwnProperty.call(x,b)&&(s[b]=x[b])}return s};o("Object.assign",function(s){return s||f});var p=typeof Object.create=="function"?Object.create:function(s){function c(){}return c.prototype=s,new c},v;if(typeof Object.setPrototypeOf=="function")v=Object.setPrototypeOf;else{var _;t:{var M={a:!0},E={};try{E.__proto__=M,_=E.a;break t}catch{}_=!1}v=_?function(s,c){if(s.__proto__=c,s.__proto__!==c)throw new TypeError(s+" is not extensible");return s}:null}var A=v;function m(s,c){if(s.prototype=p(c.prototype),s.prototype.constructor=s,A)A(s,c);else for(var h in c)if(h!="prototype")if(Object.defineProperties){var x=Object.getOwnPropertyDescriptor(c,h);x&&Object.defineProperty(s,h,x)}else s[h]=c[h];s.ya=c.prototype}function d(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function U(s){if(s.m)throw new TypeError("Generator is already running");s.m=!0}d.prototype.u=function(s){this.i=s};function w(s,c){s.l={ma:c,na:!0},s.h=s.s||s.v}d.prototype.return=function(s){this.l={return:s},this.h=this.v};function L(s,c,h){return s.h=h,{value:c}}function J(s){this.h=new d,this.i=s}function O(s,c){U(s.h);var h=s.h.j;return h?N(s,"return"in h?h.return:function(x){return{value:x,done:!0}},c,s.h.return):(s.h.return(c),W(s))}function N(s,c,h,x){try{var b=c.call(s.h.j,h);if(!(b instanceof Object))throw new TypeError("Iterator result "+b+" is not an object");if(!b.done)return s.h.m=!1,b;var P=b.value}catch(C){return s.h.j=null,w(s.h,C),W(s)}return s.h.j=null,x.call(s.h,P),W(s)}function W(s){for(;s.h.h;)try{var c=s.i(s.h);if(c)return s.h.m=!1,{value:c.value,done:!1}}catch(h){s.h.i=void 0,w(s.h,h)}if(s.h.m=!1,s.h.l){if(c=s.h.l,s.h.l=null,c.na)throw c.ma;return{value:c.return,done:!0}}return{value:void 0,done:!0}}function R(s){this.next=function(c){return U(s.h),s.h.j?c=N(s,s.h.j.next,c,s.h.u):(s.h.u(c),c=W(s)),c},this.throw=function(c){return U(s.h),s.h.j?c=N(s,s.h.j.throw,c,s.h.u):(w(s.h,c),c=W(s)),c},this.return=function(c){return O(s,c)},this[Symbol.iterator]=function(){return this}}function g(s){function c(x){return s.next(x)}function h(x){return s.throw(x)}return new Promise(function(x,b){function P(C){C.done?x(C.value):Promise.resolve(C.value).then(c,h).then(P,b)}P(s.next())})}function T(s){return g(new R(new J(s)))}o("Promise",function(s){function c(C){this.i=0,this.j=void 0,this.h=[],this.u=!1;var F=this.l();try{C(F.resolve,F.reject)}catch(K){F.reject(K)}}function h(){this.h=null}function x(C){return C instanceof c?C:new c(function(F){F(C)})}if(s)return s;h.prototype.i=function(C){if(this.h==null){this.h=[];var F=this;this.j(function(){F.m()})}this.h.push(C)};var b=r.setTimeout;h.prototype.j=function(C){b(C,0)},h.prototype.m=function(){for(;this.h&&this.h.length;){var C=this.h;this.h=[];for(var F=0;F<C.length;++F){var K=C[F];C[F]=null;try{K()}catch(at){this.l(at)}}}this.h=null},h.prototype.l=function(C){this.j(function(){throw C})},c.prototype.l=function(){function C(at){return function(mt){K||(K=!0,at.call(F,mt))}}var F=this,K=!1;return{resolve:C(this.I),reject:C(this.m)}},c.prototype.I=function(C){if(C===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(C instanceof c)this.L(C);else{t:switch(typeof C){case"object":var F=C!=null;break t;case"function":F=!0;break t;default:F=!1}F?this.F(C):this.s(C)}},c.prototype.F=function(C){var F=void 0;try{F=C.then}catch(K){this.m(K);return}typeof F=="function"?this.M(F,C):this.s(C)},c.prototype.m=function(C){this.v(2,C)},c.prototype.s=function(C){this.v(1,C)},c.prototype.v=function(C,F){if(this.i!=0)throw Error("Cannot settle("+C+", "+F+"): Promise already settled in state"+this.i);this.i=C,this.j=F,this.i===2&&this.K(),this.H()},c.prototype.K=function(){var C=this;b(function(){if(C.D()){var F=r.console;typeof F<"u"&&F.error(C.j)}},1)},c.prototype.D=function(){if(this.u)return!1;var C=r.CustomEvent,F=r.Event,K=r.dispatchEvent;return typeof K>"u"?!0:(typeof C=="function"?C=new C("unhandledrejection",{cancelable:!0}):typeof F=="function"?C=new F("unhandledrejection",{cancelable:!0}):(C=r.document.createEvent("CustomEvent"),C.initCustomEvent("unhandledrejection",!1,!0,C)),C.promise=this,C.reason=this.j,K(C))},c.prototype.H=function(){if(this.h!=null){for(var C=0;C<this.h.length;++C)P.i(this.h[C]);this.h=null}};var P=new h;return c.prototype.L=function(C){var F=this.l();C.T(F.resolve,F.reject)},c.prototype.M=function(C,F){var K=this.l();try{C.call(F,K.resolve,K.reject)}catch(at){K.reject(at)}},c.prototype.then=function(C,F){function K(Ct,xt){return typeof Ct=="function"?function(Bt){try{at(Ct(Bt))}catch(te){mt(te)}}:xt}var at,mt,Ot=new c(function(Ct,xt){at=Ct,mt=xt});return this.T(K(C,at),K(F,mt)),Ot},c.prototype.catch=function(C){return this.then(void 0,C)},c.prototype.T=function(C,F){function K(){switch(at.i){case 1:C(at.j);break;case 2:F(at.j);break;default:throw Error("Unexpected state: "+at.i)}}var at=this;this.h==null?P.i(K):this.h.push(K),this.u=!0},c.resolve=x,c.reject=function(C){return new c(function(F,K){K(C)})},c.race=function(C){return new c(function(F,K){for(var at=l(C),mt=at.next();!mt.done;mt=at.next())x(mt.value).T(F,K)})},c.all=function(C){var F=l(C),K=F.next();return K.done?x([]):new c(function(at,mt){function Ot(Bt){return function(te){Ct[Bt]=te,xt--,xt==0&&at(Ct)}}var Ct=[],xt=0;do Ct.push(void 0),xt++,x(K.value).T(Ot(Ct.length-1),mt),K=F.next();while(!K.done)})},c});function k(s,c){s instanceof String&&(s+="");var h=0,x=!1,b={next:function(){if(!x&&h<s.length){var P=h++;return{value:c(P,s[P]),done:!1}}return x=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}o("Array.prototype.keys",function(s){return s||function(){return k(this,function(c){return c})}}),o("Array.prototype.fill",function(s){return s||function(c,h,x){var b=this.length||0;for(0>h&&(h=Math.max(0,b+h)),(x==null||x>b)&&(x=b),x=Number(x),0>x&&(x=Math.max(0,b+x)),h=Number(h||0);h<x;h++)this[h]=c;return this}});function H(s){return s||Array.prototype.fill}o("Int8Array.prototype.fill",H),o("Uint8Array.prototype.fill",H),o("Uint8ClampedArray.prototype.fill",H),o("Int16Array.prototype.fill",H),o("Uint16Array.prototype.fill",H),o("Int32Array.prototype.fill",H),o("Uint32Array.prototype.fill",H),o("Float32Array.prototype.fill",H),o("Float64Array.prototype.fill",H),o("Object.is",function(s){return s||function(c,h){return c===h?c!==0||1/c===1/h:c!==c&&h!==h}}),o("Array.prototype.includes",function(s){return s||function(c,h){var x=this;x instanceof String&&(x=String(x));var b=x.length;for(h=h||0,0>h&&(h=Math.max(h+b,0));h<b;h++){var P=x[h];if(P===c||Object.is(P,c))return!0}return!1}}),o("String.prototype.includes",function(s){return s||function(c,h){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(c,h||0)!==-1}});var Q=this||self;function tt(s,c){s=s.split(".");var h=Q;s[0]in h||typeof h.execScript>"u"||h.execScript("var "+s[0]);for(var x;s.length&&(x=s.shift());)s.length||c===void 0?h[x]&&h[x]!==Object.prototype[x]?h=h[x]:h=h[x]={}:h[x]=c}function B(s){var c;t:{if((c=Q.navigator)&&(c=c.userAgent))break t;c=""}return c.indexOf(s)!=-1}var Y=Array.prototype.map?function(s,c){return Array.prototype.map.call(s,c,void 0)}:function(s,c){for(var h=s.length,x=Array(h),b=typeof s=="string"?s.split(""):s,P=0;P<h;P++)P in b&&(x[P]=c.call(void 0,b[P],P,s));return x},X={},ct=null;function gt(s){var c=s.length,h=3*c/4;h%3?h=Math.floor(h):"=.".indexOf(s[c-1])!=-1&&(h="=.".indexOf(s[c-2])!=-1?h-2:h-1);var x=new Uint8Array(h),b=0;return wt(s,function(P){x[b++]=P}),b!==h?x.subarray(0,b):x}function wt(s,c){function h(K){for(;x<s.length;){var at=s.charAt(x++),mt=ct[at];if(mt!=null)return mt;if(!/^[\s\xa0]*$/.test(at))throw Error("Unknown base64 encoding at char: "+at)}return K}zt();for(var x=0;;){var b=h(-1),P=h(0),C=h(64),F=h(64);if(F===64&&b===-1)break;c(b<<2|P>>4),C!=64&&(c(P<<4&240|C>>2),F!=64&&c(C<<6&192|F))}}function zt(){if(!ct){ct={};for(var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),c=["+/=","+/","-_=","-_.","-_"],h=0;5>h;h++){var x=s.concat(c[h].split(""));X[h]=x;for(var b=0;b<x.length;b++){var P=x[b];ct[P]===void 0&&(ct[P]=b)}}}}var qt=typeof Uint8Array<"u",et=!(B("Trident")||B("MSIE"))&&typeof Q.btoa=="function";function ut(s){if(!et){var c;c===void 0&&(c=0),zt(),c=X[c];for(var h=Array(Math.floor(s.length/3)),x=c[64]||"",b=0,P=0;b<s.length-2;b+=3){var C=s[b],F=s[b+1],K=s[b+2],at=c[C>>2];C=c[(C&3)<<4|F>>4],F=c[(F&15)<<2|K>>6],K=c[K&63],h[P++]=at+C+F+K}switch(at=0,K=x,s.length-b){case 2:at=s[b+1],K=c[(at&15)<<2]||x;case 1:s=s[b],h[P]=c[s>>2]+c[(s&3)<<4|at>>4]+K+x}return h.join("")}for(c="";10240<s.length;)c+=String.fromCharCode.apply(null,s.subarray(0,10240)),s=s.subarray(10240);return c+=String.fromCharCode.apply(null,s),btoa(c)}var At=RegExp("[-_.]","g");function Et(s){switch(s){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function kt(s){if(!et)return gt(s);At.test(s)&&(s=s.replace(At,Et)),s=atob(s);for(var c=new Uint8Array(s.length),h=0;h<s.length;h++)c[h]=s.charCodeAt(h);return c}var Yt;function Kt(){return Yt||(Yt=new Uint8Array(0))}var ue={},I=typeof Uint8Array.prototype.slice=="function",$t=0,Vt=0;function ae(s){var c=0>s;s=Math.abs(s);var h=s>>>0;s=Math.floor((s-h)/4294967296),c&&(h=l(Se(h,s)),c=h.next().value,s=h.next().value,h=c),$t=h>>>0,Vt=s>>>0}var Pt=typeof BigInt=="function";function Se(s,c){return c=~c,s?s=~s+1:c+=1,[s,c]}function Ht(s,c){this.i=s>>>0,this.h=c>>>0}function Wt(s){if(!s)return D||(D=new Ht(0,0));if(!/^-?\d+$/.test(s))return null;if(16>s.length)ae(Number(s));else if(Pt)s=BigInt(s),$t=Number(s&BigInt(4294967295))>>>0,Vt=Number(s>>BigInt(32)&BigInt(4294967295));else{var c=+(s[0]==="-");Vt=$t=0;for(var h=s.length,x=c,b=(h-c)%6+c;b<=h;x=b,b+=6)x=Number(s.slice(x,b)),Vt*=1e6,$t=1e6*$t+x,4294967296<=$t&&(Vt+=$t/4294967296|0,$t%=4294967296);c&&(c=l(Se($t,Vt)),s=c.next().value,c=c.next().value,$t=s,Vt=c)}return new Ht($t,Vt)}var D;function S(s,c){return Error("Invalid wire type: "+s+" (at position "+c+")")}function $(){return Error("Failed to read varint, encoding is invalid.")}function st(s,c){return Error("Tried to read past the end of the data "+c+" > "+s)}function ot(){throw Error("Invalid UTF8")}function rt(s,c){return c=String.fromCharCode.apply(null,c),s==null?c:s+c}var Lt=void 0,_t,Tt=typeof TextDecoder<"u",Xt,ft=typeof TextEncoder<"u",Mt;function ee(s){if(s!==ue)throw Error("illegal external caller")}function Ut(s,c){if(ee(c),this.V=s,s!=null&&s.length===0)throw Error("ByteString should be constructed with non-empty values")}function St(){return Mt||(Mt=new Ut(null,ue))}function Gt(s){ee(ue);var c=s.V;return c=c==null||qt&&c!=null&&c instanceof Uint8Array?c:typeof c=="string"?kt(c):null,c==null?c:s.V=c}function Zt(s){if(typeof s=="string")return{buffer:kt(s),C:!1};if(Array.isArray(s))return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Uint8Array)return{buffer:s,C:!1};if(s.constructor===ArrayBuffer)return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Ut)return{buffer:Gt(s)||Kt(),C:!0};if(s instanceof Uint8Array)return{buffer:new Uint8Array(s.buffer,s.byteOffset,s.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function pe(s,c){this.i=null,this.m=!1,this.h=this.j=this.l=0,z(this,s,c)}function z(s,c,h){h=h===void 0?{}:h,s.S=h.S===void 0?!1:h.S,c&&(c=Zt(c),s.i=c.buffer,s.m=c.C,s.l=0,s.j=s.i.length,s.h=s.l)}pe.prototype.reset=function(){this.h=this.l};function ht(s,c){if(s.h=c,c>s.j)throw st(s.j,c)}function nt(s){var c=s.i,h=s.h,x=c[h++],b=x&127;if(x&128&&(x=c[h++],b|=(x&127)<<7,x&128&&(x=c[h++],b|=(x&127)<<14,x&128&&(x=c[h++],b|=(x&127)<<21,x&128&&(x=c[h++],b|=x<<28,x&128&&c[h++]&128&&c[h++]&128&&c[h++]&128&&c[h++]&128&&c[h++]&128)))))throw $();return ht(s,h),b}function it(s,c){if(0>c)throw Error("Tried to read a negative byte length: "+c);var h=s.h,x=h+c;if(x>s.j)throw st(c,s.j-h);return s.h=x,h}var dt=[];function It(){this.h=[]}It.prototype.length=function(){return this.h.length},It.prototype.end=function(){var s=this.h;return this.h=[],s};function ne(s,c,h){for(;0<h||127<c;)s.h.push(c&127|128),c=(c>>>7|h<<25)>>>0,h>>>=7;s.h.push(c)}function he(s,c){for(;127<c;)s.h.push(c&127|128),c>>>=7;s.h.push(c)}function Ee(s,c){if(dt.length){var h=dt.pop();z(h,s,c),s=h}else s=new pe(s,c);this.h=s,this.j=this.h.h,this.i=this.l=-1,this.setOptions(c)}Ee.prototype.setOptions=function(s){s=s===void 0?{}:s,this.ca=s.ca===void 0?!1:s.ca},Ee.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function se(s){var c=s.h;if(c.h==c.j)return!1;s.j=s.h.h;var h=nt(s.h)>>>0;if(c=h>>>3,h&=7,!(0<=h&&5>=h))throw S(h,s.j);if(1>c)throw Error("Invalid field number: "+c+" (at position "+s.j+")");return s.l=c,s.i=h,!0}function Ve(s){switch(s.i){case 0:if(s.i!=0)Ve(s);else t:{s=s.h;for(var c=s.h,h=c+10,x=s.i;c<h;)if(!(x[c++]&128)){ht(s,c);break t}throw $()}break;case 1:s=s.h,ht(s,s.h+8);break;case 2:s.i!=2?Ve(s):(c=nt(s.h)>>>0,s=s.h,ht(s,s.h+c));break;case 5:s=s.h,ht(s,s.h+4);break;case 3:c=s.l;do{if(!se(s))throw Error("Unmatched start-group tag: stream EOF");if(s.i==4){if(s.l!=c)throw Error("Unmatched end-group tag");break}Ve(s)}while(!0);break;default:throw S(s.i,s.j)}}var Oe=[];function ur(){this.j=[],this.i=0,this.h=new It}function ke(s,c){c.length!==0&&(s.j.push(c),s.i+=c.length)}function ki(s,c){if(c=c.R){ke(s,s.h.end());for(var h=0;h<c.length;h++)ke(s,Gt(c[h])||Kt())}}var tn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function dn(s,c){return tn?s[tn]|=c:s.A!==void 0?s.A|=c:(Object.defineProperties(s,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}}),c)}function Wn(s,c){tn?s[tn]&&(s[tn]&=~c):s.A!==void 0&&(s.A&=~c)}function xe(s){var c;return tn?c=s[tn]:c=s.A,c??0}function Be(s,c){tn?s[tn]=c:s.A!==void 0?s.A=c:Object.defineProperties(s,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}})}function si(s){return dn(s,1),s}function hr(s,c){Be(c,(s|0)&-51)}function oi(s,c){Be(c,(s|18)&-41)}var Wi={};function ai(s){return s!==null&&typeof s=="object"&&!Array.isArray(s)&&s.constructor===Object}var y,G=[];Be(G,23),y=Object.freeze(G);function j(s){if(xe(s.o)&2)throw Error("Cannot mutate an immutable Message")}function q(s){var c=s.length;(c=c?s[c-1]:void 0)&&ai(c)?c.g=1:(c={},s.push((c.g=1,c)))}function V(s){var c=s.i+s.G;return s.B||(s.B=s.o[c]={})}function lt(s,c){return c===-1?null:c>=s.i?s.B?s.B[c]:void 0:s.o[c+s.G]}function pt(s,c,h,x){j(s),yt(s,c,h,x)}function yt(s,c,h,x){s.j&&(s.j=void 0),c>=s.i||x?V(s)[c]=h:(s.o[c+s.G]=h,(s=s.B)&&c in s&&delete s[c])}function bt(s,c,h,x){var b=lt(s,c);Array.isArray(b)||(b=y);var P=xe(b);if(P&1||si(b),x)P&2||dn(b,2),h&1||Object.freeze(b);else{x=!(h&2);var C=P&2;h&1||!C?x&&P&16&&!C&&Wn(b,16):(b=si(Array.prototype.slice.call(b)),yt(s,c,b))}return b}function Nt(s,c){var h=lt(s,c),x=h==null?h:typeof h=="number"||h==="NaN"||h==="Infinity"||h==="-Infinity"?Number(h):void 0;return x!=null&&x!==h&&yt(s,c,x),x}function Ft(s,c,h,x,b){s.h||(s.h={});var P=s.h[h],C=bt(s,h,3,b);if(!P){var F=C;P=[];var K=!!(xe(s.o)&16);C=!!(xe(F)&2);var at=F;!b&&C&&(F=Array.prototype.slice.call(F));for(var mt=C,Ot=0;Ot<F.length;Ot++){var Ct=F[Ot],xt=c,Bt=!1;if(Bt=Bt===void 0?!1:Bt,Ct=Array.isArray(Ct)?new xt(Ct):Bt?new xt:void 0,Ct!==void 0){xt=Ct.o;var te=Bt=xe(xt);C&&(te|=2),K&&(te|=16),te!=Bt&&Be(xt,te),xt=te,mt=mt||!!(2&xt),P.push(Ct)}}return s.h[h]=P,K=xe(F),c=K|33,c=mt?c&-9:c|8,K!=c&&(mt=F,Object.isFrozen(mt)&&(mt=Array.prototype.slice.call(mt)),Be(mt,c),F=mt),at!==F&&yt(s,h,F),(b||x&&C)&&dn(P,2),x&&Object.freeze(P),P}return b||(b=Object.isFrozen(P),x&&!b?Object.freeze(P):!x&&b&&(P=Array.prototype.slice.call(P),s.h[h]=P)),P}function Dt(s,c,h){var x=!!(xe(s.o)&2);if(c=Ft(s,c,h,x,x),s=bt(s,h,3,x),!(x||xe(s)&8)){for(x=0;x<c.length;x++){if(h=c[x],xe(h.o)&2){var b=sn(h,!1);b.j=h}else b=h;h!==b&&(c[x]=b,s[x]=b.o)}dn(s,8)}return c}function jt(s,c,h){if(h!=null&&typeof h!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof h+": "+h);pt(s,c,h)}function ge(s,c,h,x,b){j(s);var P=Ft(s,h,c,!1,!1);return h=x??new h,s=bt(s,c,2,!1),b!=null?(P.splice(b,0,h),s.splice(b,0,h.o)):(P.push(h),s.push(h.o)),h.C()&&Wn(s,8),h}function de(s,c){return s??c}function Me(s,c,h){return h=h===void 0?0:h,de(Nt(s,c),h)}var ie;function Rt(s){switch(typeof s){case"number":return isFinite(s)?s:String(s);case"object":if(s)if(Array.isArray(s)){if(xe(s)&128)return s=Array.prototype.slice.call(s),q(s),s}else{if(qt&&s!=null&&s instanceof Uint8Array)return ut(s);if(s instanceof Ut){var c=s.V;return c==null?"":typeof c=="string"?c:s.V=ut(c)}}}return s}function Te(s,c,h,x){if(s!=null){if(Array.isArray(s))s=re(s,c,h,x!==void 0);else if(ai(s)){var b={},P;for(P in s)b[P]=Te(s[P],c,h,x);s=b}else s=c(s,x);return s}}function re(s,c,h,x){var b=xe(s);x=x?!!(b&16):void 0,s=Array.prototype.slice.call(s);for(var P=0;P<s.length;P++)s[P]=Te(s[P],c,h,x);return h(b,s),s}function qe(s){return s.ja===Wi?s.toJSON():Rt(s)}function Pn(s,c){s&128&&q(c)}function Ie(s,c,h){if(h=h===void 0?oi:h,s!=null){if(qt&&s instanceof Uint8Array)return s.length?new Ut(new Uint8Array(s),ue):St();if(Array.isArray(s)){var x=xe(s);return x&2?s:c&&!(x&32)&&(x&16||x===0)?(Be(s,x|2),s):(s=re(s,Ie,x&4?oi:h,!0),c=xe(s),c&4&&c&2&&Object.freeze(s),s)}return s.ja===Wi?ye(s):s}}function li(s,c,h,x,b,P,C){if(s=s.h&&s.h[h]){if(x=xe(s),x&2?x=s:(P=Y(s,ye),oi(x,P),Object.freeze(P),x=P),j(c),C=x==null?y:si([]),x!=null){for(P=!!x.length,s=0;s<x.length;s++){var F=x[s];P=P&&!(xe(F.o)&2),C[s]=F.o}P=(P?8:0)|1,s=xe(C),(s&P)!==P&&(Object.isFrozen(C)&&(C=Array.prototype.slice.call(C)),Be(C,s|P)),c.h||(c.h={}),c.h[h]=x}else c.h&&(c.h[h]=void 0);yt(c,h,C,b)}else pt(c,h,Ie(x,P,C),b)}function ye(s){return xe(s.o)&2||(s=sn(s,!0),dn(s.o,2)),s}function sn(s,c){var h=s.o,x=[];dn(x,16);var b=s.constructor.h;if(b&&x.push(b),b=s.B,b){x.length=h.length,x.fill(void 0,x.length,h.length);var P={};x[x.length-1]=P}xe(h)&128&&q(x),c=c||s.C()?oi:hr,P=s.constructor,ie=x,x=new P(x),ie=void 0,s.R&&(x.R=s.R.slice()),P=!!(xe(h)&16);for(var C=b?h.length-1:h.length,F=0;F<C;F++)li(s,x,F-s.G,h[F],!1,P,c);if(b)for(var K in b)li(s,x,+K,b[K],!0,P,c);return x}function Ce(s,c,h){s==null&&(s=ie),ie=void 0;var x=this.constructor.i||0,b=0<x,P=this.constructor.h,C=!1;if(s==null){s=P?[P]:[];var F=48,K=!0;b&&(x=0,F|=128),Be(s,F)}else{if(!Array.isArray(s)||P&&P!==s[0])throw Error();var at=F=dn(s,0);if((K=(16&at)!==0)&&((C=(32&at)!==0)||(at|=32)),b){if(128&at)x=0;else if(0<s.length){var mt=s[s.length-1];if(ai(mt)&&"g"in mt){x=0,at|=128,delete mt.g;var Ot=!0,Ct;for(Ct in mt){Ot=!1;break}Ot&&s.pop()}}}else if(128&at)throw Error();F!==at&&Be(s,at)}this.G=(P?0:-1)-x,this.h=void 0,this.o=s;t:{if(P=this.o.length,x=P-1,P&&(P=this.o[x],ai(P))){this.B=P,this.i=x-this.G;break t}c!==void 0&&-1<c?(this.i=Math.max(c,x+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!b&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(h){c=K&&!C&&!0,b=this.i;var xt;for(K=0;K<h.length;K++)C=h[K],C<b?(C+=this.G,(x=s[C])?ze(x,c):s[C]=y):(xt||(xt=V(this)),(x=xt[C])?ze(x,c):xt[C]=y)}}Ce.prototype.toJSON=function(){return re(this.o,qe,Pn)},Ce.prototype.C=function(){return!!(xe(this.o)&2)};function ze(s,c){if(Array.isArray(s)){var h=xe(s),x=1;!c||h&2||(x|=16),(h&x)!==x&&Be(s,h|x)}}Ce.prototype.ja=Wi,Ce.prototype.toString=function(){return this.o.toString()};function ci(s,c,h){if(h){var x={},b;for(b in h){var P=h[b],C=P.qa;C||(x.J=P.wa||P.oa.W,P.ia?(x.aa=Do(P.ia),C=function(F){return function(K,at,mt){return F.J(K,at,mt,F.aa)}}(x)):P.ka?(x.Z=Uo(P.da.P,P.ka),C=function(F){return function(K,at,mt){return F.J(K,at,mt,F.Z)}}(x)):C=x.J,P.qa=C),C(c,s,P.da),x={J:x.J,aa:x.aa,Z:x.Z}}}ki(c,s)}var ui=Symbol();function Xi(s,c,h){return s[ui]||(s[ui]=function(x,b){return c(x,b,h)})}function Co(s){var c=s[ui];if(!c){var h=is(s);c=function(x,b){return Io(x,b,h)},s[ui]=c}return c}function bl(s){var c=s.ia;if(c)return Co(c);if(c=s.va)return Xi(s.da.P,c,s.ka)}function wl(s){var c=bl(s),h=s.da,x=s.oa.U;return c?function(b,P){return x(b,P,h,c)}:function(b,P){return x(b,P,h)}}function Po(s,c){var h=s[c];return typeof h=="function"&&h.length===0&&(h=h(),s[c]=h),Array.isArray(h)&&(ji in h||Yi in h||0<h.length&&typeof h[0]=="function")?h:void 0}function Lo(s,c,h,x,b,P){c.P=s[0];var C=1;if(s.length>C&&typeof s[C]!="number"){var F=s[C++];h(c,F)}for(;C<s.length;){h=s[C++];for(var K=C+1;K<s.length&&typeof s[K]!="number";)K++;switch(F=s[C++],K-=C,K){case 0:x(c,h,F);break;case 1:(K=Po(s,C))?(C++,b(c,h,F,K)):x(c,h,F,s[C++]);break;case 2:K=C++,K=Po(s,K),b(c,h,F,K,s[C++]);break;case 3:P(c,h,F,s[C++],s[C++],s[C++]);break;case 4:P(c,h,F,s[C++],s[C++],s[C++],s[C++]);break;default:throw Error("unexpected number of binary field arguments: "+K)}}return c}var fr=Symbol();function Do(s){var c=s[fr];if(!c){var h=ns(s);c=function(x,b){return No(x,b,h)},s[fr]=c}return c}function Uo(s,c){var h=s[fr];return h||(h=function(x,b){return ci(x,b,c)},s[fr]=h),h}var Yi=Symbol();function Rl(s,c){s.push(c)}function Cl(s,c,h){s.push(c,h.W)}function Pl(s,c,h,x){var b=Do(x),P=ns(x).P,C=h.W;s.push(c,function(F,K,at){return C(F,K,at,P,b)})}function Ll(s,c,h,x,b,P){var C=Uo(x,P),F=h.W;s.push(c,function(K,at,mt){return F(K,at,mt,x,C)})}function ns(s){var c=s[Yi];return c||(c=Lo(s,s[Yi]=[],Rl,Cl,Pl,Ll),ji in s&&Yi in s&&(s.length=0),c)}var ji=Symbol();function Dl(s,c){s[0]=c}function Ul(s,c,h,x){var b=h.U;s[c]=x?function(P,C,F){return b(P,C,F,x)}:b}function Il(s,c,h,x,b){var P=h.U,C=Co(x),F=is(x).P;s[c]=function(K,at,mt){return P(K,at,mt,F,C,b)}}function Nl(s,c,h,x,b,P,C){var F=h.U,K=Xi(x,b,P);s[c]=function(at,mt,Ot){return F(at,mt,Ot,x,K,C)}}function is(s){var c=s[ji];return c||(c=Lo(s,s[ji]={},Dl,Ul,Il,Nl),ji in s&&Yi in s&&(s.length=0),c)}function Io(s,c,h){for(;se(c)&&c.i!=4;){var x=c.l,b=h[x];if(!b){var P=h[0];P&&(P=P[x])&&(b=h[x]=wl(P))}if(!b||!b(c,s,x)){b=c,x=s,P=b.j,Ve(b);var C=b;if(!C.ca){if(b=C.h.h-P,C.h.h=P,C=C.h,b==0)b=St();else{if(P=it(C,b),C.S&&C.m)b=C.i.subarray(P,P+b);else{C=C.i;var F=P;b=P+b,b=F===b?Kt():I?C.slice(F,b):new Uint8Array(C.subarray(F,b))}b=b.length==0?St():new Ut(b,ue)}(P=x.R)?P.push(b):x.R=[b]}}}return s}function No(s,c,h){for(var x=h.length,b=x%2==1,P=b?1:0;P<x;P+=2)(0,h[P+1])(c,s,h[P]);ci(s,c,b?h[0]:void 0)}function qi(s,c){return{U:s,W:c}}var on=qi(function(s,c,h){if(s.i!==5)return!1;s=s.h;var x=s.i,b=s.h,P=x[b],C=x[b+1],F=x[b+2];return x=x[b+3],ht(s,s.h+4),C=(P<<0|C<<8|F<<16|x<<24)>>>0,s=2*(C>>31)+1,P=C>>>23&255,C&=8388607,pt(c,h,P==255?C?NaN:1/0*s:P==0?s*Math.pow(2,-149)*C:s*Math.pow(2,P-150)*(C+Math.pow(2,23))),!0},function(s,c,h){if(c=Nt(c,h),c!=null){he(s.h,8*h+5),s=s.h;var x=+c;x===0?0<1/x?$t=Vt=0:(Vt=0,$t=2147483648):isNaN(x)?(Vt=0,$t=2147483647):(x=(h=0>x?-2147483648:0)?-x:x,34028234663852886e22<x?(Vt=0,$t=(h|2139095040)>>>0):11754943508222875e-54>x?(x=Math.round(x/Math.pow(2,-149)),Vt=0,$t=(h|x)>>>0):(c=Math.floor(Math.log(x)/Math.LN2),x*=Math.pow(2,-c),x=Math.round(8388608*x),16777216<=x&&++c,Vt=0,$t=(h|c+127<<23|x&8388607)>>>0)),h=$t,s.h.push(h>>>0&255),s.h.push(h>>>8&255),s.h.push(h>>>16&255),s.h.push(h>>>24&255)}}),Fl=qi(function(s,c,h){if(s.i!==0)return!1;var x=s.h,b=0,P=s=0,C=x.i,F=x.h;do{var K=C[F++];b|=(K&127)<<P,P+=7}while(32>P&&K&128);for(32<P&&(s|=(K&127)>>4),P=3;32>P&&K&128;P+=7)K=C[F++],s|=(K&127)<<P;if(ht(x,F),128>K)x=b>>>0,K=s>>>0,(s=K&2147483648)&&(x=~x+1>>>0,K=~K>>>0,x==0&&(K=K+1>>>0)),x=4294967296*K+(x>>>0);else throw $();return pt(c,h,s?-x:x),!0},function(s,c,h){c=lt(c,h),c!=null&&(typeof c=="string"&&Wt(c),c!=null&&(he(s.h,8*h),typeof c=="number"?(s=s.h,ae(c),ne(s,$t,Vt)):(h=Wt(c),ne(s.h,h.i,h.h))))}),Ol=qi(function(s,c,h){return s.i!==0?!1:(pt(c,h,nt(s.h)),!0)},function(s,c,h){if(c=lt(c,h),c!=null&&c!=null)if(he(s.h,8*h),s=s.h,h=c,0<=h)he(s,h);else{for(c=0;9>c;c++)s.h.push(h&127|128),h>>=7;s.h.push(1)}}),Fo=qi(function(s,c,h){if(s.i!==2)return!1;var x=nt(s.h)>>>0;s=s.h;var b=it(s,x);if(s=s.i,Tt){var P=s,C;(C=_t)||(C=_t=new TextDecoder("utf-8",{fatal:!0})),s=b+x,P=b===0&&s===P.length?P:P.subarray(b,s);try{var F=C.decode(P)}catch(Ot){if(Lt===void 0){try{C.decode(new Uint8Array([128]))}catch{}try{C.decode(new Uint8Array([97])),Lt=!0}catch{Lt=!1}}throw!Lt&&(_t=void 0),Ot}}else{F=b,x=F+x,b=[];for(var K=null,at,mt;F<x;)at=s[F++],128>at?b.push(at):224>at?F>=x?ot():(mt=s[F++],194>at||(mt&192)!==128?(F--,ot()):b.push((at&31)<<6|mt&63)):240>at?F>=x-1?ot():(mt=s[F++],(mt&192)!==128||at===224&&160>mt||at===237&&160<=mt||((P=s[F++])&192)!==128?(F--,ot()):b.push((at&15)<<12|(mt&63)<<6|P&63)):244>=at?F>=x-2?ot():(mt=s[F++],(mt&192)!==128||(at<<28)+(mt-144)>>30||((P=s[F++])&192)!==128||((C=s[F++])&192)!==128?(F--,ot()):(at=(at&7)<<18|(mt&63)<<12|(P&63)<<6|C&63,at-=65536,b.push((at>>10&1023)+55296,(at&1023)+56320))):ot(),8192<=b.length&&(K=rt(K,b),b.length=0);F=rt(K,b)}return pt(c,h,F),!0},function(s,c,h){if(c=lt(c,h),c!=null){var x=!1;if(x=x===void 0?!1:x,ft){if(x&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(c))throw Error("Found an unpaired surrogate");c=(Xt||(Xt=new TextEncoder)).encode(c)}else{for(var b=0,P=new Uint8Array(3*c.length),C=0;C<c.length;C++){var F=c.charCodeAt(C);if(128>F)P[b++]=F;else{if(2048>F)P[b++]=F>>6|192;else{if(55296<=F&&57343>=F){if(56319>=F&&C<c.length){var K=c.charCodeAt(++C);if(56320<=K&&57343>=K){F=1024*(F-55296)+K-56320+65536,P[b++]=F>>18|240,P[b++]=F>>12&63|128,P[b++]=F>>6&63|128,P[b++]=F&63|128;continue}else C--}if(x)throw Error("Found an unpaired surrogate");F=65533}P[b++]=F>>12|224,P[b++]=F>>6&63|128}P[b++]=F&63|128}}c=b===P.length?P:P.subarray(0,b)}he(s.h,8*h+2),he(s.h,c.length),ke(s,s.h.end()),ke(s,c)}}),Oo=qi(function(s,c,h,x,b){if(s.i!==2)return!1;c=ge(c,h,x),h=s.h.j,x=nt(s.h)>>>0;var P=s.h.h+x,C=P-h;if(0>=C&&(s.h.j=P,b(c,s,void 0,void 0,void 0),C=P-s.h.h),C)throw Error("Message parsing ended unexpectedly. Expected to read "+(x+" bytes, instead read "+(x-C)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return s.h.h=P,s.h.j=h,!0},function(s,c,h,x,b){if(c=Dt(c,x,h),c!=null)for(x=0;x<c.length;x++){var P=s;he(P.h,8*h+2);var C=P.h.end();ke(P,C),C.push(P.i),P=C,b(c[x],s),C=s;var F=P.pop();for(F=C.i+C.h.length()-F;127<F;)P.push(F&127|128),F>>>=7,C.i++;P.push(F),C.i++}});function rs(s){return function(c,h){t:{if(Oe.length){var x=Oe.pop();x.setOptions(h),z(x.h,c,h),c=x}else c=new Ee(c,h);try{var b=is(s),P=Io(new b.P,c,b);break t}finally{b=c.h,b.i=null,b.m=!1,b.l=0,b.j=0,b.h=0,b.S=!1,c.l=-1,c.i=-1,100>Oe.length&&Oe.push(c)}P=void 0}return P}}function ss(s){return function(){var c=new ur;No(this,c,ns(s)),ke(c,c.h.end());for(var h=new Uint8Array(c.i),x=c.j,b=x.length,P=0,C=0;C<b;C++){var F=x[C];h.set(F,P),P+=F.length}return c.j=[h],h}}function hi(s){Ce.call(this,s)}m(hi,Ce);var Bo=[hi,1,Ol,2,on,3,Fo,4,Fo];hi.prototype.l=ss(Bo);function os(s){Ce.call(this,s,-1,Bl)}m(os,Ce),os.prototype.addClassification=function(s,c){return ge(this,1,hi,s,c),this};var Bl=[1],zo=rs([os,1,Oo,Bo]);function fi(s){Ce.call(this,s)}m(fi,Ce);var Ho=[fi,1,on,2,on,3,on,4,on,5,on];fi.prototype.l=ss(Ho);function Go(s){Ce.call(this,s,-1,zl)}m(Go,Ce);var zl=[1],Vo=rs([Go,1,Oo,Ho]);function dr(s){Ce.call(this,s)}m(dr,Ce);var ko=[dr,1,on,2,on,3,on,4,on,5,on,6,Fl],Hl=rs(ko);dr.prototype.l=ss(ko);function Wo(s,c,h){if(h=s.createShader(h===0?s.VERTEX_SHADER:s.FRAGMENT_SHADER),s.shaderSource(h,c),s.compileShader(h),!s.getShaderParameter(h,s.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+s.getShaderInfoLog(h));return h}function Xo(s){return Dt(s,hi,1).map(function(c){var h=lt(c,1);return{index:h??0,score:Me(c,2),label:lt(c,3)!=null?de(lt(c,3),""):void 0,displayName:lt(c,4)!=null?de(lt(c,4),""):void 0}})}function Yo(s){return{x:Me(s,1),y:Me(s,2),z:Me(s,3),visibility:Nt(s,4)!=null?Me(s,4):void 0}}function jo(s){return s.map(function(c){return Dt(Vo(c),fi,1).map(Yo)})}function as(s,c){this.i=s,this.h=c,this.m=0}function qo(s,c,h){return Gl(s,c),typeof s.h.canvas.transferToImageBitmap=="function"?Promise.resolve(s.h.canvas.transferToImageBitmap()):h?Promise.resolve(s.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(s.h.canvas):(s.j===void 0&&(s.j=document.createElement("canvas")),new Promise(function(x){s.j.height=s.h.canvas.height,s.j.width=s.h.canvas.width,s.j.getContext("2d",{}).drawImage(s.h.canvas,0,0,s.h.canvas.width,s.h.canvas.height),x(s.j)}))}function Gl(s,c){var h=s.h;if(s.s===void 0){var x=Wo(h,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),b=Wo(h,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),P=h.createProgram();if(h.attachShader(P,x),h.attachShader(P,b),h.linkProgram(P),!h.getProgramParameter(P,h.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+h.getProgramInfoLog(P));x=s.s=P,h.useProgram(x),b=h.getUniformLocation(x,"sampler0"),s.l={O:h.getAttribLocation(x,"aVertex"),N:h.getAttribLocation(x,"aTex"),xa:b},s.v=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,s.v),h.enableVertexAttribArray(s.l.O),h.vertexAttribPointer(s.l.O,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),s.u=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,s.u),h.enableVertexAttribArray(s.l.N),h.vertexAttribPointer(s.l.N,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),h.uniform1i(b,0)}x=s.l,h.useProgram(s.s),h.canvas.width=c.width,h.canvas.height=c.height,h.viewport(0,0,c.width,c.height),h.activeTexture(h.TEXTURE0),s.i.bindTexture2d(c.glName),h.enableVertexAttribArray(x.O),h.bindBuffer(h.ARRAY_BUFFER,s.v),h.vertexAttribPointer(x.O,2,h.FLOAT,!1,0,0),h.enableVertexAttribArray(x.N),h.bindBuffer(h.ARRAY_BUFFER,s.u),h.vertexAttribPointer(x.N,2,h.FLOAT,!1,0,0),h.bindFramebuffer(h.DRAW_FRAMEBUFFER?h.DRAW_FRAMEBUFFER:h.FRAMEBUFFER,null),h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.colorMask(!0,!0,!0,!0),h.drawArrays(h.TRIANGLE_FAN,0,4),h.disableVertexAttribArray(x.O),h.disableVertexAttribArray(x.N),h.bindBuffer(h.ARRAY_BUFFER,null),s.i.bindTexture2d(0)}function Vl(s){this.h=s}var kl=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Wl(s,c){return c+s}function Ko(s,c){window[s]=c}function Xl(s){var c=document.createElement("script");return c.setAttribute("src",s),c.setAttribute("crossorigin","anonymous"),new Promise(function(h){c.addEventListener("load",function(){h()},!1),c.addEventListener("error",function(){h()},!1),document.body.appendChild(c)})}function Yl(){return T(function(s){switch(s.h){case 1:return s.s=2,L(s,WebAssembly.instantiate(kl),4);case 4:s.h=3,s.s=0;break;case 2:return s.s=0,s.l=null,s.return(!1);case 3:return s.return(!0)}})}function ls(s){if(this.h=s,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=s&&s.locateFile||Wl,typeof window=="object")var c=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")c=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=c,s.options){c=l(Object.keys(s.options));for(var h=c.next();!h.done;h=c.next()){h=h.value;var x=s.options[h].default;x!==void 0&&(this.l[h]=typeof x=="function"?x():x)}}}i=ls.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function jl(s){var c,h,x,b,P,C,F,K,at,mt,Ot;return T(function(Ct){switch(Ct.h){case 1:return s.ga?(c=s.h.files===void 0?[]:typeof s.h.files=="function"?s.h.files(s.l):s.h.files,L(Ct,Yl(),2)):Ct.return();case 2:if(h=Ct.i,typeof window=="object")return Ko("createMediapipeSolutionsWasm",{locateFile:s.locateFile}),Ko("createMediapipeSolutionsPackedAssets",{locateFile:s.locateFile}),C=c.filter(function(xt){return xt.data!==void 0}),F=c.filter(function(xt){return xt.data===void 0}),K=Promise.all(C.map(function(xt){var Bt=pr(s,xt.url);if(xt.path!==void 0){var te=xt.path;Bt=Bt.then(function(_e){return s.overrideFile(te,_e),Promise.resolve(_e)})}return Bt})),at=Promise.all(F.map(function(xt){return xt.simd===void 0||xt.simd&&h||!xt.simd&&!h?Xl(s.locateFile(xt.url,s.ha)):Promise.resolve()})).then(function(){var xt,Bt,te;return T(function(_e){if(_e.h==1)return xt=window.createMediapipeSolutionsWasm,Bt=window.createMediapipeSolutionsPackedAssets,te=s,L(_e,xt(Bt),2);te.i=_e.i,_e.h=0})}),mt=function(){return T(function(xt){return s.h.graph&&s.h.graph.url?xt=L(xt,pr(s,s.h.graph.url),0):(xt.h=0,xt=void 0),xt})}(),L(Ct,Promise.all([at,K,mt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return x=c.filter(function(xt){return xt.simd===void 0||xt.simd&&h||!xt.simd&&!h}).map(function(xt){return s.locateFile(xt.url,s.ha)}),importScripts.apply(null,u(x)),b=s,L(Ct,createMediapipeSolutionsWasm(Module),6);case 6:b.i=Ct.i,s.m=new OffscreenCanvas(1,1),s.i.canvas=s.m,P=s.i.GL.createContext(s.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),s.i.GL.makeContextCurrent(P),Ct.h=4;break;case 7:if(s.m=document.createElement("canvas"),Ot=s.m.getContext("webgl2",{}),!Ot&&(Ot=s.m.getContext("webgl",{}),!Ot))return alert("Failed to create WebGL canvas context when passing video frame."),Ct.return();s.K=Ot,s.i.canvas=s.m,s.i.createContext(s.m,!0,!0,{});case 4:s.j=new s.i.SolutionWasm,s.ga=!1,Ct.h=0}})}function ql(s){var c,h,x,b,P,C,F,K;return T(function(at){if(at.h==1){if(s.h.graph&&s.h.graph.url&&s.fa===s.h.graph.url)return at.return();if(s.u=!0,!s.h.graph||!s.h.graph.url){at.h=2;return}return s.fa=s.h.graph.url,L(at,pr(s,s.h.graph.url),3)}for(at.h!=2&&(c=at.i,s.j.loadGraph(c)),h=l(Object.keys(s.D)),x=h.next();!x.done;x=h.next())b=x.value,s.j.overrideFile(b,s.D[b]);if(s.D={},s.h.listeners)for(P=l(s.h.listeners),C=P.next();!C.done;C=P.next())F=C.value,Jl(s,F);K=s.l,s.l={},s.setOptions(K),at.h=0})}i.reset=function(){var s=this;return T(function(c){s.j&&(s.j.reset(),s.s={},s.v={}),c.h=0})},i.setOptions=function(s,c){var h=this;if(c=c||this.h.options){for(var x=[],b=[],P={},C=l(Object.keys(s)),F=C.next();!F.done;P={X:P.X,Y:P.Y},F=C.next())if(F=F.value,!(F in this.l&&this.l[F]===s[F])){this.l[F]=s[F];var K=c[F];K!==void 0&&(K.onChange&&(P.X=K.onChange,P.Y=s[F],x.push(function(at){return function(){var mt;return T(function(Ot){if(Ot.h==1)return L(Ot,at.X(at.Y),2);mt=Ot.i,mt===!0&&(h.u=!0),Ot.h=0})}}(P))),K.graphOptionXref&&(F=Object.assign({},{calculatorName:"",calculatorIndex:0},K.graphOptionXref,{valueNumber:K.type===1?s[F]:0,valueBoolean:K.type===0?s[F]:!1,valueString:K.type===2?s[F]:""}),b.push(F)))}(x.length!==0||b.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(b),this.F=(this.F===void 0?[]:this.F).concat(x))}};function Kl(s){var c,h,x,b,P,C,F;return T(function(K){switch(K.h){case 1:if(!s.u)return K.return();if(!s.F){K.h=2;break}c=l(s.F),h=c.next();case 3:if(h.done){K.h=5;break}return x=h.value,L(K,x(),4);case 4:h=c.next(),K.h=3;break;case 5:s.F=void 0;case 2:if(s.H){for(b=new s.i.GraphOptionChangeRequestList,P=l(s.H),C=P.next();!C.done;C=P.next())F=C.value,b.push_back(F);s.j.changeOptions(b),b.delete(),s.H=void 0}s.u=!1,K.h=0}})}i.initialize=function(){var s=this;return T(function(c){return c.h==1?L(c,jl(s),2):c.h!=3?L(c,ql(s),3):L(c,Kl(s),0)})};function pr(s,c){var h,x;return T(function(b){return c in s.L?b.return(s.L[c]):(h=s.locateFile(c,""),x=fetch(h).then(function(P){return P.arrayBuffer()}),s.L[c]=x,b.return(x))})}i.overrideFile=function(s,c){this.j?this.j.overrideFile(s,c):this.D[s]=c},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(s,c){var h=this,x,b,P,C,F,K,at,mt,Ot;return T(function(Ct){switch(Ct.h){case 1:return h.h.inputs?(x=1e3*(c??performance.now()),L(Ct,h.I,2)):Ct.return();case 2:return L(Ct,h.initialize(),3);case 3:for(b=new h.i.PacketDataList,P=l(Object.keys(s)),C=P.next();!C.done;C=P.next())if(F=C.value,K=h.h.inputs[F]){t:{var xt=s[F];switch(K.type){case"video":var Bt=h.s[K.stream];if(Bt||(Bt=new as(h.i,h.K),h.s[K.stream]=Bt),Bt.m===0&&(Bt.m=Bt.i.createTexture()),typeof HTMLVideoElement<"u"&&xt instanceof HTMLVideoElement)var te=xt.videoWidth,_e=xt.videoHeight;else typeof HTMLImageElement<"u"&&xt instanceof HTMLImageElement?(te=xt.naturalWidth,_e=xt.naturalHeight):(te=xt.width,_e=xt.height);_e={glName:Bt.m,width:te,height:_e},te=Bt.h,te.canvas.width=_e.width,te.canvas.height=_e.height,te.activeTexture(te.TEXTURE0),Bt.i.bindTexture2d(Bt.m),te.texImage2D(te.TEXTURE_2D,0,te.RGBA,te.RGBA,te.UNSIGNED_BYTE,xt),Bt.i.bindTexture2d(0),Bt=_e;break t;case"detections":for(Bt=h.s[K.stream],Bt||(Bt=new Vl(h.i),h.s[K.stream]=Bt),Bt.data||(Bt.data=new Bt.h.DetectionListData),Bt.data.reset(xt.length),_e=0;_e<xt.length;++_e){te=xt[_e];var me=Bt.data,De=me.setBoundingBox,en=_e,We=te.la,oe=new dr;if(jt(oe,1,We.ra),jt(oe,2,We.sa),jt(oe,3,We.height),jt(oe,4,We.width),jt(oe,5,We.rotation),pt(oe,6,We.pa),We=oe.l(),De.call(me,en,We),te.ea)for(me=0;me<te.ea.length;++me){oe=te.ea[me],De=Bt.data,en=De.addNormalizedLandmark,We=_e,oe=Object.assign({},oe,{visibility:oe.visibility?oe.visibility:0});var Ue=new fi;jt(Ue,1,oe.x),jt(Ue,2,oe.y),jt(Ue,3,oe.z),oe.visibility&&jt(Ue,4,oe.visibility),oe=Ue.l(),en.call(De,We,oe)}if(te.ba)for(me=0;me<te.ba.length;++me)De=Bt.data,en=De.addClassification,We=_e,oe=te.ba[me],Ue=new hi,jt(Ue,2,oe.score),oe.index&&pt(Ue,1,oe.index),oe.label&&pt(Ue,3,oe.label),oe.displayName&&pt(Ue,4,oe.displayName),oe=Ue.l(),en.call(De,We,oe)}Bt=Bt.data;break t;default:Bt={}}}switch(at=Bt,mt=K.stream,K.type){case"video":b.pushTexture2d(Object.assign({},at,{stream:mt,timestamp:x}));break;case"detections":Ot=at,Ot.stream=mt,Ot.timestamp=x,b.pushDetectionList(Ot);break;default:throw Error("Unknown input config type: '"+K.type+"'")}}return h.j.send(b),L(Ct,h.I,4);case 4:b.delete(),Ct.h=0}})};function $l(s,c,h){var x,b,P,C,F,K,at,mt,Ot,Ct,xt,Bt,te,_e;return T(function(me){switch(me.h){case 1:if(!h)return me.return(c);for(x={},b=0,P=l(Object.keys(h)),C=P.next();!C.done;C=P.next())F=C.value,K=h[F],typeof K!="string"&&K.type==="texture"&&c[K.stream]!==void 0&&++b;1<b&&(s.M=!1),at=l(Object.keys(h)),C=at.next();case 2:if(C.done){me.h=4;break}if(mt=C.value,Ot=h[mt],typeof Ot=="string")return te=x,_e=mt,L(me,Zl(s,mt,c[Ot]),14);if(Ct=c[Ot.stream],Ot.type==="detection_list"){if(Ct){for(var De=Ct.getRectList(),en=Ct.getLandmarksList(),We=Ct.getClassificationsList(),oe=[],Ue=0;Ue<De.size();++Ue){var Ln=Hl(De.get(Ue)),Ql=Me(Ln,1),tc=Me(Ln,2),ec=Me(Ln,3),nc=Me(Ln,4),ic=Me(Ln,5,0),mr=void 0;mr=mr===void 0?0:mr,Ln={la:{ra:Ql,sa:tc,height:ec,width:nc,rotation:ic,pa:de(lt(Ln,6),mr)},ea:Dt(Vo(en.get(Ue)),fi,1).map(Yo),ba:Xo(zo(We.get(Ue)))},oe.push(Ln)}De=oe}else De=[];x[mt]=De,me.h=7;break}if(Ot.type==="proto_list"){if(Ct){for(De=Array(Ct.size()),en=0;en<Ct.size();en++)De[en]=Ct.get(en);Ct.delete()}else De=[];x[mt]=De,me.h=7;break}if(Ct===void 0){me.h=3;break}if(Ot.type==="float_list"){x[mt]=Ct,me.h=7;break}if(Ot.type==="proto"){x[mt]=Ct,me.h=7;break}if(Ot.type!=="texture")throw Error("Unknown output config type: '"+Ot.type+"'");return xt=s.v[mt],xt||(xt=new as(s.i,s.K),s.v[mt]=xt),L(me,qo(xt,Ct,s.M),13);case 13:Bt=me.i,x[mt]=Bt;case 7:Ot.transform&&x[mt]&&(x[mt]=Ot.transform(x[mt])),me.h=3;break;case 14:te[_e]=me.i;case 3:C=at.next(),me.h=2;break;case 4:return me.return(x)}})}function Zl(s,c,h){var x;return T(function(b){return typeof h=="number"||h instanceof Uint8Array||h instanceof s.i.Uint8BlobList?b.return(h):h instanceof s.i.Texture2dDataOut?(x=s.v[c],x||(x=new as(s.i,s.K),s.v[c]=x),b.return(qo(x,h,s.M))):b.return(void 0)})}function Jl(s,c){for(var h=c.name||"$",x=[].concat(u(c.wants)),b=new s.i.StringList,P=l(c.wants),C=P.next();!C.done;C=P.next())b.push_back(C.value);P=s.i.PacketListener.implement({onResults:function(F){for(var K={},at=0;at<c.wants.length;++at)K[x[at]]=F.get(at);var mt=s.listeners[h];mt&&(s.I=$l(s,K,c.outs).then(function(Ot){Ot=mt(Ot);for(var Ct=0;Ct<c.wants.length;++Ct){var xt=K[x[Ct]];typeof xt=="object"&&xt.hasOwnProperty&&xt.hasOwnProperty("delete")&&xt.delete()}Ot&&(s.I=Ot)}))}}),s.j.attachMultiListener(b,P),b.delete()}i.onResults=function(s,c){this.listeners[c||"$"]=s},tt("Solution",ls),tt("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function $o(s){return s===void 0&&(s=0),s===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Zo(s){var c=this;s=s||{},this.h=new ls({locateFile:s.locateFile,files:function(h){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:$o(h.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:jo},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:jo},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(h){return h.map(function(x){return Xo(zo(x))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(h){var x,b,P;return T(function(C){return C.h==1?(x=$o(h),b="third_party/mediapipe/modules/hand_landmark/"+x,L(C,pr(c.h,x),2)):(P=C.i,c.h.overrideFile(b,P),C.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}i=Zo.prototype,i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(s){this.h.onResults(s)},i.initialize=function(){var s=this;return T(function(c){return L(c,s.h.initialize(),0)})},i.reset=function(){this.h.reset()},i.send=function(s){var c=this;return T(function(h){return L(h,c.h.send(s),0)})},i.setOptions=function(s){this.h.setOptions(s)},tt("Hands",Zo),tt("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),tt("VERSION","0.4.1675469240")}).call(Ni);var gm={};(function(){function i(g){var T=0;return function(){return T<g.length?{done:!1,value:g[T++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(g,T,k){return g==Array.prototype||g==Object.prototype||(g[T]=k.value),g};function e(g){g=[typeof globalThis=="object"&&globalThis,g,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ni=="object"&&Ni];for(var T=0;T<g.length;++T){var k=g[T];if(k&&k.Math==Math)return k}throw Error("Cannot find global object")}var n=e(this);function r(g,T){if(T)t:{var k=n;g=g.split(".");for(var H=0;H<g.length-1;H++){var Q=g[H];if(!(Q in k))break t;k=k[Q]}g=g[g.length-1],H=k[g],T=T(H),T!=H&&T!=null&&t(k,g,{configurable:!0,writable:!0,value:T})}}r("Symbol",function(g){function T(tt){if(this instanceof T)throw new TypeError("Symbol is not a constructor");return new k(H+(tt||"")+"_"+Q++,tt)}function k(tt,B){this.g=tt,t(this,"description",{configurable:!0,writable:!0,value:B})}if(g)return g;k.prototype.toString=function(){return this.g};var H="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",Q=0;return T}),r("Symbol.iterator",function(g){if(g)return g;g=Symbol("Symbol.iterator");for(var T="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),k=0;k<T.length;k++){var H=n[T[k]];typeof H=="function"&&typeof H.prototype[g]!="function"&&t(H.prototype,g,{configurable:!0,writable:!0,value:function(){return o(i(this))}})}return g});function o(g){return g={next:g},g[Symbol.iterator]=function(){return this},g}function a(g){var T=typeof Symbol<"u"&&Symbol.iterator&&g[Symbol.iterator];return T?T.call(g):{next:i(g)}}function l(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function u(g){if(g.i)throw new TypeError("Generator is already running");g.i=!0}l.prototype.l=function(g){this.o=g};function f(g,T){g.h={F:T,G:!0},g.j=g.m}l.prototype.return=function(g){this.h={return:g},this.j=this.m};function p(g){this.g=new l,this.h=g}function v(g,T){u(g.g);var k=g.g.g;return k?_(g,"return"in k?k.return:function(H){return{value:H,done:!0}},T,g.g.return):(g.g.return(T),M(g))}function _(g,T,k,H){try{var Q=T.call(g.g.g,k);if(!(Q instanceof Object))throw new TypeError("Iterator result "+Q+" is not an object");if(!Q.done)return g.g.i=!1,Q;var tt=Q.value}catch(B){return g.g.g=null,f(g.g,B),M(g)}return g.g.g=null,H.call(g.g,tt),M(g)}function M(g){for(;g.g.j;)try{var T=g.h(g.g);if(T)return g.g.i=!1,{value:T.value,done:!1}}catch(k){g.g.o=void 0,f(g.g,k)}if(g.g.i=!1,g.g.h){if(T=g.g.h,g.g.h=null,T.G)throw T.F;return{value:T.return,done:!0}}return{value:void 0,done:!0}}function E(g){this.next=function(T){return u(g.g),g.g.g?T=_(g,g.g.g.next,T,g.g.l):(g.g.l(T),T=M(g)),T},this.throw=function(T){return u(g.g),g.g.g?T=_(g,g.g.g.throw,T,g.g.l):(f(g.g,T),T=M(g)),T},this.return=function(T){return v(g,T)},this[Symbol.iterator]=function(){return this}}function A(g){function T(H){return g.next(H)}function k(H){return g.throw(H)}return new Promise(function(H,Q){function tt(B){B.done?H(B.value):Promise.resolve(B.value).then(T,k).then(tt,Q)}tt(g.next())})}r("Promise",function(g){function T(B){this.h=0,this.i=void 0,this.g=[],this.o=!1;var Y=this.j();try{B(Y.resolve,Y.reject)}catch(X){Y.reject(X)}}function k(){this.g=null}function H(B){return B instanceof T?B:new T(function(Y){Y(B)})}if(g)return g;k.prototype.h=function(B){if(this.g==null){this.g=[];var Y=this;this.i(function(){Y.l()})}this.g.push(B)};var Q=n.setTimeout;k.prototype.i=function(B){Q(B,0)},k.prototype.l=function(){for(;this.g&&this.g.length;){var B=this.g;this.g=[];for(var Y=0;Y<B.length;++Y){var X=B[Y];B[Y]=null;try{X()}catch(ct){this.j(ct)}}}this.g=null},k.prototype.j=function(B){this.i(function(){throw B})},T.prototype.j=function(){function B(ct){return function(gt){X||(X=!0,ct.call(Y,gt))}}var Y=this,X=!1;return{resolve:B(this.A),reject:B(this.l)}},T.prototype.A=function(B){if(B===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(B instanceof T)this.C(B);else{t:switch(typeof B){case"object":var Y=B!=null;break t;case"function":Y=!0;break t;default:Y=!1}Y?this.v(B):this.m(B)}},T.prototype.v=function(B){var Y=void 0;try{Y=B.then}catch(X){this.l(X);return}typeof Y=="function"?this.D(Y,B):this.m(B)},T.prototype.l=function(B){this.u(2,B)},T.prototype.m=function(B){this.u(1,B)},T.prototype.u=function(B,Y){if(this.h!=0)throw Error("Cannot settle("+B+", "+Y+"): Promise already settled in state"+this.h);this.h=B,this.i=Y,this.h===2&&this.B(),this.H()},T.prototype.B=function(){var B=this;Q(function(){if(B.I()){var Y=n.console;typeof Y<"u"&&Y.error(B.i)}},1)},T.prototype.I=function(){if(this.o)return!1;var B=n.CustomEvent,Y=n.Event,X=n.dispatchEvent;return typeof X>"u"?!0:(typeof B=="function"?B=new B("unhandledrejection",{cancelable:!0}):typeof Y=="function"?B=new Y("unhandledrejection",{cancelable:!0}):(B=n.document.createEvent("CustomEvent"),B.initCustomEvent("unhandledrejection",!1,!0,B)),B.promise=this,B.reason=this.i,X(B))},T.prototype.H=function(){if(this.g!=null){for(var B=0;B<this.g.length;++B)tt.h(this.g[B]);this.g=null}};var tt=new k;return T.prototype.C=function(B){var Y=this.j();B.s(Y.resolve,Y.reject)},T.prototype.D=function(B,Y){var X=this.j();try{B.call(Y,X.resolve,X.reject)}catch(ct){X.reject(ct)}},T.prototype.then=function(B,Y){function X(zt,qt){return typeof zt=="function"?function(et){try{ct(zt(et))}catch(ut){gt(ut)}}:qt}var ct,gt,wt=new T(function(zt,qt){ct=zt,gt=qt});return this.s(X(B,ct),X(Y,gt)),wt},T.prototype.catch=function(B){return this.then(void 0,B)},T.prototype.s=function(B,Y){function X(){switch(ct.h){case 1:B(ct.i);break;case 2:Y(ct.i);break;default:throw Error("Unexpected state: "+ct.h)}}var ct=this;this.g==null?tt.h(X):this.g.push(X),this.o=!0},T.resolve=H,T.reject=function(B){return new T(function(Y,X){X(B)})},T.race=function(B){return new T(function(Y,X){for(var ct=a(B),gt=ct.next();!gt.done;gt=ct.next())H(gt.value).s(Y,X)})},T.all=function(B){var Y=a(B),X=Y.next();return X.done?H([]):new T(function(ct,gt){function wt(et){return function(ut){zt[et]=ut,qt--,qt==0&&ct(zt)}}var zt=[],qt=0;do zt.push(void 0),qt++,H(X.value).s(wt(zt.length-1),gt),X=Y.next();while(!X.done)})},T});var m=typeof Object.assign=="function"?Object.assign:function(g,T){for(var k=1;k<arguments.length;k++){var H=arguments[k];if(H)for(var Q in H)Object.prototype.hasOwnProperty.call(H,Q)&&(g[Q]=H[Q])}return g};r("Object.assign",function(g){return g||m});var d=this||self,U={facingMode:"user",width:640,height:480};function w(g,T){this.video=g,this.i=0,this.h=Object.assign(Object.assign({},U),T)}w.prototype.stop=function(){var g=this,T,k,H,Q;return A(new E(new p(function(tt){if(g.g){for(T=g.g.getTracks(),k=a(T),H=k.next();!H.done;H=k.next())Q=H.value,Q.stop();g.g=void 0}tt.j=0})))},w.prototype.start=function(){var g=this,T;return A(new E(new p(function(k){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),T=g.h,k.return(navigator.mediaDevices.getUserMedia({video:{facingMode:T.facingMode,width:T.width,height:T.height}}).then(function(H){J(g,H)}).catch(function(H){var Q="Failed to acquire camera feed: "+H;throw console.error(Q),alert(Q),H}))})))};function L(g){window.requestAnimationFrame(function(){O(g)})}function J(g,T){g.g=T,g.video.srcObject=T,g.video.onloadedmetadata=function(){g.video.play(),L(g)}}function O(g){var T=null;g.video.paused||g.video.currentTime===g.i||(g.i=g.video.currentTime,T=g.h.onFrame()),T?T.then(function(){L(g)}):L(g)}var N=["Camera"],W=d;N[0]in W||typeof W.execScript>"u"||W.execScript("var "+N[0]);for(var R;N.length&&(R=N.shift());)N.length||w===void 0?W[R]&&W[R]!==Object.prototype[R]?W=W[R]:W=W[R]={}:W[R]=w}).call(Ni);class _m{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.canvas=null,this.video=null,this.hands=null,this.cameraUtils=null,this.handLandmarks=[],this.collisionPoints=[],this.rainCharacters=[],this.rainDrops=[],this.handMarkers=[],this.frameSkipCounter=0,this.frameSkipInterval=2,this.width=window.innerWidth,this.height=window.innerHeight,this.init()}async init(){console.log("비 인터랙션 시작..."),this.setupWebGL(),await this.setupHandDetection(),this.createRainCharacters(),this.animate(),console.log("초기화 완료!")}setupWebGL(){this.canvas=document.getElementById("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.scene=new dm,this.camera=new Ml(-this.width/2,this.width/2,this.height/2,-this.height/2,-1e3,1e3),this.camera.position.z=100,this.renderer=new fm({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(0,0),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.camera.left=-this.width/2,this.camera.right=this.width/2,this.camera.top=this.height/2,this.camera.bottom=-this.height/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.canvas.width=this.width,this.canvas.height=this.height})}async setupHandDetection(){try{this.hands=new mm.Hands({locateFile:t=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${t}`}),this.hands.setOptions({maxNumHands:1,modelComplexity:0,minDetectionConfidence:.7,minTrackingConfidence:.5}),this.hands.onResults(t=>{this.onHandResults(t)}),this.video=document.getElementById("video"),this.cameraUtils=new gm.Camera(this.video,{onFrame:async()=>{this.frameSkipCounter++,this.frameSkipCounter%this.frameSkipInterval===0&&await this.hands.send({image:this.video})},width:this.width,height:this.height}),await this.cameraUtils.start()}catch(t){console.error("손 감지 초기화 실패:",t),this.setupMouseEvents()}}setupMouseEvents(){this.canvas.addEventListener("mousemove",t=>{const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,o={x:n/this.width,y:r/this.height};this.handLandmarks=[o],this.collisionPoints=[o],this.clearHandMarkers(),this.createMouseMarker(n,r)})}createMouseMarker(t,e){const n=new Zr(20,16),r=new Pi({color:16776960,transparent:!0,opacity:.6}),o=new Ze(n,r),a=t-this.width/2,l=-(e-this.height/2);o.position.set(a,l,10),this.scene.add(o),this.handMarkers.push(o)}onHandResults(t){if(this.handLandmarks=[],this.collisionPoints=[],this.clearHandMarkers(),t.multiHandLandmarks&&t.multiHandLandmarks.length>0){for(const e of t.multiHandLandmarks)this.handLandmarks=e,this.collisionPoints=[e[9],e[8],e[12],e[16],e[20]];this.createSimpleHandMarkers()}}createSimpleHandMarkers(){!this.collisionPoints||this.collisionPoints.length===0||this.collisionPoints.forEach((t,e)=>{const n=(1-t.x)*this.width-this.width/2,r=-(t.y*this.height)+this.height/2;if(n>=-this.width/2&&n<=this.width/2&&r>=-this.height/2&&r<=this.height/2){const a=new Zr(15,8),l=new Pi({color:65280,transparent:!0,opacity:.8}),u=new Ze(a,l);u.position.set(n,r,10),this.scene.add(u),this.handMarkers.push(u)}})}clearHandMarkers(){this.handMarkers.forEach(t=>{this.scene.remove(t),t.geometry.dispose(),t.material.dispose()}),this.handMarkers=[]}createRainCharacters(){for(let t=0;t<20;t++)this.createRainCharacter()}createRainCharacter(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=128,t.height=128,e.font="bold 80px Noto Sans KR",e.fillStyle="rgba(255, 255, 255, 0.9)",e.textAlign="center",e.textBaseline="middle",e.fillText("비",64,64);const n=new pm(t),r=new cr(60,60),o=new Pi({map:n,transparent:!0,opacity:.8}),a=new Ze(r,o);a.position.x=(Math.random()-.5)*this.width,a.position.y=this.height/2+Math.random()*200,a.position.z=0,a.userData={fallSpeed:Math.random()*2+1,originalSize:60,isTransforming:!1},this.scene.add(a),this.rainCharacters.push(a)}checkHandCollision(t){if(!this.collisionPoints||this.collisionPoints.length===0)return!1;const e=t.position.x+this.width/2,n=-t.position.y+this.height/2;for(const r of this.collisionPoints){const o=(1-r.x)*this.width,a=r.y*this.height;if(Math.sqrt(Math.pow(e-o,2)+Math.pow(n-a,2))<80)return!0}return!1}update(){for(let t=this.rainCharacters.length-1;t>=0;t--){const e=this.rainCharacters[t];if(e.position.y-=e.userData.fallSpeed,this.checkHandCollision(e)){this.transformToRainDrops(e);continue}e.position.y<-this.height/2-100&&(e.position.y=this.height/2+Math.random()*200,e.position.x=(Math.random()-.5)*this.width)}for(let t=this.rainDrops.length-1;t>=0;t--){const e=this.rainDrops[t];e.position.y-=e.userData.fallSpeed,e.position.x+=e.userData.sideSpeed,e.userData.life-=.01,e.material.opacity=e.userData.life,(e.userData.life<=0||e.position.y<-this.height/2-100)&&(this.scene.remove(e),this.rainDrops.splice(t,1))}}transformToRainDrops(t){if(t.userData.isTransforming)return;t.userData.isTransforming=!0;const e=15;for(let r=0;r<e;r++)this.createRainDrop(t.position.x+(Math.random()-.5)*100,t.position.y+(Math.random()-.5)*50);this.scene.remove(t);const n=this.rainCharacters.indexOf(t);n>-1&&this.rainCharacters.splice(n,1),setTimeout(()=>{this.createRainCharacter()},2e3)}createRainDrop(t,e){const n=new Ro(2,8,8),r=new Pi({color:4886754,transparent:!0,opacity:.8}),o=new Ze(n,r);o.position.set(t,e,-5),o.userData={fallSpeed:Math.random()*5+3,sideSpeed:(Math.random()-.5)*2,life:1},this.scene.add(o),this.rainDrops.push(o)}update(){for(let t=this.rainCharacters.length-1;t>=0;t--){const e=this.rainCharacters[t];if(e.position.y-=e.userData.fallSpeed,this.checkHandCollision(e)){this.transformToRainDrops(e);continue}e.position.y<-this.height/2-100&&(e.position.y=this.height/2+Math.random()*200,e.position.x=(Math.random()-.5)*this.width)}for(let t=this.rainDrops.length-1;t>=0;t--){const e=this.rainDrops[t];e.position.y-=e.userData.fallSpeed,e.position.x+=e.userData.sideSpeed,e.userData.life-=.01,e.material.opacity=e.userData.life,(e.userData.life<=0||e.position.y<-this.height/2-100)&&(this.scene.remove(e),this.rainDrops.splice(t,1))}}animate(){requestAnimationFrame(()=>this.animate()),this.validateHandMarkers(),this.update(),this.renderer.render(this.scene,this.camera)}validateHandMarkers(){if(!this.collisionPoints||this.collisionPoints.length===0){this.handMarkers.length>0&&this.clearHandMarkers();return}for(let t=this.handMarkers.length-1;t>=0;t--){const e=this.handMarkers[t];(e.position.x<-this.width/2-50||e.position.x>this.width/2+50||e.position.y<-this.height/2-50||e.position.y>this.height/2+50)&&(this.scene.remove(e),e.geometry.dispose(),e.material.dispose(),this.handMarkers.splice(t,1))}}}new _m;
