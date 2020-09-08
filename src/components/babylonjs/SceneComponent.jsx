import { Engine, Scene } from '@babylonjs/core'
import React, { useEffect, useRef, useState } from 'react'

export default (props,ref) => {

    //console.log(props);
    const reactCanvas = useRef(null);
    const { antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady,convaStageRef, ...rest } = props;

    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        if (window) {
            const resize = () => {
                if (props.scene) {
                    props.scene.getEngine().resize();

                }
            }
            window.addEventListener('resize', resize);

            return () => {
                window.removeEventListener('resize', resize);
            }
        }
    }, [props.scene]);

    useEffect(() => {
        if (!loaded) {
            setLoaded(true);
            const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
            const scene = new Scene(engine, sceneOptions);
            scene.createDefaultLight(true);
            props.setScene(scene);
            if (scene.isReady()) {
                   
                props.onSceneReady(scene)
            } else {
                scene.onReadyObservable.addOnce(scene => props.onSceneReady(scene));
            }

            engine.runRenderLoop(() => {
                if (typeof onRender === 'function') {

                    onRender(scene);
                }
                scene.render();
            })
        }

        return () => {
            if (props.scene !== null) {
                props.scene.dispose();
            }
        }
    }, [reactCanvas])


    const handleAnimation=(type)=>
    {
        if(type=="open")
        {
            props.scene.animationsEnabled=true;
            props.scene.animationGroups[0].loopAnimation=false;
            props.scene.animationGroups[0].start(false,1,0,2.5);    
           
           
     
        }
        else if(type=='close')
        {
            props.scene.animationGroups[0].start(false,1,2.5,0);    
            
        }
    }
    
    return (
       <div>
            <canvas width={400} height={400} ref={reactCanvas} {...rest} />
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <button className="prm-color btn-cst-primary btn btn-primary" onClick={()=>handleAnimation("open")}>Open</button>
      <button className="prm-color btn-cst-primary btn btn-primary" onClick={()=>handleAnimation("close")}>Close</button>

        </div>
       </div>

    );
}