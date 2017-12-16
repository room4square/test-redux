import React, { Component } from 'react';
import { 
  Text, 
  TouchableWithoutFeedback, 
  View ,
  LayoutAnimation,
  UIManager
  } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
// bintang artinya import semua 

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {



  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded){
      return (
        <CardSection>
          <Text style={{ flex:1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    //console.log(this.props);

    return (
      <TouchableWithoutFeedback 
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
        <CardSection>
          <Text style={titleStyle}>
            {title}
          </Text>
        </CardSection>
        {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  // cara baca: expanded akan sama dengan true ketika disamping2nya bener/true
  return { expanded: expanded };
}

export default connect(mapStateToProps, actions)(ListItem);
// catatan
// untuk calling action creator kita harus import connect helper
// pada connect argumen ke 1 harus mapStateToProps function
// arguman ke 2 untuk bind action createor ke komponen ini.

// krn selectedLibraryId adalah slh satu state yg didaftarkan di
// index.js di dalam reducer

