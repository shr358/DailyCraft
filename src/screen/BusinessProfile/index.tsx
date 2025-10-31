// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Image,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import styles from './styles';
// import Button from '../../components/Button';

// const BusinessProfile = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backBtn}
//           onPress={() => navigation.goBack()}>
//           <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
//         </TouchableOpacity>

//         <Text style={styles.headerText}>Business Profile</Text>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.logoBox}>
//           <Image
//             source={require('../../assets/images/uploadicon.png')}
//             style={styles.log0upload}
//             resizeMode="contain"
//           />

//           <Text style={styles.logoText}>Please Upload A Business Logo</Text>
//           <TouchableOpacity style={styles.uploadBtn}>
//             <Ionicons name="image-outline" size={22} color="#FFFFFF" />
//             <Text style={styles.uploadText}>Upload Logo</Text>
//           </TouchableOpacity>
//         </View>

//         <Text style={styles.label}>Shop/ Business Name</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           placeholderTextColor="#777"
//         />

//         <Text style={styles.label}>Enter Email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Here"
//           placeholderTextColor="#777"
//         />

//         <Text style={styles.label}>Contact Number</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Select"
//           placeholderTextColor="#777"
//         />

//         <Text style={styles.label}>Describe Yourself Briefly</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Type Here"
//           placeholderTextColor="#777"
//         />

//         <Text style={styles.label}>Address</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Type Your Address Here"
//           placeholderTextColor="#777"
//         />

//         <View style={styles.bottomContainer}>
//           <Button
//             title="Continue"
//             onPress={() => navigation.navigate('PersonalProfile')}
//           />
//         </View>

//         <TouchableOpacity>
//           <Text style={styles.switchText}>Switch to Personal Profile</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// export default BusinessProfile;

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Button from '../../components/Button';

const BusinessProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Business Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.logoBox}>
          <Text style={styles.logoText}>Please Upload A Business Logo</Text>

          <TouchableOpacity style={styles.uploadBtn}>
            <Ionicons name="image-outline" size={24} color="#FFFFFF" style={styles.uploadIcon} />
            <Text style={styles.uploadText}>Upload File</Text>
          </TouchableOpacity>
        </View>


        <Text style={styles.label}>Shop/ Business Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#777"
        />

        <Text style={styles.label}>Enter Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Here"
          placeholderTextColor="#777"
        />

        <Text style={styles.label}>Contact Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Select"
          placeholderTextColor="#777"
        />

        <Text style={styles.label}>Describe Yourself Briefly</Text>
        <TextInput
          style={[styles.input, styles.textlarge]}
          placeholder="Type Here"
          placeholderTextColor="#777"
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={[styles.input,  styles.textlarge]}
          placeholder="Type Your Address Here"
          placeholderTextColor="#777"
        />


        <View style={styles.bottomContainer}>
          <Button title="Continue" onPress={() => navigation.navigate('PersonalProfile')} />
        </View>


        <TouchableOpacity style={styles.switchBtn}>
          <Text style={styles.switchText}>
             <Text style={styles.switchtext1}>Switch to
               <Text style={styles.switchtext2}> Personal Profile</Text>
                 </Text>
                 </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BusinessProfile;
