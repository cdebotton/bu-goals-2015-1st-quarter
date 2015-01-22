import React from 'react';
import BackgroundActionCreators from '../actions/BackgroundActionCreators';
import THREE from 'three';

var WebGLHandler = React.createClass({
  componentDidMount() {
    BackgroundActionCreators.setBackground('#FF002F');
    var scene;
    var camera;
    var renderer;

    var winWidth;
    var winHeight;

    var ball;
    var ballGeometry;
    var light;
    var ballVertices;
    var ballMaterial;

    var light;

    var tx = 0;
    var ty = 0;
    var mx = 0; // mouse x
    var my = 0; // mouse y

    var config = {
        color: [ 0, 128, 255 ],
        speed1: .0141,
        level:  .75,
        var1: .35,
        var2: 0,
        speed2: .09,
        random: function(){
            config.color[0] = Math.random() * 255;
            config.color[1] = Math.random() * 255;
            config.color[2] = Math.random() * 255;
            config.level = Math.random();
            config.var1 = Math.random();
            config.var2 = Math.random();
            config.speed1 = Math.random() * .2;
            config.speed2 = Math.random() * .2;
        }
    }


    var init = () => {
        /* INITIALIZE STUFF HERE */
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 10000);
        renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.shadowMapEnabled = true;

        this.refs['gl-container'].getDOMNode().appendChild(renderer.domElement);

        ballGeometry = new THREE.SphereGeometry(100, 40, 40);
        ballMaterial = new THREE.MeshPhongMaterial({ambient: 0xff0000, color: 0xff0000})
        ball = new THREE.Mesh(ballGeometry, ballMaterial);

        ball.castShadow = true;
        ball.receiveShadow = true;
        ballVertices = ball.geometry.vertices;
        var vertex;
        for(var i = 0, len = ballVertices.length; i < len; i++) {
            vertex = ballVertices[i];
            vertex.ox = vertex.x;
            vertex.oy = vertex.y;
            vertex.oz = vertex.z;
        }


        var ambient = new THREE.AmbientLight(0x999999);

        light = new THREE.DirectionalLight( 0x999999 );
        light.castShadow = true;
        light.shadowMapWidth = 2048;
        light.shadowMapHeight = 2048;
        light.shadowCameraLeft = -500;
        light.shadowCameraRight = 500;
        light.shadowCameraTop = 500;
        light.shadowCameraBottom = -500;
        light.shadowCameraFar = 3500;


        scene.add(ball);
        scene.add(ambient);
        scene.add( light );
        //scene.fog = new THREE.FogExp2( 0xff0000, 0.003);

        camera.position.y = 100;
        camera.position.z = 300;

        window.onresize = onResize;
        onResize();
        render();
        window.onmousemove = onMouseMove;
    }

    function onMouseMove(e){
        tx = e.pageX / winWidth * 2 - 1;
        ty = e.pageY / winHeight * 2 - 1;
    }

    function onResize(){
        winWidth = window.innerWidth;
        winHeight = window.innerHeight;

        camera.aspect = winWidth / winHeight;
        renderer.setSize(winWidth, winHeight);
        camera.updateProjectionMatrix();
    }


    var t = 0;
    var bt = 0;
    var lt = 0;

    function render(){6
        requestAnimationFrame(render);

        mx += (tx - mx) * .05;
        my += (ty - my) * .05;

        t += config.speed1;
        bt += config.speed2;
        lt += .02;
        var vertex;
        var scale;
        var level = config.level;
        var multiplyRatio = config.multiplyRatio;
        var var1 = config.var1;
        var var2 = config.var2;

        for(var i = 0, len = ballVertices.length; i < len; i++) {
            vertex = ballVertices[i];
            scale = Math.sin(t + i * ((1 + i)/(1 + i * var2)) * var1/40) * Math.sin(bt + i/ len) * level;
            vertex.x = vertex.ox + vertex.ox * scale;
            vertex.y = vertex.oy + vertex.oy * scale;
            vertex.z = vertex.oz + vertex.oz * scale;
        }

        ball.geometry.verticesNeedUpdate = true;
        ball.geometry.normalsNeedUpdate = true;

        light.position.set( Math.cos(lt) * 200, Math.sin(lt) * 200, 50 );

        ballMaterial.ambient.r = ballMaterial.color.r = config.color[0] / 255;
        ballMaterial.ambient.g = ballMaterial.color.g = config.color[1] / 255;
        ballMaterial.ambient.b = ballMaterial.color.b = config.color[2] / 255;
        camera.position.x = mx * 300;
        camera.position.y = my * 200;

        camera.lookAt(ball.position);
        renderer.render(scene, camera);

    }

    init();
  },

  render() {
    return (
      <div className="web-gl-handler">
        <div className="gl-container" ref="gl-container" />
        <div className="gl-copy">
          <h3>Embrace OpenGL on the web for more unique visual control.</h3>
          <p>WebGL support has been steadily opening up, and it is allowing for more creative interactive nuances. WebGL is often associated with 3D animation, but it can be used for any sort of visual effects. OpenGL is a very complex subject, so the goal this quarter is to start thinking about how we can possibly implement some of these tools into our work.</p>
          <p><strong>Bonus:</strong> Launch one site that uses canvas and the WebGL context.</p>
        </div>
      </div>
    );
  }
});

export default WebGLHandler;
