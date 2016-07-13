var yo = require ('yo-yo');

module.exports = function (pic){
var el;
function render (picture){
   return yo` <div class="card ${picture.liked ? 'liked' : ''}">
        <div class="card-image">
          <img class="activator" src="${picture.url}">
        </div>
        <div class="card-content">
          <a href="/user/${picture.user.username}" class="card-title">
        <div class="chip">
          <img src="${picture.user.avatar}" alt="Contact Person">
          ${picture.user.username}
        </div>
          </a>
          <small class="right time">Hace 1 dia</small>
          <p>
        <a class="right" href="#" onclick=${like.bind(null, true)}>
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </a>
        <a class="right" href="#" onclick=${like.bind(null, false)}>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </a>
          </p>
        <span class="right liketitle">${picture.likes} me gusta</span>

        </div>
      </div>`;
    }

  function like (liked){

    pic.liked = liked;
    pic.likes += liked ? 1 : -1;
    var newEl = render(pic);
    yo.update(el, newEl);
    return false;
  }

el = render(pic);
return el;
} 

