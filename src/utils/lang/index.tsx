import LocalizedStrings from 'react-native-localization';
import english from '../locals/english';
import hindi from '../locals/hindi';
import Marathi from '../locals/Marathi';
import tamil from '../locals/tamil';


const strings = new LocalizedStrings({
  en: english,
  hi: hindi,
  ma: Marathi,
  ta:tamil,
});


strings.setLanguage('en');



export default strings;
