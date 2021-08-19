import React from 'react';
import testimonyBg from '../media/testimony-bg.svg';
//import Carousel from 'react-native-snap-carousel';

export default function Testimony () {
  // _renderItem = ({item, index}) => {
  //   return (
  //     <View style={styles.slide}>
  //       <Text style={styles.title}>{item.title}</Text>
  //     </View>
  //   );
  // };
  return (
    <div>
      <img className="testimony-bg" src={testimonyBg} alt="background" />
      <div className="box7">hello</div>
      {/* <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={this.state.entries}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      /> */}

    </div>
  );
}
