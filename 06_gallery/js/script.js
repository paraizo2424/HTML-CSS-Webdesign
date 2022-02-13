// new LuminousGallery(document.querySelectorAll(".grid-gallery"));

// 画像のキャプションを表示する
new LuminousGallery(document.querySelectorAll(".grid-gallery"),{},{
  caption: function(trigger){
    return trigger.querySelector('img').getAttribute('alt');
  }
});

// アニメーション用
AOS.init();
