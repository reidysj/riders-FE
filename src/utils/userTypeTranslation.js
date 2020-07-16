export const userTypeTranslation = userType =>{
    if(userType === 'cvr'){
        return 'Cherry Valley Riders Member'
    } else if(userType === 'or'){
        return 'Member of another Riders chapter'
    } else if(userType === 'rl'){
        return 'Cherry Valley Legionaire interested in joining the Riders'
    } else {
        return 'Other'
    }
}
