function myFunction(imgs) {
        var expandImg = document.getElementById("expandedImg");
        var imgText = document.getElementById("imgtext");
        expandImg.src = imgs.src;
        imgText.innerHTML = imgs.alt;
        expandImg.parentElement.style.display = "block";
}


        function initMap() {
                const linkorPlace = {lat: 54.53584, lng: 49.28385};
                const map = new google.maps.Map(document.getElementById("map"), {
                        zoom: 4,
                        center: linkorPlace,
                });

                const marker = new google.maps.Marker({
                        position: linkorPlace,
                        map: map,
                });
        }