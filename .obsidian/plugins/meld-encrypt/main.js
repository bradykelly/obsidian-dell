/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var oe=Object.defineProperty;var Te=Object.getOwnPropertyDescriptor;var Ce=Object.getOwnPropertyNames;var Fe=Object.prototype.hasOwnProperty;var xe=(m,t)=>{for(var e in t)oe(m,e,{get:t[e],enumerable:!0})},Se=(m,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ce(t))!Fe.call(m,i)&&i!==e&&oe(m,i,{get:()=>t[i],enumerable:!(n=Te(t,i))||n.enumerable});return m};var Ie=m=>Se(oe({},"__esModule",{value:!0}),m);var Le={};xe(Le,{default:()=>re});module.exports=Ie(Le);var be=require("obsidian");var k=require("obsidian");var J=class{constructor(){this.values=new Map}put(t,e){this.values.set(t,e)}get(t,e){var n;return(n=this.values.get(t))!=null?n:e}getFirst(t,e){for(let n=0;n<t.length;n++){let i=t[n];if(this.containsKey(i))return this.get(i,e)}return e}containsKey(t){return this.values.has(t)}getKeys(){return Array.from(this.values.keys())}removeKey(t){return this.values.delete(t)}clear(){this.values.clear()}};var ae=require("obsidian"),R=class{static getFilePathWithNewExtension(t,e){return(0,ae.normalizePath)(t.parent.path+"/"+t.basename+"."+e)}static getFilePathExcludingExtension(t){return(0,ae.normalizePath)(t.parent.path+"/"+t.basename)}};var g=class{static setActive(t){g.isActive=t,g.isActive||this.clear()}static setAutoExpire(t){g.baseMinutesToExpire=t!=null?t:0,g.updateExpiryTime()}static setLevel(t){g.level!=t&&(g.allLevels.contains(t)&&(g.level=t),g.level=g.LevelFilename,this.clear())}static updateExpiryTime(){g.baseMinutesToExpire==0||g.baseMinutesToExpire==null?g.expiryTime=null:g.expiryTime=Date.now()+g.baseMinutesToExpire*1e3*60}static putByFile(t,e){if(!g.isActive)return;let n=g.getFileCacheKey(e);this.cache.put(n,t),g.updateExpiryTime()}static getByFile(t){if(!g.isActive)return g.blankPasswordAndHint;this.clearIfExpired(),g.updateExpiryTime();let e=g.getFileCacheKey(t);return this.cache.get(e,g.blankPasswordAndHint)}static putByPath(t,e){if(!g.isActive)return;let n=g.getPathCacheKey(e);this.cache.put(n,t),g.updateExpiryTime()}static getByPath(t){if(!g.isActive)return g.blankPasswordAndHint;this.clearIfExpired(),g.updateExpiryTime();let e=g.getPathCacheKey(t);return this.cache.get(e,g.blankPasswordAndHint)}static getPathCacheKey(t){let e=t.split("/").slice(0,-1).join("/");switch(g.level){case g.LevelParentPath:return e;default:return t}}static getFileCacheKey(t){switch(g.level){case g.LevelParentPath:return t.parent.path;default:return R.getFilePathExcludingExtension(t)}}static clearIfExpired(){g.expiryTime!=null&&(Date.now()<g.expiryTime||this.clear())}static clearForFile(t){let e=g.getFileCacheKey(t);this.cache.removeKey(e)}static clearForPath(t){let e=g.getPathCacheKey(t);this.cache.removeKey(e)}static clear(){this.cache.clear()}},f=g;f.isActive=!0,f.blankPasswordAndHint={password:"",hint:""},f.cache=new J,f.baseMinutesToExpire=0,f.expiryTime=null,f.LevelFilename="filename",f.LevelParentPath="parentPath",f.allLevels=[g.LevelFilename,g.LevelParentPath],f.level=g.LevelFilename;var _=class extends k.PluginSettingTab{constructor(e,n,i,s){super(e,n);this.plugin=n,this.settings=i,this.features=s}display(){let{containerEl:e}=this;e.empty(),new k.Setting(e).setName("Confirm password?").setDesc("Confirm password when encrypting. (Recommended)").addToggle(r=>{r.setValue(this.settings.confirmPassword).onChange(async o=>{this.settings.confirmPassword=o,await this.plugin.saveSettings()})});let n=()=>{if(!this.settings.rememberPassword){i.settingEl.hide(),s.settingEl.hide();return}i.settingEl.show(),s.settingEl.show();let r=this.settings.rememberPasswordTimeout,o=`For ${r} minutes`;r==0&&(o="Until Obsidian is closed"),i.setName(`Remember Password (${o})`)};new k.Setting(e).setName("Remember password?").setDesc("Remember the last used passwords when encrypting or decrypting.  Passwords are remembered until they timeout or Obsidian is closed").addToggle(r=>{r.setValue(this.settings.rememberPassword).onChange(async o=>{this.settings.rememberPassword=o,await this.plugin.saveSettings(),f.setActive(this.settings.rememberPassword),n()})});let i=new k.Setting(e).setDesc("The number of minutes to remember passwords.").addSlider(r=>{r.setLimits(0,120,5).setValue(this.settings.rememberPasswordTimeout).onChange(async o=>{this.settings.rememberPasswordTimeout=o,await this.plugin.saveSettings(),f.setAutoExpire(this.settings.rememberPasswordTimeout),n()})}),s=new k.Setting(e).setDesc("Remember passwords by using a notes file name or parent folder").addDropdown(r=>{r.addOption(f.LevelFilename,"File Name").addOption(f.LevelParentPath,"Parent Folder").setValue(this.settings.rememberPasswordLevel).onChange(async o=>{this.settings.rememberPasswordLevel=o,await this.plugin.saveSettings(),f.setLevel(this.settings.rememberPasswordLevel),n()})});n(),this.features.forEach(r=>{r.buildSettingsUi(e,async()=>await this.plugin.saveSettings())})}};var S=require("obsidian");var M=require("obsidian"),H=class extends M.Modal{constructor(e,n,i=""){super(e);this.decryptInPlace=!1;this.canDecryptInPlace=!0;this.titleEl.setText(n),this.text=i}onOpen(){var r;let{contentEl:e}=this;e.empty(),e.classList.add("meld-encrypt-decrypt-modal");let n;(r=new M.Setting(e).addTextArea(o=>{n=o,o.setValue(this.text),o.inputEl.setSelectionRange(0,0),o.inputEl.readOnly=!0,o.inputEl.rows=10}).settingEl.querySelector(".setting-item-info"))==null||r.remove();let s=new M.Setting(e);s.addButton(o=>{o.setButtonText("Copy").onClick(a=>{navigator.clipboard.writeText(n.getValue()),new M.Notice("Copied!")})}),this.canDecryptInPlace&&s.addButton(o=>{o.setWarning().setButtonText("Decrypt in-place").onClick(a=>{this.decryptInPlace=!0,this.close()})})}};var v=require("obsidian");var K=require("obsidian"),P=class{static isSettingsModalOpen(){return document.querySelector(".mod-settings")!==null}static buildPasswordSetting({container:t,name:e,desc:n="",autoFocus:i=!1,placeholder:s="",initialValue:r="",onChangeCallback:o,onEnterCallback:a}){let c=new K.Setting(t).setName(e).setDesc(n).addButton(w=>{w.setIcon("reading-glasses").onClick(h=>{let d=c.components.find((u,l,p)=>u instanceof K.TextComponent);d instanceof K.TextComponent&&(d.inputEl.type=d.inputEl.type=="password"?"text":"password")})}).addText(w=>{w.setPlaceholder(s),w.setValue(r),w.inputEl.type="password",o!=null&&w.onChange(o),a!=null&&(w.inputEl.onkeydown=h=>{h.key==="Enter"&&(h.preventDefault(),a(w.getValue()))}),i&&setTimeout(()=>w.inputEl.focus(),0)});return c}};var L=class extends v.Modal{constructor(e,n,i,s,r=null,o=null,a=!1){super(e);this.defaultPassword=null;this.resultConfirmed=!1;this.resultPassword=null;this.resultShowInReadingView=null;this.resultTextToEncrypt=null;this.defaultPassword=r,this.confirmPassword=i,this.showInReadingView=s,this.isEncrypting=n,this.defaultHint=o!=null?o:"",this.showTextToEncrypt=a}onOpen(){var u;let{contentEl:e}=this;e.empty(),e.classList.add("meld-encrypt-password-modal"),this.invalidate();let n=(u=this.defaultPassword)!=null?u:"",i="",s=this.defaultHint,r=this.showInReadingView,o="";new v.Setting(e).setHeading().setName(this.isEncrypting?"Encrypting":"Decrypting"),P.buildPasswordSetting({container:e,name:"Password:",placeholder:this.isEncrypting||s.length==0?"":`Hint: ${s}`,initialValue:n,autoFocus:!0,onChangeCallback:l=>{n=l,this.invalidate()},onEnterCallback:l=>{if(n=l,this.invalidate(),n.length>0)if(a.settingEl.isShown()){let p=a.components.find(E=>E instanceof v.TextComponent);p instanceof v.TextComponent&&p.inputEl.focus()}else if(c.settingEl.isShown()){let p=c.components.find(E=>E instanceof v.TextComponent);p instanceof v.TextComponent&&p.inputEl.focus()}else d()&&this.close()}});let a=P.buildPasswordSetting({container:e,name:"Confirm Password:",onChangeCallback:l=>{i=l,this.invalidate()},onEnterCallback:l=>{if(i=l,this.invalidate(),i.length>0&&d()&&c.settingEl.isShown()){let p=c.components.find(E=>E instanceof v.TextComponent);p instanceof v.TextComponent&&p.inputEl.focus()}}});this.confirmPassword||a.settingEl.hide();let c=new v.Setting(e).setName("Optional Password Hint").addText(l=>{l.inputEl.placeholder="Password Hint",l.setValue(s),l.onChange(p=>s=p),l.inputEl.on("keypress","*",(p,E)=>{p.key=="Enter"&&E instanceof HTMLInputElement&&E.value.length>0&&(p.preventDefault(),d()&&this.close())})});this.isEncrypting||c.settingEl.hide();let w=new v.Setting(e).setName("Show encrypted marker in Reading view").addToggle(l=>{l.setValue(r).onChange(p=>{r=p})});this.isEncrypting||w.settingEl.hide();let h=new v.Setting(e).setName("Text to encrypt").addTextArea(l=>{l.setValue("").onChange(p=>o=p),l.inputEl.rows=5,l.inputEl.style.width="100%"});this.showTextToEncrypt||h.settingEl.hide(),new v.Setting(e).addButton(l=>{l.setButtonText("Confirm").onClick(p=>{d()&&this.close()})});let d=()=>(this.invalidate(),a.setDesc(""),this.confirmPassword&&n!=i?(a.setDesc("Passwords don't match"),!1):(this.resultConfirmed=!0,this.resultPassword=n,this.resultHint=s,this.resultShowInReadingView=r,this.resultTextToEncrypt=o,!0))}invalidate(){this.resultConfirmed=!1,this.resultPassword=null,this.resultHint="",this.resultTextToEncrypt=""}};var ce=new TextEncoder,De=new TextDecoder,Ae=1e3,Ne=ce.encode("XHWnDAT6ehMVY2zD"),W=class{async deriveKey(t){let e=ce.encode(t),n=await crypto.subtle.importKey("raw",e,{name:"PBKDF2"},!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",hash:{name:"SHA-256"},iterations:Ae,salt:Ne},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async encryptToBytes(t,e){let n=await this.deriveKey(e),i=ce.encode(t),s=crypto.getRandomValues(new Uint8Array(16)),r=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:s},n,i)),o=new Uint8Array(s.byteLength+r.byteLength);return o.set(s,0),o.set(r,s.byteLength),o}convertToString(t){let e="";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e}async encryptToBase64(t,e){let n=await this.encryptToBytes(t,e);return btoa(this.convertToString(n))}stringToArray(t){let e=[];for(let n=0;n<t.length;n++)e.push(t.charCodeAt(n));return new Uint8Array(e)}async decryptFromBytes(t,e){try{let n=t.slice(0,16),i=t.slice(16),s=await this.deriveKey(e),r=await crypto.subtle.decrypt({name:"AES-GCM",iv:n},s,i);return De.decode(r)}catch(n){return null}}async decryptFromBase64(t,e){try{let n=this.stringToArray(atob(t));return await this.decryptFromBytes(n,e)}catch(n){return null}}};var B=class{constructor(t,e,n){this.vectorSize=t,this.saltSize=e,this.iterations=n}async deriveKey(t,e){let i=new TextEncoder().encode(t),s=await crypto.subtle.importKey("raw",i,"PBKDF2",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"PBKDF2",hash:"SHA-512",salt:e,iterations:this.iterations},s,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async encryptToBytes(t,e){let n=crypto.getRandomValues(new Uint8Array(this.saltSize)),i=await this.deriveKey(e,n),r=new TextEncoder().encode(t),o=crypto.getRandomValues(new Uint8Array(this.vectorSize)),a=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:o},i,r)),c=new Uint8Array(o.byteLength+n.byteLength+a.byteLength);return c.set(o,0),c.set(n,o.byteLength),c.set(a,o.byteLength+n.byteLength),c}convertToString(t){let e="";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e}async encryptToBase64(t,e){let n=await this.encryptToBytes(t,e);return btoa(this.convertToString(n))}stringToArray(t){let e=[];for(let n=0;n<t.length;n++)e.push(t.charCodeAt(n));return new Uint8Array(e)}async decryptFromBytes(t,e){try{let n,i;n=0,i=n+this.vectorSize;let s=t.slice(n,i);n=i,i=n+this.saltSize;let r=t.slice(n,i);n=i,i=void 0;let o=t.slice(n),a=await this.deriveKey(e,r),c=await crypto.subtle.decrypt({name:"AES-GCM",iv:s},a,o);return new TextDecoder().decode(c)}catch(n){return null}}async decryptFromBase64(t,e){try{let n=this.stringToArray(atob(t));return await this.decryptFromBytes(n,e)}catch(n){return null}}};var le={name:"AES-GCM",iv:new Uint8Array([196,190,240,190,188,78,41,132,15,220,84,211]),tagLength:128},Q=class{async buildKey(t){let n=new TextEncoder().encode(t),i=await crypto.subtle.digest({name:"SHA-256"},n);return await crypto.subtle.importKey("raw",i,le,!1,["encrypt","decrypt"])}async encryptToBase64(t,e){let n=await this.buildKey(e),s=new TextEncoder().encode(t),r=new Uint8Array(await crypto.subtle.encrypt(le,n,s));return btoa(String.fromCharCode(...r))}stringToArray(t){let e=[];for(let n=0;n<t.length;n++)e.push(t.charCodeAt(n));return new Uint8Array(e)}async decryptFromBase64(t,e){try{let n=this.stringToArray(atob(t)),i=await this.buildKey(e),s=await crypto.subtle.decrypt(le,i,n);return new TextDecoder().decode(s)}catch(n){return null}}};var C=class{static BuildDefault(){return new B(16,16,21e4)}static BuildFromFileDataOrThrow(t){let e=C.BuildFromFileDataOrNull(t);if(e!=null)return e;throw new Error(`Unable to determine ICryptoHelper for File ver ${t.version}`)}static BuildFromFileDataOrNull(t){return t.version=="1.0"?new W:t.version=="2.0"?new B(16,16,21e4):null}static BuildFromDecryptableOrThrow(t){let e=C.BuildFromDecryptableOrNull(t);if(e!=null)return e;throw new Error(`Unable to determine ICryptoHelper for Decryptable ver ${t.version}`)}static BuildFromDecryptableOrNull(t){return t.version==0?new Q:t.version==1?new W:t.version==2?new B(16,16,21e4):null}};var Z=class{};var ee="%%\u{1F510}\u03B2 ",te="\u{1F510}\u03B2 ",de="%%\u{1F510}\u03B1 ",pe="\u{1F510}\u03B1 ",ue="%%\u{1F510} ",Ee=ee,Pe=te,A=[ee,te,de,pe,ue],he=" \u{1F510}%%",ge=" \u{1F510}",V=[he,ge],x="\u{1F4A1}";var X=class{constructor(t){this.process(t)}process(t){var e,n;if(this.processedText=t,this.isEmpty=t.length===0,this.prefix=(e=A.find(i=>t.startsWith(i)))!=null?e:"",this.suffix=(n=V.find(i=>t.endsWith(i)))!=null?n:"",this.hasEncryptedPrefix=this.prefix.length>0,this.hasEncryptedSuffix=this.suffix.length>0,this.hasObsoleteEncryptedPrefix=this.prefix===ue,this.containsEncryptedMarkers=[...A,...V].some(i=>t.includes(i)),this.canDecrypt=this.hasEncryptedPrefix&&this.hasEncryptedSuffix,this.canEncrypt=!this.hasEncryptedPrefix&&!this.containsEncryptedMarkers,this.canDecrypt){let i=this.parseDecryptableContent(t);i!=null?this.decryptable=i:this.canDecrypt=!1}}parseDecryptableContent(t){let e=new Z;if(!this.hasEncryptedPrefix||!this.hasEncryptedSuffix)return null;this.hasObsoleteEncryptedPrefix?e.version=0:this.prefix==ee||this.prefix==te?e.version=2:(this.prefix==de||this.prefix==pe)&&(e.version=1);let n=t.substring(this.prefix.length,t.length-this.suffix.length);if([...A,...V].some(i=>n.includes(i)))return null;if(n.substring(0,x.length)==x){let i=n.indexOf(x,x.length);if(i<0)return null;e.hint=n.substring(x.length,i),e.base64CipherText=n.substring(i+x.length)}else e.base64CipherText=n;return e}};var Y=class{async onload(t,e){this.plugin=t,this.pluginSettings=e,this.featureSettings=e.featureInplaceEncrypt,this.plugin.registerMarkdownPostProcessor((n,i)=>this.processEncryptedCodeBlockProcessor(n,i)),t.addCommand({id:"meld-encrypt",name:"Encrypt/Decrypt",icon:"lock",editorCheckCallback:(n,i,s)=>this.processEncryptDecryptCommand(n,i,!1)}),t.addCommand({id:"meld-encrypt-in-place",name:"Encrypt/Decrypt In-place",icon:"lock",editorCheckCallback:(n,i,s)=>this.processEncryptDecryptCommand(n,i,!0)})}onunload(){}replaceMarkersRecursive(t){if(t instanceof HTMLElement){t.childNodes.forEach(e=>this.replaceMarkersRecursive(e));return}if(t instanceof Text){let e=t.textContent;if(e==null||!e.contains("\u{1F510}"))return;let n=t.parentElement;if(n==null)return;let i=/🔐(.*?)🔐/g;n.removeChild(t);for(let s of e.matchAll(i))n.createSpan({cls:"meld-encrypt-inline-reading-marker",text:"\u{1F510}",attr:{"data-meld-encrypt-encrypted":s[0]}})}}async processEncryptedCodeBlockProcessor(t,e){this.replaceMarkersRecursive(t);let n=t.querySelectorAll(".meld-encrypt-inline-reading-marker");this.bindReadingIndicatorEventHandlers(e.sourcePath,n)}bindReadingIndicatorEventHandlers(t,e){e.forEach(n=>{let i=n;i!=null&&i.onClickEvent(async s=>{let r=s.target;if(r==null)return;let o=r.dataset.meldEncryptEncrypted;if(o==null)return;let a=new X(o);await this.handleReadingIndicatorClick(t,a.decryptable)})})}async handleReadingIndicatorClick(t,e){if(e==null){new S.Notice("\u274C Decryption failed!");return}if(await this.showDecryptedTextIfPasswordKnown(t,e))return;let n=await this.fetchPasswordFromUser(e.hint);n!=null&&(await this.showDecryptedResultForPassword(e,n)?f.putByPath({password:n,hint:e.hint},t):new S.Notice("\u274C Decryption failed!"))}async showDecryptedResultForPassword(t,e){let i=await C.BuildFromDecryptableOrThrow(t).decryptFromBase64(t.base64CipherText,e);return i===null?!1:new Promise(s=>{let r=new H(this.plugin.app,"\u{1F513}",i);r.canDecryptInPlace=!1,r.onClose=()=>{s(!0)},r.open()})}async fetchPasswordFromUser(t){return new Promise(e=>{let n=new L(this.plugin.app,!1,!1,this.featureSettings.showMarkerWhenReadingDefault,"",t);n.onClose=()=>{e(n.resultPassword)},n.open()})}async showDecryptedTextIfPasswordKnown(t,e){let n=f.getByPath(t);return n.password==null?!1:await this.showDecryptedResultForPassword(e,n.password)}buildSettingsUi(t,e){new S.Setting(t).setHeading().setName("In-place encryption"),new S.Setting(t).setName("Expand selection to whole line?").setDesc("Partial selections will get expanded to the whole line.").addToggle(n=>{n.setValue(this.featureSettings.expandToWholeLines).onChange(async i=>{this.featureSettings.expandToWholeLines=i,await e()})}),new S.Setting(t).setName("By default, show encrypted marker when reading").setDesc("When encrypting inline text, should the default be to have a visible marker in Reading view?").addToggle(n=>{n.setValue(this.featureSettings.showMarkerWhenReadingDefault).onChange(async i=>{this.featureSettings.showMarkerWhenReadingDefault=i,await e()})})}processEncryptDecryptCommand(t,e,n){if(t&&P.isSettingsModalOpen())return!0;let i=e.getCursor("from"),s=e.getCursor("to");if(this.featureSettings.expandToWholeLines){i={line:i.line,ch:0};let a=s.line,c=e.getLine(a);s={line:a,ch:c.length}}else if(!e.somethingSelected()){let o=this.getClosestPrefixCursorPos(e),a=this.getClosestSuffixCursorPos(e);if(o==null||a==null||i.line<o.line||s.line>a.line)return this.promptForTextToEncrypt(t,e,i);i=o,s=a}let r=e.getRange(i,s);return this.processSelection(t,e,r,i,s,n)}promptForTextToEncrypt(t,e,n){let i=this.plugin.app.workspace.getActiveFile();if(i==null)return!1;if(t)return!0;let s="",r="";if(this.pluginSettings.rememberPassword){let c=f.getByPath(i.path);s=c.password,r=c.hint}let o=this.pluginSettings.confirmPassword,a=new L(this.plugin.app,!0,o,this.featureSettings.showMarkerWhenReadingDefault,s,r,!0);return a.onClose=async()=>{var u,l,p,E;if(!a.resultConfirmed)return;let c=(u=a.resultPassword)!=null?u:"",w=(l=a.resultHint)!=null?l:"",h=(p=a.resultTextToEncrypt)!=null?p:"",d=new ne;d.text=h,d.hint=w,this.encryptSelection(e,d,c,n,n,(E=a.resultShowInReadingView)!=null?E:this.featureSettings.showMarkerWhenReadingDefault),f.putByPath({password:c,hint:w},i.path)},a.open(),!1}getClosestPrefixCursorPos(t){let e=A.reduce((i,s,r)=>r==0||s.length>i.length?s:i),n=t.posToOffset(t.getCursor("from"))+e.length;for(let i=n;i>=0;i--){let s=t.offsetToPos(i);for(let r of A){let o=i-r.length,a=t.offsetToPos(o);if(t.getRange(a,s)==r)return t.offsetToPos(o)}}return null}getClosestSuffixCursorPos(t){let e=A.reduce((r,o,a)=>a==0||o.length>r.length?o:r),n=t.posToOffset(t.getCursor("from"))-e.length+1,i=t.lastLine(),s=t.posToOffset({line:i,ch:t.getLine(i).length});for(let r=n;r<=s;r++){let o=t.offsetToPos(r);for(let a of V){let c=r+a.length,w=t.offsetToPos(c);if(t.getRange(o,w)==a)return w}}return null}processSelection(t,e,n,i,s,r,o=!0){var l;let a=new X(n);if(a.isEmpty)return t||new S.Notice("Nothing to Encrypt."),!1;if(!a.canDecrypt&&!a.canEncrypt)return t||new S.Notice("Unable to Encrypt or Decrypt that."),!1;if(a.canEncrypt&&!o)return!1;let c=this.plugin.app.workspace.getActiveFile();if(c==null)return!1;if(t)return!0;let w="",h=(l=a.decryptable)==null?void 0:l.hint;if(this.pluginSettings.rememberPassword){let p=f.getByPath(c.path);w=p.password,h=h!=null?h:p.hint}let d=a.canEncrypt&&this.pluginSettings.confirmPassword,u=new L(this.plugin.app,a.canEncrypt,d,this.featureSettings.showMarkerWhenReadingDefault,w,h);return u.onClose=async()=>{var we,me,ye;if(!u.resultConfirmed)return;let p=(we=u.resultPassword)!=null?we:"",E=(me=u.resultHint)!=null?me:"";if(a.canEncrypt){let j=new ne;j.text=n,j.hint=E,this.encryptSelection(e,j,p,i,s,(ye=u.resultShowInReadingView)!=null?ye:this.featureSettings.showMarkerWhenReadingDefault),f.putByPath({password:p,hint:E},c.path)}else a.decryptable&&await this.decryptSelection(e,a.decryptable,p,i,s,r)&&f.putByPath({password:p,hint:E},c.path)},u.open(),!0}async encryptSelection(t,e,n,i,s,r){let o=C.BuildDefault(),a=this.encodeEncryption(await o.encryptToBase64(e.text,n),e.hint,r);t.setSelection(i,s),t.replaceSelection(a)}async decryptSelection(t,e,n,i,s,r){let a=await C.BuildFromDecryptableOrThrow(e).decryptFromBase64(e.base64CipherText,n);if(a===null)return new S.Notice("\u274C Decryption failed!"),!1;if(r)t.setSelection(i,s),t.replaceSelection(a);else{let c=new H(this.plugin.app,"\u{1F513}",a);c.onClose=()=>{t.focus(),c.decryptInPlace&&(t.setSelection(i,s),t.replaceSelection(a))},c.open()}return!0}encodeEncryption(t,e,n){if(!A.some(i=>t.includes(i))&&!V.some(i=>t.includes(i))){let i=n?Pe:Ee,s=n?ge:he;return e.length>0?i.concat(x,e,x,t,s):i.concat(t,s)}return t}},ne=class{};var F=require("obsidian");var y=require("obsidian");var O=class{static get showInlineTitle(){var t;return(t=app.vault.getConfig("showInlineTitle"))!=null?t:!0}static get readableLineLength(){var t;return(t=app.vault.getConfig("readableLineLength"))!=null?t:!0}};var ie=class{constructor(t,e,n){this.version="1.0";this.version=t,this.hint=e,this.encodedData=n}},fe=class{static async encode(t,e,n){let s=await C.BuildDefault().encryptToBase64(n,t);return new ie(fe.DEFAULT_VERSION,e,s)}static async decrypt(t,e){return t.encodedData==""?"":await C.BuildFromFileDataOrThrow(t).decryptFromBase64(t.encodedData,e)}},I=fe;I.DEFAULT_VERSION="2.0";var D=class{static encode(t){return JSON.stringify(t,null,2)}static decode(t){return t===""?new ie(I.DEFAULT_VERSION,"",""):JSON.parse(t)}};var ke="encrypted",ve="mdenc",se=ve,N=[ve,ke];var G="meld-encrypted-file-content-view",z=class extends y.TextFileView{constructor(e,n){var i;super(e);this.iconReadingView="book-open";this.iconSourceView="code";this.iconToggleEditView="edit";this.iconLockFile="lock";this.iconChangePassword="key";this.currentView=0;this.encryptionPassword="";this.hint="";this.currentEditorSourceText="";this.settings=n,this.defaultEditNoteView=(i=n.defaultView)!=null?i:"Source",this.currentEditNoteMode=this.defaultEditNoteView,this.elActionEditView=this.addAction(this.iconSourceView,"Source",()=>this.toggleReadingView()),this.elActionReadingView=this.addAction(this.iconReadingView,"Reading",()=>this.toggleReadingView()),this.elActionIconLockNote=this.addAction(this.iconLockFile,"Lock",()=>this.actionLockFile()),this.elActionChangePassword=this.addAction(this.iconChangePassword,"Change Password",()=>this.actionChangePassword()),this.elActionEditView.hide(),this.elActionReadingView.hide(),this.elActionIconLockNote.hide(),this.elActionChangePassword.hide(),this.containerEl.classList.add("meld-encrypt-encrypted-note-view"),this.contentEl.classList.add("meld-encrypt-encrypted-note-view-content")}toggleReadingView(){this.currentView==2&&(this.currentEditNoteMode=="Reading"?this.currentEditNoteMode="Source":this.currentEditNoteMode=="Source"&&(this.currentEditNoteMode="Reading"),this.refreshView(2))}actionLockFile(){this.encryptionPassword="",f.clearForFile(this.file),this.refreshView(1)}actionChangePassword(){this.refreshView(3)}onPaneMenu(e,n){n=="tab-header"&&this.currentView==2&&(e.addItem(i=>{i.setSection("action").setIcon(this.iconToggleEditView).setTitle("Toggle Editing/Reading").onClick(()=>this.toggleReadingView())}),e.addItem(i=>{i.setSection("action").setIcon(this.iconLockFile).setTitle("Lock").onClick(()=>this.actionLockFile())}),e.addItem(i=>{i.setSection("action").setIcon(this.iconChangePassword).setTitle("Change Password").onClick(()=>this.actionChangePassword())})),super.onPaneMenu(e,n)}addHeader(e,n){var i;e.createDiv({text:`\u{1F510} ${n} \u{1F510}`,cls:"encrypted-note-message"}),O.showInlineTitle&&e.createDiv({text:(i=this.file)==null?void 0:i.basename,cls:"inline-title"})}validatePassword(e){return""}validateConfirm(e,n){return e===n?"":"Password doesn't match"}addNewNoteView(e){this.addHeader(e,"This note will be encrypted");let n=this.addUserInputContainer(e);new y.Setting(n).setDesc("Please provide a password and hint to start editing this note.");let i=async(d,u,l)=>{let p=this.validatePassword(d),E=this.validateConfirm(d,u);c.setDesc(p),w.setDesc(E),p.length===0&&E.length===0&&(this.encryptionPassword=d,this.hint=l,O.showInlineTitle||(this.currentEditorSourceText=`# ${this.file.basename}


`),await this.encodeAndSave(),f.putByFile({password:d,hint:l},this.file),this.currentEditNoteMode="Source",this.refreshView(2))},s=f.getByFile(this.file),r=s.password,o="",a=s.hint,c=P.buildPasswordSetting({container:n,name:"Password:",autoFocus:!0,initialValue:r,onChangeCallback:d=>{r=d,c.setDesc(this.validatePassword(r)),w.setDesc(this.validateConfirm(r,o))},onEnterCallback:d=>{var u;r=d,r.length>0&&((u=w.controlEl.querySelector("input"))==null||u.focus())}}),w=P.buildPasswordSetting({container:n,name:"Confirm:",autoFocus:!1,onChangeCallback:d=>{o=d,c.setDesc(this.validatePassword(r)),w.setDesc(this.validateConfirm(r,o))},onEnterCallback:d=>{var l;o=d,r===o&&((l=h.controlEl.querySelector("input"))==null||l.focus())}}),h=new y.Setting(n).setName("Hint:").addText(d=>{d.setValue(a),d.onChange(u=>{a=u})});h.controlEl.on("keydown","*",d=>{d.key==="Enter"&&(d.preventDefault(),i(r,o,a))}),new y.Setting(n).addButton(d=>{d.setCta().setIcon("go-to-file").setTooltip("Edit").onClick(u=>i(r,o,a))})}addDecryptNoteView(e){this.addHeader(e,"This note is encrypted");let n=this.addUserInputContainer(e);new y.Setting(n).setDesc("Please provide a password to unlock this note.");let i=P.buildPasswordSetting({container:n,name:"Password:",autoFocus:!0,placeholder:this.formatHint(this.hint),onChangeCallback:r=>{this.encryptionPassword=r,i.setDesc(this.validatePassword(this.encryptionPassword))},onEnterCallback:async()=>await this.handleDecryptButtonClick()});new y.Setting(n).addButton(r=>{r.setCta().setIcon("checkmark").setTooltip("Unlock & Edit").onClick(o=>this.handleDecryptButtonClick())});let s=f.getByFile(this.file);this.encryptionPassword=s.password,s.password.length>0&&this.decryptWithPassword(s.password).then(r=>{r!=null&&(this.currentEditorSourceText=r,this.refreshView(2),new y.Notice("Decrypted using remembered password",2e3))})}async encodeAndSave(){try{let e=await I.encode(this.encryptionPassword,this.hint,this.currentEditorSourceText);this.data=D.encode(e),this.requestSave()}catch(e){console.error(e),new y.Notice(e,1e4)}}addEditorSourceView(e){this.elActionReadingView.show(),this.elActionIconLockNote.show(),this.elActionChangePassword.show(),this.addHeader(e,"Editing an encrypted note");let n=e.createDiv({cls:"editor-source-view"},i=>{i.spellcheck=!0,i.autocapitalize="on",i.translate=!1,i.contentEditable="plaintext-only",i.style.tabSize="4",i.innerText=this.currentEditorSourceText});n.focus(),n.on("keydown","*",(i,s)=>{i.key=="Tab"&&this.handleTabInEditor(i,n)}),n.on("input","*",async(i,s)=>{this.updateAndSaveEditorSourceText(n)})}async updateAndSaveEditorSourceText(e){this.currentEditorSourceText=e.innerText,await this.encodeAndSave()}handleTabInEditor(e,n){let i=window.getSelection();if(i==null||i.rangeCount<1)return;e.preventDefault();let s=!e.shiftKey;for(let r=0;r<i.rangeCount;r++){let o=i.getRangeAt(r),a=this.getRangeNodes(o);for(let c=0;c<a.length;c++){let w=a[c];w instanceof Text&&(s?w.insertData(0,"	"):w.data.startsWith("	")&&w.replaceData(0,1,""))}}this.updateAndSaveEditorSourceText(n)}getRangeNodes(e){let n=Array();if(e.startContainer==e.endContainer)return[e.startContainer];let i=e.startContainer;for(i==e.commonAncestorContainer&&(i=e.commonAncestorContainer.firstChild);i!=null;)e.intersectsNode(i)&&n.push(i),i=i.nextSibling;return n}addEditorReadingView(e){this.elActionEditView.show(),this.elActionIconLockNote.show(),this.elActionChangePassword.show(),this.addHeader(e,"Reading an encrypted note");let n=e.createDiv({cls:"editor-reading-view"});y.MarkdownRenderer.renderMarkdown(this.currentEditorSourceText,n,this.file.path,this).catch(i=>{console.error(i)}),n.on("click","a.internal-link",async(i,s)=>{if(s instanceof HTMLAnchorElement){let r=(0,y.normalizePath)(decodeURI(s.pathname));this.app.workspace.openLinkText(r,this.file.path,i.ctrlKey)}})}addUserInputContainer(e){return e.createDiv({cls:"input-container"})}addChangePasswordView(e){this.addHeader(e,"Change encrypted note password");let n=this.addUserInputContainer(e),i="",s="",r="",o=async(h,d,u)=>{let l=this.validatePassword(h),p=this.validateConfirm(h,d);a.setDesc(l),c.setDesc(p),l.length===0&&p.length===0&&(this.encryptionPassword=h,this.hint=u,this.encodeAndSave(),this.refreshView(2),f.putByFile({password:h,hint:u},this.file),new y.Notice("Password and Hint were changed"))},a=P.buildPasswordSetting({container:n,name:"New Password:",autoFocus:!0,onChangeCallback:h=>{i=h,a.setDesc(this.validatePassword(i)),c.setDesc(this.validateConfirm(i,s))},onEnterCallback:h=>{var d;i=h,i.length>0&&((d=c.controlEl.querySelector("input"))==null||d.focus())}}),c=P.buildPasswordSetting({container:n,name:"Confirm:",onChangeCallback:h=>{s=h,a.setDesc(this.validatePassword(i)),c.setDesc(this.validateConfirm(i,s))},onEnterCallback:h=>{var u;s=h,i===s&&((u=w.controlEl.querySelector("input"))==null||u.focus())}}),w=new y.Setting(n).setName("New Hint:").addText(h=>{h.onChange(d=>{r=d})});w.controlEl.on("keydown","*",h=>{h.key==="Enter"&&(h.preventDefault(),o(i,s,r))}),new y.Setting(n).addButton(h=>{h.removeCta().setIcon("cross").setTooltip("Cancel").onClick(()=>{this.refreshView(2)})}).addButton(h=>{h.setCta().setIcon("checkmark").setTooltip("Change Password").setWarning().onClick(d=>{o(i,s,r)})})}formatHint(e){return e.length>0?`Hint: ${e}`:""}refreshView(e){this.currentView=e,this.elActionEditView.hide(),this.elActionReadingView.hide(),this.elActionIconLockNote.hide(),this.elActionChangePassword.hide(),this.contentEl.empty(),O.readableLineLength?this.contentEl.classList.add("is-readable-line-width"):this.contentEl.classList.remove("is-readable-line-width");let n=this.contentEl.createDiv({cls:"content-container"});switch(this.currentView){case 4:this.addNewNoteView(n);break;case 1:this.addDecryptNoteView(n);break;case 2:this.currentEditNoteMode=="Source"?this.addEditorSourceView(n):this.addEditorReadingView(n);break;case 3:this.addChangePasswordView(n);break}}async decryptWithPassword(e){let n=D.decode(this.data);return await I.decrypt(n,e)}async handleDecryptButtonClick(){let e=await this.decryptWithPassword(this.encryptionPassword);e===null?new y.Notice("Decryption failed"):(f.putByFile({password:this.encryptionPassword,hint:this.hint},this.file),this.currentEditorSourceText=e,this.refreshView(2))}canAcceptExtension(e){return N.contains(e)}getViewType(){return G}setViewData(e,n){if(n){let i;e===""?i=4:i=1,this.encryptionPassword="";let s=D.decode(this.data);this.hint=s.hint,this.refreshView(i)}else this.leaf.detach(),new y.Notice("Multiple views of the same encrypted note isn't supported")}getViewData(){return this.data}clear(){}};var $=class{async onload(t,e){this.plugin=t,this.settings=e.featureWholeNoteEncrypt,this.plugin.addRibbonIcon("file-lock-2","New encrypted note",n=>{this.processCreateNewEncryptedNoteCommand(this.getDefaultFileFolder())}),this.plugin.registerView(G,n=>new z(n,this.settings)),this.plugin.registerExtensions(N,G),this.plugin.addCommand({id:"meld-encrypt-create-new-note",name:"Create new encrypted note",icon:"file-lock-2",callback:()=>this.processCreateNewEncryptedNoteCommand(this.getDefaultFileFolder())}),this.plugin.addCommand({id:"meld-encrypt-toggle-reading-view",name:"Toggle Reading View",icon:"edit",callback:()=>this.processToggleReadingViewCommand()}),this.plugin.registerEvent(this.plugin.app.workspace.on("file-menu",(n,i)=>{i instanceof F.TFolder&&n.addItem(s=>{s.setTitle("New encrypted note").setIcon("file-lock-2").onClick(()=>this.processCreateNewEncryptedNoteCommand(i))})}))}onunload(){this.plugin.app.workspace.detachLeavesOfType(G)}processToggleReadingViewCommand(){let t=this.plugin.app.workspace.getActiveViewOfType(z);t==null||t.toggleReadingView()}getDefaultFileFolder(){let t=this.plugin.app.workspace.getActiveFile();return t!=null?this.plugin.app.fileManager.getNewFileParent(t.path):this.plugin.app.fileManager.getNewFileParent("")}processCreateNewEncryptedNoteCommand(t){try{let e=(0,F.moment)().format(`[Untitled] YYYYMMDD hhmmss[.${se}]`),n=(0,F.normalizePath)(t.path+"/"+e);this.plugin.app.vault.create(n,"").then(async i=>{await this.plugin.app.workspace.getLeaf(!0).openFile(i)}).catch(i=>{new F.Notice(i,1e4)})}catch(e){console.error(e),new F.Notice(e,1e4)}}buildSettingsUi(t,e){new F.Setting(t).setHeading().setName("Whole note encryption"),new F.Setting(t).setName("Default view for new tabs").setDesc("The default view that a new encrypted note tab gets opened in").addDropdown(n=>{var i;n.addOption(`${"Source"}`,"Source view").addOption(`${"Reading"}`,"Reading view").setValue(`${(i=this.settings.defaultView)!=null?i:"Source"}`).onChange(async s=>{this.settings.defaultView=s,await e()})})}};var T=require("obsidian");var b=require("obsidian");var U=class extends b.Modal{constructor(e,n,i,s,r){super(e);this.resultConfirmed=!1;this.title=n,this.defaultPassword=r,this.confirmPassword=s,this.isEncrypting=i}onOpen(){var c,w,h,d;let{contentEl:e}=this;e.empty(),this.invalidate();let n=(w=(c=this.defaultPassword)==null?void 0:c.password)!=null?w:"",i="",s=(d=(h=this.defaultPassword)==null?void 0:h.hint)!=null?d:"";new b.Setting(e).setHeading().setName(this.title),P.buildPasswordSetting({container:e,name:"Password:",placeholder:this.isEncrypting?"":`Hint: ${s}`,initialValue:n,autoFocus:n=="",onChangeCallback:u=>{n=u,this.invalidate()},onEnterCallback:u=>{if(n=u,this.invalidate(),n.length>0)if(r.settingEl.isShown()){let l=r.components.find(p=>p instanceof b.TextComponent);l instanceof b.TextComponent&&l.inputEl.focus()}else if(o.settingEl.isShown()){let l=o.components.find(p=>p instanceof b.TextComponent);l instanceof b.TextComponent&&l.inputEl.focus()}else a()&&this.close()}});let r=P.buildPasswordSetting({container:e,name:"Confirm Password:",autoFocus:n!="",onChangeCallback:u=>{i=u,this.invalidate()},onEnterCallback:u=>{if(i=u,this.invalidate(),i.length>0&&a()&&o.settingEl.isShown()){let l=o.components.find(p=>p instanceof b.TextComponent);l instanceof b.TextComponent&&l.inputEl.focus()}}});this.confirmPassword||r.settingEl.hide();let o=new b.Setting(e).setName("Optional Password Hint").addText(u=>{u.inputEl.placeholder="Password Hint",u.setValue(s),u.onChange(l=>s=l),u.inputEl.on("keypress","*",(l,p)=>{l.key=="Enter"&&p instanceof HTMLInputElement&&p.value.length>0&&(l.preventDefault(),a()&&this.close())})});this.isEncrypting||o.settingEl.hide(),new b.Setting(e).addButton(u=>{u.setButtonText("Confirm").onClick(l=>{a()&&this.close()})});let a=()=>(this.invalidate(),r.setDesc(""),this.confirmPassword&&n!=i?(r.setDesc("Passwords don't match"),!1):(this.resultConfirmed=!0,this.resultPassword={password:n,hint:s},!0))}openAsync(){return new Promise((e,n)=>{this.onClose=()=>{this.resultConfirmed==!0?e(this.resultPassword):n()},this.open()})}invalidate(){this.resultConfirmed=!1,this.resultPassword={password:"",hint:""}}};var q=class{async onload(t,e){this.plugin=t,this.plugin.addCommand({id:"meld-encrypt-convert-to-or-from-encrypted-note",name:"Convert to or from an Encrypted note",icon:"file-lock",checkCallback:n=>this.processCommandConvertActiveNote(n)}),this.plugin.addRibbonIcon("file-lock","Convert to or from an Encrypted note",n=>this.processCommandConvertActiveNote(!1)),this.plugin.registerEvent(this.plugin.app.workspace.on("file-menu",(n,i)=>{i instanceof T.TFile&&(i.extension=="md"&&n.addItem(s=>{s.setTitle("Encrypt note").setIcon("file-lock").onClick(()=>this.processCommandEncryptNote(i))}),N.contains(i.extension)&&n.addItem(s=>{s.setTitle("Decrypt note").setIcon("file").onClick(()=>this.processCommandDecryptNote(i))}))}))}onunload(){}buildSettingsUi(t,e){}checkCanEncryptFile(t){return t==null?!1:t.extension=="md"}checkCanDecryptFile(t){return t==null?!1:N.contains(t.extension)}processCommandEncryptNote(t){this.getPasswordAndEncryptFile(t).catch(e=>{e&&new T.Notice(e,1e4)})}processCommandDecryptNote(t){this.getPasswordAndDecryptFile(t).catch(e=>{e&&new T.Notice(e,1e4)})}processCommandConvertActiveNote(t){let e=this.plugin.app.workspace.getActiveFile();if(t)return this.checkCanEncryptFile(e)||this.checkCanDecryptFile(e);(e==null?void 0:e.extension)=="md"&&this.getPasswordAndEncryptFile(e).catch(n=>{n&&new T.Notice(n,1e4)}),e&&N.contains(e.extension)&&this.getPasswordAndDecryptFile(e).catch(n=>{n&&new T.Notice(n,1e4)})}async getPasswordAndEncryptFile(t){if(!this.checkCanEncryptFile(t))throw new Error("Unable to encrypt file");let e=f.getByFile(t),n=new U(this.plugin.app,"Encrypt Note",!0,!0,e);try{let i=await n.openAsync(),s=await this.encryptFile(t,i);await this.closeUpdateRememberPasswordThenReopen(t,se,s,i),new T.Notice("\u{1F510} Note was encrypted \u{1F510}")}catch(i){i&&new T.Notice(i,1e4)}}async getPasswordAndDecryptFile(t){if(!this.checkCanDecryptFile(t))throw new Error("Unable to decrypt file");let e=f.getByFile(t);if(e.password!=""){let r=await this.decryptFile(t,e.password);if(r!=null){await this.closeUpdateRememberPasswordThenReopen(t,"md",r,e);return}}let n=await this.plugin.app.vault.read(t),i=D.decode(n),s=new U(this.plugin.app,"Decrypt Note",!1,!1,{password:"",hint:i.hint});try{if(e=await s.openAsync(),!s.resultConfirmed)return;let r=await this.decryptFile(t,e.password);if(r==null)throw new Error("Decryption failed");await this.closeUpdateRememberPasswordThenReopen(t,"md",r,e),new T.Notice("\u{1F513} Note was decrypted \u{1F513}")}catch(r){r&&new T.Notice(r,1e4)}}async closeUpdateRememberPasswordThenReopen(t,e,n,i){let s=!1;this.plugin.app.workspace.iterateAllLeaves(r=>{r.view instanceof T.TextFileView&&r.view.file==t&&(r.detach(),s=!0)});try{let r=R.getFilePathWithNewExtension(t,e);await this.plugin.app.fileManager.renameFile(t,r),await this.plugin.app.vault.modify(t,n),f.putByFile(i,t)}finally{s&&await this.plugin.app.workspace.getLeaf().openFile(t)}}async encryptFile(t,e){let n=await this.plugin.app.vault.read(t),i=await I.encode(e.password,e.hint,n);return D.encode(i)}async decryptFile(t,e){let n=await this.plugin.app.vault.read(t),i=D.decode(n);return await I.decrypt(i,e)}};var re=class extends be.Plugin{constructor(){super(...arguments);this.enabledFeatures=[]}async onload(){await this.loadSettings(),this.enabledFeatures.push(new $,new q,new Y),this.addSettingTab(new _(this.app,this,this.settings,this.enabledFeatures)),this.enabledFeatures.forEach(async e=>{await e.onload(this,this.settings)})}onunload(){this.enabledFeatures.forEach(async e=>{e.onunload()})}async loadSettings(){let e={confirmPassword:!0,rememberPassword:!0,rememberPasswordTimeout:30,rememberPasswordLevel:f.LevelFilename,featureWholeNoteEncrypt:{defaultView:"Source".toString()},featureInplaceEncrypt:{expandToWholeLines:!1,showMarkerWhenReadingDefault:!0}};this.settings=Object.assign(e,await this.loadData()),f.setActive(this.settings.rememberPassword),f.setAutoExpire(this.settings.rememberPasswordTimeout==0?null:this.settings.rememberPasswordTimeout),f.setLevel(this.settings.rememberPasswordLevel)}async saveSettings(){await this.saveData(this.settings)}};