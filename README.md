WeeHive Server
# Detailed API Documents

**Template**

| Title | A short phrase describing what the API does |
| --- | --- |
| Method | Whether it is GET, POST, PATCH, PUT or DELETE |
| Endpoint Path | The endpoint URL with URL with the possible parameters in <> |
| Body | Expected JSON object for the body for POST, PATCH and PUT requests |
| Parameters | Description of the parameters in the body and the URL |
| Expected Response | Expected JSON object for the response |

User APIs:

| Title | Get all user |
| --- | --- |
| Method | GET |
| Endpoint Path | api/user |
| Body | N/A |
| Parameters | N/A |
| Expected Response | [
{
"userName": "weeHiveUser 01",
"password": "password",
"email": "mailto:hello@hello.com",
"adminType": 1,
"icon": "defaultUserIcon.png",
"aboutMe": "Hi! I am a new beekeeper!",
"hiveId": [],
"createdAt": "2023-03-23T12:54:38.059Z",
"updatedAt": "2023-03-23T12:54:38.059Z",
"_id": "641c4c0e43bbd4897a0a18cf",
"userId": "641c4c0e43bbd4897a0a18cf"
},
{
"userName": "weeHiveUser 02",
"password": "password",
"email": "mailto:hello@hello.com",
"adminType": 1,
"icon": "defaultUserIcon.png",
"aboutMe": "Hi! I am a new beekeeper!",
"hiveId": [],
"createdAt": "2023-03-23T12:54:45.400Z",
"updatedAt": "2023-03-23T12:54:45.400Z",
"_id": "641c4c1543bbd4897a0a18d2",
"userId": "641c4c1543bbd4897a0a18d2"
},
{
"userName": "weeHiveUser 03",
"password": "password",
"email": "mailto:hello@hello.com",
"adminType": 1,
"icon": "defaultUserIcon.png",
"aboutMe": "Hi! I am a new beekeeper!",
"hiveId": [],
"createdAt": "2023-03-23T12:54:52.641Z",
"updatedAt": "2023-03-23T12:54:52.641Z",
"_id": "641c4c1c43bbd4897a0a18d5",
"userId": "641c4c1c43bbd4897a0a18d5"
}
] |

| Title | Get user by id |
| --- | --- |
| Method | GET |
| Endpoint Path | api/user/:userId |
| Body | N/A |
| Parameters | • userId: the unique ID of the user to retrieve the details for |
| Expected Response | {
"userName": "weeHiveUser 03",
"password": "password",
"email": "mailto:hello@hello.com",
"adminType": 1,
"icon": "defaultUserIcon.png",
"aboutMe": "Hi! I am a new beekeeper!",
"hiveId": [],
"createdAt": "2023-03-23T12:54:52.641Z",
"updatedAt": "2023-03-23T12:54:52.641Z",
"_id": "641c4c1c43bbd4897a0a18d5",
"userId": "641c4c1c43bbd4897a0a18d5"
} |

| Title | Add new user |
| --- | --- |
| Method | POST |
| Endpoint Path | api/user |
| Body | {
"userName": "weeHiveUser 03",
"password": "password",
"email": "mailto:hello@hello.com",
"adminType": 1,
"icon": "defaultUserIcon.png",
"aboutMe": "Hi! I am a new beekeeper!",
} |
| Parameters | • userName (string): user name
• password (string): password, will be encrypted
• email (string): user email address
• adminType(Number): user type, 1=admin, 2=collaborator
• icon(string): icon file name
• aboutMe (string): user description |
| Expected Response | {
  "status": 200
} |

| Title | Update user by userId |
| --- | --- |
| Method | PUT |
| Endpoint Path | api/user/:userId |
| Body | {
"userName": "weeHiveUser 03",
"password": "password",
"email": "mailto:hello@hello.com",
"adminType": 1,
"icon": "defaultUserIcon.png",
"aboutMe": "Hi! I am a new beekeeper!",
} |
| Parameters | • userName (string): user name
• password (string): password, will be encrypted
• email (string): user email address
• adminType(Number): user type, 1=admin, 2=collaborator
• icon(string): icon file name
• aboutMe (string): user description |
| Expected Response | {
  "status": 200,
   message: "User was updated successfully."
} |

| Title | Remove user by userId |
| --- | --- |
| Method | DELETE |
| Endpoint Path | api/user/:userId |
| Body | N/A |
| Parameters | N/A |
| Expected Response | {
  "status": 200
} |

| Title | Find all User which adminType contains 'kw’ |
| --- | --- |
| Method | GET |
| Endpoint Path | api/user?adminType=[kw] |
| Body | N/A |
| Parameters | adminType: the type of the user : 1:admin 2:collaborator |
| Expected Response | [{
"userName": "weeHiveUser 03",
"password": "password",
"email": "mailto:hello@hello.com",
"adminType": 1,
"icon": "defaultUserIcon.png",
"aboutMe": "Hi! I am a new beekeeper!",
"hiveId": [],
"createdAt": "2023-03-23T12:54:52.641Z",
"updatedAt": "2023-03-23T12:54:52.641Z",
"_id": "641c4c1c43bbd4897a0a18d5",
"userId": "641c4c1c43bbd4897a0a18d5"
}] |

