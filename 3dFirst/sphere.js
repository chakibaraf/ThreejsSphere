
let camera;
let scene;
let renders;
let geometrie;
let material;
let maillage;

function iniatilisation() {

    // paramètres de la caméra (FOV (champ de vision), rapport hauteur-largeur, distance minimale, distance maximale)
    camera = new THREE.PerspectiveCamera(1000, window.innerWidth / innerHeight, 1, 1500)

    //position de la camera(x,y,z)
    camera.position.set(130, 0, 300)

    //mise en scene
    scene = new THREE.Scene()

    //ajoute la caméra à la scène
    scene.add(camera)

    //Géométrie que nous allons mettre dans la scène
    // Paramètres de l'icosaèdre (rayon, détail)
    geometrie = new THREE.IcosahedronGeometry(150, 10)

    // Material
    // Nous allons voir pour l'instant deux types qui sont
    //MatériauMaillageNormal()
    material = new THREE.MeshNormalMaterial({

        wireframe: true,
        wireframeLinewidth: 5
    })

    // crée le maillage qui appelle ses paramètres (géométrie, material)
    maillage = new THREE.Mesh(geometrie, material)

    // ajoute le maillage à la scène
    scene.add(maillage)

    // renders
    // est dédié à l'effacement et à la peinture de la toile ou de la toile 3d
    renders = new THREE.WebGLRenderer()

    //color del renderizado (color,alfa)
    renders.setClearColor('black', 500)

    // taille de la largeur et de la hauteur du rendu qui doit être ce que nous allons voir la taille que nous avons définie
    //dans la caméra

    renders.setSize(window.innerWidth, window.innerHeight)

    //ajoute le moteur de rendu au corps
    document.body.appendChild(renders.domElement)
}
iniatilisation();
function init() {
    requestAnimationFrame(iniatilisation);
}

function animation() {
    requestAnimationFrame(animation)
    maillage.rotation.x += 0.002
    maillage.rotation.y += 0.002

    renders.render(scene, camera)
}
animation();