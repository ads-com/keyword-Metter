CKEDITOR.replace( 'text-area' );
	new Clipboard('.btn-clipboard');


function countOcurrences(str, value) {
  var regExp = new RegExp(value, "gi");
  return (str.match(regExp) || []).length;
}
modeAvanced = false;

// Fonction pour afficher le détail par balise par défaut
function setMode(){
											
	// Mode normal
	if(!modeAvanced){
		$(".btn-advanced .glyphicon").addClass('glyphicon-plus');
		$(".btn-advanced .glyphicon").removeClass('glyphicon-minus');
		$('.advanced').addClass('hidden');
		$( ".col-left" ).removeClass("col-advanced");
		$( ".col-right" ).removeClass("col-advanced");
		modeAdvancedClass = "advanced hidden";
		modeAvanced = true;
	//mode avancé
	}else{
		$(".btn-advanced .glyphicon").removeClass('glyphicon-plus');
		$(".btn-advanced .glyphicon").addClass('glyphicon-minus');
		$('.advanced').removeClass('hidden');
		$( ".col-left" ).addClass("col-advanced");
		$( ".col-right" ).addClass("col-advanced");
		modeAdvancedClass = "advanced";
		modeAvanced = false;
	
		}
}
setMode();

function cleanString(myString){
		myString = myString.toLowerCase();
		myString = myString.replace(/\u2019/g, " ");
		myString = myString.replace(/,/g, " ");
		myString = myString.replace(/\./g, " ");
		myString = myString.replace(/[èéêë]/g,"e");
		myString = myString.replace(/[àâ]/g,"a");		
		myString = myString.replace(/(?:\r\n|\r|\n)/g, ' ');
		myString = myString.replace('&eacute;', 'e');
		myString = myString.replace('&agrave;', 'a'); 
		return myString;
		alert(myString);
}
function setAnalysis(){
	// récupération du texte dans le ck editor puis traitement de la chauine de caractere
		
		textAreaHtml = $(".cke_wysiwyg_frame").contents().find(".cke_editable").html();
		$(".cke_wysiwyg_frame").contents().find(".cke_editable").html(textAreaHtml.replace(/</g," <"))
		textAreaString = $(".cke_wysiwyg_frame").contents().find(".cke_editable").text();
		//textAreaString = textAreaHtml.replace(/</g," <");
		//textAreaString = textAreaString.text();
		
		//		
		
		totalWords = textAreaString.match(/\S+/g).length;
		textAreaString = cleanString(textAreaString);
		
		// Génaration du tableau de mots clés
		keywordString = $( "#keywords-area" ).val().toLowerCase();
		keywordString = keywordString.replace(/[èéêë]/g,"e");
		keywordString = keywordString.replace(/[àâ]/g,"a");
		keywordString = keywordString.replace(/\u2019/g, " ");
		KeywordArray = keywordString.split(/\r?\n/); 
		var i = 0;
		var totalcount = 0;
		tableString = '';	
		
		// Poids par balise sur 10 //
		
		h1Weight = 7;
		h2Weight = 4;
		h3Weight = 3;
		aHrefWeight = 10;
		strongWeight = 2;
		bWeight = 2;
		
		
		//Gestion des balises sera à optimiser, un jour //
		var h1String = "";
		var h2String = "" ;
		var h3String = "" ;
		var aHrefString = "" ;
		var strongString = "" ;
		var bString = "" ;
		
		
		// On crée une string par balise html, l'occurrence des mots clés dans cette cette string sera ensuite calculée
		$(".cke_wysiwyg_frame").contents().find(".cke_editable").find('h1').each(function( index ) {
  			h1String += cleanString($( this ).text() + " - ");
		});
		$(".cke_wysiwyg_frame").contents().find(".cke_editable").find('h2').each(function( index ) {
  			h2String += cleanString(  $( this ).text() + " - ");
		});
		$(".cke_wysiwyg_frame").contents().find(".cke_editable").find('h3').each(function( index ) {
  			h3String += cleanString( $( this ).text() + " - ");
		});
		$(".cke_wysiwyg_frame").contents().find(".cke_editable").find('a').each(function( index ) {
  			aHrefString += cleanString(  $( this ).text() + " - ");
		});
		$(".cke_wysiwyg_frame").contents().find(".cke_editable").find('strong').each(function( index ) {
  			strongString += cleanString(  $( this ).text() + " - ");
		});
		$(".cke_wysiwyg_frame").contents().find(".cke_editable").find('b').each(function( index ) {
  			bString += cleanString(  $( this ).text() + " - ");
		});
		
		// on gère l'affichage des TH		
		tableStringHeader = '<tr>';
		tableStringHeader += ' <th scope="col">Mots cl&eacute;s</th>';
		tableStringHeader += ' <th scope="col">Occurrences</th>';
		tableStringHeader += '<th scope="col">Densité</th>';
		tableStringHeader += '<th scope="col" class="' + modeAdvancedClass + '">h1</th>';
		tableStringHeader += '<th scope="col" class="' + modeAdvancedClass + '">h2</th>';
		tableStringHeader += '<th scope="col" class="' + modeAdvancedClass + '">h3</th>';
		tableStringHeader += '<th scope="col" class="' + modeAdvancedClass + '">a href</th>';
		tableStringHeader += '<th scope="col" class="' + modeAdvancedClass + '">strong</th>';
		tableStringHeader += '<th scope="col" class="' + modeAdvancedClass + '">b</th>';
		tableStringHeader += '<th scope="col">Poids</th>';
		tableStringHeader += ' </tr>';
		$("#keywords-table thead").html(tableStringHeader);	
		
		// Après on gère l'affichage de tout le bordel 
		while (KeywordArray[i]) {	
			//count = occurrences(textAreaString, KeywordArray[i], true);
			count = countOcurrences(textAreaString, KeywordArray[i].trim());
			totalcount+= countOcurrences(textAreaString, KeywordArray[i].trim());
			
			// comptage des mots clés par balise / 
			var strongCount = 0;
			var h1Count = 0;
			var h2Count = 0;
			var h3Count = 0;
			var aHrefCount = 0;
			var strongCount = 0;
			var bCount = 0;
			console.log("h1String = " + h1String);
			
			h1Count+= countOcurrences(h1String, KeywordArray[i].trim());			
			h2Count+= countOcurrences(h2String, KeywordArray[i].trim());			
			h3Count+= countOcurrences(h3String, KeywordArray[i].trim());			
			aHrefCount+= countOcurrences(aHrefString, KeywordArray[i].trim());	
			strongCount+= countOcurrences(strongString, KeywordArray[i].trim());	
			bCount+= countOcurrences(bString, KeywordArray[i].trim());
			
			
			var keywordWeight = (h1Weight * h1Count) + (h2Weight * h2Count) + (h3Weight * h3Count) + (aHrefWeight * aHrefCount) + (strongWeight * strongCount) + (bWeight * bCount) + count;
			
			
			// affichage //
			if(count==0){
				cssClass='class="danger"';
			}else{				
				cssClass='';
			}
			occurencesPrecent = count / totalWords;
			occurencesPrecent = Math.round(occurencesPrecent*1000)/100 + '%';
			tableString += '<tr ' + cssClass +'>';
            tableString += '<td>' + KeywordArray[i] + '</td>';
            tableString += '<td>' + count + '</td>';
            tableString += '<td>' + occurencesPrecent + '</td>';
            tableString += '<td class="' + modeAdvancedClass + '">' + h1Count + '</td>';
            tableString += '<td class="' + modeAdvancedClass + '">' + h2Count + '</td>';
            tableString += '<td class="' + modeAdvancedClass + '">' + h3Count + '</td>';
            tableString += '<td class="' + modeAdvancedClass + '">' + aHrefCount + '</td>';
            tableString += '<td class="' + modeAdvancedClass + '">' + strongCount + '</td>';
            tableString += '<td class="' + modeAdvancedClass + '">' + bCount + '</td>';
            tableString += '<td class="warning">' + keywordWeight + '</td>';
        	tableString += '</tr>';

			i++;
		}
		while (KeywordArray[i]) {
			
		}
		

			
		 
		 
			$("#keywords-table tbody").html(tableString);
			
			totalcountPercent = totalcount / totalWords;
			totalcountPercent = Math.round(totalcountPercent*1000)/100 + '%';
			tableStringFooter = '<tr>';
            tableStringFooter += '<td>Total</td>';
            tableStringFooter += '<td>' + totalcount +' / '+ totalWords + '</td>';
            tableStringFooter += '<td>' + totalcountPercent + '</td>';
            tableStringFooter += '<td class="' + modeAdvancedClass + '"></td>';
            tableStringFooter += '<td class="' + modeAdvancedClass + '"></td>';
            tableStringFooter += '<td class="' + modeAdvancedClass + '"></td>';
            tableStringFooter += '<td class="' + modeAdvancedClass + '"></td>';
            tableStringFooter += '<td class="' + modeAdvancedClass + '"></td>';
            tableStringFooter += '<td class="' + modeAdvancedClass + '"></td>';
            tableStringFooter += '<td></td>';
        	tableStringFooter += '</tr>';
			$("#keywords-table tfoot").html(tableStringFooter);
			$('body').addClass('in');		
			
			
			// Initialisation du Table Sorter			
			
			$(function(){			
				// Viadage du tableau
				$("#keywords-table").trigger("updateAll");
 
				$('#keywords-table').tablesorter({
					sortList: [[9,1]],
					theme : "bootstrap",
					usNumberFormat : false,
					sortReset      : true,
					sortRestart    : true
				});
			});
}

$( document ).ready(function() {
    $( "#form-submit" ).click(function() {
		setAnalysis();
		$( ".col-left" ).addClass("in");
		$( ".col-right" ).addClass("in");
		
	});
    $( ".btn-advanced" ).click(function() {
										
		setMode();
		
	});
});