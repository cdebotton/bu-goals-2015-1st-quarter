import React from 'react';
import BackgroundActionCreators from '../actions/BackgroundActionCreators';
import fs from '../shaders/fs.c';
import vs from '../shaders/vs.c';
import THREE from 'three';
var renderer,
  scene,
  camera,
  cameraRadius = 50.0,
  cameraTarget,
  cameraX = 0,
  cameraY = 0,
  cameraZ = cameraRadius,
  particleSystem,
  particleSystemHeight = 100.0,
  clock,
  controls,
  parameters,
  onParametersUpdate,
  texture;

var RecapHandler = React.createClass({
  componentDidMount() {
    // BackgroundActionCreators.setBackground('#FF002F');
    init();
    this.refs['gl-container'].getDOMNode().appendChild(renderer.domElement);
    animate();
    BackgroundActionCreators.setBackground('');
  },

  render() {
    return (
      <div {...this.props}>
        <div ref="gl-container" className="gl-container" />
        <div className="gl-copy">
          <h2>Not so bad...</h2>
          <p>The goals came a little late last year, and we set a ton of them. That list of goals included:</p>
          <ul>
            <li>
              <p className="task success">Standardize our process</p>
              <ul>
                <li>Completed Gulp build pipeline <a href="http://npmjs.com/packages/pruno">Pruno</a>.</li>
                <li>Chose DigitalOcean as our hosting/distribution platform.</li>
              </ul>
            </li>
            <li>
              <p className="task success">Embrace new technologies and frameworks to create dynamic work.</p>
              <ul>
                <li>Experimented with a new CMS, Craft.</li>
                <li>Overall general increased use of JavaScript frameworks to boost productivity.</li>
                <li>Backbone and React are the most used Frameworks by the dev team.</li>
              </ul>
            </li>
            <li>
              <p className="task success">Release a project in a new Language for the studio.</p>
              <ul>
                <li>Not launched, but contributed to the back-end work of Give Directly in Ruby.</li>
              </ul>
            </li>
            <li>
              <p className="task fail">Make an iOS app in Swift and release it on the App store (#lol #wtf)</p>
              <ul>
                <li>Way too short of a timeline, need a proper roadmap.</li>
              </ul>
            </li>
            <li>
              <p className="task fail">QA projects earlier in their life cycle.</p>
              <ul>
                <li>Need the infrastructure in place to allow for this.</li>
              </ul>
            </li>
            <li>
              <p className="task fail">Start using BDD</p>
              <ul>
                <li>Might be premature to try and implement this as a way of developing in the studio.</li>
                <li>Need to set up proper infrastructure, starting at the project planning level.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

function init() {
  renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.setSize( window.innerWidth, window.innerHeight );
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
  cameraTarget = new THREE.Vector3( 0, 0, 0 );
  texture = THREE.ImageUtils.loadTexture( 'img/snowflake1.png' );
  var numParticles = 10000,
    width = 100,
    height = particleSystemHeight,
    depth = 100,
    parameters = {
      color: 0xFFFFFF,
      height: particleSystemHeight,
      radiusX: 2.5,
      radiusZ: 2.5,
      size: 100,
      scale: 4.0,
      opacity: 0.4,
      speedH: 1.0,
      speedV: 1.0
    },
    systemGeometry = new THREE.Geometry(),
    systemMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color:  { type: 'c', value: new THREE.Color( parameters.color ) },
        height: { type: 'f', value: parameters.height },
        elapsedTime: { type: 'f', value: 0 },
        radiusX: { type: 'f', value: parameters.radiusX },
        radiusZ: { type: 'f', value: parameters.radiusZ },
        size: { type: 'f', value: parameters.size },
        scale: { type: 'f', value: parameters.scale },
        opacity: { type: 'f', value: parameters.opacity },
        texture: { type: 't', value: texture },
        speedH: { type: 'f', value: parameters.speedH },
        speedV: { type: 'f', value: parameters.speedV }
      },
      vertexShader: document.getElementById( 'step07_vs' ).textContent,
      fragmentShader: document.getElementById( 'step09_fs' ).textContent,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthTest: false
    });

  for( var i = 0; i < numParticles; i++ ) {
    var vertex = new THREE.Vector3(
        rand( width ),
        Math.random() * height,
        rand( depth )
      );

    systemGeometry.vertices.push( vertex );
  }

  particleSystem = new THREE.PointCloud( systemGeometry, systemMaterial );
  particleSystem.position.y = -height/2;

  scene.add( particleSystem );

  clock = new THREE.Clock();

  onParametersUpdate = function( v ) {
    systemMaterial.uniforms.color.value.set( parameters.color );
    systemMaterial.uniforms.height.value = parameters.height;
    systemMaterial.uniforms.radiusX.value = parameters.radiusX;
    systemMaterial.uniforms.radiusZ.value = parameters.radiusZ;
    systemMaterial.uniforms.size.value = parameters.size;
    systemMaterial.uniforms.scale.value = parameters.scale;
    systemMaterial.uniforms.opacity.value = parameters.opacity;
    systemMaterial.uniforms.speedH.value = parameters.speedH;
    systemMaterial.uniforms.speedV.value = parameters.speedV;
  }

  document.addEventListener( 'mousemove', function( e ) {
    var mouseX = e.clientX,
      mouseY = e.clientY,
      width = window.innerWidth,
      halfWidth = width >> 1,
      height = window.innerHeight,
      halfHeight = height >> 1;

    cameraX = cameraRadius * ( mouseX - halfWidth ) / halfWidth;
    cameraY = cameraRadius * ( mouseY - halfHeight ) / halfHeight;
  }, false );

  document.addEventListener( 'mousewheel', onMouseWheel, false );
  document.addEventListener( 'DOMMouseScroll', onMouseWheel, false );

}

function onMouseWheel( e ) {
  e.preventDefault();

  if( e.wheelDelta ) {
    cameraZ += e.wheelDelta * 0.05;
  } else if( e.detail ) {
    cameraZ += e.detail * 0.5;
  }
}

function rand( v ) {
  return (v * (Math.random() - 0.5));
}


function animate() {

  requestAnimationFrame( animate );

  var delta = clock.getDelta(),
    elapsedTime = clock.getElapsedTime();

  particleSystem.material.uniforms.elapsedTime.value = elapsedTime * 10;

  camera.position.set( cameraX, cameraY, cameraZ );
  camera.lookAt( cameraTarget );

  renderer.clear();
  renderer.render( scene, camera );

}

export default RecapHandler;
