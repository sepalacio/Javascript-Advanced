var yo = require ('yo-yo');

module.exports = function (pic){
	return yo` <div class="card">
    <div class="card-image">
      <img class="activator" src="${pic.url}">
    </div>
    <div class="card-content">
      <a href="/user/${pic.user.username}" class="card-title">
		<div class="chip">
	    <img src="${pic.user.avatar}" alt="Contact Person">
	    ${pic.user.username}
	  </div>
      </a>
      <small class="right time">Hace 1 dia</small>
      <p>
		<a class="right" href="#">
			<i class="fa fa-heart-o" aria-hidden="true"></i>
			<span class="right">${pic.likes} me gusta</span>
		</a>
      </p>
    </div>
  </div>`;
} 