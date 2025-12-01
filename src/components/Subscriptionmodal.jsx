import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const SubscriptionModal = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    <Modal visible={isVisible} transparent animationType="fade">


      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>


      <View style={styles.centerWrap}>
        <View style={styles.card}>

          <Text style={styles.heading}>
            Start Your <Text style={styles.highlight}>7-Day Trial</Text>
          </Text>

          <Text style={styles.subHeading}>for Just ₹1</Text>

          <Text style={styles.description}>
            Unlock unlimited downloads and premium features for only ₹1.
            Try everything without any commitment.
          </Text>


          <View style={styles.featuresBox}>
            <Text style={styles.featuretitle}>Features  :</Text>
            {[

              'Unlimited Poster Downloads',
              'Access All Premium Templates',
              'Ad-Free Experience',
              'Faster Download Speed',
              'Full Access to All Categories & Creatives',
              'Cancel Anytime—No Hidden Charges',
            ].map((item, index) => (
              <View key={index} style={styles.featureRow}>

                <Entypo name="check" color="#4CAF50" size={24} />
                <Text style={styles.featureText}>{item}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.payHeading}>Pay Securely Using</Text>


          <View style={styles.paymentWrap}>
            <View style={styles.payOption}>
              <Text style={styles.payText}>UPI</Text>
              <Image
      source={require('../assets/images/upiicon.png')}
      style={{ width: 22, height: 22, marginLeft: 6}}
      resizeMode="contain"
    />
            </View>

            <View style={styles.payOption}>
                         <Image
      source={require('../assets/images/cardicon.png')}
      style={{ width: 22, height: 22, marginLeft: 6,}}
      resizeMode="contain"
    />
              <Text style={styles.payText}>Debit & Credit Cards</Text>
            </View>
          </View>

          <View style={styles.paymentWrap}>
            <View style={styles.payOption}>
              <Text style={styles.payText}>Net Banking</Text>
            </View>

            <View style={styles.payOption}>
                       <Image
      source={require('../assets/images/walleticon.png')}
      style={{ width: 22, height: 22, marginLeft: 6}}
      resizeMode="contain"
    />
              <Text style={styles.payText}>Wallets</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.subscribeBtn}>
            <Text style={styles.btnText}>Your Trial Price: ₹1</Text>
          </TouchableOpacity>

          <Text style={styles.footerNote}>
            ₹1 Will Be Deducted Now For Verification Will Be Refunded.{"\n"}
            Auto-Renews At ₹499/Quarterly After That
          </Text>


<TouchableOpacity style={styles.closebtw}  onPress={() => setVisible(false)}>
    <Text>  X Close </Text>
</TouchableOpacity>

        </View>
      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  centerWrap: {
    position: 'absolute',
    top: '10%',
    width: '90%',
    alignSelf: 'center',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    elevation: 8,
    shadowColor: '#000',
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },

  highlight: {
    color: '#FF7F32',
  },

  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
  },

  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },

  featuresBox: {
    marginTop: 18,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 15,
  },
featuretitle:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'500',
    marginBottom:20,

},
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 8,
  },

  featureText: {
    marginLeft: 10,
    color: '#333',
    fontSize: 14,
    alignItems:'center',
    textAlign:'center',
  },

  payHeading: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },

  paymentWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  payOption: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
     borderStyle: 'dashed',
  },

  payText: {
    color: '#000',
    fontSize: 13,
    fontWeight: '600',
  },

  subscribeBtn: {
    marginTop: 20,
    backgroundColor: '#FF7F32',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footerNote: {
    marginTop: 10,
    fontSize: 11,
    textAlign: 'center',
    color: '#888',
  },
 closebtw: {
  marginTop: 15,
  paddingVertical: 8,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f2f2f2',
  alignSelf:'center',
  width:'20%',
},

closeText: {
  fontSize: 14,
  fontWeight: '600',
  color: '#333',
},

});

export default SubscriptionModal;
