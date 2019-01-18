<?php
function SetSelect($id,$type,$defaultName = null)
        {
            $lFilePath = "./images/organe/".$type;
            if (file_exists ($lFilePath)) {
                echo '<select id="drop'.$id.'" class="mselect">';
                echo "\n";
                if ($defaultName) {
                    echo '<option value="none" disabled selected><p>'.$defaultName.'</p></option>';
                    echo "\n";
                }
                echo '<option value="none"><p>Vide</p></option>';
                echo "\n";
                $lArray = array_diff(scandir($lFilePath), array('..', '.'));
                $count = 0;
                foreach ($lArray as $value) {
                    $count++;
                    echo '<option value="'.$type.'/'.$value.'"><p>'.$value.'</p></option>';
                    echo "\n";
                }
                echo '</select>';
            }
        }
 ?>

<html>
<head>
  <link rel="stylesheet" href="style/main.css">
  <link rel="stylesheet" href="style/chimere.css">
  <meta charset="utf-8"/>
</head>

<body>
<div class="tableau transf">

  <div class="content fixed">

    <h2 class="titre1">LA CHIMERE</h2>
    <h2 class="titre2">LA CHIMERE</h2>

    <div class="parametrage">
      <button class="parametres"><!-- INFO en popup -->
      <img src="images/pictos/chimere_picto_info.svg" class="change">
      </button>
      <button class="parametres"><!-- CHARGER de nouveau GIFS -->
        <img src="images/pictos/chimere_picto_shuffle.svg" class="change">
      </button>

      <button class="parametres"><!-- CHANGER la texture de fond -->
        <img src="images/pictos/chimere_picto_texture.svg" class="change">
      </button>
      <button class="parametres"><!-- AFFICHER à nouveau un GIF desactivé -->
        <img src="images/pictos/chimere_picto_bouche.svg" class="change">
      </button>
      <button class="parametres"><!-- AFFICHER à nouveau un GIF desactivé -->
        <img src="images/pictos/chimere_picto_oeuil.svg" class="change">
      </button>
      <button class="parametres"><!-- AFFICHER à nouveau un GIF desactivé -->
        <img src="images/pictos/chimere_picto_tenta.svg" class="change">
      </button>
      <button class="parametres"><!-- AFFICHER à nouveau un GIF desactivé -->
        <img src="images/pictos/chimere_picto_nez.svg" class="change">
      </button>
    </div>

    <div class="canvas" id="texture" style="width:100%; height:100%; overflow:hidden;">
      <img id="tex" src="images/organe/tex/chats.gif"><!--/organe/tex/bacteries.gif-->
    </div>

    <div class="canvas draggable" style="height:20vh; left:59vw; top:4vh" id="dragOeuil">
      <div class="control" style="position:relative;">
        <button class="change"><!-- AFFICHER la mosaique de selection onclick -->
          <img src="images/pictos/chimere_picto_mosaique.svg" class="change">
        </button>
        <button class="change"><!-- CACHER le gif - le bouton de ré-activation apparait à gauche de l'écran -->
          <img src="images/pictos/chimere_picto_hide.svg" class="change">
        </button>
        <div class="mosaique">
          <button class="mosa">
            <img class="mosa" src="images/zoom-01.png">
          </button>
          <button class="mosa">
            <img class="mosa" src="images/zoom-01.png">
          </button>
          <button class="mosa">
            <img class="mosa" src="images/zoom-01.png">
          </button>
          <button class="mosa">
            <img class="mosa" src="images/zoom-01.png">
          </button>
        </div>
      </div>
      <img src="images/organe/oeuil/oeil5.gif" class="chim" id="oeuil">
    </div>

    <div class="canvas draggable" style="height:20vh; left:26vw; top:10vh" id="dragOeuil2">
      <img src="images/organe/oeuil/oeil5.gif" class="chim mirror" id="oeuil2">
    </div>
		<div class="canvas draggable" style="height:20vh; left:62vw; top:10vh" id="dragOeuil3">
      <img src="images/organe/oeuil/oeil5.gif" class="chim" id="oeuil3">
    </div>

    <div class="canvas draggable wiggle" style="height:16vh; left:39vw; top:40vh" id="dragNez">
      <img src="images/organe/nez/naseaux.gif" class="chim" id="nez">
    </div>

    <div class="canvas draggable" style="height:20vh; left:39vw; top:50vh" id="dragBou">
      <img src="images/organe/bou/bec_plat.gif" class="chim" onwheel="resize(event)" id="bou">
    </div>

    <div class="canvas draggable" style="height:30vh; left:70vw; top:60vh" id="dragProt">
      <img src="images/organe/prot/florale.gif" class="chim" id="prot">
    </div>
    <div class="canvas draggable" style="height:30vh; left:13vw; top:60vh" id="dragProt2">
      <img src="images/organe/prot/florale.gif" class="chim mirror" id="prot2">
    </div>
  </div>
</div>


<div class="footer-1 transf" style="display:none"><div class="fooChimere">
	<div class="aide">
		<h2>???</h2>
		<p class="instructions">\o/ Bienvenue sur la Chimère \o/<br>
			1 - Selectionne-les éléments que tu veux afficher depuis les dropdowns, <br>
			2 - Et déplace-les LENTEMENT sur l'écran <br>
			3 - ENJOY !!!</p>
	</div>
  <div class="footer-button">
    <a href="chimere.html"><h2>BACK</h2></a>
  </div>

  <div class="footer-div">
		<img class="picto" src="images/pictos/pictOeuil.svg">
    <?php SetSelect("Oeuil2","oeuil", "droite"); ?>
    <?php SetSelect("Oeuil","oeuil", "gauche"); ?>
		<?php SetSelect("Oeuil3","oeuil", "autre"); ?>
  </div>

  <div class="footer-div">
		<img class="picto" src="images/pictos/pictNez.svg">
    <?php SetSelect("Nez","nez"); ?>
  </div>

  <div class="footer-div">
    <img class="picto" src="images/pictos/pictBou.svg">
    <?php SetSelect("Bou","bou"); ?>
  </div>

  <div class="footer-div">
		<img class="picto" src="images/pictos/pictProt.svg">
    <?php SetSelect("Prot","prot"); ?>
    <?php SetSelect("Prot2","prot"); ?>
  </div>
	<div class="footer-div">
		<img class="picto" src="images/pictos/pictTex.svg">
    <?php SetSelect("Tex","tex"); ?>
  </div>
</div>

</div>
<script src="js/dragging.js"></script>
<script src="js/select.js"></script>
</body>
</html>
