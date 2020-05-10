window.onload = () => {
  const button = document.querySelector('button[data-action="change"]');
  button.innerText = "﹖";
  navigator.geolocation.getCurrentPosition(success);
  function success(position) {
    const coordinates = document.querySelector(".coordinates");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    coordinates.textContent = `lat:${latitude}, long:${longitude}`;
    let places = staticLoadPlaces();
    renderPlaces(places, latitude, longitude);
    function staticLoadPlaces() {
      return [
        {
          name: "Gift",
          location: {
            lat: latitude,
            lng: longitude,
          },
        },
      ];
    }
  }
};

var models = [
  {
    url: "./skeleton/scene.gltf",
    scale: "0.5 0.5 0.5",
    info: "Head, Lv. 5, HP 10/10",
    rotation: "0 180 0",
  },
  {
    url: "./magnemite/scene.gltf",
    scale: "0.5 0.5 0.5",
    info: "Magnemite, Lv. 5, HP 10/10",
    rotation: "0 180 0",
  },
  {
    url: "./girl/scene.gltf",
    scale: "0.5 0.5 0.5",
    info: "Girl, Lv. 5, HP 10/10",
    rotation: "0 180 0",
  },
  {
    url: "./articuno/scene.gltf",
    scale: "0.2 0.2 0.2",
    rotation: "0 180 0",
    info: "Articuno, Lv. 80, HP 100/100",
  },
  {
    url: "./dragonite/scene.gltf",
    scale: "0.08 0.08 0.08",
    rotation: "0 180 0",
    info: "Dragonite, Lv. 99, HP 150/150",
  },
];

var modelIndex = 0;
var setModel = function (model, entity) {
  if (model.scale) {
    entity.setAttribute("scale", model.scale);
  }

  if (model.rotation) {
    entity.setAttribute("rotation", model.rotation);
  }

  if (model.position) {
    entity.setAttribute("position", model.position);
  }

  entity.setAttribute("gltf-model", model.url);

  const div = document.querySelector(".instructions");
  div.innerText = model.info;
};

function renderPlaces(places, latitude, longitude) {
  let scene = document.querySelector("a-scene");
  places.forEach((place) => {
    let model = document.createElement("a-entity");
    model.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );

    setModel(models[modelIndex], model);

    model.setAttribute("animation-mixer", "");

    document
      .querySelector('button[data-action="change"]')
      .addEventListener("click", function () {
        var entity = document.querySelector("[gps-entity-place]");
        modelIndex++;
        var newIndex = modelIndex % models.length;
        setModel(models[newIndex], entity);
        console.log("index", newIndex);
      });

    scene.appendChild(model);
  });
}
