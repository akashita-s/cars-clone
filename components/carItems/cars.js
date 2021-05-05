import React from 'react';
import { Text, View, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../styledButton'

const carItem =(props) => {

  const {name, tagline, image}= props;

    return(
    <View style={styles.carContainer}>

      <ImageBackground source={image} style={styles.image}/>
      
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitles}>{tagline}</Text>
      </View>
      
      <View style={styles.buttonsContainer}>

         <StyledButton type="primary" content={"Custom Order"} onPress={() => {console.log('1 was pressed')}} />
         <StyledButton type="secondary" content={"Existing Inventory"}  onPress={()=> {console.log('2 was pressed')}} /> 
    
      </View> 

    </View>

    );

};

export default carItem;