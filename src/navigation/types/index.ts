export type RootStackParamList = {
  LoginScreen: undefined;
  Otpscreen: undefined;
  ChooseLanguage: {phone_number: string },
 ChooseProfileType : undefined,
 BusinessProfile: undefined,
 PersonalProfile: undefined,
 EditPeronsalProfile:undefined,
 EditBusinessProfile:undefined
 UnlockPremiumFeatures:undefined,
 SubscriptionModal:undefined,
 SplashScreen:undefined,
 HomeScreen:undefined,
   EditProfile: {  profileId: string; profileType?: string  };
   MainTabs: undefined;



};
export type ProfileDataType = {
  avatar?: string;
  name?: string;
  profile_type?: string;
  id: string;
};

export type TemplateItem = {
  file_path: string;
  template_name?: string;
};






