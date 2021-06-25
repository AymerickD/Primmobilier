/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

require ('bootstrap')

// start the Stimulus application
import './bootstrap';

import Places from 'places.js'
import Map from './modules/map.js'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import $ from 'jquery'

Map.init()

// Map dans le show d'un article
let inputAddress = document.querySelector('#property_address')
if (inputAddress !== null) {
    let place = Places({
        container: inputAddress
    })
    place.on('change', e => {
        document.querySelector('#property_city').value = e.suggestion.city
        document.querySelector('#property_postal_code').value = e.suggestion.postcode
        document.querySelector('#property_lat').value = e.suggestion.latlng.lat
        document.querySelector('#property_lng').value = e.suggestion.latlng.lng
    })
}

// Distance de recherche sur la liste des biens
let searchAddress = document.querySelector('#search_address')
if (searchAddress !== null) {
    let place = Places({
        container: searchAddress
    })
    place.on('change', e => {
        document.querySelector('#lat').value = e.suggestion.latlng.lat
        document.querySelector('#lng').value = e.suggestion.latlng.lng
    })
}

var $jq = jQuery.noConflict();


$('[data-slider]').slick()
var captcha_button = document.getElementById('contact_captcha')

if (captcha_button !== null) {
    captcha_button.style.display = null;
    captcha_button.onclick = function () {
        grecaptcha.execute()
    }
    
}



let $conctactButton = $('#contactButton');
$conctactButton.click(e => {
    e.preventDefault();
    $('#contactForm').slideDown();
    $conctactButton.slideUp();
});

// Suppression des éléments
document.querySelectorAll('[data-delete]').forEach( a => {
    a.addEventListener('click', e => {
        e.preventDefault()
        fetch(a.getAttribute('href'), {
            method: 'DELETE',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'_token': a.dataset.token})
        }).then(response => response.json())
            .then(data => {
                if (data.success) {
                    a.parentNode.parentNode.removeChild(a.parentNode)
                } else {
                    alert(data.error)
                }
            })
            .catch(e => alert(e))
    })
})

var recaptchaCallback = function(token) {
    var elem = document.getElementById('contact_captcha');
    while (elem.parentElement !== null) {
        if (elem.tagName === 'FORM') {
            elem.submit();
            break;
        }
        elem = elem.parentElement;
    }
    document.getElementById("demo-form").submit();
}

window.recaptchaCallback = recaptchaCallback


console.log('WebpackEncore ok !')


