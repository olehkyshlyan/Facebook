// ==UserScript==
// @name         Facebook | Posts
// @namespace    https://www.facebook.com/
// @noframes
// @version      0.1
// @description  Facebook | www.facebook.com | Posts
// @author       oleh.kyshlyan
// @match        https://www.facebook.com/*/posts/*
// @grant        none
// ==/UserScript==

//alert('Facebook | Posts');

var FacebookPosts = new function(){
  this.removeLoginBanner = function(){
    var headerArea = document.getElementById('headerArea');
    if(headerArea != null){
      var hdrArFirstChild = headerArea.children[0];
      if(hdrArFirstChild != undefined){
        hdrArFirstChild.style.display = "none";
      }
    }
  }

  this.moveUp45mqClassElement = function(){
    var moveUp45mqInclosure = function(){
      var cls45mqCollection = document.getElementsByClassName('_45mq');
      if(cls45mqCollection.length > 0){
        var el45mq = cls45mqCollection[0];
        el45mq.style.marginTop = '0px';
      }

      var u0h = document.getElementById('u_0_h');
      u0h.style.cssText += '; position: static !important;';
    }
    setTimeout(moveUp45mqInclosure,2000);
  }
}

FacebookPosts.removeLoginBanner();
FacebookPosts.moveUp45mqClassElement();
