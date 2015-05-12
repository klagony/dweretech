/*!CK:2634896742!*//*1383593089,173220921*/

if (self.CavalryLogger) { CavalryLogger.start_js(["wxq+C"]); }

__d("SnowliftPicCropper",["Arbiter","CSS","Dialog","DOM","Event","Form","Keys","Parent","Photocrop2","PhotosConst","ProfilePicRequestCreator","Style","URI","copyProperties","tx"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('CSS'),i=b('Dialog'),j=b('DOM'),k=b('Event'),l=b('Form'),m=b('Keys'),n=b('Parent'),o=b('Photocrop2'),p=b('PhotosConst'),q=b('ProfilePicRequestCreator'),r=b('Style'),s=b('URI'),t=b('copyProperties'),u=b('tx');function v(w){"use strict";this.root=w.getRoot();this.photoSnowlift=w;}v.prototype.init=function(){"use strict";this.croppingMode=false;this.optionMenu=j.find(this.root,'div.fbPhotoSnowliftContainer');this.overlayActions=j.find(this.root,'div.snowliftOverlayBar');this.setupHandlers();g.subscribe('PhotoTagger.REMOVED_MAKE_PROFILE_PIC_OPTION',this.disableCropping.bind(this,false));};v.prototype.setupHandlers=function(){"use strict";this.handlers=[k.listen(this.optionMenu,'click',this.clickHandler.bind(this)),k.listen(this.overlayActions,'click',this.clickHandler.bind(this)),k.listen(window,'resize',(function(event){this.resetPhoto();}).bind(this)),k.listen(document.documentElement,'keydown',function(event){if(!this.croppingMode)return;var w=k.getKeyCode(event);if(w===m.ESC){this.disableCropping(false);k.kill(event);}}.bind(this))];};v.prototype.submitCroppedPhoto=function(){"use strict";var w=this.photoSnowlift.getCurrentPhotoInfo();if(!w)return;var x=this.getProfilePicTargetId(w);h.addClass(this.root,'profilePicSavingMode');var y=this.disableCropping(true);new q(w.fbid,w.owner,x,y).setSuccessURI(new s('profile.php').setQueryData({id:x}).toString()).setErrorURI(new s('photo.php').setQueryData({pid:w.pid,id:w.owner}).toString()).setIsUnscaled(true).send();};v.prototype.clickHandler=function(event){"use strict";var w=event.getTarget();if(!this.croppingMode&&n.byClass(w,'fbPhotoActionsCrop')){var x=n.byClass(w,'fbPhotoActionsCrop');this.userId=x.getAttribute('data-userid');if(h.hasClass(x,'profileAlbum')){this.showPicInProfileAlbumDialog();}else this.enableCropping(!!n.byClass(w,'makeUserProfile'));event.prevent();}else if(this.croppingMode&&n.byClass(w,'cancelCroppingLink')){this.disableCropping(false);event.prevent();}else if(this.croppingMode&&n.byClass(w,'doneCroppingLink')){this.submitCroppedPhoto();event.prevent();}};v.prototype.resetPhoto=function(){"use strict";this.photo=j.find(this.root,'img.spotlight');if(this.photocrop){j.setAttributes(this.photocrop.highlight,{src:this.photo.src});this.photocrop.photo=this.photo;this.photocrop.adjustForResize();}else if(this.wrapper){j.remove(this.wrapper);this.wrapper=null;}};v.prototype.enableCropping=function(w){"use strict";if(this.croppingMode)return;this.croppingMode=true;this.isUserProfilePic=w;this.resetPhoto();this.wrapper=j.create('div');h.addClass(this.wrapper,'stageCropper');j.find(this.root,'.stage').appendChild(this.wrapper);r.set(this.wrapper,'width','100%');r.set(this.wrapper,'height','100%');var x={target:this.wrapper,min_width:p.PIC_NORMAL_FBX_SIZE,min_height:p.PIC_NORMAL_FBX_SIZE};this.photocrop=new o(this.photo,x,this.photoSnowlift.getCurrentImageServerSizeDimensions());h.addClass(this.root,'profilePicCroppingMode');};v.prototype.disableCropping=function(w){"use strict";if(!this.croppingMode)return;this.croppingMode=false;h.removeClass(this.root,'profilePicCroppingMode');var x=null;if(this.photocrop){x=this.photocrop.done(w);this.photocrop=null;}if(!w&&this.wrapper){j.remove(this.wrapper);this.wrapper=null;}delete this.photo;return x;};v.prototype.showPicInProfileAlbumDialog=function(){"use strict";new i().setTitle("Make Profile Picture").setBody("You've used this photo as your profile picture before. Do you want to use it again?").setButtons([i.CONFIRM,i.CANCEL]).setModal(true).setHandler((function(){h.addClass(this.root,'profilePicSavingMode');var w=this.photoSnowlift.getCurrentPhotoInfo();if(!w)return;var x=this.getProfilePicTargetId(w),y=this.isUserProfilePic?'profile':'object',z={pid:w.pid,owner:w.owner,id:x,type:y,profile_pic_id:x};l.post('/pic_upload.php',z);}).bind(this)).show();};v.prototype.getProfilePicTargetId=function(w){"use strict";if(this.isUserProfilePic)return this.userId;return w.owner;};v.getInstance=function(w){"use strict";if(!v._instance)v._instance=new v(w);return v._instance;};t(v,{_instance:null});e.exports=v;});