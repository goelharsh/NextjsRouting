import { redirect } from "next/navigation";

export default function ProfileData(){
    // as the data is null so profile data page will automatically redirect to the profile page 
    const profileData = null;
    if(profileData===null){
        redirect('cart?search=clothes');
    }
    return (
        <h1>ProfileData page</h1>
    )
}