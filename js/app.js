var images = [
	{
		alt: 'aci',
		color: 'img/aci-color.png',
		grey: 'img/aci.png',
		program: 'scholarship',
		education: 'kindergarten'
	},
	{
		alt: 'acm',
		color: 'img/acm-color.png',
		grey: 'img/acm.png',
		program: 'loan',
		education: 'high-school'
	},
	{
		alt: 'AFE',
		color: 'img/AFE-color.png',
		grey: 'img/AFE.png',
		program: 'scholarship',
		education: 'high-school'
	},
	{
		alt: 'acm-2',
		color: 'img/acm-color.png',
		grey: 'img/acm.png',
		program: 'loan',
		education: 'kindergarten'
	},
	{
		alt: 'AFE-2',
		color: 'img/AFE-color.png',
		grey: 'img/AFE.png',
		program: 'loan',
		education: 'high-school'
	},
	{
		alt: 'aci-2',
		color: 'img/aci-color.png',
		grey: 'img/aci.png',
		program: 'loan',
		education: 'kindergarten'
	},
	{	
		alt: 'AFE-3',
		color: 'img/AFE-color.png',
		grey: 'img/AFE.png',
		program: 'scholarship',
		education: 'high-school'
	},
	{
		alt: 'aci-3',
		color: 'img/aci-color.png',
		grey: 'img/aci.png',
		program: 'scholarship',
		education: 'kindergarten'
	},
	{
		alt: 'acm-3',
		color: 'img/acm-color.png',
		grey: 'img/acm.png',
		program: 'loan',
		education: 'high-school'
	}];

function displayImages() {
	var imagesHTML = '';
	images.forEach(function(item) {
		imagesHTML += '<img data-program="' + item.program + 
		'" data-education="' + item.education + '" src="' + item.grey +
		'" alt="' + item.alt + '">';
	})
	$('.logos').html(imagesHTML);
}

function getSearchItems() {
	$('form').on('submit', function(e) {
		e.preventDefault();
		displayImages();
		var searchProgram = $('select[name=program').val();
		if (searchProgram === 'program-all') {
			searchProgram = null;
		}
		var searchEducation = $('select[name=education').val();
		if (searchEducation === 'education-all') {
			searchEducation = null;
		}
		displayColor(searchProgram, searchEducation);
	})
}

function displayColor(p, e) {
	var colorize = '';
	if (p !== null && e !== null) {
		$('img').each(function() {
			if ($(this).data('program') === p && $(this).data('education') === e) {
				colorize = $(this).attr('alt');
				var c = getElementsToColorize(colorize);
				$(this).attr('src', c.color);
			}
		})
	}
	else if (p === null && e !== null) {
		$('img').each(function() {
			if ($(this).data('education') === e) {
				colorize = $(this).attr('alt');
				var c = getElementsToColorize(colorize);
				$(this).attr('src', c.color);
			}
		})
	}
	else if (p !== null && e === null) {
		$('img').each(function() {
			if ($(this).data('program') === p) {
				colorize = $(this).attr('alt');
				var c = getElementsToColorize(colorize);
				$(this).attr('src', c.color);
			}
		})
	}
	else {
		$('img').each(function() {
			colorize = $(this).attr('alt');
			var c = getElementsToColorize(colorize);
			$(this).attr('src', c.color);
		});
	}
}

function getElementsToColorize(element) {
	for (var i = 0; i < images.length; i++) {
		if (images[i].alt === element) {
			return images[i];
		}
	}
}

$(function() {
	displayImages();
	getSearchItems();
})