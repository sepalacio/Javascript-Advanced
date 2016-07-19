var yo = require ('yo-yo');
var moment = require('moment');

//if window.Intl is not defined
if (!window.Intl){
window.Intl = require('intl');
require('intl/locale-data/jsonp/en-US.js');
require('intl/locale-data/jsonp/en-US.js');
}

var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');
var rf = new IntlRelativeFormat('en-US');

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
          <small class="right time">${rf.format(picture.createdAt)}</small>
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

