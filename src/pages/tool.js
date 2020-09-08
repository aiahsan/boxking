import React, { useState, useEffect } from 'react';
import TransformerComponent from '../components/tool/transformer';
import FunImage from '../components/tool/funImage'
import { Scrollbars } from 'react-custom-scrollbars';
import useImage from 'use-image';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import MainTool from './mainTool';
import EditorBar from '../components/tool/editorBar';
import { Stage, Layer, Group, Text, Rect, Arrow, Star, Circle, Shape, TextPath, Label, Tag } from "react-konva";
import Image from '../components/tool/UriImage';
import newId from '../utils/newId';
import ThreeD from '../components/babylonjs/models';
import MainThreeD from '../components/babylonjs/mainCom';
let historyStep;
let historyPanObj = [];
export default () => {
    const stageRef = React.useRef();
    const [stageSize, setStageSize] = useState({ width: 576, height: 498 });
    const [rangeValue, setRangeValue] = useState(0);
    //background Image
    const [img] = useImage(require('../images/tools/Cube.png'));
    const dragObject = React.useRef();
    const [selectedShapeName, setSelectedShape] = useState("");
    //objects and Images
    const [panObject, SetPanObject] = useState([]);
    const [objecDefaultColor, setobjecDefaultColor] = useState("#22194D");
    const [textDefaultColor, settextDefaultColor] = useState("#22194D");
    const [backDefaultColor, setbackDefaultColor] = useState("transparent");
    const [boxDefaultColor, setboxDefaultColor] = useState("#bd8d64");
    const [imageRender, setimageRender] = useState();
    //const [renderImage,setrenderImage]=useState();
   const [fontSize,setfontSize]=useState(); 
    //depth height width
    //76.2 76.2 76.2

    const [scaleSize, setscaleSize] = useState({ x: 76.2, y: 76.2, z: 76.2 })

    //font


    useEffect(() => {
        //setrenderImage(stageRef.current.toDataURL());

    })


    const handleUpdateImage = () => {
        //console.log(imageRef,"imggggg")
        setimageRender(stageRef.current.toDataURL());
    }
    const handleZoom = (value) => {
        setRangeValue(value);
        //10 % of 400 width=400
        //2
        let newwidth = value / 100;
        let newheight = value / 100;
        setStageSize({ width: 576 + (576 * newwidth), height: 498 + (498 * newheight) })


    }

    const handleObjectColorCange = (color) => {

        setobjecDefaultColor(color.hex);
        if (selectedShapeName != "") {

            const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
            const newPanObject = [...panObject];
            if (newPanObject[indexGet] && newPanObject[indexGet].type == "shape") {
                newPanObject[indexGet].fill = color.hex;
                const npm=JSON.stringify([...newPanObject]);
                updateHistory(JSON.parse(npm));
                SetPanObject(newPanObject);
            
            }
        }


    }


    const handleTextColor = (color) => {

        settextDefaultColor(color.hex);
        if (selectedShapeName != "") {

            const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
            const newPanObject = [...panObject];
            if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
                newPanObject[indexGet].fill = color.hex;
                const npm=JSON.stringify([...newPanObject]);
                updateHistory(JSON.parse(npm));
                SetPanObject(newPanObject);
            }
        }




    }

    const handleFontFamily = (family) => {
        
        if (selectedShapeName != "") {
            const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
            const newPanObject = [...panObject];
            if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
                newPanObject[indexGet].fontFamily = family;
                SetPanObject(newPanObject);
                const npm=JSON.stringify([...newPanObject]);
                updateHistory(JSON.parse(npm));
            }
        }
    }

    const handleDragControl=()=>{
        if (selectedShapeName != "") {
            const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
            const newPanObject = [...panObject];
            newPanObject[indexGet].draggable=!newPanObject[indexGet].draggable;
            const npm=JSON.stringify([...newPanObject]);
            updateHistory(JSON.parse(npm));
            SetPanObject(newPanObject);

      
        }
        
    }


    const handleDelete=()=>{
        if (selectedShapeName != "") {
            let newPanObject = [...panObject];
            newPanObject= newPanObject.filter(x=>x.name!=selectedShapeName)
            const npm=JSON.stringify([...newPanObject]);
            updateHistory(JSON.parse(npm));
            SetPanObject(newPanObject);

      
        }  
    }

    const handleCopyLeft=()=>{
        if (selectedShapeName != "") {
            const id=newId();

            const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
            const newPanObject = [...panObject];
            let cloneObj={...newPanObject[indexGet]}
            cloneObj.id= id;
            
            cloneObj.name= id;
            cloneObj.x=  newPanObject[indexGet].x-10;
            cloneObj.y= newPanObject[indexGet].y-10;
            SetPanObject(panObject.concat(cloneObj));
                                        updateHistory([...panObject.concat({...cloneObj})]);
                                      
        }  
    }

    const handleCopyRight=()=>{
        if (selectedShapeName != "") {
            const id=newId();

            const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
            const newPanObject = [...panObject];
            let cloneObj={...newPanObject[indexGet]}
            cloneObj.id= id;
            
            cloneObj.name= id;
            cloneObj.x=  newPanObject[indexGet].x+10;
            cloneObj.y= newPanObject[indexGet].y+10;
            SetPanObject(panObject.concat(cloneObj));
                                        updateHistory([...panObject.concat({...cloneObj})]);
                                      
        }  
    }
    /*
    const handleFontSize = (e) => {
        console.log(e)
        if (e.keyCode  == 13) {
            if (selectedShapeName != "") {
                const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
                const newPanObject = [...panObject];
                if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
                    {
                        newPanObject[indexGet].fontSize=defaultfontSize;
                    
                        SetPanObject(newPanObject);
alert();    
console.log(panObject)
                    }
                    
            }
            }
          }
    }
    //use to display current font on font size box
    
    const setFsize=(e)=>{
        setfontSize(e)
        alert(e)
    }
    */
   const updateFont=()=>{

    if (selectedShapeName != "") {
      const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
      const newPanObject = [...panObject];
      if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
          setfontSize(newPanObject[indexGet].fontSize);

  }
  }
  
  
}

