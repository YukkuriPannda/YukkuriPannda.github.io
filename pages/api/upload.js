import { storage } from "../../helpers/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
 
 
//single image file upload
export const postImage = async(image=null) => {
    let uploadResult = '';
 
    if(image.name){
        const storageRef = ref(storage);
        const ext = image.name.split('.').pop();
        const hashName = Math.random().toString(36).slice(-8);
        const fullPath = '/images/' + hashName + '.' + ext;
        const uploadRef = ref(storageRef, fullPath);
 
        // 'file' comes from the Blob or File API
        await uploadBytes(uploadRef, image).then(async function(result) {
            console.log(result);
            console.log('Uploaded a blob or file!');
 
            await getDownloadURL(uploadRef).then(function(url){
                uploadResult = url;
            });
        });
    }
    return uploadResult;
}