var srcURL = window.location.href;
var url = new URL(srcURL);
if(url.searchParams.get("dept")){
  DEPT = url.searchParams.get("dept").split('#')[0];
  document.getElementsByClassName("select2-selection__rendered")[0].setAttribute("title", DEPT);
  document.getElementsByClassName("select2-selection__rendered")[0].innerHTML = DEPT;
  console.log(DEPT);
}
function showBook(d) {
  dept = d.value;  
  console.log(dept);
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         var myNode = document.getElementsByClassName('book_container')[0];
    //         if(this.responseText === ""){
    //             myNode.innerHTML = "<h1>尚無書籍</h1>";
    //         } else {
    //             while (myNode.firstChild) {
    //                 myNode.removeChild(myNode.firstChild);
    //             }
    //             myNode.innerHTML = this.responseText;
    //         }
    //
    //     }
    // };
    // xmlhttp.open("GET", "../api/queryBookData0.php?dept=" + dept, true);
    // xmlhttp.send();
    var id = url.searchParams.get("id").split('#')[0];
    if (dept.split(' - ')[0] == "ALL" ) {
      targetURL = srcURL.split('id=')[0] + 'id=' + id + '&curPage=1';
    } else {
      targetURL = srcURL.split('id=')[0] + 'id=' + id + '&curPage=1&dept=' + dept;
    }
    console.log(targetURL);
    window.location.assign(targetURL);
}

// $('input[name=search]').change(function() {
//     var myNode = document.getElementsByClassName('book_container')[0];
//     while (myNode.firstChild) {
//         myNode.removeChild(myNode.firstChild);
//     }
//     //myNode.innerHTML = this.responseText;
//     var searchParams = document.getElementById('searchInput').value;
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             var myNode = document.getElementsByClassName('book_container')[0];
//             if(this.responseText === ""){
//                 myNode.innerHTML = "<h1>尚無書籍</h1>";
//             } else {
//                 myNode.innerHTML = this.responseText;
//             }
//
//         }
//     };
//     xmlhttp.open("GET", "/FinalProject/api/searchBook.php?search=%" + searchParams + "%", true);
//     xmlhttp.send();
//
//  });

document.getElementById("searchInput").addEventListener('keypress', function(e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    // var myNode = document.getElementsByClassName('book_container')[0];
    // while (myNode.firstChild) {
    //   myNode.removeChild(myNode.firstChild);
    // }
    // //myNode.innerHTML = this.responseText;
    var searchParams = document.getElementById('searchInput').value;
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //     var myNode = document.getElementsByClassName('book_container')[0];
    //     if(this.responseText === ""){
    //        myNode.innerHTML = "<h1>尚無書籍</h1>";
    //      } else {
    //        myNode.innerHTML = this.responseText;
    //      }
    //    }
    // };
    // xmlhttp.open("GET", "/FinalProject/api/searchBook.php?search=%" + searchParams + "%", true);
    // xmlhttp.send();
    var srcURL = window.location.href;
    var url = new URL(srcURL);
    var id = url.searchParams.get("id").split('#')[0];
    var dept = url.searchParams.get("dept").split('#')[0];
    if (searchParams != '') {
      searchParams = '%' + searchParams + '%';
      targetURL = srcURL.split('id=')[0] + 'id=' + id + '&curPage=1&dept=' + dept + '&search=' + searchParams;
    } else {
      targetURL = srcURL.split('id=')[0] + 'id=' + id + '&curPage=1';
    }
    targetURL = srcURL.split('id=')[0] + 'id=' + id + '&curPage=1&dept=' + dept + '&search=' + searchParams;
    console.log(targetURL);
    window.location.assign(targetURL);
  }
 });

document.getElementById("searchBtn").addEventListener('click', function() {
  // var myNode = document.getElementsByClassName('book_container')[0];
  // while (myNode.firstChild) {
  //   myNode.removeChild(myNode.firstChild);
  // }
  // //myNode.innerHTML = this.responseText;
  var searchParams = document.getElementById('searchInput').value;
  // var xmlhttp = new XMLHttpRequest();
  // xmlhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     var myNode = document.getElementsByClassName('book_container')[0];
  //     if(this.responseText === ""){
  //        myNode.innerHTML = "<h1>尚無書籍</h1>";
  //      } else {
  //        myNode.innerHTML = this.responseText;
  //      }
  //    }
  // };
  // xmlhttp.open("GET", "/FinalProject/api/searchBook.php?search=%" + searchParams + "%", true);
  // xmlhttp.send();
  var srcURL = window.location.href;
  var url = new URL(srcURL);
  var id = url.searchParams.get("id").split('#')[0];
  var dept = url.searchParams.get("dept").split('#')[0];
  if (searchParams != '') {
    searchParams = '%' + searchParams + '%';
    targetURL = srcURL.split('id=')[0] + 'id=' + id + '&curPage=1&dept=' + dept + '&search=' + searchParams;
  } else {
    targetURL = srcURL.split('id=')[0] + 'id=' + id + '&curPage=1';
  }

  console.log(targetURL);
  window.location.assign(targetURL);
});

var droppanel = document.getElementsByClassName('dropdown-menu')[0];



//  $.ajax({
//      url: "/FinalProject/api/queryDeptData.php",
//      dataType: "json",
//      async: false,
//      success: function (data) {
//          var len =  Object.keys(data).length;
//          for (var i = 104; i < len; i++) {
//              var li = document.createElement("li");
//              var button = document.createElement("button");
//              droppanel.appendChild(li);
//              li.appendChild(button);
//              li.className = "col-sm-12 col-md-4";
//              button.className = "btn btn-default dept";
//              button.innerHTML = data[i]['dept'];
//              button.setAttribute("name", data[i]['abbv']+" - "+data[i]['dept']);
//              button.setAttribute("onclick", "showBook(this.name)");
//         }
//      },
//      error: function (jqXHR, textStatus, errorThrown) {
//          alert(textStatus, +' | ' + errorThrown);
//      }
//  })

 $.ajax({
    url: "/FinalProject/api/queryDeptData.php",
    dataType: "json",
    async: false,
    success: function (data) {
        var len =  Object.keys(data).length;
        op = document.createElement("option");
        op.setAttribute("value", "ALL - 所有系所");
        op.innerHTML = "ALL - 所有系所";
        //console.log("ALL - 所有系所");
        document.getElementsByClassName("selection-2")[0].appendChild(op);
        for (var i = 104; i < len; i++) {
          op = document.createElement("option");
          op.setAttribute("value", data[i].abbv + " - " + data[i].dept);
          op.innerHTML = data[i].abbv + " - " + data[i].dept;
          //console.log(data[i].abbv + " - " + data[i].dept);
          document.getElementsByClassName("selection-2")[0].appendChild(op);
       }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        alert(textStatus, +' | ' + errorThrown);
    }
})
