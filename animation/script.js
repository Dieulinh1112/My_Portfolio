 (  function createCloud() {
      var cloud = document.createElement('div');
      cloud.className = 'cloud';
      cloud.style.fontSize = Math.floor(Math.random() * 12) + 4 + 'px';

      var scale = (1.0 - Math.random() / 2);
      cloud.style.transform = 'scale(' + scale + ')';

      var container = document.createElement('div');
      container.className = 'holder';
      container.appendChild(cloud);
      container.style.top = (Math.random() * 100) + '%';
      container.style.zIndex = Math.floor(scale * 1000);
      return container;
    }

    function animateCloud(cloud) {
      var scale = 1.0 + Math.random() / 5;
      var player = cloud.animate([
        {transform: 'translate(-20vw) scale(1)'},
        {transform: 'translate(50vw) scale(' + scale + ')'},
        {transform: 'translate(120vw) scale(1)'},
      ], {
        duration: (Math.random() * 5000) + 40000,
        easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
        iterations: Infinity,
        delay: (Math.random() * 50000) - 50000,
      });
      return player;
    }

    var cloudCount = 100;
    var players = [];
    for (var i = 0; i < cloudCount; ++i) {
      var cloud = createCloud();
      clouds.appendChild(cloud);
      var player = animateCloud(cloud);
      players.push(player);
    }

    var playbackRate = undefined;
    var maxPlaybackRate = 10;

    function setRate(rate) {
      if (rate < 0) {
        rate = 0;
      } else if (rate > +maxPlaybackRate) {
        rate = +maxPlaybackRate;
      }
      playbackRate = rate;

      players.forEach(function(player) {
        player.playbackRate = playbackRate;
        if (playbackRate == 0) {
          player.pause();
        } else {
          player.play();
        }
      });

      var height = (playbackRate / maxPlaybackRate) * 100;
      speed.children[0].style.height = height + '%';
    }

    function handleCursor(ev) {
      var y = ev.clientY;
      if (y !== undefined) {
        var buttons = ev.buttons !== undefined ? ev.buttons : ev.which === 0 ? 0 : 1 << (ev.which - 1);
        if (!(buttons & 1)) { return; }
      } else {
        y = ev.touches[0].clientY;
      }

      var ratio = (y / document.body.scrollHeight) * 1.4 - 0.2;
      setRate(ratio * maxPlaybackRate);
    }

    ['mousedown', 'mousemove', 'touchmove'].forEach(function(event) {
      document.body.addEventListener(event, handleCursor);
    });

    document.body.addEventListener('wheel', function(ev) {
      ev.preventDefault();

      var amount = (ev.deltaY + ev.deltaX);
      var delta = amount / 1000;

      setRate(playbackRate + delta);
    });

    setRate(1);
)