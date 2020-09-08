import React from 'react';
import {Transformer} from 'react-konva';
class TransformerComponent extends React.Component {
  constructor(props)
  {
    super(props);
    this.props=props;
  }  
  componentDidMount() {
      this.checkNode();
    }
    componentDidUpdate() {
      this.checkNode();
      this.props.updateImage()
    }
  
    onTransformStart() {
      console.log('onTransformStart');
    }
  
    onTransform() {
    
      console.log('onTransform');
    }
  
    onTransformEnd() {
      console.log('end transform');
  
    }
    checkNode() {
  
      // here we need to manually attach or detach Transformer node
      const stage = this.transformer.getStage();
      const { selectedShapeName } = this.props;
  
      var selectedNode = stage.findOne("." + selectedShapeName);
      // do nothing if selected node is already attached
      if (selectedNode === this.transformer.node()) {
        return;
      }
      if (selectedNode) {
        const type = selectedNode.getType();
        if (type != "Group") {
          selectedNode = selectedNode.findAncestor("Group");
        }
        // attach to another node
        this.transformer.attachTo(selectedNode);
      } else {
        // remove transformer
        this.transformer.detach();
      }

      this.transformer.getLayer().batchDraw();
    }
    render() {
      return (
        <Transformer

          ref={node => {
            this.transformer = node;
          }}
          transformstart={this.onTransformStart}
          transform={(e)=>this.onTransform()}
          transformend={this.onTransformEnd}
        />
      );
    }
  }
  export default TransformerComponent