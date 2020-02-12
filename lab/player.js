      var currentVideo = 1;
      function seek(sec){
          if(player)
              player.seekTo(sec, true);
      }
       // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          width: '1000',
          height: '562',
          videoId: 'wEio1W4aNtY',
          playerVars: {
            'controls': 0,
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      function onPlayerStateChange(event) {
        if (event.data == 0){
         changeVideo(2);
        }
      }

      function changeVideo(vid){
        if (vid == 2){
          player.loadVideoById("xOR15gHZH1U");
          currentVideo = 2;
          $("a").removeClass("active");
          $("#parte1").removeClass("current");
          $("#parte2").addClass("current");
        }else if (vid == 1){
          player.loadVideoById("wEio1W4aNtY");
          currentVideo = 1;
          $("a").removeClass("active");
          $("#parte2").removeClass("current");
          $("#parte1").addClass("current");
        }
      }

      var listener = setInterval(function(){
        var time = player.getCurrentTime();
        if (currentVideo == 1){
          if (time < 5){
            $("a").removeClass("active");
            $("#introducao").addClass("active");
          }else if (time >= 5 && time <= 12){
            $("a").removeClass("active");
            $("#geral").addClass("active");
          }else if (time > 12 && time < 29){
            $("a").removeClass("active");
            $("#nota").addClass("active");
          }else if (time >= 29 && time <= 64){
            $("a").removeClass("active");
            $("#envio").addClass("active");
          }else if (time > 64 && time <= 88){
            $("a").removeClass("active");
            $("#avaliacao").addClass("active");
          }else if (time > 88 && time <= 109){
            $("a").removeClass("active");
            $("#disponibilidade").addClass("active");
          }else{
            $("a").removeClass("active");
            $("#final").addClass("active");
          }
        }else if(currentVideo == 2){
          if (time <= 7){
            $("a").removeClass("active");
            $("#introducaop2").addClass("active");
          }else if (time > 7 && time <= 33){
            $("a").removeClass("active");
            $("#fase1").addClass("active");
          }else if (time > 33 && time <= 74){
            $("a").removeClass("active");
            $("#fase2").addClass("active");
          }else if (time > 74 && time <= 96){
            $("a").removeClass("active");
            $("#fase3").addClass("active");
          }else if (time > 96 && time <= 130){
            $("a").removeClass("active");
            $("#fase4").addClass("active");
          }else{
            $("a").removeClass("active");
            $("#finalp2").addClass("active");
          }
        }
      }, 1000);

      function pulaVideo(sec, vid){
        if (vid != currentVideo)
          changeVideo(vid);

        seek(sec);
      }


      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;

      function stopVideo() {
        player.stopVideo();
      }