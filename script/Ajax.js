if(location.pathname === '/data/sub_01.html'){
  (function StudyList_01(){
    fetch('../data/함수/LIST').then(function(response){
      response.text().then(function(text){
        let ArrList = text.split(',');
        let tags = '';
        for(Arr in ArrList){
          let list = ArrList[Arr].trim();
          let tag = `<a class='List' href="../data/함수/${list}.html">${list}.html</a>`;
          tags += tag;
        };
        document.getElementById('StudyList').innerHTML = tags;
      });
    });
  }());
};

if(location.pathname === '/data/sub_02.html'){
  (function StudyList_02(){
    fetch('../data/객체/LIST').then(function(response){
      response.text().then(function(text){
        let ArrList = text.split(',');
        let tags = '';
        for(Arr in ArrList){
          let list = ArrList[Arr].trim();
          let tag = `<a class='List' href="../data/함수/${list}.html">${list}.html</a>`;
          tags += tag;
        };
        document.getElementById('StudyList').innerHTML = tags;
      });
    });
  }());
};

