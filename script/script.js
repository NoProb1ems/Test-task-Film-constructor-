// localStorage.clear(); // Если повиснет =)

//Функция для создание объектов - макетов фильмов
function AddFilm 
(key, title, year, country, genre, 
	poster, bgImage, description, actors, comments, countComments){
    this.key = key;
    this.title = title;
    this.year = year;
  	this.country = country;
    this.genre = genre;
    this.poster = poster;
    this.bgImage = bgImage;
    this.description = description;
    this.actors = actors;
    this.comments = comments;
    this.countComments = countComments;
};


//Функция для добавления в ДОМ и обработчиков
function addHTML (key, title, year, country, genre, 
	poster, bgImage, description, actors, comments, countComments){

	jQuery('<div/>', {
		id: key,
		class: 'movie'
	}).appendTo('#wrap');

	jQuery('<div/>', {
		class: 'film'
	}).appendTo('#'+key);
	$('#'+key+' .film').css('background-image', 'url("'+bgImage+'")');
	jQuery('<div/>', {
		class: 'poster',
	}).appendTo('#'+key+' .film');

	jQuery('<img/>', {
		src: ''+poster,
		alt: 'Poster'
	}).appendTo('#'+key+' .film .poster');

	jQuery('<div/>', {
		class: 'info',
	}).appendTo('#'+key+' .film');

	jQuery('<ul/>', {
	}).appendTo('#'+key + ' .film .info');

	jQuery('<li/>', {
		class: 'one',
	}).appendTo('#'+key + ' .film .info ul');

	jQuery('<li/>', {
		class: 'two',
	}).appendTo('#'+key + ' .film .info ul');

	jQuery('<li/>', {
		class: 'three',
	}).appendTo('#'+key + ' .film .info ul');

	jQuery('<li/>', {
		class: 'four',
	}).appendTo('#'+key + ' .film .info ul');

	jQuery('<li/>', {
		class: 'five',
	}).appendTo('#'+key + ' .film .info ul');

	jQuery('<li/>', {
		class: 'six',
	}).appendTo('#'+key + ' .film .info ul');

	jQuery('<li/>', {
		class: 'seven',
	}).appendTo('#'+key + ' .film .info ul');

	jQuery('<h2/>', {
		text: title,
	}).appendTo('#'+key + ' .film .info ul .one');

	jQuery('<div/>', {
		class: 'description',
		text: description,
	}).appendTo('#'+key + ' .film .info ul .two');

	jQuery('<span/>', {
		class: 'tegs',
		text: 'Country',
	}).appendTo('#'+key + ' .film .info ul .three');

	jQuery('<span/>', {
		class: 'bold country',
		text: country,
	}).appendTo('#'+key + ' .film .info ul .three');

	jQuery('<span/>', {
		class: 'tegs',
		text: 'Year',
	}).appendTo('#'+key + ' .film .info ul .four');

	jQuery('<span/>', {
		class: 'bold year',
		text: year,
	}).appendTo('#'+key + ' .film .info ul .four');

	jQuery('<span/>', {
		class: 'tegs',
		text: 'Genre',
	}).appendTo('#'+key + ' .film .info ul .five');

	jQuery('<span/>', {
		class: 'bold genre',
		text: genre,
	}).appendTo('#'+key + ' .film .info ul .five');

	jQuery('<span/>', {
		class: 'tegs',
		text: 'Actors',
	}).appendTo('#'+key + ' .film .info ul .six');

	jQuery('<span/>', {
		class: 'bold actors',
		text: actors,
	}).appendTo('#'+key + ' .film .info ul .six');

	jQuery('<span/>', {
		class: 'btn delete',
	}).appendTo('#'+key + ' .film .info ul .seven');

	jQuery('<span/>', {
		class: 'textDel',
		text: 'Delete'
	}).appendTo('#'+key + ' .film .info ul .seven .delete');

	jQuery('<span/>', {
		class: 'btn edit',
	}).appendTo('#'+key + ' .film .info ul .seven');

	jQuery('<span/>', {
		class: 'textEd',
		text: 'Edit'
	}).appendTo('#'+key + ' .film .info ul .seven .edit');

	jQuery('<div/>', {
		class: 'coments'
	}).appendTo('#'+key);

	jQuery('<div/>', {
		class: 'count'
	}).appendTo('#'+key+' .coments');

	jQuery('<span/>', {
		text: 'Comments: '
	}).appendTo('#'+key+' .coments .count');

	jQuery('<span/>', {
		class: 'count_coment',
		text: ''+ countComments
	}).appendTo('#'+key+' .coments .count');

	jQuery('<img/>', {
		class: 'arrow',
		src: 'img/arrow.png',
		alt: 'arrow'
	}).appendTo('#'+key+' .coments .count');

	jQuery('<ul/>', {
	}).appendTo('#'+key+' .coments');

	jQuery('<form/>', {
		id: 'form_coment',
	}).appendTo('#'+key+' .coments');

	$('#'+key+' .coments form').html('<textarea class="'+ key +'" id="coment_text" value="" cols="30" rows="10">Add your comment</textarea>');

	jQuery('<br/>', {
	}).appendTo('#'+key+' .coments form');

	jQuery('<span/>', {
		id: 'add_coment',
	}).appendTo('#'+key+' .coments form');

	jQuery('<span/>', {
		class: 'textAdd',
		text: 'Add'
	}).appendTo('#'+key+' .coments form #add_coment');

	(function (){
	for (var ik = 0; ik < arr.length; ik++){
	if (key==arr[ik]){
	var regen = JSON.parse(localStorage.getItem(''+arr[ik]));
	 $('#'+key+' .coments ul').html(regen.comments);
	    }
    }
	})();

$('#'+key+' .coments .count').click(function(event) {
if ($('#'+key+' .coments ul').css('display') !== 'block'){
	$('#'+key+' .coments ul').fadeIn(800); 
	$('#'+key+' .coments .count .arrow').css('transform', 'rotate(0deg)');
}
else {
	$('#'+key+' .coments ul').fadeOut(500);
	$('#'+key+' .coments .count .arrow').css('transform', 'rotate(180deg)');
}
});
$('.'+key).focus(function(event) {
     $('.'+key).val('');
});
$('#'+key+' .coments #form_coment #add_coment').click(function(event) {
		var coment_text = $('.' + key).val();	
		var a = $('#'+key+' .coments ul').children('li').length;
		$('#'+key+' .coments .count_coment').text(1*a+1);
		jQuery('<li/>', {
			text: coment_text,
		}).appendTo('#'+key+' .coments ul');
		$('.'+key).val('Add your comment');
		for (var ik = 0; ik < arr.length; ik++){
			if (key==arr[ik]){
    		var regen = JSON.parse(localStorage.getItem(''+arr[ik]));
    		regen.comments = $('#'+key+' .coments ul').html();
    		regen.countComments = 1*regen.countComments+1;
    		var serComments = JSON.stringify(regen);
	    	// localStorage.setItem(''+key, serComments);
	    	try {
				localStorage.setItem(''+key, serComments);
			} catch (e) {
				if (e == QUOTA_EXCEEDED_ERR) {
					alert('Превышен лимит');
				}
			}
	    	var serCommentsCount = JSON.stringify(regen);
	    	// localStorage.setItem(''+key, serCommetnsCount);
	    	try {
				localStorage.setItem(''+key, serCommetnsCount);
			} catch (e) {
				if (e == QUOTA_EXCEEDED_ERR) {
					alert('Превышен лимит');
				}
			}
	    }
    }
});
	$('#'+key + ' .info ul .seven .delete').click(function(event) {
		$('#'+key).remove();
		for (var k = 0; k < arr.length; k++){
			if(key==arr[k]){
				arr.splice(k,1);
			}
		}
    var serArr = JSON.stringify(arr);
    //localStorage.setItem('arr', serArr);
    try {
		localStorage.setItem('arr', serArr);
	} catch (e) {
		if (e == QUOTA_EXCEEDED_ERR) {
			alert('Превышен лимит');
		}
	}
    localStorage.removeItem(''+key);
	});
		$('#'+key + ' .film .info ul .seven .edit').click(function (event) {
		test = key;
		var  _title =	$('#'+ key + ' .film .info ul .one h2').text();
		var  _description =	$('#'+ key + ' .film .info ul .two .description').text();
		var  _country =	$('#'+ key + ' .film .info ul .three .country').text();
		var  _year =	$('#'+ key + ' .film .info ul .four .year').text();
		var  _genre =	$('#'+ key + ' .film .info ul .five .genre').text();
		var  _actors =	$('#'+ key + ' .film .info ul .six .actors').text();
		var _poster = $('#'+key+' .film .poster img').attr('src');
		var _bgImage = 'default value of the poster path';
		$('#edit_title').val(_title);
		$('#edit_year').val(_year);
		$('#edit_country').val(_country);
		$('#edit_genre').val(_genre);
		$('#edit_poster').val(_poster);
		$('#edit_description').val(_description);
		$('#edit_actors').val(_actors);
		$('#edit_bgim').val(_bgImage);
		event.preventDefault();
        $('.modalwindow2').fadeIn(500); 
        $('#overlay').fadeIn(500);
		$('#form_edit #edit').click(function(event) {
		if (test == key){
		var edit_title = $('#edit_title').val();
		var edit_year = $('#edit_year').val();
		var edit_country = $('#edit_country').val();
		var edit_genre = $('#edit_genre').val();
		var edit_poster = $('#edit_poster').val();
		var edit_bgImage = $('#edit_bgim').val();
		var edit_description = $('#edit_description').val();
		var edit_actors = $('#edit_actors').val();
		$('#'+ key + ' .film .info ul .one h2').text(edit_title);
		$('#'+ key + ' .film .info ul .two .description').text(edit_description);
		$('#'+ key + ' .film .info ul .three .country').text(edit_country);
		$('#'+ key + ' .film .info ul .four .year').text(edit_year);
		$('#'+ key + ' .film .info ul .five .genre').text(edit_genre);
		$('#'+ key + ' .film .info ul .six .actors').text(edit_actors);
		$('#'+key+' .film img').remove();
		jQuery('<img/>', {
			src: ''+edit_poster,
			alt: 'Poster'
		}).appendTo('#'+key+' .film .poster');
		$('#'+key+' .film').css('background-image', 'url("'+edit_bgImage+'")');
	    var regen = JSON.parse(localStorage.getItem(''+key));
		regen.bgImage = edit_bgImage;
		var serComments = JSON.stringify(regen);
    	//localStorage.setItem(''+key, serComments);
	    try {
			localStorage.setItem(''+key, serComments);
	} catch (e) {
			if (e == QUOTA_EXCEEDED_ERR) {
				alert('Превышен лимит');
			}
	}

for (var ik = 0; ik < arr.length; ik++){
	if (key==arr[ik]){
        var regen = JSON.parse(localStorage.getItem(''+arr[ik]));
		regen.title = edit_title;
		regen.year = edit_year;
		regen.country = edit_country;
		regen.genre = edit_genre;
		regen.poster = edit_poster;
		regen.description = edit_description;
		regen.actors = edit_actors;
		var serObject = JSON.stringify(regen);
	   // localStorage.setItem(''+key, serObject);
	    try {
   				localStorage.setItem(''+key, serObject);
			} catch (e) {
  				if (e == QUOTA_EXCEEDED_ERR) {
  					alert('Превышен лимит');
  				}
			}
		}
	}

}
		});
	});
	$("#form_add")[0].reset();

};

