# Module 18: NoSQL / Social Network API

## Description
This is the challenge for Module 18 of the coding bootcamp. This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.

### User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Postman for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Postman
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Postman
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Application
You can see how the project works in the video [here](https://drive.google.com/file/d/1oGtLt5Gb66MmWjERaavgtKIIzv2Eunll/view?usp=sharing).

Once you start the server, you can use the API routes to GET, POST, PUT, and DELETE users, users' friends, thoughts, and reactions to thoughts. Below are some examples of those actions in Postman.

GET all users
![GET ALL](/assets/GET_all.png)

GET single thought by id
![GET ONE](/assets/GET_one.png)

POST new user
![POST USER](/assets/POST_user.png)

PUT (update) thought by id
![PUT](/assets/PUT.png)

DELETE thought by id
![DELETE THOUGHT](/assets/DELETE_thought.png)

POST friend to user by id
![POST FRIEND](/assets/POST_friend.png)

DELETE reaction from thought by id
![DELETE REACTION](/assets/DELETE_reaction.png)

## Citations
ramon22 (2014). "Mongoose - validate email syntax." https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax. (/models/User.js)