let scene = document.querySelector("a-scene")  
scene.camera.far = 1000 // default is 1000 afaik
var model

model = document.querySelector("a-gltf-model")

model.children[0].children.forEach(child => {
    if (child.type == "LineSegments") {
        child.visible = false;
    }
});