function addComment (coments){

};




if (JSON.parse(localStorage.getItem('ab'))==null){
	var ab = 1;
}
else {
	var ab = JSON.parse(localStorage.getItem('ab'));
}


var test = 'regenHTML()'
if (JSON.parse(localStorage.getItem('arr'))==null || JSON.parse(localStorage.getItem('arr')).length==0){
  var arr=[];  
}
else {
   var arr = JSON.parse(localStorage.getItem('arr'));
}


    if (ab == 1){
	    if (arr.length===0){
   			var key = 'martianos';
   			var count = key;
			var title = 'Matrian';
			var year = '2016'
			var country = 'USA';
			var genre = 'Fantasy';
			var poster = 'img/martian.png';
			var bgImage = 'img/bgmartian.png';
			var description = 'Mars mission Ares-2 in the process was forced to urgently leave the planet because of the impending sandstorm. Engineer and Biolog mark Watney suffered an injury suit during a sand storm. The mission,considering him dead...';
			var actors = 'Aksel Hennie, Chiwetel Ejiofor, Jeff Daniels, Jessica Chastain, Kate Mara, Kristen Wiig, Matt Damon, Michael Peña, Sean Bean, Sebastian Stan';
			var comments = "";
			var countComments = 0;
			arr.push(count);
			key = new AddFilm (key, title, year, country, genre, poster, bgImage, description, actors, comments, countComments);
		    var serKeys = JSON.stringify(key);
		    //localStorage.setItem(''+count, serKeys);
		    try {
   				localStorage.setItem(''+count, serKeys);
			} catch (e) {
  				if (e == QUOTA_EXCEEDED_ERR) {
   					alert('Превышен лимит');
  				}
			}
		    var serArr = JSON.stringify(arr);
		   // localStorage.setItem('arr', serArr);
		    try {
   				 localStorage.setItem('arr', serArr);
			} catch (e) {
  				if (e == QUOTA_EXCEEDED_ERR) {
  					 alert('Превышен лимит');
  				}
			}
		}
	}


    
    

	$('#title').focus(function(event) {
		$('#title').val('');
	});
	$('#year').focus(function(event) {
		$('#year').val('');
	});
	$('#country').focus(function(event) {
		$('#country').val('');
	});
	$('#genre').focus(function(event) {
		$('#genre').val('');
	});
	$('#poster').focus(function(event) {
		$('#poster').val('');
	});
	$('#bgim').focus(function(event) {
		$('#bgim').val('');
	});
	$('#description').focus(function(event) {
		$('#description').val('');
	});
	$('#actors').focus(function(event) {
		$('#actors').val('');
	});


	$('#title').blur(function(event) {
		if($('#title').val()==''){
			$('#title').val('title');
		}
	});
	$('#year').blur(function(event) {
		if($('#year').val()==''){
			$('#year').val('year');
		}
	});
	$('#country').blur(function(event) {
		if($('#country').val()==''){
			$('#country').val('country');
		}
	});
	$('#genre').blur(function(event) {
		if($('#genre').val()==''){
			$('#genre').val('genre');
		}
	});
	$('#poster').blur(function(event) {
		if($('#poster').val()==''){
			$('#poster').val('img/...');
		}
	});
	$('#bgim').blur(function(event) {
		if($('#bgim').val()==''){
			$('#bgim').val('default value of the poster path');
		}
	});
	$('#description').blur(function(event) {
		if($('#description').val()==''){
			$('#description').val('Short description');
		}
	});
	$('#actors').blur(function(event) {
		if($('#actors').val()==''){
			$('#actors').val('List of main actors');
		}
	});





