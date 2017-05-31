

          //  Header for all pages //

document.write('\
\
  <nav class="navbar navbar-fixed-top navbar-inverse">\
  <div class="container">\
    <div class="navbar-header navbar-left">\
      <a class="navbar-brand" href="index.html">\
        <img class="logo" src="VN/Vida-Nueva-logo.png" alt="Vida Nueva Logo" /></a>\
      <button type="button" class="navbar-toggle" name="button"\
      data-toggle="collapse"\
      data-target="#menu">\
        <span class="sr-only">Toggle Navigation</span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
      </button>\
    </div>\
      <div class="navbar-header navbar-collapse collapse navHeaderCollapse" id="menu">\
        <ul class="nav navbar-nav navbar-right" id="menu">\
          <li> <a href="index.html"> Bienvenidos </a></li>\
          <li> <a href="eventos.html"> Eventos </a></li>\
          <li> <a href="ninos.html"> Niños </a></li>\
          <li> <a href="sobre_nosotros.html"> Sobre Nosotros</a></li>\
          <li> <a href="vision.html"> Vision </a></li>\
          <li class="dropdown">\
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Recursos <b class="caret"></b>\
              <ul class="dropdown-menu">\
                <li><a href="informacion.html"> Informacion </a></li>\
                <li><a href="media.html"> Media </a></li>\
              </ul>\
          </li>\
        </ul>\
      </div>\
  </div>\
</nav>\
\
');
