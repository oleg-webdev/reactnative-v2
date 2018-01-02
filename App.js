import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import img from './src/assets/norvay-landscape.jpg';
import {addPlace, removePlace} from './src/store/actions';

class App extends React.Component {
  state = {
    placeName: '',
  };

  placeNameChangeHandler = val => {
    this.setState({placeName: val});
  }

  placeAddHandler = () => {
    if(this.state.placeName.trim() !== '') {
      this.props.onAdd(this.state.placeName);
      console.log(this.state.placeName);
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerView}>
        <TextInput
          style={styles.inputStyle}
          value={this.state.placeName}
          placeholder="Some Placeholder"
          onChangeText={this.placeNameChangeHandler}/>
          <Button
            style={styles.buttonStyle} title="Add"
            onPress={this.placeAddHandler} />
        </View>
        
        <FlatList
          style={styles.listContainer}
          data={this.props.places}
          renderItem={(info) => (
            <TouchableOpacity onPress={()=>this.props.onDelete(info.item.key)}>
              <View><ListItem placeInfo={info.item} /></View>
            </TouchableOpacity>
          )}
        />

      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (name) => dispatch(addPlace(name)),
    onDelete: (key) => dispatch(removePlace(key)),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( App );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  innerView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputStyle: {
    width: '70%'
  },
  buttonStyle: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});





