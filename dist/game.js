(()=>{var Yf=0,_u=1,Zf=2;var js=1,Jf=2,qr=3,As=0,rn=1,vn=2,ki=0,Rs=1,Bn=2,yu=3,vu=4,$f=5;var Qs=100,Kf=101,jf=102,Qf=103,tp=104,ep=200,np=201,ip=202,sp=203,Mu=204,bu=205,rp=206,ap=207,op=208,lp=209,cp=210,hp=211,up=212,dp=213,fp=214,_l=0,yl=1,vl=2,Lr=3,Ml=4,bl=5,Sl=6,wl=7,Su=0,pp=1,mp=2,wi=0,wu=1,Tu=2,Eu=3,Ja=4,Au=5,Ru=6,Cu=7;var Iu=300,Cs=301,tr=302,Kl=303,jl=304,$a=306,Dr=1e3,Ui=1001,Tl=1002,dn=1003,gp=1004;var Ka=1005;var xn=1006,Ql=1007;var Is=1008;var Kn=1009,Pu=1010,Lu=1011,Yr=1012,tc=1013,Ti=1014,di=1015,Ei=1016,ec=1017,nc=1018,Zr=1020,Du=35902,Nu=35899,Uu=1021,Fu=1022,fi=1023,Fi=1026,Ps=1027,ic=1028,sc=1029,Ls=1030,rc=1031;var ac=1033,ja=33776,Qa=33777,to=33778,eo=33779,oc=35840,lc=35841,cc=35842,hc=35843,uc=36196,dc=37492,fc=37496,pc=37488,mc=37489,no=37490,gc=37491,xc=37808,_c=37809,yc=37810,vc=37811,Mc=37812,bc=37813,Sc=37814,wc=37815,Tc=37816,Ec=37817,Ac=37818,Rc=37819,Cc=37820,Ic=37821,Pc=36492,Lc=36494,Dc=36495,Nc=36283,Uc=36284,io=36285,Fc=36286;var Aa=2300,El=2301,gl=2302,cu=2303,hu=2400,uu=2401,du=2402;var xp=3200;var zc=0,_p=1,as="",Fn="srgb",Ra="srgb-linear",Ca="linear",ye="srgb";var xl=7680;var yp=519,vp=512,Mp=513,bp=514,Oc=515,Sp=516,wp=517,Bc=518,Tp=519,zu=35044,er=35048;var Ou="300 es",bi=2e3,Nr=2001;function km(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ep(){let i=Ia("canvas");return i.style.display="block",i}var gf={},Ur=null;function Pa(...i){let t="THREE."+i.shift();Ur?Ur("log",t,...i):console.log(t,...i)}function Ap(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=Ap(i);let t="THREE."+i.shift();if(Ur)Ur("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Gt(...i){i=Ap(i);let t="THREE."+i.shift();if(Ur)Ur("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ys(...i){let t=i.join(" ");t in gf||(gf[t]=!0,Vt(...i))}function Rp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Cp={[_l]:yl,[vl]:Sl,[Ml]:wl,[Lr]:bl,[yl]:_l,[Sl]:vl,[wl]:Ml,[bl]:Lr},zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oh=Math.PI/180,Al=180/Math.PI;function ys(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function Vm(i,t){return(i%t+t)%t}function Bh(i,t,e){return(1-e)*i+e*t}function Ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gu=class Gu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gu.prototype.isVector2=!0;var Xt=Gu,Jn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let v=Math.acos(g),A=Math.sin(v);m=Math.sin(m*v)/A,o=Math.sin(o*v)/A,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wu=class Wu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kh.copy(this).projectOnVector(t),this.sub(kh)}reflect(t){return this.sub(kh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wu.prototype.isVector3=!0;var P=Wu,kh=new P,xf=new Jn,Xu=class Xu{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],v=s[1],A=s[4],y=s[7],S=s[2],b=s[5],R=s[8];return r[0]=a*x+o*v+l*S,r[3]=a*g+o*A+l*b,r[6]=a*m+o*y+l*R,r[1]=c*x+h*v+d*S,r[4]=c*g+h*A+d*b,r[7]=c*m+h*y+d*R,r[2]=u*x+f*v+p*S,r[5]=u*g+f*A+p*b,r[8]=u*m+f*y+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hh.makeScale(t,e)),this}rotate(t){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hh.makeRotation(-t)),this}translate(t,e){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xu.prototype.isMatrix3=!0;var qt=Xu,Hh=new qt,_f=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yf=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gm(){let i={enabled:!0,workingColorSpace:Ra,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ye&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ye&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?Ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ra]:{primaries:t,whitePoint:n,transfer:Ca,toXYZ:_f,fromXYZ:yf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:_f,fromXYZ:yf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),i}var se=Gm();function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fr,Rl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fr===void 0&&(fr=Ia("canvas")),fr.width=t.width,fr.height=t.height;let s=fr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=fr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ia("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=is(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(is(e[n]/255)*255):e[n]=is(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Wm=0,Fr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vh(s[a].image)):r.push(Vh(s[a]))}else r=Vh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Xm=0,Gh=new P,zn=class i extends zi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ui,s=Ui,r=xn,a=Is,o=fi,l=Kn,c=i.DEFAULT_ANISOTROPY,h=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=ys(),this.name="",this.source=new Fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dr:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case Tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dr:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case Tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Iu;zn.DEFAULT_ANISOTROPY=1;var qu=class qu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(f+1)/2,S=(m+1)/2,b=(h+u)/4,R=(d+x)/4,_=(p+g)/4;return A>y&&A>S?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=R/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=_/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qu.prototype.isVector4=!0;var ke=qu,Cl=class extends zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new zn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},La=class extends zn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Il=class extends zn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $l=class $l{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/pr.setFromMatrixColumn(t,0).length(),r=1/pr.setFromMatrixColumn(t,1).length(),a=1/pr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qm,t,Ym)}lookAt(t,e,n){let s=this.elements;return ni.subVectors(t,e),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ps.crossVectors(n,ni),ps.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ps.crossVectors(n,ni)),ps.normalize(),Go.crossVectors(ni,ps),s[0]=ps.x,s[4]=Go.x,s[8]=ni.x,s[1]=ps.y,s[5]=Go.y,s[9]=ni.y,s[2]=ps.z,s[6]=Go.z,s[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],A=n[7],y=n[11],S=n[15],b=s[0],R=s[4],_=s[8],E=s[12],I=s[1],N=s[5],z=s[9],B=s[13],D=s[2],k=s[6],q=s[10],X=s[14],et=s[3],Y=s[7],Q=s[11],nt=s[15];return r[0]=a*b+o*I+l*D+c*et,r[4]=a*R+o*N+l*k+c*Y,r[8]=a*_+o*z+l*q+c*Q,r[12]=a*E+o*B+l*X+c*nt,r[1]=h*b+d*I+u*D+f*et,r[5]=h*R+d*N+u*k+f*Y,r[9]=h*_+d*z+u*q+f*Q,r[13]=h*E+d*B+u*X+f*nt,r[2]=p*b+x*I+g*D+m*et,r[6]=p*R+x*N+g*k+m*Y,r[10]=p*_+x*z+g*q+m*Q,r[14]=p*E+x*B+g*X+m*nt,r[3]=v*b+A*I+y*D+S*et,r[7]=v*R+A*N+y*k+S*Y,r[11]=v*_+A*z+y*q+S*Q,r[15]=v*E+A*B+y*X+S*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],v=l*f-c*u,A=o*f-c*d,y=o*u-l*d,S=a*f-c*h,b=a*u-l*h,R=a*d-o*h;return e*(x*v-g*A+m*y)-n*(p*v-g*S+m*b)+s*(p*A-x*S+m*R)-r*(p*y-x*b+g*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=e*o-n*a,A=e*l-s*a,y=e*c-r*a,S=n*l-s*o,b=n*c-r*o,R=s*c-r*l,_=h*x-d*p,E=h*g-u*p,I=h*m-f*p,N=d*g-u*x,z=d*m-f*x,B=u*m-f*g,D=v*B-A*z+y*N+S*I-b*E+R*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/D;return t[0]=(o*B-l*z+c*N)*k,t[1]=(s*z-n*B-r*N)*k,t[2]=(x*R-g*b+m*S)*k,t[3]=(u*b-d*R-f*S)*k,t[4]=(l*I-a*B-c*E)*k,t[5]=(e*B-s*I+r*E)*k,t[6]=(g*y-p*R-m*A)*k,t[7]=(h*R-u*y+f*A)*k,t[8]=(a*z-o*I+c*_)*k,t[9]=(n*I-e*z-r*_)*k,t[10]=(p*b-x*y+m*v)*k,t[11]=(d*y-h*b-f*v)*k,t[12]=(o*E-a*N-l*_)*k,t[13]=(e*N-n*E+s*_)*k,t[14]=(x*A-p*S-g*v)*k,t[15]=(h*S-d*A+u*v)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,g=a*d,m=o*d,v=l*c,A=l*h,y=l*d,S=n.x,b=n.y,R=n.z;return s[0]=(1-(x+m))*S,s[1]=(f+y)*S,s[2]=(p-A)*S,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(u+m))*b,s[6]=(g+v)*b,s[7]=0,s[8]=(p+A)*R,s[9]=(g-v)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=pr.set(s[0],s[1],s[2]).length(),o=pr.set(s[4],s[5],s[6]).length(),l=pr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_i.copy(this);let c=1/a,h=1/o,d=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=d,_i.elements[9]*=d,_i.elements[10]*=d,e.setFromRotationMatrix(_i),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=bi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===bi)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Nr)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===bi)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Nr)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};$l.prototype.isMatrix4=!0;var le=$l,pr=new P,_i=new le,qm=new P(0,0,0),Ym=new P(1,1,1),ps=new P,Go=new P,ni=new P,vf=new le,Mf=new Jn,ss=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mf.setFromEuler(this),this.setFromQuaternion(Mf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ss.DEFAULT_ORDER="XYZ";var Da=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zm=0,bf=new P,mr=new Jn,Ki=new le,Wo=new P,xa=new P,Jm=new P,$m=new Jn,Sf=new P(1,0,0),wf=new P(0,1,0),Tf=new P(0,0,1),Ef={type:"added"},Km={type:"removed"},gr={type:"childadded",child:null},Wh={type:"childremoved",child:null},nn=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new ss,n=new Jn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new qt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mr.setFromAxisAngle(t,e),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,e){return mr.setFromAxisAngle(t,e),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(Sf,t)}rotateY(t){return this.rotateOnAxis(wf,t)}rotateZ(t){return this.rotateOnAxis(Tf,t)}translateOnAxis(t,e){return bf.copy(t).applyQuaternion(this.quaternion),this.position.add(bf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sf,t)}translateY(t){return this.translateOnAxis(wf,t)}translateZ(t){return this.translateOnAxis(Tf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wo.copy(t):Wo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(xa,Wo,this.up):Ki.lookAt(Wo,xa,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Ki),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ef),gr.child=t,this.dispatchEvent(gr),gr.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Km),Wh.child=t,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ef),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,t,Jm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,$m,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};nn.DEFAULT_UP=new P(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ae=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},jm={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Xh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Vm(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xh(a,r,t+1/3),this.g=Xh(a,r,t),this.b=Xh(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=Fn){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fn){let n=Ip[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return se.workingToColorSpace(En.copy(this),t),Math.round(re(En.r*255,0,255))*65536+Math.round(re(En.g*255,0,255))*256+Math.round(re(En.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(En.copy(this),e);let n=En.r,s=En.g,r=En.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(En.copy(this),e),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=Fn){se.workingToColorSpace(En.copy(this),t);let e=En.r,n=En.g,s=En.b;return t!==Fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ms),this.setHSL(ms.h+t,ms.s+e,ms.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ms),t.getHSL(Xo);let n=Bh(ms.h,Xo.h,e),s=Bh(ms.s,Xo.s,e),r=Bh(ms.l,Xo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new pt;pt.NAMES=Ip;var Or=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yi=new P,ji=new P,qh=new P,Qi=new P,xr=new P,_r=new P,Af=new P,Yh=new P,Zh=new P,Jh=new P,$h=new ke,Kh=new ke,jh=new ke,ns=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yi.subVectors(t,e),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yi.subVectors(s,e),ji.subVectors(n,e),qh.subVectors(t,e);let a=yi.dot(yi),o=yi.dot(ji),l=yi.dot(qh),c=ji.dot(ji),h=ji.dot(qh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qi.x),l.addScaledVector(a,Qi.y),l.addScaledVector(o,Qi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return $h.setScalar(0),Kh.setScalar(0),jh.setScalar(0),$h.fromBufferAttribute(t,e),Kh.fromBufferAttribute(t,n),jh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector($h,r.x),a.addScaledVector(Kh,r.y),a.addScaledVector(jh,r.z),a}static isFrontFacing(t,e,n,s){return yi.subVectors(n,e),ji.subVectors(t,e),yi.cross(ji).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),yi.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;xr.subVectors(s,n),_r.subVectors(r,n),Yh.subVectors(t,n);let l=xr.dot(Yh),c=_r.dot(Yh);if(l<=0&&c<=0)return e.copy(n);Zh.subVectors(t,s);let h=xr.dot(Zh),d=_r.dot(Zh);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(xr,a);Jh.subVectors(t,r);let f=xr.dot(Jh),p=_r.dot(Jh);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(_r,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Af.subVectors(r,s),o=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Af,o);let m=1/(g+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(xr,a).addScaledVector(_r,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Oi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vi):vi.fromBufferAttribute(r,a),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qo.copy(n.boundingBox)),qo.applyMatrix4(t.matrixWorld),this.union(qo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_a),Yo.subVectors(this.max,_a),yr.subVectors(t.a,_a),vr.subVectors(t.b,_a),Mr.subVectors(t.c,_a),gs.subVectors(vr,yr),xs.subVectors(Mr,vr),Gs.subVectors(yr,Mr);let e=[0,-gs.z,gs.y,0,-xs.z,xs.y,0,-Gs.z,Gs.y,gs.z,0,-gs.x,xs.z,0,-xs.x,Gs.z,0,-Gs.x,-gs.y,gs.x,0,-xs.y,xs.x,0,-Gs.y,Gs.x,0];return!Qh(e,yr,vr,Mr,Yo)||(e=[1,0,0,0,1,0,0,0,1],!Qh(e,yr,vr,Mr,Yo))?!1:(Zo.crossVectors(gs,xs),e=[Zo.x,Zo.y,Zo.z],Qh(e,yr,vr,Mr,Yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ts=[new P,new P,new P,new P,new P,new P,new P,new P],vi=new P,qo=new Oi,yr=new P,vr=new P,Mr=new P,gs=new P,xs=new P,Gs=new P,_a=new P,Yo=new P,Zo=new P,Ws=new P;function Qh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ws.fromArray(i,r);let o=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),l=t.dot(Ws),c=e.dot(Ws),h=n.dot(Ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qe=new P,Jo=new Xt,Qm=0,De=class extends zi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jo.fromBufferAttribute(this,e),Jo.applyMatrix3(t),this.setXY(e,Jo.x,Jo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Zs=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Js=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},tg=new Oi,ya=new P,tu=new P,Bi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):tg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ya.subVectors(t,this.center);let e=ya.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ya,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ya.copy(t.center).add(tu)),this.expandByPoint(ya.copy(t.center).sub(tu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},eg=0,hi=new le,eu=new nn,br=new P,ii=new Oi,va=new Oi,un=new P,Ne=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(km(t)?Js:Zs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,e,n){return hi.makeTranslation(t,e,n),this.applyMatrix4(hi),this}scale(t,e,n){return hi.makeScale(t,e,n),this.applyMatrix4(hi),this}lookAt(t){return eu.lookAt(t),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];va.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(ii.min,va.min),ii.expandByPoint(un),un.addVectors(ii.max,va.max),ii.expandByPoint(un)):(ii.expandByPoint(va.min),ii.expandByPoint(va.max))}ii.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)un.fromBufferAttribute(o,c),l&&(br.fromBufferAttribute(t,c),un.add(br)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new De(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,h=new P,d=new P,u=new Xt,f=new Xt,p=new Xt,x=new P,g=new P;function m(_,E,I){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(N),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(N),o[_].add(x),o[E].add(x),o[I].add(x),l[_].add(g),l[E].add(g),l[I].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,E=v.length;_<E;++_){let I=v[_],N=I.start,z=I.count;for(let B=N,D=N+z;B<D;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let A=new P,y=new P,S=new P,b=new P;function R(_){S.fromBufferAttribute(s,_),b.copy(S);let E=o[_];A.copy(E),A.sub(S.multiplyScalar(S.dot(E))).normalize(),y.crossVectors(b,E);let N=y.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,N)}for(let _=0,E=v.length;_<E;++_){let I=v[_],N=I.start,z=I.count;for(let B=N,D=N+z;B<D;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new De(u,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Na=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zu,this.updateRanges=[],this.version=0,this.uuid=ys()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ys()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ys()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Un=new P,Br=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix4(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyNormalMatrix(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.transformDirection(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nu=new P,ng=new P,ig=new qt,Mi=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nu.subVectors(n,e).cross(ng.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(nu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ig.getNormalMatrix(t),s=this.coplanarPoint(nu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},sg=0,Si=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Rs,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mu,this.blendDst=bu,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Mi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},rs=class extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sr,Ma=new P,wr=new P,Tr=new P,Er=new Xt,ba=new Xt,Pp=new le,$o=new P,Sa=new P,Ko=new P,Rf=new Xt,iu=new Xt,Cf=new Xt,vs=class extends nn{constructor(t=new rs){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Ne;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Na(e,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new Br(n,3,0,!1)),Sr.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=Sr,this.material=t,this.center=new Xt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),Pp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Tr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;jo($o.set(-.5,-.5,0),Tr,a,wr,s,r),jo(Sa.set(.5,-.5,0),Tr,a,wr,s,r),jo(Ko.set(.5,.5,0),Tr,a,wr,s,r),Rf.set(0,0),iu.set(1,0),Cf.set(1,1);let o=t.ray.intersectTriangle($o,Sa,Ko,!1,Ma);if(o===null&&(jo(Sa.set(-.5,.5,0),Tr,a,wr,s,r),iu.set(0,1),o=t.ray.intersectTriangle($o,Ko,Sa,!1,Ma),o===null))return;let l=t.ray.origin.distanceTo(Ma);l<t.near||l>t.far||e.push({distance:l,point:Ma.clone(),uv:ns.getInterpolation(Ma,$o,Sa,Ko,Rf,iu,Cf,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function jo(i,t,e,n,s,r){Er.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ba.x=r*Er.x-s*Er.y,ba.y=s*Er.x+r*Er.y):ba.copy(Er),i.copy(t),i.x+=ba.x,i.y+=ba.y,i.applyMatrix4(Pp)}var es=new P,su=new P,Qo=new P,tl=new P,kr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(es.copy(this.origin).addScaledVector(this.direction,e),es.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){su.copy(t).add(e).multiplyScalar(.5),Qo.copy(e).sub(t).normalize(),tl.copy(this.origin).sub(su);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Qo),o=tl.dot(this.direction),l=-tl.dot(Qo),c=tl.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(su).addScaledVector(Qo,u),f}intersectSphere(t,e){if(t.radius<0)return null;es.subVectors(t.center,this.origin);let n=es.dot(this.direction),s=es.dot(es)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,es)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=n.x-a.x,v=n.y-a.y,A=n.z-a.z,y=Math.abs(l),S=Math.abs(c),b=Math.abs(h),R,_,E,I,N,z,B,D,k,q,X,et;if(y>=S&&y>=b?(E=l,z=d,k=p,et=m,l>=0?(R=c,_=h,I=u,N=f,B=x,D=g,q=v,X=A):(R=h,_=c,I=f,N=u,B=g,D=x,q=A,X=v)):S>=b?(E=c,z=u,k=x,et=v,c>=0?(R=h,_=l,I=f,N=d,B=g,D=p,q=A,X=m):(R=l,_=h,I=d,N=f,B=p,D=g,q=m,X=A)):(E=h,z=f,k=g,et=A,h>=0?(R=l,_=c,I=d,N=u,B=p,D=x,q=m,X=v):(R=c,_=l,I=u,N=d,B=x,D=p,q=v,X=m)),E===0)return null;let Y=R/E,Q=_/E,nt=1/E,Ot=I-Y*z,Nt=N-Q*z,Ce=B-Y*k,oe=D-Q*k,ge=q-Y*et,J=X-Q*et,tt=ge*oe-J*Ce,Et=Ot*J-Nt*ge,Yt=Ce*Nt-oe*Ot;if(s){if(tt<0||Et<0||Yt<0)return null}else if((tt<0||Et<0||Yt<0)&&(tt>0||Et>0||Yt>0))return null;let wt=tt+Et+Yt;if(wt===0)return null;let Qt=nt*(tt*z+Et*k+Yt*et);return(wt>0?Qt<0:Qt>0)?null:this.at(Qt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_n=class extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},If=new le,Xs=new kr,el=new Bi,Pf=new P,nl=new P,il=new P,sl=new P,ru=new P,rl=new P,Lf=new P,al=new P,Pt=class extends nn{constructor(t=new Ne,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(ru.fromBufferAttribute(d,t),a?rl.addScaledVector(ru,h):rl.addScaledVector(ru.sub(e),h))}e.add(rl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(r),Xs.copy(t.ray).recast(t.near),!(el.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(el,Pf)===null||Xs.origin.distanceToSquared(Pf)>(t.far-t.near)**2))&&(If.copy(r).invert(),Xs.copy(t.ray).applyMatrix4(If),!(n.boundingBox!==null&&Xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,S=A;y<S;y+=3){let b=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);s=ol(this,m,t,n,c,h,d,b,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);s=ol(this,a,t,n,c,h,d,v,A,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,S=A;y<S;y+=3){let b=y,R=y+1,_=y+2;s=ol(this,m,t,n,c,h,d,b,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,A=g+1,y=g+2;s=ol(this,a,t,n,c,h,d,v,A,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function rg(i,t,e,n,s,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===As,o),l===null)return null;al.copy(o),al.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(al);return c<e.near||c>e.far?null:{distance:c,point:al.clone(),object:i}}function ol(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,nl),i.getVertexPosition(l,il),i.getVertexPosition(c,sl);let h=rg(i,t,e,n,nl,il,sl,Lf);if(h){let d=new P;ns.getBarycoord(Lf,nl,il,sl,d),s&&(h.uv=ns.getInterpolatedAttribute(s,o,l,c,d,new Xt)),r&&(h.uv1=ns.getInterpolatedAttribute(r,o,l,c,d,new Xt)),a&&(h.normal=ns.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};ns.getNormal(nl,il,sl,u.normal),h.face=u,h.barycoord=d}return h}var Ua=class extends zn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=dn,h=dn,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ms=class extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ar=new le,Df=new le,ll=[],Nf=new Oi,ag=new le,wa=new Pt,Ta=new Bi,ui=class extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ag)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ar),Nf.copy(t.boundingBox).applyMatrix4(Ar),this.boundingBox.union(Nf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ar),Ta.copy(t.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(Ta)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(wa.geometry=this.geometry,wa.material=this.material,wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(n),t.ray.intersectsSphere(Ta)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),Df.multiplyMatrices(n,Ar),wa.matrixWorld=Df,wa.raycast(t,ll);for(let a=0,o=ll.length;a<o;a++){let l=ll[a];l.instanceId=r,l.object=this,e.push(l)}ll.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ua(new Float32Array(s*this.count),s,this.count,ic,di));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qs=new Bi,og=new Xt(.5,.5),cl=new P,Hr=class{constructor(t=new Mi,e=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],A=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,m-p,S-v).normalize(),s[1].setComponents(c+a,f+h,m+p,S+v).normalize(),s[2].setComponents(c+o,f+d,m+x,S+A).normalize(),s[3].setComponents(c-o,f-d,m-x,S-A).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,f-u,m-g,S-y).normalize();else if(s[4].setComponents(c-l,f-u,m-g,S-y).normalize(),e===bi)s[5].setComponents(c+l,f+u,m+g,S+y).normalize();else if(e===Nr)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(t){qs.center.set(0,0,0);let e=og.distanceTo(t.center);return qs.radius=.7071067811865476+e,qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(cl.x=s.normal.x>0?t.max.x:t.min.x,cl.y=s.normal.y>0?t.max.y:t.min.y,cl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vr=class extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Pl=new P,Ll=new P,Uf=new le,Ea=new kr,hl=new Bi,au=new P,Ff=new P,Dl=class extends nn{constructor(t=new Ne,e=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Pl.fromBufferAttribute(e,s-1),Ll.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Pl.distanceTo(Ll);t.setAttribute("lineDistance",new ce(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(s),hl.radius+=r,t.ray.intersectsSphere(hl)===!1)return;Uf.copy(s).invert(),Ea.copy(t.ray).applyMatrix4(Uf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),v=h.getX(x+1),A=ul(this,t,Ea,l,m,v,x);A&&e.push(A)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=ul(this,t,Ea,l,x,g,p-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=ul(this,t,Ea,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=ul(this,t,Ea,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ul(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Pl.fromBufferAttribute(o,s),Ll.fromBufferAttribute(o,r),e.distanceSqToSegment(Pl,Ll,au,Ff)>n)return;au.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(au);if(!(c<t.near||c>t.far))return{distance:c,point:Ff.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var zf=new P,Of=new P,Fa=class extends Dl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)zf.fromBufferAttribute(e,s),Of.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zf.distanceTo(Of);t.setAttribute("lineDistance",new ce(n,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Gr=class extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bf=new le,fu=new kr,dl=new Bi,fl=new P,$s=class extends nn{constructor(t=new Ne,e=new Gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(s),dl.radius+=r,t.ray.intersectsSphere(dl)===!1)return;Bf.copy(s).invert(),fu.copy(t.ray).applyMatrix4(Bf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let g=c.getX(p);fl.fromBufferAttribute(d,g),kf(fl,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)fl.fromBufferAttribute(d,p),kf(fl,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function kf(i,t,e,n,s,r,a){let o=fu.distanceSqToPoint(i);if(o<e){let l=new P;fu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var za=class extends zn{constructor(t=[],e=Cs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oa=class extends zn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bs=class extends zn{constructor(t,e,n=Ti,s,r,a,o=dn,l=dn,c,h=Fi,d=1){if(h!==Fi&&h!==Ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Nl=class extends bs{constructor(t,e=Ti,n=Cs,s,r,a=dn,o=dn,l,c=Fi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ba=class extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},qe=class i extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function p(x,g,m,v,A,y,S,b,R,_,E){let I=y/R,N=S/_,z=y/2,B=S/2,D=b/2,k=R+1,q=_+1,X=0,et=0,Y=new P;for(let Q=0;Q<q;Q++){let nt=Q*N-B;for(let Ot=0;Ot<k;Ot++){let Nt=Ot*I-z;Y[x]=Nt*v,Y[g]=nt*A,Y[m]=D,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[m]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Ot/R),d.push(1-Q/_),X+=1}}for(let Q=0;Q<_;Q++)for(let nt=0;nt<R;nt++){let Ot=u+nt+k*Q,Nt=u+nt+k*(Q+1),Ce=u+(nt+1)+k*(Q+1),oe=u+(nt+1)+k*Q;l.push(Ot,Nt,oe),l.push(Nt,Ce,oe),et+=6}o.addGroup(f,et,E),f+=et,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var On=class i extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;v(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function v(){let y=new P,S=new P,b=0,R=(e-t)/n;for(let _=0;_<=r;_++){let E=[],I=_/r,N=I*(e-t)+t;for(let z=0;z<=s;z++){let B=z/s,D=B*l+o,k=Math.sin(D),q=Math.cos(D);S.x=N*k,S.y=-I*n+g,S.z=N*q,d.push(S.x,S.y,S.z),y.set(k,R,q).normalize(),u.push(y.x,y.y,y.z),f.push(B,1-I),E.push(p++)}x.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let I=x[E][_],N=x[E+1][_],z=x[E+1][_+1],B=x[E][_+1];(t>0||E!==0)&&(h.push(I,N,B),b+=3),(e>0||E!==r-1)&&(h.push(N,z,B),b+=3)}c.addGroup(m,b,0),m+=b}function A(y){let S=p,b=new Xt,R=new P,_=0,E=y===!0?t:e,I=y===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*I,0),u.push(0,I,0),f.push(.5,.5),p++;let N=p;for(let z=0;z<=s;z++){let D=z/s*l+o,k=Math.cos(D),q=Math.sin(D);R.x=E*q,R.y=g*I,R.z=E*k,d.push(R.x,R.y,R.z),u.push(0,I,0),b.x=k*.5+.5,b.y=q*.5*I+.5,f.push(b.x,b.y),p++}for(let z=0;z<s;z++){let B=S+z,D=N+z;y===!0?h.push(D,D+1,B):h.push(D+1,D,B),_+=3}c.addGroup(m,_,y===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ks=class i extends On{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ka=class i extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let A=new P,y=new P,S=new P;for(let b=0;b<e.length;b+=3)f(e[b+0],A),f(e[b+1],y),f(e[b+2],S),l(A,y,S,v)}function l(v,A,y,S){let b=S+1,R=[];for(let _=0;_<=b;_++){R[_]=[];let E=v.clone().lerp(y,_/b),I=A.clone().lerp(y,_/b),N=b-_;for(let z=0;z<=N;z++)z===0&&_===b?R[_][z]=E:R[_][z]=E.clone().lerp(I,z/N)}for(let _=0;_<b;_++)for(let E=0;E<2*(b-_)-1;E++){let I=Math.floor(E/2);E%2===0?(u(R[_][I+1]),u(R[_+1][I]),u(R[_][I])):(u(R[_][I+1]),u(R[_+1][I+1]),u(R[_+1][I]))}}function c(v){let A=new P;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(v),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function h(){let v=new P;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];let y=g(v)/2/Math.PI+.5,S=m(v)/Math.PI+.5;a.push(y,1-S)}p(),d()}function d(){for(let v=0;v<a.length;v+=6){let A=a[v+0],y=a[v+2],S=a[v+4],b=Math.max(A,y,S),R=Math.min(A,y,S);b>.9&&R<.1&&(A<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,A){let y=v*3;A.x=t[y+0],A.y=t[y+1],A.z=t[y+2]}function p(){let v=new P,A=new P,y=new P,S=new P,b=new Xt,R=new Xt,_=new Xt;for(let E=0,I=0;E<r.length;E+=9,I+=6){v.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),b.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),_.set(a[I+4],a[I+5]),S.copy(v).add(A).add(y).divideScalar(3);let N=g(S);x(b,I+0,v,N),x(R,I+2,A,N),x(_,I+4,y,N)}}function x(v,A,y,S){S<0&&v.x===1&&(a[A]=v.x-1),y.x===0&&y.z===0&&(a[A]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Ha=class i extends ka{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Va=class i extends ka{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},An=class i extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*u-a;for(let A=0;A<c;A++){let y=A*d-r;p.push(y,-v,0),x.push(0,0,1),g.push(A/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let A=v+c*m,y=v+c*(m+1),S=v+1+c*(m+1),b=v+1+c*m;f.push(A,y,b),f.push(y,S,b)}this.setIndex(f),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var yn=class i extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let v=[],A=m/n,y=a+A*o,S=t*Math.cos(y),b=Math.sqrt(t*t-S*S),R=0;m===0&&a===0?R=.5/e:m===n&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){let E=_/e,I=s+E*r;d.x=-b*Math.cos(I),d.y=S,d.z=b*Math.sin(I),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(E+R,1-A),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let A=h[m][v+1],y=h[m][v],S=h[m+1][v],b=h[m+1][v+1];(m!==0||a>0)&&f.push(A,y,b),(m!==n-1||l<Math.PI)&&f.push(y,S,b)}this.setIndex(f),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ss=class i extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,p=new P;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=s;m++){let v=m/s*r;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,v=(s+1)*(x-1)+g-1,A=(s+1)*(x-1)+g,y=(s+1)*x+g;l.push(m,v,y),l.push(v,A,y)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function nr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Hf(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Hf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Rn(i){let t={};for(let e=0;e<i.length;e++){let n=nr(i[e]);for(let s in n)t[s]=n[s]}return t}function Hf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function lg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Lp={clone:nr,merge:Rn},cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=lg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ul=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kt=class extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Fl=class extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zl=class extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Rr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ou(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ws=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ol=class extends ws{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hu,endingEnd:hu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case uu:r=t,o=2*e-n;break;case du:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case uu:a=t,l=2*n-e;break;case du:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,A=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+v*a[c+S]+A*a[l+S]+y*a[d+S];return r}},Bl=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},kl=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hl=class extends ws{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=f*u+p*2,v=d[m],A=d[m+1],y=t*u+p*2,S=h[y],b=h[y+1],R=dg(n,e,v,S,s);r[p]=Dp(R,x,A,b,g)}return r}};function Dp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function ug(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function dg(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Dp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=ug(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var si=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rr(e,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rr(t.times,Array),values:Rr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ou(t.settings)&&(n.settings={inTangents:Rr(t.settings.inTangents,Array),outTangents:Rr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Hl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Aa:e=this.InterpolantFactoryMethodDiscrete;break;case El:e=this.InterpolantFactoryMethodLinear;break;case gl:e=this.InterpolantFactoryMethodSmooth;break;case cu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return cu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ou(this.settings)&&(Vf(this.settings.inTangents,t),Vf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Gt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Hm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ou(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=El;var Ts=class extends si{constructor(t,e,n){super(t,e,n)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Aa;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};Vl.prototype.ValueTypeName="color";var Gl=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};Gl.prototype.ValueTypeName="number";var Wl=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Jn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ga=class extends si{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Wl(this.times,this.values,this.getValueSize(),t)}};Ga.prototype.ValueTypeName="quaternion";Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends si{constructor(t,e,n){super(t,e,n)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Aa;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};Xl.prototype.ValueTypeName="vector";var ql=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Np=new ql,Yl=class{constructor(t){this.manager=t!==void 0?t:Np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Wa=class extends Wr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},lu=new le,Gf=new P,Wf=new P,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Gf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gf),Wf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(lu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Nr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(lu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},pl=new P,ml=new Jn,Di=new P,qa=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pl,ml,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Di.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(pl,ml,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_s=new P,Xf=new Xt,qf=new Xt,gn=class extends qa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Al*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Oh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(Oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,e){return this.getViewBounds(t,Xf,qf),e.subVectors(qf,Xf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Oh*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var pu=class extends Xa{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},Ya=class extends Wr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Xr=class extends qa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},mu=class extends Xa{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Za=class extends Wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new mu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Cr=-90,Ir=1,Zl=class extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Cr,Ir,t,e);s.layers=this.layers,this.add(s);let r=new gn(Cr,Ir,t,e);r.layers=this.layers,this.add(r);let a=new gn(Cr,Ir,t,e);a.layers=this.layers,this.add(a);let o=new gn(Cr,Ir,t,e);o.layers=this.layers,this.add(o);let l=new gn(Cr,Ir,t,e);l.layers=this.layers,this.add(l);let c=new gn(Cr,Ir,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Jl=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ku="\\[\\]\\.:\\/",fg=new RegExp("["+ku+"]","g"),Hu="[^"+ku+"]",pg="[^"+ku.replace("\\.","")+"]",mg=/((?:WC+[\/:])*)/.source.replace("WC",Hu),gg=/(WCOD+)?/.source.replace("WCOD",pg),xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hu),_g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hu),yg=new RegExp("^"+mg+gg+xg+_g+"$"),vg=["material","materials","bones","map"],gu=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fg,"")}static parseTrackName(t){let e=yg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=gu;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ZM=new Float32Array(1);var Yu=class Yu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Yu.prototype.isMatrix2=!0;var xu=Yu;function Vu(i,t,e,n){let s=Mg(n);switch(e){case Uu:return i*t;case ic:return i*t/s.components*s.byteLength;case sc:return i*t/s.components*s.byteLength;case Ls:return i*t*2/s.components*s.byteLength;case rc:return i*t*2/s.components*s.byteLength;case Fu:return i*t*3/s.components*s.byteLength;case fi:return i*t*4/s.components*s.byteLength;case ac:return i*t*4/s.components*s.byteLength;case ja:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lc:case hc:return Math.max(i,16)*Math.max(t,8)/4;case oc:case cc:return Math.max(i,8)*Math.max(t,8)/2;case uc:case dc:case pc:case mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fc:case no:case gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pc:case Lc:case Dc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nc:case Uc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case io:case Fc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mg(i){switch(i){case Kn:case Pu:return{byteLength:1,components:1};case Yr:case Lu:case Ei:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case Ti:case tc:case di:return{byteLength:4,components:1};case Du:case Nu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function n0(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Eg(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rg=`#ifdef USE_ALPHAHASH
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
#endif`,Cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dg=`#ifdef USE_AOMAP
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
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Hg=`#ifdef USE_BUMPMAP
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
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$g=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jg=`vec3 transformedNormal = objectNormal;
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
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",sx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
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
}`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,yx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Tx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ex=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zx=`#if defined( USE_POINTS_UV )
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
#endif`,Ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`#ifdef USE_MORPHTARGETS
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
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,Kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,i_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,u_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,d_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,f_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,x_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,__=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R_=`uniform sampler2D t2D;
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
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`#include <common>
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
}`,N_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,U_=`#define DISTANCE
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
}`,F_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`uniform float scale;
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
}`,k_=`uniform vec3 diffuse;
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
}`,H_=`#include <common>
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
}`,V_=`uniform vec3 diffuse;
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
}`,G_=`#define LAMBERT
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
}`,W_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,X_=`#define MATCAP
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
}`,q_=`#define MATCAP
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
}`,Y_=`#define NORMAL
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
}`,Z_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J_=`#define PHONG
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
}`,$_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,K_=`#define STANDARD
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
}`,j_=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Q_=`#define TOON
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
}`,ty=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ey=`uniform float size;
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#include <common>
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
}`,sy=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,ry=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,ay=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Ag,alphahash_pars_fragment:Rg,alphamap_fragment:Cg,alphamap_pars_fragment:Ig,alphatest_fragment:Pg,alphatest_pars_fragment:Lg,aomap_fragment:Dg,aomap_pars_fragment:Ng,batching_pars_vertex:Ug,batching_vertex:Fg,begin_vertex:zg,beginnormal_vertex:Og,bsdfs:Bg,iridescence_fragment:kg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Vg,clipping_planes_pars_fragment:Gg,clipping_planes_pars_vertex:Wg,clipping_planes_vertex:Xg,color_fragment:qg,color_pars_fragment:Yg,color_pars_vertex:Zg,color_vertex:Jg,common:$g,cube_uv_reflection_fragment:Kg,defaultnormal_vertex:jg,displacementmap_pars_vertex:Qg,displacementmap_vertex:tx,emissivemap_fragment:ex,emissivemap_pars_fragment:nx,colorspace_fragment:ix,colorspace_pars_fragment:sx,envmap_fragment:rx,envmap_common_pars_fragment:ax,envmap_pars_fragment:ox,envmap_pars_vertex:lx,envmap_physical_pars_fragment:yx,envmap_vertex:cx,fog_vertex:hx,fog_pars_vertex:ux,fog_fragment:dx,fog_pars_fragment:fx,gradientmap_pars_fragment:px,lightmap_pars_fragment:mx,lights_lambert_fragment:gx,lights_lambert_pars_fragment:xx,lights_pars_begin:_x,lights_toon_fragment:vx,lights_toon_pars_fragment:Mx,lights_phong_fragment:bx,lights_phong_pars_fragment:Sx,lights_physical_fragment:wx,lights_physical_pars_fragment:Tx,lights_fragment_begin:Ex,lights_fragment_maps:Ax,lights_fragment_end:Rx,lightprobes_pars_fragment:Cx,logdepthbuf_fragment:Ix,logdepthbuf_pars_fragment:Px,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Dx,map_fragment:Nx,map_pars_fragment:Ux,map_particle_fragment:Fx,map_particle_pars_fragment:zx,metalnessmap_fragment:Ox,metalnessmap_pars_fragment:Bx,morphinstance_vertex:kx,morphcolor_vertex:Hx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Gx,morphtarget_vertex:Wx,normal_fragment_begin:Xx,normal_fragment_maps:qx,normal_pars_fragment:Yx,normal_pars_vertex:Zx,normal_vertex:Jx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Kx,clearcoat_normal_fragment_maps:jx,clearcoat_pars_fragment:Qx,iridescence_pars_fragment:t_,opaque_fragment:e_,packing:n_,premultiplied_alpha_fragment:i_,project_vertex:s_,dithering_fragment:r_,dithering_pars_fragment:a_,roughnessmap_fragment:o_,roughnessmap_pars_fragment:l_,shadowmap_pars_fragment:c_,shadowmap_pars_vertex:h_,shadowmap_vertex:u_,shadowmask_pars_fragment:d_,skinbase_vertex:f_,skinning_pars_vertex:p_,skinning_vertex:m_,skinnormal_vertex:g_,specularmap_fragment:x_,specularmap_pars_fragment:__,tonemapping_fragment:y_,tonemapping_pars_fragment:v_,transmission_fragment:M_,transmission_pars_fragment:b_,uv_pars_fragment:S_,uv_pars_vertex:w_,uv_vertex:T_,worldpos_vertex:E_,background_vert:A_,background_frag:R_,backgroundCube_vert:C_,backgroundCube_frag:I_,cube_vert:P_,cube_frag:L_,depth_vert:D_,depth_frag:N_,distance_vert:U_,distance_frag:F_,equirect_vert:z_,equirect_frag:O_,linedashed_vert:B_,linedashed_frag:k_,meshbasic_vert:H_,meshbasic_frag:V_,meshlambert_vert:G_,meshlambert_frag:W_,meshmatcap_vert:X_,meshmatcap_frag:q_,meshnormal_vert:Y_,meshnormal_frag:Z_,meshphong_vert:J_,meshphong_frag:$_,meshphysical_vert:K_,meshphysical_frag:j_,meshtoon_vert:Q_,meshtoon_frag:ty,points_vert:ey,points_frag:ny,shadow_vert:iy,shadow_frag:sy,sprite_vert:ry,sprite_frag:ay},gt={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Vi={basic:{uniforms:Rn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Rn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Rn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Rn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Rn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new pt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Rn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Rn([gt.points,gt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Rn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Rn([gt.common,gt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Rn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Rn([gt.sprite,gt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Rn([gt.common,gt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Rn([gt.lights,gt.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Vi.physical={uniforms:Rn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var kc={r:0,b:0,g:0},oy=new le,i0=new qt;i0.set(-1,0,0,0,1,0,0,0,1);function ly(i,t,e,n,s,r){let a=new pt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let y=v.backgroundBlurriness>0;A=t.get(A,y)}return A}function p(v){let A=!1,y=f(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),A=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===$a)?(c===void 0&&(c=new Pt(new qe(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:nr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(oy.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(i0),c.material.toneMapped=se.getTransfer(y.colorSpace)!==ye,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pt(new An(2,2),new sn({name:"BackgroundMaterial",uniforms:nr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=se.getTransfer(y.colorSpace)!==ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,A){v.getRGB(kc,Bu(i)),e.buffers.color.setClear(kc.r,kc.g,kc.b,A,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:x,dispose:m}}function cy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,z,B,D,k){let q=!1,X=d(N,D,B,z);r!==X&&(r=X,c(r.object)),q=f(N,D,B,k),q&&p(N,D,B,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(N,z,B,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,z,B,D){let k=D.wireframe===!0,q=n[z.id];q===void 0&&(q={},n[z.id]=q);let X=N.isInstancedMesh===!0?N.id:0,et=q[X];et===void 0&&(et={},q[X]=et);let Y=et[B.id];Y===void 0&&(Y={},et[B.id]=Y);let Q=Y[k];return Q===void 0&&(Q=u(l()),Y[k]=Q),Q}function u(N){let z=[],B=[],D=[];for(let k=0;k<e;k++)z[k]=0,B[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:D,object:N,attributes:{},index:null}}function f(N,z,B,D){let k=r.attributes,q=z.attributes,X=0,et=B.getAttributes();for(let Y in et)if(et[Y].location>=0){let nt=k[Y],Ot=q[Y];if(Ot===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(Ot=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(Ot=N.instanceColor)),nt===void 0||nt.attribute!==Ot||Ot&&nt.data!==Ot.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function p(N,z,B,D){let k={},q=z.attributes,X=0,et=B.getAttributes();for(let Y in et)if(et[Y].location>=0){let nt=q[Y];nt===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor));let Ot={};Ot.attribute=nt,nt&&nt.data&&(Ot.data=nt.data),k[Y]=Ot,X++}r.attributes=k,r.attributesNum=X,r.index=D}function x(){let N=r.newAttributes;for(let z=0,B=N.length;z<B;z++)N[z]=0}function g(N){m(N,0)}function m(N,z){let B=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;B[N]=1,D[N]===0&&(i.enableVertexAttribArray(N),D[N]=1),k[N]!==z&&(i.vertexAttribDivisor(N,z),k[N]=z)}function v(){let N=r.newAttributes,z=r.enabledAttributes;for(let B=0,D=z.length;B<D;B++)z[B]!==N[B]&&(i.disableVertexAttribArray(B),z[B]=0)}function A(N,z,B,D,k,q,X){X===!0?i.vertexAttribIPointer(N,z,B,k,q):i.vertexAttribPointer(N,z,B,D,k,q)}function y(N,z,B,D){x();let k=D.attributes,q=B.getAttributes(),X=z.defaultAttributeValues;for(let et in q){let Y=q[et];if(Y.location>=0){let Q=k[et];if(Q===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let nt=Q.normalized,Ot=Q.itemSize,Nt=t.get(Q);if(Nt===void 0)continue;let Ce=Nt.buffer,oe=Nt.type,ge=Nt.bytesPerElement,J=oe===i.INT||oe===i.UNSIGNED_INT||Q.gpuType===tc;if(Q.isInterleavedBufferAttribute){let tt=Q.data,Et=tt.stride,Yt=Q.offset;if(tt.isInstancedInterleavedBuffer){for(let wt=0;wt<Y.locationSize;wt++)m(Y.location+wt,tt.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let wt=0;wt<Y.locationSize;wt++)g(Y.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let wt=0;wt<Y.locationSize;wt++)A(Y.location+wt,Ot/Y.locationSize,oe,nt,Et*ge,(Yt+Ot/Y.locationSize*wt)*ge,J)}else{if(Q.isInstancedBufferAttribute){for(let tt=0;tt<Y.locationSize;tt++)m(Y.location+tt,Q.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let tt=0;tt<Y.locationSize;tt++)g(Y.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let tt=0;tt<Y.locationSize;tt++)A(Y.location+tt,Ot/Y.locationSize,oe,nt,Ot*ge,Ot/Y.locationSize*tt*ge,J)}}else if(X!==void 0){let nt=X[et];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(Y.location,nt);break;case 3:i.vertexAttrib3fv(Y.location,nt);break;case 4:i.vertexAttrib4fv(Y.location,nt);break;default:i.vertexAttrib1fv(Y.location,nt)}}}}v()}function S(){E();for(let N in n){let z=n[N];for(let B in z){let D=z[B];for(let k in D){let q=D[k];for(let X in q)h(q[X].object),delete q[X];delete D[k]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;let z=n[N.id];for(let B in z){let D=z[B];for(let k in D){let q=D[k];for(let X in q)h(q[X].object),delete q[X];delete D[k]}}delete n[N.id]}function R(N){for(let z in n){let B=n[z];for(let D in B){let k=B[D];if(k[N.id]===void 0)continue;let q=k[N.id];for(let X in q)h(q[X].object),delete q[X];delete k[N.id]}}}function _(N){for(let z in n){let B=n[z],D=N.isInstancedMesh===!0?N.id:0,k=B[D];if(k!==void 0){for(let q in k){let X=k[q];for(let et in X)h(X[et].object),delete X[et];delete k[q]}delete B[D],Object.keys(B).length===0&&delete n[z]}}}function E(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function hy(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function uy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==fi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Kn&&R!==di&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:y,maxSamples:S,samples:b}}function dy(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Mi,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,A=v*4,y=m.clippingState||null;l.value=y,y=h(p,u,A,f);for(let S=0;S!==A;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,y=f;A!==x;++A,y+=4)a.copy(d[A]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var $r=4,fy=6,py=20,my=256,so=new Xr,Up=new pt,Zu=null,Ju=0,$u=0,Ku=!1,gy=new P,ir=new P,jr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=gy}=r;Zu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zu,Ju,$u),this._renderer.xr.enabled=Ku,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ei,format:fi,colorSpace:Ra,depthBuffer:!1},s=Fp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xy(r)),this._blurMaterial=yy(r,t,e),this._ggxMaterial=_y(r,t,e)}return s}_compileMaterial(t){let e=new Pt(new Ne,t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,n,s,r){let l=new gn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Up),d.toneMapping=wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new qe,new _n({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(Up),m=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let S=this._cubeSize;Jr(s,y*S,A>2?S:0,S,S),d.setRenderTarget(s),m&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Cs||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Op()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,so)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-$r?n-p+$r:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Jr(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,so),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Jr(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(o,so)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-$r?s-this._lodMax+$r:0),u=4*(this._cubeSize-h);Jr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,so)}};function xy(i){let t=[],e=[],n=i,s=i-$r+1+fy;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let v=m%3*2/3-1,A=m>2?0:-1,y=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];p.set(y,f*u*m);for(let S=0;S<u;S++){let b=h[S*2]*2-1,R=h[S*2+1]*2-1;m===0?ir.set(1,R,b):m===1?ir.set(-b,1,-R):m===2?ir.set(-b,R,1):m===3?ir.set(-1,R,-b):m===4?ir.set(-b,-1,R):ir.set(b,R,-1),ir.toArray(x,(m*u+S)*f)}}let g=new Ne;g.setAttribute("position",new De(p,f)),g.setAttribute("outputDirection",new De(x,f)),e.push(new Pt(g,null)),n>$r&&n--}return{lodMeshes:e,sizeLods:t}}function Fp(i,t,e){let n=new $n(i,t,e);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _y(i,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:my,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function yy(i,t,e){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:py,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function zp(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Op(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vc=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new za(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qe(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ki});r.uniforms.tEquirect.value=e;let a=new Pt(s,r),o=e.minFilter;return e.minFilter===Is&&(e.minFilter=xn),new Zl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function vy(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Kl||f===jl)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Vc(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===Kl||f===jl,x=f===Cs||f===tr;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new jr(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new jr(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Kl?u.mapping=Cs:f===jl&&(u.mapping=tr),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function My(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ys("WebGLRenderer: "+n+" extension not supported."),s}}}function by(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let A=0,y=v.length;A<y;A+=3){let S=v[A+0],b=v[A+1],R=v[A+2];u.push(S,b,b,R,R,S)}}else{let v=p.array;x=p.version;for(let A=0,y=v.length/3-1;A<y;A+=3){let S=A+0,b=A+1,R=A+2;u.push(S,b,b,R,R,S)}}let g=new(p.count>=65535?Js:Zs)(u,1);g.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Sy(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function wy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ty(i,t,e){let n=new WeakMap,s=new ke;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],A=0;f===!0&&(A=1),p===!0&&(A=2),x===!0&&(A=3);let y=o.attributes.position.count*A,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*S*4*d),R=new La(b,y,S,d);R.type=di,R.needsUpdate=!0;let _=A*4;for(let I=0;I<d;I++){let N=g[I],z=m[I],B=v[I],D=y*S*4*I;for(let k=0;k<N.count;k++){let q=k*_;f===!0&&(s.fromBufferAttribute(N,k),b[D+q+0]=s.x,b[D+q+1]=s.y,b[D+q+2]=s.z,b[D+q+3]=0),p===!0&&(s.fromBufferAttribute(z,k),b[D+q+4]=s.x,b[D+q+5]=s.y,b[D+q+6]=s.z,b[D+q+7]=0),x===!0&&(s.fromBufferAttribute(B,k),b[D+q+8]=s.x,b[D+q+9]=s.y,b[D+q+10]=s.z,b[D+q+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new Xt(y,S)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ey(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ay={[wu]:"LINEAR_TONE_MAPPING",[Tu]:"REINHARD_TONE_MAPPING",[Eu]:"CINEON_TONE_MAPPING",[Ja]:"ACES_FILMIC_TONE_MAPPING",[Ru]:"AGX_TONE_MAPPING",[Cu]:"NEUTRAL_TONE_MAPPING",[Au]:"CUSTOM_TONE_MAPPING"};function Ry(i,t,e,n,s,r){let a=new $n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ne;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));let h=new Ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Pt(c,h),u=new Xr(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,v=[],A=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let b=0;b<v.length;b++){let R=v[b];R.setSize&&R.setSize(y,S)}},this.setEffects=function(y){v=y,A=v.length>0&&v[0].isRenderPass===!0;let S=a.width,b=a.height;v.length>0&&o===null&&(o=new $n(S,b,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new $n(S,b,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let _=v[R];_.setSize&&_.setSize(S,b)}},this.begin=function(y,S){if(x||y.toneMapping===wi&&v.length===0)return!1;if(m=S,S!==null){let b=S.width,R=S.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return A===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=wi,!0},this.hasRenderPass=function(){return A},this.end=function(y,S){y.toneMapping=g,x=!0;let b=a,R=o;for(let _=0;_<v.length;_++){let E=v[_];E.enabled!==!1&&(E.render(y,R,b,S),E.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},se.getTransfer(f)===ye&&(h.defines.SRGB_TRANSFER="");let _=Ay[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(m),y.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var s0=new zn,td=new bs(1,1),r0=new La,a0=new Il,o0=new za,Bp=[],kp=[],Hp=new Float32Array(16),Vp=new Float32Array(9),Gp=new Float32Array(4);function Qr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bp[s];if(r===void 0&&(r=new Float32Array(s),Bp[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function an(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function on(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xc(i,t){let e=kp[t];e===void 0&&(e=new Int32Array(t),kp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2fv(this.addr,t),on(e,t)}}function Py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;i.uniform3fv(this.addr,t),on(e,t)}}function Ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4fv(this.addr,t),on(e,t)}}function Dy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;Gp.set(n),i.uniformMatrix2fv(this.addr,!1,Gp),on(e,n)}}function Ny(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;Vp.set(n),i.uniformMatrix3fv(this.addr,!1,Vp),on(e,n)}}function Uy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;Hp.set(n),i.uniformMatrix4fv(this.addr,!1,Hp),on(e,n)}}function Fy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2iv(this.addr,t),on(e,t)}}function Oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3iv(this.addr,t),on(e,t)}}function By(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4iv(this.addr,t),on(e,t)}}function ky(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2uiv(this.addr,t),on(e,t)}}function Vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3uiv(this.addr,t),on(e,t)}}function Gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4uiv(this.addr,t),on(e,t)}}function Wy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(td.compareFunction=e.isReversedDepthBuffer()?Bc:Oc,r=td):r=s0,e.setTexture2D(t||r,s)}function Xy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||a0,s)}function qy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||o0,s)}function Yy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||r0,s)}function Zy(i){switch(i){case 5126:return Cy;case 35664:return Iy;case 35665:return Py;case 35666:return Ly;case 35674:return Dy;case 35675:return Ny;case 35676:return Uy;case 5124:case 35670:return Fy;case 35667:case 35671:return zy;case 35668:case 35672:return Oy;case 35669:case 35673:return By;case 5125:return ky;case 36294:return Hy;case 36295:return Vy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}function Jy(i,t){i.uniform1fv(this.addr,t)}function $y(i,t){let e=Qr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ky(i,t){let e=Qr(t,this.size,3);i.uniform3fv(this.addr,e)}function jy(i,t){let e=Qr(t,this.size,4);i.uniform4fv(this.addr,e)}function Qy(i,t){let e=Qr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tv(i,t){let e=Qr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ev(i,t){let e=Qr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nv(i,t){i.uniform1iv(this.addr,t)}function iv(i,t){i.uniform2iv(this.addr,t)}function sv(i,t){i.uniform3iv(this.addr,t)}function rv(i,t){i.uniform4iv(this.addr,t)}function av(i,t){i.uniform1uiv(this.addr,t)}function ov(i,t){i.uniform2uiv(this.addr,t)}function lv(i,t){i.uniform3uiv(this.addr,t)}function cv(i,t){i.uniform4uiv(this.addr,t)}function hv(i,t,e){let n=this.cache,s=t.length,r=Xc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=td:a=s0;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function uv(i,t,e){let n=this.cache,s=t.length,r=Xc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||a0,r[a])}function dv(i,t,e){let n=this.cache,s=t.length,r=Xc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o0,r[a])}function fv(i,t,e){let n=this.cache,s=t.length,r=Xc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||r0,r[a])}function pv(i){switch(i){case 5126:return Jy;case 35664:return $y;case 35665:return Ky;case 35666:return jy;case 35674:return Qy;case 35675:return tv;case 35676:return ev;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return av;case 36294:return ov;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}var ed=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zy(e.type)}},nd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pv(e.type)}},id=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ju=/(\w+)(\])?(\[|\.)?/g;function Wp(i,t){i.seq.push(t),i.map[t.id]=t}function mv(i,t,e){let n=i.name,s=n.length;for(ju.lastIndex=0;;){let r=ju.exec(n),a=ju.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wp(e,c===void 0?new ed(o,i,t):new nd(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new id(o),Wp(e,d)),e=d}}}var Kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);mv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Xp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var gv=37297,xv=0;function _v(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var qp=new qt;function yv(i){se._getMatrix(qp,se.workingColorSpace,i);let t=`mat3( ${qp.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Ca:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+_v(i.getShaderSource(t),o)}else return r}function vv(i,t){let e=yv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Mv={[wu]:"Linear",[Tu]:"Reinhard",[Eu]:"Cineon",[Ja]:"ACESFilmic",[Ru]:"AgX",[Cu]:"Neutral",[Au]:"Custom"};function bv(i,t){let e=Mv[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hc=new P;function Sv(){se.getLuminanceCoefficients(Hc);let i=Hc.x.toFixed(4),t=Hc.y.toFixed(4),e=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function Tv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ev(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ao(i){return i!==""}function Zp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(i){return i.replace(Av,Cv)}var Rv=new Map;function Cv(i,t){let e=jt[t];if(e===void 0){let n=Rv.get(t);if(n!==void 0)e=jt[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return sd(e)}var Iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(i){return i.replace(Iv,Pv)}function Pv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Lv={[js]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};function Dv(i){return Lv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nv={[Cs]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE_UV"};function Uv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Nv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fv={[tr]:"ENVMAP_MODE_REFRACTION"};function zv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ov={[Su]:"ENVMAP_BLENDING_MULTIPLY",[pp]:"ENVMAP_BLENDING_MIX",[mp]:"ENVMAP_BLENDING_ADD"};function Bv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ov[i.combine]||"ENVMAP_BLENDING_NONE"}function kv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Dv(e),c=Uv(e),h=zv(e),d=Bv(e),u=kv(e),f=wv(e),p=Tv(r),x=s.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ao).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ao).join(`
`),m.length>0&&(m+=`
`)):(g=[Kp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),m=[Kp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?jt.tonemapping_pars_fragment:"",e.toneMapping!==wi?bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,vv("linearToOutputTexel",e.outputColorSpace),Sv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),a=sd(a),a=Zp(a,e),a=Jp(a,e),o=sd(o),o=Zp(o,e),o=Jp(o,e),a=$p(a),o=$p(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=v+g+a,y=v+m+o,S=Xp(s,s.VERTEX_SHADER,A),b=Xp(s,s.FRAGMENT_SHADER,y);s.attachShader(x,S),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(N){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(b)||"",k=z.trim(),q=B.trim(),X=D.trim(),et=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,b);else{let Q=Yp(s,S,"vertex"),nt=Yp(s,b,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+Q+`
`+nt)}else k!==""?Vt("WebGLProgram: Program Info Log:",k):(q===""||X==="")&&(Y=!1);Y&&(N.diagnostics={runnable:et,programLog:k,vertexShader:{log:q,prefix:g},fragmentShader:{log:X,prefix:m}})}s.deleteShader(S),s.deleteShader(b),_=new Kr(s,x),E=Ev(s,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,gv)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}var Vv=0,rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ad(t),e.set(t,n)),n}},ad=class{constructor(t){this.id=Vv++,this.code=t,this.usedTimes=0}};function Gv(i){return i===Ls||i===no||i===io}function Wv(i,t,e,n,s,r){let a=new Da,o=new rd,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,I,N,z,B){let D=N.fog,k=z.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,et=t.get(_.envMap||q,X),Y=et&&et.mapping===$a?et.image.height:null,Q=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Vt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ot=nt!==void 0?nt.length:0,Nt=0;k.morphAttributes.position!==void 0&&(Nt=1),k.morphAttributes.normal!==void 0&&(Nt=2),k.morphAttributes.color!==void 0&&(Nt=3);let Ce,oe,ge,J;if(Q){let Pe=Vi[Q];Ce=Pe.vertexShader,oe=Pe.fragmentShader}else{Ce=_.vertexShader,oe=_.fragmentShader;let Pe=o.getVertexShaderStage(_),xe=o.getFragmentShaderStage(_);o.update(_,Pe,xe),ge=Pe.id,J=xe.id}let tt=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Yt=z.isInstancedMesh===!0,wt=z.isBatchedMesh===!0,Qt=!!_.map,en=!!_.matcap,ee=!!et,pe=!!_.aoMap,Ie=!!_.lightMap,ie=!!_.bumpMap&&_.wireframe===!1,Be=!!_.normalMap,hn=!!_.displacementMap,Zn=!!_.emissiveMap,We=!!_.metalnessMap,Ke=!!_.roughnessMap,F=_.anisotropy>0,Sn=_.clearcoat>0,ve=_.dispersion>0,C=_.retroreflectivity>0,M=_.iridescence>0,O=_.sheen>0,G=_.transmission>0,Z=F&&!!_.anisotropyMap,ot=Sn&&!!_.clearcoatMap,lt=Sn&&!!_.clearcoatNormalMap,$=Sn&&!!_.clearcoatRoughnessMap,j=M&&!!_.iridescenceMap,ct=M&&!!_.iridescenceThicknessMap,Ft=O&&!!_.sheenColorMap,mt=O&&!!_.sheenRoughnessMap,ht=!!_.specularMap,zt=!!_.specularColorMap,Ht=!!_.specularIntensityMap,Jt=G&&!!_.transmissionMap,U=G&&!!_.thicknessMap,ut=!!_.gradientMap,K=!!_.alphaMap,dt=_.alphaTest>0,vt=!!_.alphaHash,it=!!_.extensions,Bt=wi;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Dt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Ce,fragmentShader:oe,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:wt,batchingColor:wt&&z._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&z.instanceColor!==null,instancingMorph:Yt&&z.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Qt,matcap:en,envMap:ee,envMapMode:ee&&et.mapping,envMapCubeUVHeight:Y,aoMap:pe,lightMap:Ie,bumpMap:ie,normalMap:Be,displacementMap:hn,emissiveMap:Zn,normalMapObjectSpace:Be&&_.normalMapType===_p,normalMapTangentSpace:Be&&_.normalMapType===zc,packedNormalMap:Be&&_.normalMapType===zc&&Gv(_.normalMap.format),metalnessMap:We,roughnessMap:Ke,anisotropy:F,anisotropyMap:Z,clearcoat:Sn,clearcoatMap:ot,clearcoatNormalMap:lt,clearcoatRoughnessMap:$,dispersion:ve,retroreflection:C,iridescence:M,iridescenceMap:j,iridescenceThicknessMap:ct,sheen:O,sheenColorMap:Ft,sheenRoughnessMap:mt,specularMap:ht,specularColorMap:zt,specularIntensityMap:Ht,transmission:G,transmissionMap:Jt,thicknessMap:U,gradientMap:ut,opaque:_.transparent===!1&&_.blending===Rs&&_.alphaToCoverage===!1,alphaMap:K,alphaTest:dt,alphaHash:vt,combine:_.combine,mapUv:Qt&&p(_.map.channel),aoMapUv:pe&&p(_.aoMap.channel),lightMapUv:Ie&&p(_.lightMap.channel),bumpMapUv:ie&&p(_.bumpMap.channel),normalMapUv:Be&&p(_.normalMap.channel),displacementMapUv:hn&&p(_.displacementMap.channel),emissiveMapUv:Zn&&p(_.emissiveMap.channel),metalnessMapUv:We&&p(_.metalnessMap.channel),roughnessMapUv:Ke&&p(_.roughnessMap.channel),anisotropyMapUv:Z&&p(_.anisotropyMap.channel),clearcoatMapUv:ot&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:lt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:mt&&p(_.sheenRoughnessMap.channel),specularMapUv:ht&&p(_.specularMap.channel),specularColorMapUv:zt&&p(_.specularColorMap.channel),specularIntensityMapUv:Ht&&p(_.specularIntensityMap.channel),transmissionMapUv:Jt&&p(_.transmissionMap.channel),thicknessMapUv:U&&p(_.thicknessMap.channel),alphaMapUv:K&&p(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Be||F),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Qt||K),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&Be===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Et,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:Nt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Qt&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===ye,decodeVideoTextureEmissive:Zn&&_.emissiveMap.isVideoTexture===!0&&se.getTransfer(_.emissiveMap.colorSpace)===ye,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vn,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)E.push(I),E.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(m(E,_),v(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function v(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let E=f[_.type],I;if(E){let N=Vi[E];I=Lp.clone(N.uniforms)}else I=_.uniforms;return I}function y(_,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new Hv(i,E,_,s),c.push(I),h.set(E,I)),I}function S(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:A,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:R}}function Xv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function qv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function jp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=m),t++,v}function l(u,f,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let A=o(u,f,p,x,g,m);p.transmission>0?n.push(A):p.transparent===!0?s.push(A):e.push(A)}function c(u,f,p,x,g,m){let v=o(u,f,p,x,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||qv),n.length>1&&n.sort(f||jp),s.length>1&&s.sort(f||jp)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Yv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Qp,i.set(n,[a])):s>=r.length?(a=new Qp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Zv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new pt};break;case"SpotLight":e={position:new P,direction:new P,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Jv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $v=0;function Kv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jv(i){let t=new Zv,e=Jv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new le,a=new le;function o(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,A=0,y=0,S=0,b=0,R=0,_=0,E=0,I=0;c.sort(Kv);for(let z=0,B=c.length;z<B;z++){let D=c[z],k=D.color,q=D.intensity,X=D.distance,et=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ls?et=D.shadow.map.texture:et=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=k.r*q,d+=k.g*q,u+=k.b*q;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],q);I++}else if(D.isSunLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,nt=e.get(D);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=nt,n.sunShadowMap[p]=et;let Ot=Q.getViewportCount();for(let Nt=0;Nt<Ot;Nt++)n.sunShadowMatrix[x+Nt]=Q.getMatrix(Nt),n.sunShadowCascade[x+Nt]=Q._cascadeData[Nt];x+=Ot,p++}n.sun[f]=Y,f++}else if(D.isDirectionalLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,nt=e.get(D);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.directionalShadow[g]=nt,n.directionalShadowMap[g]=et,n.directionalShadowMatrix[g]=D.shadow.matrix,S++}n.directional[g]=Y,g++}else if(D.isSpotLight){let Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(k).multiplyScalar(q),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[v]=Y;let Q=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,Q.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[v]=Q.matrix,D.castShadow){let nt=e.get(D);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.spotShadow[v]=nt,n.spotShadowMap[v]=et,R++}v++}else if(D.isRectAreaLight){let Y=t.get(D);Y.color.copy(k).multiplyScalar(q),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=Y,A++}else if(D.isPointLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let Q=D.shadow,nt=e.get(D);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,nt.shadowCameraNear=Q.camera.near,nt.shadowCameraFar=Q.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=et,n.pointShadowMatrix[m]=D.shadow.matrix,b++}n.point[m]=Y,m++}else if(D.isHemisphereLight){let Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(q),Y.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[y]=Y,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==v||N.rectAreaLength!==A||N.hemiLength!==y||N.numSunShadows!==p||N.numDirectionalShadows!==S||N.numPointShadows!==b||N.numSpotShadows!==R||N.numSpotMaps!==_||N.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=g,n.spot.length=v,n.rectArea.length=A,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,N.sunLength=f,N.directionalLength=g,N.pointLength=m,N.spotLength=v,N.rectAreaLength=A,N.hemiLength=y,N.numSunShadows=p,N.numDirectionalShadows=S,N.numPointShadows=b,N.numSpotShadows=R,N.numSpotMaps=_,N.numLightProbes=I,n.version=$v++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let v=0,A=c.length;v<A;v++){let y=c[v];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(y.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function t0(i){let t=new jv(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Qv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new t0(i),t.set(s,[o])):r>=a.length?(o=new t0(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var t1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,n1=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],i1=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],e0=new le,ro=new P,Qu=new P;function s1(i,t,e){let n=new Hr,s=new Xt,r=new Xt,a=new ke,o=new Fl,l=new zl,c={},h=e.maxTextureSize,d={[As]:rn,[rn]:As,[vn]:vn},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:t1,fragmentShader:e1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ne;p.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let m=this.type;this.render=function(b,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Jf&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js);let E=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ki),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let B=m!==this.type;B&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=b.length;D<k;D++){let q=b[D],X=q.shadow;if(X===void 0){Vt("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let et=X.getFrameExtents();s.multiply(et),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,X.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||B===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===qr){if(q.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new $n(s.x,s.y,{format:Ls,type:Ei,minFilter:xn,magFilter:xn,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new bs(s.x,s.y,di),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Fi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=dn,X.map.depthTexture.magFilter=dn}else q.isPointLight?(X.map=new Vc(s.x),X.map.depthTexture=new Nl(s.x,Ti)):(X.map=new $n(s.x,s.y),X.map.depthTexture=new bs(s.x,s.y,Ti)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Fi,this.type===js?(X.map.depthTexture.compareFunction=Y?Bc:Oc,X.map.depthTexture.minFilter=xn,X.map.depthTexture.magFilter=xn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=dn,X.map.depthTexture.magFilter=dn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,_);for(let nt=0;nt<Q;nt++){let Ot=X.getCamera(nt);if(q.isPointLight){let Nt=X.camera,Ce=X.matrix,oe=q.distance||Nt.far;oe!==Nt.far&&(Nt.far=oe,Nt.updateProjectionMatrix()),ro.setFromMatrixPosition(q.matrixWorld),Nt.position.copy(ro),Qu.copy(Nt.position),Qu.add(n1[nt]),Nt.up.copy(i1[nt]),Nt.lookAt(Qu),Nt.updateMatrixWorld(),Ce.makeTranslation(-ro.x,-ro.y,-ro.z),e0.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(e0,Nt.coordinateSystem,Nt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(X.map),i.clear());let Nt=X.getViewport(nt);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),z.viewport(a)}n=X.getFrustum(nt),y(R,_,Ot,q,this.type)}X.isPointLightShadow!==!0&&this.type===qr&&v(X,_),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,I,N)};function v(b,R){let _=t.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new $n(s.x,s.y,{format:Ls,type:Ei}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,_,f,x,null)}function A(b,R,_,E){let I=null,N=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)I=N;else if(I=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=I.uuid,B=R.uuid,D=c[z];D===void 0&&(D={},c[z]=D);let k=D[B];k===void 0&&(k=I.clone(),D[B]=k,R.addEventListener("dispose",S)),I=k}if(I.visible=R.visible,I.wireframe=R.wireframe,E===qr?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=i.properties.get(I);z.light=_}return I}function y(b,R,_,E,I){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===qr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let B=t.update(b),D=b.material;if(Array.isArray(D)){let k=B.groups;for(let q=0,X=k.length;q<X;q++){let et=k[q],Y=D[et.materialIndex];if(Y&&Y.visible){let Q=A(b,Y,E,I);b.onBeforeShadow(i,b,R,_,B,Q,et),i.renderBufferDirect(_,null,B,Q,b,et),b.onAfterShadow(i,b,R,_,B,Q,et)}}}else if(D.visible){let k=A(b,D,E,I);b.onBeforeShadow(i,b,R,_,B,k,null),i.renderBufferDirect(_,null,B,k,b,null),b.onAfterShadow(i,b,R,_,B,k,null)}}let z=b.children;for(let B=0,D=z.length;B<D;B++)y(z[B],R,_,E,I)}function S(b){b.target.removeEventListener("dispose",S);for(let _ in c){let E=c[_],I=b.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function r1(i,t){function e(){let U=!1,ut=new ke,K=null,dt=new ke(0,0,0,0);return{setMask:function(vt){K!==vt&&!U&&(i.colorMask(vt,vt,vt,vt),K=vt)},setLocked:function(vt){U=vt},setClear:function(vt,it,Bt,Dt,Pe){Pe===!0&&(vt*=Dt,it*=Dt,Bt*=Dt),ut.set(vt,it,Bt,Dt),dt.equals(ut)===!1&&(i.clearColor(vt,it,Bt,Dt),dt.copy(ut))},reset:function(){U=!1,K=null,dt.set(-1,0,0,0)}}}function n(){let U=!1,ut=!1,K=null,dt=null,vt=null;return{setReversed:function(it){if(ut!==it){let Bt=t.get("EXT_clip_control");it?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),ut=it;let Dt=vt;vt=null,this.setClear(Dt)}},getReversed:function(){return ut},setTest:function(it){it?tt(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(it){K!==it&&!U&&(i.depthMask(it),K=it)},setFunc:function(it){if(ut&&(it=Cp[it]),dt!==it){switch(it){case _l:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case vl:i.depthFunc(i.LESS);break;case Lr:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=it}},setLocked:function(it){U=it},setClear:function(it){vt!==it&&(vt=it,ut&&(it=1-it),i.clearDepth(it))},reset:function(){U=!1,K=null,dt=null,vt=null,ut=!1}}}function s(){let U=!1,ut=null,K=null,dt=null,vt=null,it=null,Bt=null,Dt=null,Pe=null;return{setTest:function(xe){U||(xe?tt(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(xe){ut!==xe&&!U&&(i.stencilMask(xe),ut=xe)},setFunc:function(xe,xi,Pi){(K!==xe||dt!==xi||vt!==Pi)&&(i.stencilFunc(xe,xi,Pi),K=xe,dt=xi,vt=Pi)},setOp:function(xe,xi,Pi){(it!==xe||Bt!==xi||Dt!==Pi)&&(i.stencilOp(xe,xi,Pi),it=xe,Bt=xi,Dt=Pi)},setLocked:function(xe){U=xe},setClear:function(xe){Pe!==xe&&(i.clearStencil(xe),Pe=xe)},reset:function(){U=!1,ut=null,K=null,dt=null,vt=null,it=null,Bt=null,Dt=null,Pe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,A=null,y=null,S=null,b=null,R=null,_=new pt(0,0,0),E=0,I=!1,N=null,z=null,B=null,D=null,k=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,et=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=et>=1):Y.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=et>=2);let Q=null,nt={},Ot=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Ce=new ke().fromArray(Ot),oe=new ke().fromArray(Nt);function ge(U,ut,K,dt){let vt=new Uint8Array(4),it=i.createTexture();i.bindTexture(U,it),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<K;Bt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ut+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return it}let J={};J[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(Lr),ie(!1),Be(_u),tt(i.CULL_FACE),pe(ki);function tt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Et(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Yt(U,ut){return u[U]!==ut?(i.bindFramebuffer(U,ut),u[U]=ut,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function wt(U,ut){let K=p,dt=!1;if(U){K=f.get(ut),K===void 0&&(K=[],f.set(ut,K));let vt=U.textures;if(K.length!==vt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Bt=vt.length;it<Bt;it++)K[it]=i.COLOR_ATTACHMENT0+it;K.length=vt.length,dt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,dt=!0);dt&&i.drawBuffers(K)}function Qt(U){return x!==U?(i.useProgram(U),x=U,!0):!1}let en={[Qs]:i.FUNC_ADD,[Kf]:i.FUNC_SUBTRACT,[jf]:i.FUNC_REVERSE_SUBTRACT};en[Qf]=i.MIN,en[tp]=i.MAX;let ee={[ep]:i.ZERO,[np]:i.ONE,[ip]:i.SRC_COLOR,[Mu]:i.SRC_ALPHA,[cp]:i.SRC_ALPHA_SATURATE,[op]:i.DST_COLOR,[rp]:i.DST_ALPHA,[sp]:i.ONE_MINUS_SRC_COLOR,[bu]:i.ONE_MINUS_SRC_ALPHA,[lp]:i.ONE_MINUS_DST_COLOR,[ap]:i.ONE_MINUS_DST_ALPHA,[hp]:i.CONSTANT_COLOR,[up]:i.ONE_MINUS_CONSTANT_COLOR,[dp]:i.CONSTANT_ALPHA,[fp]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(U,ut,K,dt,vt,it,Bt,Dt,Pe,xe){if(U===ki){g===!0&&(Et(i.BLEND),g=!1);return}if(g===!1&&(tt(i.BLEND),g=!0),U!==$f){if(U!==m||xe!==I){if((v!==Qs||S!==Qs)&&(i.blendEquation(i.FUNC_ADD),v=Qs,S=Qs),xe)switch(U){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.ONE,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Gt("WebGLState: Invalid blending: ",U);break}else switch(U){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yu:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vu:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",U);break}A=null,y=null,b=null,R=null,_.set(0,0,0),E=0,m=U,I=xe}return}vt=vt||ut,it=it||K,Bt=Bt||dt,(ut!==v||vt!==S)&&(i.blendEquationSeparate(en[ut],en[vt]),v=ut,S=vt),(K!==A||dt!==y||it!==b||Bt!==R)&&(i.blendFuncSeparate(ee[K],ee[dt],ee[it],ee[Bt]),A=K,y=dt,b=it,R=Bt),(Dt.equals(_)===!1||Pe!==E)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Pe),_.copy(Dt),E=Pe),m=U,I=!1}function Ie(U,ut){U.side===vn?Et(i.CULL_FACE):tt(i.CULL_FACE);let K=U.side===rn;ut&&(K=!K),ie(K),U.blending===Rs&&U.transparent===!1?pe(ki):pe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let dt=U.stencilWrite;o.setTest(dt),dt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Zn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(U){N!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),N=U)}function Be(U){U!==Yf?(tt(i.CULL_FACE),U!==z&&(U===_u?i.cullFace(i.BACK):U===Zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),z=U}function hn(U){U!==B&&(X&&i.lineWidth(U),B=U)}function Zn(U,ut,K){U?(tt(i.POLYGON_OFFSET_FILL),(D!==ut||k!==K)&&(D=ut,k=K,a.getReversed()&&(ut=-ut),i.polygonOffset(ut,K))):Et(i.POLYGON_OFFSET_FILL)}function We(U){U?tt(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function Ke(U){U===void 0&&(U=i.TEXTURE0+q-1),Q!==U&&(i.activeTexture(U),Q=U)}function F(U,ut,K){K===void 0&&(Q===null?K=i.TEXTURE0+q-1:K=Q);let dt=nt[K];dt===void 0&&(dt={type:void 0,texture:void 0},nt[K]=dt),(dt.type!==U||dt.texture!==ut)&&(Q!==K&&(i.activeTexture(K),Q=K),i.bindTexture(U,ut||J[U]),dt.type=U,dt.texture=ut)}function Sn(){let U=nt[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ve(){try{i.compressedTexImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function M(){try{i.texSubImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function O(){try{i.texSubImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function ot(){try{i.texStorage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function lt(){try{i.texStorage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function $(){try{i.texImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function j(){try{i.texImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function ct(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function Ft(U,ut){d[U]!==ut&&(i.pixelStorei(U,ut),d[U]=ut)}function mt(U){Ce.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ce.copy(U))}function ht(U){oe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),oe.copy(U))}function zt(U,ut){let K=c.get(ut);K===void 0&&(K=new WeakMap,c.set(ut,K));let dt=K.get(U);dt===void 0&&(dt=i.getUniformBlockIndex(ut,U.name),K.set(U,dt))}function Ht(U,ut){let dt=c.get(ut).get(U);l.get(ut)!==dt&&(i.uniformBlockBinding(ut,dt,U.__bindingPointIndex),l.set(ut,dt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,nt={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,A=null,y=null,S=null,b=null,R=null,_=new pt(0,0,0),E=0,I=!1,N=null,z=null,B=null,D=null,k=null,Ce.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:Et,bindFramebuffer:Yt,drawBuffers:wt,useProgram:Qt,setBlending:pe,setMaterial:Ie,setFlipSided:ie,setCullFace:Be,setLineWidth:hn,setPolygonOffset:Zn,setScissorTest:We,activeTexture:Ke,bindTexture:F,unbindTexture:Sn,compressedTexImage2D:ve,compressedTexImage3D:C,texImage2D:$,texImage3D:j,pixelStorei:Ft,getParameter:ct,updateUBOMapping:zt,uniformBlockBinding:Ht,texStorage2D:ot,texStorage3D:lt,texSubImage2D:M,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:Z,scissor:mt,viewport:ht,reset:Jt}}function a1(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return p?new OffscreenCanvas(C,M):Ia("canvas")}function g(C,M,O){let G=1,Z=ve(C);if((Z.width>O||Z.height>O)&&(G=O/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ot=Math.floor(G*Z.width),lt=Math.floor(G*Z.height);u===void 0&&(u=x(ot,lt));let $=M?x(ot,lt):u;return $.width=ot,$.height=lt,$.getContext("2d").drawImage(C,0,0,ot,lt),Vt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ot+"x"+lt+")."),$}else return"data"in C&&Vt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function v(C){i.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,M,O,G,Z,ot=!1){if(C!==null){if(i[C]!==void 0)return i[C];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let lt;G&&(lt=t.get("EXT_texture_norm16"),lt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8),O===i.UNSIGNED_SHORT&&lt&&($=lt.R16_EXT),O===i.SHORT&&lt&&($=lt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),M===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8),O===i.UNSIGNED_SHORT&&lt&&($=lt.RG16_EXT),O===i.SHORT&&lt&&($=lt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),M===i.RGB&&(O===i.UNSIGNED_SHORT&&lt&&($=lt.RGB16_EXT),O===i.SHORT&&lt&&($=lt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),M===i.RGBA){let j=ot?Ca:se.getTransfer(Z);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=j===ye?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&lt&&($=lt.RGBA16_EXT),O===i.SHORT&&lt&&($=lt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(C,M){let O;return C?M===null||M===Ti||M===Zr?O=i.DEPTH24_STENCIL8:M===di?O=i.DEPTH32F_STENCIL8:M===Yr&&(O=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ti||M===Zr?O=i.DEPTH_COMPONENT24:M===di?O=i.DEPTH_COMPONENT32F:M===Yr&&(O=i.DEPTH_COMPONENT16),O}function b(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==xn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){let M=C.target;M.removeEventListener("dispose",R),E(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function _(C){let M=C.target;M.removeEventListener("dispose",_),N(M)}function E(C){let M=n.get(C);if(M.__webglInit===void 0)return;let O=C.source,G=f.get(O);if(G){let Z=G[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(C),Object.keys(G).length===0&&f.delete(O)}n.remove(C)}function I(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let O=C.source,G=f.get(O);delete G[M.__cacheKey],a.memory.textures--}function N(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(M.__webglFramebuffer[G]))for(let Z=0;Z<M.__webglFramebuffer[G].length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[G][Z]);else i.deleteFramebuffer(M.__webglFramebuffer[G]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[G])}else{if(Array.isArray(M.__webglFramebuffer))for(let G=0;G<M.__webglFramebuffer.length;G++)i.deleteFramebuffer(M.__webglFramebuffer[G]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let G=0;G<M.__webglColorRenderbuffer.length;G++)M.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[G]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let O=C.textures;for(let G=0,Z=O.length;G<Z;G++){let ot=n.get(O[G]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(O[G])}n.remove(C)}let z=0;function B(){z=0}function D(){return z}function k(C){z=C}function q(){let C=z;return C>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function X(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function et(C,M){let O=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let G=C.image;if(G===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(O,C,M);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function Y(C,M){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Et(O,C,M);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function Q(C,M){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Et(O,C,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function nt(C,M){let O=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Yt(O,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}let Ot={[Dr]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[Tl]:i.MIRRORED_REPEAT},Nt={[dn]:i.NEAREST,[gp]:i.NEAREST_MIPMAP_NEAREST,[Ka]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Ql]:i.LINEAR_MIPMAP_NEAREST,[Is]:i.LINEAR_MIPMAP_LINEAR},Ce={[vp]:i.NEVER,[Tp]:i.ALWAYS,[Mp]:i.LESS,[Oc]:i.LEQUAL,[bp]:i.EQUAL,[Bc]:i.GEQUAL,[Sp]:i.GREATER,[wp]:i.NOTEQUAL};function oe(C,M){if(M.type===di&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===xn||M.magFilter===Ql||M.magFilter===Ka||M.magFilter===Is||M.minFilter===xn||M.minFilter===Ql||M.minFilter===Ka||M.minFilter===Is)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ot[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ot[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ot[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Nt[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Nt[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ce[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===dn||M.minFilter!==Ka&&M.minFilter!==Is||M.type===di&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ge(C,M){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));let G=M.source,Z=f.get(G);Z===void 0&&(Z={},f.set(G,Z));let ot=X(M);if(ot!==C.__cacheKey){Z[ot]===void 0&&(Z[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[ot].usedTimes++;let lt=Z[C.__cacheKey];lt!==void 0&&(Z[C.__cacheKey].usedTimes--,lt.usedTimes===0&&I(M)),C.__cacheKey=ot,C.__webglTexture=Z[ot].texture}return O}function J(C,M,O){return Math.floor(Math.floor(C/O)/M)}function tt(C,M,O,G){let ot=C.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,O,G,M.data);else{ot.sort((Ft,mt)=>Ft.start-mt.start);let lt=0;for(let Ft=1;Ft<ot.length;Ft++){let mt=ot[lt],ht=ot[Ft],zt=mt.start+mt.count,Ht=J(ht.start,M.width,4),Jt=J(mt.start,M.width,4);ht.start<=zt+1&&Ht===Jt&&J(ht.start+ht.count-1,M.width,4)===Ht?mt.count=Math.max(mt.count,ht.start+ht.count-mt.start):(++lt,ot[lt]=ht)}ot.length=lt+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Ft=0,mt=ot.length;Ft<mt;Ft++){let ht=ot[Ft],zt=Math.floor(ht.start/4),Ht=Math.ceil(ht.count/4),Jt=zt%M.width,U=Math.floor(zt/M.width),ut=Ht,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Jt,U,ut,K,O,G,M.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function Et(C,M,O){let G=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=i.TEXTURE_3D);let Z=ge(C,M),ot=M.source;e.bindTexture(G,C.__webglTexture,i.TEXTURE0+O);let lt=n.get(ot);if(ot.version!==lt.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let K=se.getPrimaries(se.workingColorSpace),dt=M.colorSpace===as?null:se.getPrimaries(M.colorSpace),vt=M.colorSpace===as||K===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let j=g(M.image,!1,s.maxTextureSize);j=Sn(M,j);let ct=r.convert(M.format,M.colorSpace),Ft=r.convert(M.type),mt=y(M.internalFormat,ct,Ft,M.normalized,M.colorSpace,M.isVideoTexture);oe(G,M);let ht,zt=M.mipmaps,Ht=M.isVideoTexture!==!0,Jt=lt.__version===void 0||Z===!0,U=ot.dataReady,ut=b(M,j);if(M.isDepthTexture)mt=S(M.format===Ps,M.type),Jt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,mt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,mt,j.width,j.height,0,ct,Ft,null));else if(M.isDataTexture)if(zt.length>0){Ht&&Jt&&e.texStorage2D(i.TEXTURE_2D,ut,mt,zt[0].width,zt[0].height);for(let K=0,dt=zt.length;K<dt;K++)ht=zt[K],Ht?U&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ht.width,ht.height,ct,Ft,ht.data):e.texImage2D(i.TEXTURE_2D,K,mt,ht.width,ht.height,0,ct,Ft,ht.data);M.generateMipmaps=!1}else Ht?(Jt&&e.texStorage2D(i.TEXTURE_2D,ut,mt,j.width,j.height),U&&tt(M,j,ct,Ft)):e.texImage2D(i.TEXTURE_2D,0,mt,j.width,j.height,0,ct,Ft,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,mt,zt[0].width,zt[0].height,j.depth);for(let K=0,dt=zt.length;K<dt;K++)if(ht=zt[K],M.format!==fi)if(ct!==null)if(Ht){if(U)if(M.layerUpdates.size>0){let vt=Vu(ht.width,ht.height,M.format,M.type);for(let it of M.layerUpdates){let Bt=ht.data.subarray(it*vt/ht.data.BYTES_PER_ELEMENT,(it+1)*vt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,it,ht.width,ht.height,1,ct,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ht.width,ht.height,j.depth,ct,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,mt,ht.width,ht.height,j.depth,0,ht.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ht.width,ht.height,j.depth,ct,Ft,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,mt,ht.width,ht.height,j.depth,0,ct,Ft,ht.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ht&&Jt&&e.texStorage2D(i.TEXTURE_2D,ut,mt,zt[0].width,zt[0].height);for(let K=0,dt=zt.length;K<dt;K++)ht=zt[K],M.format!==fi?ct!==null?Ht?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ht.width,ht.height,ct,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,K,mt,ht.width,ht.height,0,ht.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?U&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ht.width,ht.height,ct,Ft,ht.data):e.texImage2D(i.TEXTURE_2D,K,mt,ht.width,ht.height,0,ct,Ft,ht.data)}else if(M.isDataArrayTexture)if(Ht){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,mt,j.width,j.height,j.depth),U)if(M.layerUpdates.size>0){let K=Vu(j.width,j.height,M.format,M.type);for(let dt of M.layerUpdates){let vt=j.data.subarray(dt*K/j.data.BYTES_PER_ELEMENT,(dt+1)*K/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,j.width,j.height,1,ct,Ft,vt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ct,Ft,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,j.width,j.height,j.depth,0,ct,Ft,j.data);else if(M.isData3DTexture)Ht?(Jt&&e.texStorage3D(i.TEXTURE_3D,ut,mt,j.width,j.height,j.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ct,Ft,j.data)):e.texImage3D(i.TEXTURE_3D,0,mt,j.width,j.height,j.depth,0,ct,Ft,j.data);else if(M.isFramebufferTexture){if(Jt)if(Ht)e.texStorage2D(i.TEXTURE_2D,ut,mt,j.width,j.height);else{let K=j.width,dt=j.height;for(let vt=0;vt<ut;vt++)e.texImage2D(i.TEXTURE_2D,vt,mt,K,dt,0,ct,Ft,null),K>>=1,dt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),d.add(M),K.onpaint=dt=>{let vt=dt.changedElements;for(let it of d)vt.includes(it.image)&&(it.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let vt=i.RGBA,it=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,vt,it,Bt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Ht&&Jt){let K=ve(zt[0]);e.texStorage2D(i.TEXTURE_2D,ut,mt,K.width,K.height)}for(let K=0,dt=zt.length;K<dt;K++)ht=zt[K],Ht?U&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ct,Ft,ht):e.texImage2D(i.TEXTURE_2D,K,mt,ct,Ft,ht);M.generateMipmaps=!1}else if(Ht){if(Jt){let K=ve(j);e.texStorage2D(i.TEXTURE_2D,ut,mt,K.width,K.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Ft,j)}else e.texImage2D(i.TEXTURE_2D,0,mt,ct,Ft,j);m(M)&&v(G),lt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Yt(C,M,O){if(M.image.length!==6)return;let G=ge(C,M),Z=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);let ot=n.get(Z);if(Z.version!==ot.__version||G===!0){e.activeTexture(i.TEXTURE0+O);let lt=se.getPrimaries(se.workingColorSpace),$=M.colorSpace===as?null:se.getPrimaries(M.colorSpace),j=M.colorSpace===as||lt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ct=M.isCompressedTexture||M.image[0].isCompressedTexture,Ft=M.image[0]&&M.image[0].isDataTexture,mt=[];for(let it=0;it<6;it++)!ct&&!Ft?mt[it]=g(M.image[it],!0,s.maxCubemapSize):mt[it]=Ft?M.image[it].image:M.image[it],mt[it]=Sn(M,mt[it]);let ht=mt[0],zt=r.convert(M.format,M.colorSpace),Ht=r.convert(M.type),Jt=y(M.internalFormat,zt,Ht,M.normalized,M.colorSpace),U=M.isVideoTexture!==!0,ut=ot.__version===void 0||G===!0,K=Z.dataReady,dt=b(M,ht);oe(i.TEXTURE_CUBE_MAP,M);let vt;if(ct){U&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Jt,ht.width,ht.height);for(let it=0;it<6;it++){vt=mt[it].mipmaps;for(let Bt=0;Bt<vt.length;Bt++){let Dt=vt[Bt];M.format!==fi?zt!==null?U?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt,0,0,Dt.width,Dt.height,zt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt,Jt,Dt.width,Dt.height,0,Dt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt,0,0,Dt.width,Dt.height,zt,Ht,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt,Jt,Dt.width,Dt.height,0,zt,Ht,Dt.data)}}}else{if(vt=M.mipmaps,U&&ut){vt.length>0&&dt++;let it=ve(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Jt,it.width,it.height)}for(let it=0;it<6;it++)if(Ft){U?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,mt[it].width,mt[it].height,zt,Ht,mt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,mt[it].width,mt[it].height,0,zt,Ht,mt[it].data);for(let Bt=0;Bt<vt.length;Bt++){let Pe=vt[Bt].image[it].image;U?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt+1,0,0,Pe.width,Pe.height,zt,Ht,Pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt+1,Jt,Pe.width,Pe.height,0,zt,Ht,Pe.data)}}else{U?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,zt,Ht,mt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,zt,Ht,mt[it]);for(let Bt=0;Bt<vt.length;Bt++){let Dt=vt[Bt];U?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt+1,0,0,zt,Ht,Dt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Bt+1,Jt,zt,Ht,Dt.image[it])}}}m(M)&&v(i.TEXTURE_CUBE_MAP),ot.__version=Z.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function wt(C,M,O,G,Z,ot){let lt=r.convert(O.format,O.colorSpace),$=r.convert(O.type),j=y(O.internalFormat,lt,$,O.normalized,O.colorSpace),ct=n.get(M),Ft=n.get(O);if(Ft.__renderTarget=M,!ct.__hasExternalTextures){let mt=Math.max(1,M.width>>ot),ht=Math.max(1,M.height>>ot);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,ot,j,mt,ht,M.depth,0,lt,$,null):e.texImage2D(Z,ot,j,mt,ht,0,lt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Ke(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Z,Ft.__webglTexture,0,We(M)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Z,Ft.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(C,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let G=M.depthTexture,Z=G&&G.isDepthTexture?G.type:null,ot=S(M.stencilBuffer,Z),lt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ke(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(M),ot,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(M),ot,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ot,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,C)}else{let G=M.textures;for(let Z=0;Z<G.length;Z++){let ot=G[Z],lt=r.convert(ot.format,ot.colorSpace),$=r.convert(ot.type),j=y(ot.internalFormat,lt,$,ot.normalized,ot.colorSpace);Ke(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(M),j,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(M),j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function en(C,M,O){let G=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),oe(i.TEXTURE_CUBE_MAP,M.depthTexture);let ct=r.convert(M.depthTexture.format),Ft=r.convert(M.depthTexture.type),mt;M.depthTexture.format===Fi?mt=i.DEPTH_COMPONENT24:M.depthTexture.format===Ps&&(mt=i.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,mt,M.width,M.height,0,ct,Ft,null)}}else et(M.depthTexture,0);let ot=Z.__webglTexture,lt=We(M),$=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,j=M.depthTexture.format===Ps?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Fi)Ke(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,ot,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,ot,0);else if(M.depthTexture.format===Ps)Ke(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,ot,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(C){let M=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),G){let Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=G}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)en(M.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?en(M.__webglFramebuffer[0],C,0):en(M.__webglFramebuffer,C,0)}else if(O){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]===void 0)M.__webglDepthbuffer[G]=i.createRenderbuffer(),Qt(M.__webglDepthbuffer[G],C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ot)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Qt(M.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(C,M,O){let G=n.get(C);M!==void 0&&wt(G.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ee(C)}function Ie(C){let M=C.texture,O=n.get(C),G=n.get(M);C.addEventListener("dispose",_);let Z=C.textures,ot=C.isWebGLCubeRenderTarget===!0,lt=Z.length>1;if(lt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=M.version,a.memory.textures++),ot){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let j=0;j<M.mipmaps.length;j++)O.__webglFramebuffer[$][j]=i.createFramebuffer()}else O.__webglFramebuffer[$]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)O.__webglFramebuffer[$]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(lt)for(let $=0,j=Z.length;$<j;$++){let ct=n.get(Z[$]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Ke(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<Z.length;$++){let j=Z[$];O.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[$]);let ct=r.convert(j.format,j.colorSpace),Ft=r.convert(j.type),mt=y(j.internalFormat,ct,Ft,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),ht=We(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,O.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Qt(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),oe(i.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)wt(O.__webglFramebuffer[$][j],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else wt(O.__webglFramebuffer[$],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(M)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let $=0,j=Z.length;$<j;$++){let ct=Z[$],Ft=n.get(ct),mt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Ft.__webglTexture),oe(mt,ct),wt(O.__webglFramebuffer,C,ct,i.COLOR_ATTACHMENT0+$,mt,0),m(ct)&&v(mt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,G.__webglTexture),oe($,M),M.mipmaps&&M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)wt(O.__webglFramebuffer[j],C,M,i.COLOR_ATTACHMENT0,$,j);else wt(O.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,$,0);m(M)&&v($),e.unbindTexture()}C.depthBuffer&&ee(C)}function ie(C){let M=C.textures;for(let O=0,G=M.length;O<G;O++){let Z=M[O];if(m(Z)){let ot=A(C),lt=n.get(Z).__webglTexture;e.bindTexture(ot,lt),v(ot),e.unbindTexture()}}}let Be=[],hn=[];function Zn(C){if(C.samples>0){if(Ke(C)===!1){let M=C.textures,O=C.width,G=C.height,Z=i.COLOR_BUFFER_BIT,ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(C),$=M.length>1;if($)for(let ct=0;ct<M.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);let j=C.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<M.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);let Ft=n.get(M[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,Z,i.NEAREST),l===!0&&(Be.length=0,hn.length=0,Be.push(i.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Be.push(ot),hn.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,hn)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ct=0;ct<M.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);let Ft=n.get(M[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function We(C){return Math.min(s.maxSamples,C.samples)}function Ke(C){let M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(C){let M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Sn(C,M){let O=C.colorSpace,G=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ra&&O!==as&&(se.getTransfer(O)===ye?(G!==fi||Z!==Kn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",O)),M}function ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=et,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=nt,this.rebindTextures=pe,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Zn,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function o1(i,t){function e(n,s=as){let r,a=se.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pu)return i.BYTE;if(n===Lu)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===Uu)return i.ALPHA;if(n===Fu)return i.RGB;if(n===fi)return i.RGBA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===ic)return i.RED;if(n===sc)return i.RED_INTEGER;if(n===Ls)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===ac)return i.RGBA_INTEGER;if(n===ja||n===Qa||n===to||n===eo)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===lc||n===cc||n===hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===dc||n===fc||n===pc||n===mc||n===no||n===gc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uc||n===dc)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fc)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pc)return r.COMPRESSED_R11_EAC;if(n===mc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===no)return r.COMPRESSED_RG11_EAC;if(n===gc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xc||n===_c||n===yc||n===vc||n===Mc||n===bc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xc)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vc)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wc)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pc||n===Lc||n===Dc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Pc)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===Uc||n===io||n===Fc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var l1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c1=`
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

}`,od=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ba(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:l1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ld=class extends zi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new od,m={},v=e.getContextAttributes(),A=null,y=null,S=[],b=[],R=new Xt,_=null,E=null,I=new gn;I.viewport=new ke;let N=new gn;N.viewport=new ke;let z=[I,N],B=new Jl,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=S[J];return tt===void 0&&(tt=new zr,S[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=S[J];return tt===void 0&&(tt=new zr,S[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=S[J];return tt===void 0&&(tt=new zr,S[J]=tt),tt.getHandSpace()};function q(J){let tt=b.indexOf(J.inputSource);if(tt===-1)return;let Et=S[tt];Et!==void 0&&(Et.update(J.inputSource,J.frame,c||a),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",et);for(let J=0;J<S.length;J++){let tt=b[J];tt!==null&&(b[J]=null,S[J].disconnect(tt))}D=null,k=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,y=null,ge.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),E!==null){let J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",et),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Yt=null,wt=null;v.depth&&(wt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=v.stencil?Ps:Fi,Yt=v.stencil?Zr:Ti);let Qt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Qt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new $n(u.textureWidth,u.textureHeight,{format:fi,type:Kn,depthTexture:new bs(u.textureWidth,u.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Et={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $n(f.framebufferWidth,f.framebufferHeight,{format:fi,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function et(J){for(let tt=0;tt<J.removed.length;tt++){let Et=J.removed[tt],Yt=b.indexOf(Et);Yt>=0&&(b[Yt]=null,S[Yt].disconnect(Et))}for(let tt=0;tt<J.added.length;tt++){let Et=J.added[tt],Yt=b.indexOf(Et);if(Yt===-1){for(let Qt=0;Qt<S.length;Qt++)if(Qt>=b.length){b.push(Et),Yt=Qt;break}else if(b[Qt]===null){b[Qt]=Et,Yt=Qt;break}if(Yt===-1)break}let wt=S[Yt];wt&&wt.connect(Et)}}let Y=new P,Q=new P;function nt(J,tt,Et){Y.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(Et.matrixWorld);let Yt=Y.distanceTo(Q),wt=tt.projectionMatrix.elements,Qt=Et.projectionMatrix.elements,en=wt[14]/(wt[10]-1),ee=wt[14]/(wt[10]+1),pe=(wt[9]+1)/wt[5],Ie=(wt[9]-1)/wt[5],ie=(wt[8]-1)/wt[0],Be=(Qt[8]+1)/Qt[0],hn=en*ie,Zn=en*Be,We=Yt/(-ie+Be),Ke=We*-ie;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ke),J.translateZ(We),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),wt[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let F=en+We,Sn=ee+We,ve=hn-Ke,C=Zn+(Yt-Ke),M=pe*ee/Sn*F,O=Ie*ee/Sn*F;J.projectionMatrix.makePerspective(ve,C,M,O,F,Sn),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ot(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let tt=J.near,Et=J.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(Et=g.depthFar)),B.near=N.near=I.near=tt,B.far=N.far=I.far=Et,(D!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),D=B.near,k=B.far),B.layers.mask=J.layers.mask|6,I.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let Yt=J.parent,wt=B.cameras;Ot(B,Yt);for(let Qt=0;Qt<wt.length;Qt++)Ot(wt[Qt],Yt);wt.length===2?nt(B,I,N):B.projectionMatrix.copy(I.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),Nt(J,B,Yt)};function Nt(J,tt,Et){Et===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Al*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(J){return m[J]};let Ce=null;function oe(J,tt){if(h=tt.getViewerPose(c||a),p=tt,h!==null){let Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Yt=!1;Et.length!==B.cameras.length&&(B.cameras.length=0,Yt=!0);for(let ee=0;ee<Et.length;ee++){let pe=Et[ee],Ie=null;if(f!==null)Ie=f.getViewport(pe);else{let Be=d.getViewSubImage(u,pe);Ie=Be.viewport,ee===0&&(t.setRenderTargetTextures(y,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(y))}let ie=z[ee];ie===void 0&&(ie=new gn,ie.layers.enable(ee),ie.viewport=new ke,z[ee]=ie),ie.matrix.fromArray(pe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(pe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ee===0&&(B.matrix.copy(ie.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Yt===!0&&B.cameras.push(ie)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let ee=d.getDepthInformation(Et[0]);ee&&ee.isValid&&ee.texture&&g.init(ee,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let ee=0;ee<Et.length;ee++){let pe=Et[ee].camera;if(pe){let Ie=m[pe];Ie||(Ie=new Ba,m[pe]=Ie);let ie=d.getCameraImage(pe);Ie.sourceTexture=ie}}}}for(let Et=0;Et<S.length;Et++){let Yt=b[Et],wt=S[Et];Yt!==null&&wt!==void 0&&wt.update(Yt,tt,c||a)}Ce&&Ce(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}let ge=new n0;ge.setAnimationLoop(oe),this.setAnimationLoop=function(J){Ce=J},this.dispose=function(){}}},h1=new le,l0=new qt;l0.set(-1,0,0,0,1,0,0,0,1);function u1(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Bu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,A,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,A):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),A=v.envMap,y=v.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(h1.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(l0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=A*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function d1(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let b=S.program;n.uniformBlockBinding(y,b)}function c(y,S){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",v));let R=S.program;n.updateUBOMapping(y,R);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let S=d();y.__bindingPointIndex=S;let b=i.createBuffer(),R=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=s[y.id],b=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,E=b.length;_<E;_++){let I=b[_];if(Array.isArray(I))for(let N=0,z=I.length;N<z;N++)f(I[N],_,N,R);else f(I,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,b,R){if(x(y,S,b,R)===!0){let _=y.__offset,E=y.value;if(Array.isArray(E)){let I=0;for(let N=0;N<E.length;N++){let z=E[N],B=m(z);p(z,y.__data,I),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(I+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function p(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function x(y,S,b,R){let _=y.value,E=S+"_"+b;if(R[E]===void 0)return typeof _=="number"||typeof _=="boolean"?R[E]=_:ArrayBuffer.isView(_)?R[E]=_.slice():R[E]=_.clone(),!0;{let I=R[E];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return R[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function g(y){let S=y.uniforms,b=0,R=16;for(let E=0,I=S.length;E<I;E++){let N=Array.isArray(S[E])?S[E]:[S[E]];for(let z=0,B=N.length;z<B;z++){let D=N[z],k=Array.isArray(D.value)?D.value:[D.value];for(let q=0,X=k.length;q<X;q++){let et=k[q],Y=m(et),Q=b%R,nt=Q%Y.boundary,Ot=Q+nt;b+=nt,Ot!==0&&R-Ot<Y.storage&&(b+=R-Ot),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=Y.storage}}}let _=b%R;return _>0&&(b+=R-_),y.__size=b,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",y),S}function v(y){let S=y.target;S.removeEventListener("dispose",v);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var f1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;function p1(){return Hi===null&&(Hi=new Ua(f1,16,16,Ls,Ei),Hi.name="DFG_LUT",Hi.minFilter=xn,Hi.magFilter=xn,Hi.wrapS=Ui,Hi.wrapT=Ui,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var Gc=class{constructor(t={}){let{canvas:e=Ep(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Kn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,g=new Set([ac,rc,sc]),m=new Set([Kn,Ti,Yr,Zr,ec,nc]),v=new Uint32Array(4),A=new Int32Array(4),y=new P,S=null,b=null,R=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,z=null,B=null,D=null,k=null;this._outputColorSpace=Fn;let q=0,X=0,et=null,Y=-1,Q=null,nt=new ke,Ot=new ke,Nt=null,Ce=new pt(0),oe=0,ge=e.width,J=e.height,tt=1,Et=null,Yt=null,wt=new ke(0,0,ge,J),Qt=new ke(0,0,ge,J),en=!1,ee=new Hr,pe=!1,Ie=!1,ie=new le,Be=new P,hn=new ke,Zn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ke(){return et===null?tt:1}let F=n;function Sn(T,L){return e.getContext(T,L)}let ve,C,M,O,G,Z,ot,lt,$,j,ct,Ft,mt,ht,zt,Ht,Jt,U,ut,K,dt,vt,it;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",xi,!1),F===null){let L="webgl2";if(F=Sn(L,T),F===null)throw Sn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(T){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",xi,!1),Gt("WebGLRenderer: "+T.message),T}function Bt(){ve=new My(F),ve.init(),dt=new o1(F,ve),C=new uy(F,ve,t,dt),M=new r1(F,ve),C.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),B=F.createFramebuffer(),D=F.createFramebuffer(),k=F.createFramebuffer(),O=new wy(F),G=new Xv,Z=new a1(F,ve,M,G,C,dt,O),ot=new vy(I),lt=new Eg(F),vt=new cy(F,lt),$=new by(F,lt,O,vt),j=new Ey(F,$,lt,vt,O),U=new Ty(F,C,Z),zt=new dy(G),ct=new Wv(I,ot,ve,C,vt,zt),Ft=new u1(I,G),mt=new Yv,ht=new Qv(ve),Jt=new ly(I,ot,M,j,p,l),Ht=new s1(I,j,C),it=new d1(F,O,C,M),ut=new hy(F,ve,O),K=new Sy(F,ve,O),O.programs=ct.programs,I.capabilities=C,I.extensions=ve,I.properties=G,I.renderLists=mt,I.shadowMap=Ht,I.state=M,I.info=O}x!==Kn&&(E=new Ry(x,e.width,e.height,o,s,r));let Dt=new ld(I,F);this.xr=Dt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(T){T!==void 0&&(tt=T,this.setSize(ge,J,!1))},this.getSize=function(T){return T.set(ge,J)},this.setSize=function(T,L,W=!0){if(Dt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=T,J=L,e.width=Math.floor(T*tt),e.height=Math.floor(L*tt),W===!0&&(e.style.width=T+"px",e.style.height=L+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,T,L)},this.getDrawingBufferSize=function(T){return T.set(ge*tt,J*tt).floor()},this.setDrawingBufferSize=function(T,L,W){ge=T,J=L,tt=W,e.width=Math.floor(T*W),e.height=Math.floor(L*W),this.setViewport(0,0,T,L)},this.setEffects=function(T){if(x===Kn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let L=0;L<T.length;L++)if(T[L].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(nt)},this.getViewport=function(T){return T.copy(wt)},this.setViewport=function(T,L,W,H){T.isVector4?wt.set(T.x,T.y,T.z,T.w):wt.set(T,L,W,H),M.viewport(nt.copy(wt).multiplyScalar(tt).round())},this.getScissor=function(T){return T.copy(Qt)},this.setScissor=function(T,L,W,H){T.isVector4?Qt.set(T.x,T.y,T.z,T.w):Qt.set(T,L,W,H),M.scissor(Ot.copy(Qt).multiplyScalar(tt).round())},this.getScissorTest=function(){return en},this.setScissorTest=function(T){M.setScissorTest(en=T)},this.setOpaqueSort=function(T){Et=T},this.setTransparentSort=function(T){Yt=T},this.getClearColor=function(T){return T.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(T=!0,L=!0,W=!0){let H=0;if(T){let V=!1;if(et!==null){let yt=et.texture.format;V=g.has(yt)}if(V){let yt=et.texture.type,Tt=m.has(yt),_t=Jt.getClearColor(),Ct=Jt.getClearAlpha(),Ut=_t.r,Kt=_t.g,ne=_t.b;Tt?(v[0]=Ut,v[1]=Kt,v[2]=ne,v[3]=Ct,F.clearBufferuiv(F.COLOR,0,v)):(A[0]=Ut,A[1]=Kt,A[2]=ne,A[3]=Ct,F.clearBufferiv(F.COLOR,0,A))}else H|=F.COLOR_BUFFER_BIT}L&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),z=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",xi,!1),Jt.dispose(),mt.dispose(),ht.dispose(),G.dispose(),ot.dispose(),j.dispose(),vt.dispose(),it.dispose(),ct.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",of),Dt.removeEventListener("sessionend",lf),Vs.stop()};function Pe(T){T.preventDefault(),Pa("WebGLRenderer: Context Lost."),N=!0}function xe(){Pa("WebGLRenderer: Context Restored."),N=!1;let T=O.autoReset,L=Ht.enabled,W=Ht.autoUpdate,H=Ht.needsUpdate,V=Ht.type;Bt(),O.autoReset=T,Ht.enabled=L,Ht.autoUpdate=W,Ht.needsUpdate=H,Ht.type=V}function xi(T){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pi(T){let L=T.target;L.removeEventListener("dispose",Pi),Dm(L)}function Dm(T){Nm(T),G.remove(T)}function Nm(T){let L=G.get(T).programs;L!==void 0&&(L.forEach(function(W){ct.releaseProgram(W)}),T.isShaderMaterial&&ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,L,W,H,V,yt){L===null&&(L=Zn);let Tt=V.isMesh&&V.matrixWorld.determinantAffine()<0,_t=zm(T,L,W,H,V);M.setMaterial(H,Tt);let Ct=W.index,Ut=1;if(H.wireframe===!0){if(Ct=$.getWireframeAttribute(W),Ct===void 0)return;Ut=2}let Kt=W.drawRange,ne=W.attributes.position,It=Kt.start*Ut,_e=(Kt.start+Kt.count)*Ut;yt!==null&&(It=Math.max(It,yt.start*Ut),_e=Math.min(_e,(yt.start+yt.count)*Ut)),Ct!==null?(It=Math.max(It,0),_e=Math.min(_e,Ct.count)):ne!=null&&(It=Math.max(It,0),_e=Math.min(_e,ne.count));let je=_e-It;if(je<0||je===1/0)return;vt.setup(V,H,_t,W,Ct);let ze,Ee=ut;if(Ct!==null&&(ze=lt.get(Ct),Ee=K,Ee.setIndex(ze)),V.isMesh)H.wireframe===!0?(M.setLineWidth(H.wireframeLinewidth*Ke()),Ee.setMode(F.LINES)):Ee.setMode(F.TRIANGLES);else if(V.isLine){let wn=H.linewidth;wn===void 0&&(wn=1),M.setLineWidth(wn*Ke()),V.isLineSegments?Ee.setMode(F.LINES):V.isLineLoop?Ee.setMode(F.LINE_LOOP):Ee.setMode(F.LINE_STRIP)}else V.isPoints?Ee.setMode(F.POINTS):V.isSprite&&Ee.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))Ee.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let wn=V._multiDrawStarts,St=V._multiDrawCounts,Nn=V._multiDrawCount,de=Ct?lt.get(Ct).bytesPerElement:1,ci=G.get(H).currentProgram.getUniforms();for(let Li=0;Li<Nn;Li++)ci.setValue(F,"_gl_DrawID",Li),Ee.render(wn[Li]/de,St[Li])}else if(V.isInstancedMesh)Ee.renderInstances(It,je,V.count);else if(W.isInstancedBufferGeometry){let wn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,St=Math.min(W.instanceCount,wn);Ee.renderInstances(It,je,St)}else Ee.render(It,je)};function af(T,L,W,H){z!==null&&T.isNodeMaterial&&z.setObject(H,T),pe===!0&&zt.setState(T,W,!1),T.transparent===!0&&T.side===vn&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Vo(T,L,H),T.side=As,T.needsUpdate=!0,Vo(T,L,H),T.side=vn):Vo(T,L,H)}this.compile=function(T,L,W=null){W===null&&(W=T),z!==null&&z.renderStart(T,L,W),b=ht.get(W),b.init(L),_.push(b),W.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),T!==W&&T.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),z!==null&&z.updateLights(b.state.lightsArray),Ie=this.localClippingEnabled,pe=zt.init(this.clippingPlanes,Ie),pe===!0&&zt.setGlobalState(this.clippingPlanes,L),z!==null&&Ht.render(b.state.shadowsArray,W,L);let H=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let yt=V.material;if(yt)if(Array.isArray(yt))for(let Tt=0;Tt<yt.length;Tt++){let _t=yt[Tt];af(_t,W,L,V),H.add(_t)}else af(yt,W,L,V),H.add(yt)}),b=_.pop(),z!==null&&z.renderEnd(),H},this.compileAsync=function(T,L,W=null){let H=this.compile(T,L,W);return new Promise(V=>{function yt(){if(H.forEach(function(Tt){let Ct=G.get(Tt).currentProgram;(Ct===void 0||Ct.isReady())&&H.delete(Tt)}),H.size===0){V(T);return}setTimeout(yt,10)}ve.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Fh=null;function Um(T){Fh&&Fh(T)}function of(){Vs.stop()}function lf(){Vs.start()}let Vs=new n0;Vs.setAnimationLoop(Um),typeof self<"u"&&Vs.setContext(self),this.setAnimationLoop=function(T){Fh=T,Dt.setAnimationLoop(T),T===null?Vs.stop():Vs.start()},Dt.addEventListener("sessionstart",of),Dt.addEventListener("sessionend",lf),this.render=function(T,L){if(L!==void 0&&L.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(T,L);let W=Dt.enabled===!0&&Dt.isPresenting===!0,H=E!==null&&(et===null||W)&&E.begin(I,et);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(L),L=Dt.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,L,et),b=ht.get(T,_.length),b.init(L),b.state.textureUnits=Z.getTextureUnits(),_.push(b),ie.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),ee.setFromProjectionMatrix(ie,bi,L.reversedDepth),Ie=this.localClippingEnabled,pe=zt.init(this.clippingPlanes,Ie),S=mt.get(T,R.length),S.init(),R.push(S),Dt.enabled===!0&&Dt.isPresenting===!0){let Tt=I.xr.getDepthSensingMesh();Tt!==null&&zh(Tt,L,-1/0,I.sortObjects)}zh(T,L,0,I.sortObjects),S.finish(),z!==null&&z.updateLights(b.state.lightsArray),I.sortObjects===!0&&S.sort(Et,Yt),We=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,We&&Jt.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&zt.beginShadows();let V=b.state.shadowsArray;if(Ht.render(V,T,L),pe===!0&&zt.endShadows(),(H&&E.hasRenderPass())===!1){let Tt=S.opaque,_t=S.transmissive;if(b.setupLights(),L.isArrayCamera){let Ct=L.cameras;if(_t.length>0)for(let Ut=0,Kt=Ct.length;Ut<Kt;Ut++){let ne=Ct[Ut];hf(Tt,_t,T,ne)}We&&Jt.render(T);for(let Ut=0,Kt=Ct.length;Ut<Kt;Ut++){let ne=Ct[Ut];cf(S,T,ne,ne.viewport)}}else _t.length>0&&hf(Tt,_t,T,L),We&&Jt.render(T),cf(S,T,L)}et!==null&&X===0&&(Z.updateMultisampleRenderTarget(et),Z.updateRenderTargetMipmap(et)),H&&E.end(I),T.isScene===!0&&T.onAfterRender(I,T,L),vt.resetDefaultState(),Y=-1,Q=null,_.pop(),_.length>0?(b=_[_.length-1],Z.setTextureUnits(b.state.textureUnits),pe===!0&&zt.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,z!==null&&z.renderEnd()};function zh(T,L,W,H){if(T.visible===!1)return;if(T.layers.test(L.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(L);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ee)){H&&hn.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ie);let Tt=j.update(T),_t=T.material;_t.visible&&S.push(T,Tt,_t,W,hn.z,null,L)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ee))){let Tt=j.update(T),_t=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),hn.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),hn.copy(Tt.boundingSphere.center)),hn.applyMatrix4(T.matrixWorld).applyMatrix4(ie)),Array.isArray(_t)){let Ct=Tt.groups;for(let Ut=0,Kt=Ct.length;Ut<Kt;Ut++){let ne=Ct[Ut],It=_t[ne.materialIndex];It&&It.visible&&S.push(T,Tt,It,W,hn.z,ne,L)}}else _t.visible&&S.push(T,Tt,_t,W,hn.z,null,L)}}let yt=T.children;for(let Tt=0,_t=yt.length;Tt<_t;Tt++)zh(yt[Tt],L,W,H)}function cf(T,L,W,H){let{opaque:V,transmissive:yt,transparent:Tt}=T;b.setupLightsView(W),pe===!0&&zt.setGlobalState(I.clippingPlanes,W),H&&M.viewport(nt.copy(H)),V.length>0&&Ho(V,L,W),yt.length>0&&Ho(yt,L,W),Tt.length>0&&Ho(Tt,L,W),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function hf(T,L,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){let It=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new $n(1,1,{generateMipmaps:!0,type:It?Ei:Kn,minFilter:Is,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let yt=b.state.transmissionRenderTarget[H.id],Tt=H.viewport||nt;yt.setSize(Tt.z*I.transmissionResolutionScale,Tt.w*I.transmissionResolutionScale);let _t=I.getRenderTarget(),Ct=I.getActiveCubeFace(),Ut=I.getActiveMipmapLevel();I.setRenderTarget(yt),I.getClearColor(Ce),oe=I.getClearAlpha(),oe<1&&I.setClearColor(16777215,.5),I.clear(),We&&Jt.render(W);let Kt=I.toneMapping;I.toneMapping=wi;let ne=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),pe===!0&&zt.setGlobalState(I.clippingPlanes,H),Ho(T,W,H),Z.updateMultisampleRenderTarget(yt),Z.updateRenderTargetMipmap(yt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let _e=0,je=L.length;_e<je;_e++){let ze=L[_e],{object:Ee,geometry:wn,material:St,group:Nn}=ze;if(St.side===vn&&Ee.layers.test(H.layers)){let de=St.side;St.side=rn,St.needsUpdate=!0,uf(Ee,W,H,wn,St,Nn),St.side=de,St.needsUpdate=!0,It=!0}}It===!0&&(Z.updateMultisampleRenderTarget(yt),Z.updateRenderTargetMipmap(yt))}I.setRenderTarget(_t,Ct,Ut),I.setClearColor(Ce,oe),ne!==void 0&&(H.viewport=ne),I.toneMapping=Kt}function Ho(T,L,W){let H=L.isScene===!0?L.overrideMaterial:null;for(let V=0,yt=T.length;V<yt;V++){let Tt=T[V],{object:_t,geometry:Ct,group:Ut}=Tt,Kt=Tt.material;Kt.allowOverride===!0&&H!==null&&(Kt=H),_t.layers.test(W.layers)&&uf(_t,L,W,Ct,Kt,Ut)}}function uf(T,L,W,H,V,yt){z!==null&&V.isNodeMaterial&&z.setObject(T,V),T.onBeforeRender(I,L,W,H,V,yt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(I,L,W,H,T,yt),V.transparent===!0&&V.side===vn&&V.forceSinglePass===!1?(V.side=rn,V.needsUpdate=!0,I.renderBufferDirect(W,L,H,V,T,yt),V.side=As,V.needsUpdate=!0,I.renderBufferDirect(W,L,H,V,T,yt),V.side=vn):I.renderBufferDirect(W,L,H,V,T,yt),T.onAfterRender(I,L,W,H,V,yt)}function Vo(T,L,W){L.isScene!==!0&&(L=Zn);let H=G.get(T),V=b.state.lights,yt=b.state.shadowsArray,Tt=V.state.version,_t=ct.getParameters(T,V.state,yt,L,W,b.state.lightProbeGridArray),Ct=ct.getProgramCacheKey(_t),Ut=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?L.environment:null,H.fog=L.fog;let Kt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=ot.get(T.envMap||H.environment,Kt),H.envMapRotation=H.environment!==null&&T.envMap===null?L.environmentRotation:T.envMapRotation,Ut===void 0&&(T.addEventListener("dispose",Pi),Ut=new Map,H.programs=Ut);let ne=Ut.get(Ct);if(ne!==void 0){if(H.currentProgram===ne&&H.lightsStateVersion===Tt)return ff(T,_t),ne}else _t.uniforms=ct.getUniforms(T),z!==null&&T.isNodeMaterial&&z.build(T,W,_t),T.onBeforeCompile(_t,I),ne=ct.acquireProgram(_t,Ct),Ut.set(Ct,ne),H.uniforms=_t.uniforms;let It=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=zt.uniform),ff(T,_t),H.needsLights=Bm(T),H.lightsStateVersion=Tt,H.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.sunLights.value=V.state.sun,It.sunLightShadows.value=V.state.sunShadow,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.sunShadowMatrix.value=V.state.sunShadowMatrix,It.sunShadowCascade.value=V.state.sunShadowCascade,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=ne,H.uniformsList=null,ne}function df(T){if(T.uniformsList===null){let L=T.currentProgram.getUniforms();T.uniformsList=Kr.seqWithValue(L.seq,T.uniforms)}return T.uniformsList}function ff(T,L){let W=G.get(T);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function Fm(T,L){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(L.matrixWorld);for(let W=0,H=T.length;W<H;W++){let V=T[W];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function zm(T,L,W,H,V){L.isScene!==!0&&(L=Zn),Z.resetTextureUnits();let yt=L.fog,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?L.environment:null,_t=et===null?I.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:se.workingColorSpace,Ct=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ut=ot.get(H.envMap||Tt,Ct),Kt=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ne=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),It=!!W.morphAttributes.position,_e=!!W.morphAttributes.normal,je=!!W.morphAttributes.color,ze=wi;H.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ze=I.toneMapping);let Ee=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,wn=Ee!==void 0?Ee.length:0,St=G.get(H),Nn=b.state.lights;if(pe===!0&&(Ie===!0||T!==Q)){let Le=T===Q&&H.id===Y;zt.setState(H,T,Le)}let de=!1;H.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Nn.state.version||St.outputColorSpace!==_t||V.isBatchedMesh&&St.batching===!1||!V.isBatchedMesh&&St.batching===!0||V.isBatchedMesh&&St.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&St.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&St.instancing===!1||!V.isInstancedMesh&&St.instancing===!0||V.isSkinnedMesh&&St.skinning===!1||!V.isSkinnedMesh&&St.skinning===!0||V.isInstancedMesh&&St.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&St.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&St.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&St.instancingMorph===!1&&V.morphTexture!==null||St.envMap!==Ut||H.fog===!0&&St.fog!==yt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==zt.numPlanes||St.numIntersection!==zt.numIntersection)||St.vertexAlphas!==Kt||St.vertexTangents!==ne||St.morphTargets!==It||St.morphNormals!==_e||St.morphColors!==je||St.toneMapping!==ze||St.morphTargetsCount!==wn||!!St.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,St.__version=H.version);let ci=St.currentProgram;de===!0&&(ci=Vo(H,L,V),z&&H.isNodeMaterial&&z.onUpdateProgram(H,ci,St));let Li=!1,us=!1,ur=!1,Me=ci.getUniforms(),Je=St.uniforms;if(M.useProgram(ci.program)&&(Li=!0,us=!0,ur=!0),H.id!==Y&&(Y=H.id,us=!0),St.needsLights){let Le=Fm(b.state.lightProbeGridArray,V);St.lightProbeGrid!==Le&&(St.lightProbeGrid=Le,us=!0)}if(Li||Q!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Me.setValue(F,"projectionMatrix",T.projectionMatrix),Me.setValue(F,"viewMatrix",T.matrixWorldInverse);let fs=Me.map.cameraPosition;fs!==void 0&&fs.setValue(F,Be.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&Me.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Me.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),Q!==T&&(Q=T,us=!0,ur=!0)}if(St.needsLights&&(Nn.state.sunShadowMap.length>0&&Me.setValue(F,"sunShadowMap",Nn.state.sunShadowMap,Z),Nn.state.directionalShadowMap.length>0&&Me.setValue(F,"directionalShadowMap",Nn.state.directionalShadowMap,Z),Nn.state.spotShadowMap.length>0&&Me.setValue(F,"spotShadowMap",Nn.state.spotShadowMap,Z),Nn.state.pointShadowMap.length>0&&Me.setValue(F,"pointShadowMap",Nn.state.pointShadowMap,Z)),V.isSkinnedMesh){Me.setOptional(F,V,"bindMatrix"),Me.setOptional(F,V,"bindMatrixInverse");let Le=V.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Me.setValue(F,"boneTexture",Le.boneTexture,Z))}V.isBatchedMesh&&(Me.setOptional(F,V,"batchingTexture"),Me.setValue(F,"batchingTexture",V._matricesTexture,Z),Me.setOptional(F,V,"batchingIdTexture"),Me.setValue(F,"batchingIdTexture",V._indirectTexture,Z),Me.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&Me.setValue(F,"batchingColorTexture",V._colorsTexture,Z));let ds=W.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&U.update(V,W,ci),(us||St.receiveShadow!==V.receiveShadow)&&(St.receiveShadow=V.receiveShadow,Me.setValue(F,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&L.environment!==null&&(Je.envMapIntensity.value=L.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=p1()),us){if(Me.setValue(F,"toneMappingExposure",I.toneMappingExposure),St.needsLights&&Om(Je,ur),yt&&H.fog===!0&&Ft.refreshFogUniforms(Je,yt),Ft.refreshMaterialUniforms(Je,H,tt,J,b.state.transmissionRenderTarget[T.id]),St.needsLights&&St.lightProbeGrid){let Le=St.lightProbeGrid;Je.probesSH.value=Le.texture,Je.probesMin.value.copy(Le.boundingBox.min),Je.probesMax.value.copy(Le.boundingBox.max),Je.probesResolution.value.copy(Le.resolution)}Kr.upload(F,df(St),Je,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Kr.upload(F,df(St),Je,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Me.setValue(F,"center",V.center),Me.setValue(F,"modelViewMatrix",V.modelViewMatrix),Me.setValue(F,"normalMatrix",V.normalMatrix),Me.setValue(F,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let Le=H.uniformsGroups;for(let fs=0,dr=Le.length;fs<dr;fs++){let mf=Le[fs];it.update(mf,ci),it.bind(mf,ci)}}return ci}function Om(T,L){T.ambientLightColor.needsUpdate=L,T.lightProbe.needsUpdate=L,T.sunLights.needsUpdate=L,T.sunLightShadows.needsUpdate=L,T.directionalLights.needsUpdate=L,T.directionalLightShadows.needsUpdate=L,T.pointLights.needsUpdate=L,T.pointLightShadows.needsUpdate=L,T.spotLights.needsUpdate=L,T.spotLightShadows.needsUpdate=L,T.rectAreaLights.needsUpdate=L,T.hemisphereLights.needsUpdate=L}function Bm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(T,L,W){let H=G.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),G.get(T.texture).__webglTexture=L,G.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,L){let W=G.get(T);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(T,L=0,W=0){et=T,q=L,X=W;let H=null,V=!1,yt=!1;if(T){let _t=G.get(T);if(_t.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(F.FRAMEBUFFER,_t.__webglFramebuffer),nt.copy(T.viewport),Ot.copy(T.scissor),Nt=T.scissorTest,M.viewport(nt),M.scissor(Ot),M.setScissorTest(Nt),Y=-1;return}else if(_t.__webglFramebuffer===void 0)Z.setupRenderTarget(T);else if(_t.__hasExternalTextures)Z.rebindTextures(T,G.get(T.texture).__webglTexture,G.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Kt=T.depthTexture;if(_t.__boundDepthTexture!==Kt){if(Kt!==null&&G.has(Kt)&&(T.width!==Kt.image.width||T.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(T)}}let Ct=T.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(yt=!0);let Ut=G.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[L])?H=Ut[L][W]:H=Ut[L],V=!0):T.samples>0&&Z.useMultisampledRTT(T)===!1?H=G.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?H=Ut[W]:H=Ut,nt.copy(T.viewport),Ot.copy(T.scissor),Nt=T.scissorTest}else nt.copy(wt).multiplyScalar(tt).floor(),Ot.copy(Qt).multiplyScalar(tt).floor(),Nt=en;if(W!==0&&(H=B),M.bindFramebuffer(F.FRAMEBUFFER,H)&&M.drawBuffers(T,H),M.viewport(nt),M.scissor(Ot),M.setScissorTest(Nt),V){let _t=G.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,_t.__webglTexture,W)}else if(yt){let _t=L;for(let Ct=0;Ct<T.textures.length;Ct++){let Ut=G.get(T.textures[Ct]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ct,Ut.__webglTexture,W,_t)}}else if(T!==null&&W!==0){let _t=G.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_t.__webglTexture,W)}Y=-1};function pf(T){let L=G.get(T);return(L.__readFormat!==T.format||L.__readType!==T.type)&&(L.__readFormat=T.format,L.__readType=T.type,L.__formatReadable=C.textureFormatReadable(T.format),L.__typeReadable=C.textureTypeReadable(T.type)),L}this.readRenderTargetPixels=function(T,L,W,H,V,yt,Tt,_t=0){if(!(T&&T.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=G.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){M.bindFramebuffer(F.FRAMEBUFFER,Ct);try{let Ut=T.textures[_t],Kt=Ut.format,ne=Ut.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t);let It=pf(Ut);if(It.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=T.width-H&&W>=0&&W<=T.height-V&&F.readPixels(L,W,H,V,dt.convert(Kt),dt.convert(ne),yt)}finally{let Ut=et!==null?G.get(et).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(T,L,W,H,V,yt,Tt,_t=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=G.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct)if(L>=0&&L<=T.width-H&&W>=0&&W<=T.height-V){M.bindFramebuffer(F.FRAMEBUFFER,Ct);let Ut=T.textures[_t],Kt=Ut.format,ne=Ut.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t);let It=pf(Ut);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,_e),F.bufferData(F.PIXEL_PACK_BUFFER,yt.byteLength,F.STREAM_READ),F.readPixels(L,W,H,V,dt.convert(Kt),dt.convert(ne),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let je=et!==null?G.get(et).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,je);let ze=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Rp(F,ze,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,_e),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,yt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(_e),F.deleteSync(ze),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,L=null,W=0){let H=Math.pow(2,-W),V=Math.floor(T.image.width*H),yt=Math.floor(T.image.height*H),Tt=L!==null?L.x:0,_t=L!==null?L.y:0;Z.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,Tt,_t,V,yt),M.unbindTexture()},this.copyTextureToTexture=function(T,L,W=null,H=null,V=0,yt=0){let Tt,_t,Ct,Ut,Kt,ne,It,_e,je,ze=T.isCompressedTexture?T.mipmaps[yt]:T.image;if(W!==null)Tt=W.max.x-W.min.x,_t=W.max.y-W.min.y,Ct=W.isBox3?W.max.z-W.min.z:1,Ut=W.min.x,Kt=W.min.y,ne=W.isBox3?W.min.z:0;else{let Je=Math.pow(2,-V);Tt=Math.floor(ze.width*Je),_t=Math.floor(ze.height*Je),T.isDataArrayTexture?Ct=ze.depth:T.isData3DTexture?Ct=Math.floor(ze.depth*Je):Ct=1,Ut=0,Kt=0,ne=0}H!==null?(It=H.x,_e=H.y,je=H.z):(It=0,_e=0,je=0);let Ee=dt.convert(L.format),wn=dt.convert(L.type),St;L.isData3DTexture?(Z.setTexture3D(L,0),St=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Z.setTexture2DArray(L,0),St=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(L,0),St=F.TEXTURE_2D),M.activeTexture(F.TEXTURE0),M.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),M.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),M.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);let Nn=M.getParameter(F.UNPACK_ROW_LENGTH),de=M.getParameter(F.UNPACK_IMAGE_HEIGHT),ci=M.getParameter(F.UNPACK_SKIP_PIXELS),Li=M.getParameter(F.UNPACK_SKIP_ROWS),us=M.getParameter(F.UNPACK_SKIP_IMAGES);M.pixelStorei(F.UNPACK_ROW_LENGTH,ze.width),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ze.height),M.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),M.pixelStorei(F.UNPACK_SKIP_ROWS,Kt),M.pixelStorei(F.UNPACK_SKIP_IMAGES,ne);let ur=T.isDataArrayTexture||T.isData3DTexture,Me=L.isDataArrayTexture||L.isData3DTexture;if(T.isDepthTexture){let Je=G.get(T),ds=G.get(L),Le=G.get(Je.__renderTarget),fs=G.get(ds.__renderTarget);M.bindFramebuffer(F.READ_FRAMEBUFFER,Le.__webglFramebuffer),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,fs.__webglFramebuffer);for(let dr=0;dr<Ct;dr++)ur&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(T).__webglTexture,V,ne+dr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(L).__webglTexture,yt,je+dr)),F.blitFramebuffer(Ut,Kt,Tt,_t,It,_e,Tt,_t,F.DEPTH_BUFFER_BIT,F.NEAREST);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||G.has(T)){let Je=G.get(T),ds=G.get(L);M.bindFramebuffer(F.READ_FRAMEBUFFER,D),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let Le=0;Le<Ct;Le++)ur?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Je.__webglTexture,V,ne+Le):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Je.__webglTexture,V),Me?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ds.__webglTexture,yt,je+Le):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ds.__webglTexture,yt),V!==0?F.blitFramebuffer(Ut,Kt,Tt,_t,It,_e,Tt,_t,F.COLOR_BUFFER_BIT,F.NEAREST):Me?F.copyTexSubImage3D(St,yt,It,_e,je+Le,Ut,Kt,Tt,_t):F.copyTexSubImage2D(St,yt,It,_e,Ut,Kt,Tt,_t);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Me?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(St,yt,It,_e,je,Tt,_t,Ct,Ee,wn,ze.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(St,yt,It,_e,je,Tt,_t,Ct,Ee,ze.data):F.texSubImage3D(St,yt,It,_e,je,Tt,_t,Ct,Ee,wn,ze):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,yt,It,_e,Tt,_t,Ee,wn,ze.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,yt,It,_e,ze.width,ze.height,Ee,ze.data):F.texSubImage2D(F.TEXTURE_2D,yt,It,_e,Tt,_t,Ee,wn,ze);M.pixelStorei(F.UNPACK_ROW_LENGTH,Nn),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de),M.pixelStorei(F.UNPACK_SKIP_PIXELS,ci),M.pixelStorei(F.UNPACK_SKIP_ROWS,Li),M.pixelStorei(F.UNPACK_SKIP_IMAGES,us),yt===0&&L.generateMipmaps&&F.generateMipmap(St),M.unbindTexture()},this.initRenderTarget=function(T){G.get(T).__webglFramebuffer===void 0&&Z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){q=0,X=0,et=null,M.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var w={time:0,hour:9,night:0,paused:!0,started:!1,vehicles:[],actors:[],helis:[],stats:{kills:0,cars:0,carjacks:0,deaths:0,missions:0},shake:0,settings:{shadows:!0,quality:1,volume:.8,sensitivity:1}};var uo=new Set,oo=new Set,ta=new Set,lo=new Set,co=0,ho=0,qc=0,At={locked:!1,dragLook:!1,down:i=>uo.has(i),pressed:i=>oo.has(i),mouse:i=>ta.has(i),mousePressed:i=>lo.has(i),takeMouse(){let i={dx:co,dy:ho};return co=0,ho=0,i},takeWheel(){let i=qc;return qc=0,i},endFrame(){oo.clear(),lo.clear()},reset(){uo.clear(),ta.clear(),oo.clear(),lo.clear(),co=ho=qc=0},_keys:uo,_pressed:oo,_mouse:ta,_mousePressed:lo,addLook(i,t){co+=i,ho+=t},onKey:null},m1=new Set(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"]);function c0(i){window.addEventListener("keydown",t=>{m1.has(t.code)&&t.preventDefault(),!t.repeat&&(uo.add(t.code),oo.add(t.code),At.onKey&&At.onKey(t.code,t))}),window.addEventListener("keyup",t=>{uo.delete(t.code)}),window.addEventListener("blur",()=>At.reset()),window.addEventListener("mousedown",t=>{!At.locked&&!At.dragLook||(ta.add(t.button),lo.add(t.button))}),window.addEventListener("mouseup",t=>{ta.delete(t.button)}),window.addEventListener("contextmenu",t=>t.preventDefault()),window.addEventListener("mousemove",t=>{(At.locked||At.dragLook)&&(co+=t.movementX||0,ho+=t.movementY||0)}),window.addEventListener("wheel",t=>{(At.locked||At.dragLook)&&(qc+=Math.sign(t.deltaY))},{passive:!0}),document.addEventListener("pointerlockchange",()=>{At.locked=document.pointerLockElement===i,At.locked||ta.clear(),At.onLockChange&&At.onLockChange(At.locked)})}var $t=i=>(i-6)*100,ri=i=>(i-6+.5)*100;var h0=["Vine St","Palm Ave","Ocean Blvd","Mission Rd","Sunset Blvd","Grand Ave","Rodeo Dr","Harbor Way","Canyon Rd","Bay St","Market St","Lincoln Ave","Coast Hwy"],u0=["1st St","2nd St","3rd St","Elm St","Cedar Ave","Maple Dr","Broadway","Olive St","Pine St","Willow Rd","Sierra Blvd","Aurora Ave","Pier Rd"];var Ye=Math.PI*2,at=(i,t,e)=>i<t?t:i>e?e:i,ea=(i,t,e)=>i+(t-i)*e;var Mn=(i,t,e,n)=>ea(i,t,1-Math.exp(-e*n)),Wi=i=>(i%=Ye,i>Math.PI?i-=Ye:i<-Math.PI&&(i+=Ye),i),g1=(i,t)=>Wi(t-i),fo=(i,t,e,n)=>i+g1(i,t)*(1-Math.exp(-e*n)),cd=(i,t)=>(i%t+t)%t,os=(i,t,e,n)=>(i-e)*(i-e)+(t-n)*(t-n);function kn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}var rt=(i,t)=>i+Math.random()*(t-i);var Cn=i=>i[Math.floor(Math.random()*i.length)],Hn=i=>Math.random()<i;function po(i){return"$"+Math.floor(i).toLocaleString("en-US")}var me=class{constructor(){this.pos=[],this.nor=[],this.uv=[],this.col=[],this.idx=[]}quad(t,e,n,s,r,a,o){let l=this.pos.length/3,c=e[0]-t[0],h=e[1]-t[1],d=e[2]-t[2],u=n[0]-t[0],f=n[1]-t[1],p=n[2]-t[2],x=h*p-d*f,g=d*u-c*p,m=c*f-h*u,v=x*r[0]+g*r[1]+m*r[2]<0,A=v?[t,s,n,e]:[t,e,n,s],y=v?[0,3,2,1]:[0,1,2,3];for(let S=0;S<4;S++){let b=A[S],R=y[S];this.pos.push(b[0],b[1],b[2]),this.nor.push(r[0],r[1],r[2]),this.col.push(o[0],o[1],o[2]),this.uv.push(a?a[R*2]:0,a?a[R*2+1]:0)}this.idx.push(l,l+1,l+2,l,l+2,l+3)}tri(t,e,n,s,r){let a=this.pos.length/3,o=e[0]-t[0],l=e[1]-t[1],c=e[2]-t[2],h=n[0]-t[0],d=n[1]-t[1],u=n[2]-t[2],p=(l*u-c*d)*s[0]+(c*h-o*u)*s[1]+(o*d-l*h)*s[2]<0?[t,n,e]:[t,e,n];for(let x of p)this.pos.push(x[0],x[1],x[2]),this.nor.push(s[0],s[1],s[2]),this.col.push(r[0],r[1],r[2]),this.uv.push(0,0);this.idx.push(a,a+1,a+2)}append(t,e=0){let n=this.pos.length/3;for(let s=0;s<t.pos.length;s+=3)this.pos.push(t.pos[s],t.pos[s+1]+e,t.pos[s+2]);for(let s of t.nor)this.nor.push(s);for(let s of t.col)this.col.push(s);for(let s of t.uv)this.uv.push(s);for(let s of t.idx)this.idx.push(s+n)}box(t,e,n,s,r,a,o=[1,1,1],l={}){let c=l.tile||12,h=l.top!==!1,d=!!l.bottom,u=l.sides!==!1,f=t-s/2,p=t+s/2,x=n-a/2,g=n+a/2,m=e+r,v=r/(l.tileV||c),A=s/c,y=a/c,S=l.vOffset||0;if(u&&(this.quad([p,e,g],[p,e,x],[p,m,x],[p,m,g],[1,0,0],[0,S,y,S,y,S+v,0,S+v],o),this.quad([f,e,x],[f,e,g],[f,m,g],[f,m,x],[-1,0,0],[0,S,y,S,y,S+v,0,S+v],o),this.quad([f,e,g],[p,e,g],[p,m,g],[f,m,g],[0,0,1],[0,S,A,S,A,S+v,0,S+v],o),this.quad([p,e,x],[f,e,x],[f,m,x],[p,m,x],[0,0,-1],[0,S,A,S,A,S+v,0,S+v],o)),h){let b=l.topTile||c;this.quad([f,m,g],[p,m,g],[p,m,x],[f,m,x],[0,1,0],[0,0,s/b,0,s/b,a/b,0,a/b],l.topCol||o)}d&&this.quad([f,e,x],[p,e,x],[p,e,g],[f,e,g],[0,-1,0],[0,0,1,0,1,1,0,1],o)}boxRot(t,e,n,s,r,a,o,l=[1,1,1],c={}){let h=this.pos.length/3;this.box(0,e,0,s,r,a,l,c);let d=Math.sin(o),u=Math.cos(o);for(let f=h;f<this.pos.length/3;f++){let p=this.pos[f*3],x=this.pos[f*3+2];this.pos[f*3]=t+p*u+x*d,this.pos[f*3+2]=n-p*d+x*u;let g=this.nor[f*3],m=this.nor[f*3+2];this.nor[f*3]=g*u+m*d,this.nor[f*3+2]=-g*d+m*u}}gable(t,e,n,s,r,a,o,l,c=.35){let h=t-s/2-c,d=t+s/2+c,u=n-r/2-c,f=n+r/2+c,p=e+a;if(o==="x"){let x=[0,r/2,a],g=Math.hypot(x[1],x[2]);this.quad([h,e,f],[d,e,f],[d,p,n],[h,p,n],[0,x[1]/g,x[2]/g],null,l),this.quad([d,e,u],[h,e,u],[h,p,n],[d,p,n],[0,x[1]/g,-x[2]/g],null,l),this.tri([d-c,e,f-c],[d-c,e,u+c],[d-c,p,n],[1,0,0],l),this.tri([h+c,e,u+c],[h+c,e,f-c],[h+c,p,n],[-1,0,0],l)}else{let x=[s/2,a],g=Math.hypot(x[0],x[1]);this.quad([d,e,f],[d,e,u],[t,p,u],[t,p,f],[x[1]/g,x[0]/g,0],null,l),this.quad([h,e,u],[h,e,f],[t,p,f],[t,p,u],[-x[1]/g,x[0]/g,0],null,l),this.tri([h+c,e,f-c],[d-c,e,f-c],[t,p,f-c],[0,0,1],l),this.tri([d-c,e,u+c],[h+c,e,u+c],[t,p,u+c],[0,0,-1],l)}}wedge(t,e,n,s,r,a,o,l){let h=(d,u,f)=>[d,u,f];if(r==="x"){let d=a>0?t:n,u=a>0?n:t,f=Math.hypot(o,n-t),p=-a*o/f,x=(n-t)/f;this.quad(h(d,0,s),h(u,o,s),h(u,o,e),h(d,0,e),[p,x,0],[0,0,1,0,1,1,0,1],l),this.tri(h(d,0,s),h(u,0,s),h(u,o,s),[0,0,1],l),this.tri(h(u,0,e),h(d,0,e),h(u,o,e),[0,0,-1],l),this.quad(h(u,0,s),h(u,0,e),h(u,o,e),h(u,o,s),[a,0,0],[0,0,1,0,1,1,0,1],l)}else{let d=a>0?e:s,u=a>0?s:e,f=Math.hypot(o,s-e),p=-a*o/f,x=(s-e)/f;this.quad(h(t,0,d),h(n,0,d),h(n,o,u),h(t,o,u),[0,x,p],[0,0,1,0,1,1,0,1],l),this.tri(h(n,0,d),h(n,0,u),h(n,o,u),[1,0,0],l),this.tri(h(t,0,u),h(t,0,d),h(t,o,u),[-1,0,0],l),this.quad(h(n,0,u),h(t,0,u),h(t,o,u),h(n,o,u),[0,0,a],[0,0,1,0,1,1,0,1],l)}}cylinder(t,e,n,s,r,a,o,l=!0,c=s){let h=e+r;for(let d=0;d<a;d++){let u=d/a*Math.PI*2,f=(d+1)/a*Math.PI*2,p=(u+f)/2,x=[Math.cos(p),0,Math.sin(p)];this.quad([t+Math.cos(u)*s,e,n+Math.sin(u)*s],[t+Math.cos(f)*s,e,n+Math.sin(f)*s],[t+Math.cos(f)*c,h,n+Math.sin(f)*c],[t+Math.cos(u)*c,h,n+Math.sin(u)*c],x,null,o),l&&this.tri([t,h,n],[t+Math.cos(u)*c,h,n+Math.sin(u)*c],[t+Math.cos(f)*c,h,n+Math.sin(f)*c],[0,1,0],o)}}get empty(){return this.pos.length===0}build(){let t=new Ne;return t.setAttribute("position",new ce(this.pos,3)),t.setAttribute("normal",new ce(this.nor,3)),t.setAttribute("uv",new ce(this.uv,2)),t.setAttribute("color",new ce(this.col,3)),t.setIndex(this.pos.length/3>65535?new Js(this.idx,1):new Zs(this.idx,1)),t.computeBoundingSphere(),t}mesh(t,e={}){let n=new Pt(this.build(),t);return n.castShadow=e.cast!==!1,n.receiveShadow=e.receive!==!1,n.matrixAutoUpdate=!1,n.updateMatrix(),n}};var d0=4;function f0(i){d0=i}function Vn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Gn(i,{repeat:t=!0,srgb:e=!0}={}){let n=new Oa(i);return t&&(n.wrapS=n.wrapT=Dr),e&&(n.colorSpace=Fn),n.anisotropy=d0,n}function ls(i,t,e,n,s,r=4e3){for(let a=0;a<r;a++){let o=(s()-.5)*n;i.fillStyle=o>0?`rgba(255,255,255,${o})`:`rgba(0,0,0,${-o})`,i.fillRect(s()*t,s()*e,1+s()*2,1+s()*2)}}var In=(i,t,e)=>`rgb(${i|0},${t|0},${e|0})`,Zt=80;function p0(i,t=1){let e=kn(t*977+i.length*31),[n,s]=Vn(Zt*3,Zt*3),[r,a]=Vn(Zt*3,Zt*3);a.fillStyle="#000",a.fillRect(0,0,n.width,n.height);let o=["#ffe3a0","#ffd27a","#fff2cf","#cfe6ff","#ffc78a"],l=(c,h,d,u,f=.55)=>{e()<f&&(a.fillStyle=o[e()*o.length|0],a.fillRect(c,h,d,u))};if(i==="glass"){let c=s.createLinearGradient(0,0,0,n.height);c.addColorStop(0,"#41566b"),c.addColorStop(1,"#2d3f52"),s.fillStyle=c,s.fillRect(0,0,n.width,n.height);for(let h=0;h<3;h++)for(let d=0;d<3;d++){let u=e(),f=s.createLinearGradient(0,d*Zt,0,d*Zt+Zt);f.addColorStop(0,In(70+u*40,120+u*50,160+u*50)),f.addColorStop(1,In(40+u*30,80+u*40,120+u*40)),s.fillStyle=f,s.fillRect(h*Zt+4,d*Zt+5,Zt-8,Zt-10),s.fillStyle="rgba(255,255,255,0.10)",s.beginPath(),s.moveTo(h*Zt+4,d*Zt+5),s.lineTo(h*Zt+40,d*Zt+5),s.lineTo(h*Zt+4,d*Zt+45),s.fill(),l(h*Zt+4,d*Zt+5,Zt-8,Zt-10,.5)}}else if(i==="office"){s.fillStyle=In(196,190,178),s.fillRect(0,0,n.width,n.height),ls(s,n.width,n.height,.12,e,3e3);for(let c=0;c<3;c++)for(let h=0;h<3;h++)s.fillStyle="#2b3846",s.fillRect(c*Zt+6,h*Zt+14,Zt-12,44),s.fillStyle="rgba(140,180,210,0.35)",s.fillRect(c*Zt+6,h*Zt+14,Zt-12,14),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(c*Zt,h*Zt+60,Zt,3),l(c*Zt+6,h*Zt+14,Zt-12,44,.5)}else if(i==="brick"){s.fillStyle=In(140,78,62),s.fillRect(0,0,n.width,n.height);for(let c=0;c<30;c++)for(let h=0;h<8;h++){let d=e()*30-15;s.fillStyle=In(146+d,82+d*.6,64+d*.5),s.fillRect(h*32+(c%2?16:0)-16,c*8,30,6)}for(let c=0;c<3;c++)for(let h=0;h<3;h++){let d=c*Zt+18,u=h*Zt+12;s.fillStyle="#e9e4d6",s.fillRect(d-3,u-3,50,62),s.fillStyle="#24303c",s.fillRect(d,u,44,56),s.fillStyle="#e9e4d6",s.fillRect(d+21,u,2,56),s.fillRect(d,u+26,44,2),l(d,u,44,56,.5)}}else if(i==="apartment"){let c=[[226,210,182],[206,218,224],[230,196,176],[214,224,200]][e()*4|0];s.fillStyle=In(...c),s.fillRect(0,0,n.width,n.height),ls(s,n.width,n.height,.14,e,3500);for(let h=0;h<3;h++)for(let d=0;d<3;d++){let u=h*Zt+20,f=d*Zt+10;s.fillStyle="#3a4756",s.fillRect(u,f,40,46),s.fillStyle="rgba(255,255,255,0.18)",s.fillRect(u,f,40,12),s.fillStyle="#9b7b5c",s.fillRect(u-5,f+46,50,5),s.fillStyle="rgba(0,0,0,0.18)",s.fillRect(u-5,f+51,50,3),l(u,f,40,46,.55)}}else if(i==="dark"){s.fillStyle=In(92,98,110),s.fillRect(0,0,n.width,n.height),ls(s,n.width,n.height,.1,e,2500);for(let c=0;c<6;c++)for(let h=0;h<3;h++){let d=c*(Zt/2)+8,u=h*Zt+8;s.fillStyle="#1b2530",s.fillRect(d,u,24,62),s.fillStyle="rgba(120,160,200,0.25)",s.fillRect(d,u,24,16),l(d,u,24,62,.5)}}else{let c=[[240,236,226],[232,226,206],[226,236,240],[244,226,214]][e()*4|0];s.fillStyle=In(...c),s.fillRect(0,0,n.width,n.height),ls(s,n.width,n.height,.16,e,4e3);for(let h=0;h<3;h++){let d=h*Zt+16;s.fillStyle="#efe9dc",s.fillRect(d-3,17,54,52),s.fillStyle="#2e3c4a",s.fillRect(d,20,48,46),s.fillStyle="#efe9dc",s.fillRect(d+23,20,2,46),l(d,20,48,46,.4),s.fillStyle="#efe9dc",s.fillRect(d-3,137,54,52),s.fillStyle="#2e3c4a",s.fillRect(d,140,48,46),l(d,140,48,46,.4)}s.fillStyle="#6b4a34",s.fillRect(Zt*1+20,2*Zt+10,40,70),s.fillStyle="#d9b070",s.fillRect(Zt*1+52,2*Zt+46,4,4)}return{map:Gn(n),emissive:Gn(r)}}function m0(){let i=kn(7),[t,e]=Vn(256,256);return e.fillStyle=In(150,148,142),e.fillRect(0,0,256,256),ls(e,256,256,.18,i,4e3),e.strokeStyle="rgba(0,0,0,0.28)",e.lineWidth=2,e.strokeRect(1,1,254,254),e.beginPath(),e.moveTo(128,0),e.lineTo(128,256),e.moveTo(0,128),e.lineTo(256,128),e.stroke(),Gn(t)}function g0(){let i=kn(11),[t,e]=Vn(256,256);e.fillStyle=In(74,122,58),e.fillRect(0,0,256,256);for(let n=0;n<3500;n++){let s=(i()-.5)*40;e.fillStyle=In(74+s,122+s*1.2,58+s*.5),e.fillRect(i()*256,i()*256,2,4)}return Gn(t)}function x0(){let i=kn(13),[t,e]=Vn(256,256);return e.fillStyle=In(214,196,150),e.fillRect(0,0,256,256),ls(e,256,256,.22,i,5e3),Gn(t)}function _0(){let i=kn(17),[t,e]=Vn(128,128);return e.fillStyle=In(88,90,94),e.fillRect(0,0,128,128),ls(e,128,128,.25,i,1500),e.strokeStyle="rgba(0,0,0,0.25)",e.strokeRect(0,0,128,128),Gn(t)}function y0(){let i=kn(19),[t,e]=Vn(256,256);e.fillStyle=In(30,92,140),e.fillRect(0,0,256,256);for(let n=0;n<260;n++){e.strokeStyle=`rgba(255,255,255,${.03+i()*.07})`,e.lineWidth=1+i()*2;let s=i()*256,r=i()*256,a=8+i()*26;e.beginPath(),e.moveTo(s,r),e.quadraticCurveTo(s+a/2,r-3,s+a,r),e.stroke()}return Gn(t)}function v0(){let i=kn(23),[t,e]=Vn(512,256);e.fillStyle=In(52,54,59),e.fillRect(0,0,512,256),ls(e,512,256,.16,i,9e3),e.fillStyle="rgba(0,0,0,0.18)",e.fillRect(98,0,60,256),e.fillRect(354,0,60,256),e.strokeStyle="rgba(0,0,0,0.35)",e.lineWidth=1;for(let n=0;n<6;n++){e.beginPath();let s=i()*512,r=i()*256;e.moveTo(s,r);for(let a=0;a<5;a++)s+=(i()-.5)*30,r+=(i()-.5)*30,e.lineTo(s,r);e.stroke()}return e.fillStyle="#d8b62b",e.fillRect(248,0,4,256),e.fillRect(260,0,4,256),e.fillStyle="rgba(225,225,225,0.9)",e.fillRect(100,0,5,256),e.fillRect(408,0,5,256),Gn(t)}function M0(){let[i,t]=Vn(512,128);t.clearRect(0,0,512,128),t.fillStyle="rgba(232,232,232,0.92)";for(let e=0;e<16;e++)t.fillRect(e*32+6,0,18,128);return Gn(i,{repeat:!1})}function ud(){let i=kn(29),[t,e]=Vn(128,128);return e.fillStyle=In(52,54,59),e.fillRect(0,0,128,128),ls(e,128,128,.18,i,2500),Gn(t)}function Yc(){let[i,t]=Vn(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Gn(i,{repeat:!1})}function b0(){let[i,t]=Vn(64,128),e=t.createLinearGradient(0,128,0,0);return e.addColorStop(0,"rgba(255,240,200,0.55)"),e.addColorStop(1,"rgba(255,240,200,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(22,128),t.lineTo(42,128),t.lineTo(64,0),t.lineTo(0,0),t.closePath(),t.fill(),Gn(i,{repeat:!1})}function Zc(i){let t=kn(i),[e,n]=Vn(256,128);for(let s=0;s<26;s++){let r=40+t()*176,a=50+t()*40,o=16+t()*26,l=n.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,"rgba(255,255,255,0.55)"),l.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=l,n.beginPath(),n.arc(r,a,o,0,7),n.fill()}return Gn(e,{repeat:!1})}var hd=[["BITE BARN","#e8402c","#fff2c8","BURGERS & SHAKES"],["FIZZ-O","#1e8a4e","#f6ffe8","TASTE THE BUBBLES"],["NOVA TECH","#243a8c","#c8e4ff","THE FUTURE, NOW"],["VINE MOTORS","#111","#ffcd3a","DRIVE YOUR DREAM"],["PALM AIR","#0aa6b7","#ffffff","FLY THE COAST"],["CLUCK SHACK","#f2a61b","#3a1608","FRIED. FRESH. FAST."],["BYTES BANK","#6a2fa8","#f2e6ff","YOUR MONEY, SAFE"],["SUNNY COLA","#d63a3a","#ffffff","ICE COLD"]];function dd(i){let[t,e,n,s]=hd[i%hd.length],[r,a]=Vn(512,256);a.fillStyle=e,a.fillRect(0,0,512,256),a.fillStyle="rgba(255,255,255,0.08)";for(let o=0;o<8;o++)a.fillRect(o*70-40,0,30,256);return a.fillStyle=n,a.textAlign="center",a.textBaseline="middle",a.font='bold 84px Impact, "Arial Black", sans-serif',a.fillText(t,256,108),a.font="bold 30px Arial, sans-serif",a.fillText(s,256,190),a.strokeStyle=n,a.lineWidth=8,a.strokeRect(8,8,496,240),Gn(r,{repeat:!1})}var S0=hd.length;function Jc(i,t,e,n){let[s,r]=Vn(512,128);return r.fillStyle=t,r.fillRect(0,0,512,128),r.fillStyle=e,r.textAlign="center",r.textBaseline="middle",r.font='bold 64px Impact, "Arial Black", sans-serif',r.fillText(i,256,n?52:66),n&&(r.font="bold 26px Arial",r.fillText(n,256,100)),r.strokeStyle=e,r.lineWidth=6,r.strokeRect(5,5,502,118),Gn(s,{repeat:!1})}var Ai=25,go=new Map,w0=1,_1=[],fd=[],$c=(i,t)=>(i+2e3)*5e3+(t+2e3);function T0(i,t,e,n,s){let r=Math.floor(t/Ai),a=Math.floor(n/Ai),o=Math.floor(e/Ai),l=Math.floor(s/Ai);for(let c=r;c<=a;c++)for(let h=o;h<=l;h++){let d=$c(c,h),u=go.get(d);u||(u=[],go.set(d,u)),u.push(i)}_1.push(i)}function Ds(i,t,e,n,s,r){let a={t:0,minX:i,maxX:e,minZ:t,maxZ:n,h:s,tag:r,stamp:0};return T0(a,i,t,e,n),a}function sr(i,t,e,n,s){let r={t:1,x:i,z:t,r:e,h:n,tag:s,stamp:0};return T0(r,i-e,t-e,i+e,t+e),r}function E0(i,t,e,n){fd.length=0;let s=++w0,r=Math.floor(i/Ai),a=Math.floor(e/Ai),o=Math.floor(t/Ai),l=Math.floor(n/Ai);for(let c=r;c<=a;c++)for(let h=o;h<=l;h++){let d=go.get($c(c,h));if(d)for(let u=0;u<d.length;u++){let f=d[u];f.stamp!==s&&(f.stamp=s,fd.push(f))}}return fd}var md=[];function A0(i,t,e,n,s,r,a){md.push({minX:i,minZ:t,maxX:e,maxZ:n,axis:s,sign:r,h:a})}function y1(i,t){if(Math.abs(i)>=600||Math.abs(t)>=600)return!1;let e=cd(i+600,100),n=cd(t+600,100);return e>20/2&&e<100-20/2&&n>20/2&&n<100-20/2}function Wn(i,t){let e=y1(i,t)?.16:0;for(let n=0;n<md.length;n++){let s=md[n];if(i<s.minX||i>s.maxX||t<s.minZ||t>s.maxZ)continue;let r;s.axis==="x"?r=s.sign>0?(i-s.minX)/(s.maxX-s.minX):(s.maxX-i)/(s.maxX-s.minX):r=s.sign>0?(t-s.minZ)/(s.maxZ-s.minZ):(s.maxZ-t)/(s.maxZ-s.minZ),e=Math.max(e,.16+s.h*r)}return e}function na(i,t){let e=!1;for(let n=0;n<2;n++){let s=E0(i.x-t,i.z-t,i.x+t,i.z+t);for(let r=0;r<s.length;r++){let a=s[r];if(a.t===0){let o=at(i.x,a.minX,a.maxX),l=at(i.z,a.minZ,a.maxZ),c=i.x-o,h=i.z-l,d=c*c+h*h;if(d<t*t){if(d>1e-8){let u=Math.sqrt(d),f=(t-u)/u;i.x+=c*f,i.z+=h*f}else{let u=i.x-a.minX,f=a.maxX-i.x,p=i.z-a.minZ,x=a.maxZ-i.z,g=Math.min(u,f,p,x);g===u?i.x=a.minX-t:g===f?i.x=a.maxX+t:g===p?i.z=a.minZ-t:i.z=a.maxZ+t}e=!0}}else{let o=i.x-a.x,l=i.z-a.z,c=t+a.r,h=o*o+l*l;if(h<c*c){let d=Math.sqrt(h)||1e-4,u=(c-d)/d;i.x+=o*u,i.z+=l*u,e=!0}}}}return e}function v1(i,t){let e=-i.fz,n=i.fx;return t[0]=i.x+i.fx*i.hl+e*i.hw,t[1]=i.z+i.fz*i.hl+n*i.hw,t[2]=i.x+i.fx*i.hl-e*i.hw,t[3]=i.z+i.fz*i.hl-n*i.hw,t[4]=i.x-i.fx*i.hl-e*i.hw,t[5]=i.z-i.fz*i.hl-n*i.hw,t[6]=i.x-i.fx*i.hl+e*i.hw,t[7]=i.z-i.fz*i.hl+n*i.hw,t}var mo=new Float32Array(8);function R0(i,t,e,n){v1(i,mo);let s=1/0,r=0;for(let a=0;a<4;a++){let o=mo[a*2]*t+mo[a*2+1]*e;o<s&&(s=o,r=a)}n.px=mo[r*2],n.pz=mo[r*2+1]}function M1(i,t,e){let n=-i.fz,s=i.fx,r=(t.minX+t.maxX)/2,a=(t.minZ+t.maxZ)/2,o=(t.maxX-t.minX)/2,l=(t.maxZ-t.minZ)/2,c=i.x-r,h=i.z-a,d=1/0,u=0,f=0,p=Math.abs(i.fx)*i.hl+Math.abs(n)*i.hw,x=p+o-Math.abs(c);if(x<=0||(x<d&&(d=x,u=c>=0?1:-1,f=0),p=Math.abs(i.fz)*i.hl+Math.abs(s)*i.hw,x=p+l-Math.abs(h),x<=0))return!1;x<d&&(d=x,u=0,f=h>=0?1:-1);let g=c*i.fx+h*i.fz;if(p=o*Math.abs(i.fx)+l*Math.abs(i.fz),x=i.hl+p-Math.abs(g),x<=0)return!1;if(x<d){d=x;let m=g>=0?1:-1;u=i.fx*m,f=i.fz*m}if(g=c*n+h*s,p=o*Math.abs(n)+l*Math.abs(s),x=i.hw+p-Math.abs(g),x<=0)return!1;if(x<d){d=x;let m=g>=0?1:-1;u=n*m,f=s*m}return e.nx=u,e.nz=f,e.depth=d,R0(i,u,f,e),!0}function xo(i,t,e){let n=-i.fz,s=i.fx,r=t.x-i.x,a=t.z-i.z,o=at(r*i.fx+a*i.fz,-i.hl,i.hl),l=at(r*n+a*s,-i.hw,i.hw),c=i.x+i.fx*o+n*l,h=i.z+i.fz*o+s*l,d=c-t.x,u=h-t.z,f=d*d+u*u;if(f>=t.r*t.r)return!1;let p=Math.sqrt(f);return p<1e-5&&(d=i.x-t.x,u=i.z-t.z,p=Math.hypot(d,u)||1),e.nx=d/p,e.nz=u/p,e.depth=t.r-p,e.px=c,e.pz=h,!0}function C0(i,t,e){let n=[i.fx,i.fz,-i.fz,i.fx],s=[t.fx,t.fz,-t.fz,t.fx],r=i.x-t.x,a=i.z-t.z,o=1/0,l=0,c=0;for(let h=0;h<4;h++){let d=h<2?n:s,u=d[h%2*2],f=d[h%2*2+1],p=i.hl*Math.abs(u*i.fx+f*i.fz)+i.hw*Math.abs(u*-i.fz+f*i.fx),x=t.hl*Math.abs(u*t.fx+f*t.fz)+t.hw*Math.abs(u*-t.fz+f*t.fx),g=r*u+a*f,m=p+x-Math.abs(g);if(m<=0)return!1;if(m<o){o=m;let v=g>=0?1:-1;l=u*v,c=f*v}}return e.nx=l,e.nz=c,e.depth=o,R0(i,l,c,e),!0}var pd={nx:0,nz:0,depth:0,px:0,pz:0};function I0(i,t){let e=i.hl+i.hw,n=E0(i.x-e,i.z-e,i.x+e,i.z+e);for(let s=0;s<n.length;s++){let r=n[s];(r.t===0?M1(i,r,pd):xo(i,r,pd))&&t(pd,r)}}function gd(i,t,e,n,s,r,a,o,l){let c=0,h=o,d=0,u=0,f=0,p=[[a.minX,a.maxX,i,n,0],[0,a.h,t,s,1],[a.minZ,a.maxZ,e,r,2]];for(let x=0;x<3;x++){let[g,m,v,A,y]=p[x];if(Math.abs(A)<1e-9){if(v<g||v>m)return-1;continue}let S=(g-v)/A,b=(m-v)/A,R=-1;if(S>b){let _=S;S=b,b=_,R=1}if(S>c&&(c=S,d=u=f=0,y===0?d=R:y===1?u=R:f=R),b<h&&(h=b),c>h)return-1}return l&&(l.nx=d,l.ny=u,l.nz=f),c}function Kc(i,t,e,n,s,r,a,o,l,c,h,d){let u=i-a,f=e-o,p=n*n+r*r;if(p<1e-9)return-1;let x=2*(u*n+f*r),g=u*u+f*f-l*l,m=x*x-4*p*g;if(m<0)return-1;let v=(-x-Math.sqrt(m))/(2*p);if(v<0||v>h)return g<0?0:-1;let A=t+s*v;if(A<0||A>c)return-1;if(d){let y=i+n*v-a,S=e+r*v-o,b=Math.hypot(y,S)||1;d.nx=y/b,d.ny=0,d.nz=S/b}return v}var Xi={nx:0,ny:0,nz:0};function _o(i,t,e,n,s,r,a,o=!1){let l=Math.hypot(n,r),c=Math.max(1,Math.ceil(l*a/(Ai*.8))),h=++w0,d=a,u=null,f=null,p=0;for(let x=0;x<=c;x++){let g=x/c*a,m=i+n*g,v=e+r*g,A=Math.floor(m/Ai),y=Math.floor(v/Ai);for(let b=A-0;b<=A;b++){let R=go.get($c(b,y));if(R)for(let _=0;_<R.length;_++){let E=R[_];if(E.stamp===h||(E.stamp=h,p++,o&&E.t===1))continue;let I=E.t===0?gd(i,t,e,n,s,r,E,d,Xi):Kc(i,t,e,n,s,r,E.x,E.z,E.r,E.h,d,Xi);I>=0&&I<d&&(d=I,u=E,f={nx:Xi.nx,ny:Xi.ny,nz:Xi.nz})}}let S=[[1,0],[-1,0],[0,1],[0,-1]];for(let b=0;b<4;b++){let R=go.get($c(A+S[b][0],y+S[b][1]));if(R)for(let _=0;_<R.length;_++){let E=R[_];if(E.stamp===h||(E.stamp=h,o&&E.t===1))continue;let I=E.t===0?gd(i,t,e,n,s,r,E,d,Xi):Kc(i,t,e,n,s,r,E.x,E.z,E.r,E.h,d,Xi);I>=0&&I<d&&(d=I,u=E,f={nx:Xi.nx,ny:Xi.ny,nz:Xi.nz})}}}if(s<-1e-6){let x=(0-t)/s;if(x>0&&x<d)return{t:x,nx:0,ny:1,nz:0,c:null,ground:!0}}return u?{t:d,nx:f.nx,ny:f.ny,nz:f.nz,c:u}:null}function qi(i,t,e,n,s,r){let a=n-i,o=s-t,l=r-e,c=Math.hypot(a,o,l);if(c<.01)return!0;let h=_o(i,t,e,a/c,o/c,l/c,c-.2);return!h||h.ground}function P0(i,t,e,n,s,r,a,o,l,c){let h=-a.fz,d=a.fx,u=(i-a.x)*h+(e-a.z)*d,f=(i-a.x)*a.fx+(e-a.z)*a.fz,p=n*h+r*d,x=n*a.fx+r*a.fz;return gd(u,t,f,p,s,x,{minX:-a.hw,maxX:a.hw,minZ:-a.hl,maxZ:a.hl,h:l},c,null)}var fe=72,L0=2.4,F0={red:[1,.1,.08],yellow:[1,.75,.1],green:[.1,1,.35]},S1={"5,5":"plaza","6,3":"police","5,8":"hospital","2,6":"shop","10,10":"stunt","3,8":"park","8,3":"park","1,3":"park","9,8":"park","9,0":"industrial","10,0":"industrial","11,0":"industrial","10,1":"industrial","11,1":"industrial","0,11":"industrial","1,11":"industrial"},xd={top:new pt(3108802),hor:new pt(12179184),sun:new pt(16773590),hs:new pt(12901631),hg:new pt(7762010),fog:new pt(12178152)},_d={top:new pt(3425658),hor:new pt(15899230),sun:new pt(16751186),hs:new pt(11113384),hg:new pt(5522495),fog:new pt(14197630)},jc={top:new pt(264212),hor:new pt(1318198),sun:new pt(9414876),hs:new pt(3491962),hg:new pt(1185055),fog:new pt(659746)},yo=(i,t,e)=>{let n=at((i-t)/(e-t),0,1);return n*n*(3-2*n)},st={blocks:[],pois:{},buildRects:[],parkRects:[],sunDir:new P(0,1,0),moonDir:new P(0,-1,0),sun:null,hemi:null,sky:null,scene:null,lightPhase:0,mapCanvas:null,headlightTex:null,glowTex:null,animated:[]},xt=null;function Ns(i){return Math.floor((i+600)/100)}function z0(i,t){let e=at(Math.round(i/100+12/2),0,12),n=at(Math.round(t/100+12/2),0,12),s=Math.abs(i-$t(e)),r=Math.abs(t-$t(n));return s<r?h0[e]:u0[n]}var vo={downtown:"Downtown",N:"Northgate",S:"Southshore",E:"Eastside",W:"Westwood",beach:"Palm Beach",harbor:"Harbor District",outerN:"Vine Heights",outerS:"Sunset Flats",outerE:"Bayview",outerW:"Canyon Park"};function O0(i,t){if(Math.abs(i)>615||Math.abs(t)>615)return vo.beach;let e=Ns(i),n=Ns(t);if(st.blocks[at(e,0,11)][at(n,0,11)].type==="industrial")return vo.harbor;let r=Math.max(Math.abs(e-5.5),Math.abs(n-5.5));if(r<=1.5)return vo.downtown;let a=e-5.5,o=n-5.5,l=Math.abs(a)>Math.abs(o)?a>0?"E":"W":o>0?"S":"N";return r<=3.5?vo[l]:vo["outer"+l]}var w1=[-1,1,1,-1],T1=[-1,-1,1,1],cs=(i,t,e)=>(i*12+t)*4+e;function ln(i,t={}){let e=i%4,n=(i-e)/4,s=n%12,r=(n-s)/12;return t.x=ri(r)+w1[e]*(80/2-L0),t.z=ri(s)+T1[e]*(80/2-L0),t}function Qc(i){let t=i%4,e=(i-t)/4,n=e%12,s=(e-n)/12,r=[cs(s,n,(t+1)%4),cs(s,n,(t+3)%4)],a=(o,l,c)=>{o>=0&&l>=0&&o<12&&l<12&&r.push(cs(o,l,c))};return(t===1||t===2)&&a(s+1,n,t===1?0:3),(t===0||t===3)&&a(s-1,n,t===0?1:2),(t===2||t===3)&&a(s,n+1,t===2?1:0),(t===0||t===1)&&a(s,n-1,t===0?3:2),r}var rr=576;function wd(i){let t=st.lightPhase;return i==="x"?t<12?"green":t<14?"yellow":"red":t>=15&&t<27?"green":t>=27&&t<29?"yellow":"red"}function B0(i,t){st.scene=i,f0(Math.min(8,t.capabilities.getMaxAnisotropy())),xt={rng:kn(20240229),facade:{},facadeMat:{},roof:new me,concrete:new me,grass:new me,asphalt:new me,props:new me,lampPole:new me,lampBulb:new me,tlPole:new me,tlLamp:{},water:new me,trees:[],lamps:[],meshes:[]};for(let e of["glass","office","brick","apartment","dark","house"]){xt.facade[e]=new me;let n=p0(e,e.length+3);xt.facadeMat[e]=new kt({map:n.map,emissiveMap:n.emissive,emissive:16777215,emissiveIntensity:0,vertexColors:!0,roughness:e==="glass"?.35:.88,metalness:e==="glass"?.4:.04})}st.glowTex=Yc(),st.headlightTex=b0(),E1(i),A1(i),R1(i),C1(i),D1(),F1(i),z1(i),O1(i),B1(),st.update(0,null,null)}function ia(i,t=.82,e=1){let n=t+i()*(e-t);return[n,n,n*(.97+i()*.05)]}function E1(i){st.hemi=new Wa(12376319,7037776,.9),i.add(st.hemi);let t=new Za(16773848,3);t.castShadow=!0,t.shadow.mapSize.set(2048,2048);let e=t.shadow.camera;e.left=-85,e.right=85,e.top=85,e.bottom=-85,e.near=10,e.far=700,t.shadow.bias=-4e-4,t.shadow.normalBias=.35,i.add(t),i.add(t.target),st.sun=t}function A1(i){let t=new sn({uniforms:{top:{value:new pt},horizon:{value:new pt},bottom:{value:new pt},sunDir:{value:new P},sunColor:{value:new pt},moonDir:{value:new P},starVis:{value:0}},vertexShader:`varying vec3 vDir;
      void main(){ vDir = normalize(position); mat4 v = viewMatrix; v[3] = vec4(0.,0.,0.,1.);
        vec4 p = projectionMatrix * v * vec4(position, 1.); gl_Position = p.xyww; }`,fragmentShader:`uniform vec3 top, horizon, bottom, sunDir, sunColor, moonDir; uniform float starVis; varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir); float h = d.y;
        vec3 col = mix(horizon, top, pow(clamp(h, 0., 1.), 0.5));
        col = mix(col, bottom, smoothstep(0.0, -0.25, h));
        float sd = max(dot(d, sunDir), 0.);
        col += sunColor * (pow(sd, 6.) * 0.22 + pow(sd, 96.) * 0.5);
        col += sunColor * smoothstep(0.99935, 0.99975, sd) * 3.0;
        float md = max(dot(d, moonDir), 0.);
        col += vec3(0.82, 0.88, 1.0) * smoothstep(0.99955, 0.9998, md) * 1.6 * starVis;
        col += vec3(0.4, 0.5, 0.9) * pow(md, 48.) * 0.12 * starVis;
        gl_FragColor = vec4(col, 1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,side:rn,depthWrite:!1,fog:!1}),e=new Pt(new yn(1,32,16),t);e.frustumCulled=!1,e.renderOrder=-10,i.add(e),st.sky=e;let n=[],s=kn(5);for(let l=0;l<1400;l++){let c=s()*2-1,h=s()*Ye,d=Math.sqrt(1-c*c);if(c<-.05){l--;continue}n.push(Math.cos(h)*d*1800,c*1800,Math.sin(h)*d*1800)}let r=new Ne;r.setAttribute("position",new ce(n,3));let a=new $s(r,new Gr({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));a.frustumCulled=!1,a.renderOrder=-9,i.add(a),st.stars=a,st.clouds=[];let o=[Zc(1),Zc(2),Zc(3)];for(let l=0;l<26;l++){let c=new rs({map:o[l%3],transparent:!0,depthWrite:!1,fog:!1,opacity:.8}),h=new vs(c),d=260+s()*340;h.scale.set(d*2,d,1),h.position.set((s()-.5)*3600,260+s()*240,(s()-.5)*3600),h.renderOrder=-8,i.add(h),st.clouds.push(h)}}function R1(i){let t=y0();t.repeat.set(300,300);let e=new Pt(new An(9e3,9e3),new kt({map:t,roughness:.22,metalness:.25}));e.rotation.x=-Math.PI/2,e.position.y=-.45,e.receiveShadow=!0,i.add(e),st.water=e,st.waterTex=t;let n=x0();n.repeat.set(670/6,670/6);let s=new kt({map:n,roughness:1}),r=new Pt(new An(670*2,670*2),s);r.rotation.x=-Math.PI/2,r.position.y=-.06,r.receiveShadow=!0,i.add(r);let a=new me,o=670,l=30,c=-.06,h=-3,d=[1,1,1],u=[0,0,8,0,8,1,0,1];a.quad([-o,c,o],[o,c,o],[o+l,h,o+l],[-o-l,h,o+l],[0,1,.4],u,d),a.quad([o,c,-o],[-o,c,-o],[-o-l,h,-o-l],[o+l,h,-o-l],[0,1,-.4],u,d),a.quad([o,c,o],[o,c,-o],[o+l,h,-o-l],[o+l,h,o+l],[.4,1,0],u,d),a.quad([-o,c,-o],[-o,c,o],[-o-l,h,o+l],[-o-l,h,-o-l],[-.4,1,0],u,d);let f=a.mesh(new kt({map:n,roughness:1,vertexColors:!0}),{cast:!1});i.add(f);let p=kn(99),x=new me;for(let m=0;m<34;m++){let v=m/34*Ye+p()*.2,A=1500+p()*900,y=90+p()*300,S=160+p()*260,b=Math.cos(v)*A,R=Math.sin(v)*A,_=8,E=p()*.05,I=[.1+E,.17+E,.11+E*.6];x.cylinder(b,-4,R,S,y*.55,_,I,!0,S*.5),x.cylinder(b,-4+y*.5,R,S*.55,y*.5,_,[I[0]*.9,I[1]*.95,I[2]],!0,S*.05)}let g=x.mesh(new kt({vertexColors:!0,roughness:1,flatShading:!0}),{cast:!1,receive:!1});i.add(g)}function C1(i){let t=v0(),e=new kt({map:t,roughness:.92,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),n=new me,s=1220,r=0,a=[1,1,1];for(let A=0;A<=12;A++){let y=$t(A),S=-s/2,b=s/2,R=20/2,_=s/10;n.quad([S,r,y+R],[b,r,y+R],[b,r,y-R],[S,r,y-R],[0,1,0],[1,0,1,_,0,_,0,0],a),n.quad([y-R,r,S],[y+R,r,S],[y+R,r,b],[y-R,r,b],[0,1,0],[0,0,1,0,1,_,0,_],a)}let o=n.mesh(e,{cast:!1});o.renderOrder=1,i.add(o);let l=ud();l.repeat.set(3,3);let c=new kt({map:l,roughness:.92,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),h=new me;for(let A=0;A<=12;A++)for(let y=0;y<=12;y++){let S=$t(A),b=$t(y),R=20/2;h.quad([S-R,.01,b+R],[S+R,.01,b+R],[S+R,.01,b-R],[S-R,.01,b-R],[0,1,0],[0,0,1,0,1,1,0,1],a)}let d=h.mesh(c,{cast:!1});d.renderOrder=2,i.add(d);let u=M0(),f=new kt({map:u,transparent:!0,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,depthWrite:!1}),p=new me,x=20/2+.4,g=x+3.6,m=20/2;for(let A=0;A<=12;A++)for(let y=0;y<=12;y++){let S=$t(A),b=$t(y);for(let R of[-1,1]){if(R<0?y>0:y<12){let _=b+R*x,E=b+R*g;p.quad([S-m,.02,Math.max(_,E)],[S+m,.02,Math.max(_,E)],[S+m,.02,Math.min(_,E)],[S-m,.02,Math.min(_,E)],[0,1,0],[0,1,1,1,1,0,0,0],a)}if(R<0?A>0:A<12){let _=S+R*x,E=S+R*g;p.quad([Math.min(_,E),.02,b+m],[Math.min(_,E),.02,b-m],[Math.max(_,E),.02,b-m],[Math.max(_,E),.02,b+m],[0,1,0],[0,1,1,1,1,0,0,0],a)}}}let v=p.mesh(f,{cast:!1});v.renderOrder=3,i.add(v)}function I1(i,t,e){let n=S1[i+","+t];if(n)return n;let s=Math.max(Math.abs(i-5.5),Math.abs(t-5.5));return s<=1.5?"downtown":s<=3.5?"mid":e()<.55?"residential":"lowrise"}function pi(i,t,e,n,s,r,a,o={}){xt.facade[r].box(i,0,t,e,s,n,a,{tile:7,tileV:11,top:!1}),xt.roof.box(i,s,t,e,0,n,[1,1,1],{sides:!1,tile:8}),s>10&&!o.noParapet&&(xt.roof.box(i,s,t-n/2+.5/2,e,.9,.5,[.85,.85,.85],{tile:4,top:!0}),xt.roof.box(i,s,t+n/2-.5/2,e,.9,.5,[.85,.85,.85],{tile:4,top:!0}),xt.roof.box(i-e/2+.5/2,s,t,.5,.9,n-2*.5,[.85,.85,.85],{tile:4,top:!0}),xt.roof.box(i+e/2-.5/2,s,t,.5,.9,n-2*.5,[.85,.85,.85],{tile:4,top:!0})),Ds(i-e/2,t-n/2,i+e/2,t+n/2,s,"building"),st.buildRects.push([i,t,e,n,s]),!o.noClutter&&e>12&&n>12&&P1(i,t,e,n,s)}function P1(i,t,e,n,s){let r=xt.rng,a=s>40?2:r()*3|0;for(let o=0;o<a;o++){let l=i+(r()-.5)*(e-8),c=t+(r()-.5)*(n-8),h=.5+r()*.25;r()<.3?xt.props.cylinder(l,s,c,1.6,3,8,[.5,.42,.34]):xt.props.box(l,s,c,2+r()*3,1.2+r()*1.2,2+r()*2,[h,h,h*1.05],{tile:4})}s>55&&r()<.7&&xt.props.box(i,s,t,.4,14+r()*10,.4,[.6,.6,.6])}function Yi(i,t,e=1,n="oak"){xt.trees.push({x:i,z:t,s:e,kind:n}),sr(i,t,n==="palm"?.4:.5,7,"tree")}function L1(i,t,e){xt.lamps.push({x:i,z:t,ang:e}),sr(i,t,.28,7,"lamp")}function D1(){let i=xt.rng;for(let t=0;t<12;t++){st.blocks[t]=[];for(let e=0;e<12;e++){let n=ri(t),s=ri(e),r=I1(t,e,i);st.blocks[t][e]={i:t,j:e,cx:n,cz:s,type:r};let a=r==="park",o=r==="industrial"||r==="stunt";xt.concrete.box(n,0,s,80,.16,80,[1,1,1],{tile:4}),a&&xt.grass.box(n,.16,s,80-.4,0,80-.4,[1,1,1],{sides:!1,tile:6}),o&&xt.asphalt.box(n,.16,s,76,0,76,[1,1,1],{sides:!1,tile:8}),N1(r,n,s,t,e,i);let l=80/2-.8;for(let c=0;c<4;c++){let h=c*Math.PI/2,d=Math.cos(h),u=Math.sin(h),f=-u,p=d;for(let x of[-22,0,22])L1(n+d*l+f*x,s+u*l+p*x,h);if(r!=="industrial"&&r!=="stunt"){let x=t===0&&c===2||t===11&&c===0||e===0&&c===3||e===11&&c===1;for(let g of[-11,11,-33,33])!x&&Math.abs(g)>20||Yi(n+d*l+f*g,s+u*l+p*g,.85+i()*.4,x?"palm":"oak")}}}}st.pois.police={x:ri(6),z:ri(3)-33},st.pois.hospital={x:ri(5),z:ri(8)-33},st.pois.shop={x:ri(2),z:ri(6)-30},st.pois.stunt={x:ri(10),z:ri(10)}}function N1(i,t,e,n,s,r){let a=fe/2;if(i==="downtown"){let o=["glass","glass","dark","office"];if(r()<.6){let l=6+r()*6,c=r()<.5?"office":"brick";pi(t,e,fe-2,fe-2,l,c,ia(r),{noClutter:!0});let h=34+r()*16,d=34+r()*16,u=70+r()*80,f=t+(r()-.5)*(fe-h-6),p=e+(r()-.5)*(fe-d-6),x=o[r()*o.length|0];pi(f,p,h,d,u,x,ia(r,.85,1)),r()<.5&&pi(f,p,h*.6,d*.6,u+25+r()*20,x,ia(r,.85,1))}else{let l=r()<.5;for(let c of[-1,1]){let h=l?fe/2-2:fe,d=l?fe:fe/2-2,u=l?t+c*(fe/4+.5):t,f=l?e:e+c*(fe/4+.5),p=45+r()*75;pi(u,f,h,d,p,o[r()*o.length|0],ia(r,.85,1))}}}else if(i==="mid"||i==="lowrise"){let o=i==="mid",l=o?["office","brick","apartment","glass","apartment"]:["brick","apartment","office","apartment"],c=fe/2-2;for(let h of[-1,1])for(let d of[-1,1]){if(r()<.08){xt.asphalt.box(t+h*(fe/4+.5),.16+.005,e+d*(fe/4+.5),c,0,c,[1,1,1],{sides:!1,tile:8});continue}let u=o?16+r()*40:8+r()*14,f=c-r()*4,p=c-r()*4;pi(t+h*(fe/4+.5),e+d*(fe/4+.5),f,p,u,l[r()*l.length|0],ia(r)),r()<.25&&U1(t+h*(fe/4+.5),e+d*(fe/4+.5),f,p,u,h,d)}}else if(i==="residential"){let o=fe/3,l=[[.62,.3,.22],[.36,.34,.34],[.45,.28,.2],[.28,.3,.36],[.55,.42,.3]];for(let c=0;c<3;c++)for(let h=0;h<3;h++){let d=t-fe/2+o*(c+.5),u=e-fe/2+o*(h+.5);if(xt.grass.box(d,.16+.005,u,o-1,0,o-1,[1,1,1],{sides:!1,tile:6}),r()<.1){Yi(d,u,1.1);continue}let f=11+r()*5,p=9+r()*5,x=r()<.5?4.6:7.4,g=d+(r()-.5)*3,m=u+(r()-.5)*3,v=ia(r,.9,1);pi(g,m,f,p,x,"house",[v[0]*(.92+r()*.1),v[1]*(.9+r()*.12),v[2]*(.9+r()*.12)],{noParapet:!0,noClutter:!0}),xt.roof.gable(g,x,m,f,p,2.2+r()*1.2,f>p?"x":"z",l[r()*l.length|0]),r()<.6&&Yi(g+(r()<.5?-1:1)*(f/2+2.5),m+(r()-.5)*6,.9+r()*.5)}}else if(i==="park"){xt.concrete.box(t,.16+.03,e,4,0,fe,[1,1,1],{sides:!1,tile:4}),xt.concrete.box(t,.16+.03,e,fe,0,4,[1,1,1],{sides:!1,tile:4}),xt.concrete.box(t,.16+.03,e,16,0,16,[1,1,1],{sides:!1,tile:4}),xt.water.box(t,.16+.06,e,11,0,11,[.6,.85,1],{sides:!1,tile:6}),xt.props.cylinder(t,.16,e,1.2,1.4,8,[.7,.7,.72]),sr(t,e,6,1,"pond");for(let o=0;o<34;o++){let l=t+(r()-.5)*(fe-4),c=e+(r()-.5)*(fe-4);Math.abs(l-t)<4||Math.abs(c-e)<4||Yi(l,c,.9+r()*.7)}for(let[o,l,c]of[[10,3,0],[-10,-3,0],[3,-10,1],[-3,10,1]])xt.props.boxRot(t+o,.16,e+l,c?.6:2.4,.8,c?2.4:.6,0,[.45,.32,.2])}else if(i==="industrial"){for(let l of[-1,1])pi(t+l*20,e-20,32,40,11+r()*3,"dark",[.75,.75,.78],{noClutter:!1});let o=[[.75,.2,.15],[.15,.35,.65],[.85,.65,.15],[.2,.5,.3],[.8,.8,.8],[.5,.25,.1]];for(let l=0;l<5;l++)for(let c=0;c<2;c++){let h=t-28+l*14,d=e+14+c*12;if(r()<.2)continue;let u=1+(r()*3|0);for(let f=0;f<u;f++)xt.props.box(h,.16+f*2.6,d,12,2.6,2.6,o[r()*o.length|0],{tile:3});Ds(h-6,d-1.3,h+6,d+1.3,u*2.6,"container")}}else if(i==="plaza"){xt.concrete.box(t,.16+.03,e,fe,0,fe,[1.1,1.1,1.1],{sides:!1,tile:4}),pi(t,e,28,28,245,"dark",[.9,.95,1],{noClutter:!0}),pi(t,e,18,18,275,"glass",[1,1,1],{noClutter:!0,noParapet:!0}),xt.props.box(t,275,e,.6,32,.6,[.8,.8,.8]),st.beacon={x:t,y:306,z:e};for(let[o,l]of[[-28,-28],[28,-28],[-28,28],[28,28],[0,30],[0,-30],[30,0],[-30,0]])Yi(t+o,e+l,1.2)}else if(i==="police")xt.concrete.box(t,.16+.03,e,fe,0,fe,[.9,.9,1],{sides:!1,tile:4}),pi(t,e+12,56,30,15,"office",[.72,.8,1]),xt.props.box(t,0,e+12-15.2,56,3,.4,[.15,.25,.7]),yd(t,11,e+12-15.3,22,5.5,Jc("POLICE","#12245f","#ffffff","COSTA VISTA PD"),0),Yi(t-32,e-25,1.2),Yi(t+32,e-25,1.2);else if(i==="hospital")xt.concrete.box(t,.16+.03,e,fe,0,fe,[1.05,1.05,1.05],{sides:!1,tile:4}),pi(t,e+10,60,36,24,"office",[1,1,1.02]),yd(t,20,e+10-18.1,26,6.5,Jc("HOSPITAL","#f4f4f4","#d21f2b","EMERGENCY  24H"),0),xt.props.box(t,24,e+10,12,.3,12,[1,1,1]),xt.props.box(t,24.3,e+10,2,.05,8,[.85,.1,.1]),xt.props.box(t,24.3,e+10,8,.05,2,[.85,.1,.1]),Yi(t-32,e-25,1.2),Yi(t+32,e-25,1.2);else if(i==="shop"){xt.concrete.box(t,.16+.03,e,fe,0,fe,[.95,.95,.95],{sides:!1,tile:4}),pi(t,e+8,34,26,9,"brick",[.9,.85,.85]),yd(t,6.5,e+8-13.1,20,4.5,Jc("GUN CLUB","#1b1b1b","#ffd23a","AMMO & ARMOR"),0);for(let[o,l]of[[-28,-20],[28,-20],[-28,30],[28,30]])Yi(t+o,e+l,1)}else if(i==="stunt"){xt.props.box(t,.16,e,1,0,1,[1,1,1]);let o=[.95,.55,.1],l=[[t-14,e-31,t,e-21,"x",1,4.4],[t+18,e-31,t+32,e-21,"x",-1,4.4],[t-32,e-14,t-20,e,"z",1,4.2],[t-32,e+18,t-20,e+32,"z",-1,4.2],[t+4,e+8,t+14,e+22,"z",1,3]];for(let[c,h,d,u,f,p,x]of l){let g=new me;g.wedge(c,h,d,u,f,p,x,o),xt.props.append(g,.16),A0(c,h,d,u,f,p,x);let m=.6,v,A;f==="x"?p>0?(A=d,v=Ds(d,h,d+m,u,x-.6,"rampback")):(A=c,v=Ds(c-m,h,c,u,x-.6,"rampback")):p>0?(A=u,v=Ds(c,u,d,u+m,x-.6,"rampback")):(A=h,v=Ds(c,h-m,d,h,x-.6,"rampback")),v.rb={axis:f,sign:p,edge:A}}for(let c=0;c<4;c++){let h=t+4+c*8,d=e-6;xt.props.box(h,.16,d,3,1.1,1.2,[.85,.85,.2],{tile:2}),Ds(h-1.5,d-.6,h+1.5,d+.6,1.1,"barrier")}}}function U1(i,t,e,n,s,r,a){let o=xt.rng()*S0|0,l=new kt({map:dd(o),emissiveMap:dd(o),emissive:16777215,emissiveIntensity:.15,roughness:.6,side:vn}),c=new Pt(new An(14,7),l),h=xt.rng()<.5;c.position.set(i+(h?0:r*(e/2+.3)),s+5.5,t+(h?a*(n/2+.3):0)),c.rotation.y=h?a>0?0:Math.PI:r>0?Math.PI/2:-Math.PI/2,c.castShadow=!0,xt.props.box(c.position.x,s,c.position.z,.5,3,.5,[.4,.4,.4]),st.scene.add(c),(st.billboards||(st.billboards=[])).push(l)}function yd(i,t,e,n,s,r,a){let o=new kt({map:r,emissiveMap:r,emissive:16777215,emissiveIntensity:.35,roughness:.5}),l=new Pt(new An(n,s),o);l.position.set(i,t,e),l.rotation.y=a+Math.PI,st.scene.add(l),(st.billboards||(st.billboards=[])).push(o)}function F1(i){let t=xt.trees.filter(b=>b.kind==="oak"),e=xt.trees.filter(b=>b.kind==="palm"),n=new On(.2,.32,3.4,6);n.translate(0,1.7,0);let s=new kt({color:5980976,roughness:1}),r=new Ha(2.3,0);r.scale(1,.9,1),r.translate(0,4.6,0);let a=new kt({color:16777215,roughness:.95,flatShading:!0}),o=new ui(n,s,t.length),l=new ui(r,a,t.length),c=new le,h=new Jn,d=new P,u=new P,f=new pt,p=kn(31);t.forEach((b,R)=>{h.setFromAxisAngle(new P(0,1,0),p()*Ye),d.set(b.s,b.s*(.9+p()*.3),b.s),u.set(b.x,.1,b.z),c.compose(u,h,d),o.setMatrixAt(R,c),l.setMatrixAt(R,c),f.setHSL(.24+p()*.07,.42+p()*.2,.26+p()*.1),l.setColorAt(R,f)});for(let b of[o,l])b.castShadow=!0,b.receiveShadow=!1,b.instanceMatrix.needsUpdate=!0,i.add(b);l.instanceColor&&(l.instanceColor.needsUpdate=!0),st.trees=l;let x=new me,g=new On(.16,.3,9,6);g.translate(0,4.5,0);let m=new ui(g,new kt({color:9071947,roughness:1}),e.length);for(let b=0;b<7;b++){let R=b/7*Ye,_=Math.cos(R),E=Math.sin(R),I=4.2,N=1.8,z=.7,B=_*.2,D=E*.2,k=_*I,q=E*I,X=-E*z,et=_*z;x.quad([B-X,9,D-et],[B+X,9,D+et],[k*.55+X*1.4,9.7,q*.55+et*1.4],[k*.55-X*1.4,9.7,q*.55-et*1.4],[0,1,0],null,[.2,.5,.18]),x.quad([k*.55-X*1.4,9.7,q*.55-et*1.4],[k*.55+X*1.4,9.7,q*.55+et*1.4],[k+X*.2,9.7-N,q+et*.2],[k-X*.2,9.7-N,q-et*.2],[0,1,0],null,[.16,.42,.14])}let v=new kt({vertexColors:!0,side:vn,roughness:.9}),A=new ui(x.build(),v,e.length);e.forEach((b,R)=>{h.setFromAxisAngle(new P(0,1,0),p()*Ye),d.set(b.s,b.s,b.s),u.set(b.x,.1,b.z),c.compose(u,h,d),m.setMatrixAt(R,c),A.setMatrixAt(R,c)});for(let b of[m,A])b.castShadow=!0,i.add(b);for(let b of xt.lamps){let R=Math.cos(b.ang),_=Math.sin(b.ang);xt.lampPole.box(b.x,.16,b.z,.22,6.6,.22,[.26,.28,.3],{tile:2}),xt.lampPole.boxRot(b.x+R*.8,.16+6.5,b.z+_*.8,Math.abs(R)>.5?1.8:.16,.16,Math.abs(_)>.5?1.8:.16,0,[.26,.28,.3]),xt.lampBulb.box(b.x+R*1.5,.16+6.36,b.z+_*1.5,Math.abs(R)>.5?.9:.4,.16,Math.abs(_)>.5?.9:.4,[1,.85,.55])}let y=F0;for(let b of["x","z"])for(let R of Object.keys(y))xt.tlLamp[b+R]=new me;let S=20/2+1.2;for(let b=0;b<=12;b++)for(let R=0;R<=12;R++){let _=$t(b),E=$t(R);for(let I of[-1,1])for(let N of[-1,1]){let z=_+I*S,B=E+N*S;xt.tlPole.box(z,.16,B,.24,5.2,.24,[.2,.22,.24],{tile:2}),sr(z,B,.3,5,"signal");let D=[["x",I,0],["z",0,N]];for(let[k,q,X]of D){let et=z+q*.3,Y=B+X*.3,Q=q?.32:.5,nt=X?.32:.5;xt.tlPole.box(et,.16+4.1,Y,Q,1.15,nt,[.08,.08,.09],{tile:2});let Ot=5;for(let Nt of["red","yellow","green"])xt.tlLamp[k+Nt].box(z+q*.47,.16+Ot-.5,B+X*.47,q?.06:.26,.26,X?.06:.26,y[Nt]),Ot-=.36}}}}function z1(i){let t=(r,a,o)=>{if(!r.empty){let l=r.mesh(a,o);return i.add(l),l}};for(let r of Object.keys(xt.facade))t(xt.facade[r],xt.facadeMat[r]);let e=_0();e.repeat.set(1,1),t(xt.roof,new kt({map:e,vertexColors:!0,roughness:.95})),t(xt.concrete,new kt({map:m0(),vertexColors:!0,roughness:.95}),{cast:!1}),t(xt.grass,new kt({map:g0(),vertexColors:!0,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),{cast:!1}),t(xt.asphalt,new kt({map:ud(),vertexColors:!0,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),{cast:!1}),t(xt.props,new kt({vertexColors:!0,roughness:.75,metalness:.15})),t(xt.water,new kt({vertexColors:!0,color:3840724,roughness:.1,metalness:.3,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),{cast:!1}),t(xt.tlPole,new kt({vertexColors:!0,roughness:.6,metalness:.4})),t(xt.lampPole,new kt({vertexColors:!0,roughness:.6,metalness:.5})),st.lampMat=new kt({vertexColors:!0,emissive:16767392,emissiveIntensity:.1,roughness:.5}),t(xt.lampBulb,st.lampMat,{cast:!1}),st.tlMats={};for(let r of Object.keys(xt.tlLamp)){let a=new kt({vertexColors:!0,emissive:new pt().setRGB(...F0[r.slice(1)]),emissiveIntensity:.05,roughness:.4});st.tlMats[r]=a,t(xt.tlLamp[r],a,{cast:!1})}let n=new ui(new An(16,16).rotateX(-Math.PI/2),new _n({map:st.glowTex,color:16764810,transparent:!0,opacity:0,blending:Bn,depthWrite:!1,fog:!0}),xt.lamps.length),s=new le;xt.lamps.forEach((r,a)=>{s.makeTranslation(r.x+Math.cos(r.ang)*3.2,.2,r.z+Math.sin(r.ang)*3.2),n.setMatrixAt(a,s)}),n.frustumCulled=!1,n.renderOrder=5,n.visible=!1,i.add(n),st.lampPools=n,xt=Object.assign(xt,{done:!0})}function O1(i){let t=new Ae,e=new kt({color:15263982,roughness:.5,metalness:.4}),n=17,s=20,r=new Ae;r.position.y=s;let a=new Pt(new Ss(n,.28,6,40),e);r.add(a);let o=new Pt(new Ss(n*.55,.18,6,32),e);r.add(o);let l=[15087942,16032353,2792847,4553629,15844435,10182117],c=[];for(let h=0;h<16;h++){let d=h/16*Ye,u=new Pt(new qe(n,.14,.14),e);u.position.set(Math.cos(d)*n/2,Math.sin(d)*n/2,0),u.rotation.z=d,r.add(u);let f=new Ae,p=new Pt(new qe(2.2,1.7,2.2),new kt({color:l[h%l.length],roughness:.5}));p.position.y=-1.1,f.add(p),f.position.set(Math.cos(d)*n,Math.sin(d)*n,0),r.add(f),c.push(f)}t.add(r);for(let h of[-1,1]){let d=new Pt(new qe(.6,s+2,.6),e);d.position.set(0,s/2-.5,h*4.2),d.rotation.x=h*-.22,t.add(d)}if(t.position.set(640,0,-170),t.rotation.y=0,t.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),i.add(t),sr(640,-170+4.4,1,20,"wheel"),sr(640,-170-4.4,1,20,"wheel"),st.animated.push(h=>{r.rotation.z-=h*.12;for(let d of c)d.rotation.z=-r.rotation.z}),st.pois.ferris={x:640,z:-170},st.beacon){let h=new Pt(new yn(1.6,10,8),new _n({color:16722458,fog:!1}));h.position.set(st.beacon.x,st.beacon.y,st.beacon.z),i.add(h);let d=new vs(new rs({map:st.glowTex,color:16724e3,transparent:!0,blending:Bn,depthWrite:!1,fog:!1}));d.scale.set(30,30,1),d.position.copy(h.position),i.add(d),st.animated.push(()=>{let u=w.time%1.6<.7;h.visible=u,d.visible=u})}}function B1(){let i=670*2,t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=i/2;e.fillStyle="#1c3d5a",e.fillRect(0,0,i,i),e.fillStyle="#5a6069",e.fillRect(n-670,n-670,670*2,670*2),e.fillStyle="#c9b98f",e.fillRect(n-670,n-670,670*2,670*2),e.fillStyle="#7c838d";for(let s=0;s<=12;s++){let r=$t(s);e.fillRect(n-600-20/2,n+r-20/2,600*2+20,20),e.fillRect(n+r-20/2,n-600-20/2,20,600*2+20)}for(let s=0;s<12;s++)for(let r=0;r<12;r++){let a=st.blocks[s][r];e.fillStyle=a.type==="park"?"#3f7048":a.type==="industrial"?"#5c5a55":a.type==="stunt"?"#6d5a3a":"#3c4652",e.fillRect(n+a.cx-80/2,n+a.cz-80/2,80,80)}for(let[s,r,a,o,l]of st.buildRects){let c=at(70+l*.5,70,130);e.fillStyle=`rgb(${c},${c+8},${c+20})`,e.fillRect(n+s-a/2,n+r-o/2,a,o)}st.mapCanvas=t,st.mapOrigin=n}var k1=new pt,H1=new pt;function sa(i,t,e,n,s){return s.setRGB(0,0,0),s.r=xd[i].r*t+_d[i].r*e+jc[i].r*n,s.g=xd[i].g*t+_d[i].g*e+jc[i].g*n,s.b=xd[i].b*t+_d[i].b*e+jc[i].b*n,s}var D0=new pt,vd=new pt,Md=new pt,N0=new pt,U0=new pt,bd=new pt;st.update=function(i,t,e){w.hour=(w.hour+i/40)%24,st.lightPhase=w.time%30;let n=(w.hour-6)/24*Ye,s=Math.sin(n);st.sunDir.set(Math.cos(n)*.9,s,.42).normalize(),st.moonDir.copy(st.sunDir).negate();let r=yo(s,.02,.4),a=yo(s,0,-.22),o=Math.max(0,1-r-a),l=r+o+a||1,c=r/l,h=o/l,d=a/l;sa("top",c,h,d,D0),sa("hor",c,h,d,vd),sa("sun",c,h,d,Md),sa("hs",c,h,d,N0),sa("hg",c,h,d,U0),sa("fog",c,h,d,bd),w.night=yo(s,.16,-.08);let u=st.sky.material.uniforms;u.top.value.copy(D0),u.horizon.value.copy(vd),u.bottom.value.copy(bd),u.sunDir.value.copy(st.sunDir),u.moonDir.value.copy(st.moonDir),u.sunColor.value.copy(Md).multiplyScalar(1-d),u.starVis.value=w.night,st.scene.fog&&st.scene.fog.color.copy(bd),st.scene.background=null,st.stars.material.opacity=at(w.night*1.1,0,1),st.hemi.color.copy(N0),st.hemi.groundColor.copy(U0),st.hemi.intensity=ea(.6,1.75,c)+h*.3;let f=3.4*yo(s,0,.3),p=.75*yo(-s,0,.25),x=s>=-.01;st.sun.intensity=x?f:p,st.sun.color.copy(x?Md:jc.sun);let g=e||{x:0,y:0,z:0},m=x?st.sunDir:st.moonDir,v=1,A=Math.round(g.x/v)*v,y=Math.round(g.z/v)*v;st.sun.target.position.set(A,0,y),st.sun.position.set(A+m.x*300,m.y*300+20,y+m.z*300),st.sun.target.updateMatrixWorld();let S=w.night;for(let b of Object.keys(xt?xt.facadeMat:{}))xt.facadeMat[b].emissiveIntensity=S*1.15;if(st.lampMat&&(st.lampMat.emissiveIntensity=.15+S*3.2),st.lampPools&&(st.lampPools.visible=S>.05,st.lampPools.material.opacity=S*.55),st.billboards)for(let b of st.billboards)b.emissiveIntensity=.1+S*.9;if(st.tlMats)for(let b of["x","z"]){let R=wd(b);st.tlMats[b+"red"].emissiveIntensity=R==="red"?3:.04,st.tlMats[b+"yellow"].emissiveIntensity=R==="yellow"?3:.04,st.tlMats[b+"green"].emissiveIntensity=R==="green"?3:.04}if(t){st.sky.position.copy(t.position),st.stars.position.copy(t.position);let b=k1.copy(vd).lerp(H1.set(16777215),.6*(1-d)).multiplyScalar(.35+.65*(1-d));for(let R of st.clouds){R.position.x+=i*3.5;let _=R.position.x-t.position.x,E=R.position.z-t.position.z;_>1800&&(R.position.x-=3600),_<-1800&&(R.position.x+=3600),E>1800&&(R.position.z-=3600),E<-1800&&(R.position.z+=3600),R.material.color.copy(b)}st.waterTex&&(st.waterTex.offset.x+=i*.0012,st.waterTex.offset.y+=i*7e-4),st.water.position.x=Math.round(t.position.x/30)*30,st.water.position.z=Math.round(t.position.z/30)*30}for(let b of st.animated)b(i)};var oh=class{constructor(t,e,n){this.N=t,this.n=0,this.additive=e,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.vel=new Float32Array(t*3),this.age=new Float32Array(t),this.life=new Float32Array(t),this.s0=new Float32Array(t),this.s1=new Float32Array(t),this.c0=new Float32Array(t*4),this.c1=new Float32Array(t*4),this.drag=new Float32Array(t),this.grav=new Float32Array(t);let s=new Ne;this.aPos=new De(this.pos,3).setUsage(er),this.aCol=new De(this.col,4).setUsage(er),this.aSize=new De(this.size,1).setUsage(er),s.setAttribute("position",this.aPos),s.setAttribute("color",this.aCol),s.setAttribute("size",this.aSize),s.setDrawRange(0,0),this.uniforms={uScale:{value:500},uLight:{value:1}};let r=new sn({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:e?Bn:Rs,vertexShader:`attribute float size; attribute vec4 color; uniform float uScale; uniform float uLight; varying vec4 vC;
        void main(){ vC = color; ${e?"":"vC.rgb *= uLight;"} vec4 mv = modelViewMatrix * vec4(position,1.); gl_Position = projectionMatrix * mv;
          gl_PointSize = min(size * uScale / max(-mv.z, 0.5), 700.); }`,fragmentShader:`varying vec4 vC; void main(){ float d = length(gl_PointCoord - 0.5) * 2.; float a = smoothstep(1., 0.25, d);
        gl_FragColor = vec4(vC.rgb, vC.a * a); if (gl_FragColor.a < 0.004) discard; }`});this.points=new $s(s,r),this.points.frustumCulled=!1,this.points.renderOrder=e?8:7,n.add(this.points)}add(t,e,n,s,r,a,o,l,c,h,d,u,f){if(this.n>=this.N)return;let p=this.n++;this.pos[p*3]=t,this.pos[p*3+1]=e,this.pos[p*3+2]=n,this.vel[p*3]=s,this.vel[p*3+1]=r,this.vel[p*3+2]=a,this.age[p]=0,this.life[p]=o,this.s0[p]=l,this.s1[p]=c,this.drag[p]=u,this.grav[p]=f;for(let x=0;x<4;x++)this.c0[p*4+x]=h[x],this.c1[p*4+x]=d[x],this.col[p*4+x]=h[x];this.size[p]=l}update(t){let{pos:e,vel:n,age:s,life:r,s0:a,s1:o,c0:l,c1:c,col:h,size:d,drag:u,grav:f}=this;for(let p=0;p<this.n;){if(s[p]+=t,s[p]>=r[p]){let m=--this.n;if(p!==m){for(let v=0;v<3;v++)e[p*3+v]=e[m*3+v],n[p*3+v]=n[m*3+v];for(let v=0;v<4;v++)l[p*4+v]=l[m*4+v],c[p*4+v]=c[m*4+v],h[p*4+v]=h[m*4+v];s[p]=s[m],r[p]=r[m],a[p]=a[m],o[p]=o[m],u[p]=u[m],f[p]=f[m],d[p]=d[m]}continue}let x=s[p]/r[p],g=Math.exp(-u[p]*t);n[p*3]*=g,n[p*3+1]=n[p*3+1]*g-f[p]*t,n[p*3+2]*=g,e[p*3]+=n[p*3]*t,e[p*3+1]+=n[p*3+1]*t,e[p*3+2]+=n[p*3+2]*t,e[p*3+1]<.05&&f[p]>0&&(e[p*3+1]=.05,n[p*3+1]*=-.3,n[p*3]*=.6,n[p*3+2]*=.6),d[p]=a[p]+(o[p]-a[p])*x;for(let m=0;m<4;m++)h[p*4+m]=l[p*4+m]+(c[p*4+m]-l[p*4+m])*x;p++}this.aPos.needsUpdate=this.aCol.needsUpdate=this.aSize.needsUpdate=!0,this.points.geometry.setDrawRange(0,this.n)}},th=40,eh=48,Td=400,Ri,hs,V1,k0,Us,nh,Ci,Zi,ar,ih=[],G1=0,W1=0,Mo=0,or=new le,sh=new Jn,rh=new P,ah=new P,H0=new P(0,1,0);var He=(i,t,e,n)=>[i,t,e,n],te={init(i,t,e){V1=i,k0=t,Ri=new oh(2600,!1,i),hs=new oh(2e3,!0,i),this.resize(e),Us=new Ne,Us.setAttribute("position",new De(new Float32Array(th*6),3).setUsage(er)),Us.setAttribute("color",new De(new Float32Array(th*6),3).setUsage(er)),nh=new Fa(Us,new Vr({vertexColors:!0,transparent:!0,blending:Bn,depthWrite:!1})),nh.frustumCulled=!1,nh.renderOrder=9,i.add(nh);for(let s=0;s<th;s++)ih.push({on:!1,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0,dist:0,t:0,len:5,speed:260,r:1,g:.85,b:.4});Ci=new Ya(16755285,0,60,1.6),Ci.position.set(0,5,0),i.add(Ci);let n=Yc();Zi=new ui(new An(1,1).rotateX(-Math.PI/2),new _n({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,vertexColors:!1,opacity:.85}),eh),Zi.instanceColor=new Ms(new Float32Array(eh*3),3),Zi.frustumCulled=!1,Zi.renderOrder=4,or.makeScale(0,0,0);for(let s=0;s<eh;s++)Zi.setMatrixAt(s,or);i.add(Zi),ar=new ui(new An(1,1).rotateX(-Math.PI/2),new _n({color:657930,transparent:!0,opacity:.45,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),Td);for(let s=0;s<Td;s++)ar.setMatrixAt(s,or);ar.frustumCulled=!1,ar.renderOrder=4,i.add(ar)},resize(i){if(!Ri)return;let t=i.domElement.height,e=k0.fov*Math.PI/180,n=t/(2*Math.tan(e/2));Ri.uniforms.uScale.value=n,hs.uniforms.uScale.value=n},setLight(i){Ri.uniforms.uLight.value=i},update(i){Ri.update(i),hs.update(i);let t=Us.attributes.position.array,e=Us.attributes.color.array;for(let s=0;s<th;s++){let r=ih[s];if(r.on){r.t+=i;let a=Math.min(r.t*r.speed,r.dist),o=Math.max(a-r.len,0);o>=r.dist&&(r.on=!1),t[s*6]=r.sx+r.dx*o,t[s*6+1]=r.sy+r.dy*o,t[s*6+2]=r.sz+r.dz*o,t[s*6+3]=r.sx+r.dx*a,t[s*6+4]=r.sy+r.dy*a,t[s*6+5]=r.sz+r.dz*a,e[s*6]=r.r*.3,e[s*6+1]=r.g*.3,e[s*6+2]=r.b*.3,e[s*6+3]=r.r,e[s*6+4]=r.g,e[s*6+5]=r.b}else for(let a=0;a<6;a++)t[s*6+a]=0,e[s*6+a]=0}Us.attributes.position.needsUpdate=!0,Us.attributes.color.needsUpdate=!0,Mo>0&&(Mo-=i,Ci.intensity=Math.max(0,Mo)*Ci.userData.k,Mo<=0&&(Ci.intensity=0));let n=w.shake||0;w.shake=Math.max(0,n-i*2.2)},smoke(i,t,e,n=1,s=.4){let r=s;Ri.add(i+rt(-.15,.15),t,e+rt(-.15,.15),rt(-.4,.4),rt(1.2,2.6),rt(-.4,.4),rt(1.6,3),.5*n,2.8*n,He(r,r,r,.5),He(r*.8,r*.8,r*.8,0),.6,-.05)},blackSmoke(i,t,e,n=1){Ri.add(i+rt(-.3,.3),t,e+rt(-.3,.3),rt(-.6,.6),rt(2.5,4.5),rt(-.6,.6),rt(2.2,4),.7*n,4*n,He(.08,.08,.09,.7),He(.15,.15,.16,0),.5,-.1)},fire(i,t,e,n=1){hs.add(i+rt(-.3,.3)*n,t,e+rt(-.3,.3)*n,rt(-.5,.5),rt(2,4.5),rt(-.5,.5),rt(.35,.8),1.1*n,.25*n,He(1,.6,.15,.9),He(.9,.1,0,0),.4,-.5)},spark(i,t,e,n,s,r,a=6,o=5){for(let l=0;l<a;l++)hs.add(i,t,e,n*o+rt(-3,3),s*o+rt(0,4),r*o+rt(-3,3),rt(.15,.4),.14,.03,He(1,.85,.4,1),He(1,.4,.1,0),1,14)},blood(i,t,e,n,s,r=8){for(let a=0;a<r;a++)Ri.add(i,t,e,n*rt(1,4)+rt(-1.5,1.5),rt(.5,3.5),s*rt(1,4)+rt(-1.5,1.5),rt(.4,.9),.14,.2,He(.55,.02,.02,.95),He(.3,0,0,0),.6,12)},dust(i,t,e,n=6,s=2,r=1){for(let a=0;a<n;a++)Ri.add(i+rt(-.4,.4),t,e+rt(-.4,.4),rt(-s,s),rt(.2,1.2),rt(-s,s),rt(.5,1.2),.5*r,2.2*r,He(.62,.58,.5,.4),He(.62,.58,.5,0),1.5,-.2)},debris(i,t,e,n=10,s=8,r=[.2,.2,.2]){for(let a=0;a<n;a++)Ri.add(i,t,e,rt(-s,s),rt(s*.4,s*1.2),rt(-s,s),rt(.8,1.8),.22,.18,He(r[0],r[1],r[2],1),He(r[0],r[1],r[2],0),.2,16)},muzzle(i,t,e,n,s,r,a=1){hs.add(i,t,e,n*3,s*3,r*3,.06,.55*a,.15*a,He(1,.85,.5,1),He(1,.5,.1,0),0,0),hs.add(i+n*.2,t+s*.2,e+r*.2,0,0,0,.05,.35*a,.1*a,He(1,1,.8,1),He(1,.6,.2,0),0,0),this.flashLight(i,t,e,1.6*a,.07,16756832)},flashLight(i,t,e,n,s,r=16755285){Ci.position.set(i,t,e),Ci.color.setHex(r),Ci.userData.k=n*300,Mo=s,Ci.intensity=s*Ci.userData.k},explosion(i,t,e,n=8){for(let s=0;s<22*(n/8);s++){let r=rt(0,Ye),a=rt(-.2,1),o=rt(2,9)*(n/8);hs.add(i,t+.5,e,Math.cos(r)*o,a*o+2,Math.sin(r)*o,rt(.5,1.1),2.6*n/8,5*n/8,He(1,.72,.25,1),He(.9,.15,.02,0),2.2,-1)}for(let s=0;s<14;s++)hs.add(i,t+.8,e,rt(-2,2),rt(3,8),rt(-2,2),rt(.8,1.6),2.2*n/8,7*n/8,He(1,.95,.7,1),He(1,.5,.1,0),1.5,-2);for(let s=0;s<26*(n/8);s++){let r=rt(0,Ye),a=rt(1,6);Ri.add(i,t+1,e,Math.cos(r)*a,rt(2,9),Math.sin(r)*a,rt(2,4.2),2.5*n/8,9*n/8,He(.1,.1,.11,.85),He(.2,.2,.22,0),1,-.5)}this.spark(i,t+.5,e,0,1,0,30,10),this.debris(i,t+.5,e,14,12),this.dust(i,.3,e,10,8,3),this.flashLight(i,t+4,e,6,.55,16751168),this.decal(i,e,n*.9,[.02,.02,.02],.85)},tracer(i,t,e,n,s,r,a){let o=ih.find(f=>!f.on)||ih[0],l=n-i,c=s-t,h=r-e,d=Math.hypot(l,c,h)||1;o.on=!0,o.sx=i,o.sy=t,o.sz=e,o.dx=l/d,o.dy=c/d,o.dz=h/d,o.dist=d,o.t=0;let u=a||[1,.85,.45];o.r=u[0],o.g=u[1],o.b=u[2]},decal(i,t,e,n=[.35,.02,.02],s=1){let r=G1++%eh;sh.setFromAxisAngle(H0,rt(0,Ye)),ah.set(i,.05+r%7*.003,t),rh.set(e,1,e*rt(.7,1)),or.compose(ah,sh,rh),Zi.setMatrixAt(r,or),Zi.instanceMatrix.needsUpdate=!0,Zi.instanceColor.setXYZ(r,n[0]*s,n[1]*s,n[2]*s),Zi.instanceColor.needsUpdate=!0},skid(i,t,e,n,s){let r=W1++%Td;sh.setFromAxisAngle(H0,e),ah.set(i,.045,t),rh.set(s,1,n),or.compose(ah,sh,rh),ar.setMatrixAt(r,or),ar.instanceMatrix.needsUpdate=!0}};var V0={sfx:.9,engine:.8,radio:.35,ambience:.5},Qn=(i,t=0,e=1)=>i<t?t:i>e?e:i,mi=(i,t)=>typeof i=="number"&&isFinite(i)?i:t,Te=(i,t)=>i+Math.random()*(t-i),ei=i=>440*Math.pow(2,(i-69)/12),Ed=()=>{},Wt=null,bo=!1,aa=!1,hh=.8,oa=null,Rd=null,wo=null,Cd=null,he={},Ad=0,Id=null,lh=0,$e=class{constructor(){this.nodes=[],this.srcs=[],this.live=0,this.done=!1,this.onEnd=null,this.owner=Id,this.owner&&this.owner.add(this)}track(t){return this.nodes.push(t),t}gain(t=1){let e=Wt.createGain();return e.gain.value=t,this.track(e)}filter(t,e,n=1){let s=Wt.createBiquadFilter();return s.type=t,s.frequency.value=e,s.Q.value=n,this.track(s)}shaper(t,e="none"){let n=Wt.createWaveShaper();return n.curve=t,n.oversample=e,this.track(n)}osc(t,e,n,s){let r=Wt.createOscillator();return r.type=t,r.frequency.value=e,this._start(r,n,s)}noise(t,e,n=Rd){let s=Wt.createBufferSource();return s.buffer=n,s.loop=!0,this._start(s,t,e,Math.random()*(n.duration-.05))}send(t,e){let n=this.gain(e);return t.connect(n),n.connect(Cd),n}_start(t,e,n,s){return t.onended=()=>{--this.live<=0&&this.dispose()},s===void 0?t.start(e):t.start(e,s),n!==void 0&&t.stop(n),this.live++,this.srcs.push(t),this.nodes.push(t),t}release(t){for(let e of this.srcs)try{e.stop(t)}catch{}}dispose(){if(!this.done){this.done=!0;for(let t of this.nodes)try{t.disconnect()}catch{}this.nodes=[],this.srcs=[],this.owner&&this.owner.delete(this),this.onEnd&&this.onEnd()}}};function bt(...i){for(let t=0;t<i.length-1;t++)i[t].connect(i[t+1]);return i[i.length-1]}function Ii(i,t,e,n,s){i.setValueAtTime(1e-4,t),i.linearRampToValueAtTime(Math.max(e,2e-4),t+n),i.exponentialRampToValueAtTime(1e-4,t+n+s)}function Ji(i,t,e,n,s){i.setValueAtTime(e,t),i.exponentialRampToValueAtTime(n,t+s)}function we(i,t,e,n,s,r,a,o,l=.001,c){let h=i.noise(e,e+l+n+.03),d=i.filter(s,r,a),u=i.gain(0);c&&Ji(d.frequency,e,r,c,n),Ii(u.gain,e,o,l,n),bt(h,d,u,t)}function ae(i,t,e,n,s,r,a,o,l=.002,c=a){let h=i.osc(n,s,e,e+l+a+.03),d=i.gain(0);return r!==s&&Ji(h.frequency,e,s,r,c),Ii(d.gain,e,o,l,a),bt(h,d,t),h}function X1(){let i=new Float32Array(2049);for(let t=0;t<i.length;t++){let e=t/(i.length-1)*2-1,n=Math.abs(e);i[t]=n<=.7?e:Math.sign(e)*(.7+.3*Math.tanh((n-.7)/.15))}return i}function Y0(i){let t=new Float32Array(1024),e=Math.tanh(i);for(let n=0;n<t.length;n++)t[n]=Math.tanh(i*(n/(t.length-1)*2-1))/e;return t}function Z0(){return ft.ready&&!aa&&(bo||Wt.state==="running")}function Xe(i,t,e,n,s=1){if(!Z0()||Ad>=32||(t=Qn(mi(t,1)),t<.002))return;let r=new $e;r.onEnd=()=>{Ad--},Ad++;try{let a=Wt.currentTime+.004,o=r.gain(t*s),l=o;if(e=Qn(mi(e,0),-1,1),e!==0&&Wt.createStereoPanner){let c=r.track(Wt.createStereoPanner());c.pan.value=e,o.connect(c),l=c}l.connect(i),n(r,o,a),r.live===0&&r.dispose()}catch(a){throw r.dispose(),a}}function q1(){let i=Wt.sampleRate;Rd=Wt.createBuffer(1,Math.floor(i*2),i);let t=Rd.getChannelData(0);for(let c=0;c<t.length;c++)t[c]=Math.random()*2-1;let e=Math.floor(i*4),n=Math.floor(i*.25),s=new Float32Array(e+n),r=0,a=0;for(let c=0;c<s.length;c++)r=(r+.02*(Math.random()*2-1))/1.02,s[c]=r,a+=r*r;let o=.5/Math.sqrt(a/s.length);wo=Wt.createBuffer(1,e,i);let l=wo.getChannelData(0);for(let c=0;c<e;c++)l[c]=s[c]*o;for(let c=0;c<n;c++){let h=c/n;l[c]=(s[c]*h+s[e+c]*(1-h))*o}}function Y1(){let i=Wt.sampleRate,t=Math.floor(i*1.2),e=Wt.createBuffer(2,t,i);for(let r=0;r<2;r++){let a=e.getChannelData(r),o=0;for(let l=0;l<t;l++){let c=l/t;o+=(Math.random()*2-1-o)*(.6-.45*c),a[l]=o*Math.pow(1-c,3.5)*(l<300?l/300:1)}}let n=Wt.createConvolver(),s=Wt.createGain();n.buffer=e,s.gain.value=.5,Cd=Wt.createGain(),bt(Cd,n,s,he.sfx)}function Z1(){oa=Wt.createGain(),oa.gain.value=hh;let i=Wt.createDynamicsCompressor();i.threshold.value=-10,i.knee.value=12,i.ratio.value=4,i.attack.value=.004,i.release.value=.2;let t=Wt.createWaveShaper();t.curve=X1(),bt(oa,i,t,Wt.destination);for(let e of Object.keys(V0))he[e]=Wt.createGain(),he[e].gain.value=V0[e],he[e].connect(oa);q1(),Y1()}function uh(i,t,e,n){let s=n.dur,r=e+s+.1,a=i.osc("sawtooth",n.f[0],e,r);a.frequency.setValueAtTime(n.f[0],e),a.frequency.linearRampToValueAtTime(n.f[1],e+s*.2),a.frequency.linearRampToValueAtTime(n.f[2],e+s);let o=i.osc("sine",Te(5,7.5),e,r);bt(o,i.gain(n.f[1]*.02),a.frequency);let l=i.gain(0);l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(1,e+(n.atk||.03)),l.gain.setTargetAtTime(0,e+s*.6,s*.08);for(let[c,h,d,u]of n.form){let f=i.filter("bandpass",c,d);f.frequency.setValueAtTime(c,e),f.frequency.linearRampToValueAtTime(h,e+s),bt(a,f,i.gain(u),l)}n.breath&&bt(i.noise(e,r),i.filter("bandpass",2600,.8),i.gain(n.breath),l),bt(l,t)}function J1(i,t,e){let n=Math.random(),s=[[800,900,3.5,1.2],[1250,1900,4,1],[2800,2900,5,.6]];if(n<.5){let r=Te(520,820);uh(i,t,e,{dur:Te(.5,.9),f:[r*.8,r*1.45,r*1.15],form:s,breath:.1})}else if(n<.8){let r=Te(240,380);uh(i,t,e,{dur:Te(.45,.85),f:[r*.9,r*1.4,r],atk:.05,form:[[650,800,3.5,1.2],[1100,1300,4,1],[2500,2600,5,.5]],breath:.1})}else{let r=Te(600,900);uh(i,t,e,{dur:Te(.2,.32),f:[r*.9,r*1.5,r*1.2],form:s,breath:.06})}}var G0=[{f:[400,500],wave:"square",cut:2400,gain:.08},{f:[523,659,784],wave:"sawtooth",cut:3200,gain:.06},{f:[175,220,262],wave:"sawtooth",cut:1500,gain:.09},{f:[147,185],wave:"square",cut:1e3,gain:.095}],la=null;function $1(i){if(i=Math.abs(Math.floor(mi(i,0)))%G0.length,la&&la.variant===i||(J0(),!Z0()))return;let t=G0[i],e=new $e,n=Wt.currentTime,s=e.gain(0),r=e.filter("lowpass",t.cut,.7);s.gain.setValueAtTime(1e-4,n),s.gain.linearRampToValueAtTime(t.gain,n+.008);for(let a of t.f)for(let o of[-4,4]){let l=e.osc(t.wave,a,n);l.detune.value=o,l.connect(r)}bt(r,s,he.sfx),la={g:e,out:s,variant:i}}function J0(){if(!la)return;let{g:i,out:t}=la,e=Wt.currentTime;la=null,t.gain.cancelScheduledValues(e),t.gain.setTargetAtTime(0,e,.012),i.release(e+.1)}var W0={pistol:{f:1800,cd:.03,body:2800,bd:.09,th:[200,62,.11],tail:.22,wet:.1,trim:1.8},smg:{f:2600,cd:.02,body:3800,bd:.05,th:[290,120,.06],tail:.12,wet:.05,trim:1.4},shotgun:{f:700,cd:.08,body:1800,bd:.24,th:[140,40,.34],tail:.8,wet:.3,trim:1.8},rifle:{f:3200,cd:.05,body:2300,bd:.13,th:[180,52,.2],tail:.65,wet:.32,trim:1.8,snap:!0},cop:{f:1500,cd:.04,body:1500,bd:.12,th:[150,66,.13],tail:.5,wet:.28,trim:1.3,bp:!0}};function K1(i,t,e,n){let s=Te(.94,1.06),r=i.noise(e,e+n.tail+.12),a=i.filter(n.bp?"bandpass":"highpass",n.f*s,n.bp?1.1:.7),o=i.gain(0);Ii(o.gain,e,1,6e-4,n.cd),bt(r,a,o,t);let l=i.filter("lowpass",n.body*s,.8),c=i.gain(0);Ji(l.frequency,e,n.body*s,n.body*.2,n.bd*2),Ii(c.gain,e,.85,.001,n.bd),bt(r,l,c,t);let h=i.filter("lowpass",n.body*.55,.6),d=i.gain(0);Ji(h.frequency,e,n.body*.55,200,n.tail),Ii(d.gain,e,.3,.004,n.tail),bt(r,h,d,t),ae(i,t,e,"sine",n.th[0]*s,n.th[1],n.th[2],.9,.002,n.th[2]*.5),n.snap&&we(i,t,e,.015,"bandpass",6500,2,.5,4e-4),i.send(t,n.wet)}function j1(i,t,e){let n=i.noise(e,e+1.9),s=i.filter("bandpass",350,1.2),r=i.gain(0);Ji(s.frequency,e,350,2400,.55),r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.9,e+.07),r.gain.setTargetAtTime(0,e+.12,.28),bt(n,s,r,t),we(i,t,e,.7,"highpass",2200,.6,.25,.02),we(i,t,e,.06,"bandpass",1400,1,.8,8e-4),ae(i,t,e,"sine",120,38,.3,.9,.003,.15),i.send(t,.3)}function Q1(i,t,e){let n=i.noise(e,e+3.4),s=i.filter("highpass",500,.6),r=i.gain(0);Ii(r.gain,e,.8,.001,.22),bt(n,s,r,t);let a=i.filter("lowpass",3e3,.7),o=i.gain(0);Ji(a.frequency,e,3e3,130,2.2),Ii(o.gain,e,1,.004,2.6),bt(n,a,o,t);let l=i.filter("lowpass",180,.7),c=i.gain(0);Ii(c.gain,e+.05,1.4,.08,3.1),bt(i.noise(e,e+3.4,wo),l,c,t),ae(i,t,e,"sine",95,26,1.7,1,.004,1.3),ae(i,t,e,"triangle",190,50,.5,.5,.002,.3);for(let h=0;h<5;h++)we(i,t,e+.12+Math.random()*1.1,Te(.03,.08),"bandpass",Te(1200,4200),Te(2,5),Te(.1,.25));i.send(t,.4)}function tM(i,t,e,n){if(ae(i,t,e,"sine",130+40*n,42,.14+.22*n,.55+.45*n,.002,.12),we(i,t,e,.06+.1*n,"lowpass",500+900*n,.8,.5+.4*n),n>.25){let s=2+Math.round(n*5);for(let a=0;a<s;a++)we(i,t,e+Math.random()*(.05+n*.22),Te(.03,.09),"bandpass",Te(700,3800),Te(3,9),.3+.4*n,8e-4);let r=Te(220,520);for(let a of[1,1.5,2.32,3.7])ae(i,t,e+Te(0,.03),"square",r*a,r*a*Te(.98,1.02),.25+.3*n,.03*n*n,.002)}if(n>.7)for(let s=0;s<5;s++)ae(i,t,e+Te(0,.35),"sine",Te(3e3,6500),Te(2800,6e3),Te(.08,.2),.05)}var X0={car:{f0:44,f1:150,wave:"sawtooth",cut0:380,cut1:2600,q:1.2,level:.2,sub:.7,up:.5,noise:.05,lope:9,lopeDepth:.12},sports:{f0:60,f1:250,wave:"sawtooth",cut0:600,cut1:5200,q:1.5,level:.2,sub:.35,up:.8,noise:.1,lope:14,lopeDepth:.05},truck:{f0:30,f1:92,wave:"square",cut0:260,cut1:1500,q:1,level:.2,sub:.9,up:.3,noise:.06,lope:6,lopeDepth:.3},bus:{f0:28,f1:84,wave:"sawtooth",cut0:240,cut1:1300,q:1,level:.21,sub:.9,up:.25,noise:.06,lope:5.5,lopeDepth:.28}},pn={kind:null,rpm:0,thr:0,run:null};function eM(i){let t=new $e,e=Wt.currentTime,n=t.gain(0),s=t.filter("lowpass",i.cut0,i.q),r=t.gain(1);bt(r,s,n,he.engine);let a=t.osc(i.wave,i.f0,e),o=t.osc("square",i.f0*.5,e),l=t.osc("sawtooth",i.f0*2.01,e),c=t.gain(0);bt(a,t.gain(.6),r),bt(o,t.gain(.3*i.sub),r),bt(l,c,r);let h=t.osc("sine",i.lope,e),d=t.gain(i.lopeDepth);bt(h,d,r.gain);let u=t.gain(0);return bt(t.noise(e),t.filter("bandpass",1500,1.2),u,n),{g:t,out:n,lp:s,o1:a,o2:o,o3:l,g3:c,lfo:h,lfoG:d,ng:u,P:i}}function $0(i){let t=pn.run,e=t.P,n=Wt.currentTime,s=Qn(pn.rpm),r=Qn(pn.thr),a=e.f0*Math.pow(e.f1/e.f0,s),o=Qn(.22+.4*s+.5*r);t.o1.frequency.setTargetAtTime(a,n,i),t.o2.frequency.setTargetAtTime(a*.5,n,i),t.o3.frequency.setTargetAtTime(a*2.01,n,i),t.lp.frequency.setTargetAtTime(e.cut0*Math.pow(e.cut1/e.cut0,o),n,i*1.5),t.g3.gain.setTargetAtTime(e.up*r,n,i*2),t.ng.gain.setTargetAtTime(e.noise*(.2+s)*r,n,i*2),t.lfo.frequency.setTargetAtTime(e.lope*(.6+1.6*s),n,i*2),t.lfoG.gain.setTargetAtTime(e.lopeDepth*(1-.8*s),n,i*2),t.out.gain.setTargetAtTime(e.level*(.55+.3*r+.15*s),n,i*2)}function q0(i){i=i==="heli-none"||X0[i]?i:"car",!(pn.kind===i&&(pn.run||i==="heli-none"))&&(K0(),pn.kind=i,!(!ft.ready||i==="heli-none")&&(pn.run=eM(X0[i]),$0(.01)))}function K0(){let i=pn.run;if(pn.run=null,pn.kind=null,!i||!Wt)return;let t=Wt.currentTime;i.out.gain.cancelScheduledValues(t),i.out.gain.setTargetAtTime(0,t,.05),i.g.release(t+.5)}function nM(){let i=new $e,t=Wt.currentTime,e=i.gain(0),n=i.filter("bandpass",1500,4),s=i.gain(.35);bt(e,he.sfx);let r=i.osc("sawtooth",780,t),a=i.osc("square",1180,t),o=i.osc("sine",23,t),l=i.gain(60);return bt(o,l,r.frequency),l.connect(a.frequency),bt(r,s,n),bt(a,s),bt(n,e),bt(i.noise(t),i.filter("bandpass",2600,1.4),i.gain(.7),e),{g:i,level:e,bp:n}}function iM(){let i=new $e,t=Wt.currentTime,e=i.gain(0),n=i.filter("bandpass",1050,.6);bt(e,he.sfx);let s=i.osc("sawtooth",950,t),r=i.osc("square",950,t);r.detune.value=5;let a=i.osc("triangle",.42,t),o=i.gain(340);return bt(a,o,s.frequency),o.connect(r.frequency),bt(s,i.gain(.5),n),bt(r,i.gain(.25),n),bt(n,e),{g:i,level:e}}function sM(){let i=new $e,t=Wt.currentTime,e=i.gain(0),n=i.gain(0);bt(n,e,he.sfx);let s=new Float32Array(512);for(let a=0;a<s.length;a++)s[a]=.05+.95*Math.pow(a/(s.length-1),5);let r=i.osc("sine",9,t);return bt(r,i.shaper(s),n.gain),bt(i.noise(t,void 0,wo),i.filter("lowpass",240,.8),i.gain(1.6),n),bt(i.osc("sine",58,t),i.gain(.7),n),bt(i.noise(t),i.filter("bandpass",1900,.7),i.gain(.22),n),bt(i.osc("sine",1350,t),i.gain(.008),e),{g:i,level:e,lfo:r}}function rM(){let i=new $e,t=Wt.currentTime,e=i.gain(0);bt(e,he.ambience);let n=i.filter("lowpass",260,.5),s=i.gain(1.4);bt(i.noise(t,void 0,wo),n,s,e),bt(i.osc("sine",.05,t),i.gain(90),n.frequency),bt(i.osc("sine",.09,t),i.gain(.3),s.gain);let r=i.filter("bandpass",620,.35),a=i.gain(.05);return bt(i.noise(t),r,a,e),bt(i.osc("sine",.13,t),i.gain(.03),a.gain),bt(i.osc("sine",.031,t),i.gain(250),r.frequency),bt(i.osc("sine",55,t),i.gain(.05),e),{g:i,level:e}}var ra={skid:{up:.03,down:.1,scale:.5,build:nM,tune:(i,t,e,n)=>i.bp.frequency.setTargetAtTime(1100+1100*t,e,n)},siren:{up:.2,down:.15,scale:.35,build:iM},heli:{up:.25,down:.2,scale:.22,build:sM,tune:(i,t,e,n)=>i.lfo.frequency.setTargetAtTime(8.5+4*t,e,n*2)},amb:{up:.6,down:.5,scale:.12,build:rM}};for(let i of Object.values(ra))Object.assign(i,{tgt:0,cur:0,run:null,sent:NaN});function aM(i,t){let e=i.tgt>i.cur?i.up:i.down;if(i.cur+=(i.tgt-i.cur)*(1-Math.exp(-t/e)),!i.run){if(i.tgt<.004)return;i.run=i.build(),i.sent=NaN}let n=Wt.currentTime;i.sent!==i.tgt&&(i.run.level.gain.setTargetAtTime(i.tgt*i.scale,n,e),i.tune&&i.tune(i.run,i.tgt,n,e),i.sent=i.tgt),i.tgt<.004&&i.cur<.004&&(i.run.level.gain.setTargetAtTime(0,n,.01),i.run.g.release(n+.1),i.run=null)}var cn={kick(i,t,e=1,n=150,s=46,r=.17){let a=new $e;ae(a,i,t,"sine",n,s,r,e,.002,r*.4),we(a,i,t,.012,"highpass",2500,.7,e*.25,5e-4)},snare(i,t,e=1,n=185,s=.15){let r=new $e;we(r,i,t,s,"highpass",1400,.6,e*.75),ae(r,i,t,"triangle",n*1.5,n,.09,e*.55,.001,.04)},clap(i,t,e=1){let n=new $e,s=n.noise(t,t+.35),r=n.filter("bandpass",1400,1.2),a=n.gain(0);[0,.011,.023].forEach((o,l)=>{let c=l===2;a.gain.setValueAtTime(1e-4,t+o),a.gain.linearRampToValueAtTime(e*.6,t+o+.001),a.gain.exponentialRampToValueAtTime(c?1e-4:e*.05,t+o+(c?.17:.009))}),bt(s,r,a,i)},hat(i,t,e=1,n=!1){we(new $e,i,t,n?.2:.035,"highpass",7200,.7,e*.3)},cymbal(i,t,e=1){we(new $e,i,t,1.3,"highpass",5200,.6,e*.28,.002)},brush(i,t,e=1,n=.15){we(new $e,i,t,n,"bandpass",6e3,.5,e*.2,n*.4)}};function ti(i,t,e,n,s,r=new $e){let{wave:a="sawtooth",voices:o=1,spread:l=8,vol:c=.2,a:h=.005,dec:d=0,sus:u=1,r:f=.08,cut:p=4e3,fenv:x=0,fdec:g=.1,q:m=.7}=s;e=Math.max(e,h+.01);let v=t+e+f*1.3,A=r.gain(0),y=r.filter("lowpass",p,m);A.gain.setValueAtTime(1e-4,t),A.gain.linearRampToValueAtTime(c,t+h),d&&A.gain.setTargetAtTime(Math.max(c*u,2e-4),t+h,d/3),A.gain.setTargetAtTime(0,t+e,f/5),x&&(y.frequency.setValueAtTime(p*(1+x),t),y.frequency.setTargetAtTime(p,t,g));for(let S=0;S<o;S++){let b=r.osc(a,n,t,v);b.detune.value=o>1?(S/(o-1)-.5)*2*l:0,b.connect(y)}return bt(y,A,i),r}function j0(i,t,e,n,s=.2,r=1,a=new $e){e=Math.max(e,.03);let o=t+e+.5,l=a.osc("sine",n,t,o),c=a.osc("sine",n,t,o),h=a.gain(0);h.gain.setValueAtTime(n*1.4*r,t),h.gain.setTargetAtTime(n*.12,t,.18),bt(c,h,l.frequency);let d=a.gain(0);d.gain.setValueAtTime(1e-4,t),d.gain.linearRampToValueAtTime(s,t+.006),d.gain.setTargetAtTime(s*.3,t+.006,.3),d.gain.setTargetAtTime(0,t+e,.07),bt(l,d,i);let u=a.osc("sine",n*7,t,t+.12),f=a.gain(0);return Ii(f.gain,t,s*.08*r,.001,.08),bt(u,f,d),a}function oM(i,t,e,n=.2,s=1,r=new $e){let a=t+s+.1,o=r.osc("sine",e,t,a),l=r.osc("sine",e*3.5,t,a),c=r.gain(0);c.gain.setValueAtTime(e*2.2,t),c.gain.setTargetAtTime(0,t,s*.12),bt(l,c,o.frequency);let h=r.gain(0);return Ii(h.gain,t,n,.002,s),bt(o,h,i),r}function lM(i,t,e,n,s){let r=new $e,a=t+e+.3,o=r.osc("sine",n*2.2,t,a),l=r.gain(0);Ji(o.frequency,t,n*2.2,n,.04),l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(s,t+.004),l.gain.setTargetAtTime(s*.55,t+.004,.25),l.gain.setTargetAtTime(0,t+e,.05),bt(o,l,i)}function Ld(i,t,e,n,s,r){let a=i.g;i.lead=a.gain(1);let o=a.track(Wt.createDelay(2)),l=a.gain(n),c=a.filter("lowpass",s,.5);o.delayTime.value=i.sd*t,bt(i.lead,i.mel),bt(i.lead,a.gain(e),o,c,a.gain(r),i.mel),bt(c,l,o)}function cM(i,t,e){let n=i.mel.gain;n.setValueAtTime(1,t),n.linearRampToValueAtTime(.3,t+.006),n.linearRampToValueAtTime(1,t+e)}var hM={bpm:128,bars:8,gain:.5,prog:[40,40,36,38,40,40,36,[38,35]],kickA:"x.....x.x.x.....",kickB:"x.....x.x.x.x.x.",gtrA:"X.x.x.xxX.x.x.x.",gtrB:"X..xX.x.X..xX.xx",bassOct:[0,0,0,12,0,0,7,0],lead:[[[0,76,6],[8,79,4],[12,81,4]],[[0,83,8],[8,81,4],[12,79,4]],[[0,79,6],[8,76,4],[12,79,4]],[[0,81,4],[4,86,4],[8,83,4],[12,81,4]],[[0,88,6],[6,86,2],[8,83,4],[12,86,4]],[[0,83,4],[4,86,4],[8,88,8]],[[0,84,4],[4,79,4],[8,76,4],[12,79,4]],[[0,81,4],[4,86,4],[8,83,4],[12,78,4]]],setup(i){let t=i.g;i.gtr=t.gain(1),bt(i.gtr,t.shaper(Y0(6),"2x"),t.filter("highpass",100,.7),t.filter("lowpass",3400,.7),i.mel),i.mel.gain.value=.75},step(i,t,e,n,s){let r=this.prog[e],a=Array.isArray(r)?r[t<8?0:1]:r,o=e&3,l=o===3,c=i.dry;t===0&&o===0&&cn.cymbal(c,n,.8),(l?this.kickB:this.kickA)[t]==="x"&&cn.kick(c,n,1,150,48,.16),t===4||t===12?cn.snare(c,n,1,190):l&&t>12&&cn.snare(c,n,.35+(t-12)*.15,220-(t-12)*10,.1),t%2===0&&cn.hat(c,n,t%4===0?.85:.55,t===14&&!l),t%2===0&&ti(i.mel,n,s*1.7,ei(a+this.bassOct[t>>1]),{voices:2,spread:4,vol:.3,a:.004,r:.05,cut:650,fenv:1.2,fdec:.06});let h=(e<4?this.gtrA:this.gtrB)[t];if(h!=="."){let d=h==="X"?s*2.9:s*.8;for(let u of[12,19,24])ti(i.gtr,n,d,ei(a+u),{voices:2,spread:9,vol:.09,a:.003,r:.04,cut:3e3,q:.5})}for(let[d,u,f]of this.lead[e])d===t&&ti(i.gtr,n,f*s*.95,ei(u),{voices:2,spread:12,vol:.05,a:.01,r:.1,cut:3800})}},Fs=(i,...t)=>({b:i,p:t}),uM={bpm:100,bars:8,gain:.95,prog:[Fs(45,57,60,64,67),Fs(41,53,57,60,64),Fs(48,52,55,60,64),Fs(43,55,59,62,67),Fs(45,57,60,64,67),Fs(41,53,57,60,64),Fs(43,55,59,62,67),Fs(40,52,56,59,64)],arpSeq:[0,1,2,3,2,1,2,3,0,1,2,3,2,1,2,1],gate:[1,.3,1,1,.3,1,1,.3,1,.3,1,1,.3,1,1,.3],lead:[[[0,76,12]],[[0,77,12]],[[0,79,8],[8,76,8]],[[0,79,4],[4,83,4],[8,86,8]],[[0,81,6],[8,84,4],[12,83,4]],[[0,81,6],[8,77,4],[12,81,4]],[[0,83,8],[8,86,8]],[[0,80,6],[8,83,4],[12,88,4]]],setup(i){Ld(i,3,.35,.38,2600,.7)},step(i,t,e,n,s){let r=this.prog[e],a=i.dry;t%4===0&&(cn.kick(a,n,1,135,44,.19),cM(i,n,s*3.4)),(t===4||t===12)&&(cn.clap(a,n,.75),cn.snare(a,n,.45,175,.24)),t%4===2?cn.hat(a,n,.6,!0):t&1&&cn.hat(a,n,.2),ti(i.mel,n,s*.8,ei(r.b+((t&3)===3?12:0)),{voices:2,spread:7,vol:.2,a:.003,r:.03,cut:500,fenv:3.5,fdec:.07,q:2.5}),t===0&&this.pad(i,r,n,s),ti(i.lead,n,s*.85,ei(r.p[this.arpSeq[t]]+12),{wave:"square",vol:.055,a:.002,dec:.06,sus:.25,r:.04,cut:2400,fenv:2,fdec:.12});for(let[o,l,c]of this.lead[e])o===t&&ti(i.lead,n,c*s*.95,ei(l),{voices:3,spread:10,vol:.06,a:.02,r:.15,cut:3200})},pad(i,t,e,n){let s=new $e,r=n*16,a=e+r+.6,o=s.filter("lowpass",700,.7),l=s.gain(1),c=s.gain(0);o.frequency.setValueAtTime(600,e),o.frequency.linearRampToValueAtTime(2400,e+r*.55),o.frequency.linearRampToValueAtTime(1e3,e+r),this.gate.forEach((h,d)=>l.gain.setTargetAtTime(h,e+d*n,.012)),c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(.09,e+.25),c.gain.setTargetAtTime(0,e+r-.05,.15);for(let h of t.p)for(let d of[-9,9]){let u=s.osc("sawtooth",ei(h),e,a);u.detune.value=d,u.connect(o)}bt(o,l,c,i.mel)}},dM={bpm:84,bars:8,gain:1.1,swing:i=>i%4===2?.667:0,prog:[{r:36,t:4,v:[64,67,71,74]},{r:33,t:3,v:[60,64,67,71]},{r:38,t:3,v:[65,69,72,76]},{r:43,t:4,v:[59,65,69,76]},{r:40,t:3,v:[55,59,62,67]},{r:45,t:4,v:[55,61,64,70]},[{r:38,t:3,v:[65,69,72,76]},{r:43,t:4,v:[59,65,69,76]}],{r:36,t:4,v:[64,67,71,74]}],comp:[[[0,5,.9],[6,2,.7],[10,4,.8]],[[0,8,.85],[10,2,.6],[14,2,.7]]],ride:[1,0,0,0,.7,0,.5,0,.8,0,0,0,.7,0,.5,0],mel:[[[2,79,4],[8,83,4],[12,81,3]],[[0,84,6],[8,83,3],[12,79,4]],[[2,77,4],[8,81,4],[12,84,4]],[[0,83,6],[8,81,3],[12,76,4]],[[2,79,4],[8,83,6],[14,86,2]],[[0,85,6],[8,82,4],[12,81,4]],[[0,77,4],[4,81,4],[8,83,4],[12,79,4]],[[0,79,12]]],halves(i){let t=this.prog[i];return Array.isArray(t)?t:[t,t]},setup(i){Ld(i,3,.25,.3,2e3,.5)},step(i,t,e,n,s){let r=i.dry,[a,o]=this.halves(e);if(t%4===0){let l=t>>2,c=this.halves((e+1)%8)[0],h;l===0?h=a.r:l===1?h=a===o?a.r+a.t:a.r+7:l===2?h=o.r+(a===o?7:0):h=c.r+(c.r>=o.r?-1:1),ti(i.mel,n,s*3.6,ei(h),{wave:"triangle",vol:.5,a:.008,dec:.3,sus:.3,r:.07,cut:520,fenv:1.5,fdec:.1})}for(let[l,c,h]of this.comp[e&1]){if(l!==t)continue;let d=Math.random()*.012;(t<8?a:o).v.forEach((u,f)=>j0(i.lead,n+d+f*.011,c*s,ei(u),.085*h*Te(.85,1.1)))}for(let[l,c,h]of this.mel[e])l===t&&ti(i.lead,n,h*s,ei(c),{wave:"triangle",vol:.11,a:.012,dec:.35,sus:.4,r:.25,cut:2400});t===0&&cn.kick(r,n,.4,120,52,.16),t===10&&e&1&&cn.kick(r,n,.22,110,52,.14),this.ride[t]&&cn.brush(r,n,this.ride[t],.12),(t===4||t===12)&&(cn.hat(r,n,.22),cn.brush(r,n,.55,.2))}},fM={bpm:90,bars:8,gain:.43,swing:i=>i&1?.3:0,roots:[38,38,34,33,38,38,31,33],stab:[[62,65,69,72],[62,65,69,72],[58,62,65,69],[55,61,64,69],[62,65,69,72],[62,65,69,72],[58,62,65,67],[55,61,64,69]],kick:["x.....x...x.....","x..x....x.....x."],b808:[[[0,0,5],[6,0,2],[10,0,3]],[[0,0,6],[8,0,2],[11,7,3]]],hats:[1,0,.5,0,.9,0,.5,.35,1,0,.5,0,.9,0,.5,.45],bells:[[[2,81,2],[6,77,2],[10,74,3]],[[0,74,2],[4,77,2],[8,81,4]],[[2,77,2],[6,74,2],[10,70,4]],[[0,73,2],[4,76,2],[8,81,4]],[[2,81,2],[6,84,2],[8,81,2],[12,77,4]],[[4,77,2],[10,74,2],[14,72,2]],[[2,79,2],[6,74,2],[10,70,4]],[[0,73,2],[4,76,2],[8,79,2],[12,81,4]]],setup(i){let t=i.g;i.sat=t.gain(1),bt(i.sat,t.shaper(Y0(2.2)),t.filter("lowpass",900,.7),i.dry),i.stab=t.gain(1),bt(i.stab,t.filter("lowpass",1300,.6),i.mel),Ld(i,3,.3,.32,2200,.6)},step(i,t,e,n,s){let r=i.dry,a=e&1;this.kick[a][t]==="x"&&cn.kick(r,n,.8,120,44,.2),t===4||t===12?cn.snare(r,n,1,200,.16):t===15&&a&&cn.snare(r,n,.25,210,.06),this.hats[t]&&cn.hat(r,n,this.hats[t]*.85,t===14&&a===1);for(let[o,l,c]of this.b808[a])o===t&&lM(i.sat,n,c*s,ei(this.roots[e]+l),.9);if(t===0||t===7&&!a){let o=t===0?6:2,l=t===0?1:.6;this.stab[e].forEach((c,h)=>j0(i.stab,n+h*.008,o*s,ei(c),.09*l,.8))}for(let[o,l,c]of this.bells[e])o===t&&oM(i.lead,n,ei(l),.07,.5+c*s)}},pM=[hM,uM,dM,fM],To=null,So=null;function mM(i){let t=new $e,e=t.gain(1e-4),n=t.gain(1),s=t.gain(1);bt(n,e),bt(s,e),bt(e,he.radio);let r={def:i,g:t,out:e,dry:n,mel:s,groups:new Set,step:0,nextTime:0,sd:60/i.bpm/4};return i.setup&&i.setup(r),r}function gM(){Xe(he.radio,1,0,(i,t,e)=>{let n=i.noise(e,e+.3),s=i.filter("bandpass",2400,.7),r=i.gain(0);for(let a=0;a<6;a++)s.frequency.setValueAtTime(Te(500,5e3),e+a*.03);r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.7,e+.015),r.gain.setValueAtTime(.7,e+.11),r.gain.exponentialRampToValueAtTime(1e-4,e+.26),bt(n,s,r,t),ae(i,t,e,"sine",700,2400,.18,.15,.01)},.5)}function Dd(i,t){Q0();let e=pM[i];if(!e||!ft.ready)return;let n=mM(e),s=Wt.currentTime;n.out.gain.setValueAtTime(1e-4,s),n.out.gain.setTargetAtTime(e.gain,s,.04),n.nextTime=s+.05,To=n,t&&gM(),!bo&&So===null&&(So=setInterval(Pd,45)),Pd()}function Q0(){let i=To;if(To=null,!i||!Wt)return;let t=Wt.currentTime;i.out.gain.cancelScheduledValues(t),i.out.gain.setTargetAtTime(0,t,.04),i.g.release(t+.35);for(let e of i.groups)e.release(t+.35);setTimeout(()=>{for(let e of[...i.groups])e.dispose();i.g.dispose()},900)}function Pd(){let i=To;if(!i||!ft.ready||aa)return;let t=Wt.currentTime;if(i.nextTime<t-.05){let s=Math.ceil((t-i.nextTime)/i.sd);i.step+=s,i.nextTime+=s*i.sd}let e=t+.3,n=i.def;Id=i.groups;try{for(let s=0;i.nextTime<e&&s<64;s++){let r=i.step&15,a=(i.step>>4)%n.bars;n.step(i,r,a,i.nextTime+(n.swing?n.swing(r)*i.sd:0),i.sd),i.step++,i.nextTime+=i.sd}}finally{Id=null}}function ch(i){if(bn.index=i,i<0?(Q0(),So!==null&&(clearInterval(So),So=null)):Dd(i,!0),typeof bn.onChange=="function")try{bn.onChange(i,bn.name)}catch{}}var bn={stations:[{name:"Costa Rock 101",genre:"rock"},{name:"Wave FM",genre:"synthwave"},{name:"Sunset Lounge",genre:"chill"},{name:"Street Beats",genre:"hiphop"}],index:-1,on(){bn.index<0?ch(0):To||Dd(bn.index,!1)},off(){bn.index!==-1&&ch(-1)},next(){let i=bn.index+1;i>=bn.stations.length&&(i=-1),ch(i)},prev(){let i=bn.index-1;i<-1&&(i=bn.stations.length-1),ch(i)},get name(){return bn.index<0?"Radio Off":bn.stations[bn.index].name},onChange:null},ft={ready:!1,_errors:[],init(i){if(ft.ready)return;let t=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext);if(!(!i&&!t)){Wt=i||new t,bo=typeof OfflineAudioContext<"u"&&Wt instanceof OfflineAudioContext;try{Z1()}catch(e){throw Wt=null,e}if(aa=!1,ft.ready=!0,!bo&&Wt.state==="suspended"){let e=Wt.resume();e&&e.catch&&e.catch(Ed)}if(pn.kind&&pn.kind!=="heli-none"&&!pn.run){let e=pn.kind;pn.kind=null,q0(e)}bn.index>=0&&Dd(bn.index,!1)}},suspend(){if(Wt){aa=!0;try{let i=Wt.suspend();i&&i.catch&&i.catch(Ed)}catch{}}},resume(){if(!Wt||(aa=!1,bo))return;let i=Wt.resume();i&&i.catch&&i.catch(Ed)},setVolume(i){hh=Qn(mi(i,hh)),oa&&oa.gain.setTargetAtTime(hh,Wt.currentTime,.02)},update(i){if(!ft.ready||(Pd(),aa)||(lh+=Qn(mi(i,.016),0,.25),lh<.025))return;let t=lh;lh=0,pn.run&&$0(.06);for(let e of Object.values(ra))aM(e,t)},gunshot(i,t=1,e=0){if(i==="rpg")return Xe(he.sfx,t,e,j1,1.8);let n=W0[i]||W0.pistol;Xe(he.sfx,t,e,(s,r,a)=>K1(s,r,a,n),n.trim)},reload(i=1){Xe(he.sfx,i,0,(t,e,n)=>{let s=(r,a,o)=>we(t,e,n+r,.025,"bandpass",a,5,o,5e-4);s(0,1600,.6),s(.05,800,.4),s(.42,1200,.7),s(.46,2600,.5),ae(t,e,n+.42,"square",300,200,.03,.15),we(t,e,n+.78,.09,"bandpass",1800,2,.5,.01,900),s(.86,2e3,.7),s(.9,1e3,.5)},1.6)},dryFire(i=1){Xe(he.sfx,i,0,(t,e,n)=>{we(t,e,n,.02,"bandpass",2400,5,.8,5e-4),ae(t,e,n,"sine",900,500,.02,.3)},2.5)},punch(i=1,t=0){Xe(he.sfx,i,t,(e,n,s)=>{ae(e,n,s,"sine",160,50,.13,.9,.002,.1),we(e,n,s,.07,"lowpass",900,.8,.7),we(e,n,s,.03,"bandpass",1500,1,.5)},1.6)},explosion(i=1,t=0){Xe(he.sfx,i,t,Q1,.5)},bulletHit(i=1,t=0){Xe(he.sfx,i,t,(e,n,s)=>{if(we(e,n,s,.02,"bandpass",Te(2800,4200),2,.8,5e-4),Math.random()<.6){let r=Te(2200,4200);ae(e,n,s+.005,"sine",r,r/2.3,.18,.2,.002),ae(e,n,s+.005,"sine",r*2.76,r*1.3,.1,.05,.002)}},2.2)},crash(i=1,t=1,e=0){let n=Qn(mi(i,1));Xe(he.sfx,t,e,(s,r,a)=>tM(s,r,a,n),2)},scream(i=1,t=0){Xe(he.sfx,i,t,J1,.4)},pain(i=1){Xe(he.sfx,i,0,(t,e,n)=>uh(t,e,n,{dur:.3,f:[135,150,88],atk:.02,breath:.12,form:[[520,460,3,1.2],[1050,900,4,1]]}),.42)},horn(i,t=0){i?$1(t):J0()},doorOpen(){Xe(he.sfx,1,0,(i,t,e)=>{we(i,t,e,.02,"bandpass",2600,6,.5,5e-4),ae(i,t,e+.02,"sine",110,70,.09,.4);let n=i.osc("sawtooth",170,e+.05,e+.5),s=i.filter("bandpass",600,3),r=i.gain(0);Ji(n.frequency,e+.05,170,260,.3),Ii(r.gain,e+.05,.1,.05,.3),bt(n,s,r,t)},1.5)},doorClose(){Xe(he.sfx,1,0,(i,t,e)=>{ae(i,t,e,"sine",150,55,.14,.8,.002,.1),we(i,t,e,.08,"lowpass",800,.8,.5),we(i,t,e+.07,.02,"bandpass",2200,6,.5,5e-4)},1.6)},pickup(){Xe(he.sfx,1,0,(i,t,e)=>{ae(i,t,e,"triangle",988,988,.16,.5,.002),ae(i,t,e+.07,"triangle",1319,1319,.26,.5,.002),ae(i,t,e+.07,"sine",2638,2638,.15,.12,.002)},1)},cash(){Xe(he.sfx,1,0,(i,t,e)=>{we(i,t,e,.02,"bandpass",1800,5,.4,5e-4),[[0,2093],[.07,3136]].forEach(([n,s])=>{ae(i,t,e+n,"sine",s,s,.4,.35,.001),ae(i,t,e+n,"sine",s*2.76,s*2.76,.18,.12,.001)}),we(i,t,e+.06,.12,"highpass",7e3,.7,.2,.002)},1)},click(){Xe(he.sfx,1,0,(i,t,e)=>{ae(i,t,e,"sine",1800,1200,.03,.4,.001),we(i,t,e,.01,"highpass",3e3,.7,.2,5e-4)},1.4)},footstep(i=1){Xe(he.sfx,i,0,(t,e,n)=>{we(t,e,n,.07,"lowpass",Te(400,900),.8,.5),ae(t,e,n,"sine",Te(85,105),55,.06,.5,.002)},.9)},wasted(){Xe(he.sfx,1,0,(i,t,e)=>{let n=e+.5,s=i.noise(e,n+.05),r=i.filter("bandpass",300,1),a=i.gain(0);Ji(r.frequency,e,300,3e3,.5),a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.5,n),a.gain.setValueAtTime(1e-4,n+.01),bt(s,r,a,t),ae(i,t,n,"sine",110,28,1.2,1,.003,.8),we(i,t,n,.5,"lowpass",1500,.7,.6,.001,120);for(let o of[110,130.8,155.6])ti(t,n,1.6,o,{vol:.08,a:.05,dec:1.4,sus:.2,r:.6,cut:700,voices:2,spread:8},i).srcs.slice(-2).forEach(l=>Ji(l.frequency,n,o,o*.89,1.8));ae(i,t,n+.9,"sine",80,40,.35,.6,.003),ae(i,t,n+1.15,"sine",75,38,.35,.45,.003),i.send(t,.35)},.6)},busted(){Xe(he.sfx,1,0,(i,t,e)=>{ae(i,t,e,"sine",130,42,.35,.9,.003,.2),we(i,t,e,.14,"lowpass",1400,.8,.6);let n=i.osc("sawtooth",700,e+.04,e+1),s=i.filter("bandpass",1100,.8),r=i.gain(0);n.frequency.setValueAtTime(700,e+.04);for(let a=0;a<8;a++)n.frequency.linearRampToValueAtTime(a%2?700:1350,e+.04+(a+1)*.1);r.gain.setValueAtTime(1e-4,e+.04),r.gain.linearRampToValueAtTime(.4,e+.06),r.gain.setTargetAtTime(0,e+.75,.05),bt(n,s,r,t);for(let a of[52,55,59])ti(t,e+.02,.5,ei(a),{voices:2,vol:.08,r:.15,cut:1400},i);for(let a of[.62,.74])we(i,t,e+a,.02,"bandpass",3200,8,.7,5e-4),ae(i,t,e+a,"triangle",2400,1800,.03,.18)},1.2)},missionPass(){Xe(he.sfx,1,0,(i,t,e)=>{let n={wave:"square",voices:2,spread:6,vol:.09,a:.004,r:.12,cut:3500};[523.25,659.25,783.99,1046.5].forEach((s,r)=>ti(t,e+r*.1,.16,s,n,i));for(let s of[523.25,659.25,783.99,1046.5])ti(t,e+.45,1,s,{voices:2,spread:8,vol:.07,a:.01,r:.4,cut:3e3},i);we(i,t,e+.45,1.1,"highpass",6e3,.7,.25,.002),ae(i,t,e,"sine",120,50,.2,.6,.002,.12),i.send(t,.3)},1.2)},missionFail(){Xe(he.sfx,1,0,(i,t,e)=>{let n={voices:2,spread:10,vol:.12,a:.03,dec:.25,sus:.6,r:.15,cut:900,fenv:1.5,fdec:.2};[[329.6,0,.3],[293.7,.32,.3],[261.6,.64,.3],[220,.96,1]].forEach(([s,r,a])=>ti(t,e+r,a,s,n,i));for(let s of[110,130.8,164.8])ti(t,e+.96,1,s,{voices:2,vol:.06,a:.05,r:.5,cut:600},i);ae(i,t,e+.96,"sine",55,45,1.2,.5,.01),i.send(t,.3)},.95)},wantedUp(){Xe(he.sfx,1,0,(i,t,e)=>{let n=i.osc("sawtooth",620,e,e+.45),s=i.filter("bandpass",1e3,.8),r=i.gain(0);n.frequency.setValueAtTime(620,e),n.frequency.linearRampToValueAtTime(1240,e+.18),n.frequency.linearRampToValueAtTime(620,e+.36),r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.45,e+.02),r.gain.setTargetAtTime(0,e+.3,.03),bt(n,s,r,t),ae(i,t,e+.36,"sine",1568,1568,.5,.35,.002),ae(i,t,e,"sine",90,55,.2,.5,.003)},1.4)},wantedClear(){Xe(he.sfx,1,0,(i,t,e)=>{[[659.25,0],[880,.14],[1318.5,.28]].forEach(([n,s])=>{ae(i,t,e+s,"triangle",n,n,.7,.35,.004),ae(i,t,e+s,"sine",n*2,n*2,.35,.08,.004)}),i.send(t,.4)},1.05)},engine:{start(i){q0(i)},set(i,t){pn.rpm=Qn(mi(i,0)),pn.thr=Qn(mi(t,0))},stop(){K0()}},skid(i){ra.skid.tgt=Qn(mi(i,0))},siren(i){ra.siren.tgt=Qn(mi(i,0))},heli(i){ra.heli.tgt=Qn(mi(i,0))},ambience(i){ra.amb.tgt=Qn(mi(i,0))},radio:bn};function tm(i){for(let t of Object.keys(i)){let e=Object.getOwnPropertyDescriptor(i,t);if(!e||e.get||e.set)continue;let n=e.value;typeof n=="function"?i[t]=function(...r){try{return n.apply(i,r)}catch(a){ft._errors.length<20&&ft._errors.push(a),ft._errors.length<=3&&typeof console<"u"&&console.warn("[audio]",t,a);return}}:n&&typeof n=="object"&&!Array.isArray(n)&&t!=="_errors"&&tm(n)}}tm(ft);function Nd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ne,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=em(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let p=em(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function em(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new De(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Xn=[1,1,1],xM=i=>{let t=new pt(i);return[t.r,t.g,t.b]},Fe={glass:new kt({color:1780280,roughness:.12,metalness:.55}),detail:new kt({vertexColors:!0,roughness:.5,metalness:.35}),headOff:new kt({vertexColors:!0,emissive:16773312,emissiveIntensity:.06,roughness:.3}),headOn:new kt({vertexColors:!0,emissive:16773312,emissiveIntensity:2.6,roughness:.3}),tailOff:new kt({vertexColors:!0,emissive:16715792,emissiveIntensity:.25,roughness:.3}),tailOn:new kt({vertexColors:!0,emissive:16715792,emissiveIntensity:2.6,roughness:.3}),redOn:new kt({color:2228224,emissive:16715792,emissiveIntensity:3.5}),blueOn:new kt({color:34,emissive:1720575,emissiveIntensity:3.5}),barOff:new kt({color:2236966,roughness:.4}),tire:new kt({vertexColors:!0,roughness:.9,metalness:.05}),skin:{},cloth:{}},dh=i=>Fe.cloth[i]||(Fe.cloth[i]=new kt({color:i,roughness:.85}));function Ve(i,t,e,n,s=0,r=0,a=0){let o=new Pt(new qe(i,t,e),n);return o.position.set(s,r,a),o.castShadow=!0,o}var Ao=[15845797,14724230,13010498,9262372,7029286,16767924],im=[12597547,2719929,2600544,15844367,9323693,15528177,2899536,15105570,1482885,13849600,8359053,15221651],sm=[2899536,3426654,1976110,7101253,4016995,5592405,9075290],rm=[1710618,3877402,7031338,13214282,9079434,9054746],_M=new kt({vertexColors:!0,roughness:.8,metalness:.02});function nm(i,t){let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t[0],n[s*3+1]=t[1],n[s*3+2]=t[2];return i.setAttribute("color",new De(n,3)),i}var zs=i=>xM(i);function am(i={}){let t=zs(i.skin??Ao[0]),e=zs(i.shirt??2719929),n=zs(i.pants??2899536),s=zs(i.hair??1710618),r=zs(i.shoes??1842204),a=new Ae,o=new Ae;a.add(o);let l=(S,b,R,_)=>{let E=new Pt(S,_M);return E.position.set(b,R,_),E.castShadow=!0,E},c=()=>{let S=new me;return S.box(0,-.83,0,.17,.85,.2,n),S.box(0,-.92,.04,.17,.09,.28,r),S.build()},h=l(c(),.1,.92,0),d=l(c(),-.1,.92,0),u=()=>{let S=new me,b=i.jacket||i.cop||i.long,R=i.jacket?zs(i.jacket):e;return b?S.box(0,-.58,0,.115,.58,.125,R):(S.box(0,-.24,0,.115,.26,.125,e),S.box(0,-.58,0,.1,.34,.11,t)),S.box(0,-.68,0,.1,.1,.1,t),S.build()},f=l(u(),.29,1.5,0),p=l(u(),-.29,1.5,0),x=new me;x.box(0,.92,0,.46,.62,.26,i.jacket?zs(i.jacket):e),x.box(0,.92,0,.44,.14,.27,n),i.cop&&(x.box(0,1,0,.48,.07,.28,[.08,.08,.09]),x.box(.12,1.36,.135,.07,.07,.02,[.85,.7,.2])),x.box(0,1.5,0,.09,.06,.09,t);let g=[x.build()],m=new yn(.125,9,7);m.scale(1,1.05,1.03),m.translate(0,1.68,0),g.push(nm(m,t));let v=new me;if(v.box(.045,1.685,.115,.034,.028,.02,[.05,.05,.06]),v.box(-.045,1.685,.115,.034,.028,.02,[.05,.05,.06]),v.box(0,1.645,.122,.04,.03,.03,t),g.push(v.build()),i.cop){let S=new me;S.box(0,1.79,.01,.27,.09,.28,[.06,.09,.2]),S.box(0,1.77,.17,.24,.02,.12,[.03,.05,.1]),g.push(S.build())}else if(i.hat){let S=new me,b=zs(i.hat);S.box(0,1.79,0,.3,.05,.3,b),S.box(0,1.83,0,.2,.08,.2,b),g.push(S.build())}else{let S=new yn(.133,9,6,0,Ye,0,Math.PI*.52);S.scale(1,1.05,1.03),S.translate(0,1.69,-.012),g.push(nm(S,s))}let A=l(Nd(g.map(S=>(S.attributes.uv||S.setAttribute("uv",new De(new Float32Array(S.attributes.position.count*2),2)),S.index?S.toNonIndexed():S))),0,0,0),y=new Ae;return y.position.set(0,-.62,.04),p.add(y),o.add(h,d,A,f,p),{root:a,body:o,legL:h,legR:d,armL:f,armR:p,torso:A,hand:y,phase:Math.random()*Ye,weaponId:null,weapon:null,recoil:0,deadT:0,height:1.8}}function om(i,t){i.weaponId!==t&&(i.weaponId=t,i.weapon&&(i.hand.remove(i.weapon),i.weapon=null),t&&t!=="fist"&&(i.weapon=Od(t),i.hand.add(i.weapon)))}function zd(i,t,e){let{speed:n=0,aim:s=!1,aimUp:r=0,air:a=!1,fallDir:o=-1,punch:l=0,flee:c=!1,cower:h=!1}=e,d=n>.15;d&&(i.phase+=t*(3.2+n*1.55));let u=at(n/5.5,0,1)*.95+(d?.08:0),f=Math.sin(i.phase)*u;i.legL.rotation.x=a?-.5:f,i.legR.rotation.x=a?.3:-f,i.recoil=Math.max(0,i.recoil-t*7);let p=i.weaponId==="smg"||i.weaponId==="shotgun"||i.weaponId==="rifle"||i.weaponId==="rpg",x=i.weapon&&i.weaponId!=="grenade";if(s&&x)i.armR.rotation.set(-Math.PI/2-r+i.recoil*.35,0,.05),p?i.armL.rotation.set(-Math.PI/2-r+.15,0,-.55):i.armL.rotation.set(-.2+f*.3,0,0),i.body.rotation.y=0,i.torso.rotation.y=0;else if(l>0){let g=Math.sin(l*Math.PI);i.armR.rotation.set(-Math.PI/2*g-.2,0,0),i.armL.rotation.set(f*.5,0,0)}else h?(i.armL.rotation.set(-2.4,0,-.3),i.armR.rotation.set(-2.4,0,.3)):c?(i.armL.rotation.set(-f*1.3-.6,0,.2),i.armR.rotation.set(f*1.3-.6,0,-.2)):(i.armL.rotation.set(-f*.9,0,.04),i.armR.rotation.set(x?-.35+f*.2:f*.9,0,-.04),x&&(i.armR.rotation.x=-.5+i.recoil*.3));if(e.dead!==void 0){i.deadT=e.dead;let g=1-Math.pow(1-at(e.dead,0,1),2);i.body.rotation.x=o*-g*(Math.PI/2),i.body.position.y=g*.16,i.body.position.z=o*-g*.02}}function Od(i){let t=new Ae,e=dh(1842206),n=new kt({color:3816770,roughness:.4,metalness:.8}),s=dh(7031338),r=new P;if(i==="pistol")t.add(Ve(.05,.07,.24,n,0,.02,.1),Ve(.05,.13,.06,e,0,-.06,.02)),r.set(0,.03,.24);else if(i==="smg")t.add(Ve(.06,.09,.4,n,0,.02,.15),Ve(.05,.2,.06,e,0,-.1,.1),Ve(.05,.12,.06,e,0,-.06,0)),r.set(0,.04,.37);else if(i==="shotgun")t.add(Ve(.06,.07,.85,n,0,.02,.3),Ve(.07,.09,.3,s,0,0,-.2),Ve(.07,.08,.28,s,0,-.03,.25)),r.set(0,.04,.74);else if(i==="rifle")t.add(Ve(.06,.1,.8,n,0,.03,.25),Ve(.06,.09,.3,e,0,-.01,-.28),Ve(.05,.2,.08,e,0,-.14,.18),Ve(.04,.05,.18,e,0,.1,.15)),r.set(0,.05,.66);else if(i==="rpg"){let a=new Pt(new On(.07,.07,1.1,8),new kt({color:5069370,roughness:.7}));a.rotation.x=Math.PI/2,a.position.set(0,.06,.2),a.castShadow=!0;let o=new Pt(new Ks(.11,.25,8),dh(8006170));o.rotation.x=Math.PI/2,o.position.set(0,.06,.88),t.add(a,o,Ve(.05,.14,.06,e,0,-.06,.05)),r.set(0,.06,1)}else if(i==="grenade"){let a=new Pt(new yn(.06,8,6),dh(4151850));a.position.set(0,0,.05),t.add(a)}return t.userData.muzzle=r,t}var Os={sedan:{name:"Sedan",len:4.6,wid:1.84,y0:.3,bh:.62,cab:[-1.45,.85,-1,.2,.56],wr:.34,ww:.22,wb:2.7,track:1.56,mass:1400,vmax:40,acc:13,brake:24,grip:7.5,steer:.62,hp:1e3,eng:"car"},sports:{name:"Sports",len:4.4,wid:1.96,y0:.22,bh:.5,cab:[-1.1,.6,-.8,-.05,.42],wr:.35,ww:.3,wb:2.6,track:1.66,mass:1250,vmax:58,acc:21,brake:30,grip:9,steer:.55,hp:900,eng:"sports",ext:["spoiler"]},muscle:{name:"Muscle",len:4.9,wid:1.95,y0:.3,bh:.56,cab:[-1.35,.6,-.95,-.15,.5],wr:.37,ww:.3,wb:2.9,track:1.64,mass:1650,vmax:52,acc:19,brake:26,grip:7,steer:.55,hp:1100,eng:"sports",ext:["scoop","stripes"]},suv:{name:"SUV",len:4.8,wid:2,y0:.4,bh:.8,cab:[-2.1,1,-1.85,.5,.68],wr:.42,ww:.28,wb:2.9,track:1.7,mass:2100,vmax:36,acc:11,brake:22,grip:7,steer:.55,hp:1400,eng:"truck",ext:["rack"]},pickup:{name:"Pickup",len:5.2,wid:1.98,y0:.42,bh:.72,cab:[0,1.4,.25,.85,.6],wr:.4,ww:.28,wb:3.1,track:1.66,mass:1900,vmax:36,acc:11,brake:22,grip:6.8,steer:.55,hp:1300,eng:"truck",ext:["bed"]},van:{name:"Van",len:5.2,wid:2,y0:.38,bh:1.5,cab:null,wr:.38,ww:.24,wb:3.2,track:1.7,mass:2300,vmax:30,acc:9,brake:20,grip:6.5,steer:.5,hp:1400,eng:"truck",ext:["van"]},taxi:{name:"Taxi",len:4.6,wid:1.84,y0:.3,bh:.62,cab:[-1.45,.85,-1,.2,.56],wr:.34,ww:.22,wb:2.7,track:1.56,mass:1400,vmax:40,acc:13,brake:24,grip:7.5,steer:.62,hp:1e3,eng:"car",ext:["taxi"],color:15909900},police:{name:"Police",len:4.8,wid:1.9,y0:.3,bh:.62,cab:[-1.5,.85,-1.05,.2,.56],wr:.35,ww:.24,wb:2.8,track:1.6,mass:1600,vmax:50,acc:17,brake:28,grip:8.2,steer:.6,hp:1300,eng:"sports",ext:["police"],color:1316379},bus:{name:"Bus",len:11.2,wid:2.6,y0:.5,bh:2.8,cab:null,wr:.5,ww:.32,wb:6.4,track:2.1,mass:9e3,vmax:22,acc:5,brake:14,grip:5.5,steer:.4,hp:3e3,eng:"bus",ext:["bus"],color:2981843}},lm=["sedan","sedan","sedan","sports","muscle","suv","suv","pickup","van","taxi","taxi","bus"],Bd=[12597547,2899536,15528177,1710618,8359053,2719929,2600544,13849600,9323693,15844367,9807270,1482885,5974570,12108492,946063];for(let i in Os){let t=Os[i];t.hl=t.len/2,t.hw=t.wid/2,t.top=t.y0+t.bh+(t.cab?t.cab[4]:.2)}function yM(i,t,e,n,s,r,a,o,l,c,h,d){let u=e+n,f=[0,a-c,n],p=[0,l-r,-n];i.quad([-s,e,a],[s,e,a],[o,u,c],[-o,u,c],f,null,h),i.quad([s,e,r],[-s,e,r],[-o,u,l],[o,u,l],p,null,h),i.quad([s,e,a],[s,e,r],[o,u,l],[o,u,c],[n,s-o,0],null,h),i.quad([-s,e,r],[-s,e,a],[-o,u,c],[-o,u,l],[-n,s-o,0],null,h),t.quad([-o,u,c],[o,u,c],[o,u,l],[-o,u,l],[0,1,0],null,d)}var Ud={};function vM(i){if(Ud[i])return Ud[i];let t=Os[i],e=t.hw,n=t.hl,s=new me,r=new me,a=new me,o=new me,l=s,c=[.05,.05,.06],h=[.07,.11,.16],d=[.6,.62,.66],u=t.ext||[];if(u.includes("bed")){let m=n;s.box(0,t.y0,(-.05+m)/2,t.wid,t.bh,m- -.05,Xn,{tile:4}),s.box(0,t.y0,(-n+-.05)/2,t.wid,.3,-.05+n,Xn,{tile:4});let v=.42,A=t.y0+.3,y=-.05+n-.1;s.box(e-.05,A,(-n+-.05)/2,.1,v,y,Xn,{tile:4}),s.box(-e+.05,A,(-n+-.05)/2,.1,v,y,Xn,{tile:4}),s.box(0,A,-n+.05,t.wid,v,.1,Xn,{tile:4}),s.box(0,A,-.05-.05,t.wid,v,.1,Xn,{tile:4}),r.box(0,t.y0+.28,(-n+-.05)/2,t.wid-.2,.03,y-.1,[.12,.12,.13])}else s.box(0,t.y0,0,t.wid,t.bh,t.len,Xn,{tile:4});if(t.cab){let[g,m,v,A,y]=t.cab,S=t.y0+t.bh;yM(r,s,S,y,e*.9,g,m,e*.78,v,A,h,Xn),r.box(e*.86,S,(g+v)/2+.15,.06,y,.09,c),r.box(-e*.86,S,(g+v)/2+.15,.06,y,.09,c)}if(u.includes("van")){let g=t.y0+.8;r.box(e+.005,g,1.3,.02,.55,1.5,h),r.box(-e-.005,g,1.3,.02,.55,1.5,h),r.box(0,g+.05,n+.005,t.wid*.86,.6,.03,h),s.box(0,t.y0+t.bh,0,t.wid*.97,.05,t.len*.97,Xn,{tile:4})}if(u.includes("bus")){let g=t.y0+1,m=1.15;r.box(e+.005,g,0,.02,m,t.len-1.2,h),r.box(-e-.005,g,0,.02,m,t.len-1.2,h),r.box(0,g,n+.005,t.wid*.9,m+.4,.03,h);for(let v=-n+1.6;v<n-1;v+=1.7)s.box(e+.02,g,v,.02,m,.16,Xn,{tile:4}),s.box(-e-.02,g,v,.02,m,.16,Xn,{tile:4});r.box(0,t.y0+t.bh-.3,n+.01,t.wid*.6,.22,.03,[.05,.4,.1]),r.box(0,t.y0+t.bh+0,0,1.6,.3,3.2,[.7,.7,.72])}if(r.box(0,t.y0-.14,0,t.wid*.92,.22,t.len*.92,c),r.box(0,t.y0-.02,n-.03,t.wid*1.005,.24,.16,c,{top:!0}),r.box(0,t.y0-.02,-n+.03,t.wid*1.005,.24,.16,c),r.box(0,t.y0+t.bh*.55,n+.005,t.wid*.5,t.bh*.32,.03,[.03,.03,.035]),r.box(0,t.y0+.1,n+.06,.5,.13,.02,[.9,.9,.85]),r.box(0,t.y0+.1,-n-.06,.5,.13,.02,[.9,.9,.85]),r.box(e+.02,t.y0+t.bh*.5,0,.02,.05,t.len*.62,[.1,.1,.1]),r.box(-e-.02,t.y0+t.bh*.5,0,.02,.05,t.len*.62,[.1,.1,.1]),t.cab){let g=t.cab[1]-.3;r.box(e+.08,t.y0+t.bh+.1,g,.14,.1,.08,c),r.box(-e-.08,t.y0+t.bh+.1,g,.14,.1,.08,c)}let f=t.y0+t.bh*(t.bh>1?.3:.62),p=e-.34;for(let g of[-1,1])a.box(g*p,f,n+.01,.4,.13,.05,[1,1,.9]),o.box(g*p,f,-n-.01,.42,.12,.05,[1,.15,.1]);if(u.includes("spoiler")&&(s.box(0,t.y0+t.bh+.16,-n+.3,t.wid*.9,.05,.4,Xn,{tile:4}),s.box(e*.7,t.y0+t.bh,-n+.3,.06,.16,.3,Xn),s.box(-e*.7,t.y0+t.bh,-n+.3,.06,.16,.3,Xn)),u.includes("scoop")&&s.box(0,t.y0+t.bh,n*.45,.6,.12,.9,Xn,{tile:4}),u.includes("stripes")&&(r.box(.18,t.y0+t.bh+.006,0,.18,.005,t.len*.98,[.92,.92,.95]),r.box(-.18,t.y0+t.bh+.006,0,.18,.005,t.len*.98,[.92,.92,.95])),u.includes("rack")){let g=t.y0+t.bh+t.cab[4];for(let m of[-1,1])r.box(m*e*.68,g,-.4,.05,.08,2.4,d)}u.includes("taxi")&&r.box(0,t.y0+t.bh+t.cab[4],-.15,.6,.18,.24,[1,.95,.7]),u.includes("police")&&(r.box(e+.012,t.y0+.08,-.1,.02,t.bh-.12,1.55,[.93,.93,.96]),r.box(-e-.012,t.y0+.08,-.1,.02,t.bh-.12,1.55,[.93,.93,.96]),r.box(0,t.y0+t.bh+t.cab[4],-.15,1,.06,.4,[.1,.1,.12]),r.box(0,t.y0+t.bh+0,n-.04,t.wid*1.01,.05,.05,[.05,.05,.4]));let x={paint:s.build(),detail:r.build(),head:a.build(),tail:o.build()};return Ud[i]=x,x}var Fd={};function MM(i,t){let e=i+"_"+t;if(Fd[e])return Fd[e];let n=new On(i,i,t,14);n.rotateZ(Math.PI/2);let s=new On(i*.62,i*.62,t+.03,10);s.rotateZ(Math.PI/2);let r=new qe(t+.05,i*.2,i*.2),a=(l,c)=>{let h=l.attributes.position.count,d=new Float32Array(h*3);for(let u=0;u<h;u++)d[u*3]=c[0],d[u*3+1]=c[1],d[u*3+2]=c[2];return l.setAttribute("color",new De(d,3)),l},o=Nd([a(n,[.05,.05,.055]),a(s,[.62,.64,.68]),a(r,[.2,.2,.22])]);return Fd[e]=o,o}var Eo=null;function cm(i,t,e){let n=Os[i],s=vM(i),r=new Ae,a=t??n.color??12597547,o=new kt({color:a,roughness:.32,metalness:.45,envMap:w.envMap||null,envMapIntensity:.7}),l=new Pt(s.paint,o),c=new Pt(s.detail,Fe.detail),h=new Pt(s.head,Fe.headOff),d=new Pt(s.tail,Fe.tailOff);l.castShadow=c.castShadow=!0,r.add(l,c,h,d);let u=[],f=MM(n.wr,n.ww);for(let[g,m,v]of[[1,1,!0],[-1,1,!0],[1,-1,!1],[-1,-1,!1]]){let A=new Ae;A.position.set(g*n.track/2,n.wr,m*n.wb/2);let y=new Pt(f,Fe.tire);y.castShadow=!0,g<0&&(y.rotation.y=Math.PI),A.add(y),r.add(A),u.push({pivot:A,spin:y,front:v})}let p=null;if(n.ext&&n.ext.includes("police")){let g=n.y0+n.bh+n.cab[4]+.06,m=new Pt(new qe(.5,.12,.26),Fe.barOff),v=new Pt(new qe(.5,.12,.26),Fe.barOff);m.position.set(-.28,g,-.15),v.position.set(.28,g,-.15),r.add(m,v),p={red:m,blue:v}}Eo||(Eo=new An(4.4,13),Eo.rotateX(Math.PI/2),Eo.translate(0,.09,8.2));let x=null;return e&&(x=new Pt(Eo,new _n({map:e,transparent:!0,blending:Bn,depthWrite:!1,side:vn,opacity:.7})),x.position.z=n.hl-.6,x.visible=!1,x.renderOrder=6,r.add(x)),{group:r,paintMat:o,paintMesh:l,detailMesh:c,headMesh:h,tailMesh:d,wheels:u,bar:p,beam:x,spec:n,baseColor:new pt(a)}}function hm(){let i=new Ae,t=new kt({color:1382431,roughness:.4,metalness:.5}),e=new kt({color:15265010,roughness:.5,metalness:.3}),n=new kt({color:1846074,roughness:.1,metalness:.6}),s=new Pt(new yn(1.5,14,10),t);s.scale.set(1,.9,1.7),s.castShadow=!0,i.add(s);let r=new Pt(new yn(1.2,12,8,0,Ye,0,Math.PI/2),n);r.scale.set(1,.9,1.3),r.rotation.x=Math.PI/2-.35,r.position.set(0,.35,1.7),i.add(r),i.add(Ve(.5,.5,5,t,0,.35,-3.6),Ve(.2,1.4,.7,e,0,1,-6),Ve(1.8,.1,.8,t,0,.5,-5.8)),i.add(Ve(3.2,.06,.1,e,0,-1.25,.2).translateX(0),Ve(.06,.6,.1,t,.9,-1,.9),Ve(.06,.6,.1,t,-.9,-1,.9));for(let h of[-1,1])i.add(Ve(.12,.1,3.4,t,h*.9,-1.3,.2));let a=new Ae;a.position.y=1.6;for(let h=0;h<4;h++){let d=Ve(8.6,.05,.32,t,0,0,0);d.rotation.y=h/4*Ye,d.position.set(0,0,0),a.add(d)}let o=Ve(.16,.5,.16,t,0,1.35,0);i.add(o),a.position.y=1.62,i.add(a);let l=new Ae;l.position.set(.15,1,-6),l.add(Ve(.05,1.5,.2,t,0,0,0),Ve(.05,.2,1.5,t,0,0,0)),i.add(l);let c=new Pt(new yn(.16,6,6),new _n({color:16719904}));return c.position.set(0,-.9,.5),i.add(c),{group:i,rotor:a,tail:l,light:c}}var ca={gun:110,boom:260,crash:80,scream:45,hit:40,misc:40};function ha(i,t,e){let n=w.camera;if(!n)return{vol:1,pan:0};let s=i-n.position.x,r=t-n.position.z,a=Math.hypot(s,r);if(a>e)return{vol:0,pan:0};let o=1-a/e,l=Math.cos(w.camYaw||0),c=-Math.sin(w.camYaw||0),h=a>1?Math.max(-1,Math.min(1,(s*-l+r*-c)/a)):0;return{vol:o*o,pan:h}}var Pn={gunshot(i,t,e,n=1){let s=ha(t,e,ca.gun*(i==="rpg"?2:1));s.vol>.01&&ft.gunshot(i,n*s.vol,s.pan)},explosion(i,t){let e=ha(i,t,ca.boom);e.vol>.005&&ft.explosion(Math.max(.25,e.vol),e.pan)},crash(i,t,e){let n=ha(t,e,ca.crash);n.vol>.01&&ft.crash(i,n.vol,n.pan)},scream(i,t){let e=ha(i,t,ca.scream);e.vol>.01&&ft.scream(e.vol,e.pan)},bulletHit(i,t){let e=ha(i,t,ca.hit);e.vol>.01&&ft.bulletHit(e.vol,e.pan)},punch(i,t){let e=ha(i,t,ca.hit);e.vol>.01&&ft.punch(e.vol,e.pan)},own:ft};var qn={x:0,z:0},Ro={nx:0,nz:0,depth:0,px:0,pz:0},fh={x:0,z:0,r:0},Bs=class{constructor(t={}){this.kind="civ",this.x=0,this.y=0,this.z=0,this.vx=0,this.vz=0,this.vy=0,this.heading=rt(0,6.28),this.radius=.36,this.maxHp=100,this.hp=100,this.armor=0,this.dead=!1,this.deadT=0,this.fallDir=-1,this.stun=0,this.stunAge=0,this.removed=!1,this.grounded=!0,this.wishX=0,this.wishZ=0,this.wishSpeed=0,this.aiming=!1,this.aimUp=0,this.punchT=0,this.flee=!1,this.cower=!1,this.inVehicle=null,this.h=am(t),this.h.root.userData.actor=this,w.scene.add(this.h.root),w.actors.push(this),this.removeAfter=22,this.headY=1.65}get speed(){return Math.hypot(this.vx,this.vz)}get alive(){return!this.dead&&!this.removed}place(t,e,n){this.x=t,this.z=e,this.y=Wn(t,e),n!==void 0&&(this.heading=n),this.vx=this.vz=this.vy=0,this.grounded=!0,this.sync()}setWeapon(t){om(this.h,t),this.weaponId=t}stepMove(t,e=28){let n=this.wishX*this.wishSpeed,s=this.wishZ*this.wishSpeed,r=(this.grounded?e:3)*t;this.vx+=at(n-this.vx,-r,r),this.vz+=at(s-this.vz,-r,r),this.integrate(t)}integrate(t){qn.x=this.x+this.vx*t,qn.z=this.z+this.vz*t,na(qn,this.radius);let e=w.vehicles;for(let r=0;r<e.length;r++){let a=e[r];a.removed||a===this.inVehicle||Math.abs(a.x-qn.x)>a.spec.hl+2||Math.abs(a.z-qn.z)>a.spec.hl+2||(fh.x=qn.x,fh.z=qn.z,fh.r=this.radius,xo(a.obb,fh,Ro)&&(qn.x-=Ro.nx*Ro.depth,qn.z-=Ro.nz*Ro.depth))}let n=667;qn.x=at(qn.x,-n,n),qn.z=at(qn.z,-n,n),this.x=qn.x,this.z=qn.z;let s=Wn(this.x,this.z);this.grounded?(this.y=Math.abs(s-this.y)<.4?Mn(this.y,s,22,t):s,this.y>s+.6&&(this.grounded=!1)):(this.vy-=24*t,this.y+=this.vy*t,this.y<=s&&(this.y=s,this.vy=0,this.grounded=!0,this.onLand?.()))}faceTowards(t,e,n=12){this.heading=fo(this.heading,t,n,e)}damage(t,e,n={}){if(!(this.dead||this.removed||t<=0)){if(this.armor>0&&!n.ignoreArmor){let s=Math.min(this.armor,t*.7);this.armor-=s,t-=s}this.hp-=t,n.dir&&te.blood(this.x,this.y+1.2,this.z,n.dir.x,n.dir.z,n.headshot?12:6),this.onDamaged&&this.onDamaged(t,e,n),this.hp<=0&&this.die(e,n)}}die(t,e={}){this.dead||(this.dead=!0,this.deadT=0,this.hp=0,this.fallDir=Math.random()<.5?-1:1,e.dir&&(this.vx+=e.dir.x*2.5,this.vz+=e.dir.z*2.5),this.wishSpeed=0,this.aiming=!1,te.blood(this.x,this.y+1,this.z,e.dir?e.dir.x:0,e.dir?e.dir.z:0,10),setTimeout(()=>{this.removed||te.decal(this.x,this.z,1.2+Math.random()*.8,[.32,.02,.02],.9)},500),this.onDeath&&this.onDeath(t,e))}hitByVehicle(t,e,n,s){if(this.dead||this.removed||this.inVehicle)return;let r=Math.max(0,e-1.5)*11,a=t.driver==="player"?w.player:t;this.vx=n*e*.85+t.vx*.3,this.vz=s*e*.85+t.vz*.3,e>4&&(this.vy=2.5+e*.15,this.grounded=!1),this.stun<=0&&(this.stunAge=0),this.stun=Math.max(this.stun,.9+e*.05),Pn.crash(.35,this.x,this.z),this.onHitByVehicle&&this.onHitByVehicle(t,e),this.damage(r,a,{dir:{x:n,z:s},kind:"vehicle",vehicle:t})}sync(){let t=this.h.root;t.position.set(this.x,this.y,this.z),t.rotation.y=this.heading}animate(t,e={}){if(this.dead||this.stun>0){this.dead?this.deadT+=t:(this.stun-=t,this.stunAge+=t);let n=Math.exp(-(this.grounded?3.2:.2)*t);this.vx*=n,this.vz*=n,(Math.abs(this.vx)+Math.abs(this.vz)>.05||!this.grounded)&&this.integrate(t);let s=this.dead?Math.min(1,this.deadT/.45):Math.min(1,Math.min(this.stunAge*4,this.stun*4));zd(this.h,t,{speed:0,dead:s,fallDir:this.fallDir})}else this.h.deadT!==0&&(this.h.body.rotation.x=0,this.h.body.position.set(0,0,0),this.h.deadT=0),zd(this.h,t,{speed:this.speed,aim:this.aiming,aimUp:this.aimUp,air:!this.grounded&&this.vy!==0,punch:this.punchT,flee:this.flee,cower:this.cower,...e});this.dead&&this.deadT>this.removeAfter&&(this.y-=t*.5,this.deadT>this.removeAfter+2.5&&this.remove()),this.sync()}remove(){if(this.removed)return;this.removed=!0,w.scene.remove(this.h.root);let t=w.actors.indexOf(this);t>=0&&w.actors.splice(t,1),this.onRemove?.()}};var Ln={fist:{id:"fist",name:"Fists",melee:!0,dmg:16,rate:.42,range:2,slot:1},pistol:{id:"pistol",name:"Pistol",dmg:26,rate:.25,mag:12,spread:.01,range:150,auto:!1,reload:1.1,snd:"pistol",ammoMax:168,slot:2,kick:.018,alert:40},smg:{id:"smg",name:"Micro SMG",dmg:14,rate:.068,mag:30,spread:.032,range:120,auto:!0,reload:1.5,snd:"smg",ammoMax:360,slot:3,kick:.011,alert:50},shotgun:{id:"shotgun",name:"Pump Shotgun",dmg:12,pellets:9,rate:.85,mag:6,spread:.07,range:50,auto:!1,reload:2.1,snd:"shotgun",ammoMax:48,slot:4,kick:.05,alert:55},rifle:{id:"rifle",name:"Assault Rifle",dmg:21,rate:.092,mag:30,spread:.02,range:220,auto:!0,reload:1.8,snd:"rifle",ammoMax:360,slot:5,kick:.014,alert:60},grenade:{id:"grenade",name:"Grenades",thrown:!0,rate:.9,ammoMax:20,slot:6,mag:0},rpg:{id:"rpg",name:"RPG",projectile:!0,rate:1.4,mag:1,reload:2.4,snd:"rpg",ammoMax:12,slot:7,kick:.06,alert:80}},Io=["fist","pistol","smg","shotgun","rifle","grenade","rpg"],bM=2.6,ph={nx:0,ny:0,nz:0},$i=new P;function Po(i,t,e,n,s,r,a,o=null,l=null){let c=null,h=a,d=_o(i,t,e,n,s,r,a);d&&(h=d.t,c={kind:d.ground?"ground":"static",t:d.t,nx:d.nx,ny:d.ny,nz:d.nz});let u=w.actors;for(let x=0;x<u.length;x++){let g=u[x];if(g===o||g.removed||g.dead||g.inVehicle)continue;let m=g.x-i,v=g.z-e;if(m*n+v*r<-1||m*m+v*v>(h+2)*(h+2))continue;let y=Kc(i,t-g.y,e,n,s,r,g.x,g.z,.42,1.85,h,ph);y>=0&&y<h&&(h=y,c={kind:"actor",actor:g,t:y,head:t+s*y-g.y>1.5,nx:ph.nx,ny:ph.ny,nz:ph.nz})}let f=w.vehicles;for(let x=0;x<f.length;x++){let g=f[x];if(g===l||g.removed)continue;let m=g.x-i,v=g.z-e;if(m*m+v*v>(h+g.rad)*(h+g.rad))continue;let A=P0(i,t-g.y,e,n,s,r,g.obb,0,g.spec.top,h);A>=0&&A<h&&(h=A,c={kind:"vehicle",vehicle:g,t:A,nx:-n,ny:.2,nz:-r})}let p=w.helis;for(let x=0;x<p.length;x++){let g=p[x];if(g.dead)continue;let m=g.x-i,v=g.y-t,A=g.z-e,y=m*n+v*s+A*r;if(y<0||y>h+3)continue;let S=m*m+v*v+A*A-y*y;if(S>9)continue;let b=y-Math.sqrt(9-S);b>=0&&b<h&&(h=b,c={kind:"heli",heli:g,t:b,nx:-n,ny:0,nz:-r})}return c&&(c.x=i+n*c.t,c.y=t+s*c.t,c.z=e+r*c.t),c}function SM(i,t,e,n,s,r,a){switch(i.kind){case"actor":{let o=i.actor,l=e.dmg*(i.head?3.2:1);o.damage(l,t,{dir:{x:n,z:r},headshot:i.head,kind:"bullet"}),a&&w.hud&&w.hud.hitMarker(o.dead,i.head);break}case"vehicle":{let o=i.vehicle;o.damage(e.dmg*bM,t),te.spark(i.x,i.y,i.z,i.nx,.3,i.nz,4,4),Pn.bulletHit(i.x,i.z),o.driver==="player"&&t!==w.player&&w.player.damage(e.dmg*.4,t,{kind:"bullet"}),a&&w.hud&&w.hud.hitMarker(!1,!1);break}case"heli":i.heli.damage(e.dmg*3.2,t),te.spark(i.x,i.y,i.z,i.nx,.3,i.nz,4,4),a&&w.hud&&w.hud.hitMarker(i.heli.dead,!1);break;case"static":te.spark(i.x,i.y,i.z,i.nx,i.ny,i.nz,5,4),te.dust(i.x,i.y,i.z,2,.6,.35),Pn.bulletHit(i.x,i.z);break;case"ground":te.dust(i.x,.1,i.z,3,1,.5);break}}function ks(i,t,e,n,s,r={}){let a=i===w.player,o=t.pellets||1,l=(r.spread??t.spread)||0,c=null;for(let h=0;h<o;h++){$i.set(n.x+rt(-l,l),n.y+rt(-l,l),n.z+rt(-l,l)).normalize();let d=Po(e.x,e.y,e.z,$i.x,$i.y,$i.z,t.range,i,i.inVehicle||null),u=d?d.t:t.range,f=e.x+$i.x*u,p=e.y+$i.y*u,x=e.z+$i.z*u;(h<3||o===1)&&te.tracer(s.x,s.y,s.z,f,p,x,a?[1,.9,.5]:[1,.55,.35]),d&&SM(d,i,t,$i.x,$i.y,$i.z,a),c={x:f,y:p,z:x}}return te.muzzle(s.x,s.y,s.z,n.x,n.y,n.z,t.id==="shotgun"?1.6:t.id==="pistol"?.9:1.1),Pn.gunshot(i.kind==="cop"?"cop":t.snd,s.x,s.z),t.alert&&w.peds&&w.peds.alert(i.x,i.z,t.alert,i.x,i.z),c}var ua=[],kd=null,mh=null;function Hd(i,t,e,n,s,r,a,o=17){kd||(kd=new Pt(new yn(.11,8,6),new kt({color:4151850,roughness:.6})));let l=kd.clone();w.scene.add(l),ua.push({type:"grenade",x:t,y:e,z:n,vx:s*o,vy:r*o+3,vz:a*o,life:2.6,mesh:l,owner:i,rest:!1})}function Vd(i,t,e,n,s,r,a){if(!mh){mh=new Ae;let c=new Pt(new On(.07,.07,.8,8),new kt({color:7829367,metalness:.6,roughness:.4}));c.rotation.x=Math.PI/2;let h=new Pt(new Ks(.1,.25,8),new kt({color:10493984}));h.rotation.x=Math.PI/2,h.position.z=.5,mh.add(c,h)}let o=mh.clone();w.scene.add(o);let l=62;ua.push({type:"rocket",x:t,y:e,z:n,vx:s*l,vy:r*l,vz:a*l,life:5,mesh:o,owner:i})}var Co={x:0,z:0};function Gd(i){for(let t=ua.length-1;t>=0;t--){let e=ua[t];if(e.life-=i,e.type==="grenade")e.rest||(e.vy-=22*i,e.x+=e.vx*i,e.y+=e.vy*i,e.z+=e.vz*i,Co.x=e.x,Co.z=e.z,e.y<4&&na(Co,.14)&&(e.x=Co.x,e.z=Co.z,e.vx*=-.35,e.vz*=-.35),e.y<.13&&(e.y=.13,e.vy=-e.vy*.38,e.vx*=.72,e.vz*=.72,Math.abs(e.vy)<1&&(e.vy=0,e.rest=!0)),e.mesh.rotation.x+=i*8),e.mesh.position.set(e.x,e.y,e.z),e.life<=0&&(gh(e.x,e.y+.3,e.z,10,300,{source:e.owner}),w.scene.remove(e.mesh),ua.splice(t,1));else{let n=e.x+e.vx*i,s=e.y+e.vy*i,r=e.z+e.vz*i,a=Math.hypot(n-e.x,s-e.y,r-e.z)+.4,o=e.vx/62,l=e.vy/62,c=e.vz/62,h=Po(e.x,e.y,e.z,o,l,c,a,e.owner,e.owner&&e.owner.inVehicle);if(h||e.life<=0){let d=h||{x:n,y:s,z:r};gh(d.x-o*.3,Math.max(.3,d.y-l*.3),d.z-c*.3,11,420,{source:e.owner}),w.scene.remove(e.mesh),ua.splice(t,1);continue}e.x=n,e.y=s,e.z=r,e.mesh.position.set(e.x,e.y,e.z),e.mesh.lookAt(e.x+o,e.y+l,e.z+c),te.smoke(e.x-o*.6,e.y-l*.6,e.z-c*.6,.7,.55),te.fire(e.x-o*.5,e.y-l*.5,e.z-c*.5,.5)}}}function gh(i,t,e,n=8,s=300,r={}){te.explosion(i,t,e,n),Pn.explosion(i,e);let a=w.camera;if(a){let l=Math.hypot(a.position.x-i,a.position.z-e);w.shake=Math.min(1.8,(w.shake||0)+at(1.4-l/90,0,1.4))}let o=n*1.25;for(let l of w.actors.slice()){if(l.removed)continue;let c=l.x-i,h=l.y+.9-t,d=l.z-e,u=Math.hypot(c,h,d);if(u>o)continue;let f=1-u/o,p={x:c/(u||1),z:d/(u||1)};l.inVehicle||(l.vx+=p.x*14*f,l.vz+=p.z*14*f,l.vy=7*f+1,l.grounded=!1,l.stun<=0&&(l.stunAge=0),l.stun=Math.max(l.stun,1.5*f+.4)),l.damage(s*f*f*1.4,r.source||null,{dir:p,kind:"explosion",ignoreArmor:!1})}for(let l of w.vehicles.slice()){if(l.removed||l===r.vehicle)continue;let c=l.x-i,h=l.y+.7-t,d=l.z-e,u=Math.hypot(c,h,d);if(u>o+l.rad)continue;let f=at(1-u/(o+l.rad),0,1);l.damage(s*f*2.6,r.source||null);let p=f*9*(1500/l.spec.mass);l.vx+=c/(u||1)*p,l.vz+=d/(u||1)*p,f>.35&&l.spec.mass<4e3&&(l.vy=Math.max(l.vy,3+6*f),l.air=!0),l.spin+=rt(-1.5,1.5)*f*3}for(let l of w.helis){let c=Math.hypot(l.x-i,l.y-t,l.z-e);c<o+4&&l.damage(s*(1-c/(o+4))*3,r.source||null)}w.peds&&w.peds.alert(i,e,75,i,e),(r.source===w.player||r.source&&r.source.driver==="player")&&w.police&&w.police.crime("explosion",i,e,null)}w.explode=gh;var wM={fireWeapon:ks,castRay:Po,throwGrenade:Hd,fireRocket:Vd,updateProjectiles:Gd,explode:gh,WEAPONS:Ln};w.combat=wM;var xh=new P,ai=new P,Dn=new P,um=new P,vh=class extends Bs{constructor(){super({skin:14724230,shirt:1911621,jacket:1911621,pants:3817293,hair:1710618,shoes:15263976}),this.kind="player",this.removeAfter=1e9,this.radius=.38,this.money=1500,this.weapons={pistol:{mag:12,reserve:60}},this.cur="pistol",this.fireT=0,this.reloadT=0,this.faceCamT=0,this.sprint=!1,this.respawnT=0,this.lastHurt=0,this.punchHit=!1,this.bustedT=0,this.enterCd=0,this.setWeapon("pistol"),this.yaw=0,this.pitch=.25,this.camDist=4.4,this.mouseIdle=0,this.fov=65,this.lookBack=!1,this.aimT=0}get cx(){return this.inVehicle?this.inVehicle.x:this.x}get cz(){return this.inVehicle?this.inVehicle.z:this.z}armed(){let t=Ln[this.cur];return!t.melee&&!t.thrown&&!this.inVehicle}get weapon(){return Ln[this.cur]}get wstate(){return this.weapons[this.cur]}addMoney(t){this.money=Math.max(0,this.money+t),w.hud&&w.hud.moneyDelta(t)}giveWeapon(t,e){let n=Ln[t];if(!n||t==="fist")return;let s=this.weapons[t];s||(s=this.weapons[t]={mag:n.mag||0,reserve:0}),s.reserve=Math.min(n.ammoMax,s.reserve+e),w.hud&&w.hud.toast("Picked up "+n.name)}giveAll(t=1){for(let e of Io){let n=Ln[e];if(e==="fist")continue;let s=this.weapons[e]||(this.weapons[e]={mag:n.mag||0,reserve:0});s.mag=n.mag||0,s.reserve=Math.floor(n.ammoMax*t)}}selectWeapon(t){this.cur===t||t!=="fist"&&!this.weapons[t]||(this.cur=t,this.reloadT=0,this.fireT=.2,this.setWeapon(t),w.hud&&w.hud.weaponChanged(),ft.click())}cycleWeapon(t){let e=Io.filter(s=>s==="fist"||this.weapons[s]),n=e.indexOf(this.cur);this.selectWeapon(e[(n+t+e.length)%e.length])}onDamaged(t,e,n){this.lastHurt=w.time,w.hud&&w.hud.damageFlash(at(t/40,.15,.7)),t>4&&ft.pain(.7),this.inVehicle&&(w.shake=Math.min(1,(w.shake||0)+.1))}onDeath(t,e){this.inVehicle&&this.exitVehicle(!0),w.stats.deaths++,this.respawnT=4.6,ft.engine.stop(),ft.radio.off(),ft.wasted(),w.hud&&w.hud.wasted(!0)}onCrash(t){t>11&&this.damage((t-11)*2.4,null,{kind:"crash",ignoreArmor:!1})}onVehicleExploded(t){this.inVehicle===t&&this.exitVehicle(!0)}respawn(t){let e=w.world.pois[t==="busted"?"police":"hospital"];this.inVehicle&&this.exitVehicle(!0);let n=t==="busted"?Math.min(this.money,Math.max(200,Math.floor(this.money*.12))):Math.min(this.money,400);if(this.dead=!1,this.deadT=0,this.hp=this.maxHp,this.armor=0,this.stun=0,this.removed=!1,this.h.body.rotation.x=0,this.h.body.position.set(0,0,0),this.h.deadT=0,this.vx=this.vz=this.vy=0,this.place(e.x,e.z,0),this.money-=n,t==="busted"){for(let s of Object.keys(this.weapons))s!=="pistol"&&delete this.weapons[s];this.weapons.pistol={mag:12,reserve:24},this.selectWeapon("pistol")}w.police&&w.police.clear(!0),this.yaw=Math.PI,w.hud&&(w.hud.wasted(!1),w.hud.toast(t==="busted"?`Busted! Fine: $${n}`:`Hospital bill: $${n}`)),ft.ambience(.5)}busted(){this.dead||this.bustedT>0||(this.bustedT=3.2,w.paused_input=!0,ft.busted(),w.hud&&w.hud.busted(!0),this.inVehicle&&this.exitVehicle(!0),this.wishSpeed=0)}remove(){}nearestVehicle(t=3.4){let e=null,n=t;for(let s of w.vehicles){if(s.removed||s.exploded)continue;let r=this.x-s.x,a=this.z-s.z;if(Math.abs(r)>s.spec.hl+t||Math.abs(a)>s.spec.hl+t)continue;let o=Math.sin(s.heading),l=Math.cos(s.heading),c=Math.abs(r*o+a*l)-s.spec.hl,h=Math.abs(r*-l+a*o)-s.spec.hw,d=Math.hypot(Math.max(0,c),Math.max(0,h));d<n&&(n=d,e=s)}return e}enterVehicle(t){this.inVehicle||t.exploded||(t.driver==="ai"?(w.peds.fromVehicle(t,this.x,this.z,!0),w.police&&w.police.crime("carjack",t.x,t.z,null),w.stats.carjacks++):t.driver==="cop"?(w.police&&w.police.ejectCop(t),w.police&&w.police.crime("copcar",t.x,t.z,null)):t.parked&&t.key==="police"&&w.police&&w.police.crime("copcar",t.x,t.z,null),t.driver="player",t.ai=null,t.parked=!1,t.siren=!1,t.tag!=="mission"&&(t.tag=null),t.stolen||(t.stolen=!0,w.stats.cars++),this.inVehicle=t,this.h.root.visible=!1,this.x=t.x,this.z=t.z,this.vx=this.vz=0,ft.doorOpen(),ft.engine.start(t.spec.eng),ft.radio.on(),w.hud&&w.hud.toast(t.spec.name,1400),w.missions&&w.missions.onEnterVehicle(t),this.enterCd=.4)}exitVehicle(t=!1){let e=this.inVehicle;if(!e)return;let n=e.exitSpot(!0,this.radius);this.inVehicle=null,e.driver=null,e.tag=e.tag==="mission"?"mission":"left",e.throttle=0,e.steerIn=0,e.handbrake=!1,this.x=n.x,this.z=n.z,this.y=Wn(n.x,n.z),this.vx=e.vx*.5,this.vz=e.vz*.5,this.h.root.visible=!0;let s=e.speed;s>13&&!t&&(this.damage((s-10)*2.2,null,{kind:"fall"}),this.stun=.9,this.stunAge=0),ft.engine.stop(),ft.horn(!1),ft.skid(0),ft.doorClose(),ft.radio.off(),this.enterCd=.4,this.heading=e.heading}update(t){let e=w.camera;if(this.fireT-=t,this.enterCd-=t,this.bustedT>0){this.bustedT-=t,this.wishSpeed=0,this.stepMove(t),this.animate(t,{speed:0}),this.bustedT<=0&&(w.paused_input=!1,this.respawn("busted"),w.hud&&w.hud.busted(!1));return}if(this.dead){this.animate(t),this.respawnT-=t,this.respawnT<=.9&&w.hud&&!w.hud.fading&&w.hud.fade(!0),this.respawnT<=0&&(this.respawn("wasted"),w.hud&&w.hud.fade(!1));return}this.hp<50&&w.time-this.lastHurt>9&&(this.hp=Math.min(50,this.hp+t*1.5)),this.inVehicle?this.updateDriving(t):this.updateFoot(t);for(let s=0;s<Io.length;s++)At.pressed("Digit"+(s+1))&&this.selectWeapon(Io[s]);let n=At.takeWheel();n&&!this.inVehicle&&this.cycleWeapon(n),this.inVehicle||this.handleFire(t)}updateFoot(t){let e=Ln[this.cur];this.aiming=At.mouse(2)&&this.armed(),this.sprint=At.down("ShiftLeft")&&!this.aiming;let n=0,s=0;At.down("KeyW")&&(s+=1),At.down("KeyS")&&(s-=1),At.down("KeyA")&&(n-=1),At.down("KeyD")&&(n+=1);let r=Math.hypot(n,s),a=Math.sin(this.yaw),o=Math.cos(this.yaw),l=-Math.cos(this.yaw),c=Math.sin(this.yaw);if(r>0&&this.stun<=0){n/=r,s/=r;let h=a*s+l*n,d=o*s+c*n,u=this.aiming?2.7:this.sprint?7.4:4.3;this.wishX=h,this.wishZ=d,this.wishSpeed=u,!this.aiming&&this.faceCamT<=0&&this.faceTowards(Math.atan2(h,d),t,13)}else this.wishSpeed=0;if(this.faceCamT-=t,(this.aiming||this.faceCamT>0)&&this.faceTowards(this.yaw,t,18),At.pressed("Space")&&this.grounded&&this.stun<=0&&(this.vy=7.2,this.grounded=!1),this.aimUp=-(this.pitch-.12)*.8,this.stepMove(t,this.grounded?34:4),this.animate(t,{}),At.pressed("KeyF")&&this.enterCd<=0&&this.stun<=0){let h=this.nearestVehicle();h&&this.enterVehicle(h)}if(At.pressed("KeyR")&&this.armed()&&this.startReload(),At.pressed("KeyE")){let h=w.nearInteract;h&&h.action()}this.speed>4.5&&this.grounded&&(w.time*3.4|0)!==this._stepK&&(this._stepK=w.time*3.4|0,ft.footstep(.5))}updateDriving(t){let e=this.inVehicle;this.x=e.x,this.z=e.z,this.y=e.y,this.vx=e.vx,this.vz=e.vz,this.aiming=!1,this.h.root.position.set(e.x,e.y,e.z);let n=0;(At.down("KeyW")||At.down("ArrowUp"))&&(n+=1),(At.down("KeyS")||At.down("ArrowDown"))&&(n-=1);let s=0;(At.down("KeyA")||At.down("ArrowLeft"))&&(s+=1),(At.down("KeyD")||At.down("ArrowRight"))&&(s-=1),e.throttle=n,e.steerIn=s,e.handbrake=At.down("Space"),e.brakeIn=0,ft.horn(At.down("KeyH"),e.key==="bus"?1:0),At.pressed("KeyR")&&ft.radio.next(),At.pressed("KeyQ")&&ft.radio.prev(),At.pressed("KeyF")&&this.enterCd<=0&&this.exitVehicle(),e.spec&&ft.engine.set(at(Math.abs(e.fwd)/e.spec.vmax*.9+.12+(n>0?.06:0),0,1),Math.max(0,n)),ft.skid(e.skidding?at(e.slip/8,.25,1):0)}startReload(){let t=Ln[this.cur],e=this.wstate;!e||!t.mag||this.reloadT>0||e.mag>=t.mag||e.reserve<=0||(this.reloadT=t.reload,ft.reload(),w.hud&&w.hud.reloading(t.reload))}finishReload(){let t=Ln[this.cur],e=this.wstate;if(!e)return;let n=t.mag-e.mag,s=Math.min(n,e.reserve);e.mag+=s,e.reserve-=s}aimPoint(t=250){let e=w.camera;e.getWorldDirection(Dn);let n=w.camDistNow||4;ai.copy(e.position).addScaledVector(Dn,n);let s=Po(ai.x,ai.y,ai.z,Dn.x,Dn.y,Dn.z,t,this,this.inVehicle);if(!s||s.kind!=="actor"){let r=null,a=.05;for(let o of w.actors){if(o===this||o.dead||o.removed||o.inVehicle)continue;xh.set(o.x-ai.x,o.y+1.15-ai.y,o.z-ai.z);let l=xh.length();if(l>70||l<3)continue;xh.divideScalar(l);let c=Math.acos(at(xh.dot(Dn),-1,1));c<a&&(!s||l<s.t+1)&&qi(ai.x,ai.y,ai.z,o.x,o.y+1.2,o.z)&&(a=c,r=o)}if(r&&(this.aiming||At.mouse(0)))return{x:r.x,y:r.y+1.15,z:r.z,actor:r}}return s?{x:s.x,y:s.y,z:s.z,hit:s}:{x:ai.x+Dn.x*t,y:ai.y+Dn.y*t,z:ai.z+Dn.z*t}}muzzle(t){this.h.root.updateMatrixWorld(!0);let e=this.h.weapon;return e?(t.copy(e.userData.muzzle),e.localToWorld(t)):t.set(this.x,this.y+1.4,this.z),t}handleFire(t){let e=Ln[this.cur],n=this.wstate;if(this.reloadT>0){this.reloadT-=t,this.reloadT<=0&&this.finishReload();return}let s=e.melee?At.mousePressed(0)||At.mouse(0)&&this.fireT<=0:e.auto?At.mouse(0):At.mousePressed(0);if(this.punchT>0&&(this.punchT+=t*3,!this.punchHit&&this.punchT>.4&&(this.punchHit=!0,this.doPunch()),this.punchT>=1&&(this.punchT=0)),!s||this.fireT>0||this.stun>0)return;if(e.melee){this.fireT=e.rate,this.punchT=.001,this.punchHit=!1,this.faceCamT=.5;return}if(e.thrown){if(!n||n.reserve<=0)return;n.reserve--,this.fireT=e.rate,this.faceCamT=.6,n.reserve<=0&&(delete this.weapons.grenade,this.cur="pistol",this.setWeapon("pistol"),w.hud&&w.hud.weaponChanged());let u=this.aimPoint(60),f=this.muzzle(um),p=u.x-f.x,x=u.y-f.y,g=u.z-f.z,m=Math.hypot(p,x,g)||1;Hd(this,f.x,f.y+.2,f.z,p/m,Math.max(-.2,x/m)+.25,g/m,at(8+m*.5,10,20)),w.police&&w.police.crime("grenade",this.x,this.z,null,.5);return}if(n.mag<=0){n.reserve>0?this.startReload():(ft.dryFire(),this.fireT=.3);return}n.mag--,this.fireT=e.rate,this.faceCamT=.9,this.h.recoil=1;let r=this.aimPoint(e.range||200),a=this.muzzle(um);Dn.set(r.x-a.x,r.y-a.y,r.z-a.z);let o=Dn.length();o<1.4?w.camera.getWorldDirection(Dn):Dn.divideScalar(o);let l=this.speed>2?1.5:1,c=this.aiming?.5:1,h={x:Dn.x,y:Dn.y,z:Dn.z},d={x:a.x,y:a.y,z:a.z};e.projectile?(Vd(this,d.x,d.y,d.z,h.x,h.y,h.z),Pn.gunshot("rpg",d.x,d.z),te.muzzle(d.x,d.y,d.z,h.x,h.y,h.z,2)):ks(this,e,d,h,d,{spread:e.spread*l*c}),this.pitch-=e.kick*(this.aiming?.6:1)*(.7+Math.random()*.6),this.yaw+=rt(-.5,.5)*e.kick*.5,w.police&&w.police.crime("shots",this.x,this.z,null,.15),n.mag<=0&&n.reserve>0&&setTimeout(()=>{!this.dead&&this.wstate===n&&this.startReload()},250)}doPunch(){let t=Ln.fist,e=null,n=t.range+.3;for(let s of w.actors){if(s===this||s.dead||s.removed||s.inVehicle)continue;let r=s.x-this.x,a=s.z-this.z,o=Math.hypot(r,a);o>n||Math.abs(Wi(Math.atan2(r,a)-this.heading))>1||(n=o,e=s)}if(e){let s=e.x-this.x,r=e.z-this.z,a=Math.hypot(s,r)||1;e.vx+=s/a*3.5,e.vz+=r/a*3.5,Pn.punch(e.x,e.z),e.damage(t.dmg,this,{dir:{x:s/a,z:r/a},kind:"melee"}),e.kind==="civ"&&w.police&&w.police.crime("assault",e.x,e.z,e),w.hud&&w.hud.hitMarker(e.dead,!1)}else ft.punch(.5,0)}},_h=0,Lo=0,yh=new P;function Wd(i,t=!1){let e=w.player,n=w.camera,s=e.inVehicle,r=At.takeMouse(),a=.0021*w.settings.sensitivity*(e.aiming?.6:1);if(!w.paused_input&&!e.dead&&(e.yaw-=r.dx*a,e.pitch+=r.dy*a),!s&&!w.paused_input&&!e.dead&&(e.yaw+=((At.down("ArrowLeft")?1:0)-(At.down("ArrowRight")?1:0))*i*2.4,e.pitch+=((At.down("ArrowDown")?1:0)-(At.down("ArrowUp")?1:0))*i*1.6),e.pitch=at(e.pitch,-.55,1.25),s){r.dx||r.dy?_h=0:_h+=i;let z=At.down("KeyC"),B=s.speed>2?s.fwd>=0?s.heading:s.heading+Math.PI:s.heading;z?e.yaw=fo(e.yaw,s.heading+Math.PI,8,i):(_h>.9||t)&&(e.yaw=fo(e.yaw,s.heading,t?40:2.6,i)),_h>1.4&&!z&&(e.pitch=Mn(e.pitch,.22,2,i))}w.camYaw=e.yaw;let o,l,c,h,d=0,u=65;s?(o=s.x,l=s.y+s.spec.top*.6+.6,c=s.z,h=s.spec.len*.85+3.6+Math.min(s.speed*.06,2.2),u=68+Math.min(s.speed*.32,20)):(o=e.x,l=e.y+1.5-(e.dead?.9:0),c=e.z,e.aiming?(h=2.4,d=.85,u=50):(h=4.4,d=.35,u=e.sprint&&e.speed>5?72:65),e.dead&&(h=5.5)),e.camDist=Mn(e.camDist,h,9,i),e.fov=Mn(e.fov,u,6,i);let f=Math.cos(e.pitch),p=Math.sin(e.pitch);yh.set(Math.sin(e.yaw)*f,-p,Math.cos(e.yaw)*f);let x=-Math.cos(e.yaw),g=Math.sin(e.yaw),m=-yh.x*e.camDist+x*d,v=-yh.y*e.camDist+.25,A=-yh.z*e.camDist+g*d,y=Math.hypot(m,v,A);m/=y,v/=y,A/=y;let S=_o(o,l,c,m,v,A,y+.5,!0);S&&!S.ground&&S.t<y+.4&&(y=Math.max(.9,S.t-.45));let b=o+m*y,R=l+v*y,_=c+A*y;R=Math.max(R,.35+Wn(b,_)),w.camDistNow=y;let E=w.shake||0;Lo+=i*40;let I=E>.01?(Math.sin(Lo*1.3)+Math.sin(Lo*2.7))*.05*E:0,N=E>.01?(Math.cos(Lo*1.7)+Math.sin(Lo*2.1))*.05*E:0;n.position.set(b+I,R+N,_),n.rotation.set(-e.pitch+N*.4,e.yaw+Math.PI+I*.4,0,"YXZ"),Math.abs(n.fov-e.fov)>.05&&(n.fov=e.fov,n.updateProjectionMatrix())}var oi={nx:0,nz:0,depth:0,px:0,pz:0},Mh={x:0,z:0,r:0},TM=1,EM=24,li=class{constructor(t,e,n,s,r){this.id=TM++,this.key=t,this.spec=Os[t];let a=this.spec;this.model=cm(t,r,w.world.headlightTex),this.model.group.rotation.order="YXZ",this.x=e,this.z=n,this.y=Wn(e,n),this.heading=s,this.vx=0,this.vz=0,this.vy=0,this.yawRate=0,this.spin=0,this.pitch=0,this.roll=0,this.steer=0,this.air=!1,this.rampVy=0,this.throttle=0,this.steerIn=0,this.brakeIn=0,this.handbrake=!1,this.hp=a.hp,this.maxHp=a.hp,this.burning=!1,this.fuse=0,this.exploded=!1,this.wreckT=0,this.driver=null,this.ai=null,this.siren=!1,this.removed=!1,this.rad=Math.hypot(a.hl,a.hw),this.obb={x:e,z:n,hl:a.hl,hw:a.hw,fx:Math.sin(s),fz:Math.cos(s)},this.skidT=0,this.lastSkid={l:null,r:null},this.fireT=0,this.lastDamager=null,this.owned=!1,this.stolen=!1,this.brakeLit=!1,this.slip=0,this.wheelRot=0,this.tag=null,w.scene.add(this.model.group),w.vehicles.push(this),this.sync(0)}get speed(){return Math.hypot(this.vx,this.vz)}get fwd(){return this.vx*Math.sin(this.heading)+this.vz*Math.cos(this.heading)}get lat(){return this.vx*-Math.cos(this.heading)+this.vz*Math.sin(this.heading)}get hpFrac(){return at(this.hp/this.maxHp,0,1)}doorPoint(t,e={}){let n=Math.sin(this.heading),r=Math.cos(this.heading),a=-n,o=this.spec.hw+.85;return e.x=this.x+r*t*o,e.z=this.z+a*t*o,e.heading=this.heading,e}exitSpot(t=!0,e=.4){let n=t?[1,-1]:[-1,1],s={x:0,z:0};for(let o of n){this.doorPoint(o,s);let l={x:s.x,z:s.z};if(!na(l,e+.05))return{x:s.x,z:s.z}}let r=Math.sin(this.heading),a=Math.cos(this.heading);return{x:this.x-r*(this.spec.hl+1.2),z:this.z-a*(this.spec.hl+1.2)}}damage(t,e){this.exploded||t<=0||this.removed||(this.hp-=t,e&&(this.lastDamager=e),this.hp<=0&&!this.burning&&(this.burning=!0,this.fuse=2.2+Math.random()*2.4),this.updatePaint(),this.driver==="player"&&w.hud&&w.hud.damageFlash(.25),this.ai&&this.ai.onDamage&&this.ai.onDamage(this,e,t))}updatePaint(){let t=this.hpFrac;this.model.paintMat.color.copy(this.model.baseColor).multiplyScalar(this.exploded?.08:.35+.65*t),this.model.paintMat.roughness=.32+(1-t)*.5}explode(){if(this.exploded)return;this.exploded=!0,this.burning=!0,this.wreckT=0;let t=this.spec.len>8?1.5:1;w.explode(this.x,this.y+.6,this.z,9*t,320,{source:this.lastDamager,vehicle:this}),this.vy=8,this.air=!0,this.spin+=rt(-2.5,2.5),this.vx+=rt(-2,2),this.vz+=rt(-2,2),this.throttle=0,this.steerIn=0,this.driver==="player"&&w.player.onVehicleExploded(this),this.driver=null,this.ai=null,this.siren=!1,this.model.headMesh.visible=!1,this.model.tailMesh.visible=!1,this.model.beam&&(this.model.beam.visible=!1),this.model.bar&&(this.model.bar.red.material=Fe.barOff,this.model.bar.blue.material=Fe.barOff),this.updatePaint()}updateObb(){let t=this.obb;t.x=this.x,t.z=this.z,t.fx=Math.sin(this.heading),t.fz=Math.cos(this.heading)}update(t){if(this.removed)return;let e=this.spec;this.exploded?(this.throttle=0,this.steerIn=0,this.brakeIn=.1,this.handbrake=!1):this.ai?this.ai.update(this,t):this.driver||(this.throttle=0,this.steerIn=0,this.brakeIn=.4,this.handbrake=this.speed<3.5);let n=Math.sin(this.heading),s=Math.cos(this.heading),r=-s,a=n,o=this.vx*n+this.vz*s,l=this.vx*r+this.vz*a,c=Math.abs(o)/e.vmax,h=Wn(this.x,this.z);if(this.air)this.yawRate*=Math.exp(-.5*t);else{let p=e.steer*(1-.68*at(c*1.25,0,1)),x=this.steerIn*p,g=(Math.abs(x)>Math.abs(this.steer)?2.6:4.2)*t;this.steer+=at(x-this.steer,-g,g);let m=this.throttle,v=0;if(m>.01?v=o<-1.5?e.brake*m:m*e.acc*at(1-Math.pow(Math.max(o,0)/e.vmax,2.2),0,1):m<-.01&&(v=o>1.5?-e.brake*-m:m*e.acc*.55*at(1- -o/(e.vmax*.3),0,1)),m>.01&&o<-1.5||m<-.01&&o>1.5){let R=Math.min(Math.abs(o),e.brake*Math.abs(m)*t);o-=Math.sign(o)*R,v=0}o+=v*t,this.brakeIn>.01&&(o-=Math.sign(o)*Math.min(Math.abs(o),e.brake*this.brakeIn*t)),Math.abs(m)<.01&&this.brakeIn<.01&&(o-=Math.sign(o)*Math.min(Math.abs(o),1.4*t)),o-=o*Math.abs(o)*9e-4*t,this.handbrake&&(o-=Math.sign(o)*Math.min(Math.abs(o),9*t));let A=this.handbrake?1.25:e.grip;this.handbrake?A*=1:A*=1-.28*at(Math.abs(this.steer)/e.steer,0,1)*at(c*2,0,1),l*=Math.exp(-A*t);let y=o/e.wb*Math.tan(this.steer);this.handbrake&&Math.abs(o)>4&&(y*=1.7);let S=e.grip*2.3*(this.handbrake?2.2:1),b=Math.min(2.8,S/Math.max(Math.abs(o),3));this.yawRate=Mn(this.yawRate,at(y,-b,b),14,t),this.slip=Math.abs(l)}this.vx=n*o+r*l,this.vz=s*o+a*l,this.heading=Wi(this.heading+(this.yawRate+this.spin)*t),this.spin*=Math.exp(-2.6*t),this.x+=this.vx*t,this.z+=this.vz*t;let d=Wn(this.x,this.z);if(this.air){if(this.vy-=EM*t,this.y+=this.vy*t,this.y<=d){let p=-this.vy;this.y=d,this.vy=0,this.air=!1,p>5&&this.crashed(p*.8,this.x,this.z,0,1),p>3&&te.dust(this.x,.3,this.z,8,4,1.5)}}else{let p=this.y,x=d>.3;if(x){let g=Wn(this.x-n*.6,this.z-s*.6);this.rampVy=Mn(this.rampVy,Math.max(0,(d-g)/.6*o),30,t)}d<p-.35&&this.rampVy>1.5&&Math.abs(o)>5?(this.air=!0,this.vy=this.rampVy,this.rampVy=0):(x||(this.rampVy=0),Math.abs(d-p)<.5?this.y=Mn(p,d,26,t):this.y=d)}let u;if(this.air)u=-Math.atan2(this.vy,Math.max(4,Math.abs(this.fwd)))*.9;else{let p=Wn(this.x+n*e.hl*.85,this.z+s*e.hl*.85),x=Wn(this.x-n*e.hl*.85,this.z-s*e.hl*.85);u=-Math.atan2(p-x,e.hl*1.7),u+=at(-(this.throttle-this.brakeIn*Math.sign(o))*.015,-.03,.03)}this.pitch=Mn(this.pitch,u,10,t),this.roll=Mn(this.roll,at(l*.012*at(c*3,0,1),-.07,.07),6,t),this.updateObb(),this.collideWorld(t),Math.abs(this.speed)>.8&&this.hitActors();let f=666;Math.abs(this.x)>f&&(this.x=Math.sign(this.x)*f,this.vx*=-.3,this.vz*=.9),Math.abs(this.z)>f&&(this.z=Math.sign(this.z)*f,this.vz*=-.3,this.vx*=.9),this.updateFireState(t),this.skidMarks(t)}collideWorld(t){I0(this.obb,(e,n)=>{if(this.y>n.h+.4||n.tag==="pond"||n.rb&&((n.rb.axis==="x"?this.x:this.z)-n.rb.edge)*n.rb.sign<0)return;this.x+=e.nx*e.depth,this.z+=e.nz*e.depth,this.obb.x=this.x,this.obb.z=this.z;let s=this.vx*e.nx+this.vz*e.nz;if(s<0){let r=-s;this.vx-=1.22*s*e.nx,this.vz-=1.22*s*e.nz;let a=-e.nz,o=e.nx,l=this.vx*a+this.vz*o;this.vx-=a*l*.06,this.vz-=o*l*.06;let c=e.px-this.x,h=e.pz-this.z;this.spin+=at((h*e.nx-c*e.nz)*r*.045,-2,2),this.crashed(r,e.px,e.pz,e.nx,e.nz,n)}})}crashed(t,e,n,s,r,a){if(t<2.2)return;let o=a&&(a.tag==="tree"||a.tag==="lamp"||a.tag==="signal")?.45:1,l=Math.pow(Math.max(t-2.6,0),2)*3.4*o*Math.sqrt(1500/this.spec.mass);l>1&&this.damage(l,null),Pn.crash(at(t/16,.15,1),e,n),t>4&&te.spark(e,this.y+.5,n,s,.4,r,Math.min(10,Math.floor(t)),4),this.driver==="player"&&(w.shake=Math.min(1,(w.shake||0)+at(t/30,0,.6))),this.driver==="player"&&t>9&&w.player&&w.player.onCrash(t),this.ai&&this.ai.onCrash&&this.ai.onCrash(this,t,a),a&&a.tag==="lamp"&&t>6&&te.debris(e,1.5,n,5,5,[.3,.3,.3])}hitActors(){let t=w.actors,e=this.obb,n=Math.sin(this.heading),s=Math.cos(this.heading);for(let r=0;r<t.length;r++){let a=t[r];if(a.removed||a.inVehicle)continue;let o=a.x-this.x,l=a.z-this.z;if(Math.abs(o)>this.rad+1||Math.abs(l)>this.rad+1||Math.abs(a.y-this.y)>1.5||(Mh.x=a.x,Mh.z=a.z,Mh.r=a.radius,!xo(e,Mh,oi)))continue;let c=-(this.vx*oi.nx+this.vz*oi.nz);if(!(c<1.2)){if(a.dead){a.vx+=-oi.nx*c*.5,a.vz+=-oi.nz*c*.5;continue}a.stun>.5||(a.hitByVehicle(this,c,-oi.nx,-oi.nz),this.vx*=.985,this.vz*=.985,this.driver==="player"&&c>3&&(w.shake=Math.min(1,(w.shake||0)+.1)))}}}updateFireState(t){let e=this.spec,n=Math.sin(this.heading),s=Math.cos(this.heading);if(this.exploded){this.wreckT+=t,this.wreckT<30&&Math.random()<t*30&&te.fire(this.x+rt(-1,1),this.y+.8,this.z+rt(-1,1),1.1),this.wreckT<40&&Math.random()<t*14&&te.blackSmoke(this.x,this.y+1,this.z,1.3);return}if(this.burning)this.fuse-=t,Math.random()<t*40&&te.fire(this.x+n*e.hl*.55,this.y+.9,this.z+s*e.hl*.55,.9),Math.random()<t*18&&te.blackSmoke(this.x+n*e.hl*.5,this.y+1,this.z+s*e.hl*.5,.8),this.fuse<=0&&this.explode();else if(this.hpFrac<.3){let r=(.3-this.hpFrac)/.3;Math.random()<t*(6+14*r)&&te.smoke(this.x+n*e.hl*.6,this.y+.95,this.z+s*e.hl*.6,.8,.5-.35*r),this.hpFrac<.12&&Math.random()<t*10&&te.fire(this.x+n*e.hl*.6,this.y+.9,this.z+s*e.hl*.6,.5)}}skidMarks(t){if(this.air){this.lastSkid.l=null;return}let e=this.slip>3.2&&this.speed>4||this.handbrake&&this.speed>5||this.brakeIn>.8&&this.speed>10||this.throttle>.9&&this.speed<5&&this.slip>1.5;if(this.skidding=e,!e){this.lastSkid.l=null;return}if(this.skidT-=t,this.skidT>0)return;this.skidT=.05;let n=this.spec,s=Math.sin(this.heading),r=Math.cos(this.heading),a=r,o=-s;for(let l of[-1,1]){let c=this.x-s*n.wb*.5+a*l*n.track*.5,h=this.z-r*n.wb*.5+o*l*n.track*.5;te.skid(c-s*.3,h-r*.3,this.heading,1,.26)}Math.random()<.4&&te.dust(this.x-s*n.wb*.5,.2,this.z-r*n.wb*.5,1,1.2,.8)}sync(t){let e=this.model,n=this.spec;w.envI!==void 0&&(e.paintMat.envMapIntensity=w.envI),e.group.position.set(this.x,this.y,this.z),e.group.rotation.set(this.pitch,this.heading,this.roll);let s=this.fwd;this.wheelRot+=s*t/n.wr;for(let l of e.wheels)l.spin.rotation.x=this.wheelRot,l.front&&(l.pivot.rotation.y=this.steer);let r=w.night>.35,a=!!(this.driver||this.ai),o=r&&a&&!this.exploded;if(e.headMesh.material=o?Fe.headOn:Fe.headOff,this.brakeLit=this.brakeIn>.05||this.throttle<-.1&&s>1,e.tailMesh.material=this.brakeLit&&!this.exploded?Fe.tailOn:Fe.tailOff,e.beam){let l=w.camera;e.beam.visible=o&&l&&Math.abs(l.position.x-this.x)<140&&Math.abs(l.position.z-this.z)<140}if(e.bar)if(this.siren&&!this.exploded){let l=Math.floor(w.time*5)%2===0;e.bar.red.material=l?Fe.redOn:Fe.barOff,e.bar.blue.material=l?Fe.barOff:Fe.blueOn}else e.bar.red.material=Fe.barOff,e.bar.blue.material=Fe.barOff}remove(){if(this.removed)return;this.removed=!0,w.scene.remove(this.model.group),this.model.paintMat.dispose();let t=w.vehicles.indexOf(this);t>=0&&w.vehicles.splice(t,1)}};function AM(i,t){let e=i.x-t.x,n=i.z-t.z,s=i.rad+t.rad;if(e*e+n*n>s*s||Math.abs(i.y-t.y)>2.5||!C0(i.obb,t.obb,oi))return;let r=i.spec.mass,a=t.spec.mass,o=r+a,l=oi.nx,c=oi.nz,h=oi.depth+.01;i.x+=l*h*(a/o),i.z+=c*h*(a/o),t.x-=l*h*(r/o),t.z-=c*h*(r/o),i.updateObb(),t.updateObb();let d=(i.vx-t.vx)*l+(i.vz-t.vz)*c;if(d>=0)return;let u=-(1+.32)*d/(1/r+1/a);i.vx+=u/r*l,i.vz+=u/r*c,t.vx-=u/a*l,t.vz-=u/a*c;let f=-d,p=oi.px,x=oi.pz;if(i.spin+=at(((x-i.z)*l-(p-i.x)*c)*f*.03*(a/o)*2,-2,2),t.spin+=at(-((x-t.z)*l-(p-t.x)*c)*f*.03*(r/o)*2,-2,2),f>2.2){let g=Math.pow(f-2.2,2)*3.2;i.damage(g*(a/o)*1.6,t.driver==="player"?w.player:t),t.damage(g*(r/o)*1.6,i.driver==="player"?w.player:i),Pn.crash(at(f/14,.2,1),p,x),te.spark(p,i.y+.6,x,l,.3,c,Math.min(12,Math.floor(f*1.2)),4),(i.driver==="player"||t.driver==="player")&&(w.shake=Math.min(1,(w.shake||0)+at(f/25,0,.6)),f>9&&w.player.onCrash(f)),i.ai&&i.ai.onCrash&&i.ai.onCrash(i,f,t),t.ai&&t.ai.onCrash&&t.ai.onCrash(t,f,i)}}function dm(i){let t=w.vehicles;for(let e=0;e<t.length;e++)t[e].update(i);for(let e=0;e<t.length;e++){let n=t[e];if(!n.removed)for(let s=e+1;s<t.length;s++){let r=t[s];r.removed||AM(n,r)}}for(let e=t.length-1;e>=0;e--)t[e].removed&&t.splice(e,1)}function fm(i){let t=w.vehicles;for(let e=0;e<t.length;e++)t[e].sync(i)}var RM=[[1,0],[0,1],[-1,0],[0,-1]],da=i=>[-i[1],i[0]],pm=i=>[i[1],-i[0]],CM=i=>Math.atan2(i[0],i[1]);function fa(i,t){return[at(Math.round(i/100+12/2),0,12),at(Math.round(t/100+12/2),0,12)]}var Xd=(i,t)=>i>=0&&t>=0&&i<=12&&t<=12;function Do(i){let t=Math.sin(i),e=Math.cos(i);return Math.abs(t)>Math.abs(e)?[Math.sign(t),0]:[0,Math.sign(e)]}var bh=(i,t)=>i*13+t;function mm(i,t,e,n,s=400){if(i===e&&t===n)return[];let r=new Map([[bh(i,t),null]]),a=[[i,t]],o=0,l=!1;for(;o<a.length&&o<s;){let[d,u]=a[o++];for(let f of RM){let p=d+f[0],x=u+f[1];if(!(!Xd(p,x)||r.has(bh(p,x)))){if(r.set(bh(p,x),[d,u]),p===e&&x===n){l=!0,o=a.length;break}a.push([p,x])}}}if(!l)return[];let c=[],h=[e,n];for(;h&&!(h[0]===i&&h[1]===t);)c.push(h),h=r.get(bh(h[0],h[1]));return c.reverse()}function gm(i,t,e,n,s){let r=$t(i),a=$t(t),o=da(e),l=da(n),c=e[0]!==0?"x":"z",h=r-e[0]*(20/2+5.5)+o[0]*5,d=a-e[1]*(20/2+5.5)+o[1]*5;s.push({x:h,z:d,stop:c});let u=r-e[0]*(20/2)+o[0]*5,f=a-e[1]*(20/2)+o[1]*5,p=r+n[0]*(20/2)+l[0]*5,x=a+n[1]*(20/2)+l[1]*5,g=e[0]===n[0]&&e[1]===n[1];if(s.push({x:u,z:f,turn:!g}),g)s.push({x:(u+p)/2,z:(f+x)/2});else{let m=r+o[0]*5,v=a+o[1]*5,A=r+l[0]*5,y=a+l[1]*5,S=(A-m)*e[0]+(y-v)*e[1],b=m+e[0]*S,R=v+e[1]*S;for(let _=1;_<7;_++){let E=_/7,I=(1-E)*(1-E),N=2*E*(1-E),z=E*E;s.push({x:I*u+N*b+z*p,z:I*f+N*R+z*x,turn:!0})}}return s.push({x:p,z:x,turn:!1}),s}function lr(i,t,e,n,s=40){for(let r=0;r<s;r++){let a=Math.random()<.5,o=Math.random()*13|0,l=Math.random()*12|0,c=Math.random()<.5?1:-1,h=rt(.3,.7),d=$t(l)+h*100,u,f,p,x,g;a?(p=[c,0],u=d,f=$t(o)+(c>0?5:-5),x=c>0?l+1:l,g=o):(p=[0,c],f=d,u=$t(o)+(c>0?-5:5),x=o,g=c>0?l+1:l);let m=Math.hypot(u-i,f-t);if(!(m<e||m>n))return{x:u,z:f,heading:CM(p),dir:p,ni:x,nj:g}}return null}var xm=34,_m=26,IM=90,ym=260,PM=330;function Yd(i,t){let e=Math.sin(i.heading),n=Math.cos(i.heading),s=-n,r=e,a=i.spec.hl,o=i.spec.hw,l=1/0,c=w.vehicles;for(let d=0;d<c.length;d++){let u=c[d];if(u===i||u.removed)continue;let f=u.x-i.x,p=u.z-i.z;if(Math.abs(f)>t+12||Math.abs(p)>t+12)continue;let x=f*e+p*n,g=f*s+p*r;x<.5||x>t+a+u.rad||Math.abs(g)>o+u.rad*.55+.35||u.vx*e+u.vz*n<-3&&Math.abs(g)>o+.9||(l=Math.min(l,x-a-u.rad*.75))}let h=w.actors;for(let d=0;d<h.length;d++){let u=h[d];if(u.removed||u.inVehicle)continue;let f=u.x-i.x,p=u.z-i.z;if(Math.abs(f)>t+6||Math.abs(p)>t+6)continue;let x=f*e+p*n,g=f*s+p*r;x<.5||x>t+a||Math.abs(g)>o+.75+u.radius||(l=Math.min(l,x-a-.4))}return l}var No=class{constructor(t,e){this.dir=e.dir,this.ni=e.ni,this.nj=e.nj,this.queue=[],this.prev={x:t.x,z:t.z},this.cruise=rt(10,15.5)*(Os[t.key].vmax>50?1.05:1)*(t.key==="bus"?.75:1),this.stuckT=0,this.reverseT=0,this.panic=0,this.honk=0,this.wait=0,this.waitT=0,this.ghostT=0,this.idleT=0,this.why="go",this.plan(t)}plan(){let t=this.dir,e=[[t,.62],[da(t),.19],[pm(t),.19]].filter(([s])=>Xd(this.ni+s[0],this.nj+s[1])),n;if(!e.length)n=[-t[0],-t[1]];else{let s=Math.random()*e.reduce((r,a)=>r+a[1],0);for(let[r,a]of e)if(s-=a,s<=0){n=r;break}n=n||e[0][0]}gm(this.ni,this.nj,t,n,this.queue),this.ni+=n[0],this.nj+=n[1],this.dir=n}recover(t){let e=Do(t.heading),n=e[0]!==0,s,r;if(n){let c=at(Math.round(t.z/100+12/2),0,12),h=t.x/100+12/2;s=e[0]>0?Math.ceil(h+.15):Math.floor(h-.15),r=c}else{let c=at(Math.round(t.x/100+12/2),0,12),h=t.z/100+12/2;r=e[1]>0?Math.ceil(h+.15):Math.floor(h-.15),s=c}s=at(s,0,12),r=at(r,0,12),this.dir=e,this.ni=s,this.nj=r,this.queue.length=0;let a=da(e),o=n?t.x+e[0]*6:$t(s)+a[0]*5,l=n?$t(r)+a[1]*5:t.z+e[1]*6;this.queue.push({x:o,z:l}),this.prev={x:t.x,z:t.z},this.plan()}update(t,e){let n=t.spec,s=this.queue;for(;s.length<12;)this.plan();let r=Math.sin(t.heading),a=Math.cos(t.heading),o=t.fwd;if(this.panic=Math.max(0,this.panic-e),this.reverseT>0){this.reverseT-=e,t.throttle=-1,t.brakeIn=0,t.handbrake=!1,t.steerIn=this.reverseSteer,this.reverseT<=0&&this.recover(t);return}let l=s[0],c=l.x-this.prev.x,h=l.z-this.prev.z,d=Math.hypot(c,h)||1;c/=d,h/=d,(t.x-this.prev.x)*c+(t.z-this.prev.z)*h>d-1.8&&(this.prev={x:l.x,z:l.z},s.shift(),l=s[0],c=l.x-this.prev.x,h=l.z-this.prev.z,d=Math.hypot(c,h)||1,c/=d,h/=d);let f=at(5+Math.abs(o)*.5,5,14),p=at((t.x-this.prev.x)*c+(t.z-this.prev.z)*h+f,0,d),x=this.prev.x+c*p,g=this.prev.z+h*p,m=Wi(Math.atan2(x-t.x,g-t.z)-t.heading);t.steerIn=at(m*2,-1,1);let v=this.cruise*(this.panic>0?1.5:1);(l.turn||s[1]&&s[1].turn||s[2]&&s[2].turn)&&(v=Math.min(v,6.2));let A=!1;for(let b=0;b<s.length&&b<4;b++){let R=s[b];if(!R.stop)continue;let _=(R.x-t.x)*r+(R.z-t.z)*a;if(_<-1)break;let E=wd(R.stop),I=_>o*o/(2*6.5)+3;(E==="red"||E==="yellow"&&I)&&(v=Math.min(v,Math.sqrt(Math.max(0,2*4.5*(_-1.2)))),A=!0);break}this.ghostT=Math.max(0,this.ghostT-e);let y=Yd(t,6+Math.max(0,o)*1.3);this.ghostT>0&&(y>1.2&&(y=1/0),v=Math.min(v,4)),y<1/0&&(v=Math.min(v,Math.max(0,y-2.2)*1.1),y<1.6&&(v=0)),this.why=A?"light":y<1/0&&v<1?"obstacle":"go",this.why==="obstacle"&&Math.abs(o)<.6?this.waitT+=e:this.waitT=Math.max(0,this.waitT-e*2),this.waitT>4+t.id%6*.9&&(this.waitT=0,this.ghostT=3.5),Math.abs(o)<.5&&this.why!=="light"?this.idleT+=e:this.idleT=Math.max(0,this.idleT-e);let S=v-o;S>0?(t.throttle=at(S*.4,0,1),t.brakeIn=0):(t.throttle=0,t.brakeIn=at(-S*.22,0,1)),v<.1&&o<.6&&(t.brakeIn=.6,t.throttle=0),t.handbrake=!1,v>2.5&&Math.abs(o)<.45?this.stuckT+=e:this.stuckT=Math.max(0,this.stuckT-e*2),this.stuckT>2.6&&(this.stuckT=0,this.reverseT=1.4,this.reverseSteer=-Math.sign(m||1),this.stuckCount=(this.stuckCount||0)+1)}onDamage(t,e){e&&(this.panic=5)}onCrash(t,e){e>4&&(this.recoverT=.8),e>11&&Hn(.4)&&t.driver==="ai"&&w.peds?w.peds.driverBailsOut(t):e>3&&(this.panic=3),e>5&&(this.queue.length=0,this.recover(t))}},gi={timer:0,init(){let i=w.playerPos();for(let t=0;t<xm;t++)this.spawnMoving(i.x,i.z,40,ym);for(let t=0;t<_m;t++)this.spawnParked(i.x,i.z,30,240)},clear(i,t,e){for(let n of w.vehicles)if(Math.hypot(n.x-i,n.z-t)<e)return!1;return!0},spawnMoving(i,t,e,n){let s=lr(i,t,e,n);if(!s||!this.clear(s.x,s.z,11)||!this.hidden(s.x,s.z,110))return null;let r=Cn(lm),a=new li(r,s.x,s.z,s.heading,r==="taxi"||r==="bus"||r==="police"?void 0:Cn(Bd));a.driver="ai",a.ai=new No(a,s);let o=a.ai.cruise*.8;return a.vx=Math.sin(a.heading)*o,a.vz=Math.cos(a.heading)*o,a},spawnParked(i,t,e,n){for(let s=0;s<20;s++){let r=lr(i,t,e,n,4);if(!r)continue;let a=da(r.dir),o=r.dir[0]!==0?r.x:r.z,l=3,c=r.x+a[0]*l,h=r.z+a[1]*l,d=((o+600)%100+100)%100;if(d<24||d>76||!this.clear(c,h,6.5)||!this.hidden(c,h,90))continue;let u=Cn(["sedan","sedan","sports","muscle","suv","pickup","van","taxi"]),f=new li(u,c,h,r.heading+(Hn(.03)?.05:0),Cn(Bd));return f.parked=!0,f}return null},hidden(i,t,e){let n=w.camera;if(!n)return!0;let s=i-n.position.x,r=t-n.position.z,a=Math.hypot(s,r);if(a>e)return!0;let o=w.camYaw||0;return(s*Math.sin(o)+r*Math.cos(o))/(a||1)<-.25},update(i){if(this.timer-=i,this.timer>0)return;this.timer=.6;let t=w.playerPos(),e=0,n=0;for(let r of w.vehicles){if(r.removed)continue;let a=Math.hypot(r.x-t.x,r.z-t.z);if(r.driver==="player"||r.tag==="mission"||r.tag==="cop")continue;if(r.exploded&&r.wreckT>40){r.remove();continue}if(a>PM&&this.hidden(r.x,r.z,200)||r.tag==="left"&&a>520){r.remove();continue}r.ai?e++:r.parked&&!r.exploded&&n++,r.ai&&(r.ai.stuckCount>3||r.ai.idleT>22)&&this.hidden(r.x,r.z,60)&&r.remove()}let s=Math.round(xm*(w.settings.quality>=1?1:.6));for(let r=e;r<s&&r<e+3;r++)this.spawnMoving(t.x,t.z,IM,ym);for(let r=n;r<_m&&r<n+2;r++)this.spawnParked(t.x,t.z,60,260)}};var vm=52,LM=45,Mm=125,DM=165,Sh={x:0,z:0},NM=[11549230,3031123,13937677,1999945,6122878],UM=[3878703,1845299,4858714,8093053,7220224],cr=class extends Bs{constructor(t){let e={skin:Cn(Ao),shirt:Cn(im),pants:Cn(sm),hair:Cn(rm),hat:Hn(.14)?Cn(NM):void 0,jacket:Hn(.22)?Cn(UM):void 0,long:Hn(.2)};super(e),this.kind="civ",this.maxHp=this.hp=rt(55,80),this.walkSpeed=rt(1.25,1.8),this.runSpeed=rt(5.2,6.6),this.state="walk",this.timer=0,this.wait=0,this.ox=rt(-.7,.7),this.oz=rt(-.7,.7),this.node=t,this.prevNode=-1,this.target=t,this.threat=null,this.aimedAt=0,this.screamCd=0,this.punchCd=0,this.tough=Hn(.12),this.cash=Hn(.6)?Math.floor(rt(8,90)):0,this.stuckT=0,this.lx=0,this.lz=0,this.keep=!1,this.armed=!1,this.shootT=1;let n=ln(t,Sh);this.place(n.x+this.ox,n.z+this.oz,rt(0,6.28)),this.pickNext()}pickNext(){this.prevNode=this.node;let t=Qc(this.target);this.node=this.target;let e=t.filter(l=>l!==this.prevNode);e.length||(e=t);let n=ln(this.node,{x:0,z:0}),s=[];for(let l of e){let c=ln(l,{x:0,z:0}),h=Math.hypot(n.x-c.x,n.z-c.z)<30&&Math.hypot(n.x-c.x,n.z-c.z)>15;s.push([l,h?.5:1,h])}let r=s.reduce((l,c)=>l+c[1],0),a=Math.random()*r,o=s[0];for(let l of s)if(a-=l[1],a<=0){o=l;break}this.target=o[0],this.crossing=o[2],Hn(.12)&&(this.state="idle",this.timer=rt(1.5,5))}roadClear(t,e){let n=(this.x+t)/2,s=(this.z+e)/2;for(let r of w.vehicles){if(r.removed)continue;let a=r.x-n,o=r.z-s,l=Math.hypot(a,o);if(!(l>26||r.speed<2)&&(r.vx*-a+r.vz*-o)/(r.speed*l+.01)>.35)return!1}return!0}scare(t,e,n=!0){this.dead||this.state==="fight"||(this.threat={x:t,z:e},this.state="flee",this.timer=rt(5,10),this.cower=!1,n&&this.screamCd<=0&&Hn(.55)&&(Pn.scream(this.x,this.z),this.screamCd=4))}onDamaged(t,e,n){e===w.player?(this.tough&&this.hp>0&&Hn(.6)?(this.state="fight",this.timer=14,this.threat=null):this.scare(e.x,e.z),w.peds.alert(this.x,this.z,16,e.x,e.z)):e&&e.x!==void 0?this.scare(e.x,e.z):this.scare(this.x+rt(-5,5),this.z+rt(-5,5))}onHitByVehicle(t){t.driver==="player"&&(w.police&&w.police.crime("hitrun",this.x,this.z,this),w.peds.alert(this.x,this.z,20,t.x,t.z))}onDeath(t,e){this.cash&&w.pickups&&w.pickups.dropCash(this.x,this.z,this.cash),w.peds.witnessDeath(this,t),(t===w.player||t&&t.driver==="player")&&(w.stats.kills++,w.police&&w.police.crime("murder",this.x,this.z,this),w.missions&&w.missions.onKill(this))}update(t){if(this.dead||this.stun>0){this.animate(t);return}if(this.screamCd-=t,this.punchCd-=t,this.timer-=t,this.aimedAt=Math.max(0,this.aimedAt-t),this.cower=!1,this.flee=!1,this.wishSpeed=0,this.state!=="fight"&&this.state!=="flee"&&this.aimedAt>.05&&w.player&&w.player.armed()&&(this.cower=!0,this.wishSpeed=0,this.faceTowards(Math.atan2(w.player.x-this.x,w.player.z-this.z),t,6),this.aimedAt>.05)){this.stepMove(t),this.animate(t);return}switch(this.state){case"walk":this.doWalk(t);break;case"idle":this.timer<=0&&(this.state="walk");break;case"flee":this.doFlee(t);break;case"fight":this.doFight(t);break}this.stepMove(t),this.wishSpeed>.5&&(Math.abs(this.x-this.lx)+Math.abs(this.z-this.lz)<.02?this.stuckT+=t:this.stuckT=0,this.stuckT>2.2&&(this.stuckT=0,this.state==="flee"?this.timer=0:(this.target=this.node,this.pickNext()))),this.lx=this.x,this.lz=this.z,this.animate(t)}doWalk(t){let e=ln(this.target,Sh),n=e.x+this.ox,s=e.z+this.oz,r=n-this.x,a=s-this.z,o=Math.hypot(r,a);if(o<1.1){this.pickNext();return}if(this.crossing&&this.wait<=0){let l=ln(this.node,{x:0,z:0});Math.hypot(this.x-l.x,this.z-l.z)<3.5&&!this.roadClear(n,s)&&(this.wait=.6)}if(this.wait>0){this.wait-=t,this.faceTowards(Math.atan2(r,a),t);return}this.wishX=r/o,this.wishZ=a/o,this.wishSpeed=this.walkSpeed,this.faceTowards(Math.atan2(r,a),t,8)}doFlee(t){if(this.flee=!0,this.timer<=0){this.state="walk",this.target=this.nearestNode(),this.pickNext();return}let e=this.x-this.threat.x,n=this.z-this.threat.z,s=Math.hypot(e,n)||1;e/=s,n/=s;let r=Math.atan2(e,n)+Math.sin(w.time*1.3+this.ox*9)*.5;this.wishX=Math.sin(r),this.wishZ=Math.cos(r),this.wishSpeed=this.runSpeed,this.faceTowards(r,t,14),s>60&&(this.timer=Math.min(this.timer,.5))}doFight(t){let e=w.player;if(!e||e.dead||this.timer<=0){this.state="walk";return}let n=e.inVehicle?e.inVehicle.x:e.x,s=e.inVehicle?e.inVehicle.z:e.z,r=n-this.x,a=s-this.z,o=Math.hypot(r,a);if(o>32||e.inVehicle&&e.inVehicle.speed>8){this.state="walk";return}if(this.faceTowards(Math.atan2(r,a),t,12),this.armed&&(this.weaponId||this.setWeapon("pistol"),this.shootT-=t,o<40&&qi(this.x,this.y+1.4,this.z,n,e.inVehicle?e.inVehicle.y+1:e.y+1.2,s))){if(this.aiming=!0,this.aimUp=0,o>22?(this.wishX=r/o,this.wishZ=a/o,this.wishSpeed=3.5):o<7&&(this.wishX=-r/o,this.wishZ=-a/o,this.wishSpeed=2.4),this.shootT<=0){this.shootT=rt(.5,1.1);let c=this.y+1.4,h=e.inVehicle?e.inVehicle.y+.9:e.y+1.1,d=Math.hypot(r,h-c,a);this.h.recoil=1,ks(this,{id:"guard",dmg:6,range:60,spread:.06,snd:"pistol",alert:0},{x:this.x,y:c,z:this.z},{x:r/d,y:(h-c)/d,z:a/d},{x:this.x+r/o*.5,y:c,z:this.z+a/o*.5},{spread:.05})}return}o>1.3?(this.wishX=r/o,this.wishZ=a/o,this.wishSpeed=4.6,this.flee=!1):this.punchCd<=0&&!e.inVehicle&&(this.punchCd=1,this.punchT=.001,setTimeout(()=>{!this.dead&&!e.dead&&Math.hypot(e.x-this.x,e.z-this.z)<1.9&&(e.damage(rt(5,9),this,{kind:"melee"}),Pn.punch(this.x,this.z))},180)),this.punchT>0&&(this.punchT+=t*2.6,this.punchT>=1&&(this.punchT=0))}nearestNode(){let t=at(Ns(this.x),0,11),e=at(Ns(this.z),0,11),n=0,s=1e9;for(let r=0;r<4;r++){let a=cs(t,e,r),o=ln(a,Sh),l=os(o.x,o.z,this.x,this.z);l<s&&(s=l,n=a)}return n}},Uo={list:[],timer:0,init(){let i=w.playerPos();for(let t=0;t<vm;t++)this.spawn(i.x,i.z,8,Mm)},spawn(i,t,e,n){for(let s=0;s<24;s++){let r=Math.random()*rr|0,a=ln(r,Sh),o=Math.hypot(a.x-i,a.z-t);if(o<e||o>n||o<70&&!gi.hidden(a.x,a.z,70))continue;let l=new cr(r);return this.list.push(l),l}return null},fromVehicle(i,t,e,n=!1){let s=i.exitSpot(!0,.4),r=new cr(0);return r.place(s.x,s.z,i.heading),this.list.push(r),n&&r.tough?(r.state="fight",r.timer=12):r.scare(t,e),r.node=r.target=r.nearestNode(),r},driverBailsOut(i){if(i.driver!=="ai"||i.exploded)return;i.driver=null,i.ai=null;let t=i.lastDamager&&i.lastDamager.x!==void 0?i.lastDamager:{x:i.x+3,z:i.z};this.fromVehicle(i,t.x,t.z,Hn(.4))},alert(i,t,e,n=i,s=t){let r=e*e;for(let a of this.list)a.dead||a.removed||a.state==="fight"||os(a.x,a.z,i,t)<r&&a.scare(n,s)},witnessDeath(i,t){this.alert(i.x,i.z,22,i.x,i.z)},update(i){for(let s=this.list.length-1;s>=0;s--){let r=this.list[s];if(r.removed){this.list.splice(s,1);continue}r.update(i)}if(this.timer-=i,this.timer>0)return;this.timer=.5;let t=w.playerPos(),e=0;for(let s of this.list){if(s.removed)continue;let r=Math.hypot(s.x-t.x,s.z-t.z);if(s.h.root.visible=r<210,s.h.torso.castShadow=s.h.legL.castShadow=s.h.legR.castShadow=s.h.armL.castShadow=s.h.armR.castShadow=r<55,!s.dead&&!s.keep&&r>DM&&gi.hidden(s.x,s.z,130)){s.remove();continue}s.dead||e++}let n=Math.round(vm*(w.settings.quality>=1?1:.6));for(let s=e;s<n&&s<e+4;s++)this.spawn(t.x,t.z,LM,Mm)}};var FM={murder:3.2,hitrun:1.6,assault:.7,carjack:1.8,copcar:2.2,explosion:2.6,grenade:.5,shots:.15,copattack:1.3,copkill:5},zM=[1.2,4.5,10,18,30],OM=[0,2,3,4,6,8],BM=[0,2,3,4,5,6],wh={x:0,z:0};function Eh(){let i=w.player,t=i.inVehicle;return t?{x:t.x,y:t.y,z:t.z,vx:t.vx,vz:t.vz,veh:t}:{x:i.x,y:i.y,z:i.z,vx:i.vx,vz:i.vz,veh:null}}function Zd(i,t){let e=at(Ns(i),0,11),n=at(Ns(t),0,11),s=0,r=1e12;for(let a=0;a<4;a++){let o=cs(e,n,a),l=ln(o,wh),c=os(l.x,l.z,i,t);c<r&&(r=c,s=o)}return s}function bm(i,t){if(i===t)return[];let e=new Map([[i,-1]]),n=[i],s=0,r=!1;for(;s<n.length&&s<600;){let l=n[s++];for(let c of Qc(l))if(!e.has(c)){if(e.set(c,l),c===t){r=!0,s=n.length;break}n.push(c)}}if(!r)return[];let a=[],o=t;for(;o!==i;)a.push(o),o=e.get(o);return a.reverse()}var kM={id:"cop",dmg:7,range:95,spread:.06,snd:"pistol",alert:0},Fo=class extends Bs{constructor(t,e){super({cop:!0,skin:Cn(Ao.slice(0,4)),shirt:1911899,pants:1317939,hair:2236962,shoes:657930}),this.kind="cop",this.maxHp=this.hp=85,this.armor=25,this.setWeapon("pistol"),this.place(t,e,rt(0,6.28)),this.shootT=rt(.5,1.5),this.burst=0,this.arrestT=0,this.los=!1,this.losT=0,this.path=[],this.pathT=0,this.state="chase",this.leaveT=0,this.stuckT=0,this.lx=t,this.lz=e,this.hurtCd=0,this.speedRun=rt(5.4,6.4)}onDamaged(t,e){(e===w.player||e&&e.driver==="player")&&(this.hurtCd<=0&&(Ge.crime("copattack",this.x,this.z,null),this.hurtCd=1.5),Ge.hostile=!0)}onDeath(t){(t===w.player||t&&t.driver==="player")&&(Ge.crime("copkill",this.x,this.z,null),w.stats.kills++),w.pickups&&Hn(.5)&&w.pickups.dropCash(this.x,this.z,Math.floor(rt(40,160)))}update(t){if(this.dead||this.stun>0){this.animate(t);return}this.hurtCd-=t,this.shootT-=t,this.losT-=t,this.pathT-=t,this.wishSpeed=0,this.aiming=!1,this.flee=!1;let e=w.player,n=Eh(),s=n.x-this.x,r=n.z-this.z,a=Math.hypot(s,r);if(Ge.wanted===0||e.dead){this.leaveT+=t,this.pathT<=0&&(this.pathT=3,this.path=bm(Zd(this.x,this.z),Math.random()*rr|0).slice(0,12)),this.followPath(t,1.6),this.stepMove(t),this.animate(t),this.leaveT>30&&a>90&&gi.hidden(this.x,this.z,60)&&this.remove();return}this.leaveT=0,this.losT<=0&&(this.losT=.25,this.los=qi(this.x,this.y+1.5,this.z,n.x,n.y+1.2,n.z));let o=Ge.hostile||Ge.wanted>=2;if(this.los&&a<46){let c=!o||a>16;this.faceTowards(Math.atan2(s,r),t,12),o&&(this.aiming=!0,this.aimUp=0,this.shootT<=0&&!e.dead&&this.shoot(n,a)),c&&a>1.4?(this.wishX=s/a,this.wishZ=r/a,this.wishSpeed=o?3.2:this.speedRun):a<8&&o&&(this.wishX=-s/a*.6+Math.cos(w.time+this.x)*.5,this.wishZ=-r/a*.6,this.wishSpeed=2)}else this.pathT<=0&&(this.pathT=1.2,this.path=bm(Zd(this.x,this.z),Zd(n.x,n.z))),this.path.length?this.followPath(t,this.speedRun):a>1&&(this.wishX=s/a,this.wishZ=r/a,this.wishSpeed=this.speedRun,this.faceTowards(Math.atan2(s,r),t,10));!e.inVehicle&&!e.dead&&a<1.9&&e.stun<=0?(this.arrestT+=t,(this.arrestT>1.3&&!Ge.hostile||this.arrestT>2.6)&&e.busted()):this.arrestT=Math.max(0,this.arrestT-t*2),this.stepMove(t),this.wishSpeed>.5&&(Math.abs(this.x-this.lx)+Math.abs(this.z-this.lz)<.015?this.stuckT+=t:this.stuckT=0,this.stuckT>2&&(this.stuckT=0,this.pathT=0,this.los=!1,this.losT=1)),this.lx=this.x,this.lz=this.z,this.animate(t)}followPath(t,e){for(;this.path.length;){let o=ln(this.path[0],wh);if(Math.hypot(o.x-this.x,o.z-this.z)<1.4)this.path.shift();else break}if(!this.path.length)return;let n=ln(this.path[0],wh),s=n.x-this.x,r=n.z-this.z,a=Math.hypot(s,r)||1;this.wishX=s/a,this.wishZ=r/a,this.wishSpeed=e,this.faceTowards(Math.atan2(s,r),t,10)}shoot(t,e){let n={...kM,dmg:4+Ge.wanted*1.1},s=at(.085-Ge.wanted*.011+e*9e-4,.03,.14),r=this.x+Math.sin(this.heading)*.5,a=this.z+Math.cos(this.heading)*.5,o=this.y+1.45,l=t.x+rt(-.3,.3),c=t.y+(t.veh?.9:1.1),h=t.z+rt(-.3,.3),d=l-r,u=c-o,f=h-a,p=Math.hypot(d,u,f);this.h.recoil=1,ks(this,n,{x:r,y:o,z:a},{x:d/p,y:u/p,z:f/p},{x:r,y:o,z:a},{spread:s}),this.burst++,this.burst>=3?(this.burst=0,this.shootT=rt(.9,1.7)):this.shootT=.24}},Th=class{constructor(){this.isPolice=!0,this.route=[],this.repath=0,this.stuckT=0,this.reverseT=0,this.dodge=1,this.crew=2,this.stuckCount=0,this.dismounted=!1}aheadInter(t){let e=Do(t.heading);if(e[0]!==0){let r=at(Math.round(t.z/100+12/2),0,12),a=t.x/100+12/2;return[at(e[0]>0?Math.ceil(a+.12):Math.floor(a-.12),0,12),r]}let n=at(Math.round(t.x/100+12/2),0,12),s=t.z/100+12/2;return[n,at(e[1]>0?Math.ceil(s+.12):Math.floor(s-.12),0,12)]}update(t,e){let n=Eh(),s=n.x-t.x,r=n.z-t.z,a=Math.hypot(s,r),o=t.fwd;if(t.handbrake=!1,this.reverseT>0){this.reverseT-=e,t.throttle=-1,t.brakeIn=0,t.steerIn=this.dodge;return}if(Ge.wanted===0)return;if(a<20&&!n.veh&&t.speed<7&&!this.dismounted){Ge.dismount(t);return}let l=a<48&&qi(t.x,1,t.z,n.x,1,n.z),c,h,d=n.veh?at(n.veh.speed*1.1+5,16,44):26;if(l)c=n.x+n.vx*.45,h=n.z+n.vz*.45,n.veh||(d=at(a*.9,0,26));else{if(this.repath-=e,this.repath<=0){this.repath=1.1;let x=this.aheadInter(t),g=fa(n.x,n.z);this.route=mm(x[0],x[1],g[0],g[1]),this.route.unshift(x)}for(;this.route.length>1&&Math.hypot($t(this.route[0][0])-t.x,$t(this.route[0][1])-t.z)<13;)this.route.shift();if(this.route.length){let x=this.route[0],g=$t(x[0]),m=$t(x[1]);c=g,h=m;let v=this.route[1];if(v){let A=Math.hypot(g-t.x,m-t.z),y=v[0]-x[0],S=v[1]-x[1],b=Math.abs(Math.sin(t.heading)*S-Math.cos(t.heading)*y)>.5||Math.sin(t.heading)*y+Math.cos(t.heading)*S<.5;A<17&&(c=g+y*25,h=m+S*25),b&&A<42&&(d=Math.min(d,10+A*.25))}}else c=n.x,h=n.z}let u=Wi(Math.atan2(c-t.x,h-t.z)-t.heading);t.steerIn=at(u*2.2,-1,1),d=Math.min(d,34-24*at(Math.abs(u)/1.2,0,1));let f=Yd(t,7+Math.max(0,o)*.9);f<1/0&&!(n.veh&&a<12)&&(d=Math.min(d,Math.max(0,f-2.5)*1.3)),f<2.2&&t.speed<2&&!(n.veh&&a<12)&&(this.stuckT+=e*2);let p=d-o;p>0?(t.throttle=at(p*.5,0,1),t.brakeIn=0):(t.throttle=0,t.brakeIn=at(-p*.2,0,1)),d<.5&&o<1&&(t.brakeIn=.5,t.throttle=0),d>3&&Math.abs(o)<.5?this.stuckT+=e:this.stuckT=Math.max(0,this.stuckT-e),this.stuckT>2&&(this.stuckT=0,this.reverseT=1.3,this.dodge=-Math.sign(u||1),this.stuckCount++,this.repath=0)}onDamage(){}onCrash(t,e){e>12&&t.hpFrac<.4&&(t.siren=!0)}},HM={id:"heli",dmg:4.5,range:170,spread:.05,snd:"rifle",alert:0},Jd=class{constructor(t,e){this.model=hm(),w.scene.add(this.model.group),this.x=t,this.z=e,this.y=70,this.vx=this.vz=this.vy=0,this.yaw=0,this.hp=900,this.dead=!1,this.ang=Math.random()*6.28,this.shootT=2,this.burst=0,this.leave=!1,this.tilt=0,this.rollT=0,this.removed=!1,this.fall=0,w.helis.push(this)}damage(t,e){this.dead||(this.hp-=t,this.hp<=0&&(this.dead=!0,this.fall=.01,Ge.hostile=!0,e===w.player&&w.hud&&w.hud.toast("Helicopter down!")))}update(t){let e=this.model;if(e.rotor.rotation.y+=t*(this.dead?6:34),e.tail.rotation.x+=t*30,this.dead){if(this.fall+=t,this.vy-=22*t,this.y+=this.vy*t,this.yaw+=t*3,this.x+=this.vx*t,this.z+=this.vz*t,Math.random()<t*30&&te.blackSmoke(this.x,this.y,this.z,1.6),e.group.rotation.z+=t*1.5,this.y<Wn(this.x,this.z)+1.5){w.explode(this.x,this.y,this.z,12,380,{source:null}),w.pickups&&w.pickups.dropCash(this.x+2,this.z,400),this.remove();return}}else{let n=Eh(),s,r,a=50;if(this.leave||Ge.wanted===0){if(s=this.x+200,r=this.z,a=140,this.leave=!0,this.y>120){this.remove();return}}else this.ang+=t*.32,s=n.x+Math.cos(this.ang)*36,r=n.z+Math.sin(this.ang)*36,a=46+Math.sin(w.time*.5)*4;let o=(s-this.x)*.9,l=(r-this.z)*.9,c=Math.hypot(o,l),h=34,d=c>h?h/c:1;this.vx=Mn(this.vx,o*d,1.4,t),this.vz=Mn(this.vz,l*d,1.4,t),this.vy=Mn(this.vy,(a-this.y)*.8,1.5,t),this.x+=this.vx*t,this.z+=this.vz*t,this.y+=this.vy*t;let u=Math.atan2(n.x-this.x,n.z-this.z);this.yaw+=Wi(u-this.yaw)*Math.min(1,t*2.2),this.shootT-=t;let f=Math.hypot(n.x-this.x,n.z-this.z);if(!this.leave&&Ge.wanted>=3&&f<110&&this.shootT<=0&&!w.player.dead)if(qi(this.x,this.y-1,this.z,n.x,n.y+1.2,n.z)){let p=this.x,x=this.y-1.2,g=this.z,m=n.x+rt(-1,1),v=n.y+1,A=n.z+rt(-1,1),y=m-p,S=v-x,b=A-g,R=Math.hypot(y,S,b),_={...HM,dmg:2.5+Ge.wanted*.8};ks(this,_,{x:p,y:x,z:g},{x:y/R,y:S/R,z:b/R},{x:p+y/R*2,y:x+S/R*2,z:g+b/R*2},{spread:.045}),this.burst++,this.burst>=8?(this.burst=0,this.shootT=rt(2.2,3.5)):this.shootT=.09}else this.shootT=.6}e.group.position.set(this.x,this.y,this.z),this.tilt=Mn(this.tilt,this.dead?.3:at(Math.hypot(this.vx,this.vz)*.014,0,.3),3,t),this.dead?e.group.rotation.y=this.yaw:e.group.rotation.set(this.tilt,this.yaw,at((this.vx*Math.cos(this.yaw)-this.vz*Math.sin(this.yaw))*.012,-.25,.25),"YXZ")}remove(){if(this.removed)return;this.removed=!0,this.dead=!0,w.scene.remove(this.model.group);let t=w.helis.indexOf(this);t>=0&&w.helis.splice(t,1)}},Ge={wanted:0,heat:0,evadeT:0,hostile:!1,evading:!1,timer:0,seenT:0,spawnT:0,msgCd:0,cops:[],crime(i,t,e,n,s){let r=w.player;if(!r||r.dead)return;let a=s??FM[i]??1;(this.copNear(t,e,78)||this.pedNear(t,e,26,n))&&((i==="copattack"||i==="copkill")&&(this.hostile=!0),this.addHeat(a))},addHeat(i){this.heat+=i,this.evadeT=0;let t=0;for(let e of zM)this.heat>=e&&t++;t>this.wanted&&(this.wanted=t,ft.wantedUp(),w.hud&&w.hud.toast(`Wanted level ${t}`,1500))},copNear(i,t,e){let n=e*e;for(let s of w.actors)if(s.kind==="cop"&&!s.dead&&os(s.x,s.z,i,t)<n)return!0;for(let s of w.vehicles)if(s.key==="police"&&!s.exploded&&s.driver&&os(s.x,s.z,i,t)<n)return!0;return!1},pedNear(i,t,e,n){let s=e*e;for(let r of w.actors)if(r.kind==="civ"&&r!==n&&!r.dead&&os(r.x,r.z,i,t)<s)return!0;return!1},clear(i){let t=this.wanted>0;this.wanted=0,this.heat=0,this.evadeT=0,this.hostile=!1,this.evading=!1;for(let e of w.vehicles)e.ai&&e.ai.isPolice?(e.ai=new No(e,{dir:Do(e.heading),ni:0,nj:0}),e.ai.recover(e),e.driver="ai",e.siren=!1,e.tag=null):e.key==="police"&&(e.siren=!1);for(let e of w.helis)e.leave=!0;t&&!i&&(ft.wantedClear(),w.hud&&w.hud.toast("Wanted level cleared",2e3)),ft.siren(0),ft.heli(0)},ejectCop(i){let t=i.ai&&i.ai.crew?i.ai.crew:1;i.driver=null,i.ai=null;for(let e=0;e<t;e++){let n=i.exitSpot(e===0),s=new Fo(n.x,n.z);this.cops.push(s)}this.hostile=!0},dismount(i){if(!i.ai||i.ai.dismounted)return;i.ai.dismounted=!0;let t=i.ai.crew,e=this.cops.filter(n=>!n.removed&&!n.dead).length;for(let n=0;n<t&&e<12;n++){let s=i.exitSpot(n===0),r=new Fo(s.x,s.z);this.cops.push(r),e++}i.driver=null,i.ai=null,i.tag="cop",i.brakeIn=.6},spawnCar(){let i=w.playerPos();for(let t=0;t<8;t++){let e=lr(i.x,i.z,150,270,10);if(!e||!gi.hidden(e.x,e.z,120)||!gi.clear(e.x,e.z,12))continue;let n=new li("police",e.x,e.z,e.heading);return n.driver="cop",n.tag="cop",n.siren=!0,n.ai=new Th,n.vx=Math.sin(n.heading)*14,n.vz=Math.cos(n.heading)*14,n}return null},spawnFoot(){let i=w.playerPos();for(let t=0;t<16;t++){let e=Math.random()*rr|0,n=ln(e,wh),s=Math.hypot(n.x-i.x,n.z-i.z);if(s<55||s>130||s<90&&!gi.hidden(n.x,n.z,90))continue;let r=new Fo(n.x,n.z);return this.cops.push(r),r}return null},update(i){let t=w.player;for(let a=this.cops.length-1;a>=0;a--){let o=this.cops[a];o.removed?this.cops.splice(a,1):o.update(i)}for(let a=w.helis.length-1;a>=0;a--)w.helis[a].update(i);if(this.timer-=i,this.timer>0)return;this.timer=.4;let e=Eh(),n=0,s=0,r=!1;for(let a of w.vehicles){if(a.key!=="police"||a.exploded)continue;let o=Math.hypot(a.x-e.x,a.z-e.z);a.siren&&(n=Math.max(n,at(1-o/230,0,1))),this.wanted>0&&a.ai&&a.ai.isPolice&&o<55&&qi(a.x,1.2,a.z,e.x,1.2,e.z)&&(r=!0),this.wanted>0&&a.ai&&!a.ai.isPolice&&a.driver==="ai"&&o<160&&(a.ai=new Th,a.driver="cop",a.tag="cop",a.siren=!0)}for(let a of this.cops)!a.dead&&!a.removed&&a.los&&os(a.x,a.z,e.x,e.z)<3025&&(r=!0);for(let a of w.helis){if(a.dead)continue;let o=Math.hypot(a.x-e.x,a.z-e.z);s=Math.max(s,at(1-o/260,0,1)),o<130&&qi(a.x,a.y,a.z,e.x,e.y+1,e.z)&&(r=!0)}if(ft.siren(n*(this.wanted>0?1:.6)),ft.heli(s),this.wanted>0&&(r?this.evadeT=0:this.evadeT+=.4,this.evading=this.evadeT>2.5,this.evadeT>15+this.wanted*2.5&&this.clear(!1),this.spawnT-=.4,this.spawnT<=0&&!t.dead)){this.spawnT=2.2;let a=w.vehicles.filter(c=>c.ai&&c.ai.isPolice&&!c.exploded).length,o=this.cops.filter(c=>!c.dead&&!c.removed).length;a<OM[this.wanted]?this.spawnCar():o<BM[this.wanted]&&this.cops.length<14&&this.spawnFoot();let l=this.wanted>=5?2:this.wanted>=3?1:0;if(w.helis.filter(c=>!c.dead&&!c.leave).length<l){let c=Math.random()*6.28;new Jd(e.x+Math.cos(c)*220,e.z+Math.sin(c)*220)}}}};w.police=Ge;var VM={health:16726843,armor:3902463,cash:3727482,weapon:16757051,ammo:16769098},$d={};function GM(i,t){let e=new Ae,n=VM[i],s=new kt({color:n,emissive:n,emissiveIntensity:.55,roughness:.4});if(i==="health"){e.add(new Pt(new qe(.62,.2,.2),s),new Pt(new qe(.2,.62,.2),s));let o=new Pt(new qe(.75,.75,.16),new kt({color:16777215,emissive:6710886,roughness:.5}));o.position.z=-.1,e.add(o)}else if(i==="armor"){let o=new Pt(new Va(.42),s);o.scale.set(1,1.25,.6),e.add(o)}else if(i==="cash")for(let o=0;o<3;o++){let l=new Pt(new qe(.5,.1,.28),s);l.position.y=o*.11-.1,l.rotation.y=o*.3,e.add(l)}else if(i==="weapon"){let o=Od(t);o.scale.setScalar(1.5),o.rotation.y=Math.PI/2,o.position.x=.3,e.add(o);let l=new Pt(new qe(.9,.06,.5),s);l.position.y=-.35,e.add(l)}else e.add(new Pt(new qe(.5,.3,.35),s));let r=i;$d[r]||($d[r]=new rs({map:w.world.glowTex,color:n,transparent:!0,blending:Bn,depthWrite:!1,opacity:.8}));let a=new vs($d[r]);return a.scale.set(2.2,2.2,1),e.add(a),e.traverse(o=>{o.isMesh&&(o.castShadow=!1)}),e}var zo={list:[],init(){let i=(t,e,n)=>{for(let s=0;s<e;s++){let r=Math.random()*rr|0,a=ln(r,{});this.spawn(t,a.x+rt(-.6,.6),a.z+rt(-.6,.6),n?n():{})}};i("health",14),i("armor",10),i("cash",16,()=>({amount:Math.floor(rt(60,400))}));for(let t of["pistol","smg","shotgun","rifle","grenade","rpg","smg","shotgun","rifle","grenade"])i("weapon",1,()=>({wid:t}));i("ammo",8)},spawn(i,t,e,n={}){let s=n.wid||null,r=GM(i,s);r.position.set(t,1,e),w.scene.add(r);let a={type:i,wid:s,x:t,z:e,amount:n.amount||0,mesh:r,alive:!0,respawn:n.temp?0:70,timer:0,phase:Math.random()*Ye,ttl:n.ttl||0};return this.list.push(a),a},dropCash(i,t,e){this.spawn("cash",i,t,{amount:e,temp:!0,ttl:60})},update(i){let t=w.player;if(!t)return;let e=t.cx,n=t.cz,s=t.inVehicle?3.2:1.7;for(let r=this.list.length-1;r>=0;r--){let a=this.list[r];if(!a.alive){a.respawn>0&&(a.timer-=i,a.timer<=0&&(a.alive=!0,a.mesh.visible=!0));continue}if(a.ttl>0&&(a.ttl-=i,a.ttl<=0)){w.scene.remove(a.mesh),this.list.splice(r,1);continue}let o=a.x-e,l=a.z-n,c=o*o+l*l;a.mesh.visible=c<19600,a.mesh.visible&&(a.mesh.rotation.y+=i*1.8,a.mesh.position.y=1+Math.sin(w.time*2.2+a.phase)*.12,c<s*s&&!t.dead&&this.collect(a,r))}},collect(i,t){let e=w.player,n=!0;switch(i.type){case"health":e.hp>=e.maxHp?n=!1:(e.hp=Math.min(e.maxHp,e.hp+50),w.hud.toast("+ Health"),ft.pickup());break;case"armor":e.armor>=100?n=!1:(e.armor=100,w.hud.toast("+ Body armour"),ft.pickup());break;case"cash":e.addMoney(i.amount),ft.cash();break;case"weapon":{let s=Ln[i.wid];e.giveWeapon(i.wid,s.thrown?5:Math.floor((s.ammoMax||60)*.35)),ft.pickup(),!e.weapons[e.cur]&&e.cur!=="fist"&&e.selectWeapon(i.wid);break}case"ammo":{let s=!1;for(let r of Object.keys(e.weapons)){let a=Ln[r],o=e.weapons[r];o.reserve<a.ammoMax&&(o.reserve=Math.min(a.ammoMax,o.reserve+Math.ceil(a.ammoMax*.25)),s=!0)}s?(w.hud.toast("+ Ammo"),ft.pickup()):n=!1;break}}n&&(i.alive=!1,i.mesh.visible=!1,i.timer=i.respawn,i.respawn||(w.scene.remove(i.mesh),this.list.splice(t,1)))}};var WM={x:0,z:0};function pa(i,t=2.4,e=40){let n=new Ae,s=new _n({color:i,transparent:!0,opacity:.24,side:vn,depthWrite:!1,blending:Bn}),r=new Pt(new On(t,t,e,20,1,!0),s);r.position.y=e/2,n.add(r);let a=new Pt(new Ss(t,.14,6,30),new _n({color:i}));return a.rotation.x=Math.PI/2,a.position.y=.3,n.add(a),n.userData={beam:r,ring:a,mat:s},w.scene.add(n),n}function ma(i,t,e,n,s,r=1){i.visible=!0,i.position.set(t,e,n),i.scale.set(r,1,r),i.userData.mat.color.set(s),i.userData.ring.material.color.set(s)}var XM=[{kind:"race",name:"Street Race",i:4,j:3,k:2,ch:"R",reward:2500},{kind:"delivery",name:"Grab & Go",i:7,j:9,k:0,ch:"G",reward:3e3},{kind:"hit",name:"Take Him Out",i:2,j:9,k:1,ch:"H",reward:2200},{kind:"race",name:"Harbor Sprint",i:9,j:4,k:3,ch:"R",reward:2800}],Oo={starts:[],active:null,beams:[],msgT:0,init(){for(let s of XM){let r=ln(cs(s.i,s.j,s.k),{}),a={...s,x:r.x,z:r.z,cool:0,beam:pa(16765498,2.2,26)};a.beam.position.set(r.x,.2,r.z),this.starts.push(a)}this.beams=[pa(16765498,5,60),pa(16777215,3.2,40),pa(16734794,2.6,60)];for(let s of this.beams)s.visible=!1;let i=w.world.pois.shop,t=w.world.pois.hospital;pa(16757051,1.8,14).position.set(i.x,.2,i.z),pa(16730698,1.8,14).position.set(t.x,.2,t.z),w.interactables=[{x:i.x,z:i.z,r:2.6,text:()=>Object.keys(w.player.weapons).length>=6?"E \u2014 Refill ammo ($300)":"E \u2014 Buy all weapons & ammo ($1,200)",action:()=>{let s=w.player,r=Object.keys(s.weapons).length>=6,a=r?300:1200;if(s.money<a){w.hud.toast("Not enough cash");return}s.addMoney(-a),s.giveAll(r?.6:1),ft.cash(),w.hud.toast(r?"Ammo refilled":"Weapons purchased"),r||s.selectWeapon("smg")}},{x:t.x,z:t.z,r:2.6,text:()=>w.player.hp<w.player.maxHp||w.player.armor<100?"E \u2014 Treatment ($150)":"You are in perfect health",action:()=>{let s=w.player;if(!(s.hp>=s.maxHp&&s.armor>=100)){if(s.money<150){w.hud.toast("Not enough cash");return}s.addMoney(-150),s.hp=s.maxHp,s.armor=100,ft.pickup(),w.hud.toast("Fully healed")}}}]},hud(){let i=this.active;return i?{title:i.name.toUpperCase(),text:i.text,timer:i.timer}:null},blips(){let i=[];if(!this.active)for(let t of this.starts)t.cool<=0&&i.push({x:t.x,z:t.z,col:"#ffd23a",ch:t.ch,r:7,edge:!0});return this.active&&this.active.blips&&i.push(...this.active.blips()),i},start(i){let t=w.player;i.cool=0;let e={kind:i.kind,name:i.name,start:i,reward:i.reward,stage:0,text:"",timer:void 0,t:0};if(this.active=e,ft.click(),i.kind==="race"){e.stage="getcar",e.text="Get in a vehicle",e.grace=60;let n=[],[s,r]=fa(i.x,i.z),a=0,o=i.x,l=i.z;for(let d=0;d<8;d++){let u,f,p=0;do u=at(s+(Math.random()*9|0)-4,0,12),f=at(r+(Math.random()*9|0)-4,0,12),p++;while((Math.hypot($t(u)-o,$t(f)-l)<130||u===s&&f===r)&&p<30);let x=$t(u),g=$t(f);a+=Math.hypot(x-o,g-l),n.push({x,z:g}),o=x,l=g,s=u,r=f}let[c,h]=fa(i.x,i.z);n.push({x:$t(c),z:$t(h)}),a+=Math.hypot(n[8].x-o,n[8].z-l),e.cps=n,e.idx=0,e.limit=a/15.5+22,e.blips=()=>{if(e.stage==="getcar")return[];let d=[],u=e.cps[e.idx],f=e.cps[e.idx+1];return u&&d.push({x:u.x,z:u.z,col:"#ffd23a",r:7,edge:!0}),f&&d.push({x:f.x,z:f.z,col:"#ffffff",r:4}),d}}else if(i.kind==="delivery"){e.stage="steal";let n=null;for(let a=0;a<30&&!n;a++)n=lr(i.x,i.z,35,130,4);n=n||{x:i.x+20,z:i.z,heading:0};let s=[16723285,49919,16765952,10494192,16742912],r=new li("sports",n.x+(n.dir?-n.dir[1]*3:0),n.z+(n.dir?n.dir[0]*3:0),n.heading,Cn(s));r.parked=!0,r.tag="mission",e.car=r,e.text="Steal the marked sports car",e.blips=()=>e.stage==="steal"&&e.car&&!e.car.removed?[{x:e.car.x,z:e.car.z,col:"#ff5a4a",r:7,edge:!0}]:e.dest?[{x:e.dest.x,z:e.dest.z,col:"#4aff7a",r:7,edge:!0}]:[]}else if(i.kind==="hit"){e.stage="hunt",e.text="Find and kill the target";let n=0;for(let a=0;a<60;a++){n=Math.random()*576|0;let o=ln(n,WM),l=Math.hypot(o.x-t.cx,o.z-t.cz);if(l>220&&l<520)break}let s=ln(n,{}),r=new cr(n);r.keep=!0,r.maxHp=r.hp=120,r.place(s.x,s.z,0),w.peds.list.push(r),e.target=r,e.guards=[];for(let a=0;a<2;a++){let o=new cr(n);o.keep=!0,o.tough=!0,o.armed=!0,o.maxHp=o.hp=110,o.place(s.x+rt(-3,3),s.z+rt(-3,3),0),w.peds.list.push(o),e.guards.push(o)}e.blips=()=>e.target&&!e.target.dead?[{x:e.target.x,z:e.target.z,col:"#ff3b3b",r:7,edge:!0}]:[]}w.hud.banner(i.name,"pass",1800)},end(i,t){let e=this.active;if(e){this.active=null,e.start.cool=100;for(let n of this.beams)n.visible=!1;if(e.car&&!e.car.removed&&e.car.tag==="mission"&&(e.car.tag="left"),e.target&&(e.target.keep=!1),e.guards)for(let n of e.guards)n.keep=!1;if(i){let n=e.reward;e.kind==="delivery"&&e.car&&(n+=Math.round(e.car.hpFrac*1e3)),e.kind==="race"&&(n+=Math.round(at(e.timer,0,60)*30)),w.player.addMoney(n),w.stats.missions++,ft.missionPass(),w.hud.banner("MISSION PASSED","pass",3600),w.hud.toast("Reward "+po(n),4e3)}else ft.missionFail(),w.hud.banner("MISSION FAILED","fail",3200),t&&w.hud.toast(t,4e3)}},onKill(){},onEnterVehicle(i){},update(i){let t=w.player;for(let s of this.starts)s.cool>0&&(s.cool-=i),s.beam.visible=!this.active&&s.cool<=0,s.beam.userData.ring.rotation.z+=i;for(let s of this.beams)s.visible&&(s.userData.ring.rotation.z+=i*2);let e=this.active;if(!e){if(t.dead||t.bustedT>0)return;for(let s of this.starts)if(s.cool<=0&&Math.hypot(t.cx-s.x,t.cz-s.z)<3.4){this.start(s);break}return}if(t.dead||t.bustedT>0){this.end(!1,t.dead?"You died":"You got arrested");return}e.t+=i,e.timer!==void 0&&(e.timer-=i);let n=t.inVehicle;if(e.kind==="race")if(e.stage==="getcar"){if(e.grace-=i,e.timer=void 0,n)e.stage="race",e.timer=e.limit,e.text="Reach the checkpoints",ft.click();else if(e.grace<=0){this.end(!1,"You took too long");return}this.beams[0].visible=!1,this.beams[1].visible=!1}else{let s=e.cps[e.idx],r=e.cps[e.idx+1];if(e.text=`Checkpoint ${e.idx+1} / ${e.cps.length}`,ma(this.beams[0],s.x,0,s.z,e.idx===e.cps.length-1?4915066:16765498,1.6),r?ma(this.beams[1],r.x,0,r.z,16777215,.7):this.beams[1].visible=!1,Math.hypot(t.cx-s.x,t.cz-s.z)<12&&(e.idx++,e.timer+=4.5,ft.pickup(),e.idx>=e.cps.length)){this.end(!0);return}if(e.timer<=0){this.end(!1,"Out of time");return}}else if(e.kind==="delivery")if(e.stage==="steal"){if(e.car.removed||e.car.exploded){this.end(!1,"The car was destroyed");return}if(ma(this.beams[2],e.car.x,0,e.car.z,16734794,.8),n===e.car){e.stage="deliver";let[s,r]=fa(e.car.x,e.car.z),a=s,o=r;for(let c=0;c<40;c++){a=Math.random()*13|0,o=Math.random()*13|0;let h=Math.hypot($t(a)-e.car.x,$t(o)-e.car.z);if(h>420&&h<800)break}e.dest={x:$t(a),z:$t(o)};let l=Math.hypot(e.dest.x-e.car.x,e.dest.z-e.car.z);e.timer=l/11+40,e.text="Deliver the car to the drop-off",w.police.addHeat(1.3),w.hud.toast("The owner called the cops!"),this.beams[2].visible=!1}}else{if(e.car.removed||e.car.exploded){this.end(!1,"The car was destroyed");return}if(e.text=n===e.car?"Deliver the car to the drop-off":"Get back in the car",ma(this.beams[0],e.dest.x,0,e.dest.z,4915066,1.5),n!==e.car?ma(this.beams[2],e.car.x,0,e.car.z,16734794,.8):this.beams[2].visible=!1,n===e.car&&Math.hypot(e.car.x-e.dest.x,e.car.z-e.dest.z)<8){this.end(!0);return}if(e.timer<=0){this.end(!1,"Out of time");return}}else if(e.kind==="hit"){let s=e.target;if(s.removed){this.end(!1,"The target got away");return}if(s.dead){this.end(!0);return}ma(this.beams[2],s.x,0,s.z,16726843,.8);let r=Math.hypot(t.cx-s.x,t.cz-s.z);for(let a of e.guards)!a.dead&&r<40&&a.state!=="fight"&&(a.state="fight",a.timer=40);r<45&&s.state!=="flee"&&s.scare(t.cx,t.cz,!1),e.text=r<60?"The target is nearby!":"Find and kill the target"}}};w.missions=Oo;var Kd=i=>document.getElementById(i),Rt={},jd,Lt,Qd,ue,Bo=0,Sm="",Ah=0,tf=0,Rh=0,wm=null,ef=0,Ch=0;var nf=0,Ih=0,Tm=0,hr={fading:!1,mapOpen:!1,init(){for(let i of["hud","vignette","hpbar","arbar","clock","money","moneyfloat","stars","wname","ammo","crosshair","hitmarker","prompt","mission","mtitle","mtext","mtimer","location","speedo","kmh","vhp","radio","toasts","fade","bigmsg","fullmap","stat","game"])Rt[i]=Kd(i);jd=Kd("minimap"),Lt=jd.getContext("2d"),Qd=Kd("fmap"),ue=Qd.getContext("2d"),Rt.hp=Rt.hpbar.querySelector("i"),Rt.ar=Rt.arbar.querySelector("i"),Rt.vh=Rt.vhp.querySelector("i"),ft.radio.onChange=(i,t)=>{Rt.radio.textContent=i<0?"\u266A Radio off":"\u266A "+t,Rt.radio.classList.add("show"),Rh=3}},show(i){Rt.hud.classList.toggle("hidden",!i)},toast(i,t=2600){let e=document.createElement("div");for(e.className="toast",e.textContent=i,Rt.toasts.appendChild(e);Rt.toasts.children.length>5;)Rt.toasts.firstChild.remove();setTimeout(()=>{e.style.opacity=0,setTimeout(()=>e.remove(),450)},t)},prompt(i){Rt.prompt.style.display=i?"block":"none",i&&(Rt.prompt.textContent=i)},hitMarker(i,t){Rt.hitmarker.className="on"+(i||t?" kill":""),clearTimeout(wm),wm=setTimeout(()=>{Rt.hitmarker.className=""},110)},damageFlash(i){Bo=Math.max(Bo,i)},moneyDelta(i){i&&(Rt.moneyfloat.textContent=(i>0?"+":"\u2212")+po(Math.abs(i)),Rt.moneyfloat.style.color=i>0?"#b8ffbb":"#ff9d8f",Rt.moneyfloat.style.opacity=1,Ch=1.8)},weaponChanged(){ef=0},reloading(i){ef=w.time+i},wasted(i){Rt.bigmsg.className=i?"wasted":"",Rt.bigmsg.textContent=i?"WASTED":"",Rt.game.classList.toggle("wasted",!!i)},busted(i){Rt.bigmsg.className=i?"busted":"",Rt.bigmsg.textContent=i?"BUSTED":""},banner(i,t,e=3200){Rt.bigmsg.textContent=i,Rt.bigmsg.className=t,setTimeout(()=>{Rt.bigmsg.textContent===i&&(Rt.bigmsg.className="")},e)},fade(i){this.fading=i,Rt.fade.classList.toggle("on",i)},toggleMap(){this.mapOpen=!this.mapOpen,Rt.fullmap.classList.toggle("hidden",!this.mapOpen)},update(i,t){let e=w.player,n=e.inVehicle;Rt.hp.style.width=at(e.hp/e.maxHp,0,1)*100+"%",Rt.hpbar.classList.toggle("low",e.hp<30),Rt.ar.style.width=at(e.armor,0,100)+"%";let s=Math.floor(w.hour),r=Math.floor((w.hour-s)*60);Rt.clock.textContent=String(s).padStart(2,"0")+":"+String(r).padStart(2,"0"),Rt.money.textContent=po(e.money),Ch>0&&(Ch-=i,Ch<=0&&(Rt.moneyfloat.style.opacity=0));let a=w.police,o=Rt.stars.children;for(let u=0;u<5;u++)o[u].classList.toggle("on",u<a.wanted);Rt.stars.classList.toggle("flash",a.wanted>0&&a.evading);let l=Ln[e.cur],c=e.weapons[e.cur];Rt.wname.textContent=l.name,l.melee?Rt.ammo.textContent="\u221E":l.thrown?Rt.ammo.textContent=c?String(c.reserve):"0":Rt.ammo.textContent=w.time<ef?"RELOADING":c?`${c.mag} / ${c.reserve}`:"";let h=!n&&!e.dead&&(e.armed()||l.thrown);if(Rt.crosshair.classList.toggle("off",!h),Rt.crosshair.classList.toggle("aim",e.aiming),n?(Rt.speedo.style.display="block",Rt.kmh.textContent=Math.round(n.speed*3.6),Rt.vh.style.width=n.hpFrac*100+"%"):Rt.speedo.style.display="none",Bo=Math.max(0,Bo-i*1.3),Rt.vignette.style.opacity=Math.max(Bo,e.hp<30&&!e.dead?.35+Math.sin(w.time*6)*.1:0),Rh>0&&(Rh-=i,Rh<=0&&Rt.radio.classList.remove("show")),this.updatePrompt(),tf-=i,tf<=0){tf=.6;let u=e.cx,f=e.cz,p=O0(u,f)+"|"+z0(u,f);if(p!==Sm){Sm=p;let[x,g]=p.split("|");Rt.location.innerHTML=`${x}<small>${g}</small>`,Rt.location.classList.add("show"),Ah=4}}Ah>0&&(Ah-=i,Ah<=0&&Rt.location.classList.remove("show"));let d=w.missions?w.missions.hud():null;if(d?(Rt.mission.style.display="block",Rt.mtitle.textContent=d.title,Rt.mtext.textContent=d.text,Rt.mtimer.textContent=d.timer!==void 0?Math.max(0,d.timer).toFixed(1):"",Rt.mtimer.classList.toggle("low",d.timer!==void 0&&d.timer<10)):Rt.mission.style.display="none",this.drawMinimap(),this.mapOpen&&this.drawFullMap(),nf++,Ih+=i,Ih>=.5&&(Tm=nf/Ih,nf=0,Ih=0),w.showStats){Rt.stat.classList.remove("hidden");let u=t.info.render;Rt.stat.textContent=`${Tm.toFixed(0)} fps  calls ${u.calls}  tris ${(u.triangles/1e3).toFixed(0)}k
veh ${w.vehicles.length} actors ${w.actors.length} hour ${w.hour.toFixed(1)}
pos ${e.cx.toFixed(0)}, ${e.cz.toFixed(0)}  heat ${a.heat.toFixed(1)}`}else Rt.stat.classList.add("hidden")},updatePrompt(){let i=w.player,t=null;if(i.dead||i.bustedT>0)t=null;else if(i.inVehicle)t=null;else{w.nearInteract=null;for(let e of w.interactables)if(Math.hypot(e.x-i.x,e.z-i.z)<e.r){w.nearInteract=e,t=e.text();break}if(!t){let e=i.nearestVehicle();e&&(t=e.driver==="ai"||e.driver==="cop"?`F \u2014 Carjack ${e.spec.name}`:`F \u2014 Enter ${e.spec.name}`)}}this.prompt(t)},blips(){let i=[],t=w.police;for(let[e,n,s,r]of[["hospital",w.world.pois.hospital,"#ff4a4a","+"],["police",w.world.pois.police,"#4a86ff","\u2605"],["shop",w.world.pois.shop,"#ffb13b","$"]])i.push({x:n.x,z:n.z,col:s,ch:r,r:7});if(w.missions)for(let e of w.missions.blips())i.push(e);if(t.wanted>0){let e=Math.floor(w.time*4)%2===0;for(let n of w.vehicles)n.key==="police"&&!n.exploded&&n.siren&&i.push({x:n.x,z:n.z,col:e?"#ff3b3b":"#3b6bff",r:5});for(let n of w.actors)n.kind==="cop"&&!n.dead&&i.push({x:n.x,z:n.z,col:e?"#ff5a5a":"#5a8aff",r:3.5});for(let n of w.helis)n.dead||i.push({x:n.x,z:n.z,col:"#fff",ch:"\u2708",r:6})}return i},drawMinimap(){let i=w.player,t=i.inVehicle,e=jd.width,n=e/2,s=ea(.8,.5,t?at(t.speed/40,0,1):0);this.mmScale=ea(this.mmScale||s,s,.08);let r=this.mmScale,a=i.cx,o=i.cz,l=w.camYaw||0,c=l+Math.PI,h=st.mapOrigin;Lt.save(),Lt.clearRect(0,0,e,e),Lt.beginPath(),Lt.arc(n,n,n,0,7),Lt.clip(),Lt.fillStyle="#1c3d5a",Lt.fillRect(0,0,e,e),Lt.translate(n,n),Lt.rotate(c),Lt.scale(r,r),Lt.translate(-(a+h),-(o+h)),Lt.drawImage(st.mapCanvas,0,0),Lt.restore();let d=Math.cos(c),u=Math.sin(c);Lt.save(),Lt.beginPath(),Lt.arc(n,n,n-1,0,7),Lt.clip();for(let g of this.blips()){let m=g.x-a,v=g.z-o,A=(m*d-v*u)*r,y=(m*u+v*d)*r,S=Math.hypot(A,y),b=n-10,R=!1;if(S>b){if(!g.edge&&g.r<6)continue;A=A/S*b,y=y/S*b,R=!0}if(Lt.fillStyle=g.col,Lt.strokeStyle="rgba(0,0,0,.8)",Lt.lineWidth=2,Lt.beginPath(),R){let _=Math.atan2(y,A);Lt.save(),Lt.translate(n+A,n+y),Lt.rotate(_),Lt.moveTo(6,0),Lt.lineTo(-5,5),Lt.lineTo(-5,-5),Lt.closePath(),Lt.stroke(),Lt.fill(),Lt.restore()}else Lt.arc(n+A,n+y,g.r,0,7),Lt.stroke(),Lt.fill(),g.ch&&(Lt.fillStyle="#fff",Lt.font="bold 11px Arial",Lt.textAlign="center",Lt.textBaseline="middle",Lt.fillText(g.ch,n+A,n+y+1))}let f=0*d- -1*u,p=0*u+-1*d;Lt.fillStyle="#fff",Lt.font="bold 14px Arial",Lt.textAlign="center",Lt.textBaseline="middle",Lt.strokeStyle="#000",Lt.lineWidth=3,Lt.strokeText("N",n+f*(n-12),n+p*(n-12)),Lt.fillText("N",n+f*(n-12),n+p*(n-12));let x=t?t.heading:i.heading;Lt.translate(n,n),Lt.rotate(l-x),Lt.fillStyle="#fff",Lt.strokeStyle="#000",Lt.lineWidth=2,Lt.beginPath(),Lt.moveTo(0,-9),Lt.lineTo(7,8),Lt.lineTo(0,4),Lt.lineTo(-7,8),Lt.closePath(),Lt.stroke(),Lt.fill(),Lt.restore()},drawFullMap(){let i=Qd.width,t=i/(670*2),e=st.mapOrigin,n=w.player;ue.clearRect(0,0,i,i),ue.drawImage(st.mapCanvas,0,0,i,i);for(let r of this.blips()){let a=(r.x+e)*t,o=(r.z+e)*t;ue.fillStyle=r.col,ue.strokeStyle="#000",ue.lineWidth=2,ue.beginPath(),ue.arc(a,o,r.r+3,0,7),ue.stroke(),ue.fill(),r.ch&&(ue.fillStyle="#fff",ue.font="bold 14px Arial",ue.textAlign="center",ue.textBaseline="middle",ue.fillText(r.ch,a,o+1))}let s=n.inVehicle?n.inVehicle.heading:n.heading;ue.save(),ue.translate((n.cx+e)*t,(n.cz+e)*t),ue.rotate(Math.PI-s),ue.fillStyle="#fff",ue.strokeStyle="#000",ue.lineWidth=2,ue.beginPath(),ue.moveTo(0,-12),ue.lineTo(9,10),ue.lineTo(0,5),ue.lineTo(-9,10),ue.closePath(),ue.stroke(),ue.fill(),ue.restore(),ue.fillStyle="#fff",ue.font="bold 16px Arial",ue.textAlign="left",ue.fillText("N \u2191",10,22)}};var Nh=document.getElementById("game"),Ze=new Gc({canvas:Nh,antialias:!0,powerPreference:"high-performance"});Ze.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));Ze.setSize(window.innerWidth,window.innerHeight);Ze.shadowMap.enabled=!0;Ze.shadowMap.type=js;Ze.toneMapping=Ja;Ze.toneMappingExposure=1;var Hs=new Or,Yn=new gn(65,window.innerWidth/window.innerHeight,.8,4e3);w.scene=Hs;w.camera=Yn;w.renderer=Ze;w.world=st;w.interactables=[];w.playerPos=()=>w.player?{x:w.player.cx,z:w.player.cz}:{x:0,z:0};window.__G=w;var Em=new URLSearchParams(location.search);function qM(){let i=new Or,t=new sn({side:rn,vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`varying vec3 vP; void main(){ float h = normalize(vP).y;
      vec3 sky = mix(vec3(0.72,0.82,0.95), vec3(0.16,0.36,0.75), pow(clamp(h,0.,1.),0.6));
      vec3 gnd = mix(vec3(0.32,0.31,0.3), vec3(0.12,0.12,0.12), clamp(-h*2.,0.,1.));
      vec3 c = h > 0. ? sky : gnd; c += vec3(1.,.95,.85) * pow(max(dot(normalize(vP), normalize(vec3(.4,.8,.3))),0.),40.) * 2.5; gl_FragColor = vec4(c,1.); }`});i.add(new Pt(new yn(50,32,16),t));let e=new jr(Ze),n=e.fromScene(i,.02);w.envMap=n.texture,Fe.detail.envMap=w.envMap,Fe.glass.envMap=w.envMap,e.dispose()}var Dh=!1,Am=!1;function ga(i){At.dragLook=!0,!Am&&!i&&w.started&&(Am=!0,hr.toast("Mouse capture unavailable: move the mouse or use the arrow keys to look. Esc pauses.",6500))}function YM(){c0(Nh),qM(),B0(Hs,Ze),te.init(Hs,Yn,Ze);let i={x:$t(6)+11.5,z:$t(6)+11.5},t=new vh;w.player=t,t.place(i.x,i.z,1.7),t.yaw=1.73,t.pitch=.22,hr.init(),w.hud=hr;let e=new li("sedan",$t(6)+30,$t(6)+8+.4,Math.PI/2,12597547);e.parked=!0,gi.init(),Uo.init(),w.peds=Uo,w.traffic=gi,zo.init(),w.pickups=zo,Oo.init(),Wd(.016,!0),Yn.updateMatrixWorld(),st.update(.001,Yn,{x:t.x,y:0,z:t.z}),Ze.compile(Hs,Yn),Dh=!0;let n=document.getElementById("play");n.disabled=!1,document.getElementById("loading").textContent="Ready.",n.addEventListener("click",()=>rf()),Em.has("noshadow")&&(document.getElementById("opt-shadows").checked=!1,document.getElementById("opt-quality").value="0"),Em.has("autostart")&&rf(!0)}function rf(i){if(w.settings.shadows=document.getElementById("opt-shadows").checked,w.settings.quality=+document.getElementById("opt-quality").value,w.settings.sensitivity=+document.getElementById("opt-sens").value,w.settings.volume=+document.getElementById("opt-vol").value,Im(),ft.init(),ft.setVolume(w.settings.volume),ft.resume(),ft.ambience(.55),document.getElementById("menu").classList.add("hidden"),hr.show(!0),w.started=!0,w.paused=!1,ko=performance.now(),At.reset(),i){ga(!0);return}try{let t=Nh.requestPointerLock();t&&t.catch&&t.catch(()=>ga())}catch{ga()}}function Im(){Ze.shadowMap.enabled=w.settings.shadows,st.sun.castShadow=w.settings.shadows;let i=w.settings.quality;Ze.setPixelRatio(i>=1?Math.min(window.devicePixelRatio||1,1.5):1);let t=i>=1?2048:1024;st.sun.shadow.mapSize.x!==t&&(st.sun.shadow.mapSize.set(t,t),st.sun.shadow.map&&(st.sun.shadow.map.dispose(),st.sun.shadow.map=null)),Ze.setSize(window.innerWidth,window.innerHeight),te.resize(Ze)}function Uh(i){if(!w.started||i===w.paused)return;w.paused=i;let t=document.getElementById("menu");i?(t.classList.remove("hidden"),document.getElementById("play").textContent="RESUME",ft.suspend(),At.reset(),document.getElementById("loading").textContent="Paused"):(t.classList.add("hidden"),ft.resume(),ko=performance.now())}At.onLockChange=i=>{!i&&w.started&&!w.paused&&Uh(!0)};document.getElementById("play").addEventListener("click",()=>{if(w.started&&w.paused&&(w.settings.sensitivity=+document.getElementById("opt-sens").value,w.settings.volume=+document.getElementById("opt-vol").value,w.settings.shadows=document.getElementById("opt-shadows").checked,w.settings.quality=+document.getElementById("opt-quality").value,Im(),ft.setVolume(w.settings.volume),Uh(!1),!At.dragLook))try{let i=Nh.requestPointerLock();i&&i.catch&&i.catch(()=>ga())}catch{ga()}});document.addEventListener("pointerlockerror",()=>ga());window.addEventListener("keydown",i=>{i.code==="Escape"&&At.dragLook&&w.started&&Uh(!w.paused),!w.paused&&(i.code==="KeyM"&&!i.repeat&&hr.toggleMap(),i.code==="F3"&&(i.preventDefault(),w.showStats=!w.showStats))});window.addEventListener("resize",()=>{Ze.setSize(window.innerWidth,window.innerHeight),Yn.aspect=window.innerWidth/window.innerHeight,Yn.updateProjectionMatrix(),te.resize(Ze)});document.addEventListener("visibilitychange",()=>{document.hidden&&w.started&&!w.paused&&At.dragLook});var Ph="",Rm={ARSENAL:()=>{w.player.giveAll(1),w.hud.toast("Cheat: arsenal")},CASHOUT:()=>{w.player.addMoney(5e4),w.hud.toast("Cheat: cash")},HEALME:()=>{let i=w.player;i.hp=i.maxHp,i.armor=100,i.inVehicle&&(i.inVehicle.hp=i.inVehicle.maxHp,i.inVehicle.burning=!1,i.inVehicle.updatePaint()),w.hud.toast("Cheat: healed")},LAYLOW:()=>{Ge.clear(!1)},HEATUP:()=>{Ge.addHeat(Ge.wanted>=5?5:[1.2,4.5,10,18,30][Ge.wanted]-Ge.heat+.01)},SPEEDY:()=>Cm("sports"),BUSRIDE:()=>Cm("bus"),MIDNIGHT:()=>{w.hour=.5,w.hud.toast("Cheat: midnight")},HIGHNOON:()=>{w.hour=12,w.hud.toast("Cheat: noon")}};function Cm(i){let t=w.player,e=t.yaw,n=Math.sin(e),s=Math.cos(e),r=t.cx+n*9,a=t.cz+s*9,o=new li(i,r,a,e,[16723285,46335,16765952][Math.random()*3|0]);o.parked=!0,o.tag="left",w.hud.toast("Cheat: vehicle")}At.onKey=i=>{if(!(!w.started||w.paused||!i.startsWith("Key"))){Ph=(Ph+i.slice(3)).slice(-12);for(let t in Rm)if(Ph.endsWith(t)){Rm[t](),Ph="",ft.click();break}}};var ko=performance.now(),Lh=0,sf=1/60;function Pm(i){w.time+=i;let t=w.player;t.update(i),Lh+=i;let e=0;for(;Lh>=sf&&e<4;)dm(sf),Lh-=sf,e++;e>=4&&(Lh=0),Uo.update(i),Ge.update(i),gi.update(i),zo.update(i),Oo.update(i),Gd(i),Wd(i),Yn.updateMatrixWorld(),st.update(i,Yn,{x:Yn.position.x+Math.sin(t.yaw)*30,y:0,z:Yn.position.z+Math.cos(t.yaw)*30}),te.setLight(.3+.7*(1-w.night)),te.update(i),fm(i);let n=.12+.6*(1-w.night);Fe.detail.envMapIntensity=n,Fe.glass.envMapIntensity=n,w.envI=n,ft.update(i),hr.update(i,Ze)}function Lm(i){if(requestAnimationFrame(Lm),!Dh)return;let t=Math.min(.05,Math.max(1e-4,(i-ko)/1e3));if(ko=i,w.paused){Ze.render(Hs,Yn),At.endFrame();return}Pm(t),Ze.render(Hs,Yn),At.endFrame()}document.getElementById("loading").textContent="Building the city\u2026";setTimeout(()=>{try{YM()}catch(i){console.error(i),document.getElementById("loading").textContent="Failed to start: "+i.message}requestAnimationFrame(Lm)},40);window.__game={Vehicle:li,Ped:Uo,police:Ge,pickups:zo,missions:Oo,G:w,renderer:Ze,scene:Hs,camera:Yn,startGame:rf,pause:Uh,Input:At,simulate:(i,t=1/30)=>{for(let e=0;e<i;e++)Pm(t),At.endFrame()},render:()=>Ze.render(Hs,Yn),stopLoop:()=>{Dh=!1},startLoop:()=>{Dh=!0,ko=performance.now()}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
