import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export function List(props) {
    function carregaIcone(likeada) {
        return likeada ? require('../../img/likeada.png') : require('../../img/like.png')
    }

    function likesRender(likes) {
        if(likes === 0) {
            return
        }

        return (
            <Text style={styles.likes}>
                {likes} {likes > 1 ? 'Curtidas' : 'Curtida'}
            </Text>
        )
    }


  return (
    <View style={styles.container}>
        <View style={styles.headerList}>
            <Image style={styles.fotoPerfil} source={{uri: props.data.imgperfil}} />
            <Text style={styles.nomeUser}>{props.data.nome}</Text>
        </View>
        <Image resizeMode="cover" style={styles.fotoPublicacao} source={{uri: props.data.imgPublicacao}} />
        <View style={styles.areaBtn}>
            <TouchableOpacity style={styles.likeBtn}>
                <Image
                style={styles.iconeLike}

                source={carregaIcone(props.data.likeada)}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.sendBtn}>
                <Image
                style={styles.iconeLike}
                source={require('../../img/comment.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.sendBtn}>
                <Image
                style={styles.iconeLike}
                source={require('../../img/send.png')}
                />
            </TouchableOpacity>
        </View>

        {likesRender(props.data.likers)}

        <Text style={styles.nomeRodape}>{props.data.nome}</Text>
        <Text style={styles.descRodape}>{props.data.descricao}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {},
  headerList: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  fotoPerfil: {
      width: 50,
      height: 50,
      borderRadius: 25
  },
  nomeUser: {
      paddingLeft: 5,
      fontSize: 22,
      color: '#000'
  },
  fotoPublicacao: {
      height: 400,
      alignItems: 'center'
  },
  areaBtn: {
      flexDirection: 'row',
      padding: 5,
  },
  iconeLike: {
      width: 25,
      height:25
  },
  sendBtn: {
      paddingLeft: 5
  },
  likes: {
      fontWeight: 'bold',
      marginLeft: 5
  },
  nomeRodape: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingLeft: 5
  },
  descRodape: {
      fontSize: 15,
      paddingLeft: 5,
      paddingBottom: 10
  }
});