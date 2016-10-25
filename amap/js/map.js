 var map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 15,
        center: [120.270221, 31.480529]
    });
    function refresh() {
        var boxes = document.getElementsByTagName('input');
        var features = [];
        for (var i = 0; i < boxes.length; i += 1) {
            if (boxes[i].checked === true) {
                features.push(boxes[i].name);
            }
        }
        map.setFeatures(features);
    }
    