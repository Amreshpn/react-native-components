import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Card from './src/compoonents/cardcomponent/card';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#E5E7EA'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          gradientColors={['#d1ebf7', '#dfd4b7']}
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
          borderBottomLeftRadius={15}
          borderBottomRightRadius={15}
          paddingHorizontal={20}
          paddingVertical={20}
          shadow={true}
          shadowColor="#2080af"
          shadowOffsetWidth={2}
          shadowOffsetHeight={5}
          shadowOpacity={0.4}
          shadowRadius={10}
          marginHorizontal={10}
          marginVertical={10}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>My training</Text>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  // source={require('./step-icon.png')}
                  style={{width: 30, height: 30}}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{fontSize: 16}}>Step Aerobics</Text>
                  <Text style={{color: '#888', fontSize: 12}}>
                    4 April - 4:30 pm
                  </Text>
                </View>
              </View>
              <Text style={{color: '#888'}}>Francis Mayer</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  // source={require('./fitness-icon.png')}
                  style={{width: 30, height: 30}}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{fontSize: 16}}>Fitness Basics</Text>
                  <Text style={{color: '#888', fontSize: 12}}>
                    4 April - 6:30 pm
                  </Text>
                </View>
              </View>
              <Text style={{color: '#888'}}>Clark Emard</Text>
            </View>
          </View>
        </Card>
        <Card
          backgroundColor="#fff"
          borderTopRightRadius={45}
          borderBottomLeftRadius={45}
          paddingTop={20}
          paddingBottom={20}
          paddingLeft={20}
          paddingRight={20}
          shadow={true}
          shadowColor="#999"
          shadowOffsetWidth={0}
          shadowOffsetHeight={5}
          shadowOpacity={0.2}
          marginHorizontal={10}
          marginVertical={10}
          shadowRadius={10}
          marginTop={15}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Your Activity</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 40}}>48</Text>
            <View style={{alignItems: 'center'}}>
              <Image
                // source={require('./activity-circle.png')}
                style={{width: 60, height: 60}}
              />
              <Text style={{color: '#888'}}>84%</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text>Cardio</Text>
            <Text>Workout</Text>
          </View>
        </Card>
        <Card
          gradientColors={['#96d4d0', '#dfd4b7', '#e3b2d1']}
          borderTopLeftRadius={100}
          borderTopRightRadius={100}
          borderBottomLeftRadius={100}
          borderBottomRightRadius={100}
          width={200}
          alignItems="center"
          paddingTop={20}
          paddingBottom={20}
          shadow={true}
          shadowColor="#999"
          shadowOffsetWidth={0}
          shadowOffsetHeight={5}
          shadowOpacity={0.2}
          shadowRadius={10}
          marginTop={15}
          marginHorizontal={100}
          marginVertical={10}>
          <View style={{alignItems: 'center'}}>
            <Image
              // source={require('./profile-image.png')}
              style={{width: 70, height: 70}}
            />
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>78%</Text>
            <Text style={{color: '#888'}}>Weekly Activity</Text>
            <View style={{marginTop: 15}}>
              <Button title="Follow" onPress={() => {}} color="#9BE74C" />
            </View>
          </View>
        </Card>
        <Card
          backgroundColor="#fff"
          borderTopLeftRadius={35}
          borderTopRightRadius={15}
          borderBottomLeftRadius={15}
          borderBottomRightRadius={35}
          paddingTop={20}
          paddingBottom={20}
          paddingLeft={20}
          paddingRight={20}
          shadow={true}
          shadowColor="#999"
          shadowOffsetWidth={0}
          shadowOffsetHeight={5}
          shadowOpacity={0.2}
          shadowRadius={10}
          marginTop={15}
          marginHorizontal={10}
          marginVertical={10}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Offline Trainings
            </Text>
            <Text style={{color: '#888'}}>See More</Text>
          </View>
          <View style={{marginTop: 20}}>
            {/* Group Pilates */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
              }}>
              <View>
                <Text style={{fontSize: 16}}>Group Pilates</Text>
                <Text style={{color: '#888', fontSize: 12}}>16 places</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{marginRight: 5}}>Flexibility</Text>
                <Image
                  // source={require('./group-icon.png')}
                  style={{width: 20, height: 20}}
                />
              </View>
            </View>

            {/* Explosive Exercises */}
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontSize: 16}}>Explosive Exercises</Text>
                <Text style={{color: '#888', fontSize: 12}}>6 places</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{marginRight: 5}}>Power</Text>
                <Image
                  // source={require('./group-icon.png')}
                  style={{width: 20, height: 20}}
                />
              </View>
            </View>
          </View>
        </Card>

        <Card
          backgroundColor="#D8B4FE"
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
          borderBottomLeftRadius={15}
          borderBottomRightRadius={15}
          paddingTop={20}
          paddingBottom={20}
          paddingLeft={20}
          paddingRight={20}
          shadow={true}
          shadowColor="#999"
          shadowOffsetWidth={0}
          shadowOffsetHeight={5}
          shadowOpacity={0.2}
          shadowRadius={10}
          marginTop={15}
          marginHorizontal={10}
          marginVertical={10}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
            Skill-Based
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 10,
              color: '#fff',
            }}>
            Subscribe now to our premium plan!
          </Text>
          <Text style={{color: '#fff', marginTop: 10}}>
            Enhance your sports experience.
          </Text>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Image
              // source={require('./subscribe-image.png')}
              style={{width: 100, height: 100}}
            />
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