const handleFontSizeChange=(e)=>{
    if(e.key === 'Enter'){
        if (selectedShapeName != "") {
            const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
            const newPanObject = [...panObject];
            if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
                newPanObject[indexGet].fontSize = fontSize;
                const npm=JSON.stringify([...newPanObject]);
                updateHistory(JSON.parse(npm));
                SetPanObject(newPanObject);

            }
        }
    }}


    
const handleTextAlignhange=(e)=>{

    switch(e)
    {
        case 'center':{

            if (selectedShapeName != "") {
                const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
                const newPanObject = [...panObject];
                if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
                    newPanObject[indexGet].align = 'center';
                    const npm=JSON.stringify([...newPanObject]);
                    updateHistory(JSON.parse(npm));
                    SetPanObject(newPanObject);
        
                }
            }
            break;
        }
        case 'left':
        {
            
    if (selectedShapeName != "") {
        const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
        const newPanObject = [...panObject];
        if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
            newPanObject[indexGet].align = 'left';
            const npm=JSON.stringify([...newPanObject]);
            updateHistory(JSON.parse(npm));
            SetPanObject(newPanObject);

        }
    }
                break;
        }

        case 'right':
            {
     
    if (selectedShapeName != "") {
        const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
        const newPanObject = [...panObject];
        if (newPanObject[indexGet] && newPanObject[indexGet].type == "text") {
            newPanObject[indexGet].align = 'right';
            const npm=JSON.stringify([...newPanObject]);
            updateHistory(JSON.parse(npm));
            SetPanObject(newPanObject);

        }
    }
                break;
            }
    }
}


    
    const handleBackColor = (color) => {

        setbackDefaultColor(color.hex);
        if (selectedShapeName != "") {

            const indexGet = panObject.findIndex(x => x.name == selectedShapeName);
            const newPanObject = [...panObject];
            if (newPanObject[indexGet]) {
                if (newPanObject[indexGet].type == "image") {
                   {
                    newPanObject[indexGet].fill = color.hex;
                    SetPanObject(newPanObject);
                    const npm=JSON.stringify([...newPanObject]);
                updateHistory(JSON.parse(npm));
                   }
                }
                if (newPanObject[indexGet].type == "text") {
                    newPanObject[indexGet].background = color.hex;
                    SetPanObject(newPanObject);
                    const npm=JSON.stringify([...newPanObject]);
                updateHistory(JSON.parse(npm));
                }
            }

        }


    }
    const handleBoxColor = (color) => {
        setboxDefaultColor(color.hex);
        
        }


    const handleTextDblClick = e => {

        const absPos = e.target.getAbsolutePosition();

        /*setAvailText({
            textEditVisible: true,
            textX: absPos.x,
            textY: absPos.y
        });
        */
    };
    const handleTextEdit = e => {
        /*
        setAvailText({
            textValue: e.target.value
        });
        */
    };
    const handleTextareaKeyDown = e => {
        if (e.keyCode === 13) {
            /*
             setAvailText({
                 textEditVisible: false
             });
             */
        }
    };
    //
    const ThreeD = React.forwardRef((_, ref) => (
        <h1 ref={ref}>Child Component</h1>
    ));


    const handleStageMouseDown = e => {

        //all objects un selected
        if (e.target === e.target.getStage()) {
            setSelectedShape("");
            return;
        }


        // clicked on transformer - do nothing
        const clickedOnTransformer =
            e.target.getParent().className === "Transformer";
        if (clickedOnTransformer) {
            return;
        }

        // find clicked rect by its name
        const name = e.target.name();
        // const rect = this.state.rectangles.find(r => r.name === name);
        if (name) {
            setSelectedShape(name);
        } else {
            setSelectedShape("");
        }
    };


    const getPanObject = (obj) => {
        if (obj) {
            switch (obj.type) {

                case 'text':
                    {

                        if (obj.src != "f4") {
                            return <Label onMouseLeave={()=>updateFont()} x={obj.x}
                                y={obj.y}>
                                <Tag   fill={obj.background} />
                                <Text
                                    text={obj.text}
                                    
                                    width={200}
                                    onDblClick={(e) => handleTextDblClick(e)}
                                    name={obj.name}
                                    id={obj.name}
                                    align={obj.align}
                                    fontFamily={obj.fontFamily}
                                    fontSize={obj.fontSize}
                                    fill={obj.fill}
                                    fontWeight={obj.fontWeight}
                                /></Label>
                        }
                        else {
                            return <Label onMouseLeave={()=>updateFont()}  x={obj.x}
                                y={obj.y} >
                                <Tag fill={obj.background} />
                                <TextPath
                                    text={obj.text}

                                    width={200}
                                    onDblClick={(e) => handleTextDblClick(e)}
                                    name={obj.name}
                                    id={obj.name}
                                    align={obj.align}
                                    fontFamily={obj.fontFamily}
                                    fontSize={obj.fontSize}
                                    fill={obj.fill}
                                    fontWeight={obj.fontWeight}
                                    data='M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97'
                                />
                            </Label>

                        }
                    }
                case 'image':
                    {
                        return <Image fill={obj.fill} name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y} />
                    }
                case 'svg':
                    {
                        return <Image fill={obj.fill} width={40} height={40} name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y} />
                    }
                case 'shape':
                    {

                        switch (obj.src) {
                            case 'arrow':
                                {
                                    return <Arrow

                                        name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y}
                                        width={100}
                                        height={100}
                                        fill={obj.fill}
                                        shadowBlur={1}
                                        points={[0, 0, stageSize.width / 4, stageSize.height / 4]}
                                        pointerLength={20}
                                        pointerWidth={20}
                                        fill={obj.fill}
                                        stroke={obj.fill}
                                        strokeWidth={10}

                                    />
                                }
                            case 'circle':
                                {
                                    return <Circle

                                        name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y}
                                        width={100}
                                        height={100}
                                        fill={obj.fill}
                                        shadowBlur={1}
                                    />
                                }
                            case 'square':
                                {
                                    return <Rect

                                        name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y}
                                        width={100}
                                        height={100}
                                        fill={obj.fill}
                                        shadowBlur={1}
                                    />
                                }

                            case 'triangle':
                                {
                                    return <Shape
                                        sceneFunc={(context, shape) => {
                                            context.beginPath();
                                            context.moveTo(100, 0);
                                            context.lineTo(0, 100);
                                            context.quadraticCurveTo(0, 0, 0, 0);
                                            context.closePath();
                                            // (!) Konva specific method, it is very important
                                            context.fillStrokeShape(shape);
                                        }}
                                        name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y}
                                        width={100}
                                        height={100}
                                        fill={obj.fill}
                                        shadowBlur={1} />
                                }

                            case 'star':
                                {
                                    return <Star

                                        name={obj.name} id={obj.name} src={obj.src} x={obj.x} y={obj.y}
                                        width={100}
                                        height={100}
                                        fill={obj.fill}
                                        shadowBlur={1}
                                        innerRadius={20}
                                        outerRadius={40}
                                        numPoints={5}

                                    />
                                }

                        }

                    }
            }
        }
        return null;
    }

    const handleUndo = () => {


        if(historyStep!=undefined)
        {
            if(historyStep==0)
            {   
                const oldPanhistoryObj=historyPanObj[historyStep];
                SetPanObject([]);

               historyStep=undefined;
            }
            else
            {
                historyStep-=1;
                const oldPanhistoryObj=historyPanObj[historyStep];
                if(oldPanhistoryObj)
                {
                    SetPanObject(oldPanhistoryObj);

                    
                }
                else
                {
                    historyStep+=1;
                }       
              }
        }
        }
    const handleRedo = () => {
       
        if(historyStep!=undefined)
        {
            historyStep+=1;
            const hstObj=historyPanObj[historyStep];
            if(hstObj)
            {
                SetPanObject(hstObj);
            }
            else
            {
                historyStep-=1;
            }
            

        }
        else
        {

          const checkAvailable=  historyPanObj[0];
            if(checkAvailable)
            {
                historyStep=0;
            SetPanObject(historyPanObj[historyStep]);
            }
        }
    }

    const handleDragEnd=(e)=>{
        
        
    }

    const updateHistory=(historyObj)=>
    {
        historyPanObj.push(historyObj);
        console.log(historyPanObj);
        if(historyStep==undefined)
        {
                historyStep=0;
        }
        else
        {
            historyStep+=1;
        }

    }

    return <div className="tool-back">
        <div className="toolNav">
            <img style={{
                width: 196,
                height: 62
            }} src={require('../images/logo.png')} />
        </div>
        <EditorBar handleCopyLeft={handleCopyLeft} handleCopyRight={handleCopyRight} handleDelete={handleDelete} handleDragControl={handleDragControl} handleUndo={handleUndo} handleRedo={handleRedo} />

        <div className="row mt-5">
            <div className="col-md-4">
                <div style={{ marginLeft: '10%' }}>
                    <MainTool handleTextAlignhange={handleTextAlignhange} setfontSize={setfontSize} fontSize={fontSize} handleFontSizeChange={handleFontSizeChange}  handleFontFamily={handleFontFamily} dragObj={dragObject} scaleSize={scaleSize} setscaleSize={setscaleSize} boxColorChange={handleBoxColor} boxDefaultColor={boxDefaultColor} textColorChange={handleTextColor} backColor={backDefaultColor} backColorChange={handleBackColor} textColor={textDefaultColor} objectColorChange={handleObjectColorCange} objectColor={objecDefaultColor} />
                </div>

            </div>
            <div className="col-md-5">
                <div className="row" >
                    <div onDrop={e => {

                        stageRef.current.setPointersPositions(e);
                        // add image
                        if (dragObject.current.type == "image") {
                          
                            let id=newId();
                            let objNew={
                                ...stageRef.current.getPointerPosition(),
                                src: dragObject.current.src,
                                type: 'image',
                                name: id,
                                fill: 'transparent',
                                historyObjType:"panObject",
                                draggable:true,
                            };
                            SetPanObject(panObject.concat(objNew));
                            updateHistory([...panObject.concat({...objNew})]);
                          

                        }
                        else if (dragObject.current.type == "shape") {
                            let id=newId();
                            let objNew={
                                ...stageRef.current.getPointerPosition(),
                                src: dragObject.current.src,
                                type: 'shape',
                                name: id,
                                fill: objecDefaultColor,
                                historyObjType:"panObject",
                                draggable:true,
                            };
                            
                            SetPanObject(panObject.concat(objNew));
                            updateHistory([...panObject.concat({...objNew})]);
                                
                        }
                        else if (dragObject.current.type == "text") {
                            switch (dragObject.current.src) {

                                case "f1":
                                    {

                                        let id=newId();
                                        let objNew={
                                            ...stageRef.current.getPointerPosition(),
                                            src: dragObject.current.src,
                                            text: 'Drag to amend text',
                                            name: id,
                                            type: 'text',
                                            align: 'center',
                                            fontFamily: 'Arizonia',
                                            fontSize: 30,
                                            fill: 'black',
                                            fontWeight: 'bold',
                                            background: 'transparent',
                                            historyObjType:"panObject"

                                        };
                                        SetPanObject(panObject.concat(objNew));
                                        updateHistory([...panObject.concat({...objNew})]);
                                      
                                        break;
                                    }
                                case "f2":
                                    {
                                        let id=newId();
                                        let objNew={
                                            ...stageRef.current.getPointerPosition(),
                                            src: dragObject.current.src,
                                            text: 'Drag to amend text',
                                            name: newId(),
                                            type: 'text',
                                            align: 'center',
                                            fontFamily: 'Acme',
                                            fontSize: 25,
                                            fill: 'black',
                                            fontWeight: 'bold',
                                            background: 'transparent',
                                            historyObjType:"panObject"

                                        };
                                        SetPanObject(panObject.concat(objNew));
                                        updateHistory([...panObject.concat({...objNew})]);
                                        break;
                                    }

                                case "f3":
                                    {
                                        let id=newId();
                                        let objNew={
                                            ...stageRef.current.getPointerPosition(),
                                            src: dragObject.current.src,
                                            text: 'Drag to amend text',
                                            name: newId(),
                                            type: 'text',
                                            align: 'center',
                                            fontFamily: 'Marmelad',
                                            fontSize: 20,
                                            fill: 'black',
                                            fontWeight: 'bold',
                                            background: 'transparent',
                                            historyObjType:"panObject"

                                        };
                                        SetPanObject(panObject.concat(objNew));
                                        updateHistory([...panObject.concat({...objNew})]);
                                        break;
                                    }
                                case "f4":
                                    {
                                        let id=newId();
                                        let objNew={
                                            ...stageRef.current.getPointerPosition(),
                                            src: dragObject.current.src,
                                            text: 'Drag to amend text',
                                            name: newId(),
                                            type: 'text',
                                            align: 'center',
                                            fontFamily: 'Acme',
                                            fontSize: 25,
                                            fill: 'black',
                                            fontWeight: 'bold',
                                            background: 'transparent',
                                            historyObjType:"panObject"

                                        };
                                        SetPanObject(panObject.concat(objNew));
                                        updateHistory([...panObject.concat({...objNew})]);
                                        break;
                                    }
                            }
                        }
                        if (dragObject.current.type == "svg") {
                            let id=newId();
                            let objNew={
                                ...stageRef.current.getPointerPosition(),
                                src: dragObject.current.src,
                                type: 'svg',
                                name: newId(),
                                fill: 'transparent',
                                historyObjType:"panObject"
                            };
                            SetPanObject(panObject.concat(objNew));
                            updateHistory([...panObject.concat({...objNew})]);
                           
                        }
                    }}
                        onDragOver={e => e.preventDefault()}
                        style={{ backgroundColor: '#E5E5E5' }}>
                        <Scrollbars
                            style={{ width: 576, height: 498 }}>
                            <Stage width={stageSize.width}
                                height={stageSize.height}
                                ref={stageRef}
                                onMouseDown={handleStageMouseDown}

                            ><Layer >
                                    <FunImage img={{ img: img, width: stageSize.width, height: stageSize.height }} />

                                    {
                                        panObject.map(x => <Group key={x.name}   draggable={(x.draggable==true?true:false)} onDragEnd={handleDragEnd}>{getPanObject(x)}</Group>)                
                                    }
                                    <TransformerComponent 
                                        selectedShapeName={selectedShapeName} updateImage={handleUpdateImage}
                                    />
                                </Layer>

                            </Stage>
                        </Scrollbars>
                        <div style={{ marginLeft: 50, marginTop: 50 }}>
                            <InputRange
                                step={10}
                                maxValue={100}
                                minValue={0}
                                value={rangeValue}
                                onChange={value => handleZoom(value)}
                            />
                        </div>

                    </div>

                </div>

            </div>

            <div className="col-md-3">
                {

                    <MainThreeD scaleSize={scaleSize} ref={stageRef.current} ref={stageRef.current} imageRender={imageRender} boxDefaultColor={boxDefaultColor} />
                }

            </div>
        </div>
        <div className="row">

        </div>
    </div>
}