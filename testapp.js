Retweets = new Mongo.Collection('retweets');
Cities = new Mongo.Collection('cities');
Hashtags = new Mongo.Collection('hashtags');


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.topRetweeted.helpers({  
    retweets: Retweets.find({retweetCount: { $gt: 0 }}, {sort: {retweetCount: -1}}),
  });

  Template.topFavorited.helpers({  
    retweets: Retweets.find({favoriteCount: { $gt: 0 }}, {sort: {favoriteCount: -1}}),
  });


Template.topHashtags.helpers({  
    hashtags: Hashtags.find({ count: { $gt: 15 } }, {sort: {count: -1}}),
  });


}

  if (Meteor.isServer) {


  }


  var Twit = Meteor.npmRequire('twit');

  var T = new Twit({
    consumer_key:         'an471VP2UQg4pYhfbZYxzpXxd', // API key
    consumer_secret:      '5I0U1uYqHTlrEuP15ICDTVxWXhirZbCLebfdUPliRI9lnhf3qI', // API secret
    access_token:         '205753726-liKVqp4OrQntlUrtXPl5XDE1xCNcMIOcSnrXFBxE', 
    access_token_secret:  '061gZYfjqpPOORcBsPJvjArW4tUXknCDpPZOcJcZYRq4g'
  });



//FOR TOP RETWEET AND TOP FAVOURITED


// var currentIdUser = 490231980961705984;
// for(var count = 0; count<1; count++){
// for(var count = 0; count<100; count++){
//   T.get('statuses/user_timeline', { 
//               screen_name: 'uber', 
//               count: 200,
//               max_id: currentIdUser,
//               include_rts: 1,
//           },Meteor.bindEnvironment( function(err, data, response) {                 


//             for (i in data){

//               console.log(data[i].text);

//               Retweets.insert({
//                 id:i+1,
//                 text: data[i].text,
//                 retweetCount: data[i].retweet_count,
//                 favoriteCount: data[i].favorite_count,
//                 geo: data[i].geo
//               });
//               console.log(i);
//               console.log("ADDED");
//             }

//             currentIdUser = data[i].id_str;
//             console.log(currentIdUser);

//           }));

//   Meteor._sleepForMs(10000);
// }
// Meteor._sleepForMs(4000);
// }






// FOR HASHTAGS


// var currentId = 588971587417690112;
// var j = 0;
// var databaseId = 1;
// for(var count = 0; count<10; count++){
// for(var count = 0; count<450; count++){
//   T.get('search/tweets', { 
//     q: 'uber -RT', 
//             // geocode: '33.913437,-118.212605,60mi',
//             result_type: 'recent',
//             count: 100,
//             max_id: currentId,
//             // lang: 'en',
//           },Meteor.bindEnvironment( function(err, data, response) {                 

//             console.log("RUN FIRST gettweets Function");
//             console.log("RUN FIRST gettweets Function");
//             console.log("RUN FIRST gettweets Function");         


//             for (i in data['statuses']){

//               Cities.insert({
//                 id:databaseId,
//                 tweetId: data['statuses'][i].id_str,
//                 text: data['statuses'][i].text,
//                 date: data['statuses'][i].created_at,
//                 geo: data['statuses'][i].geo,
//                 location: data['statuses'][i].location,
//                 user: data['statuses'][i].user.screen_name,
//                 userId: data['statuses'][i].user.id_str,
//                 retweetCount: data['statuses'][i].retweet_count,
//                 favoriteCount: data['statuses'][i].favorite_count
//               });   

//               console.log(data['statuses'][i].text);

//               for (item in data['statuses'][i].entities.hashtags){
                
//                 var text = data['statuses'][i].entities.hashtags[item].text;

//                 if(Hashtags.findOne({hashtag: text})){
//                   Hashtags.update({hashtag: text}, {$inc:{count: 1}});             
//                   console.log("ADDING COUNT");
//                 }
//                 else{
//                   console.log("hashtag is");
//                   console.log(text);
//                   Hashtags.insert({
//                    hashtag: text,
//                    count: 1,
//                   });
//                   console.log("NEW ENTRY");
//                 }
//               }              
//             }

//             currentId = data['statuses'][i].id_str;
//             console.log(currentId);

//           }));

//   Meteor._sleepForMs(4000);
// }
// Meteor._sleepForMs(4000);
// }


