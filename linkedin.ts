interface linkedinProfile {
    // mandatory interface properties 
    profile_name: string,
    qualifications: Array<string>,
    work_experience: Array<object>,
    employment_status: boolean
    // optional interface properties
    certifications?: Array<string>,
    awards?: Array<string>,
    recommendations?: Array<object>,


}
const userData: linkedinProfile = {
        profile_name: 'Anush Gupta',
        qualifications:['BscIT','MCA'],
        work_experience:[{
            company_name:'TCS',
            experience:'6 years'
        },
        {
            company_name:'Accenture',
            experience:'2 years'
        
        }

        ],
        certifications:['Google Cloud Engineer','AWS Solutions Architect','Cyber Security Specialist'],
        employment_status:true
}
console.log('we have collected the following data',userData)