Hive APIs:

| Title | Get all hive |
| --- | --- |
| Method | GET |
| Endpoint Path | api/hive |
| Body | N/A |
| Parameters | N/A |
| Expected Response | [
{
"hiveName": "myHive 01",
"icon": "defaultHiveIcon.jpg",
"inspection": [],
"location": [
"Singapore"
],
"queenName": "myQueen",
"frames": [],
"measurementsIds": [],
"createdAt": "2023-03-23T12:52:40.789Z",
"updatedAt": "2023-03-23T12:52:40.789Z",
"_id": "641c4b9843bbd4897a0a18c0",
"hiveId": "641c4b9843bbd4897a0a18c0"
},
{
"hiveName": "myHive02",
"icon": "defaultHiveIcon.jpg",
"inspection": [],
"location": [
"Singapore"
],
"queenName": "myQueen",
"frames": [],
"measurementsIds": [],
"createdAt": "2023-03-23T12:52:49.340Z",
"updatedAt": "2023-03-23T12:52:49.340Z",
"_id": "641c4ba143bbd4897a0a18c3",
"hiveId": "641c4ba143bbd4897a0a18c3"
},
{
"hiveName": "myHive03",
"icon": "defaultHiveIcon.jpg",
"inspection": [],
"location": [
"Singapore"
],
"queenName": "myQueen",
"frames": [],
"measurementsIds": [],
"createdAt": "2023-03-23T12:52:55.402Z",
"updatedAt": "2023-03-23T12:52:55.402Z",
"_id": "641c4ba743bbd4897a0a18c6",
"hiveId": "641c4ba743bbd4897a0a18c6"
}
] |

| Title | Get hive by id |
| --- | --- |
| Method | GET |
| Endpoint Path | api/hive/:hiveId |
| Body | N/A |
| Parameters | • hiveId: the unique ID of the user to retrieve the details for |
| Expected Response | {
"hiveName": "myHive02",
"icon": "defaultHiveIcon.jpg",
"inspection": [],
"location": [
"Singapore"
],
"queenName": "myQueen",
"frames": [],
"measurementsIds": [],
"createdAt": "2023-03-23T12:52:49.340Z",
"updatedAt": "2023-03-23T12:52:49.340Z",
"_id": "641c4ba143bbd4897a0a18c3",
"hiveId": "641c4ba143bbd4897a0a18c3"
} |

| Title | Add new hive |
| --- | --- |
| Method | POST |
| Endpoint Path | api/hive |
| Body | {
"hiveName": "myHive02",
"icon": "defaultHiveIcon.jpg",
"inspection": [],
"location": ["Singapore"],
"queenName": "myQueen",
} |
| Parameters | "hiveName"(string): hive name,
"icon"(string): icon file name,
"inspection"(Array of strings): inspection ids,
"location"(string): location,
"queenName"(string): queen name, |
| Expected Response | {
  "status": 200
} |

| Title | Update hive by hivdId |
| --- | --- |
| Method | PUT |
| Endpoint Path | api/hive/:hiveId |
| Body | {
"hiveName": "myHive02",
"icon": "defaultHiveIcon.jpg",
"inspection": [],
"location": [
"Singapore"
],
"queenName": "myQueen",
"frames": [],
"measurementsIds": [],
"createdAt": "2023-03-23T12:52:49.340Z",
"updatedAt": "2023-03-23T12:52:49.340Z",
"_id": "641c4ba143bbd4897a0a18c3",
"hiveId": "641c4ba143bbd4897a0a18c3"
} |
| Parameters | "hiveName"(string): hive name,
"icon"(string): icon file name,
"inspection"(Array of strings): inspection ids,
"location"(string): location,
"queenName"(string): queen name, |
| Expected Response | {
  "status": 200,
   message: "Hive was updated successfully."
} |

| Title | Remove hive by hiveId |
| --- | --- |
| Method | DELETE |
| Endpoint Path | api/hive/:hiveId |
| Body | N/A |
| Parameters | N/A |
| Expected Response | {
  "status": 200
} |

| Title | Find all hive which status is good |
| --- | --- |
| Method | GET |
| Endpoint Path | api/hive?status>=50 |
| Body | N/A |
| Parameters | status: the health status of the hive: >50 means good |
| Expected Response | [
{
"hiveName": "myHive 01",
"icon": "defaultHiveIcon.jpg",
"inspection": [],
"location": [
"Singapore"
],
"queenName": "myQueen",
"frames": [],
"measurementsIds": [],
"createdAt": "2023-03-23T12:52:40.789Z",
"updatedAt": "2023-03-23T12:52:40.789Z",
"_id": "641c4b9843bbd4897a0a18c0",
"hiveId": "641c4b9843bbd4897a0a18c0"
},
{
"hiveName": "myHive02",
"icon": "defaultHiveIcon.jpg",
"inspection": [],
"location": [
"Singapore"
],
"queenName": "myQueen",
"frames": [],
"measurementsIds": [],
"createdAt": "2023-03-23T12:52:49.340Z",
"updatedAt": "2023-03-23T12:52:49.340Z",
"_id": "641c4ba143bbd4897a0a18c3",
"hiveId": "641c4ba143bbd4897a0a18c3"
}] |