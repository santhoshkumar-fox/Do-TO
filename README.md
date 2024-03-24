markdown
# DO-TO - POC for Job Seeking

Welcome to DO-TO, a proof of concept test for job seeking functionality implemented in React Native. This project aims to demonstrate the usage of React Native along with the Appwrite development platform.

## Installation

To get started with DO-TO, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` or `yarn` to install all the necessary dependencies.
4. For iOS, navigate to the `ios` directory and run `pod install`.

## Project Overview

DO-TO consists of the following pages:

1. **SignIn**: Users can sign in to their accounts using this page.
2. **SignUp**: New users can create an account using this page.
3. **Dashboard**: Contains the Todo CRUD operations UI and flows for each user.

## App Usage

DO-TO utilizes Appwrite for user authentication and to save specific todos against logged-in users. Here's how it works:

- When a user signs in or signs up, their credentials are authenticated using Appwrite's authentication services.
- Once authenticated, users can view their personalized dashboard, where they can perform CRUD operations on their todos.
- Each todo created by a user is associated with their account using Appwrite's database services, ensuring that todos are specific to each user.
- Users can create, read, update, and delete todos seamlessly within the app, with Appwrite handling the backend operations securely.

## Packages Used

DO-TO utilizes the following packages:

| Package                                           | Version |
|---------------------------------------------------|---------|
| @react-native-community/blur                      | ^4.4.0  |
| @react-native-masked-view/masked-view             | ^0.3.1  |
| @react-navigation/native                          | ^6.1.15 |
| @react-navigation/stack                           | ^6.3.27 |
| appwrite                                          | 13.0.2  |
| react                                             | 18.2.0  |
| react-native                                      | 0.73.6  |
| react-native-bootsplash                           | ^5.4.1  |
| react-native-dotenv                               | ^3.4.11 |
| react-native-gesture-handler                      | ^2.15.0 |
| react-native-keyboard-aware-scroll-view           | ^0.9.5  |
| react-native-pager-view                           | ^6.2.3  |
| react-native-raw-bottom-sheet                     | ^3.0.0  |
| react-native-reanimated                          | ^3.8.0  |
| react-native-safe-area-context                    | ^4.9.0  |
| react-native-toast-message                        | ^2.2.0  |
| react-native-vector-icons                         | ^10.0.3 |

## Highlights

One of the notable features of DO-TO is the utilization of spring animation, enhancing the user experience with fluid and dynamic transitions.

## Implementation Details

- [x] **Android Splash Screen**: Implemented a splash screen for Android.
- [x] **Android App Icon**: Added app icon for Android.
- [ ] **iOS Implementation**: Package implementation pending for iOS.

## Disclaimer

Please note that the team invite flow feature is not implemented in this version of the DO-TO app. However, if you wish to implement this feature, you can do so by extending the functionality using Appwrite's team management APIs or other relevant services.


## Feedback and Contribution

If you have any feedback or suggestions for improvement, feel free to open an issue or create a pull request. Contributions are always welcome!

Thank you for this Opportunity MUSHROOM!