$('#add').click(function(event) {
	var key = 'key' + ab;
    var count = 'key'+ab;
	var title = $('#title').val();
	var year = $('#year').val();
	var country = $('#country').val();
	var genre = $('#genre').val();
	var poster = $('#poster').val();
	if ($('#bgim').val()=='default value of the poster path'){
		var bgImage = poster;
		console.log('+');
	}
	if ($('#bgim').val()!='default value of the poster path'){
		var bgImage = $('#bgim').val();
		console.log('-');
	}

	//var bgImage = $('#bgim').val();
	var description = $('#description').val();
	var actors = $('#actors').val();
	var comments = "";
	var countComments = 0;
	key = new AddFilm (key, title, year, country, genre, poster, bgImage, description, actors, comments, countComments);
    ab++;
    var serKeys = JSON.stringify(key);
    //localStorage.setItem(''+count, serKeys);
    try {
   localStorage.setItem(''+count, serKeys);
	} catch (e) {
  	if (e == QUOTA_EXCEEDED_ERR) {
   alert('Превышен лимит');
  }
}
    arr.push(count);
    var serArr = JSON.stringify(arr);
   // localStorage.setItem('arr', serArr);
    try {
  localStorage.setItem('arr', serArr);
} catch (e) {
  if (e == QUOTA_EXCEEDED_ERR) {
   alert('Превышен лимит');
  }
}
    var jasonParse = JSON.parse(localStorage.getItem(''+count)); 
    addHTML(jasonParse.key, jasonParse.title, jasonParse.year, jasonParse.country, jasonParse.genre, jasonParse.poster, jasonParse.bgImage, jasonParse.description, jasonParse.actors, jasonParse.comments, jasonParse.countComments);
    var serAB = JSON.stringify(ab);
    //localStorage.setItem('ab', ab);
        try {
    localStorage.setItem('ab', ab);
	} catch (e) {
  	if (e == QUOTA_EXCEEDED_ERR) {
   alert('Превышен лимит');
  }
}
});

(function (arr) {
    for (var ik = 0; ik < arr.length; ik++){
    var regen = JSON.parse(localStorage.getItem(''+arr[ik]));
    addHTML (regen.key, regen.title, regen.year, regen.country, regen.genre, regen.poster, regen.bgImage, regen.description, regen.actors, regen.comments, regen.countComments);
    }
})(arr);

    // $('#martianos .film').css('background-image', 'url("img/bgmartian.png")');
