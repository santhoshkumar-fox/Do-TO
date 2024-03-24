import { Account, Client, Databases, ID, Query, Teams } from "appwrite";
import { TOAST_STATUS, showToast } from "../components/toasts";


const db_id = process.env.API_DB_ID;
const todo_list_collection_id = process.env.API_TODO_COLLLECTION_ID

const client = new Client()
    .setEndpoint(process.env.API_URL) // Your API Endpoint
    .setProject(process.env.API_PROJECT_ID); // Your project ID

  const account = new Account(client);
  const teams = new Teams(client);

  export const signUpCallback = (cred,onSuccessCallback,onErrorCallback,onSettleCallback) => {
    try {
      if((cred.email).trim() != '' && cred.password.trim() != '' && cred.user){
        const promise = account.create(ID.unique(),cred.email.trim(),cred.password,cred.user.trim());
        promise.then(
          (response)=>{
            onSuccessCallback();
            onSettleCallback()
            // Success

          },
          (error)=>{
            onErrorCallback()
            console.log(error); // Failure
          },
         
        );
      }else{
        showToast(TOAST_STATUS.info,'Please fill all fields',null);
        onSettleCallback()
      }
    } catch (error) {
      onErrorCallback()
      
    }
    
  };

  export const loginCallback = ({cred,successCallback=()=>{},errorCallback=()=>{},settleCallback=()=>{}}) => {
    try {
      if((cred.email).trim() != '' && cred.password.trim() != ''){
        const promise = account.createEmailSession(cred.email, cred.password);
    promise.then(
      (response)=>{
        successCallback(response)
        settleCallback(response) // Success
      },
      (error)=>{
        errorCallback(String(error));
        settleCallback(String(error));
      },
    );
      }else{
        
      }
    } catch (error) {
      errorCallback(String(error))
      console.log(String(error))
    }
    
  };


export const getCurrentUser = async()=>{
    try {
        return(await account.get())
    } catch (error) {
        console.log('Something failed in getCurrentUser')
        
    }
  }

// Data base

const DB = new Databases(client)

export const postData = async(value,onSuccessCallback,onErrorCallback)=>{
  try {
    const res  = await DB.createDocument(db_id,todo_list_collection_id,ID.unique(),value)
    if(!!res.$collectionId){
      onSuccessCallback();
      return res
    }else{
      onErrorCallback('failed');
    }
} catch (error) {
  onErrorCallback(error)
    console.log('Something failed in post data',error)
}
}

export const getData = async(queryValue=[],onSuccessCallback=()=>{},onErrorCallback=()=>{})=>{
  try {
    const res  = await DB.listDocuments(db_id,todo_list_collection_id,queryValue)
    if(!!res.documents){
      onSuccessCallback(res.documents);
      return res.documents
    }else{
      onErrorCallback('failed');
    }
} catch (error) {
  onErrorCallback(error)
    console.log('Something failed in get data',error)
}
}

export const putData = async(value,docID,onSuccessCallback,onErrorCallback)=>{
  try {
    const res  = await DB.updateDocument(db_id,todo_list_collection_id,docID,value)
    // createDocument(db_id,todo_list_collection_id,ID.unique(),value)
    if(!!res.$collectionId){
      onSuccessCallback();
      return res
    }else{
      onErrorCallback('failed');
    }
} catch (error) {
  onErrorCallback(error)
    console.log('Something failed in post data',error)
}
}

export const DeleteData = async(docID,onSuccessCallback,onErrorCallback)=>{
  try {
    const res  = await DB.deleteDocument(db_id,todo_list_collection_id,docID)
    if(!!res.message == ''){
      onSuccessCallback();
      return res
    }else{
      onErrorCallback('failed');
    }
} catch (error) {
  onErrorCallback(error)
    console.log('Something failed in post data',error)
}
}

// export const createTeam = async(docID,onSuccessCallback,onErrorCallback)=>{
//   try {
    
//     const res  = await teams.create(
//       'teachers',
//       'Teachers',
//       ['maths', 'sciences', 'arts', 'literature']
//   );
//     console.log(res)
//     // if(!!res.message == ''){
//     //   onSuccessCallback();
//     //   return res
//     // }else{
//     //   onErrorCallback('failed');
//     // }
// } catch (error) {
//   onErrorCallback(error)
//     console.log('Something failed in post data',error)
// }
// }

// export const addTeamMember = async(docID,onSuccessCallback,onErrorCallback)=>{
//   try {
//     console.log('add a ')
//     const res  = await teams.createMembership(
//       'teachers',
//       ["maths"],
//       "skvj@gmail.com",
//       null,
//       null,'http://localhost:3000/','vellingiri'
//       );
//     console.log(res)
//     // if(!!res.message == ''){
//     //   onSuccessCallback();
//     //   return res
//     // }else{
//     //   onErrorCallback('failed');
//     // }
// } catch (error) {
//   // onErrorCallback(error)
//     console.log('Something failed in post data',error)
// }
// }