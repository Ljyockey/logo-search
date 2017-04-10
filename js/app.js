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
	$('form').submit(function(e) {
		e.preventDefault();
		var searchProgram = $('select[name=program').val();
		var searchEducation = $('select[name=education').val();
		getElementsToColorize(searchProgram, searchEducation);
	})
}

function getElementsToColorize(p, e) {
	var colorize = [];
	$('img').each(function() {
		if ($(this).data('program') === p || $(this).data('education') === e) {
			colorize.push($(this));
		}
	})
	displayColor(colorize);
}

function displayColor(elements) {
	console.log(elements);
}

$(function() {
	displayImages();
	getSearchItems();
})