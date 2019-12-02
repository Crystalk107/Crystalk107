function initPage() {
    createProjs();
    renderProjs();
}

function renderProjs() {

    var projs = getProjsToRender();
    var divs = projs.map(function (proj) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item" data-id="${proj.id}" onclick="onGenerateModal(this)">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
      </a>
      <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
        </div>
        </div>
        </div>
        </div>`
    })

    document.querySelector('.protfolio-container').innerHTML = divs.join('');
}

function renderModal(projID) {
    var proj = getProjById(projID);
    var strHTML = `
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <!-- Project Details Go Here -->
              <h2>${proj.name}</h2>
              <p class="item-intro text-muted">${proj.title}</p>
              <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}-full.jpg" alt="">
              <p>${proj.desc}</p>
              <ul class="list-inline">
                <li>Date: ${proj.publishedAt}</li>
                <li>Client: ${proj.name}</li>
                <li>Category: ${proj.title}</li>
              </ul>
              <button class="btn btn-primary" data-dismiss="modal" type="button">
              <i class="fa fa-times"></i>
                  Close Project</button>
                  <button class="btn btn-primary" onclick="onUrlClicked(this)" data-id="${proj.id}" type="button">
                  <i class="fa fa-times"></i>
                  Enter Project Website</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
    document.querySelector('.portfolio-modal').innerHTML = strHTML;
}

function onGenerateModal(el) {
    var projId = getProjId(el);
    renderModal(projId);
}

function onUrlClicked(el) {
    var projId = getProjId(el);
    var proj = getProjById(projId);
    window.open(proj.url);
}

function onSubmit(el) {
    var email = $('#email').val();
    var subject = $('#subject').val();
    var body = $('#body').val();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`);
    var email = $('#email').val('');
    var subject = $('#subject').val('');
    var body = $('#body').val('');
}