<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Keyword metter</title>
<!-- Bootstrap -->
<link href="node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
<link href="node_modules/bootstrap/dist/css/bootstrap-theme.css" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="description" content="Découvrez notre outil d'analyse de densité de mots clés en vue du référencement Google.">
</head>
<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
      <h2 class="h3 navbar-brand"><a href="#">ads-COM : <strong>Keyword Metters</strong></a></h2>
    </div>
  </div>
  <!-- /.container-fluid -->
</nav>
<div class="container-fluid">
  <div class="row">
    <div class="col-left">
      <form class="form-vertical">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label hidden">Mots cl&eacute;s</label>
          <textarea class="form-control" id="keywords-area" placeholder="Mots cl&eacute;s (un par ligne)" rows="5"></textarea>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="control-label">Le texte à analyser</label>
          <textarea type="password" class="form-control" id="text-area" placeholder="Texte à v&amp;rifier" rows="5"></textarea>
        </div>
        <div class="form-group text-center"> <a class="btn btn-warning btn-lg" id="form-submit">Vérifier mon contenu !</a> </div>
      </form>
    </div>
    <div class="col-right">
      <div class="well well-table">
        <p class="pull-left"><a class="btn btn-primary btn-clipboard" data-clipboard-target="#keywords-table">Copier le tableau</a></p>
        <p class="pull-right"><a class="btn btn-default btn-advanced" ><span class="glyphicon glyphicon-minus"></span> Mode avancé</a></p>
        <div class="clearfix"></div>
      <div class="table-responsive">
        <table class="table table-striped table-sorter-ads-com" id="keywords-table">
          <thead>
          </thead>
          <tbody>
          </tbody>
          <tfoot>
          </tfoot>
        </table>
        </div>
      </div>
    </div>
  </div>
</div>
<hr>
<footer>
<p class="text-center"><a href="https://www.ads-com.fr">Une création ads-COM (agence Web Orléans)</a></p>
</footer>
<style type="text/css">

</style>
<!-- scripts -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script type="text/javascript" src="node_modules/ckeditor/ckeditor.js"></script>
<script src="node_modules/clipboard/dist/clipboard.min.js"></script>
<script src="node_modules/tablesorter/dist/js/jquery.tablesorter.min.js"></script>
<script src="node_modules/tablesorter/dist/js/jquery.tablesorter.widgets.min.js"></script>
<script src="scripts/ihm.js">
	

</script>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>
