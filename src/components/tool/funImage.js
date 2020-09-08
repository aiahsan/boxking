import React from 'react';
import {Image} from 'react-konva';
import useImage from 'use-image';
export default ({ img }) => {
   // const [img] = useImage(image.src);
    return (
      <Image
        image={img.img}
        width={img.width}
        height={img.height}
        //x={0}
        //y={0}
        offsetX={0}
        offsetY={0}
        // I will use offset to set origin to the center of the image
       // offsetX={img ? img.width / 2 : 0}
       // offsetY={img ? img.height / 2 : 0}
      />
    );
  };

