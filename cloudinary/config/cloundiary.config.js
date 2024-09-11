import cloudinary  from 'cloudinary'

const cloudinaryConnect = async ()=>{
  try {
    cloudinary.config({
      cloud_name : process.env.CLOUD_NAME,
       api_key :process.env.API_KEY,
      api_secret : process.env.API_SECRET,
    })
    console.log("Cloudinary is successfully Fetched!");
    
  } catch (error) {
    console.log("there are errors in fetching Cloudinary " , error.message)
  }
}
export default cloudinaryConnect;  