/*$(function(){
    let heidenBtn = $('.hide');
    let box = $('.box');
    let showBtn = $('.show');
    let hedine = $('.hiden');
    let boxn = $('.boxn');
    let shown = $('.shown');
    let shownBtn = $('.shownBtn');
  
    let hidettm = $('.hediet');
    let ntmebox = $('.boxnt');
    let showt = $('.showt');
    let shownBtnt = $('.shownBtnt');
  
  
    heidenBtn.click(function(){
      box.hide(500);
    });
  
    showBtn.click (function(){
      box.show(500);
    });
    hedine.click(function(){
      boxn.slideUp(500);
    });
  
    shown.click(function(){
      boxn.fadeIn(1500);
    });
    shownBtn.click(function(){
      box.slideToggle(500);
    });
  
  
   
    hidettm.click(function(){
      ntmebox.fadeToggle();
    })
    let FtoggLe = $('.TogglerBtn');
    let boxToggle = $('.boxToggle');
  
    FtoggLe.click(function(){
      boxToggle.fadeToggle(500);
    });
    
  
  
  
  });
  */
  
  $(function(){
    //let hideenBtn = $(".hide");
    //let shownBtn = $(".shownBtn");
    //let boxnBtn = $(".box");
    //let showBtnt = $(".show");
    let NaverBtn = $ ("nav .NavButton");

    let MeneuBar= $(".menuBar");

    let isActive = false;
    let HumberIcon = $(".HumberIcon");
    let HumberMenu = $(".HumberMenu");



   /* hideenBtn.click(function(){
        boxnBtn.slideUp(500);
    });
    shownBtn.click(function(){
        boxnBtn.slideDown(500);
    });
    showBtnt.click(function(){
        boxnBtn.fadeToggle(500);
    });*/

    NaverBtn.click(function(){
  
    MeneuBar.toggleClass("activeSidebar");
    isActive = !isActive;

    if(isActive==true){
     
      HumberIcon.hide();
      HumberMenu.show();

   }
   else{
      
     HumberIcon.show();
    HumberMenu.hide();
   }

    });

  });
  //---------------------------search Function--------------
  $(function(){
    let activeSerchBtn = $("nav .SerchBtn");
    let isActive = false;
    let activeserchBar = $(".serchBar");


    activeSerchBtn.click(function(){
      activeserchBar.toggleClass("SerchActive");

      isActive = !isActive;

     if(isActive==true){
     
      serchIcon.hide();
      searchBarIcon.show();

   }
   else{
      
    serchIcon.show();
    searchBarIcon.hide();
   }

    });
  });

  $(function(){
    let actibeBarSerchIcon = $(".serchIcon");
    let ActibeSerchIcon = $(".searchBarIcon");

    actibeBarSerchIcon.click(function(){
      ActibeSerchIcon.show();

    })

  })