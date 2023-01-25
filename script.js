let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let gitReposArray = [];
    gitReposArray = JSON.parse(this.responseText);
    for (let i = 0; i < gitReposArray.length; i++) {
      let newLi = document.createElement("li");
      newLi.innerHTML =
        "<a href='https://raw.githack.com/JadRusus/" +
        gitReposArray[i].name +
        "/main/index.html' target='_blank'>" +
        gitReposArray[i].name +
        "</a>";
      document.getElementById("repoName").appendChild(newLi);
    }
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/JadRusus/repos", true);
gitHubRequest.send();

$(document).ready(function () {
  $(".icons").mouseenter(function () {
    $(this).addClass("iconHover");
  });
  $(".icons").mouseleave(function () {
    $(this).removeClass("iconHover");
  });

  $("li").mouseenter(function () {
    $(this).addClass("liHover");
  });
  $("li").mouseleave(function () {
    $(this).removeClass("liHover");
  });

  $("#li1").mouseenter(function () {
    $("#p1").removeClass("hidden");
  });
  $("#li1").mouseleave(function () {
    $("#p1").addClass("hidden");
  });

  $("#li2").mouseenter(function () {
    $("#p2").removeClass("hidden");
  });
  $("#li2").mouseleave(function () {
    $("#p2").addClass("hidden");
  });

  $("#li3").mouseenter(function () {
    $("#p3").removeClass("hidden");
  });
  $("#li3").mouseleave(function () {
    $("#p3").addClass("hidden");
  });

  $("#li4").mouseenter(function () {
    $("#p4").removeClass("hidden");
  });
  $("#li4").mouseleave(function () {
    $("#p4").addClass("hidden");
  });

  $("#li5").mouseenter(function () {
    $("#p5").removeClass("hidden");
  });
  $("#li5").mouseleave(function () {
    $("#p5").addClass("hidden");
  });

  $("#li6").mouseenter(function () {
    $("#p6").removeClass("hidden");
  });
  $("#li6").mouseleave(function () {
    $("#p6").addClass("hidden");
  });

  $("#li7").mouseenter(function () {
    $("#p7").removeClass("hidden");
  });
  $("#li7").mouseleave(function () {
    $("#p7").addClass("hidden");
  });
});
