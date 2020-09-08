import React from 'react';
import { Engine, Scene,Model ,GlowLayer} from 'react-babylonjs'
import { Vector3 } from '@babylonjs/core';
import {  Color3 as BabylonjsCoreColor3 } from "@babylonjs/core/Maths/math.color";

 
export default ()=>
{
  return <Engine canvasId="sample-canvas">
  <Scene clearColor={BabylonjsCoreColor3.White()}>
  <arcRotateCamera name="arc" target={new Vector3(0, 1, 0)} minZ={0.001}
      alpha={100} beta={100} radius={200} />
            <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
            <model
      rotation={new Vector3(0, Math.PI, 0)} pos
      ition={new Vector3(-0.1, 1, 2)}
      rootUrl='./' sceneFilename="packBoxnew.gltf"
      scaling={new Vector3(20, 20, 20)}

      
    >
                              <texture assignTo={'meshes[3].material.albedoTexture'} url={`https://www.tutorialspoint.com/babylonjs/images/a2_wall.jpg`} />

      </model>
  </Scene>
</Engine>
}
